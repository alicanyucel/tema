# Atlas ERP — Admin Panel

> 🇹🇷 [Türkçe](#-atlas-erp--yönetim-paneli) &nbsp;|&nbsp; 🇬🇧 [English](#-atlas-erp--admin-panel-1) &nbsp;|&nbsp; 🇸🇦 [العربية](#-atlas-erp--لوحة-الإدارة)

---

# 🇹🇷 Atlas ERP — Yönetim Paneli

**Angular 21** ile geliştirilmiş, kurumsal düzeyde çok dilli ve çok modüllü ERP yönetim panelidir.

---

## Özellikler

- **70+ ERP Modülü** — Finans, Satış, Üretim, İK, Lojistik, Blockchain, AI/ML, IoT ve daha fazlası
- **Çok Dil Desteği** — Türkçe, İngilizce ve Arapça (RTL dahil)
- **Karanlık / Aydınlık Tema** — Kullanıcı tercihi localStorage'da saklanır
- **Angular Material** — Modern ve erişilebilir UI bileşenleri
- **Signals tabanlı reaktivite** — Angular 21'in yeni reaktif mimarisi
- **Küresel Arama** — Tüm modüllerde anlık arama
- **Responsive Sidebar** — Grup bazlı açılır kapanır navigasyon
- **Yazı Boyutu Seçeneği** — Kompakt / Standart / Büyük

---

## Teknoloji Yığını

| Teknoloji | Versiyon |
|---|---|
| Angular | 21.2.x |
| Angular Material | 21.2.x |
| TypeScript | 5.9.x |
| RxJS | 7.8.x |
| Vitest | 4.x |

---

## Kurulum

### Gereksinimler

- Node.js 20+
- npm 10+

### Adımlar

```bash
# Depoyu klonla
git clone <repo-url>
cd themeforest-admin

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm start
```

Tarayıcıda `http://localhost:4200` adresine gidin.

---

## Geliştirme Komutları

```bash
# Geliştirme sunucusu (canlı yenileme)
npm start

# Üretim derlemesi
npm run build

# İzleme modunda derleme
npm run watch

# Birim testleri (Vitest)
npm test
```

---

## Proje Yapısı

```
src/
└── app/
    ├── app.ts               # Ana uygulama bileşeni (sidebar, toolbar, nav)
    ├── app.routes.ts        # Tüm ERP modülü rotaları
    ├── i18n.service.ts      # Çok dil desteği (TR / EN / AR)
    ├── pages/
    │   ├── dashboard-page   # Ana dashboard
    │   ├── orders-page      # Siparişler
    │   ├── products-page    # Ürünler
    │   ├── finance-page     # Finans
    │   ├── settings-page    # Ayarlar
    │   └── erp/             # 70+ ERP modülü
    │       ├── finans/
    │       ├── satis/
    │       ├── uretim/
    │       ├── ik/
    │       ├── ai-erp/
    │       ├── blockchain/
    │       ├── iot/
    │       └── ...
    └── shared/
        └── erp-crud/        # Yeniden kullanılabilir CRUD bileşenleri
```

---

## ERP Modülleri

<details>
<summary>Modül listesini göster (70+)</summary>

| Grup | Modüller |
|---|---|
| Finans | Genel Muhasebe, Alacaklar, Borçlar, Bütçe, Sabit Kıymetler |
| Satış | Satış Yönetimi, CRM, Teklif & Sipariş, Kampanya |
| Satın Alma | Tedarikçi, Talepler, Siparişler, Fiyat & Sözleşme |
| Stok & Depo | Envanter, Depo, Lojistik & Sevkiyat |
| Üretim | Planlama, İş Emirleri, Kalite Kontrol |
| İnsan Kaynakları | Personel, Bordro, İzin & Mesai |
| Proje | Proje Planlama, Kaynak Yönetimi |
| Bakım | Teknik Servis, Arıza Takibi |
| E-Fatura | E-Fatura, E-Arşiv, E-İrsaliye, E-Mutabakat |
| Ödeme | Online Banka, Sanal POS, Otomatik Tahsilat |
| AI/ML | ML Modeller, Veri Etiketleme, AI Tahmin, AI Satış |
| Blockchain | Akıllı Sözleşmeler, Dijital Varlık |
| IoT | IoT Cihazlar, Sensör Verisi |
| ESG | ESG Rapor, Karbon Ayak İzi |
| Dijital Sağlık | Sağlık Takip, Wellbeing |
| Tarım ERP | Arazi Yönetimi, Hasat Planlama |
| Havacılık | Uçuş Yönetimi, Bakım Planlama |
| Turizm | Rezervasyon, Oda Yönetimi |
| ... ve daha fazlası | |

</details>

---

## Çok Dil Kullanımı

Dil değiştirme üç şekilde yapılabilir:

1. **Sidebar** — Sol alttaki TR / EN / AR butonları
2. **Toolbar** — Üst menüdeki `translate` ikonu
3. **Ayarlar Sayfası** — Dil seçimi

Seçilen dil `localStorage`'da `atlas-lang` anahtarıyla saklanır. Arapça seçildiğinde sayfa otomatik olarak RTL moduna geçer.

---

## Lisans

Özel kullanım — ThemeForest lisans koşulları geçerlidir.

---

# 🇬🇧 Atlas ERP — Admin Panel

**Angular 21** powered enterprise-grade, multi-language and multi-module ERP admin panel.

---

## Features

- **70+ ERP Modules** — Finance, Sales, Manufacturing, HR, Logistics, Blockchain, AI/ML, IoT and more
- **Multi-Language Support** — Turkish, English and Arabic (including RTL)
- **Dark / Light Theme** — User preference saved in localStorage
- **Angular Material** — Modern and accessible UI components
- **Signals-based reactivity** — Angular 21's new reactive architecture
- **Global Search** — Instant search across all modules
- **Responsive Sidebar** — Group-based collapsible navigation
- **Font Size Options** — Compact / Standard / Large

---

## Tech Stack

| Technology | Version |
|---|---|
| Angular | 21.2.x |
| Angular Material | 21.2.x |
| TypeScript | 5.9.x |
| RxJS | 7.8.x |
| Vitest | 4.x |

---

## Installation

### Requirements

- Node.js 20+
- npm 10+

### Steps

```bash
# Clone the repository
git clone <repo-url>
cd themeforest-admin

# Install dependencies
npm install

# Start the development server
npm start
```

Navigate to `http://localhost:4200` in your browser.

---

## Development Commands

```bash
# Development server (live reload)
npm start

# Production build
npm run build

# Watch mode build
npm run watch

# Unit tests (Vitest)
npm test
```

---

## Project Structure

```
src/
└── app/
    ├── app.ts               # Main app component (sidebar, toolbar, nav)
    ├── app.routes.ts        # All ERP module routes
    ├── i18n.service.ts      # Multi-language support (TR / EN / AR)
    ├── pages/
    │   ├── dashboard-page   # Main dashboard
    │   ├── orders-page      # Orders
    │   ├── products-page    # Products
    │   ├── finance-page     # Finance
    │   ├── settings-page    # Settings
    │   └── erp/             # 70+ ERP modules
    │       ├── finans/
    │       ├── satis/
    │       ├── uretim/
    │       ├── ik/
    │       ├── ai-erp/
    │       ├── blockchain/
    │       ├── iot/
    │       └── ...
    └── shared/
        └── erp-crud/        # Reusable CRUD components
```

---

## ERP Modules

<details>
<summary>Show module list (70+)</summary>

| Group | Modules |
|---|---|
| Finance | General Ledger, Receivables, Payables, Budget, Fixed Assets |
| Sales | Sales Management, CRM, Quotes & Orders, Campaigns |
| Purchasing | Suppliers, Requests, Orders, Pricing & Contracts |
| Stock & Warehouse | Inventory, Warehouse, Logistics & Shipping |
| Manufacturing | Planning, Work Orders, Quality Control |
| Human Resources | Personnel, Payroll, Leave & Overtime |
| Project | Project Planning, Resource Management |
| Maintenance | Technical Service, Fault Tracking |
| E-Invoice | E-Invoice, E-Archive, E-Waybill, E-Reconciliation |
| Payment | Online Bank, Virtual POS, Auto Collection |
| AI/ML | ML Models, Data Labeling, AI Forecast, AI Sales |
| Blockchain | Smart Contracts, Digital Assets |
| IoT | IoT Devices, Sensor Data |
| ESG | ESG Report, Carbon Footprint |
| Digital Health | Health Tracking, Wellbeing |
| Agriculture ERP | Farm & Land, Harvest Planning |
| Aviation | Flight Management, Maintenance Planning |
| Tourism | Reservation, Room Management |
| ... and more | |

</details>

---

## Multi-Language Usage

Language can be changed in three ways:

1. **Sidebar** — TR / EN / AR buttons at the bottom left
2. **Toolbar** — `translate` icon in the top menu
3. **Settings Page** — Language selection

The selected language is stored in `localStorage` under the key `atlas-lang`. When Arabic is selected, the page automatically switches to RTL mode.

---

## License

Private use — ThemeForest license terms apply.

---

# 🇸🇦 Atlas ERP — لوحة الإدارة

<div dir="rtl">

لوحة إدارة ERP متعددة اللغات والوحدات على مستوى المؤسسات، مطوّرة بـ **Angular 21**.

---

## المميزات

- **أكثر من 70 وحدة ERP** — المالية، المبيعات، التصنيع، الموارد البشرية، اللوجستيات، بلوكشين، الذكاء الاصطناعي/ML، إنترنت الأشياء والمزيد
- **دعم متعدد اللغات** — التركية والإنجليزية والعربية (بما في ذلك RTL)
- **الوضع الداكن / الفاتح** — يتم حفظ تفضيل المستخدم في localStorage
- **Angular Material** — مكونات واجهة مستخدم حديثة وقابلة للوصول
- **تفاعلية قائمة على الإشارات** — البنية التفاعلية الجديدة في Angular 21
- **البحث العالمي** — بحث فوري في جميع الوحدات
- **الشريط الجانبي المتجاوب** — تنقل قابل للطي حسب المجموعة
- **خيارات حجم الخط** — مضغوط / قياسي / كبير

---

## التقنيات المستخدمة

| التقنية | الإصدار |
|---|---|
| Angular | 21.2.x |
| Angular Material | 21.2.x |
| TypeScript | 5.9.x |
| RxJS | 7.8.x |
| Vitest | 4.x |

---

## التثبيت

### المتطلبات

- Node.js 20+
- npm 10+

### الخطوات

```bash
# استنساخ المستودع
git clone <repo-url>
cd themeforest-admin

# تثبيت التبعيات
npm install

# تشغيل خادم التطوير
npm start
```

انتقل إلى `http://localhost:4200` في متصفحك.

---

## أوامر التطوير

```bash
# خادم التطوير (إعادة التحميل الفوري)
npm start

# بناء الإنتاج
npm run build

# بناء في وضع المراقبة
npm run watch

# اختبارات الوحدة (Vitest)
npm test
```

---

## هيكل المشروع

```
src/
└── app/
    ├── app.ts               # المكوّن الرئيسي (الشريط الجانبي، شريط الأدوات، التنقل)
    ├── app.routes.ts        # جميع مسارات وحدات ERP
    ├── i18n.service.ts      # دعم متعدد اللغات (TR / EN / AR)
    ├── pages/
    │   ├── dashboard-page   # لوحة التحكم الرئيسية
    │   ├── orders-page      # الطلبات
    │   ├── products-page    # المنتجات
    │   ├── finance-page     # المالية
    │   ├── settings-page    # الإعدادات
    │   └── erp/             # أكثر من 70 وحدة ERP
    │       ├── finans/
    │       ├── satis/
    │       ├── uretim/
    │       ├── ik/
    │       ├── ai-erp/
    │       ├── blockchain/
    │       ├── iot/
    │       └── ...
    └── shared/
        └── erp-crud/        # مكونات CRUD قابلة لإعادة الاستخدام
```

---

## وحدات ERP

<details>
<summary>عرض قائمة الوحدات (70+)</summary>

| المجموعة | الوحدات |
|---|---|
| المالية | دفتر الأستاذ، الذمم المدينة، الذمم الدائنة، الميزانية، الأصول الثابتة |
| المبيعات | إدارة المبيعات، CRM، العروض والطلبات، الحملات |
| المشتريات | الموردون، الطلبات، أوامر الشراء، التسعير والعقود |
| المخزون والمستودع | المخزون، المستودع، اللوجستيات والشحن |
| التصنيع | التخطيط، أوامر العمل، مراقبة الجودة |
| الموارد البشرية | الموظفون، الرواتب، الإجازات والعمل الإضافي |
| المشاريع | تخطيط المشروع، إدارة الموارد |
| الصيانة | الخدمة الفنية، تتبع الأعطال |
| الفاتورة الإلكترونية | فاتورة إلكترونية، أرشيف، بوليصة شحن، مطابقة |
| المدفوعات | البنك الإلكتروني، POS افتراضي، التحصيل التلقائي |
| الذكاء الاصطناعي/ML | نماذج ML، تصنيف البيانات، التنبؤ، مبيعات AI |
| بلوكشين | العقود الذكية، الأصول الرقمية |
| إنترنت الأشياء | أجهزة IoT، بيانات الاستشعار |
| ESG | تقرير ESG، البصمة الكربونية |
| الصحة الرقمية | تتبع الصحة، برنامج العافية |
| الزراعة ERP | الأراضي الزراعية، تخطيط الحصاد |
| الطيران | إدارة الرحلات، تخطيط الصيانة |
| السياحة | الحجز، إدارة الغرف |
| ... والمزيد | |

</details>

---

## استخدام التعدد اللغوي

يمكن تغيير اللغة بثلاث طرق:

1. **الشريط الجانبي** — أزرار TR / EN / AR في أسفل اليسار
2. **شريط الأدوات** — أيقونة `translate` في القائمة العلوية
3. **صفحة الإعدادات** — اختيار اللغة

يتم تخزين اللغة المحددة في `localStorage` تحت المفتاح `atlas-lang`. عند اختيار العربية، تنتقل الصفحة تلقائياً إلى وضع RTL.

---

## الرخصة

استخدام خاص — تسري شروط ترخيص ThemeForest.

</div>

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
