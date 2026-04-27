import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-versiyon-kontrol', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Versiyon Kontrol" subtitle="Belge ve doküman versiyon yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class VersiyonKontrolComponent {
  cols: ErpColumn[] = [
    { key: 'belgeAdi', label: 'Belge Adı' },
    { key: 'versiyon', label: 'Versiyon' },
    { key: 'degistiren', label: 'Değiştiren' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'belgeAdi', label: 'Belge Adı' },
    { key: 'versiyon', label: 'Versiyon' },
    { key: 'degistiren', label: 'Değiştiren' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Taslak', 'Arşivlendi'] },
  ];
  data = [
    { belgeAdi: 'Kalite El Kitabı', versiyon: 'v3.2', degistiren: 'Ali Can', tarih: '2024-04-01', durum: 'Aktif' },
    { belgeAdi: 'Operasyon Prosedürleri', versiyon: 'v2.0', degistiren: 'Aylin Kara', tarih: '2024-02-14', durum: 'Aktif' },
    { belgeAdi: 'İK Politikası', versiyon: 'v1.5', degistiren: 'Mert Demir', tarih: '2023-12-01', durum: 'Taslak' },
    { belgeAdi: 'Güvenlik Protokolü', versiyon: 'v4.1', degistiren: 'Selin Usta', tarih: '2024-03-22', durum: 'Aktif' },
    { belgeAdi: 'Satın Alma Rehberi', versiyon: 'v1.0', degistiren: 'Ali Can', tarih: '2023-07-10', durum: 'Arşivlendi' },
  ];
}
