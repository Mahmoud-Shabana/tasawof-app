import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Heart, Copy, Volume2, Star, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PrayersPage = () => {
  const { t } = useTranslation();
  const [copiedId, setCopiedId] = useState(null);
  const [prayerCount, setPrayerCount] = useState(0);

  const isArabic = t('home') === 'الرئيسية';

  const prayers = [
    {
      id: 1,
      titleAr: "الصلاة الإبراهيمية",
      titleEn: "The Ibrahimic Prayer",
      arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى آلِ إِبْرَاهِيمَ، وبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
      english: "O Allah, send prayers upon Muhammad and upon the family of Muhammad, as You sent prayers upon the family of Ibrahim, and bless Muhammad and the family of Muhammad, as You blessed the family of Ibrahim. Indeed, You are Praiseworthy and Glorious.",
      transliteration: "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad, kama sallayta 'ala ali Ibrahim, wa barik 'ala Muhammadin wa 'ala ali Muhammad, kama barakta 'ala ali Ibrahim, innaka hamidun majid",
      sourceAr: "صحيح البخاري",
      sourceEn: "Sahih al-Bukhari",
      virtueAr: "هذه أشهر صيغ الصلاة على النبي ﷺ وأكملها، وهي التي علمها النبي ﷺ لأصحابه",
      virtueEn: "This is the most famous and complete form of prayer upon the Prophet ﷺ, which the Prophet ﷺ taught to his companions",
      categoryAr: "أساسية",
      categoryEn: "Basic"
    },
    {
      id: 2,
      titleAr: "الصلاة المختصرة",
      titleEn: "The Shortened Prayer",
      arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ عَبْدِكَ وَرَسُولِكَ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ، وَبَارِكْ عَلَى مُحَمَّدٍ، وَعَلَى آلِ مُحَمَّدٍ، كَمَا باركت على إبراهيم وآل إبراهيم",
      english: "O Allah, send prayers upon Muhammad, Your servant and messenger, as You sent prayers upon Ibrahim, and bless Muhammad and the family of Muhammad, as You blessed Ibrahim and the family of Ibrahim.",
      transliteration: "Allahumma salli 'ala Muhammadin 'abdika wa rasulika, kama sallayta 'ala Ibrahim, wa barik 'ala Muhammadin wa 'ala ali Muhammad, kama barakta 'ala Ibrahim wa ali Ibrahim",
      sourceAr: "صحيح البخاري",
      sourceEn: "Sahih al-Bukhari",
      virtueAr: "صيغة مختصرة وردت في الصحيح، مناسبة للذكر المتكرر",
      virtueEn: "A shortened form found in authentic hadith, suitable for frequent remembrance",
      categoryAr: "أساسية",
      categoryEn: "Basic"
    },
    {
      id: 3,
      titleAr: "الصلاة الجامعة",
      titleEn: "The Comprehensive Prayer",
      arabic: "اللهم صل وسلم على سيدنا محمد وعلى آله، صلاة تكون لنا طريقاً لقربه، وتأكيداً لحبه، وباباً لجمعنا عليه، وهدية مقبولة بين يديه، وسلم وبارك كذلك أبداً",
      english: "O Allah, send prayers and peace upon our master Muhammad and his family, a prayer that becomes for us a path to his closeness, a confirmation of our love for him, a door to gathering us with him, and an accepted gift in his presence, and grant peace and blessings likewise forever.",
      transliteration: "Allahumma salli wa sallim 'ala sayyidina Muhammadin wa 'ala alihi, salatan takunu lana tariqan li qurbihi, wa ta'kidan li hubbihi, wa baban li jam'ina 'alayhi, wa hadiyyatan maqbulatan bayna yadayhi, wa sallim wa barik kadhalika abada",
      sourceAr: "من الصيغ المأثورة",
      sourceEn: "From traditional formulations",
      virtueAr: "صيغة جامعة تتضمن طلب القرب من النبي ﷺ ومحبته",
      virtueEn: "A comprehensive formulation that includes seeking closeness to the Prophet ﷺ and his love",
      categoryAr: "موسعة",
      categoryEn: "Extended"
    },
    {
      id: 4,
      titleAr: "صلاة الفاتح",
      titleEn: "The Opening Prayer",
      arabic: "اللهم صل على سيدنا محمد الفاتح لما أُغلق، والخاتم لما سبق، ناصر الحق بالحق، والهادي إلى صراطك المستقيم، وعلى آله حق قدره ومقداره العظيم",
      english: "O Allah, send prayers upon our master Muhammad, the opener of what was closed, the seal of what preceded, the supporter of truth with truth, the guide to Your straight path, and upon his family according to his true worth and his great measure.",
      transliteration: "Allahumma salli 'ala sayyidina Muhammadin al-fatihi lima ughliq, wal-khatimi lima sabaq, nasir al-haqqi bil-haqq, wal-hadi ila siratika al-mustaqim, wa 'ala alihi haqqa qadrihi wa miqdarihi al-'azim",
      sourceAr: "من الصيغ المشهورة",
      sourceEn: "From well-known formulations",
      virtueAr: "صيغة تبرز مقام النبي ﷺ كفاتح وخاتم وهادي",
      virtueEn: "A formulation that highlights the Prophet's ﷺ status as opener, seal, and guide",
      categoryAr: "موسعة",
      categoryEn: "Extended"
    },
    {
      id: 5,
      titleAr: "الصلاة النارية",
      titleEn: "The Fiery Prayer",
      arabic: "اللهم صل صلاة كاملة وسلم سلاماً تاماً على سيدنا محمد الذي تنحل به العقد وتنفرج به الكرب وتُقضى به الحوائج وتُنال به الرغائب وحسن الخواتيم ويُستسقى الغمام بوجهه الكريم وعلى آله وصحبه في كل لمحة ونفس بعدد كل معلوم لك",
      english: "O Allah, send complete prayers and perfect peace upon our master Muhammad, through whom knots are untied, distresses are relieved, needs are fulfilled, desires are attained, good endings are achieved, and rain is sought through his noble face, and upon his family and companions in every glance and breath, in number of everything known to You.",
      transliteration: "Allahumma salli salatan kamilatan wa sallim salaman tamman 'ala sayyidina Muhammadin alladhi tanhullu bihi al-'uqad wa tanfariju bihi al-kurab wa tuqda bihi al-hawa'ij wa tunalu bihi ar-ragha'ib wa husn al-khawatim wa yustasqa al-ghamam bi wajhihi al-karim wa 'ala alihi wa sahbihi fi kulli lamhatin wa nafasin bi 'adadi kulli ma'lumin lak",
      sourceAr: "من الصيغ المشهورة",
      sourceEn: "From well-known formulations",
      virtueAr: "صيغة تُقرأ لقضاء الحوائج وتفريج الكروب",
      virtueEn: "A formulation recited for fulfilling needs and relieving distresses",
      categoryAr: "خاصة",
      categoryEn: "Special"
    },
    {
      id: 6,
      titleAr: "الصلاة البسيطة",
      titleEn: "The Simple Prayer",
      arabic: "صلى الله عليه وسلم",
      english: "May Allah's prayers and peace be upon him",
      transliteration: "Salla Allahu 'alayhi wa sallam",
      sourceAr: "الصيغة المختصرة المشهورة",
      sourceEn: "The well-known abbreviated form",
      virtueAr: "أبسط صيغ الصلاة على النبي ﷺ وأكثرها استعمالاً",
      virtueEn: "The simplest and most commonly used form of prayer upon the Prophet ﷺ",
      categoryAr: "أساسية",
      categoryEn: "Basic"
    }
  ];

  const categoriesAr = [t('all_prayers'), "أساسية", "موسعة", "خاصة"];
  const categoriesEn = ["All Prayers", "Basic", "Extended", "Special"];
  const categories = isArabic ? categoriesAr : categoriesEn;

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      speechSynthesis.speak(utterance);
    }
  };

  const incrementPrayerCount = () => {
    setPrayerCount(prev => prev + 1);
  };

  const resetPrayerCount = () => {
    setPrayerCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-600 to-pink-600 rounded-xl flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('prayers_on_prophet')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('prayers_on_prophet_content')}
          </p>
        </div>

        {/* Virtue Section */}
        <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-6 mb-8 border border-rose-200">
          <div className="flex items-center mb-4">
            <Star className="w-6 h-6 text-rose-600 mr-3" />
            <h3 className="text-xl font-bold text-rose-800">
              {isArabic ? 'فضل الصلاة على النبي ﷺ' : 'Virtues of Sending Prayers upon the Prophet ﷺ'}
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-rose-700">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>{isArabic ? 'من صلى علي واحدة صلى الله عليه بها عشراً' : 'Whoever sends one prayer upon me, Allah will send ten prayers upon him'}</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>{isArabic ? 'أولى الناس بي يوم القيامة أكثرهم علي صلاة' : 'The closest people to me on the Day of Judgment are those who send the most prayers upon me'}</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>{isArabic ? 'ما من أحد يسلم علي إلا رد الله علي روحي حتى أرد عليه السلام' : 'No one sends greetings upon me except that Allah returns my soul to me so I can return the greeting'}</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>{isArabic ? 'إن لله ملائكة سياحين يبلغوني من أمتي السلام' : 'Allah has traveling angels who convey to me the greetings from my nation'}</p>
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 ? 
                "bg-gradient-to-r from-rose-600 to-pink-600 text-white" : 
                "border-rose-200 text-rose-700 hover:bg-rose-50"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Prayers Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {prayers.map((prayer) => (
            <Card key={prayer.id} className="hover:shadow-lg transition-all duration-300 border-rose-100">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-sm text-rose-600 font-medium mb-2">
                      {isArabic ? prayer.categoryAr : prayer.categoryEn}
                    </div>
                    <CardTitle className="text-xl text-gray-800 mb-2">
                      {isArabic ? prayer.titleAr : prayer.titleEn}
                    </CardTitle>
                    <CardDescription className="text-rose-700 font-medium flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {isArabic ? prayer.sourceAr : prayer.sourceEn}
                    </CardDescription>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-pink-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-rose-600" />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                {/* Main Text Display */}
                {isArabic ? (
                  /* Arabic Mode: Show Arabic text in normal style */
                  <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-4 mb-4 border border-rose-100">
                    <p className="text-lg leading-relaxed text-gray-800 text-right font-arabic">
                      {prayer.arabic}
                    </p>
                  </div>
                ) : (
                  /* English Mode: Show English text in pink/rose color, Arabic below */
                  <div className="space-y-4 mb-4">
                    <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-4 border border-rose-200">
                      <p className="text-lg leading-relaxed text-rose-600 font-semibold">
                        {prayer.english}
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <p className="text-base leading-relaxed text-gray-600 text-right font-arabic">
                        {prayer.arabic}
                      </p>
                    </div>
                  </div>
                )}

                {/* Transliteration */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-gray-600 italic leading-relaxed">
                    {prayer.transliteration}
                  </p>
                </div>

                {/* Virtue */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-rose-800 mb-2">
                    {isArabic ? 'الفضل:' : 'Virtue:'}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {isArabic ? prayer.virtueAr : prayer.virtueEn}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-rose-200 text-rose-700 hover:bg-rose-50"
                    onClick={() => copyToClipboard(prayer.arabic, prayer.id)}
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    {copiedId === prayer.id ? (isArabic ? 'تم النسخ!' : 'Copied!') : (isArabic ? 'نسخ' : 'Copy')}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-rose-200 text-rose-700 hover:bg-rose-50"
                    onClick={() => speakText(prayer.arabic)}
                  >
                    <Volume2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Counter Section */}
        <div className="mt-12 text-center">
          <Card className="max-w-md mx-auto border-rose-200">
            <CardHeader>
              <CardTitle className="text-rose-800">{t('prayer_count')}</CardTitle>
              <CardDescription>
                {isArabic ? 'احتفظ بعدد صلواتك على النبي ﷺ' : 'Keep track of your prayers upon the Prophet ﷺ'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-rose-600 mb-4">{prayerCount}</div>
              <div className="flex gap-2">
                <Button 
                  className="flex-1 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white"
                  onClick={incrementPrayerCount}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  {isArabic ? 'صلى الله عليه وسلم' : 'ﷺ'}
                </Button>
                <Button 
                  variant="outline"
                  className="border-rose-200 text-rose-700 hover:bg-rose-50"
                  onClick={resetPrayerCount}
                >
                  {t('reset_count')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrayersPage;

