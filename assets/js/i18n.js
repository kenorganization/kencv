/**
 * 多語言翻譯系統
 * 支援繁體中文 (zh-TW) 和英文 (en)
 */

// 當前語言設定
let currentLang = localStorage.getItem('language') || 'zh-TW';

// 翻譯對照表
const translations = {
  'zh-TW': {
    // 導航選單
    'nav.home': '首頁',
    'nav.about': '關於我',
    'nav.resume': '履歷',
    'nav.skills': '專長技能',
    'nav.portfolio': '作品集',
    'nav.interest': '興趣專長',
    'nav.contact': '聯絡我',
    'nav.life': '一些生活',

    // 首頁
    'home.greeting': 'Hi！我是健恩',
    'home.tagline': '從實驗室到程式碼—跨領域的全端工程師，融合科學與創意開發。',
    'home.cta': '關 於 我',

    // 關於我
    'about.title': '關於我',
    'about.heading': '整合 IoT 系統架構的全端開發者',
    'about.intro': '持續探索新技術,應用跨領域整合能力,致力於實現製造端創新、高效且易用的解決方案。',
    'about.birthday': '生日:',
    'about.website': '網站:',
    'about.city': '所在城市:',
    'about.age': '年齡:',
    'about.degree': '最高學歷:',
    'about.email': '電子郵件:',
    'about.master': 'Master',
    'about.location': 'Taoyuan, Taiwan',
    'about.desc1': '專注 IoT 系統架構的全端開發者，整合軟韌體技術與跨領域經驗，提供從設計原型到產品落地的完整解決方案。核心優勢在於結合 UI/UX 設計思維與製造端實務，打造真正可落地的高效系統。',
    'about.tech-transform': '技術轉型：',
    'about.desc2': '醫材研發期間接觸軟韌體整合，發現對程式開發的熱忱。完成資展國際全端培訓後，獨立完成專題雲端部署（MySQL → PostgreSQL 遷移 + Render 平台架設），掌握 React、Vue、Node.js、Express 等現代化技術棧。',
    'about.current-work': '現職實踐：',
    'about.desc3': '於盧森堡商濂達科技擔任先進智能工程師，主導 IoT 系統架構設計與軟韌體協議整合平台開發。技術棧涵蓋後端（Spring Boot）、跨平台前端（React Native + TypeScript、Kotlin）及多元資料庫方案（MySQL / PostgreSQL / MongoDB）。持續以跨領域視角創造製造業數位轉型價值。',

    // 履歷
    'resume.title': '履歷',
    'resume.subtitle': '在學經歷/就業經歷',
    'resume.education': '在學經歷',
    'resume.experience': '工作經歷',
    'resume.master': '碩士',
    'resume.bachelor': '學士',
    'resume.highschool': '高中',
    'resume.ta': '助教',
    'resume.nttu': '國立台東大學生命科學系',
    'resume.tnsh': '國立台南二中',
    'resume.location.taitung': '台東縣台東市',
    'resume.location.tainan': '台南市北區',
    'resume.location.taoyuan.yangmei': '桃園市楊梅區',
    'resume.location.taoyuan.bade': '桃園市八德區',
    'resume.location.taipei.wenshan': '台北市文山區',
    'resume.location.taipei.xinyi': '台北市信義區',

    // 工作職位
    'resume.job.software': '軟體工程師',
    'resume.job.medical': '醫療器材研發工程師',
    'resume.job.cosmetics': '化妝品研發工程師',
    'resume.job.research': '研究助理',

    // 公司名稱
    'resume.company.semiconductor': '半導體相關產業',
    'resume.company.microbase': '微邦科技股份有限公司',
    'resume.company.sholin': '香林企業股份有限公司',
    'resume.company.tmu': '臺北醫學大學藥學系',

    // 工作時間
    'resume.period.current': '至今',

    // 專長技能
    'skill.title': '專長技能',
    'skill.web': '網頁開發',
    'skill.medical': '醫療器材研發',
    'skill.cosmetics': '化妝品研發',
    'skill.chemistry': '有機化學合成',
    'skill.biotech': '生物技術',
    'skill.computer': '電腦技能/管理系統',

    // 作品集
    'portfolio.title': '作品集',
    'portfolio.all': '全部',
    'portfolio.app': '應用程式',
    'portfolio.product': '產品',
    'portfolio.branding': '品牌設計',

    // 聯絡我
    'contact.title': '聯絡我',
    'contact.address': '地址',
    'contact.call': '電話',
    'contact.email': '電子郵件',
    'contact.form.name': '您的姓名',
    'contact.form.email': '您的電子郵件',
    'contact.form.subject': '主旨',
    'contact.form.message': '訊息',
    'contact.form.send': '發送訊息',

    // 其他
    'common.loading': '載入中...',
    'common.error': '發生錯誤',
    'common.success': '成功',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.resume': 'Resume',
    'nav.skills': 'Skills',
    'nav.portfolio': 'Portfolio',
    'nav.interest': 'Interests',
    'nav.contact': 'Contact',
    'nav.life': 'Life',

    // Home
    'home.greeting': "Hi! I'm Ken",
    'home.tagline': 'From Lab to Code—A cross-disciplinary full-stack engineer integrating science and creative development.',
    'home.cta': 'About Me',

    // About
    'about.title': 'About Me',
    'about.heading': 'Full-Stack Developer Specializing in IoT System Architecture',
    'about.intro': 'Continuously exploring new technologies, applying cross-domain integration capabilities, committed to achieving innovative, efficient and user-friendly solutions for manufacturing.',
    'about.birthday': 'Birthday:',
    'about.website': 'Website:',
    'about.city': 'City:',
    'about.age': 'Age:',
    'about.degree': 'Degree:',
    'about.email': 'Email:',
    'about.master': 'Master',
    'about.location': 'Taoyuan, Taiwan',
    'about.desc1': 'Full-stack developer focused on IoT system architecture, integrating software and firmware technologies with cross-domain experience to provide complete solutions from design prototype to product implementation. Core advantage lies in combining UI/UX design thinking with manufacturing practice to create truly implementable efficient systems.',
    'about.tech-transform': 'Technical Transformation:',
    'about.desc2': 'Discovered passion for programming during medical device R&D through exposure to software-firmware integration. After completing III full-stack training, independently deployed cloud-based projects (MySQL → PostgreSQL migration + Render platform setup), mastering modern technology stacks including React, Vue, Node.js, and Express.',
    'about.current-work': 'Current Practice:',
    'about.desc3': 'Serving as Advanced Intelligence Engineer at NEB Luxembourg, leading IoT system architecture design and software-firmware protocol integration platform development. Technology stack covers backend (Spring Boot), cross-platform frontend (React Native + TypeScript, Kotlin), and diverse database solutions (MySQL / PostgreSQL / MongoDB). Continuously creating digital transformation value for manufacturing from a cross-domain perspective.',

    // Resume
    'resume.title': 'Resume',
    'resume.subtitle': 'Education / Work Experience',
    'resume.education': 'Education',
    'resume.experience': 'Professional Experience',
    'resume.master': 'Master Degree',
    'resume.bachelor': 'Bachelor Degree',
    'resume.highschool': 'High School',
    'resume.ta': 'Teaching Assistant',
    'resume.nttu': 'National Taitung University, Department of Life Science',
    'resume.tnsh': 'National Tainan Second Senior High School',
    'resume.location.taitung': 'Taitung City, Taitung County',
    'resume.location.tainan': 'North District, Tainan City',
    'resume.location.taoyuan.yangmei': 'Yangmei District, Taoyuan City',
    'resume.location.taoyuan.bade': 'Bade District, Taoyuan City',
    'resume.location.taipei.wenshan': 'Wenshan District, Taipei City',
    'resume.location.taipei.xinyi': 'Xinyi District, Taipei City',
    
    // Job Titles
    'resume.job.software': 'Software Engineer',
    'resume.job.medical': 'Medical Device R&D Engineer',
    'resume.job.cosmetics': 'Cosmetics R&D Engineer',
    'resume.job.research': 'Research Assistant',
    
    // Company Names
    'resume.company.semiconductor': 'Semiconductor Industry',
    'resume.company.microbase': 'MicroBase Technology Co., Ltd.',
    'resume.company.sholin': 'Sholin Enterprise Co., Ltd.',
    'resume.company.tmu': 'Taipei Medical University, School of Pharmacy',
    
    // Time Period
    'resume.period.current': 'Present',

    // Skills
    'skill.title': 'Skills',
    'skill.web': 'Web Development',
    'skill.medical': 'Medical Device R&D',
    'skill.cosmetics': 'Cosmetics R&D',
    'skill.chemistry': 'Organic Chemistry',
    'skill.biotech': 'Biotechnology',
    'skill.computer': 'Computer Skills / Management Systems',

    // Portfolio
    'portfolio.title': 'Portfolio',
    'portfolio.all': 'All',
    'portfolio.app': 'App',
    'portfolio.product': 'Product',
    'portfolio.branding': 'Branding',

    // Contact
    'contact.title': 'Contact',
    'contact.address': 'Address',
    'contact.call': 'Call',
    'contact.email': 'Email',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error occurred',
    'common.success': 'Success',
  },
};

