import { DOCUMENT } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

export interface NavGroup {
  label: string;
  icon: string;
  children: { label: string; route: string }[];
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
  protected readonly openGroups = signal<Set<string>>(new Set(['Finans']));

  protected readonly navGroups: NavGroup[] = [
    { label: 'Finans & Muhasebe', icon: 'account_balance', children: [
      { label: 'Genel Muhasebe', route: '/erp/finans/genel-muhasebe' },
      { label: 'Alacaklar', route: '/erp/finans/alacaklar' },
      { label: 'Borçlar', route: '/erp/finans/borclar' },
      { label: 'Bütçe Yönetimi', route: '/erp/finans/butce-yonetimi' },
      { label: 'Sabit Kıymetler', route: '/erp/finans/sabit-kiymetler' },
    ]},
    { label: 'Satış & Pazarlama', icon: 'trending_up', children: [
      { label: 'Satış Yönetimi', route: '/erp/satis/satis-yonetimi' },
      { label: 'Müşteri İlişkileri (CRM)', route: '/erp/satis/crm' },
      { label: 'Teklif ve Sipariş', route: '/erp/satis/teklif-siparis' },
      { label: 'Kampanya Yönetimi', route: '/erp/satis/kampanya-yonetimi' },
    ]},
    { label: 'Satın Alma', icon: 'shopping_cart', children: [
      { label: 'Tedarikçi Yönetimi', route: '/erp/satinalma/tedarikci-yonetimi' },
      { label: 'Satın Alma Talepleri', route: '/erp/satinalma/satinalma-talepler' },
      { label: 'Satın Alma Siparişleri', route: '/erp/satinalma/satinalma-siparisler' },
      { label: 'Fiyat ve Sözleşme', route: '/erp/satinalma/fiyat-sozlesme' },
    ]},
    { label: 'Stok & Depo', icon: 'inventory_2', children: [
      { label: 'Envanter Takibi', route: '/erp/stok/envanter-takibi' },
      { label: 'Depo Yönetimi', route: '/erp/stok/depo-yonetimi' },
      { label: 'Lojistik ve Sevkiyat', route: '/erp/stok/lojistik-sevkiyat' },
    ]},
    { label: 'Üretim & Planlama', icon: 'factory', children: [
      { label: 'Üretim Planlama (MRP)', route: '/erp/uretim/uretim-planlama' },
      { label: 'İş Emirleri', route: '/erp/uretim/is-emirleri' },
      { label: 'Kalite Kontrol', route: '/erp/uretim/kalite-kontrol' },
    ]},
    { label: 'İnsan Kaynakları', icon: 'groups', children: [
      { label: 'Personel Yönetimi', route: '/erp/ik/personel-yonetimi' },
      { label: 'Bordro', route: '/erp/ik/bordro' },
      { label: 'İzin ve Mesai', route: '/erp/ik/izin-mesai' },
    ]},
    { label: 'Proje Yönetimi', icon: 'assignment', children: [
      { label: 'Proje Planlama', route: '/erp/proje/proje-planlama' },
      { label: 'Kaynak Yönetimi', route: '/erp/proje/kaynak-yonetimi' },
    ]},
    { label: 'Bakım & Servis', icon: 'build', children: [
      { label: 'Teknik Servis', route: '/erp/bakim/teknik-servis' },
      { label: 'Arıza Takibi', route: '/erp/bakim/ariza-takibi' },
    ]},
    { label: 'E-Ticaret', icon: 'storefront', children: [
      { label: 'Online Sipariş', route: '/erp/eticaret/online-siparis' },
    ]},
    { label: 'Analitik', icon: 'bar_chart', children: [
      { label: 'KPI Takibi', route: '/erp/analitik/kpi-takibi' },
    ]},
    { label: 'Uyum & Güvenlik', icon: 'security', children: [
      { label: 'Yetkilendirme', route: '/erp/uyum/yetkilendirme' },
      { label: 'Denetim İzleri', route: '/erp/uyum/denetim-izleri' },
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

  protected readonly searchIndex = computed<SearchItem[]>(() => [
    {
      label: this.i18n.t('nav.dashboard'),
      hint: this.i18n.language() === 'tr' ? 'Genel KPI, gelir ve aktiviteler' : 'General KPI, revenue and activity overview',
      route: '/dashboard'
    },
    {
      label: this.i18n.t('nav.products'),
      hint: this.i18n.language() === 'tr' ? 'Stok, kategori ve fiyat listesi' : 'Stock, category and price listing',
      route: '/urunler'
    },
    {
      label: this.i18n.t('nav.orders'),
      hint: this.i18n.language() === 'tr' ? 'Siparis durumu ve odeme takibi' : 'Order status and payment tracking',
      route: '/siparisler'
    },
    {
      label: this.i18n.t('nav.finance'),
      hint: this.i18n.language() === 'tr' ? 'Nakit akisi ve butce yonetimi' : 'Cash flow and budget management',
      route: '/finans'
    },
    {
      label: this.i18n.t('nav.settings'),
      hint: this.i18n.language() === 'tr' ? 'Sistem ve bildirim tercihleri' : 'System and notification preferences',
      route: '/ayarlar'
    },
    {
      label: this.i18n.t('dashboard.newTask'),
      hint: this.i18n.language() === 'tr' ? 'Dashboard > Kritik Gorevler' : 'Dashboard > Critical Tasks',
      route: '/dashboard'
    }
  ]);

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
