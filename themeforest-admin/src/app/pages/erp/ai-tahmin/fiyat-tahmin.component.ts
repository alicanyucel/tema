import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-fiyat-tahmin', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="YZ Fiyat Tahmini" subtitle="Dinamik fiyatlandırma ve optimum fiyat modelleri" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class FiyatTahminComponent {
  cols: ErpColumn[] = [
    { key: 'urun', label: 'Ürün' }, { key: 'mevcutFiyat', label: 'Mevcut Fiyat', type: 'currency' },
    { key: 'onerilen', label: 'Önerilen Fiyat', type: 'currency' }, { key: 'elastikiyet', label: 'Fiyat Esnekliği' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'urun', label: 'Ürün Adı' }, { key: 'mevcutFiyat', label: 'Mevcut Fiyat (₺)', type: 'number' },
    { key: 'onerilen', label: 'YZ Önerilen Fiyat (₺)', type: 'number' }, { key: 'elastikiyet', label: 'Fiyat Esnekliği (-/+)' },
    { key: 'durum', label: 'Uygulama Durumu', type: 'select', options: ['Uygulandı', 'İnceleniyor', 'Reddedildi', 'Beklemede'] }];
  data = [
    { urun: 'Premium Paket', mevcutFiyat: 1499, onerilen: 1699, elastikiyet: -1.2, durum: 'İnceleniyor' },
    { urun: 'Temel Lisans', mevcutFiyat: 299, onerilen: 349, elastikiyet: -0.8, durum: 'Uygulandı' },
    { urun: 'Kurumsal Plan', mevcutFiyat: 4999, onerilen: 4750, elastikiyet: -1.5, durum: 'Beklemede' },
    { urun: 'Add-on Modül', mevcutFiyat: 199, onerilen: 249, elastikiyet: -0.6, durum: 'Uygulandı' },
    { urun: 'API Erişimi', mevcutFiyat: 599, onerilen: 450, elastikiyet: -2.1, durum: 'İnceleniyor' }];
}