/**
 * 取得翻譯文字
 * @param {string} key - 翻譯鍵值
 * @param {string} lang - 語言代碼 (zh-TW 或 en)
 * @returns {string} 翻譯後的文字
 */
function t(key, lang = currentLang) {
  try {
    return translations[lang][key] || translations['zh-TW'][key] || key;
  } catch (error) {
    console.warn(`Translation key not found: ${key}`);
    return key;
  }
}

/**
 * 切換語言
 * @param {string} lang - 目標語言 (zh-TW 或 en)
 */
function switchLanguage(lang) {
  if (!translations[lang]) {
    console.error(`Language ${lang} not supported`);
    return;
  }

  currentLang = lang;
  localStorage.setItem('language', lang);

  // 更新頁面文字
  updatePageContent();

  // 更新 HTML lang 屬性
  document.documentElement.lang = lang;

  // 更新語言切換按鈕狀態
  updateLanguageSwitcher();

  console.log(`Language switched to: ${lang}`);
}

/**
 * 更新頁面內容
 */
function updatePageContent() {
  // 更新所有帶有 data-i18n 屬性的元素
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const translatedText = t(key);

    // 根據元素類型更新內容
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.placeholder = translatedText;
    } else {
      element.textContent = translatedText;
    }
  });

  // 更新圖片 alt 屬性
  updateImageAlts();
}

