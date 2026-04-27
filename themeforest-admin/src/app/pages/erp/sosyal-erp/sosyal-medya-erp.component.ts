import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-sosyal-medya-erp', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Sosyal Medya Entegrasyonu" subtitle="Sosyal medya performansı ve ERP entegrasyonu" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class SosyalMedyaErpComponent {
  cols: ErpColumn[] = [
    { key: 'platform', label: 'Platform' }, { key: 'takipci', label: 'Takipçi' },
    { key: 'etkilesim', label: 'Etkileşim %' }, { key: 'donusum', label: 'Dönüşüm %' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'platform', label: 'Platform', type: 'select', options: ['Instagram', 'LinkedIn', 'Twitter/X', 'Facebook', 'YouTube'] },
    { key: 'takipci', label: 'Takipçi Sayısı', type: 'number' }, { key: 'etkilesim', label: 'Etkileşim %', type: 'number' },
    { key: 'donusum', label: 'Dönüşüm %', type: 'number' }, { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Pasif'] }];
  data = [
    { platform: 'LinkedIn', takipci: 45000, etkilesim: 4.2, donusum: 1.8, durum: 'Aktif' },
    { platform: 'Instagram', takipci: 128000, etkilesim: 5.8, donusum: 2.1, durum: 'Aktif' },
    { platform: 'Twitter/X', takipci: 22000, etkilesim: 2.3, donusum: 0.9, durum: 'Aktif' },
    { platform: 'YouTube', takipci: 35000, etkilesim: 6.5, donusum: 1.2, durum: 'Aktif' },
    { platform: 'Facebook', takipci: 18000, etkilesim: 1.5, donusum: 0.5, durum: 'Pasif' }];
}
