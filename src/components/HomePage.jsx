import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { BookOpen, Video, Heart, Star, Users, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">{t('hero_title')}</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('hero_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/books">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-3">
                  <BookOpen className="w-5 h-5 mr-2" />
                  {t('explore_books')}
                </Button>
              </Link>
              <Link to="/videos">
                <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3">
                  <Video className="w-5 h-5 mr-2" />
                  {t('watch_videos')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">{t('project_dimensions')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-emerald-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-emerald-800">{t('books_library')}</CardTitle>
                <CardDescription>
                  {t('books_library_desc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('books_library_content')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-blue-800">{t('lectures_videos')}</CardTitle>
                <CardDescription>
                  {t('lectures_videos_desc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('lectures_videos_content')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-rose-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-rose-800">{t('prayers_on_prophet')}</CardTitle>
                <CardDescription>
                  {t('prayers_on_prophet_desc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('prayers_on_prophet_content')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-purple-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-purple-800">{t('education_purification')}</CardTitle>
                <CardDescription>
                  {t('education_purification_desc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('education_purification_content')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-amber-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-amber-800">{t('islamic_sciences')}</CardTitle>
                <CardDescription>
                  {t('islamic_sciences_desc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('islamic_sciences_content')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-teal-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-teal-800">{t('ihsan_perfection')}</CardTitle>
                <CardDescription>
                  {t('ihsan_perfection_desc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('ihsan_perfection_content')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">{t('about_project')}</h3>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('about_project_desc_1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('about_project_desc_2')}
              </p>
              <Link to="/about">
                <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white">
                  {t('read_more_about_project')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

