import React from 'react';
import { Star, Mail, Phone, Facebook, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const isArabic = t('home') === 'الرئيسية';

  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <div className={`flex items-center mb-4 ${isArabic ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xl font-bold">{t('project_title')}</h4>
            </div>
            <p className="text-gray-300 mb-4">
              {t('footer_about_desc')}
            </p>
            <p className="text-sm text-gray-400">
              {t('project_subtitle')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4">{t('footer_quick_links')}</h5>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/books" className="hover:text-emerald-400 transition-colors">
                  {t('books')}
                </Link>
              </li>
              <li>
                <Link to="/videos" className="hover:text-emerald-400 transition-colors">
                  {t('videos')}
                </Link>
              </li>
              <li>
                <Link to="/prayers" className="hover:text-emerald-400 transition-colors">
                  {t('prayers')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors">
                  {t('about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold mb-4">{t('footer_contact_title')}</h5>
            <div className="space-y-3 text-gray-300">
              <div className={`flex items-center ${isArabic ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">{t('footer_contact_email')}</span>
              </div>
              <div className={`flex items-center ${isArabic ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">{t('footer_contact_phone')}</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h5 className="text-lg font-semibold mb-4">{t('footer_follow_us')}</h5>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              {isArabic 
                ? 'تابعنا على وسائل التواصل الاجتماعي للحصول على آخر التحديثات'
                : 'Follow us on social media for the latest updates'
              }
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            <span>{t('footer_rights')}</span>
            <style jsx>{`
              @keyframes heartbeat {
                0% { transform: scale(1); }
                50% { transform: scale(1.2); }
                100% { transform: scale(1); }
              }
              .animate-heartbeat {
                animation: heartbeat 1.5s ease-in-out infinite;
              }
            `}</style>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

