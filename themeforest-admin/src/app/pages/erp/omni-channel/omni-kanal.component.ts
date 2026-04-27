import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-omni-kanal', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Omni-Channel Kanal Yönetimi" subtitle="Çok kanallı satış ve sipariş entegrasyonu" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class OmniKanalComponent {
  cols: ErpColumn[] = [
    { key: 'kanal', label: 'Satış Kanalı' }, { key: 'siparisSayisi', label: 'Sipariş Sayısı' },
    { key: 'ciro', label: 'Ciro', type: 'currency' }, { key: 'pay', label: 'Pay %' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'kanal', label: 'Kanal Adı' }, { key: 'tur', label: 'Kanal Türü', type: 'select', options: ['Fiziksel Mağaza', 'Web Sitesi', 'Mobil Uygulama', 'Marketplace', 'Telefon'] },
    { key: 'siparisSayisi', label: 'Sipariş Sayısı', type: 'number' }, { key: 'ciro', label: 'Ciro', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Pasif', 'Entegrasyon Bekleniyor'] }];
  data = [
    { kanal: 'Web Sitesi', siparisSayisi: 4820, ciro: 2450000, pay: 42, durum: 'Aktif' },
    { kanal: 'Mobil Uygulama', siparisSayisi: 3150, ciro: 1680000, pay: 29, durum: 'Aktif' },
    { kanal: 'Fiziksel Mağaza', siparisSayisi: 1890, ciro: 980000, pay: 17, durum: 'Aktif' },
    { kanal: 'Trendyol', siparisSayisi: 650, ciro: 320000, pay: 6, durum: 'Aktif' },
    { kanal: 'Hepsiburada', siparisSayisi: 420, ciro: 210000, pay: 4, durum: 'Aktif' }];
}
