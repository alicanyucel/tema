import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-sabit-kiymetler', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Sabit Kıymetler" subtitle="Demirbaş ve amortisman yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class SabitKiymetlerComponent {
  cols: ErpColumn[] = [
    { key: 'kod', label: 'Demirbaş Kodu' },
    { key: 'ad', label: 'Adı' },
    { key: 'kategori', label: 'Kategori' },
    { key: 'deger', label: 'Değer', type: 'currency' },
    { key: 'amortismanOrani', label: 'Amortisman %' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'kod', label: 'Demirbaş Kodu' },
    { key: 'ad', label: 'Adı' },
    { key: 'kategori', label: 'Kategori', type: 'select', options: ['Makine', 'Araç', 'Bilgisayar', 'Bina', 'Diğer'] },
    { key: 'deger', label: 'Değer', type: 'number' },
    { key: 'amortismanOrani', label: 'Amortisman %', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Pasif'] },
  ];
  data = [
    { kod: 'SK-001', ad: 'CNC Torna Makinesi', kategori: 'Makine', deger: 250000, amortismanOrani: 10, durum: 'Aktif' },
    { kod: 'SK-002', ad: 'Forklift', kategori: 'Araç', deger: 85000, amortismanOrani: 15, durum: 'Aktif' },
    { kod: 'SK-003', ad: 'Sunucu Odası Ekipmanı', kategori: 'Bilgisayar', deger: 120000, amortismanOrani: 25, durum: 'Aktif' },
    { kod: 'SK-004', ad: 'Depo Binası', kategori: 'Bina', deger: 1500000, amortismanOrani: 2, durum: 'Aktif' },
    { kod: 'SK-005', ad: 'Eski Baskı Makinesi', kategori: 'Makine', deger: 30000, amortismanOrani: 20, durum: 'Pasif' },
  ];
}
