import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './components/HomePage.jsx';
import BooksPage from './components/BooksPage.jsx';
import VideosPage from './components/VideosPage.jsx';
import PrayersPage from './components/PrayersPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import AdminPanel from './components/AdminPanel.jsx';
import UserDashboard from './components/UserDashboard.jsx';
import './App.css';
import './i18n.js';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

    // Set initial direction and language
    const isArabic = i18n.language === 'ar';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
    document.body.className = isArabic ? 'font-arabic' : 'font-english';

    // Add PWA install prompt
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      
      // Show install button or banner
      const installBanner = document.createElement('div');
      installBanner.innerHTML = `
        <div class="fixed bottom-4 left-4 right-4 bg-emerald-600 text-white p-4 rounded-lg shadow-lg z-50 flex items-center justify-between">
          <span>${isArabic ? 'تثبيت التطبيق على جهازك' : 'Install app on your device'}</span>
          <button id="install-btn" class="bg-white text-emerald-600 px-4 py-2 rounded font-medium">
            ${isArabic ? 'تثبيت' : 'Install'}
          </button>
          <button id="dismiss-btn" class="text-white ml-2">×</button>
        </div>
      `;
      document.body.appendChild(installBanner);

      document.getElementById('install-btn').addEventListener('click', () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          }
          deferredPrompt = null;
          document.body.removeChild(installBanner);
        });
      });

      document.getElementById('dismiss-btn').addEventListener('click', () => {
        document.body.removeChild(installBanner);
      });
    });
  }, [i18n.language]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col mobile-app-container">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/prayers" element={<PrayersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/dashboard" element={<UserDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

