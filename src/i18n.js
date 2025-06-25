import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ar: {
    translation: {
      // Navigation
      "home": "الرئيسية",
      "books": "الكتب",
      "videos": "الفيديوهات",
      "prayers": "الصلوات",
      "about": "عن المشروع",
      "admin": "لوحة التحكم",
      
      // Home Page
      "project_title": "مشروع تصوف العلماء",
      "project_subtitle": "التصوف الصحيح المبني على الكتاب والسنة",
      "hero_title": "تصوف العلماء",
      "hero_subtitle": "مبادرة فكرية وتعليمية تهدف إلى تجديد الخطاب الصوفي وربطه بالعلوم الشرعية، مع التركيز على بناء الإنسان المسلم المتكامل روحاً وفكراً وسلوكاً.",
      "explore_books": "استكشف الكتب",
      "watch_videos": "شاهد الفيديوهات",
      
      // Features
      "project_dimensions": "أبعاد المشروع",
      "books_library": "مكتبة الكتب",
      "books_library_desc": "مجموعة شاملة من كتب التصوف الأصيل والعلوم الشرعية",
      "books_library_content": "كتب مختارة بعناية تجمع بين التصوف الأصيل والمعرفة الشرعية المعتبرة",
      "lectures_videos": "المحاضرات والفيديوهات",
      "lectures_videos_desc": "محاضرات ودروس تعليمية من علماء متخصصين",
      "lectures_videos_content": "محتوى مرئي ثري يشرح أسس التصوف الأصيل ومنهجية التزكية",
      "prayers_on_prophet": "الصلوات على النبي",
      "prayers_on_prophet_desc": "مجموعة من الصلوات والأدعية الصحيحة",
      "prayers_on_prophet_content": "أشكال متنوعة من الصلاة على النبي ﷺ مع شرح فضائلها وآدابها",
      "education_purification": "التربية والتزكية",
      "education_purification_desc": "منهجية شاملة للتربية الذاتية والتزكية",
      "education_purification_content": "برامج تربوية تهدف إلى بناء الشخصية المسلمة المتوازنة",
      "islamic_sciences": "العلوم الشرعية",
      "islamic_sciences_desc": "ربط التصوف بأصول الفقه والعقيدة",
      "islamic_sciences_content": "تأصيل علمي للممارسات الصوفية وفق الكتاب والسنة",
      "ihsan_perfection": "الإحسان والكمال",
      "ihsan_perfection_desc": "الوصول إلى مقام الإحسان في العبادة",
      "ihsan_perfection_content": "تعليم مراتب الدين الثلاث: الإسلام والإيمان والإحسان",
      
      // About section
      "about_project": "عن المشروع",
      "about_project_desc_1": "مشروع \"تصوف العلماء\" هو مبادرة مهمة في تجديد التصوف وربطه بالعلوم الشرعية، مع التركيز على بناء الإنسان المسلم المتكامل. يقدم نموذجاً للتصوف المعتدل الذي يعزز فهم الدين ويساهم في بناء مجتمع متماسك ومتوازن.",
      "about_project_desc_2": "ينطلق المشروع من رؤية أن التصوف ليس مجرد طقوس أو ممارسات روحية، بل علم شرعي أصيل مبني على الكتاب والسنة، يهدف إلى تزكية النفس وتربية الفرد للوصول إلى مقام الإحسان والعبودية الكاملة لله.",
      "read_more_about_project": "اقرأ المزيد عن المشروع",
      
      // Categories
      "all_categories": "جميع الفئات",
      "introductory": "تعريفي",
      "defense_of_sufism": "دفاع عن التصوف",
      "book_explanations": "شروح الكتب",
      "fiqh": "فقه",
      "sufi_poetry": "شعر صوفي",
      "advice": "نصائح",
      
      // Books
      "all_books": "جميع الكتب",
      "book_category_sufism": "التصوف",
      "book_category_fiqh": "الفقه",
      "book_category_aqeedah": "العقيدة",
      "book_category_tafsir": "التفسير",
      "book_category_hadith": "الحديث",
      "download_book": "تحميل الكتاب",
      "read_book": "قراءة الكتاب",
      
      // Videos
      "load_more_videos": "تحميل المزيد من الفيديوهات",
      "views": "مشاهدة",
      
      // Prayers
      "all_prayers": "جميع الصلوات",
      "prayer_count": "عدد الصلوات",
      "reset_count": "إعادة تعيين العدد",
      
      // About Us
      "about_us_title": "من نحن",
      "about_us_desc_1": "مشروع \"تصوف العلماء\" هو مبادرة رائدة تسعى لإحياء الجوهر الحقيقي للتصوف، ودمجه مع المبادئ الصارمة للعلوم الشرعية الإسلامية. مهمتنا هي تنمية فهم شامل للإسلام، وتعزيز النمو الروحي إلى جانب العمق الفكري.",
      "about_us_desc_2": "نؤمن أن التصوف الأصيل متجذر بعمق في القرآن والسنة، ويوفر طريقاً للتطهير الذاتي والتميز الأخلاقي. يهدف عملنا إلى تقديم التصوف كمكون حيوي في الحياة الإسلامية، يوجه الأفراد نحو اتصال عميق بالله ووجود متوازن.",
      
      // Admin and User
      "admin_panel_title": "لوحة تحكم المشرف",
      "admin_panel_desc": "إدارة المحتوى والمستخدمين والإعدادات.",
      "user_dashboard_title": "لوحة تحكم المستخدم",
      "user_dashboard_desc": "تتبع تقدمك وإنجازاتك.",
      "achievements": "الإنجازات",
      "progress": "التقدم",
      
      // PWA
      "install_app_prompt": "تثبيت التطبيق على جهازك",
      "install": "تثبيت"
    }
  },
  en: {
    translation: {
      // Navigation
      "home": "Home",
      "books": "Books",
      "videos": "Videos",
      "prayers": "Prayers",
      "about": "About the Project",
      "admin": "Admin Panel",
      
      // Home Page
      "project_title": "Scholars' Sufism Project",
      "project_subtitle": "Authentic Sufism based on the Quran and Sunnah",
      "hero_title": "Scholars' Sufism",
      "hero_subtitle": "An intellectual and educational initiative aimed at renewing Sufi discourse and linking it to Islamic sciences, focusing on building a complete Muslim individual in spirit, thought, and conduct.",
      "explore_books": "Explore Books",
      "watch_videos": "Watch Videos",
      
      // Features
      "project_dimensions": "Project Dimensions",
      "books_library": "Books Library",
      "books_library_desc": "A comprehensive collection of authentic Sufism and Islamic sciences books",
      "books_library_content": "Carefully selected books combining authentic Sufism and recognized Islamic knowledge",
      "lectures_videos": "Lectures and Videos",
      "lectures_videos_desc": "Lectures and educational lessons from specialized scholars",
      "lectures_videos_content": "Rich visual content explaining the foundations of authentic Sufism and purification methodology",
      "prayers_on_prophet": "Prayers on the Prophet",
      "prayers_on_prophet_desc": "A collection of authentic prayers and supplications",
      "prayers_on_prophet_content": "Various forms of prayers upon the Prophet (PBUH) with explanations of their virtues and manners",
      "education_purification": "Education and Purification",
      "education_purification_desc": "A comprehensive methodology for self-education and purification",
      "education_purification_content": "Educational programs aimed at building a balanced Muslim personality",
      "islamic_sciences": "Islamic Sciences",
      "islamic_sciences_desc": "Linking Sufism to the fundamentals of Fiqh and Aqeedah",
      "islamic_sciences_content": "Scholarly grounding of Sufi practices according to the Quran and Sunnah",
      "ihsan_perfection": "Ihsan and Perfection",
      "ihsan_perfection_desc": "Reaching the station of Ihsan in worship",
      "ihsan_perfection_content": "Teaching the three levels of religion: Islam, Iman, and Ihsan",
      
      // About section
      "about_project": "About the Project",
      "about_project_desc_1": "The \"Scholars' Sufism\" project is an important initiative in renewing Sufism and linking it to Islamic sciences, focusing on building a complete Muslim individual. It presents a model of moderate Sufism that enhances understanding of religion and contributes to building a cohesive and balanced society.",
      "about_project_desc_2": "The project stems from a vision that Sufism is not merely rituals or spiritual practices, but an authentic Islamic science based on the Quran and Sunnah, aiming to purify the soul and educate the individual to reach the station of Ihsan and complete servitude to Allah.",
      "read_more_about_project": "Read More About the Project",
      
      // Categories
      "all_categories": "All Categories",
      "introductory": "Introductory",
      "defense_of_sufism": "Defense of Sufism",
      "book_explanations": "Book Explanations",
      "fiqh": "Fiqh",
      "sufi_poetry": "Sufi Poetry",
      "advice": "Advice",
      
      // Books
      "all_books": "All Books",
      "book_category_sufism": "Sufism",
      "book_category_fiqh": "Fiqh",
      "book_category_aqeedah": "Aqeedah",
      "book_category_tafsir": "Tafsir",
      "book_category_hadith": "Hadith",
      "download_book": "Download Book",
      "read_book": "Read Book",
      
      // Videos
      "load_more_videos": "Load More Videos",
      "views": "views",
      
      // Prayers
      "all_prayers": "All Prayers",
      "prayer_count": "Prayer Count",
      "reset_count": "Reset Count",
      
      // About Us
      "about_us_title": "About Us",
      "about_us_desc_1": "The \"Scholars' Sufism\" project is a pioneering initiative that seeks to revive the true essence of Sufism, integrating it with the rigorous principles of Islamic scholarship. Our mission is to cultivate a holistic understanding of Islam, fostering spiritual growth alongside intellectual depth.",
      "about_us_desc_2": "We believe that authentic Sufism is deeply rooted in the Quran and Sunnah, providing a path for self-purification and moral excellence. Our work aims to present Sufism as a vital component of Islamic life, guiding individuals towards a profound connection with Allah and a balanced existence.",
      
      // Admin and User
      "admin_panel_title": "Admin Panel",
      "admin_panel_desc": "Manage content, users, and settings.",
      "user_dashboard_title": "User Dashboard",
      "user_dashboard_desc": "Track your progress and achievements.",
      "achievements": "Achievements",
      "progress": "Progress",
      
      // PWA
      "install_app_prompt": "Install app on your device",
      "install": "Install"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    debug: false,
    lng: 'ar',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;

