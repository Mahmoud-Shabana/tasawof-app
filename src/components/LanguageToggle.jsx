import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { ChevronDown, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.jsx';

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
    document.body.className = lng === 'ar' ? 'font-arabic' : 'font-english';
  };

  const isArabic = i18n.language === 'ar';

  const languages = [
    {
      code: 'ar',
      name: 'العربية',
      flag: '/flags/egypt.png',
      shortName: 'ع'
    },
    {
      code: 'en', 
      name: 'English',
      flag: '/flags/usa.png',
      shortName: 'EN'
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
  const otherLanguage = languages.find(lang => lang.code !== i18n.language) || languages[1];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={`flex items-center gap-2 border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 px-3 py-2 rounded-lg shadow-sm hover:shadow-md ${
            isArabic ? 'flex-row-reverse' : ''
          }`}
        >
          <div className="flex items-center gap-2">
            <img 
              src={currentLanguage.flag} 
              alt={currentLanguage.name}
              className="w-5 h-4 object-cover rounded-sm border border-gray-200"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-5 h-4 bg-emerald-100 rounded-sm border border-gray-200 items-center justify-center text-xs font-bold text-emerald-700 hidden">
              {currentLanguage.shortName}
            </div>
            <span className="text-sm font-medium">
              {otherLanguage.name}
            </span>
          </div>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align={isArabic ? 'end' : 'start'} 
        className="min-w-[140px] bg-white border-2 border-emerald-100 shadow-lg rounded-lg p-1"
      >
        {languages.map((language) => (
          <DropdownMenuItem 
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-emerald-50 cursor-pointer transition-colors duration-150 ${
              i18n.language === language.code ? 'bg-emerald-50 text-emerald-700 font-medium' : 'text-gray-700'
            } ${isArabic ? 'flex-row-reverse text-right' : 'text-left'}`}
          >
            <img 
              src={language.flag} 
              alt={language.name}
              className="w-6 h-4 object-cover rounded-sm border border-gray-200"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-6 h-4 bg-emerald-100 rounded-sm border border-gray-200 items-center justify-center text-xs font-bold text-emerald-700 hidden">
              {language.shortName}
            </div>
            <span className="text-sm">
              {language.name}
            </span>
            {i18n.language === language.code && (
              <div className="w-2 h-2 bg-emerald-500 rounded-full ml-auto"></div>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;

