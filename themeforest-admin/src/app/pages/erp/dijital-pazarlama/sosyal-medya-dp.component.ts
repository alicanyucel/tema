import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-sosyal-medya-dp', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Sosyal Medya Yönetimi" subtitle="Sosyal medya kampanya ve içerik performansı" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class SosyalMedyaDpComponent {
  cols: ErpColumn[] = [
    { key: 'platform', label: 'Platform' }, { key: 'icerik', label: 'İçerik Türü' },
    { key: 'erisim', label: 'Erişim' }, { key: 'etkilesim', label: 'Etkileşim %' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'platform', label: 'Platform', type: 'select', options: ['Instagram', 'Twitter/X', 'LinkedIn', 'Facebook', 'TikTok', 'YouTube'] },
    { key: 'icerik', label: 'İçerik Türü', type: 'select', options: ['Post', 'Story', 'Reels/Video', 'Hikaye', 'Canlı Yayın'] },
    { key: 'erisim', label: 'Erişim Sayısı', type: 'number' }, { key: 'etkilesim', label: 'Etkileşim Oranı %', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Yayında', 'Planlandı', 'Taslak', 'Arşivlendi'] }];
  data = [
    { platform: 'Instagram', icerik: 'Reels/Video', erisim: 125000, etkilesim: 8.4, durum: 'Yayında' },
    { platform: 'LinkedIn', icerik: 'Post', erisim: 45000, etkilesim: 5.2, durum: 'Yayında' },
    { platform: 'TikTok', icerik: 'Reels/Video', erisim: 320000, etkilesim: 12.1, durum: 'Yayında' },
    { platform: 'YouTube', icerik: 'Reels/Video', erisim: 0, etkilesim: 0, durum: 'Planlandı' },
    { platform: 'Twitter/X', icerik: 'Post', erisim: 18000, etkilesim: 3.7, durum: 'Arşivlendi' }];
}
