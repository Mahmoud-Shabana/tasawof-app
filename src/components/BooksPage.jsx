import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { BookOpen, Download, Eye, ExternalLink, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BooksPage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(0);

  const books = [
    {
      id: 1,
      titleKey: "book_1_title",
      authorKey: "book_1_author",
      descriptionKey: "book_1_description",
      pages: 1780,
      category: "التصوف",
      categoryEn: "sufism",
      downloadUrl: "https://archive.org/download/ahmedmadi81_gmail_20160411_2136/qotqoloub.pdf",
      previewUrl: "https://archive.org/details/ahmedmadi81_gmail_20160411_2136/qotqoloub/",
      available: true
    },
    {
      id: 2,
      titleKey: "book_2_title",
      authorKey: "book_2_author",
      descriptionKey: "book_2_description",
      pages: 850,
      category: "التصوف",
      categoryEn: "sufism",
      downloadUrl: "https://archive.org/download/IhyaUlumAlDin/Ihya_Ulum_Al_Din.pdf",
      previewUrl: "https://archive.org/details/IhyaUlumAlDin",
      available: true
    },
    {
      id: 3,
      titleKey: "book_3_title",
      authorKey: "book_3_author",
      descriptionKey: "book_3_description",
      pages: 420,
      category: "التصوف",
      categoryEn: "sufism",
      downloadUrl: "https://archive.org/download/AlRisalaAlQushairiya/Al_Risala_Al_Qushairiya.pdf",
      previewUrl: "https://archive.org/details/AlRisalaAlQushairiya",
      available: true
    },
    {
      id: 4,
      titleKey: "book_4_title",
      authorKey: "book_4_author",
      descriptionKey: "book_4_description",
      pages: 180,
      category: "التصوف",
      categoryEn: "sufism",
      downloadUrl: "https://archive.org/download/AlHikamAlAtaiya/Al_Hikam_Al_Ataiya.pdf",
      previewUrl: "https://archive.org/details/AlHikamAlAtaiya",
      available: true
    },
    {
      id: 5,
      titleKey: "book_5_title",
      authorKey: "book_5_author",
      descriptionKey: "book_5_description",
      pages: 320,
      category: "التصوف",
      categoryEn: "sufism",
      downloadUrl: "https://archive.org/download/ahmedmadi81_gmail_20160411_2136/durratu-bayza.pdf",
      previewUrl: "https://archive.org/details/ahmedmadi81_gmail_20160411_2136/durratu-bayza/",
      available: true
    },
    {
      id: 6,
      titleKey: "book_6_title",
      authorKey: "book_6_author",
      descriptionKey: "book_6_description",
      pages: 280,
      category: "التصوف",
      categoryEn: "sufism",
      downloadUrl: "https://archive.org/download/ahmedmadi81_gmail_20160411_2136/tanbih.pdf",
      previewUrl: "https://archive.org/details/ahmedmadi81_gmail_20160411_2136/tanbih/",
      available: true
    },
    {
      id: 7,
      titleKey: "book_7_title",
      authorKey: "book_7_author",
      descriptionKey: "book_7_description",
      pages: 450,
      category: "التصوف",
      categoryEn: "sufism",
      downloadUrl: "https://archive.org/download/ahmedmadi81_gmail_20160411_2136/walad_ghazali.pdf",
      previewUrl: "https://archive.org/details/ahmedmadi81_gmail_20160411_2136/walad_ghazali/",
      available: true
    },
    {
      id: 8,
      titleKey: "book_8_title",
      authorKey: "book_8_author",
      descriptionKey: "book_8_description",
      pages: 380,
      category: "التصوف",
      categoryEn: "sufism",
      downloadUrl: "https://archive.org/download/ahmedmadi81_gmail_20160411_2136/talhis.pdf",
      previewUrl: "https://archive.org/details/ahmedmadi81_gmail_20160411_2136/talhis/",
      available: true
    }
  ];

  const categories = [
    { ar: "جميع الكتب", en: "all_books", value: "all" },
    { ar: "التصوف", en: "book_category_sufism", value: "sufism" },
    { ar: "الفقه", en: "book_category_fiqh", value: "fiqh" },
    { ar: "العقيدة", en: "book_category_aqeedah", value: "aqeedah" },
    { ar: "التفسير", en: "book_category_tafsir", value: "tafsir" },
    { ar: "الحديث", en: "book_category_hadith", value: "hadith" }
  ];

  const filteredBooks = selectedCategory === 0 
    ? books 
    : books.filter(book => book.categoryEn === categories[selectedCategory].value);

  const isArabic = t('home') === 'الرئيسية';

  const handleDownload = (book) => {
    if (book.available) {
      window.open(book.downloadUrl, '_blank');
    } else {
      const message = isArabic 
        ? 'هذا الكتاب سيكون متاحاً قريباً إن شاء الله'
        : 'This book will be available soon, God willing';
      alert(message);
    }
  };

  const handlePreview = (book) => {
    if (book.available) {
      window.open(book.previewUrl, '_blank');
    } else {
      const message = isArabic 
        ? 'معاينة هذا الكتاب ستكون متاحة قريباً إن شاء الله'
        : 'Preview of this book will be available soon, God willing';
      alert(message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('books_library')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('books_library_content')}
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={selectedCategory === index ? "default" : "outline"}
              className={selectedCategory === index ? 
                "bg-gradient-to-r from-emerald-600 to-blue-600 text-white" : 
                "border-emerald-200 text-emerald-700 hover:bg-emerald-50"
              }
              onClick={() => setSelectedCategory(index)}
            >
              {t(category.en)}
            </Button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <Card key={book.id} className="hover:shadow-lg transition-all duration-300 border-emerald-100 group relative">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-sm text-emerald-600 font-medium mb-2">
                      {t('book_category_sufism')}
                    </div>
                    <CardTitle className="text-lg text-gray-800 group-hover:text-emerald-700 transition-colors">
                      {t(book.titleKey)}
                    </CardTitle>
                    <CardDescription className="text-emerald-700 font-medium mt-1">
                      {t(book.authorKey)}
                    </CardDescription>
                  </div>
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-100 to-blue-100">
                    <img 
                      src="/book-icon.png" 
                      alt="Book Icon" 
                      className="w-12 h-12 object-contain opacity-100"
                    />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">{t(book.descriptionKey)}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{book.pages} {isArabic ? 'صفحة' : 'pages'}</span>
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    <span>PDF</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white"
                    onClick={() => handleDownload(book)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t('download_book')}
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                    onClick={() => handlePreview(book)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    {t('read_book')}
                  </Button>
                </div>
                
                <div className="mt-3 text-xs text-emerald-600 flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  {isArabic ? 'متاح للتحميل والقراءة مجاناً' : 'Available for free download and reading'}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Notice */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              {isArabic ? 'مصادر الكتب' : 'Book Sources'}
            </h3>
            <p className="text-blue-700 text-sm leading-relaxed">
              {isArabic 
                ? 'جميع الكتب المتاحة هنا مأخوذة من مصادر موثوقة ومتاحة للجمهور مجاناً عبر مكتبة الأرشيف الرقمي (Internet Archive). هذه الكتب تمثل التراث الأصيل للتصوف الإسلامي من مؤلفات العلماء المعتبرين.'
                : 'All books available here are sourced from trusted repositories and are freely available to the public through the Internet Archive digital library. These books represent the authentic heritage of Islamic Sufism from recognized scholars.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;

