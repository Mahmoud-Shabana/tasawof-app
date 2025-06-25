import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { useTranslation } from 'react-i18next';
import { 
  User, 
  BookOpen, 
  Video, 
  Heart, 
  Download, 
  Clock, 
  Star,
  TrendingUp,
  Calendar,
  Award,
  Target,
  BookmarkPlus
} from 'lucide-react';

const UserDashboard = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [activeTab, setActiveTab] = useState('overview');

  const userStats = [
    {
      title: isArabic ? 'الكتب المقروءة' : 'Books Read',
      value: '12',
      icon: BookOpen,
      color: 'emerald',
      change: '+3'
    },
    {
      title: isArabic ? 'الفيديوهات المشاهدة' : 'Videos Watched',
      value: '28',
      icon: Video,
      color: 'blue',
      change: '+5'
    },
    {
      title: isArabic ? 'الصلوات المحفوظة' : 'Saved Prayers',
      value: '15',
      icon: Heart,
      color: 'rose',
      change: '+2'
    },
    {
      title: isArabic ? 'ساعات التعلم' : 'Learning Hours',
      value: '47',
      icon: Clock,
      color: 'purple',
      change: '+8'
    }
  ];

  const recentActivity = [
    {
      type: 'book',
      title: 'التمهيد في فهم التصوف السديد',
      action: isArabic ? 'تم قراءة الفصل الثالث' : 'Read Chapter 3',
      time: isArabic ? 'منذ ساعتين' : '2 hours ago',
      icon: BookOpen,
      color: 'emerald'
    },
    {
      type: 'video',
      title: 'من هو الدكتور أحمد شتيه؟',
      action: isArabic ? 'تمت المشاهدة كاملة' : 'Watched completely',
      time: isArabic ? 'منذ 5 ساعات' : '5 hours ago',
      icon: Video,
      color: 'blue'
    },
    {
      type: 'prayer',
      title: 'الصلاة الإبراهيمية',
      action: isArabic ? 'تمت الإضافة للمفضلة' : 'Added to favorites',
      time: isArabic ? 'أمس' : 'Yesterday',
      icon: Heart,
      color: 'rose'
    }
  ];

  const favoriteBooks = [
    {
      id: 1,
      title: 'أبجدية التصوف',
      author: 'الشيخ محمد زكي الدين إبراهيم',
      progress: 75,
      lastRead: isArabic ? 'منذ يوم' : '1 day ago'
    },
    {
      id: 2,
      title: 'الرسالة القشيرية',
      author: 'الإمام القشيري',
      progress: 45,
      lastRead: isArabic ? 'منذ 3 أيام' : '3 days ago'
    },
    {
      id: 3,
      title: 'إحياء علوم الدين',
      author: 'الإمام الغزالي',
      progress: 20,
      lastRead: isArabic ? 'منذ أسبوع' : '1 week ago'
    }
  ];

  const achievements = [
    {
      title: isArabic ? 'قارئ مبتدئ' : 'Beginner Reader',
      description: isArabic ? 'قرأت 5 كتب' : 'Read 5 books',
      icon: BookOpen,
      earned: true
    },
    {
      title: isArabic ? 'مشاهد نشط' : 'Active Viewer',
      description: isArabic ? 'شاهدت 20 فيديو' : 'Watched 20 videos',
      icon: Video,
      earned: true
    },
    {
      title: isArabic ? 'محب للصلوات' : 'Prayer Lover',
      description: isArabic ? 'حفظت 10 صلوات' : 'Saved 10 prayers',
      icon: Heart,
      earned: true
    },
    {
      title: isArabic ? 'طالب مجتهد' : 'Dedicated Student',
      description: isArabic ? '50 ساعة تعلم' : '50 hours of learning',
      icon: Award,
      earned: false
    }
  ];

  const tabs = [
    { id: 'overview', label: isArabic ? 'نظرة عامة' : 'Overview', icon: TrendingUp },
    { id: 'books', label: isArabic ? 'كتبي' : 'My Books', icon: BookOpen },
    { id: 'videos', label: isArabic ? 'فيديوهاتي' : 'My Videos', icon: Video },
    { id: 'achievements', label: isArabic ? 'الإنجازات' : 'Achievements', icon: Award },
    { id: 'settings', label: isArabic ? 'الإعدادات' : 'Settings', icon: User }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`flex items-center justify-between mb-8 ${isArabic ? 'flex-row-reverse' : ''}`}>
          <div className={isArabic ? 'text-right' : 'text-left'}>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {isArabic ? 'لوحة تحكم المستخدم' : 'User Dashboard'}
            </h1>
            <p className="text-gray-600">
              {isArabic ? 'تتبع تقدمك في رحلة التعلم' : 'Track your learning journey progress'}
            </p>
          </div>
          <div className={`flex items-center gap-3 ${isArabic ? 'flex-row-reverse' : ''}`}>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div className={isArabic ? 'text-right' : 'text-left'}>
              <p className="font-semibold text-gray-800">
                {isArabic ? 'أحمد محمد' : 'Ahmed Mohamed'}
              </p>
              <p className="text-sm text-gray-500">
                {isArabic ? 'طالب علم' : 'Knowledge Seeker'}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className={`flex gap-2 mb-8 overflow-x-auto ${isArabic ? 'flex-row-reverse' : ''}`}>
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 whitespace-nowrap ${
                activeTab === tab.id 
                  ? 'bg-blue-600 text-white' 
                  : 'border-blue-200 text-blue-700 hover:bg-blue-50'
              } ${isArabic ? 'flex-row-reverse' : ''}`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {userStats.map((stat, index) => (
                <Card key={index} className="card-hover border-gray-200">
                  <CardContent className="p-6">
                    <div className={`flex items-center justify-between ${isArabic ? 'flex-row-reverse' : ''}`}>
                      <div className={isArabic ? 'text-right' : 'text-left'}>
                        <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                        <div className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}>
                          <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                          <span className="text-sm text-green-600 font-medium">
                            {stat.change}
                          </span>
                        </div>
                      </div>
                      <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                        <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <Card className="border-blue-100">
                  <CardHeader>
                    <CardTitle className="text-blue-800">
                      {isArabic ? 'النشاط الأخير' : 'Recent Activity'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className={`flex items-center gap-4 p-3 bg-gray-50 rounded-lg ${isArabic ? 'flex-row-reverse' : ''}`}>
                          <div className={`w-10 h-10 bg-${activity.color}-100 rounded-lg flex items-center justify-center`}>
                            <activity.icon className={`w-5 h-5 text-${activity.color}-600`} />
                          </div>
                          <div className={`flex-1 ${isArabic ? 'text-right' : 'text-left'}`}>
                            <h4 className="font-medium text-gray-800">{activity.title}</h4>
                            <p className="text-sm text-gray-600">{activity.action}</p>
                          </div>
                          <span className="text-xs text-gray-500">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Favorite Books */}
              <Card className="border-emerald-100">
                <CardHeader>
                  <CardTitle className="text-emerald-800">
                    {isArabic ? 'الكتب المفضلة' : 'Favorite Books'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {favoriteBooks.map((book) => (
                      <div key={book.id} className="p-3 bg-gray-50 rounded-lg">
                        <div className={`flex items-start justify-between mb-2 ${isArabic ? 'flex-row-reverse' : ''}`}>
                          <div className={isArabic ? 'text-right' : 'text-left'}>
                            <h4 className="font-medium text-gray-800 text-sm">{book.title}</h4>
                            <p className="text-xs text-gray-600">{book.author}</p>
                          </div>
                          <Button size="sm" variant="ghost" className="p-1">
                            <BookmarkPlus className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="mb-2">
                          <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                            <span>{isArabic ? 'التقدم' : 'Progress'}</span>
                            <span>{book.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${book.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">{book.lastRead}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className={`card-hover ${achievement.earned ? 'border-yellow-200 bg-yellow-50' : 'border-gray-200'}`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    achievement.earned ? 'bg-yellow-100' : 'bg-gray-100'
                  }`}>
                    <achievement.icon className={`w-8 h-8 ${
                      achievement.earned ? 'text-yellow-600' : 'text-gray-400'
                    }`} />
                  </div>
                  <h3 className={`font-semibold mb-2 ${
                    achievement.earned ? 'text-yellow-800' : 'text-gray-600'
                  }`}>
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{achievement.description}</p>
                  {achievement.earned && (
                    <div className="flex items-center justify-center gap-1 text-yellow-600">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">
                        {isArabic ? 'مكتمل' : 'Earned'}
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Other tabs content */}
        {!['overview', 'achievements'].includes(activeTab) && (
          <Card className="p-8 text-center">
            <CardContent>
              <div className="text-gray-500 mb-4">
                <Target className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">
                  {isArabic ? 'قيد التطوير' : 'Under Development'}
                </h3>
                <p>
                  {isArabic 
                    ? 'هذا القسم قيد التطوير وسيكون متاحاً قريباً' 
                    : 'This section is under development and will be available soon'
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;

