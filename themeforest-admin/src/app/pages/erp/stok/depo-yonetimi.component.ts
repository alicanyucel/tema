import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-depo-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Depo Yönetimi" subtitle="Depo lokasyonları ve raf yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class DepoYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'depoKodu', label: 'Depo Kodu' },
    { key: 'depoAdi', label: 'Depo Adı' },
    { key: 'lokasyon', label: 'Lokasyon' },
    { key: 'kapasite', label: 'Kapasite (m²)' },
    { key: 'doluluk', label: 'Doluluk %' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'depoKodu', label: 'Depo Kodu' },
    { key: 'depoAdi', label: 'Depo Adı' },
    { key: 'lokasyon', label: 'Lokasyon' },
    { key: 'kapasite', label: 'Kapasite (m²)', type: 'number' },
    { key: 'doluluk', label: 'Doluluk %', type: 'number' },
    { key: 'sorumlu', label: 'Sorumlu' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Pasif', 'Bakımda'] },
  ];
  data = [
    { depoKodu: 'DEP-01', depoAdi: 'Ana Depo', lokasyon: 'İstanbul Tuzla', kapasite: 5000, doluluk: 72, durum: 'Aktif' },
    { depoKodu: 'DEP-02', depoAdi: 'Hazır Ürün Deposu', lokasyon: 'Bursa Nilüfer', kapasite: 3000, doluluk: 55, durum: 'Aktif' },
    { depoKodu: 'DEP-03', depoAdi: 'Hammadde Deposu', lokasyon: 'İstanbul Tuzla', kapasite: 2000, doluluk: 88, durum: 'Aktif' },
    { depoKodu: 'DEP-04', depoAdi: 'Karantina Deposu', lokasyon: 'Ankara Ostim', kapasite: 500, doluluk: 30, durum: 'Aktif' },
    { depoKodu: 'DEP-05', depoAdi: 'Eski Depo', lokasyon: 'Kocaeli Gebze', kapasite: 1000, doluluk: 0, durum: 'Pasif' },
  ];
}
