import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { User, Target, BookOpen, Users, Lightbulb, Heart, Star, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  const objectives = [
    {
      icon: Heart,
      title: "معالجة المشكلات النفسية",
      description: "مثل القلق والاكتئاب، من خلال تعميق معاني القرب من الله والذكر المستمر"
    },
    {
      icon: Lightbulb,
      title: "معالجة المشكلات الفكرية",
      description: "عبر الارتباط بشيخ مربٍ ينقل للمريد المفاهيم السليمة ويكون قدوة حسنة"
    },
    {
      icon: Star,
      title: "معالجة المشكلات الجسدية",
      description: "بتربية النفس على الزهد ومجاهدة الشهوات والاعتدال في الملذات"
    },
    {
      icon: Users,
      title: "معالجة المشكلات الاجتماعية",
      description: "مثل الخلافات الأسرية، بغرس الأخلاق الحميدة كالحلم وسعة الصدر والتواضع"
    }
  ];

  const principles = [
    {
      title: "التأصيل الشرعي",
      description: "ربط التصوف بالكتاب والسنة وأقوال السلف الصالح"
    },
    {
      title: "العلم قبل العمل",
      description: "التأكيد على ضرورة تحصيل العلم الشرعي قبل الدخول في الطريق"
    },
    {
      title: "التربية المتدرجة",
      description: "منهج تربوي متدرج يراعي أحوال المريدين ومستوياتهم"
    },
    {
      title: "الوسطية والاعتدال",
      description: "تجنب الغلو والتطرف والالتزام بمنهج الوسطية"
    }
  ];

  const isArabic = t('home') === 'الرئيسية';

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('about_us_title')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {isArabic 
              ? "تعرف على رؤية ورسالة وأهداف مشروع تصوف العلماء"
              : "Learn about the vision, mission, and goals of the Scholars' Sufism Project"
            }
          </p>
        </div>

        {/* About Dr. Ahmed Sheta - Featured Section */}
        <Card className="mb-12 border-emerald-100 bg-gradient-to-r from-emerald-50 to-blue-50">
          <CardHeader>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                <User className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl text-emerald-800">
                {isArabic ? "مؤسس المشروع" : "Project Founder"}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Dr. Ahmed Sheta's Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <img 
                    src="/dr-ahmed-sheta.png" 
                    alt="د. أحمد خميس شتيه"
                    className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Dr. Ahmed Sheta's Information */}
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {isArabic ? "د. أحمد خميس شتيه" : "Dr. Ahmed Khamis Sheta"}
                </h3>
                <p className="text-emerald-700 font-semibold text-lg mb-4">
                  {isArabic 
                    ? "مدرس الدراسات الإسلامية بكلية الآداب، جامعة دمنهور"
                    : "Lecturer of Islamic Studies, Faculty of Arts, Damanhour University"
                  }
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isArabic
                    ? "متخصص في علم التصوف الإسلامي، وله شروح عدة على كتب الصوفية ويقدّر كثيراً دور الصوفية في تربية النفس والتزكية. يسعى من خلال هذا المشروع إلى تجديد الخطاب الصوفي وربطه بالمنهج العلمي الأصيل المبني على الكتاب والسنة."
                    : "Specialist in Islamic Sufism, with several commentaries on Sufi books and great appreciation for the role of Sufism in self-education and purification. Through this project, he seeks to renew Sufi discourse and link it to the authentic scientific methodology based on the Quran and Sunnah."
                  }
                </p>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-emerald-800 mb-3">
                    {isArabic ? "التخصص والاهتمامات:" : "Specialization & Interests:"}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { ar: "علم التصوف الإسلامي", en: "Islamic Sufism" },
                      { ar: "الدراسات الإسلامية", en: "Islamic Studies" },
                      { ar: "التربية والتزكية", en: "Education & Purification" },
                      { ar: "تجديد الخطاب الصوفي", en: "Renewing Sufi Discourse" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm">
                          {isArabic ? item.ar : item.en}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vision and Mission */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-purple-100 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-purple-800">
                  {isArabic ? "الرؤية" : "Vision"}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {isArabic
                  ? "إعادة بعث علم التصوف الذي يبين أبعاد الإسلام الثلاثة: الإسلام والإيمان والإحسان، وتجديد الخطاب الصوفي ليكون مبنياً على الكتاب والسنة، بعيداً عن الخرافات والبدع."
                  : "Reviving the science of Sufism that explains the three dimensions of Islam: Islam, Faith, and Excellence, and renewing Sufi discourse to be based on the Quran and Sunnah, away from superstitions and innovations."
                }
              </p>
            </CardContent>
          </Card>

          <Card className="border-indigo-100 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-indigo-800">
                  {isArabic ? "الرسالة" : "Mission"}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {t('about_us_desc_1')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Objectives */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            {isArabic ? "أهداف المشروع" : "Project Objectives"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <Card key={index} className="border-purple-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                      <objective.icon className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg text-purple-800">{objective.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Principles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            {isArabic ? "المبادئ الأساسية" : "Core Principles"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <Card key={index} className="border-indigo-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-indigo-800">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quote */}
        <Card className="bg-gradient-to-r from-purple-100 to-indigo-100 border-purple-200 mb-12">
          <CardContent className="text-center py-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-4xl text-purple-600 mb-4">"</div>
              <p className="text-xl text-gray-800 leading-relaxed mb-4 italic">
                {isArabic
                  ? "من تفقه ولم يتصوف فقد تفسق، ومن تصوف ولم يتفقه فقد تزندق، ومن جمع بينهما فقد تحقق"
                  : "Whoever learns jurisprudence without Sufism becomes corrupt, whoever practices Sufism without jurisprudence becomes heretical, and whoever combines both achieves realization"
                }
              </p>
              <p className="text-purple-700 font-semibold">
                {isArabic ? "- الإمام مالك رحمه الله -" : "- Imam Malik, may Allah have mercy on him -"}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-emerald-100">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-800">
                {isArabic ? "انضم إلى المشروع" : "Join the Project"}
              </CardTitle>
              <CardDescription className="text-lg">
                {isArabic
                  ? "كن جزءاً من رحلة التعلم والتزكية على منهج أهل السنة والجماعة"
                  : "Be part of the journey of learning and purification according to the methodology of Ahl al-Sunnah wa al-Jama'ah"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white">
                  <BookOpen className="w-4 h-4 mr-2" />
                  {t('explore_books')}
                </Button>
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  <Users className="w-4 h-4 mr-2" />
                  {isArabic ? "تواصل معنا" : "Contact Us"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

