import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { useTranslation } from 'react-i18next';
import { 
  Settings, 
  BookOpen, 
  Video, 
  Users, 
  BarChart3, 
  Plus, 
  Edit, 
  Trash2,
  Upload,
  Eye,
  MessageSquare,
  Shield
} from 'lucide-react';

const AdminPanel = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: isArabic ? 'إجمالي الكتب' : 'Total Books',
      value: '24',
      icon: BookOpen,
      color: 'emerald'
    },
    {
      title: isArabic ? 'إجمالي الفيديوهات' : 'Total Videos',
      value: '18',
      icon: Video,
      color: 'blue'
    },
    {
      title: isArabic ? 'المستخدمين النشطين' : 'Active Users',
      value: '1,247',
      icon: Users,
      color: 'purple'
    },
    {
      title: isArabic ? 'التحميلات اليوم' : 'Downloads Today',
      value: '89',
      icon: BarChart3,
      color: 'orange'
    }
  ];

  const recentBooks = [
    { id: 1, title: 'التمهيد في فهم التصوف السديد', author: 'د. أحمد خميس شتيه', status: 'published' },
    { id: 2, title: 'أبجدية التصوف', author: 'الشيخ محمد زكي الدين إبراهيم', status: 'draft' },
    { id: 3, title: 'معالم المشروع والممنوع', author: 'الشيخ محمد زكي الدين إبراهيم', status: 'review' }
  ];

  const recentVideos = [
    { id: 1, title: 'من هو الدكتور أحمد شتيه؟', duration: '9:48', status: 'published' },
    { id: 2, title: 'الرد على من يشتمون السادة الصوفية', duration: '3:52', status: 'published' },
    { id: 3, title: 'أبيات مهمة تبين رسالة الشيخ', duration: '4:50', status: 'processing' }
  ];

  const tabs = [
    { id: 'overview', label: isArabic ? 'نظرة عامة' : 'Overview', icon: BarChart3 },
    { id: 'books', label: isArabic ? 'إدارة الكتب' : 'Manage Books', icon: BookOpen },
    { id: 'videos', label: isArabic ? 'إدارة الفيديوهات' : 'Manage Videos', icon: Video },
    { id: 'users', label: isArabic ? 'إدارة المستخدمين' : 'Manage Users', icon: Users },
    { id: 'settings', label: isArabic ? 'الإعدادات' : 'Settings', icon: Settings }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'text-green-600 bg-green-100';
      case 'draft': return 'text-yellow-600 bg-yellow-100';
      case 'review': return 'text-blue-600 bg-blue-100';
      case 'processing': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status) => {
    const statusMap = {
      published: isArabic ? 'منشور' : 'Published',
      draft: isArabic ? 'مسودة' : 'Draft',
      review: isArabic ? 'قيد المراجعة' : 'Under Review',
      processing: isArabic ? 'قيد المعالجة' : 'Processing'
    };
    return statusMap[status] || status;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`flex items-center justify-between mb-8 ${isArabic ? 'flex-row-reverse' : ''}`}>
          <div className={isArabic ? 'text-right' : 'text-left'}>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {isArabic ? 'لوحة تحكم المشرف' : 'Admin Dashboard'}
            </h1>
            <p className="text-gray-600">
              {isArabic ? 'إدارة محتوى مشروع تصوف العلماء' : 'Manage Scholars\' Sufism Project Content'}
            </p>
          </div>
          <div className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}>
            <Shield className="w-8 h-8 text-emerald-600" />
            <span className="text-sm text-gray-500">
              {isArabic ? 'مشرف' : 'Administrator'}
            </span>
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
                  ? 'bg-emerald-600 text-white' 
                  : 'border-emerald-200 text-emerald-700 hover:bg-emerald-50'
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
              {stats.map((stat, index) => (
                <Card key={index} className="card-hover border-gray-200">
                  <CardContent className="p-6">
                    <div className={`flex items-center justify-between ${isArabic ? 'flex-row-reverse' : ''}`}>
                      <div className={isArabic ? 'text-right' : 'text-left'}>
                        <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                        <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                      </div>
                      <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                        <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Content */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Books */}
              <Card className="border-emerald-100">
                <CardHeader>
                  <div className={`flex items-center justify-between ${isArabic ? 'flex-row-reverse' : ''}`}>
                    <CardTitle className="text-emerald-800">
                      {isArabic ? 'الكتب الحديثة' : 'Recent Books'}
                    </CardTitle>
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                      <Plus className="w-4 h-4 mr-2" />
                      {isArabic ? 'إضافة كتاب' : 'Add Book'}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBooks.map((book) => (
                      <div key={book.id} className={`flex items-center justify-between p-3 bg-gray-50 rounded-lg ${isArabic ? 'flex-row-reverse' : ''}`}>
                        <div className={isArabic ? 'text-right' : 'text-left'}>
                          <h4 className="font-medium text-gray-800">{book.title}</h4>
                          <p className="text-sm text-gray-600">{book.author}</p>
                        </div>
                        <div className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(book.status)}`}>
                            {getStatusText(book.status)}
                          </span>
                          <div className={`flex gap-1 ${isArabic ? 'flex-row-reverse' : ''}`}>
                            <Button size="sm" variant="ghost" className="p-1">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="p-1">
                              <Edit className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Videos */}
              <Card className="border-blue-100">
                <CardHeader>
                  <div className={`flex items-center justify-between ${isArabic ? 'flex-row-reverse' : ''}`}>
                    <CardTitle className="text-blue-800">
                      {isArabic ? 'الفيديوهات الحديثة' : 'Recent Videos'}
                    </CardTitle>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Upload className="w-4 h-4 mr-2" />
                      {isArabic ? 'رفع فيديو' : 'Upload Video'}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentVideos.map((video) => (
                      <div key={video.id} className={`flex items-center justify-between p-3 bg-gray-50 rounded-lg ${isArabic ? 'flex-row-reverse' : ''}`}>
                        <div className={isArabic ? 'text-right' : 'text-left'}>
                          <h4 className="font-medium text-gray-800">{video.title}</h4>
                          <p className="text-sm text-gray-600">{video.duration}</p>
                        </div>
                        <div className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(video.status)}`}>
                            {getStatusText(video.status)}
                          </span>
                          <div className={`flex gap-1 ${isArabic ? 'flex-row-reverse' : ''}`}>
                            <Button size="sm" variant="ghost" className="p-1">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="p-1">
                              <Edit className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Other tabs content would go here */}
        {activeTab !== 'overview' && (
          <Card className="p-8 text-center">
            <CardContent>
              <div className="text-gray-500 mb-4">
                <Settings className="w-16 h-16 mx-auto mb-4 opacity-50" />
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

export default AdminPanel;

