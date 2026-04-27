import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-yem-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Yem Yönetimi" subtitle="Yem stok, ihtiyaç ve tüketim takibi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class YemYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'yemAdi', label: 'Yem Adı' },
    { key: 'tur', label: 'Tür', type: 'badge' },
    { key: 'stok', label: 'Stok (ton)' },
    { key: 'gunlukTuketim', label: 'Günlük Tüketim (kg)' },
    { key: 'kalanGun', label: 'Tahmini Kalan Gün' },
    { key: 'birimFiyat', label: 'Birim Fiyat (₺/ton)', type: 'currency' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'yemAdi', label: 'Yem Adı' },
    { key: 'tur', label: 'Yem Türü', type: 'select', options: ['Kaba Yem', 'Kesif Yem', 'Karma Yem', 'Silaj', 'Tahıl', 'Mineral-Vitamin', 'Kanatlı Yemi', 'Büyükbaş Yemi', 'Küçükbaş Yemi'] },
    { key: 'stok', label: 'Mevcut Stok (ton)', type: 'number' },
    { key: 'gunlukTuketim', label: 'Günlük Tüketim (kg)', type: 'number' },
    { key: 'kalanGun', label: 'Tahmini Kalan Gün', type: 'number' },
    { key: 'birimFiyat', label: 'Birim Fiyat (₺/ton)', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Yeterli', 'Kritik Seviye', 'Sipariş Verildi', 'Tükendi'] },
  ];
  data = [
    { yemAdi: 'Mısır Silajı', tur: 'Silaj', stok: 45.5, gunlukTuketim: 850, kalanGun: 53, birimFiyat: 3200, durum: 'Yeterli' },
    { yemAdi: 'Karma Büyükbaş Yemi', tur: 'Karma Yem', stok: 8.2, gunlukTuketim: 480, kalanGun: 17, birimFiyat: 18500, durum: 'Kritik Seviye' },
    { yemAdi: 'Arpa', tur: 'Tahıl', stok: 0.0, gunlukTuketim: 200, kalanGun: 0, birimFiyat: 12000, durum: 'Tükendi' },
    { yemAdi: 'Yonca Kuru Ot', tur: 'Kaba Yem', stok: 22.0, gunlukTuketim: 320, kalanGun: 68, birimFiyat: 5800, durum: 'Yeterli' },
    { yemAdi: 'Mineral-Vitamin Premiks', tur: 'Mineral-Vitamin', stok: 0.85, gunlukTuketim: 25, kalanGun: 34, birimFiyat: 85000, durum: 'Sipariş Verildi' },
    { yemAdi: 'Kanatlı Büyütme Yemi', tur: 'Kanatlı Yemi', stok: 12.0, gunlukTuketim: 600, kalanGun: 20, birimFiyat: 22000, durum: 'Kritik Seviye' },
  ];
}
