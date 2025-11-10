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
    'nav.portfolio': '專案',
    'nav.interest': '興趣專長',
    'nav.contact': '聯繫我',
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
    'about.desc3': '於半導體相關公司擔任先進智能工程師，主導 IoT 系統架構設計與軟韌體協議整合平台開發。技術棧涵蓋後端（Spring Boot）、跨平台前端（React Native + TypeScript、Kotlin）及多元資料庫方案（MySQL / PostgreSQL / MongoDB）。持續以跨領域視角創造製造業數位轉型價值。',

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

    // 碩士學歷描述
    'resume.master.thesis': '以常溫常壓等離子體方法誘變育種高麴酸產量之米麴菌株及最適生產條件研究',
    'resume.master.thesis.link1': '論文全文 (NDLTD)',
    'resume.master.thesis.link2': '論文全文 (NTTU)',

    // 學士學歷描述
    'resume.bachelor.desc1': '1. 以不同地區和深度之深層海水培養紅麴 NTU 568 功效評估',
    'resume.bachelor.desc2': '2. 紅麴產品調節血糖功效評估',

    // 助教工作描述
    'resume.ta.desc1': '1. 課程規劃：與老師規劃討論上課教材',
    'resume.ta.desc2': '2. 器耗材準備：提升上課效率，準備菌種，培養基及常用試劑配製',
    'resume.ta.desc3': '3. 預實驗：使課程流暢進行，減少錯誤',
    'resume.ta.desc4': '4. 進度檢視：掌握課程進度，彙報各組別進度',
    'resume.ta.desc5': '5. 物資採購：物資盤點統計',
    'resume.ta.desc6': '6. 清潔衛生：提升課程效率，避免環境污染',
    'resume.ta.desc7': '7. 課後輔導：給予學生加強輔導，提供實務經驗及方法說明，加強溝通',

    // 高中社團描述
    'resume.highschool.desc1': '1.開會紀錄：負責會議紀錄及報告，管理會議時間。',
    'resume.highschool.desc2': '2.活動企劃：編寫企劃，幹部合作討論。',
    'resume.highschool.desc3': '3.社團評鑑：統整年度活動資料，紀錄社團事務。',
    'resume.highschool.desc4': '4.社團招生：招生計畫及招生時間規劃。',
    'resume.highschool.desc5': '5.外校交流：與外校企劃共同活動，維持社團交流。',

    // 軟體工程師工作描述
    'resume.software.desc1': 'eRuncard 流程卡內部系統開發與維護 (React Native / TypeScript)',
    'resume.software.desc2': 'AI 聊天介面整合開發 (Claude API + IndexDB 訊息管理系統)',
    'resume.software.desc3': 'RFID 設備串接系統開發 (Spring Boot / Kotlin)',
    'resume.software.desc4': 'TM Robot 系統維護與優化',

    // 醫療器材研發工程師工作描述
    'resume.medical.desc1': '1. 醫療器材設計與評估',
    'resume.medical.desc2': '2. 醫療器材/其他產品可靠度試驗設計、執行及報告撰寫 (ASTM、ISO、IEC)',
    'resume.medical.desc3': '3. 醫療器材臨床評估 (clinical evaluation) 計畫/報告撰寫(CE-MDR、FDA、TFDA、CFDA)',
    'resume.medical.desc4': '4. 醫療器材/藥物兼容性試驗及分析 (設備性能測試及改進、藥水配置)',
    'resume.medical.desc5': '5. 醫療器材內部管制程序書撰寫及修正',
    'resume.medical.desc6': '6. 治具及試驗設備修繕維護',
    'resume.medical.desc7': '7. 文獻撰寫及發表',

    // 化妝品研發工程師工作描述
    'resume.cosmetics.title': '化妝品開發',
    'resume.cosmetics.desc1': '1. 配方研發：專案開發、仿樣、開發打樣、安定性',
    'resume.cosmetics.desc2': '2. 客戶產品/售後服務：PIF/進出口貿易文件、客戶參考配方開發及測試、客戶原料異常檢測、食品代理協助',
    'resume.cosmetics.food.desc1': '1.食品代理/製造提案分析及評估：提案利弊分析、食品銷售策略',
    'resume.cosmetics.food.desc2': '2.食品進出口法規：TFDA 食品查驗協助、TFDA 函詢審核協助',
    'resume.cosmetics.food.desc3': '3.食品試食及品評',

    // 研究助理工作描述
    'resume.research.title': '新興影響精神活性物質 (NPS) 流行趨勢分析、標準品合成及標準圖譜建立 (TFDA)',
    'resume.research.desc1': '1. 研究計畫及報告撰寫：NPS 流行趨勢分析',
    'resume.research.desc2': '2. NPS 標準品合成：有機合成試驗設計、操作',
    'resume.research.desc3': '3. 化學標準圖譜建立：建立標準資料庫 (NMR、HPLC、IR、GC-EI-MS)',

    // 專長技能
    'skill.title': '專長技能',
    'skill.subtitle': 'Specialty Skills',
    'skill.web': '網頁開發',
    'skill.web.desc1': '前端設計與開發（Vue.js、React.js）',
    'skill.web.desc2': '後端建置（Node.js、MySQL、PostgreSQL）',
    'skill.web.desc3': '版本控管 (GitHub/GitLab) / RESTful API',
    'skill.medical': '醫療器材研發',
    'skill.medical.desc1': '醫療器材試驗設計與性能評估',
    'skill.medical.desc2': '臨床評估計畫/報告撰寫（CE-MDR、FDA、TFDA）',
    'skill.medical.desc3': '設備維護/治具開發',
    'skill.medical.desc4': '文獻撰寫及發表',
    'skill.cosmetics': '化妝品研發',
    'skill.cosmetics.desc1': '化妝保養品成分配方設計',
    'skill.cosmetics.desc2': '化妝品安定性及功效性評估',
    'skill.cosmetics.desc3': '國際化妝品法規（歐盟、美國、中國）',
    'skill.cosmetics.desc4': '食品/健康食品功效評估計畫執行',
    'skill.chemistry': '有機化學合成',
    'skill.chemistry.desc1': '多步驟合成反應設計',
    'skill.chemistry.desc2': '化合物純化技術（管柱層析）',
    'skill.chemistry.desc3': '化學結構分析（NMR、IR、MS）',
    'skill.biotech': '生物技術',
    'skill.biotech.desc1': '細胞/微生物培養與疾病模式建立',
    'skill.biotech.desc2': '實驗動物操作與生化分析',
    'skill.biotech.desc3': '菌株篩選改良（ARTP、RSM）',
    'skill.biotech.desc4': '健康食品功效評估計畫執行',
    'skill.computer': '電腦技能/管理系統',
    'skill.computer.desc1': '文書軟體/書目管理（EndNote）',
    'skill.computer.desc2': '統計分析及製圖（SigmaPlot、SPSS）',
    'skill.computer.desc3': '鼎新企業管理系統（ERP、EIP、CRM）',

    // 作品集
    'portfolio.title': '專案',
    'portfolio.subtitle': '過去執行專案及學術發表活動',
    'portfolio.all': '全部',
    'portfolio.app': '專案',
    'portfolio.product': '學術發表',
    'portfolio.branding': '品牌設計',

    // 作品集項目
    'portfolio.ispan.title': '資展國際前端工程師課程',
    'portfolio.ispan.period': '2024/6~2024/11',
    'portfolio.gurulaptop.title': '資展大專專題作品上架雲端 - GuruLaptop',
    'portfolio.gurulaptop.period': '2024/6~仍在進行',
    'portfolio.loyalcare.title': '霧化器開發專案-樂友康霧化器',
    'portfolio.loyalcare.period': '2022/4~2024/3',
    'portfolio.neb.title': '霧化器開發專案-帕基艾兒顧康霧化器',
    'portfolio.neb.period': '2022/4~2024/3',
    'portfolio.silentneb.title': '霧化器開發專案-silentneb 霧化器',
    'portfolio.silentneb.period': '2022/4~2024/3',
    'portfolio.mino.title': '卸妝乳配方仿樣開發',
    'portfolio.mino.desc': '市售知名卸妝乳仿樣開發完成',
    'portfolio.animal.title': '大學部動物實驗參與證明',
    'portfolio.animal.desc': '動物實驗參與證明',
    'portfolio.food49.title': '台灣食品科學技術學會 poster 發表',
    'portfolio.food49.desc': '台灣食品科學技術學會 poster 發表',
    'portfolio.bio2018.title': '2018國立台東大學台東生物科學研究成果展',
    'portfolio.bio2018.desc': '2018 校內 poster',
    'portfolio.bio2019.title': '2019台東生物科學研究成果展',
    'portfolio.bio2019.desc': '2019校內poster',
    'portfolio.competition.title': '國立台東大學學生學習成果競賽作品計畫書',
    'portfolio.competition.desc': '校內 poster 競賽',
    'portfolio.foodexpert.title': '食品產業專業人才授證',
    'portfolio.foodexpert.desc': '食品產業專業人才授證',
    'portfolio.healthfood.title': '保健食品工程師初級能力鑑定',
    'portfolio.healthfood.desc': '保健食品工程師初級能力鑑定',

    // 聯絡我
    'contact.title': '聯繫我',
    'contact.subtitle': '聯繫我',
    'contact.address': '地址',
    'contact.address.value': '桃園市中壢區',
    'contact.call': '電話',
    'contact.call.value': '電子郵件聯繫我吧~',
    'contact.email': '電子郵件',
    'contact.form.name': '貴姓大名',
    'contact.form.email': '你的電子郵件',
    'contact.form.subject': '給我的郵件標題',
    'contact.form.message': '郵件內容',
    'contact.form.send': '發送訊息',
    'contact.form.loading': 'Loading',
    'contact.form.success': '您的訊息已成功發送，謝謝您的聯繫！我會盡快回覆您。',

    // 興趣專長
    'interest.title': '興趣專長',
    'interest.subtitle': '個人興趣與專長展示',

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

    // Master's Degree Description
    'resume.master.thesis': 'Study on Breeding High-Kojic Acid Producing Aspergillus oryzae Strains by Atmospheric Room Temperature Plasma Mutagenesis and Optimal Production Conditions',
    'resume.master.thesis.link1': 'Full Text (NDLTD)',
    'resume.master.thesis.link2': 'Full Text (NTTU)',

    // Bachelor's Degree Description
    'resume.bachelor.desc1': '1. Efficacy evaluation of cultivating Monascus NTU 568 with deep seawater from different regions and depths',
    'resume.bachelor.desc2': '2. Evaluation of blood glucose regulation efficacy of Monascus products',

    // Teaching Assistant Description
    'resume.ta.desc1': '1. Course Planning: Discussed and planned course materials with professors',
    'resume.ta.desc2': '2. Equipment & Supplies: Improved class efficiency, prepared strains, culture media and common reagents',
    'resume.ta.desc3': '3. Pre-experiments: Ensured smooth course progress and error reduction',
    'resume.ta.desc4': '4. Progress Monitoring: Tracked course progress and reported group statuses',
    'resume.ta.desc5': '5. Procurement: Inventory management and statistics',
    'resume.ta.desc6': '6. Sanitation: Enhanced course efficiency and prevented environmental contamination',
    'resume.ta.desc7': '7. After-class Tutoring: Provided reinforcement tutoring, practical experience and methodology, enhanced communication',

    // High School Club Activities Description
    'resume.highschool.desc1': '1. Meeting Minutes: Responsible for meeting records and reports, managed meeting time.',
    'resume.highschool.desc2': '2. Event Planning: Wrote proposals and collaborated with officers.',
    'resume.highschool.desc3': '3. Club Evaluation: Organized annual activity data and recorded club affairs.',
    'resume.highschool.desc4': '4. Recruitment: Planned recruitment strategies and schedules.',
    'resume.highschool.desc5': '5. Inter-school Exchange: Planned joint activities with other schools and maintained club networking.',

    // Software Engineer Job Description
    'resume.software.desc1': 'eRuncard internal system development and maintenance (React Native / TypeScript)',
    'resume.software.desc2': 'AI chat interface integration development (Claude API + IndexDB message management system)',
    'resume.software.desc3': 'RFID equipment integration system development (Spring Boot / Kotlin)',
    'resume.software.desc4': 'TM Robot system maintenance and optimization',

    // Medical Device R&D Engineer Job Description
    'resume.medical.desc1': '1. Medical device design and evaluation',
    'resume.medical.desc2': '2. Medical device/product reliability test design, execution and report writing (ASTM, ISO, IEC)',
    'resume.medical.desc3': '3. Medical device clinical evaluation plan/report writing (CE-MDR, FDA, TFDA, CFDA)',
    'resume.medical.desc4': '4. Medical device/drug compatibility testing and analysis (equipment performance testing and improvement, drug solution preparation)',
    'resume.medical.desc5': '5. Medical device internal control procedure writing and revision',
    'resume.medical.desc6': '6. Fixture and testing equipment repair and maintenance',
    'resume.medical.desc7': '7. Literature writing and publication',

    // Cosmetics R&D Engineer Job Description
    'resume.cosmetics.title': 'Cosmetics Development',
    'resume.cosmetics.desc1': '1. Formula R&D: Project development, imitation, prototyping, stability testing',
    'resume.cosmetics.desc2': '2. Customer Product/After-sales Service: PIF/import-export trade documents, customer reference formula development and testing, customer raw material anomaly detection, food agency assistance',
    'resume.cosmetics.food.desc1': '1. Food Agency/Manufacturing Proposal Analysis and Evaluation: Pros and cons analysis, food sales strategy',
    'resume.cosmetics.food.desc2': '2. Food Import-Export Regulations: TFDA food inspection assistance, TFDA inquiry review assistance',
    'resume.cosmetics.food.desc3': '3. Food tasting and evaluation',

    // Research Assistant Job Description
    'resume.research.title': 'Novel Psychoactive Substances (NPS) Trend Analysis, Reference Standard Synthesis and Standard Spectra Establishment (TFDA)',
    'resume.research.desc1': '1. Research Plan and Report Writing: NPS trend analysis',
    'resume.research.desc2': '2. NPS Reference Standard Synthesis: Organic synthesis experiment design and operation',
    'resume.research.desc3': '3. Chemical Standard Spectra Establishment: Database creation (NMR, HPLC, IR, GC-EI-MS)',

    // Skills
    'skill.title': 'Skills',
    'skill.subtitle': 'Specialty Skills',
    'skill.web': 'Web Development',
    'skill.web.desc1': 'Frontend Design & Development (Vue.js, React.js)',
    'skill.web.desc2': 'Backend Development (Node.js, MySQL, PostgreSQL)',
    'skill.web.desc3': 'Version Control (GitHub/GitLab) / RESTful API',
    'skill.medical': 'Medical Device R&D',
    'skill.medical.desc1': 'Medical Device Testing & Performance Evaluation',
    'skill.medical.desc2': 'Clinical Evaluation Plan/Report Writing (CE-MDR, FDA, TFDA)',
    'skill.medical.desc3': 'Equipment Maintenance / Fixture Development',
    'skill.medical.desc4': 'Literature Writing & Publication',
    'skill.cosmetics': 'Cosmetics R&D',
    'skill.cosmetics.desc1': 'Cosmetic Product Formulation Design',
    'skill.cosmetics.desc2': 'Stability & Efficacy Evaluation',
    'skill.cosmetics.desc3': 'International Cosmetics Regulations (EU, US, China)',
    'skill.cosmetics.desc4': 'Food/Health Food Efficacy Evaluation',
    'skill.chemistry': 'Organic Chemistry',
    'skill.chemistry.desc1': 'Multi-step Synthesis Reaction Design',
    'skill.chemistry.desc2': 'Compound Purification (Column Chromatography)',
    'skill.chemistry.desc3': 'Chemical Structure Analysis (NMR, IR, MS)',
    'skill.biotech': 'Biotechnology',
    'skill.biotech.desc1': 'Cell/Microbial Culture & Disease Model Establishment',
    'skill.biotech.desc2': 'Laboratory Animal Operations & Biochemical Analysis',
    'skill.biotech.desc3': 'Strain Screening & Improvement (ARTP, RSM)',
    'skill.biotech.desc4': 'Health Food Efficacy Evaluation',
    'skill.computer': 'Computer Skills / Management Systems',
    'skill.computer.desc1': 'Office Software / Reference Management (EndNote)',
    'skill.computer.desc2': 'Statistical Analysis & Plotting (SigmaPlot, SPSS)',
    'skill.computer.desc3': 'Ding Xin ERP System (ERP, EIP, CRM)',

    // Portfolio
    'portfolio.title': 'Projects',
    'portfolio.subtitle': 'Past Projects and Academic Publications',
    'portfolio.all': 'All',
    'portfolio.app': 'Projects',
    'portfolio.product': 'Academic Publications',
    'portfolio.branding': 'Branding',

    // Portfolio Items
    'portfolio.ispan.title': 'iSpan Frontend Engineer Course',
    'portfolio.ispan.period': 'Jun 2024 ~ Nov 2024',
    'portfolio.gurulaptop.title': 'iSpan Final Project - GuruLaptop',
    'portfolio.gurulaptop.period': 'Jun 2024 ~ Ongoing',
    'portfolio.loyalcare.title': 'Nebulizer Development - Loyalcare Nebulizer',
    'portfolio.loyalcare.period': 'Apr 2022 ~ Mar 2024',
    'portfolio.neb.title': 'Nebulizer Development - Parkicare Nebulizer',
    'portfolio.neb.period': 'Apr 2022 ~ Mar 2024',
    'portfolio.silentneb.title': 'Nebulizer Development - SilentNeb Nebulizer',
    'portfolio.silentneb.period': 'Apr 2022 ~ Mar 2024',
    'portfolio.mino.title': 'Makeup Remover Formula Development',
    'portfolio.mino.desc': 'Successful formula replication of famous makeup remover',
    'portfolio.animal.title': 'Animal Experiment Participation Certificate',
    'portfolio.animal.desc': 'Undergraduate Animal Experiment Certificate',
    'portfolio.food49.title': 'Taiwan Food Science & Technology Conference Poster',
    'portfolio.food49.desc': 'Poster Presentation at Food Science Conference',
    'portfolio.bio2018.title': '2018 NTTU Taitung Biological Science Research Exhibition',
    'portfolio.bio2018.desc': '2018 Campus Poster',
    'portfolio.bio2019.title': '2019 Taitung Biological Science Research Exhibition',
    'portfolio.bio2019.desc': '2019 Campus Poster',
    'portfolio.competition.title': 'NTTU Student Learning Achievement Competition',
    'portfolio.competition.desc': 'Campus Poster Competition',
    'portfolio.foodexpert.title': 'Food Industry Professional Certification',
    'portfolio.foodexpert.desc': 'Food Industry Professional Certificate',
    'portfolio.healthfood.title': 'Health Food Engineer Primary Certification',
    'portfolio.healthfood.desc': 'Health Food Engineer Primary Certificate',

    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Contact Me',
    'contact.address': 'Address',
    'contact.address.value': 'Zhongli District, Taoyuan City',
    'contact.call': 'Call',
    'contact.call.value': 'Please contact me by email~',
    'contact.email': 'Email',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.loading': 'Loading',
    'contact.form.success': 'Your message has been sent successfully. Thank you for contacting me! I will reply as soon as possible.',

    // Interests
    'interest.title': 'Interests',
    'interest.subtitle': 'Personal Interests and Hobbies',

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
