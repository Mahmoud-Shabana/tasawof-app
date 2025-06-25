import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Video, Play, Clock, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const VideosPage = () => {
  const { t } = useTranslation();

  const videos = [
    {
      id: 1,
      titleKey: "video_1_title",
      speaker: "د. أحمد خميس شتيه",
      speakerEn: "Dr. Ahmed Khamis Sheta",
      descriptionKey: "video_1_description",
      duration: "9:48",
      views: "439",
      category: "تعريفية",
      categoryEn: "Introductory",
      videoUrl: "https://www.youtube.com/embed/DRaI8HuBbQ0",
      speakerImage: "/dr-ahmed-sheta.png"
    },
    {
      id: 2,
      titleKey: "video_2_title",
      speaker: "قناة تصوف العلماء",
      speakerEn: "Scholars' Sufism Channel",
      descriptionKey: "video_2_description",
      duration: "3:52",
      views: "382",
      category: "دفاع عن التصوف",
      categoryEn: "Defense of Sufism",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      speakerImage: "/dr-ahmed-sheta.png"
    },
    {
      id: 3,
      titleKey: "video_3_title",
      speaker: "قناة تصوف العلماء",
      speakerEn: "Scholars' Sufism Channel",
      descriptionKey: "video_3_description",
      duration: "4:50",
      views: "261",
      category: "شعر صوفي",
      categoryEn: "Sufi Poetry",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      speakerImage: "/dr-ahmed-sheta.png"
    },
    {
      id: 4,
      titleKey: "video_4_title",
      speaker: "د. أحمد خميس شتيه",
      speakerEn: "Dr. Ahmed Khamis Sheta",
      descriptionKey: "video_4_description",
      duration: "45:14",
      views: "139",
      category: "شرح كتب",
      categoryEn: "Book Explanations",
      videoUrl: "https://www.youtube.com/embed/WhAKPUlI-Ms",
      speakerImage: "/dr-ahmed-sheta.png"
    },
    {
      id: 5,
      titleKey: "video_5_title",
      speaker: "د. أحمد شتيه",
      speakerEn: "Dr. Ahmed Sheta",
      descriptionKey: "video_5_description",
      duration: "12:15",
      views: "966",
      category: "فقه",
      categoryEn: "Fiqh",
      videoUrl: "https://www.youtube.com/embed/dmAYCzxm2Ws",
      speakerImage: "/dr-ahmed-sheta.png"
    },
    {
      id: 6,
      titleKey: "video_6_title",
      speaker: "قناة تصوف العلماء",
      speakerEn: "Scholars' Sufism Channel",
      descriptionKey: "video_6_description",
      duration: "1:26",
      views: "171",
      category: "نصائح",
      categoryEn: "Advice",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      speakerImage: "/dr-ahmed-sheta.png"
    }
  ];

  const categories = [
    t('all_categories'),
    t('introductory'),
    t('defense_of_sufism'),
    t('book_explanations'),
    t('fiqh'),
    t('sufi_poetry'),
    t('advice')
  ];

  const isArabic = t('home') === 'الرئيسية';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Video className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('lectures_videos')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('lectures_videos_content')}
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 ? 
                "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : 
                "border-blue-200 text-blue-700 hover:bg-blue-50"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="hover:shadow-lg transition-all duration-300 border-blue-100 overflow-hidden">
              {/* Embedded Video */}
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src={video.videoUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={t(video.titleKey)}
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>

              <CardHeader>
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {isArabic ? video.category : video.categoryEn}
                </div>
                <CardTitle className="text-lg text-gray-800 line-clamp-2">
                  {t(video.titleKey)}
                </CardTitle>
                <CardDescription className="text-blue-700 font-medium flex items-center">
                  {video.speakerImage && (
                    <img 
                      src={video.speakerImage} 
                      alt={isArabic ? video.speaker : video.speakerEn}
                      className="w-6 h-6 rounded-full mr-2 object-cover"
                    />
                  )}
                  <User className="w-4 h-4 mr-1" />
                  {isArabic ? video.speaker : video.speakerEn}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                  {t(video.descriptionKey)}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {video.duration}
                  </div>
                  <span>{video.views} {t('views')}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8"
          >
            {t('load_more_videos')}
          </Button>
        </div>

        {/* About Dr. Ahmed Sheta Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src="/dr-ahmed-sheta.png" 
                alt="د. أحمد خميس شتيه"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="flex-1 text-center md:text-right">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {isArabic ? "د. أحمد خميس شتيه" : "Dr. Ahmed Khamis Sheta"}
              </h3>
              <p className="text-blue-700 font-medium mb-3">
                {isArabic ? "مؤسس مشروع تصوف العلماء" : "Founder of Scholars' Sufism Project"}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {isArabic 
                  ? "عالم ومفكر إسلامي متخصص في التصوف والعلوم الشرعية، يسعى لتجديد الخطاب الصوفي وربطه بالمنهج العلمي الأصيل المبني على الكتاب والسنة."
                  : "An Islamic scholar and thinker specializing in Sufism and Islamic sciences, seeking to renew Sufi discourse and link it to the authentic scientific methodology based on the Quran and Sunnah."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosPage;

