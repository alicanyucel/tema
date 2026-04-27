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
    { key: 'nav.group.is-zekasi', icon: 'analytics', children: [
      { key: 'nav.veri-madenciligi', route: '/erp/is-zekasi/veri-madenciligi' },
      { key: 'nav.raporlama-bi', route: '/erp/is-zekasi/raporlama-bi' },
    ]},
    { key: 'nav.group.mobil-erp', icon: 'smartphone', children: [
      { key: 'nav.mobil-erp-yonetimi', route: '/erp/mobil-erp/mobil-erp-yonetimi' },
      { key: 'nav.mobil-onay', route: '/erp/mobil-erp/mobil-onay' },
    ]},
    { key: 'nav.group.uluslararasi', icon: 'public', children: [
      { key: 'nav.cok-para-birimi', route: '/erp/uluslararasi/cok-para-birimi' },
      { key: 'nav.vergi-uyum', route: '/erp/uluslararasi/vergi-uyum' },
    ]},
    { key: 'nav.group.sadakat', icon: 'loyalty', children: [
      { key: 'nav.sadakat-programi', route: '/erp/sadakat/sadakat-programi' },
      { key: 'nav.kampanya-yonetimi-sadakat', route: '/erp/sadakat/kampanya-yonetimi' },
    ]},
    { key: 'nav.group.tedarikci-portal', icon: 'store', children: [
      { key: 'nav.tedarikci-portal', route: '/erp/tedarikci-portal/tedarikci-portal' },
      { key: 'nav.tedarikci-teklifler', route: '/erp/tedarikci-portal/tedarikci-teklifler' },
    ]},
    { key: 'nav.group.aps', icon: 'schedule', children: [
      { key: 'nav.uretim-cizelge', route: '/erp/aps/uretim-cizelge' },
      { key: 'nav.kapasite-planlama', route: '/erp/aps/kapasite-planlama' },
    ]},
    { key: 'nav.group.risk-sigorta', icon: 'shield', children: [
      { key: 'nav.risk-degerlendirme', route: '/erp/risk-sigorta/risk-degerlendirme' },
      { key: 'nav.sigorta-yonetimi', route: '/erp/risk-sigorta/sigorta-yonetimi' },
    ]},
    { key: 'nav.group.enerji', icon: 'bolt', children: [
      { key: 'nav.enerji-tuketimi', route: '/erp/enerji/enerji-tuketimi' },
      { key: 'nav.kaynak-optimizasyon', route: '/erp/enerji/kaynak-optimizasyon' },
    ]},
    { key: 'nav.group.hukuk', icon: 'gavel', children: [
      { key: 'nav.sozlesme-yonetimi', route: '/erp/hukuk/sozlesme-yonetimi' },
      { key: 'nav.hukuki-davalar', route: '/erp/hukuk/hukuki-davalar' },
    ]},
    { key: 'nav.group.inovasyon-startup', icon: 'rocket_launch', children: [
      { key: 'nav.startup-portfoy', route: '/erp/inovasyon-startup/startup-portfoy' },
      { key: 'nav.ar-ge-yonetimi', route: '/erp/inovasyon-startup/ar-ge-yonetimi' },
    ]},
    { key: 'nav.group.sosyal-erp', icon: 'groups', children: [
      { key: 'nav.sosyal-medya-erp', route: '/erp/sosyal-erp/sosyal-medya' },
      { key: 'nav.calisma-akisi', route: '/erp/sosyal-erp/calisma-akisi' },
    ]},
    { key: 'nav.group.ai-erp', icon: 'smart_toy', children: [
      { key: 'nav.ai-tahminleme', route: '/erp/ai-erp/ai-tahminleme' },
      { key: 'nav.ai-optimizasyon', route: '/erp/ai-erp/ai-optimizasyon' },
    ]},
    { key: 'nav.group.musteri-ux', icon: 'touch_app', children: [
      { key: 'nav.ux-analitik', route: '/erp/musteri-ux/ux-analitik' },
      { key: 'nav.deneyim-haritasi', route: '/erp/musteri-ux/deneyim-haritasi' },
    ]},
    { key: 'nav.group.iot', icon: 'device_hub', children: [
      { key: 'nav.iot-cihazlar', route: '/erp/iot/iot-cihazlar' },
      { key: 'nav.sensor-veri', route: '/erp/iot/sensor-veri' },
    ]},
    { key: 'nav.group.ai-ml', icon: 'psychology', children: [
      { key: 'nav.ml-modeller', route: '/erp/ai-ml/ml-modeller' },
      { key: 'nav.veri-etiketleme', route: '/erp/ai-ml/veri-etiketleme' },
    ]},
    { key: 'nav.group.blockchain', icon: 'link', children: [
      { key: 'nav.akilli-sozlesmeler', route: '/erp/blockchain/akilli-sozlesmeler' },
      { key: 'nav.dijital-varlik', route: '/erp/blockchain/dijital-varlik' },
    ]},
    { key: 'nav.group.musteri-portal', icon: 'person', children: [
      { key: 'nav.musteri-portal', route: '/erp/musteri-portal/musteri-portal' },
      { key: 'nav.self-servis', route: '/erp/musteri-portal/self-servis' },
    ]},
    { key: 'nav.group.satis-sonrasi', icon: 'build_circle', children: [
      { key: 'nav.satis-sonrasi-servis', route: '/erp/satis-sonrasi/satis-sonrasi-servis' },
      { key: 'nav.yedek-parca', route: '/erp/satis-sonrasi/yedek-parca' },
    ]},
    { key: 'nav.group.dijital-pazarlama', icon: 'campaign', children: [
      { key: 'nav.dijital-kampanya', route: '/erp/dijital-pazarlama/dijital-kampanya' },
      { key: 'nav.sosyal-medya-dp', route: '/erp/dijital-pazarlama/sosyal-medya' },
    ]},
    { key: 'nav.group.veri-guvenligi', icon: 'lock', children: [
      { key: 'nav.kvkk-uyum', route: '/erp/veri-guvenligi/kvkk-uyum' },
      { key: 'nav.veri-siniflandirma', route: '/erp/veri-guvenligi/veri-siniflandirma' },
    ]},
    { key: 'nav.group.bpm', icon: 'account_tree', children: [
      { key: 'nav.bpm-surec', route: '/erp/bpm/bpm-surec' },
      { key: 'nav.otomasyon-izleme', route: '/erp/bpm/otomasyon-izleme' },
    ]},
    { key: 'nav.group.sektörel', icon: 'category', children: [
      { key: 'nav.sektor-modul', route: '/erp/sektörel/sektor-modul' },
      { key: 'nav.insaat-modulu', route: '/erp/sektörel/insaat-modulu' },
    ]},
    { key: 'nav.group.ai-tahmin', icon: 'trending_up', children: [
      { key: 'nav.talep-tahmin-ai', route: '/erp/ai-tahmin/talep-tahmin-ai' },
      { key: 'nav.fiyat-tahmin', route: '/erp/ai-tahmin/fiyat-tahmin' },
    ]},
    { key: 'nav.group.dijital-ikiz', icon: 'content_copy', children: [
      { key: 'nav.dijital-ikiz-sim', route: '/erp/dijital-ikiz/dijital-ikiz-sim' },
      { key: 'nav.urun-ikiz', route: '/erp/dijital-ikiz/urun-ikiz' },
    ]},
    { key: 'nav.group.esg', icon: 'eco', children: [
      { key: 'nav.esg-rapor', route: '/erp/esg/esg-rapor' },
      { key: 'nav.karbon-ayak-izi', route: '/erp/esg/karbon-ayak-izi' },
    ]},
    { key: 'nav.group.rpa', icon: 'precision_manufacturing', children: [
      { key: 'nav.rpa-botlar', route: '/erp/rpa/rpa-botlar' },
      { key: 'nav.rpa-surecleri', route: '/erp/rpa/rpa-surecleri' },
    ]},
    { key: 'nav.group.omni-channel', icon: 'shopping_cart', children: [
      { key: 'nav.omni-kanal', route: '/erp/omni-channel/omni-kanal' },
      { key: 'nav.siparis-yonetimi-omni', route: '/erp/omni-channel/siparis-yonetimi' },
    ]},
    { key: 'nav.group.ai-hr', icon: 'people', children: [
      { key: 'nav.ai-hr-yetenek', route: '/erp/ai-hr/ai-hr-yetenek' },
      { key: 'nav.performans-ai', route: '/erp/ai-hr/performans-ai' },
    ]},
    { key: 'nav.group.akilli-lojistik', icon: 'local_shipping', children: [
      { key: 'nav.filo-yonetimi', route: '/erp/akilli-lojistik/filo-yonetimi' },
      { key: 'nav.rota-optimizasyon', route: '/erp/akilli-lojistik/rota-optimizasyon' },
    ]},
    { key: 'nav.group.dijital-bankacilik', icon: 'account_balance', children: [
      { key: 'nav.banka-entegrasyon', route: '/erp/dijital-bankacilik/banka-entegrasyon' },
      { key: 'nav.odeme-ag-gecigi', route: '/erp/dijital-bankacilik/odeme-ag-gecigi' },
    ]},
    { key: 'nav.group.kamu-regulasyon', icon: 'policy', children: [
      { key: 'nav.kamu-ihale', route: '/erp/kamu-regulasyon/kamu-ihale' },
      { key: 'nav.regulasyon-uyum', route: '/erp/kamu-regulasyon/regulasyon-uyum' },
    ]},
    { key: 'nav.group.endustri40', icon: 'factory', children: [
      { key: 'nav.akilli-fabrika', route: '/erp/endustri40/akilli-fabrika' },
      { key: 'nav.cobotlar', route: '/erp/endustri40/cobotlar' },
    ]},
    { key: 'nav.group.csr', icon: 'volunteer_activism', children: [
      { key: 'nav.gonulluler', route: '/erp/csr/gonulluler' },
      { key: 'nav.bagis-yonetimi', route: '/erp/csr/bagis-yonetimi' },
    ]},
    { key: 'nav.group.egitim-inovasyon', icon: 'auto_stories', children: [
      { key: 'nav.egitim-platform', route: '/erp/egitim-inovasyon/egitim-platform' },
      { key: 'nav.gamification', route: '/erp/egitim-inovasyon/gamification' },
    ]},
    { key: 'nav.group.ai-satis', icon: 'sell', children: [
      { key: 'nav.ai-satis-tahmini', route: '/erp/ai-satis/ai-satis-tahmini' },
      { key: 'nav.musteri-skorlama', route: '/erp/ai-satis/musteri-skorlama' },
    ]},
    { key: 'nav.group.vr-ar', icon: 'view_in_ar', children: [
      { key: 'nav.vr-egitim', route: '/erp/vr-ar/vr-egitim' },
      { key: 'nav.ar-bakim', route: '/erp/vr-ar/ar-bakim' },
    ]},
    { key: 'nav.group.siber-guvenlik', icon: 'security', children: [
      { key: 'nav.tehdit-merkezi', route: '/erp/siber-guvenlik/tehdit-merkezi' },
      { key: 'nav.guvenlik-olaylari', route: '/erp/siber-guvenlik/guvenlik-olaylari' },
    ]},
    { key: 'nav.group.dijital-iletisim', icon: 'chat', children: [
      { key: 'nav.isbirligi-araclari', route: '/erp/dijital-iletisim/isbirligi-araclari' },
      { key: 'nav.video-konferans', route: '/erp/dijital-iletisim/video-konferans' },
    ]},
    { key: 'nav.group.akilli-enerji', icon: 'electrical_services', children: [
      { key: 'nav.enerji-panel', route: '/erp/akilli-enerji/enerji-panel' },
      { key: 'nav.sari-yonetimi', route: '/erp/akilli-enerji/sari-yonetimi' },
    ]},
    { key: 'nav.group.gumruk', icon: 'flight_takeoff', children: [
      { key: 'nav.gumruk-beyan', route: '/erp/gumruk/gumruk-beyan' },
      { key: 'nav.ithalat-ihracat', route: '/erp/gumruk/ithalat-ihracat' },
    ]},
    { key: 'nav.group.ai-musteri', icon: 'support_agent', children: [
      { key: 'nav.chatbot-musteri', route: '/erp/ai-musteri/chatbot-musteri' },
      { key: 'nav.duygu-analizi', route: '/erp/ai-musteri/duygu-analizi' },
    ]},
    { key: 'nav.group.dijital-saglik', icon: 'favorite', children: [
      { key: 'nav.saglik-takip', route: '/erp/dijital-saglik/saglik-takip' },
      { key: 'nav.wellbeing-programi', route: '/erp/dijital-saglik/wellbeing-programi' },
    ]},
    { key: 'nav.group.tarim-erp', icon: 'grass', children: [
      { key: 'nav.tarim-arazi', route: '/erp/tarim-erp/tarim-arazi' },
      { key: 'nav.hasat-planlama', route: '/erp/tarim-erp/hasat-planlama' },
    ]},
    { key: 'nav.group.akilli-sehir', icon: 'location_city', children: [
      { key: 'nav.sehir-hizmetleri', route: '/erp/akilli-sehir/sehir-hizmetleri' },
      { key: 'nav.altyapi-yonetimi', route: '/erp/akilli-sehir/altyapi-yonetimi' },
    ]},
    { key: 'nav.group.fintech', icon: 'currency_bitcoin', children: [
      { key: 'nav.kripto-fintech', route: '/erp/fintech/kripto-fintech' },
      { key: 'nav.mikro-finans', route: '/erp/fintech/mikro-finans' },
    ]},
    { key: 'nav.group.kultur-sanat', icon: 'palette', children: [
      { key: 'nav.etkinlik-yonetimi', route: '/erp/kultur-sanat/etkinlik-yonetimi' },
      { key: 'nav.koleksiyon-yonetimi', route: '/erp/kultur-sanat/koleksiyon-yonetimi' },
    ]},
    { key: 'nav.group.spor-fitness', icon: 'fitness_center', children: [
      { key: 'nav.uye-fitness', route: '/erp/spor-fitness/uye-fitness' },
      { key: 'nav.antreyman-plani', route: '/erp/spor-fitness/antreyman-plani' },
    ]},
    { key: 'nav.group.turizm', icon: 'hotel', children: [
      { key: 'nav.rezervasyon', route: '/erp/turizm/rezervasyon' },
      { key: 'nav.oda-yonetimi', route: '/erp/turizm/oda-yonetimi' },
    ]},
    { key: 'nav.group.havacilik', icon: 'flight', children: [
      { key: 'nav.ucus-yonetimi', route: '/erp/havacilik/ucus-yonetimi' },
      { key: 'nav.bakim-planlama-havac', route: '/erp/havacilik/bakim-planlama' },
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
      // İş Zekası
      { label: t('nav.veri-madenciligi'),      hint: t('nav.group.is-zekasi'),           route: '/erp/is-zekasi/veri-madenciligi' },
      { label: t('nav.raporlama-bi'),          hint: t('nav.group.is-zekasi'),           route: '/erp/is-zekasi/raporlama-bi' },
      // Mobil ERP
      { label: t('nav.mobil-erp-yonetimi'),   hint: t('nav.group.mobil-erp'),           route: '/erp/mobil-erp/mobil-erp-yonetimi' },
      { label: t('nav.mobil-onay'),            hint: t('nav.group.mobil-erp'),           route: '/erp/mobil-erp/mobil-onay' },
      // Uluslararası
      { label: t('nav.cok-para-birimi'),       hint: t('nav.group.uluslararasi'),        route: '/erp/uluslararasi/cok-para-birimi' },
      { label: t('nav.vergi-uyum'),            hint: t('nav.group.uluslararasi'),        route: '/erp/uluslararasi/vergi-uyum' },
      // Sadakat
      { label: t('nav.sadakat-programi'),      hint: t('nav.group.sadakat'),             route: '/erp/sadakat/sadakat-programi' },
      { label: t('nav.kampanya-yonetimi-sadakat'), hint: t('nav.group.sadakat'),         route: '/erp/sadakat/kampanya-yonetimi' },
      // Tedarikçi Portalı
      { label: t('nav.tedarikci-portal'),      hint: t('nav.group.tedarikci-portal'),    route: '/erp/tedarikci-portal/tedarikci-portal' },
      { label: t('nav.tedarikci-teklifler'),   hint: t('nav.group.tedarikci-portal'),    route: '/erp/tedarikci-portal/tedarikci-teklifler' },
      // APS
      { label: t('nav.uretim-cizelge'),        hint: t('nav.group.aps'),                 route: '/erp/aps/uretim-cizelge' },
      { label: t('nav.kapasite-planlama'),     hint: t('nav.group.aps'),                 route: '/erp/aps/kapasite-planlama' },
      // Risk & Sigorta
      { label: t('nav.risk-degerlendirme'),    hint: t('nav.group.risk-sigorta'),        route: '/erp/risk-sigorta/risk-degerlendirme' },
      { label: t('nav.sigorta-yonetimi'),      hint: t('nav.group.risk-sigorta'),        route: '/erp/risk-sigorta/sigorta-yonetimi' },
      // Enerji
      { label: t('nav.enerji-tuketimi'),       hint: t('nav.group.enerji'),              route: '/erp/enerji/enerji-tuketimi' },
      { label: t('nav.kaynak-optimizasyon'),   hint: t('nav.group.enerji'),              route: '/erp/enerji/kaynak-optimizasyon' },
      // Hukuk
      { label: t('nav.sozlesme-yonetimi'),     hint: t('nav.group.hukuk'),               route: '/erp/hukuk/sozlesme-yonetimi' },
      { label: t('nav.hukuki-davalar'),        hint: t('nav.group.hukuk'),               route: '/erp/hukuk/hukuki-davalar' },
      // İnovasyon & Startup
      { label: t('nav.startup-portfoy'),       hint: t('nav.group.inovasyon-startup'),   route: '/erp/inovasyon-startup/startup-portfoy' },
      { label: t('nav.ar-ge-yonetimi'),        hint: t('nav.group.inovasyon-startup'),   route: '/erp/inovasyon-startup/ar-ge-yonetimi' },
      // Sosyal ERP
      { label: t('nav.sosyal-medya-erp'),      hint: t('nav.group.sosyal-erp'),          route: '/erp/sosyal-erp/sosyal-medya' },
      { label: t('nav.calisma-akisi'),         hint: t('nav.group.sosyal-erp'),          route: '/erp/sosyal-erp/calisma-akisi' },
      // AI ERP
      { label: t('nav.ai-tahminleme'),         hint: t('nav.group.ai-erp'),              route: '/erp/ai-erp/ai-tahminleme' },
      { label: t('nav.ai-optimizasyon'),       hint: t('nav.group.ai-erp'),              route: '/erp/ai-erp/ai-optimizasyon' },
      // Müşteri UX
      { label: t('nav.ux-analitik'),           hint: t('nav.group.musteri-ux'),          route: '/erp/musteri-ux/ux-analitik' },
      { label: t('nav.deneyim-haritasi'),      hint: t('nav.group.musteri-ux'),          route: '/erp/musteri-ux/deneyim-haritasi' },
      // IoT
      { label: t('nav.iot-cihazlar'),          hint: t('nav.group.iot'),                 route: '/erp/iot/iot-cihazlar' },
      { label: t('nav.sensor-veri'),           hint: t('nav.group.iot'),                 route: '/erp/iot/sensor-veri' },
      // AI & ML
      { label: t('nav.ml-modeller'),           hint: t('nav.group.ai-ml'),               route: '/erp/ai-ml/ml-modeller' },
      { label: t('nav.veri-etiketleme'),       hint: t('nav.group.ai-ml'),               route: '/erp/ai-ml/veri-etiketleme' },
      // Blockchain
      { label: t('nav.akilli-sozlesmeler'),    hint: t('nav.group.blockchain'),          route: '/erp/blockchain/akilli-sozlesmeler' },
      { label: t('nav.dijital-varlik'),        hint: t('nav.group.blockchain'),          route: '/erp/blockchain/dijital-varlik' },
      // Müşteri Portalı
      { label: t('nav.musteri-portal'),        hint: t('nav.group.musteri-portal'),      route: '/erp/musteri-portal/musteri-portal' },
      { label: t('nav.self-servis'),           hint: t('nav.group.musteri-portal'),      route: '/erp/musteri-portal/self-servis' },
      // Satış Sonrası
      { label: t('nav.satis-sonrasi-servis'),  hint: t('nav.group.satis-sonrasi'),       route: '/erp/satis-sonrasi/satis-sonrasi-servis' },
      { label: t('nav.yedek-parca'),           hint: t('nav.group.satis-sonrasi'),       route: '/erp/satis-sonrasi/yedek-parca' },
      // Dijital Pazarlama
      { label: t('nav.dijital-kampanya'),      hint: t('nav.group.dijital-pazarlama'),   route: '/erp/dijital-pazarlama/dijital-kampanya' },
      { label: t('nav.sosyal-medya-dp'),       hint: t('nav.group.dijital-pazarlama'),   route: '/erp/dijital-pazarlama/sosyal-medya' },
      // Veri Güvenliği
      { label: t('nav.kvkk-uyum'),             hint: t('nav.group.veri-guvenligi'),      route: '/erp/veri-guvenligi/kvkk-uyum' },
      { label: t('nav.veri-siniflandirma'),    hint: t('nav.group.veri-guvenligi'),      route: '/erp/veri-guvenligi/veri-siniflandirma' },
      // BPM
      { label: t('nav.bpm-surec'),             hint: t('nav.group.bpm'),                 route: '/erp/bpm/bpm-surec' },
      { label: t('nav.otomasyon-izleme'),      hint: t('nav.group.bpm'),                 route: '/erp/bpm/otomasyon-izleme' },
      // Sektörel
      { label: t('nav.sektor-modul'),          hint: t('nav.group.sektörel'),            route: '/erp/sektörel/sektor-modul' },
      { label: t('nav.insaat-modulu'),         hint: t('nav.group.sektörel'),            route: '/erp/sektörel/insaat-modulu' },
      // AI Tahmin
      { label: t('nav.talep-tahmin-ai'),       hint: t('nav.group.ai-tahmin'),           route: '/erp/ai-tahmin/talep-tahmin-ai' },
      { label: t('nav.fiyat-tahmin'),          hint: t('nav.group.ai-tahmin'),           route: '/erp/ai-tahmin/fiyat-tahmin' },
      // Dijital İkiz
      { label: t('nav.dijital-ikiz-sim'),      hint: t('nav.group.dijital-ikiz'),        route: '/erp/dijital-ikiz/dijital-ikiz-sim' },
      { label: t('nav.urun-ikiz'),             hint: t('nav.group.dijital-ikiz'),        route: '/erp/dijital-ikiz/urun-ikiz' },
      // ESG
      { label: t('nav.esg-rapor'),             hint: t('nav.group.esg'),                 route: '/erp/esg/esg-rapor' },
      { label: t('nav.karbon-ayak-izi'),       hint: t('nav.group.esg'),                 route: '/erp/esg/karbon-ayak-izi' },
      // RPA
      { label: t('nav.rpa-botlar'),            hint: t('nav.group.rpa'),                 route: '/erp/rpa/rpa-botlar' },
      { label: t('nav.rpa-surecleri'),         hint: t('nav.group.rpa'),                 route: '/erp/rpa/rpa-surecleri' },
      // Omni-Channel
      { label: t('nav.omni-kanal'),            hint: t('nav.group.omni-channel'),        route: '/erp/omni-channel/omni-kanal' },
      { label: t('nav.siparis-yonetimi-omni'), hint: t('nav.group.omni-channel'),        route: '/erp/omni-channel/siparis-yonetimi' },
      // AI HR
      { label: t('nav.ai-hr-yetenek'),         hint: t('nav.group.ai-hr'),               route: '/erp/ai-hr/ai-hr-yetenek' },
      { label: t('nav.performans-ai'),         hint: t('nav.group.ai-hr'),               route: '/erp/ai-hr/performans-ai' },
      // Akıllı Lojistik
      { label: t('nav.filo-yonetimi'),         hint: t('nav.group.akilli-lojistik'),     route: '/erp/akilli-lojistik/filo-yonetimi' },
      { label: t('nav.rota-optimizasyon'),     hint: t('nav.group.akilli-lojistik'),     route: '/erp/akilli-lojistik/rota-optimizasyon' },
      // Dijital Bankacılık
      { label: t('nav.banka-entegrasyon'),     hint: t('nav.group.dijital-bankacilik'),  route: '/erp/dijital-bankacilik/banka-entegrasyon' },
      { label: t('nav.odeme-ag-gecigi'),       hint: t('nav.group.dijital-bankacilik'),  route: '/erp/dijital-bankacilik/odeme-ag-gecigi' },
      // Kamu & Regülasyon
      { label: t('nav.kamu-ihale'),            hint: t('nav.group.kamu-regulasyon'),     route: '/erp/kamu-regulasyon/kamu-ihale' },
      { label: t('nav.regulasyon-uyum'),       hint: t('nav.group.kamu-regulasyon'),     route: '/erp/kamu-regulasyon/regulasyon-uyum' },
      // Endüstri 4.0
      { label: t('nav.akilli-fabrika'),        hint: t('nav.group.endustri40'),          route: '/erp/endustri40/akilli-fabrika' },
      { label: t('nav.cobotlar'),              hint: t('nav.group.endustri40'),          route: '/erp/endustri40/cobotlar' },
      // CSR
      { label: t('nav.gonulluler'),            hint: t('nav.group.csr'),                 route: '/erp/csr/gonulluler' },
      { label: t('nav.bagis-yonetimi'),        hint: t('nav.group.csr'),                 route: '/erp/csr/bagis-yonetimi' },
      // Eğitim & İnovasyon
      { label: t('nav.egitim-platform'),       hint: t('nav.group.egitim-inovasyon'),    route: '/erp/egitim-inovasyon/egitim-platform' },
      { label: t('nav.gamification'),          hint: t('nav.group.egitim-inovasyon'),    route: '/erp/egitim-inovasyon/gamification' },
      // AI Satış
      { label: t('nav.ai-satis-tahmini'),      hint: t('nav.group.ai-satis'),            route: '/erp/ai-satis/ai-satis-tahmini' },
      { label: t('nav.musteri-skorlama'),      hint: t('nav.group.ai-satis'),            route: '/erp/ai-satis/musteri-skorlama' },
      // VR/AR
      { label: t('nav.vr-egitim'),             hint: t('nav.group.vr-ar'),               route: '/erp/vr-ar/vr-egitim' },
      { label: t('nav.ar-bakim'),              hint: t('nav.group.vr-ar'),               route: '/erp/vr-ar/ar-bakim' },
      // Siber Güvenlik
      { label: t('nav.tehdit-merkezi'),        hint: t('nav.group.siber-guvenlik'),      route: '/erp/siber-guvenlik/tehdit-merkezi' },
      { label: t('nav.guvenlik-olaylari'),     hint: t('nav.group.siber-guvenlik'),      route: '/erp/siber-guvenlik/guvenlik-olaylari' },
      // Dijital İletişim
      { label: t('nav.isbirligi-araclari'),    hint: t('nav.group.dijital-iletisim'),    route: '/erp/dijital-iletisim/isbirligi-araclari' },
      { label: t('nav.video-konferans'),       hint: t('nav.group.dijital-iletisim'),    route: '/erp/dijital-iletisim/video-konferans' },
      // Akıllı Enerji
      { label: t('nav.enerji-panel'),          hint: t('nav.group.akilli-enerji'),       route: '/erp/akilli-enerji/enerji-panel' },
      { label: t('nav.sari-yonetimi'),         hint: t('nav.group.akilli-enerji'),       route: '/erp/akilli-enerji/sari-yonetimi' },
      // Gümrük
      { label: t('nav.gumruk-beyan'),          hint: t('nav.group.gumruk'),              route: '/erp/gumruk/gumruk-beyan' },
      { label: t('nav.ithalat-ihracat'),       hint: t('nav.group.gumruk'),              route: '/erp/gumruk/ithalat-ihracat' },
      // AI Müşteri
      { label: t('nav.chatbot-musteri'),       hint: t('nav.group.ai-musteri'),          route: '/erp/ai-musteri/chatbot-musteri' },
      { label: t('nav.duygu-analizi'),         hint: t('nav.group.ai-musteri'),          route: '/erp/ai-musteri/duygu-analizi' },
      // Dijital Sağlık
      { label: t('nav.saglik-takip'),          hint: t('nav.group.dijital-saglik'),      route: '/erp/dijital-saglik/saglik-takip' },
      { label: t('nav.wellbeing-programi'),    hint: t('nav.group.dijital-saglik'),      route: '/erp/dijital-saglik/wellbeing-programi' },
      // Tarım ERP
      { label: t('nav.tarim-arazi'),           hint: t('nav.group.tarim-erp'),           route: '/erp/tarim-erp/tarim-arazi' },
      { label: t('nav.hasat-planlama'),        hint: t('nav.group.tarim-erp'),           route: '/erp/tarim-erp/hasat-planlama' },
      // Akıllı Şehir
      { label: t('nav.sehir-hizmetleri'),      hint: t('nav.group.akilli-sehir'),        route: '/erp/akilli-sehir/sehir-hizmetleri' },
      { label: t('nav.altyapi-yonetimi'),      hint: t('nav.group.akilli-sehir'),        route: '/erp/akilli-sehir/altyapi-yonetimi' },
      // Fintech
      { label: t('nav.kripto-fintech'),        hint: t('nav.group.fintech'),             route: '/erp/fintech/kripto-fintech' },
      { label: t('nav.mikro-finans'),          hint: t('nav.group.fintech'),             route: '/erp/fintech/mikro-finans' },
      // Kültür & Sanat
      { label: t('nav.etkinlik-yonetimi'),     hint: t('nav.group.kultur-sanat'),        route: '/erp/kultur-sanat/etkinlik-yonetimi' },
      { label: t('nav.koleksiyon-yonetimi'),   hint: t('nav.group.kultur-sanat'),        route: '/erp/kultur-sanat/koleksiyon-yonetimi' },
      // Spor & Fitness
      { label: t('nav.uye-fitness'),           hint: t('nav.group.spor-fitness'),        route: '/erp/spor-fitness/uye-fitness' },
      { label: t('nav.antreyman-plani'),       hint: t('nav.group.spor-fitness'),        route: '/erp/spor-fitness/antreyman-plani' },
      // Turizm
      { label: t('nav.rezervasyon'),           hint: t('nav.group.turizm'),              route: '/erp/turizm/rezervasyon' },
      { label: t('nav.oda-yonetimi'),          hint: t('nav.group.turizm'),              route: '/erp/turizm/oda-yonetimi' },
      // Havacılık
      { label: t('nav.ucus-yonetimi'),         hint: t('nav.group.havacilik'),           route: '/erp/havacilik/ucus-yonetimi' },
      { label: t('nav.bakim-planlama-havac'),  hint: t('nav.group.havacilik'),           route: '/erp/havacilik/bakim-planlama' },
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
