import { DOCUMENT } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
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
  protected readonly fontSizeOptions: FontSizeOption[] = [
    { label: 'Kompakt', scale: 0.93 },
    { label: 'Standart', scale: 1 },
    { label: 'Buyuk', scale: 1.08 }
  ];
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
