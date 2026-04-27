import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-cok-para-birimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Çok Para Birimi Yönetimi" subtitle="Döviz kurları ve uluslararası işlemler" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class CokParaBirimiComponent {
  cols: ErpColumn[] = [
    { key: 'paraBirimi', label: 'Para Birimi' }, { key: 'kur', label: 'Kur (TRY)' },
    { key: 'degisim', label: 'Değişim %' }, { key: 'guncelleme', label: 'Güncelleme' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'paraBirimi', label: 'Para Birimi' }, { key: 'kur', label: 'Kur', type: 'number' },
    { key: 'degisim', label: 'Değişim %', type: 'number' }, { key: 'guncelleme', label: 'Güncelleme Tarihi' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Pasif'] }];
  data = [
    { paraBirimi: 'USD', kur: 32.45, degisim: 0.3, guncelleme: '2024-04-27 09:00', durum: 'Aktif' },
    { paraBirimi: 'EUR', kur: 35.12, degisim: -0.1, guncelleme: '2024-04-27 09:00', durum: 'Aktif' },
    { paraBirimi: 'GBP', kur: 40.85, degisim: 0.5, guncelleme: '2024-04-27 09:00', durum: 'Aktif' },
    { paraBirimi: 'SAR', kur: 8.65, degisim: 0.0, guncelleme: '2024-04-27 09:00', durum: 'Aktif' },
    { paraBirimi: 'JPY', kur: 0.21, degisim: -0.2, guncelleme: '2024-04-27 09:00', durum: 'Aktif' }];
}
