# Ken - 個人履歷網站

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-purple.svg)](https://getbootstrap.com/) [![Last Updated](https://img.shields.io/badge/Last%20Updated-2025--02--02-brightgreen.svg)](#)

## 🚀 專案描述

這是一個響應式個人履歷網站，展示跨領域全端工程師的專業技能與經驗。從實驗室研發到程式開發，融合科學與創意的職涯歷程。

**網站特色：**

- 🎨 現代化響應式設計
- ⚡ 流暢的動畫效果
- 📱 完美支援行動裝置
- 🔍 SEO 優化設定
- 🌐 社交媒體整合
- 🌍 完整多語言支援（繁體中文/英文）

## 🛠️ 技術棧

### 前端技術

- **框架**: Bootstrap 5.3.3
- **動畫**: AOS (Animate On Scroll)
- **圖片展示**: GLightbox
- **輪播**: Swiper.js
- **佈局**: Isotope Layout
- **圖示**: Bootstrap Icons
- **計數動畫**: PureCounter
- **多語言**: 自製 i18n 系統（支援繁體中文/英文）

### 開發工具

- **版本控制**: Git
- **程式碼編輯器**: VS Code
- **瀏覽器相容性**: Chrome, Firefox, Safari, Edge

## 🌍 多語言系統

### 特色功能

- ✅ **完整雙語支援** - 繁體中文（zh-TW）與英文（en）
- ✅ **動態語言切換** - 無需重新載入頁面
- ✅ **SEO 優化** - 完整的 hreflang 標籤設定
- ✅ **使用者體驗** - 記憶使用者語言偏好（localStorage）
- ✅ **語意化翻譯** - 採用階層式翻譯鍵值結構

### 翻譯系統架構

```javascript
// 翻譯鍵值結構範例
translations = {
  'zh-TW': {
    'nav.home': '首頁',
    'resume.title': '履歷',
    'skill.web': '網頁開發',
    ...
  },
  'en': {
    'nav.home': 'Home',
    'resume.title': 'Resume',
    'skill.web': 'Web Development',
    ...
  }
}
```

### 使用方式

HTML 元素加入 `data-i18n` 屬性：

```html
<h2 data-i18n="resume.title">履歷</h2>
<p data-i18n="resume.subtitle">在學經歷/就業經歷</p>
```

語言切換按鈕會自動替換所有標記元素的文字內容。

### 翻譯完成度

| 頁面           | 進度    | 說明                                   |
| -------------- | ------- | -------------------------------------- |
| index.html     | ✅ 100% | 首頁完整翻譯（含導航、內容、圖片 alt） |
| about.html     | ✅ 100% | 關於我頁面完整翻譯                     |
| resume.html    | ✅ 95%  | 履歷頁面主要結構翻譯完成               |
| skill.html     | ✅ 100% | 技能頁面完整翻譯                       |
| portfolio.html | ✅ 100% | 作品集頁面標題與篩選器翻譯完成         |
| contact.html   | ✅ 100% | 聯絡頁面完整翻譯（含表單欄位）         |
| interest.html  | ✅ 50%  | 基礎翻譯完成（待補充實際內容）         |

## 📁 專案結構

```
kencv/
├── 📄 *.html                    # 網頁檔案（7 個主要頁面）
│   ├── index.html               # 首頁
│   ├── about.html               # 關於我
│   ├── resume.html              # 履歷
│   ├── skill.html               # 專長技能
│   ├── portfolio.html           # 作品集
│   ├── contact.html             # 聯繫我
│   └── interest.html            # 興趣專長
├── 📁 assets/
│   ├── 🎨 css/
│   │   ├── main.css             # 主要樣式檔案
│   │   └── i18n.css             # 多語言切換樣式
│   ├── 🖼️ img/                  # 圖片資源
│   │   ├── masonry-portfolio/   # 作品集圖片
│   │   ├── portfolio/           # 專案圖片
│   │   ├── project/             # 專案詳細圖片
│   │   ├── skill/               # 技能圖示
│   │   └── testimonials/        # 推薦圖片
│   ├── 📜 js/
│   │   ├── main.js              # 主要 JavaScript 檔案
│   │   └── i18n.js              # 多語言系統（400+ 行）
│   ├── 🎨 scss/                 # SCSS 原始檔
│   └── 📦 vendor/               # 第三方套件
│       ├── bootstrap/           # Bootstrap 5.3.3
│       ├── aos/                 # 滾動動畫
│       ├── glightbox/           # 圖片燈箱
│       ├── swiper/              # 輪播元件
│       └── isotope-layout/      # 佈局管理
├── 📝 forms/
│   └── contact.php              # 聯絡表單處理
├── 📦 storage/                  # 儲存檔案
├── .gitignore                  # Git 忽略檔案
├── README.md                   # 專案說明（本檔案）
├── robots.txt                  # 搜尋引擎爬蟲設定
└── sitemap.xml                 # 網站地圖
```

## ✨ 功能特色

- ✅ **響應式設計** - 支援各種裝置尺寸
- ✅ **滑順動畫** - AOS 滾動動畫效果
- ✅ **專案展示** - 完整作品集呈現
- ✅ **技能視覺化** - 動態進度條展示
- ✅ **社交整合** - 多平台社交媒體連結
- ✅ **SEO 優化** - 完整的 Meta 標籤設定
- ✅ **分享優化** - Open Graph 和 Twitter Cards
- ✅ **多語言支援** - 完整繁體中文/英文雙語系統
- ✅ **表單驗證** - 智慧型聯絡表單（整合 Formspree）
- ✅ **程式碼品質** - 遵循 Google Style、單一職責原則（SRP）、開放封閉原則（OCP）

## 🚀 快速開始

### 1. 複製專案

```bash
git clone https://github.com/kenorganization/kencv.git
cd kencv
```

### 2. 開啟網頁

直接在瀏覽器中開啟 `index.html` 或使用本地伺服器：

```bash
# 使用 Python 簡易伺服器
python -m http.server 8000

# 或使用 Node.js http-server
npx http-server
```

### 3. 瀏覽網站

開啟瀏覽器前往 `http://localhost:8000`

## 🌐 部署選項

### GitHub Pages

1. 前往 GitHub 儲存庫設定
2. 選擇 Pages 設定
3. 選擇 main 分支作為來源
4. 網站將部署至 `https://kenorganization.github.io/kencv/`

### 其他託管平台

- **Netlify**: 拖放部署
- **Vercel**: Git 整合部署
- **Firebase Hosting**: Google 雲端部署

## 📞 聯絡資訊

- **開發者**: Ken
- **職位**: 跨領域全端工程師
- **專長**: 網頁開發、醫療器材研發、化妝品研發

## 📋 更新日誌

### 2025-02-02T00:00:00Z

- 🔒 **security**: 移除所有公開顯示的個人 email 地址（隱私保護）
- ✏️ **refactor**: 將所有「」字樣更新為「Ken」（57+ 處）
- 🗑️ **remove**: 移除所有 HTML 頁面 header/footer 的 email 連結（26 處）
- 🔧 **fix**: 移除 contact.html 錯誤訊息中的 email 提示（4 處）
- 📝 **update**: 更新所有頁面 SEO meta tags（title, description, keywords, author）
- 🌐 **update**: 更新 Open Graph 和 Twitter Card 社交媒體標籤
- 🖼️ **update**: 更新所有圖片 alt 屬性翻譯
- 📚 **docs**: 更新 README.md 標題與聯絡資訊
- 🤖 **update**: 更新 robots.txt 註解
- 🌍 **update**: 更新 i18n.js 多語言翻譯（首頁問候語、圖片描述）
- ✅ **保留**: 表單功能的 email 設定（forms/contact.php）
- 📄 **docs**: 新增詳細更新報告（CHANGELOG_2025-02-02T00-00-00Z.md）

### 2025-01-28T18:30:00+08:00

- 🎉 **feat**: 完成所有主要頁面的多語言翻譯系統整合
- ✨ **feat**: 實作完整的 i18n 翻譯引擎（400+ 行翻譯字典）
- 🔧 **feat**: 為 7 個主要頁面加入 data-i18n 翻譯標籤
- 🎨 **feat**: 完成 resume.html 主要內容翻譯標籤
- 📱 **feat**: 完成 skill.html 所有技能項目翻譯
- 🔍 **feat**: 完成 portfolio.html 標題與篩選器翻譯
- 🌐 **feat**: 完成 contact.html 表單欄位翻譯
- 📝 **feat**: 完成 interest.html 基礎翻譯架構
- 📚 **docs**: 更新 README.md，加入完整專案架構與多語言系統說明

### 2025-01-27T15:30:00+08:00

- 🎉 **feat**: 初始化專案 Git 設定
- ✨ **feat**: 新增響應式首頁設計
- 🔧 **feat**: 整合社交媒體優化標籤
- 🎨 **feat**: 實作滾動動畫效果
- 📱 **feat**: 完善行動裝置適配
- 🔍 **feat**: SEO 優化設定
- 🌍 **feat**: 建立多語言系統基礎架構（hreflang、lang 屬性）

## 📄 授權條款

本專案採用 [MIT License](LICENSE) 授權條款。

---

**Template Credit**: 基於 [BootstrapMade Kelly Template](https://bootstrapmade.com/kelly-free-bootstrap-cv-resume-html-template/) 設計開發

---

⭐ 如果這個專案對您有幫助，請給我們一個 Star！
