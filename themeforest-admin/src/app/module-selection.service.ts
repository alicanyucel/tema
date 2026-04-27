import { Injectable, signal, computed } from '@angular/core';

const STORAGE_KEY = 'erp_enabled_modules';

// Tüm mevcut modül group key'leri
export const ALL_MODULE_KEYS: string[] = [
  'nav.group.finans',
  'nav.group.satis',
  'nav.group.satinalma',
  'nav.group.stok',
  'nav.group.uretim',
  'nav.group.ik',
  'nav.group.proje',
  'nav.group.bakim',
  'nav.group.eticaret',
  'nav.group.analitik',
  'nav.group.uyum',
  'nav.group.dokuman',
  'nav.group.kalite',
  'nav.group.ehs',
  'nav.group.plm',
  'nav.group.scm',
  'nav.group.musteri-destek',
  'nav.group.efatura',
  'nav.group.odeme',
  'nav.group.lms',
  'nav.group.inovasyon',
  'nav.group.is-zekasi',
  'nav.group.mobil-erp',
  'nav.group.uluslararasi',
  'nav.group.sadakat',
  'nav.group.tedarikci-portal',
  'nav.group.aps',
  'nav.group.risk-sigorta',
  'nav.group.enerji',
  'nav.group.hukuk',
  'nav.group.inovasyon-startup',
  'nav.group.sosyal-erp',
  'nav.group.ai-erp',
  'nav.group.musteri-ux',
  'nav.group.iot',
  'nav.group.ai-ml',
  'nav.group.blockchain',
  'nav.group.musteri-portal',
  'nav.group.satis-sonrasi',
  'nav.group.dijital-pazarlama',
  'nav.group.veri-guvenligi',
  'nav.group.bpm',
  'nav.group.sektörel',
  'nav.group.ai-tahmin',
  'nav.group.dijital-ikiz',
  'nav.group.esg',
  'nav.group.rpa',
  'nav.group.omni-channel',
  'nav.group.ai-hr',
  'nav.group.akilli-lojistik',
  'nav.group.dijital-bankacilik',
  'nav.group.kamu-regulasyon',
  'nav.group.endustri40',
  'nav.group.csr',
  'nav.group.egitim-inovasyon',
  'nav.group.ai-satis',
  'nav.group.vr-ar',
  'nav.group.siber-guvenlik',
  'nav.group.dijital-iletisim',
  'nav.group.akilli-enerji',
  'nav.group.gumruk',
  'nav.group.ai-musteri',
  'nav.group.dijital-saglik',
  'nav.group.tarim-erp',
  'nav.group.akilli-sehir',
  'nav.group.fintech',
  'nav.group.kultur-sanat',
  'nav.group.spor-fitness',
  'nav.group.turizm',
  'nav.group.havacilik',
];

@Injectable({ providedIn: 'root' })
export class ModuleSelectionService {
  private readonly _enabledModules = signal<Set<string>>(this.loadFromStorage());

  readonly enabledModules = this._enabledModules.asReadonly();

  isEnabled(key: string): boolean {
    return this._enabledModules().has(key);
  }

  toggle(key: string): void {
    this._enabledModules.update(set => {
      const next = new Set(set);
      next.has(key) ? next.delete(key) : next.add(key);
      this.saveToStorage(next);
      return next;
    });
  }

  enableAll(): void {
    const all = new Set(ALL_MODULE_KEYS);
    this.saveToStorage(all);
    this._enabledModules.set(all);
  }

  disableAll(): void {
    const empty = new Set<string>();
    this.saveToStorage(empty);
    this._enabledModules.set(empty);
  }

  private loadFromStorage(): Set<string> {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          return new Set<string>(parsed);
        }
      }
    } catch {
      // storage okunamadıysa varsayılana dön
    }
    // İlk açılışta tüm modüller aktif
    return new Set(ALL_MODULE_KEYS);
  }

  private saveToStorage(set: Set<string>): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
    } catch {
      // storage yazılamadıysa sessizce geç
    }
  }
}