/**
 * 更新圖片 alt 標籤
 */
function updateImageAlts() {
  const altTranslations = {
    'zh-TW': {
      'hero-bg': '健恩 Ken - 全端工程師個人形象照',
      'profile-img': '健恩 Ken - IoT 系統架構全端工程師專業照',
      'ispan-project': '資展國際全端培訓專題 - 雲端部署專案',
      'gurulaptop-project': 'GuruLaptop 筆電電商平台專案',
      'loyalcare-project': 'LoyalCare 醫療照護系統專案',
      'neb-project': 'Neb 超音波霧化器產品',
      'silentneb-project': 'SilentNeb 靜音霧化器產品',
      testimonial: '推薦人照片',
      certificate: '專業證書',
      'project-screenshot': '專案截圖',
    },
    en: {
      'hero-bg': 'Ken - Full-Stack Engineer Profile Photo',
      'profile-img': 'Ken - IoT System Architecture Engineer Professional Photo',
      'ispan-project': 'III Full-Stack Training Project - Cloud Deployment',
      'gurulaptop-project': 'GuruLaptop E-commerce Platform Project',
      'loyalcare-project': 'LoyalCare Healthcare System Project',
      'neb-project': 'Neb Ultrasonic Nebulizer Product',
      'silentneb-project': 'SilentNeb Silent Nebulizer Product',
      testimonial: 'Testimonial Photo',
      certificate: 'Professional Certificate',
      'project-screenshot': 'Project Screenshot',
    },
  };

  document.querySelectorAll('img[data-i18n-alt]').forEach((img) => {
    const altKey = img.getAttribute('data-i18n-alt');
    const translatedAlt = altTranslations[currentLang][altKey] || altTranslations['zh-TW'][altKey] || '';
    img.alt = translatedAlt;
  });
}

/**
 * 更新語言切換按鈕狀態
 */
function updateLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.language-switcher button');
  langButtons.forEach((btn) => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

/**
 * 初始化多語言系統
 */
function initI18n() {
  // 從 localStorage 讀取語言設定
  const savedLang = localStorage.getItem('language');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  } else {
    // 偵測瀏覽器語言
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('zh')) {
      currentLang = 'zh-TW';
    } else {
      currentLang = 'en';
    }
    localStorage.setItem('language', currentLang);
  }

  // 設定 HTML lang 屬性
  document.documentElement.lang = currentLang;

  // 更新頁面內容
  updatePageContent();

  // 綁定語言切換按鈕事件
  document.querySelectorAll('.language-switcher button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      switchLanguage(targetLang);
    });
  });

  console.log(`I18n initialized with language: ${currentLang}`);
}

// DOM 載入完成後初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}

// 全域匯出
window.i18n = {
  t,
  switchLanguage,
  getCurrentLanguage: () => currentLang,
  translations,
};
