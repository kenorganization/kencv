# 專案檔案結構說明

**最後更新**: 2025-02-02T00:00:00Z

---

## 📁 根目錄檔案

### 主要 HTML 頁面

```
index.html              - 首頁
about.html              - 關於我
contact.html            - 聯絡方式
skill.html              - 專長技能
resume.html             - 工作履歷
portfolio.html          - 作品集
interest.html           - 興趣專長
```

### 專案展示頁面

```
project-ispan.html      - 資展國際專案
project-gurulaptop.html - GuruLaptop 專案
project-loyalcare.html  - LoyalCare 專案
project-Neb.html        - Neb 霧化器專案
project-silentneb.html  - SilentNeb 專案
portfolio-details.html  - 作品詳情範本
starter-page.html       - 頁面範本
```

### 設定與文件檔案

```
README.md                           - 專案說明文件
CHANGELOG_2025-02-02T00-00-00Z.md  - 隱私更新報告（本次更新）
robots.txt                          - SEO 爬蟲設定
sitemap.xml                         - 網站地圖
.gitignore                          - Git 忽略設定
.prettierrc                         - 程式碼格式化設定
Readme.txt                          - 額外說明
note                                - 筆記檔案
```

---

## 📂 資料夾結構

### `assets/` - 靜態資源

#### `assets/css/` - 樣式表

```
main.css                - 主要樣式表
i18n.css                - 多語言樣式
```

#### `assets/js/` - JavaScript 腳本

```
main.js                 - 主要功能腳本
i18n.js                 - 多語言翻譯系統
```

#### `assets/img/` - 圖片資源

```
img/
├── favicon.png                    - 網站圖示
├── profile-img.jpg                - 個人照片
├── hero-bg1.png                   - 首頁背景
├── Ken_signature.png              - 簽名圖
├── logo.png                       - Logo
├── masonry-portfolio/             - 作品集圖片
├── portfolio/                     - 專案展示圖
├── project/                       - 專案詳細圖片
│   ├── gurulaptop.avif
│   ├── ispan1.avif
│   ├── loyalcare1.jpg
│   ├── microbase/                 - 微霸公司專案圖片
│   │   ├── Neb.jpg
│   │   ├── Neb1.png
│   │   ├── Neb2.jpg
│   │   └── SN.jpg
│   └── resume/                    - 履歷相關證書圖片
│       ├── 10805.JPG              - 證書
│       ├── 2018bio.JPG
│       ├── 2019bio.JPG
│       ├── 49-food.png
│       └── animaltest.JPG
├── skill/                         - 技能展示圖片
│   ├── 1.png ~ 6.png
└── testimonials/                  - 推薦人照片
```

#### `assets/vendor/` - 第三方套件

```
vendor/
├── aos/                           - 滾動動畫
├── bootstrap/                     - Bootstrap 框架
│   ├── css/
│   └── js/
├── bootstrap-icons/               - Bootstrap 圖示
├── glightbox/                     - 圖片燈箱
├── imagesloaded/                  - 圖片載入
├── isotope-layout/                - 佈局排版
├── php-email-form/                - 表單驗證
├── purecounter/                   - 數字動畫
├── swiper/                        - 輪播功能
└── waypoints/                     - 滾動偵測
```

#### `assets/scss/` - SCSS 原始檔（如有）

```
scss/
└── Readme.txt                     - SCSS 說明
```

---

### `forms/` - 表單處理

```
forms/
├── contact.php                    - 聯絡表單後端處理
└── Readme.txt                     - 表單說明
```

**重要**: `contact.php` 包含接收郵件的功能性設定，已保留 email 地址以確保表單正常運作。

---

### `storage/` - 儲存目錄

用於存放臨時檔案或其他需要儲存的資料。

---

## 🔒 隱私保護措施

### 已移除的敏感資訊

1. **姓名**: 所有「」已更新為「Ken」
2. **Email 地址**:
   - ✅ 所有 UI 顯示的 email 已移除
   - ✅ SEO meta tags 中的 email 已移除
   - ✅ 錯誤訊息中的 email 提示已移除
   - ⚠️ 保留 `forms/contact.php` 中的功能性設定

### 保留的功能

- 聯絡表單仍可正常運作
- 表單提交後端處理正常
- 郵件通知功能保持可用

---

## 📋 檔案統計

| 類型            | 數量                  |
| --------------- | --------------------- |
| HTML 頁面       | 14 個                 |
| CSS 檔案        | 2 個主要檔案 + vendor |
| JavaScript 檔案 | 2 個主要檔案 + vendor |
| 圖片檔案        | 50+ 個                |
| 第三方套件      | 10 個                 |
| 設定檔案        | 5 個                  |

---

## 🔄 版本控制

建議使用以下 Git 指令提交更新：

```bash
git add .
git commit -m "feat: 隱私保護更新 - 移除敏感資訊"
git push
```

---

## 📞 技術支援

如有任何問題，請透過網站聯絡表單聯繫。

---

**文檔版本**: 1.0.0  
**建立日期**: 2025-02-02
