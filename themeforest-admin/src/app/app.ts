import { DOCUMENT } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

export interface NavGroup {
  key: string;
  icon: string;
  children: { key: string; route: string }[];
}
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppLanguage, I18nService } from './i18n.service';

interface SearchItem {
  label: string;
  hint: string;
  route: string;
}

interface NotificationItem {
  title: string;
  detail: string;
  time: string;
  unread: boolean;
}

interface MessageItem {
  from: string;
  text: string;
  time: string;
  unread: boolean;
}

type FontSizeMode = 'Kompakt' | 'Standart' | 'Buyuk';

interface FontSizeOption {
  label: FontSizeMode;
  scale: number;
}

@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatBadgeModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  protected readonly i18n = inject(I18nService);
  protected readonly sidebarOpen = signal(true);
  protected readonly isDarkMode = signal(this.getInitialThemeMode());
  protected readonly openGroups = signal<Set<string>>(new Set(['nav.group.finans']));

  protected readonly navGroups: NavGroup[] = [
    { key: 'nav.group.finans', icon: 'account_balance', children: [
      { key: 'nav.genel-muhasebe', route: '/erp/finans/genel-muhasebe' },
      { key: 'nav.alacaklar', route: '/erp/finans/alacaklar' },
      { key: 'nav.borclar', route: '/erp/finans/borclar' },
      { key: 'nav.butce-yonetimi', route: '/erp/finans/butce-yonetimi' },
      { key: 'nav.sabit-kiymetler', route: '/erp/finans/sabit-kiymetler' },
    ]},
    { key: 'nav.group.satis', icon: 'trending_up', children: [
      { key: 'nav.satis-yonetimi', route: '/erp/satis/satis-yonetimi' },
      { key: 'nav.crm', route: '/erp/satis/crm' },
      { key: 'nav.teklif-siparis', route: '/erp/satis/teklif-siparis' },
      { key: 'nav.kampanya-yonetimi', route: '/erp/satis/kampanya-yonetimi' },
    ]},
    { key: 'nav.group.satinalma', icon: 'shopping_cart', children: [
      { key: 'nav.tedarikci-yonetimi', route: '/erp/satinalma/tedarikci-yonetimi' },
      { key: 'nav.satinalma-talepler', route: '/erp/satinalma/satinalma-talepler' },
      { key: 'nav.satinalma-siparisler', route: '/erp/satinalma/satinalma-siparisler' },
      { key: 'nav.fiyat-sozlesme', route: '/erp/satinalma/fiyat-sozlesme' },
    ]},
    { key: 'nav.group.stok', icon: 'inventory_2', children: [
      { key: 'nav.envanter-takibi', route: '/erp/stok/envanter-takibi' },
      { key: 'nav.depo-yonetimi', route: '/erp/stok/depo-yonetimi' },
      { key: 'nav.lojistik-sevkiyat', route: '/erp/stok/lojistik-sevkiyat' },
    ]},
    { key: 'nav.group.uretim', icon: 'factory', children: [
      { key: 'nav.uretim-planlama', route: '/erp/uretim/uretim-planlama' },
      { key: 'nav.is-emirleri', route: '/erp/uretim/is-emirleri' },
      { key: 'nav.kalite-kontrol', route: '/erp/uretim/kalite-kontrol' },
    ]},
    { key: 'nav.group.ik', icon: 'groups', children: [
      { key: 'nav.personel-yonetimi', route: '/erp/ik/personel-yonetimi' },
      { key: 'nav.bordro', route: '/erp/ik/bordro' },
      { key: 'nav.izin-mesai', route: '/erp/ik/izin-mesai' },
    ]},
    { key: 'nav.group.proje', icon: 'assignment', children: [
      { key: 'nav.proje-planlama', route: '/erp/proje/proje-planlama' },
      { key: 'nav.kaynak-yonetimi', route: '/erp/proje/kaynak-yonetimi' },
    ]},
    { key: 'nav.group.bakim', icon: 'build', children: [
      { key: 'nav.teknik-servis', route: '/erp/bakim/teknik-servis' },
      { key: 'nav.ariza-takibi', route: '/erp/bakim/ariza-takibi' },
    ]},
    { key: 'nav.group.eticaret', icon: 'storefront', children: [
      { key: 'nav.online-siparis', route: '/erp/eticaret/online-siparis' },
    ]},
    { key: 'nav.group.analitik', icon: 'bar_chart', children: [
      { key: 'nav.kpi-takibi', route: '/erp/analitik/kpi-takibi' },
    ]},
    { key: 'nav.group.uyum', icon: 'security', children: [
      { key: 'nav.yetkilendirme', route: '/erp/uyum/yetkilendirme' },
      { key: 'nav.denetim-izleri', route: '/erp/uyum/denetim-izleri' },
    ]},
    { key: 'nav.group.dokuman', icon: 'folder', children: [
      { key: 'nav.belge-arsivleme', route: '/erp/dokuman/belge-arsivleme' },
      { key: 'nav.versiyon-kontrol', route: '/erp/dokuman/versiyon-kontrol' },
      { key: 'nav.elektronik-imza', route: '/erp/dokuman/elektronik-imza' },
    ]},
    { key: 'nav.group.kalite', icon: 'verified', children: [
      { key: 'nav.iso-uyum', route: '/erp/kalite/iso-uyum' },
      { key: 'nav.denetim-sertifikasyon', route: '/erp/kalite/denetim-sertifikasyon' },
      { key: 'nav.surekli-iyilestirme', route: '/erp/kalite/surekli-iyilestirme' },
    ]},
    { key: 'nav.group.ehs', icon: 'health_and_safety', children: [
      { key: 'nav.is-sagligi-guvenligi', route: '/erp/ehs/is-sagligi-guvenligi' },
      { key: 'nav.cevresel-etki', route: '/erp/ehs/cevresel-etki' },
      { key: 'nav.risk-yonetimi', route: '/erp/ehs/risk-yonetimi' },
    ]},
    { key: 'nav.group.plm', icon: 'precision_manufacturing', children: [
      { key: 'nav.urun-tasarimi', route: '/erp/plm/urun-tasarimi' },
      { key: 'nav.plm-versiyonlama', route: '/erp/plm/versiyonlama' },
      { key: 'nav.urun-gelistirme', route: '/erp/plm/urun-gelistirme' },
    ]},
    { key: 'nav.group.scm', icon: 'local_shipping', children: [
      { key: 'nav.talep-tahmini', route: '/erp/scm/talep-tahmini' },
      { key: 'nav.lojistik-optimizasyon', route: '/erp/scm/lojistik-optimizasyon' },
      { key: 'nav.tedarikci-performans', route: '/erp/scm/tedarikci-performans' },
    ]},
    { key: 'nav.group.musteri-destek', icon: 'support_agent', children: [
      { key: 'nav.cagri-merkezi', route: '/erp/musteri-destek/cagri-merkezi' },
      { key: 'nav.ticket-yonetimi', route: '/erp/musteri-destek/ticket-yonetimi' },
      { key: 'nav.chatbot-ai', route: '/erp/musteri-destek/chatbot-ai' },
    ]},
    { key: 'nav.group.efatura', icon: 'receipt', children: [
      { key: 'nav.e-fatura', route: '/erp/efatura/e-fatura' },
      { key: 'nav.e-arsiv', route: '/erp/efatura/e-arsiv' },
      { key: 'nav.e-irsaliye', route: '/erp/efatura/e-irsaliye' },
      { key: 'nav.e-mutabakat', route: '/erp/efatura/e-mutabakat' },
    ]},
    { key: 'nav.group.odeme', icon: 'payments', children: [
      { key: 'nav.online-banka', route: '/erp/odeme/online-banka' },
      { key: 'nav.sanal-pos', route: '/erp/odeme/sanal-pos' },
      { key: 'nav.otomatik-tahsilat', route: '/erp/odeme/otomatik-tahsilat' },
    ]},
    { key: 'nav.group.lms', icon: 'school', children: [
      { key: 'nav.calisan-egitimi', route: '/erp/lms/calisan-egitimi' },
      { key: 'nav.sertifika-takibi', route: '/erp/lms/sertifika-takibi' },
      { key: 'nav.online-egitim', route: '/erp/lms/online-egitim' },
    ]},
    { key: 'nav.group.inovasyon', icon: 'lightbulb', children: [
      { key: 'nav.oneri-sistemi', route: '/erp/inovasyon/oneri-sistemi' },
      { key: 'nav.inovasyon-projeleri', route: '/erp/inovasyon/inovasyon-projeleri' },
      { key: 'nav.degerlendirme-odullendirme', route: '/erp/inovasyon/degerlendirme-odullendirme' },
    ]},
  ];
  protected readonly fontSizeOptions: FontSizeOption[] = [
    { label: 'Kompakt', scale: 0.93 },
    { label: 'Standart', scale: 1 },
    { label: 'Buyuk', scale: 1.08 }
  ];

  protected isGroupOpen(label: string): boolean {
    return this.openGroups().has(label);
  }

  protected toggleGroup(label: string): void {
    this.openGroups.update(set => {
      const next = new Set(set);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  }
  protected readonly selectedFontSize = signal<FontSizeMode>(this.getInitialFontSizeMode());
  protected readonly globalQuery = signal('');

  protected readonly searchIndex = computed<SearchItem[]>(() => {
    const t = (k: string) => this.i18n.t(k);
    const g = (groupKey: string) => t(groupKey);
    return [
      { label: t('nav.dashboard'),            hint: t('nav.group.analitik'),            route: '/dashboard' },
      { label: t('nav.settings'),             hint: t('nav.group.uyum'),                route: '/ayarlar' },
      // Finans
      { label: t('nav.genel-muhasebe'),       hint: t('nav.group.finans'),              route: '/erp/finans/genel-muhasebe' },
      { label: t('nav.alacaklar'),            hint: t('nav.group.finans'),              route: '/erp/finans/alacaklar' },
      { label: t('nav.borclar'),              hint: t('nav.group.finans'),              route: '/erp/finans/borclar' },
      { label: t('nav.butce-yonetimi'),       hint: t('nav.group.finans'),              route: '/erp/finans/butce-yonetimi' },
      { label: t('nav.sabit-kiymetler'),      hint: t('nav.group.finans'),              route: '/erp/finans/sabit-kiymetler' },
      // Satış
      { label: t('nav.satis-yonetimi'),       hint: t('nav.group.satis'),               route: '/erp/satis/satis-yonetimi' },
      { label: t('nav.crm'),                  hint: t('nav.group.satis'),               route: '/erp/satis/crm' },
      { label: t('nav.teklif-siparis'),       hint: t('nav.group.satis'),               route: '/erp/satis/teklif-siparis' },
      { label: t('nav.kampanya-yonetimi'),    hint: t('nav.group.satis'),               route: '/erp/satis/kampanya-yonetimi' },
      // Satın Alma
      { label: t('nav.tedarikci-yonetimi'),  hint: t('nav.group.satinalma'),            route: '/erp/satinalma/tedarikci-yonetimi' },
      { label: t('nav.satinalma-talepler'),   hint: t('nav.group.satinalma'),           route: '/erp/satinalma/satinalma-talepler' },
      { label: t('nav.satinalma-siparisler'), hint: t('nav.group.satinalma'),           route: '/erp/satinalma/satinalma-siparisler' },
      { label: t('nav.fiyat-sozlesme'),       hint: t('nav.group.satinalma'),           route: '/erp/satinalma/fiyat-sozlesme' },
      // Stok
      { label: t('nav.envanter-takibi'),      hint: t('nav.group.stok'),                route: '/erp/stok/envanter-takibi' },
      { label: t('nav.depo-yonetimi'),        hint: t('nav.group.stok'),                route: '/erp/stok/depo-yonetimi' },
      { label: t('nav.lojistik-sevkiyat'),    hint: t('nav.group.stok'),                route: '/erp/stok/lojistik-sevkiyat' },
      // Üretim
      { label: t('nav.uretim-planlama'),      hint: t('nav.group.uretim'),              route: '/erp/uretim/uretim-planlama' },
      { label: t('nav.is-emirleri'),          hint: t('nav.group.uretim'),              route: '/erp/uretim/is-emirleri' },
      { label: t('nav.kalite-kontrol'),       hint: t('nav.group.uretim'),              route: '/erp/uretim/kalite-kontrol' },
      // İK
      { label: t('nav.personel-yonetimi'),    hint: t('nav.group.ik'),                  route: '/erp/ik/personel-yonetimi' },
      { label: t('nav.bordro'),               hint: t('nav.group.ik'),                  route: '/erp/ik/bordro' },
      { label: t('nav.izin-mesai'),           hint: t('nav.group.ik'),                  route: '/erp/ik/izin-mesai' },
      // Proje
      { label: t('nav.proje-planlama'),       hint: t('nav.group.proje'),               route: '/erp/proje/proje-planlama' },
      { label: t('nav.kaynak-yonetimi'),      hint: t('nav.group.proje'),               route: '/erp/proje/kaynak-yonetimi' },
      // Bakım
      { label: t('nav.teknik-servis'),        hint: t('nav.group.bakim'),               route: '/erp/bakim/teknik-servis' },
      { label: t('nav.ariza-takibi'),         hint: t('nav.group.bakim'),               route: '/erp/bakim/ariza-takibi' },
      // E-Ticaret
      { label: t('nav.online-siparis'),       hint: t('nav.group.eticaret'),            route: '/erp/eticaret/online-siparis' },
      // Analitik
      { label: t('nav.kpi-takibi'),           hint: t('nav.group.analitik'),            route: '/erp/analitik/kpi-takibi' },
      // Uyum
      { label: t('nav.yetkilendirme'),        hint: t('nav.group.uyum'),                route: '/erp/uyum/yetkilendirme' },
      { label: t('nav.denetim-izleri'),       hint: t('nav.group.uyum'),                route: '/erp/uyum/denetim-izleri' },
      // Doküman
      { label: t('nav.belge-arsivleme'),       hint: t('nav.group.dokuman'),             route: '/erp/dokuman/belge-arsivleme' },
      { label: t('nav.versiyon-kontrol'),      hint: t('nav.group.dokuman'),             route: '/erp/dokuman/versiyon-kontrol' },
      { label: t('nav.elektronik-imza'),       hint: t('nav.group.dokuman'),             route: '/erp/dokuman/elektronik-imza' },
      // Kalite
      { label: t('nav.iso-uyum'),              hint: t('nav.group.kalite'),              route: '/erp/kalite/iso-uyum' },
      { label: t('nav.denetim-sertifikasyon'), hint: t('nav.group.kalite'),              route: '/erp/kalite/denetim-sertifikasyon' },
      { label: t('nav.surekli-iyilestirme'),   hint: t('nav.group.kalite'),              route: '/erp/kalite/surekli-iyilestirme' },
      // EHS
      { label: t('nav.is-sagligi-guvenligi'),  hint: t('nav.group.ehs'),                route: '/erp/ehs/is-sagligi-guvenligi' },
      { label: t('nav.cevresel-etki'),         hint: t('nav.group.ehs'),                route: '/erp/ehs/cevresel-etki' },
      { label: t('nav.risk-yonetimi'),         hint: t('nav.group.ehs'),                route: '/erp/ehs/risk-yonetimi' },
      // PLM
      { label: t('nav.urun-tasarimi'),         hint: t('nav.group.plm'),                route: '/erp/plm/urun-tasarimi' },
      { label: t('nav.plm-versiyonlama'),      hint: t('nav.group.plm'),                route: '/erp/plm/versiyonlama' },
      { label: t('nav.urun-gelistirme'),       hint: t('nav.group.plm'),                route: '/erp/plm/urun-gelistirme' },
      // SCM
      { label: t('nav.talep-tahmini'),         hint: t('nav.group.scm'),                route: '/erp/scm/talep-tahmini' },
      { label: t('nav.lojistik-optimizasyon'), hint: t('nav.group.scm'),                route: '/erp/scm/lojistik-optimizasyon' },
      { label: t('nav.tedarikci-performans'),  hint: t('nav.group.scm'),                route: '/erp/scm/tedarikci-performans' },
      // Müşteri Destek
      { label: t('nav.cagri-merkezi'),         hint: t('nav.group.musteri-destek'),     route: '/erp/musteri-destek/cagri-merkezi' },
      { label: t('nav.ticket-yonetimi'),       hint: t('nav.group.musteri-destek'),     route: '/erp/musteri-destek/ticket-yonetimi' },
      { label: t('nav.chatbot-ai'),            hint: t('nav.group.musteri-destek'),     route: '/erp/musteri-destek/chatbot-ai' },
      // E-Fatura
      { label: t('nav.e-fatura'),              hint: t('nav.group.efatura'),            route: '/erp/efatura/e-fatura' },
      { label: t('nav.e-arsiv'),               hint: t('nav.group.efatura'),            route: '/erp/efatura/e-arsiv' },
      { label: t('nav.e-irsaliye'),            hint: t('nav.group.efatura'),            route: '/erp/efatura/e-irsaliye' },
      { label: t('nav.e-mutabakat'),           hint: t('nav.group.efatura'),            route: '/erp/efatura/e-mutabakat' },
      // Ödeme
      { label: t('nav.online-banka'),          hint: t('nav.group.odeme'),              route: '/erp/odeme/online-banka' },
      { label: t('nav.sanal-pos'),             hint: t('nav.group.odeme'),              route: '/erp/odeme/sanal-pos' },
      { label: t('nav.otomatik-tahsilat'),     hint: t('nav.group.odeme'),              route: '/erp/odeme/otomatik-tahsilat' },
      // LMS
      { label: t('nav.calisan-egitimi'),       hint: t('nav.group.lms'),                route: '/erp/lms/calisan-egitimi' },
      { label: t('nav.sertifika-takibi'),      hint: t('nav.group.lms'),                route: '/erp/lms/sertifika-takibi' },
      { label: t('nav.online-egitim'),         hint: t('nav.group.lms'),                route: '/erp/lms/online-egitim' },
      // İnovasyon
      { label: t('nav.oneri-sistemi'),             hint: t('nav.group.inovasyon'),      route: '/erp/inovasyon/oneri-sistemi' },
      { label: t('nav.inovasyon-projeleri'),        hint: t('nav.group.inovasyon'),      route: '/erp/inovasyon/inovasyon-projeleri' },
      { label: t('nav.degerlendirme-odullendirme'), hint: t('nav.group.inovasyon'),      route: '/erp/inovasyon/degerlendirme-odullendirme' },
    ];
  });

  protected readonly notifications = signal<NotificationItem[]>([
    {
      title: 'Yeni siparis onay bekliyor',
      detail: 'SO-24103 nolu siparis finans onayi bekliyor.',
      time: '2 dk once',
      unread: true
    },
    {
      title: 'Stok seviyesi kritik',
      detail: 'PRD-1028 urunu 12 adedin altina dustu.',
      time: '14 dk once',
      unread: true
    },
    {
      title: 'Muhasebe aktarimi tamamlandi',
      detail: 'Gun sonu hareketleri ERP sistemine islendi.',
      time: '31 dk once',
      unread: true
    },
    {
      title: 'Sunucu bakimi planlandi',
      detail: 'Pazar gecesi 02:00-03:00 arasi planli kesinti var.',
      time: '1 saat once',
      unread: false
    },
    {
      title: 'Iade talebi acildi',
      detail: 'Nova Market icin 3 kalemde iade baslatildi.',
      time: '2 saat once',
      unread: false
    }
  ]);

  protected readonly messages = signal<MessageItem[]>([
    {
      from: 'Mert Demir',
      text: 'Depo senkronizasyon patchini canliya alabiliriz.',
      time: '3 dk once',
      unread: true
    },
    {
      from: 'Aylin Kara',
      text: 'Onboarding akisi icin son dokumani guncelledim.',
      time: '9 dk once',
      unread: true
    },
    {
      from: 'Selin Usta',
      text: 'Dashboard filtrelerinde mobile optimizasyon tamam.',
      time: '26 dk once',
      unread: true
    },
    {
      from: 'Finans Ekip',
      text: 'Bugun 16:00 toplantisi icin rapor hazir.',
      time: '52 dk once',
      unread: false
    }
  ]);

  protected readonly notificationBadge = computed(() => this.notifications().filter((item) => item.unread).length);
  protected readonly messageBadge = computed(() => this.messages().filter((item) => item.unread).length);

  private readonly themeEffect = effect(() => {
    const dark = this.isDarkMode();
    this.document.body.classList.toggle('theme-dark', dark);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('atlas-theme', dark ? 'dark' : 'light');
    }
  });

  private readonly fontScaleEffect = effect(() => {
    const mode = this.selectedFontSize();
    const scale = this.fontSizeOptions.find((item) => item.label === mode)?.scale ?? 1;
    this.document.documentElement.style.setProperty('--font-scale', `${scale}`);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('atlas-font-size', mode);
    }
  });

  protected readonly filteredSearchResults = computed(() => {
    const query = this.globalQuery().trim().toLowerCase();
    if (!query) {
      return [] as SearchItem[];
    }

    return this.searchIndex().filter((item) => `${item.label} ${item.hint}`.toLowerCase().includes(query)).slice(0, 6);
  });

  protected toggleSidebar(): void {
    this.sidebarOpen.update((state) => !state);
  }

  protected toggleTheme(): void {
    this.isDarkMode.update((value) => !value);
  }

  protected setFontSize(mode: FontSizeMode): void {
    this.selectedFontSize.set(mode);
  }

  protected setLanguage(lang: AppLanguage): void {
    this.i18n.setLanguage(lang);
  }

  protected onGlobalSearchInput(value: string): void {
    this.globalQuery.set(value);
  }

  protected openSearchResult(item: SearchItem): void {
    this.globalQuery.set('');
    this.router.navigateByUrl(item.route);
  }

  protected openFirstSearchResult(): void {
    const [first] = this.filteredSearchResults();
    if (first) {
      this.openSearchResult(first);
    }
  }

  protected markAllNotificationsRead(): void {
    this.notifications.update((items) => items.map((item) => ({ ...item, unread: false })));
  }

  protected markAllMessagesRead(): void {
    this.messages.update((items) => items.map((item) => ({ ...item, unread: false })));
  }

  protected openAllNotifications(): void {
    this.router.navigateByUrl('/siparisler');
  }

  protected openAllMessages(): void {
    this.router.navigateByUrl('/dashboard');
  }

  private getInitialThemeMode(): boolean {
    const savedTheme = typeof localStorage !== 'undefined' ? localStorage.getItem('atlas-theme') : null;
    if (savedTheme === 'dark') {
      return true;
    }

    if (savedTheme === 'light') {
      return false;
    }

    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    return false;
  }

  private getInitialFontSizeMode(): FontSizeMode {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('atlas-font-size') : null;
    if (saved === 'Kompakt' || saved === 'Standart' || saved === 'Buyuk') {
      return saved;
    }

    return 'Standart';
  }
}
