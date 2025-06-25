import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Star, Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle.jsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.jsx';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
    document.body.className = isArabic ? 'font-arabic' : 'font-english';
  }, [isArabic, i18n.language]);

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/books', label: t('books') },
    { path: '/videos', label: t('videos') },
    { path: '/prayers', label: t('prayers') },
    { path: '/about', label: t('about') }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Language Toggle and Mobile Menu Button - Now on the right in RTL (swapped position) */}
          <div className={`flex items-center gap-2 ${isArabic ? 'order-3' : 'order-1'}`}>
            <LanguageToggle />
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className={`hidden lg:flex gap-1 ${isArabic ? 'order-2' : 'order-2'}`}>
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={`text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200 ${
                    isActive(item.path) ? 'text-emerald-600 bg-emerald-50 font-medium' : ''
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Logo and Title - Now on the left in RTL (swapped position) */}
          <div className={`flex items-center ${isArabic ? 'order-1' : 'order-3'}`}>
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Star className="w-7 h-7 text-white" />
              </div>
              <div className={isArabic ? 'text-right' : 'text-left'}>
                <h1 className="text-xl font-bold text-gray-800 leading-tight">
                  {t('project_title')}
                </h1>
                <p className="text-sm text-gray-600 leading-tight">
                  {t('project_subtitle')}
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-emerald-100 pt-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant="ghost" 
                    className={`w-full text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 ${
                      isActive(item.path) ? 'text-emerald-600 bg-emerald-50 font-medium' : ''
                    } ${isArabic ? 'justify-end text-right' : 'justify-start text-left'}`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;

