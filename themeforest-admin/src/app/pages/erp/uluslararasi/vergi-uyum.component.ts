import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-vergi-uyum', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Uluslararası Vergi Uyumu" subtitle="Ülkeye özel vergi kuralları ve raporlama" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class VergiUyumComponent {
  cols: ErpColumn[] = [
    { key: 'ulke', label: 'Ülke' }, { key: 'vergiTuru', label: 'Vergi Türü' },
    { key: 'oran', label: 'Oran %' }, { key: 'gecerlilik', label: 'Geçerlilik' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'ulke', label: 'Ülke' }, { key: 'vergiTuru', label: 'Vergi Türü' },
    { key: 'oran', label: 'Oran %', type: 'number' }, { key: 'gecerlilik', label: 'Geçerlilik Tarihi' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Güncelleme Gerekli', 'Pasif'] }];
  data = [
    { ulke: 'Türkiye', vergiTuru: 'KDV', oran: 20, gecerlilik: '2024-01-01', durum: 'Aktif' },
    { ulke: 'Almanya', vergiTuru: 'MwSt', oran: 19, gecerlilik: '2024-01-01', durum: 'Aktif' },
    { ulke: 'Suudi Arabistan', vergiTuru: 'VAT', oran: 15, gecerlilik: '2023-07-01', durum: 'Aktif' },
    { ulke: 'ABD', vergiTuru: 'Sales Tax', oran: 8, gecerlilik: '2024-01-01', durum: 'Güncelleme Gerekli' },
    { ulke: 'İngiltere', vergiTuru: 'VAT', oran: 20, gecerlilik: '2024-01-01', durum: 'Aktif' }];
}
