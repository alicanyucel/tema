import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-ariza-takibi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Arıza Takibi" subtitle="Ekipman arıza kayıtları ve giderme süreçleri" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class ArizaTakibiComponent {
  cols: ErpColumn[] = [
    { key: 'arizaNo', label: 'Arıza No' },
    { key: 'ekipman', label: 'Ekipman' },
    { key: 'lokasyon', label: 'Lokasyon' },
    { key: 'oncelik', label: 'Öncelik', type: 'badge' },
    { key: 'bildirilenKisi', label: 'Bildiren' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'arizaNo', label: 'Arıza No' },
    { key: 'ekipman', label: 'Ekipman' },
    { key: 'lokasyon', label: 'Lokasyon' },
    { key: 'oncelik', label: 'Öncelik', type: 'select', options: ['Yuksek', 'Orta', 'Dusuk'] },
    { key: 'bildirilenKisi', label: 'Bildiren' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'aciklama', label: 'Açıklama', type: 'textarea' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Acik', 'Devam Ediyor', 'Tamamlandi', 'İptal'] },
  ];
  data = [
    { arizaNo: 'ARZ-001', ekipman: 'CNC Torna Makinesi #3', lokasyon: 'Üretim Hattı 1', oncelik: 'Yuksek', bildirilenKisi: 'Ali Vural', tarih: '22.04.2024', durum: 'Devam Ediyor' },
    { arizaNo: 'ARZ-002', ekipman: 'Forklift #2', lokasyon: 'Ana Depo', oncelik: 'Orta', bildirilenKisi: 'Burak İnan', tarih: '21.04.2024', durum: 'Acik' },
    { arizaNo: 'ARZ-003', ekipman: 'Konveyör Bant B', lokasyon: 'Üretim Hattı 2', oncelik: 'Yuksek', bildirilenKisi: 'Ali Vural', tarih: '19.04.2024', durum: 'Tamamlandi' },
    { arizaNo: 'ARZ-004', ekipman: 'Klima Sistemi', lokasyon: 'Sunucu Odası', oncelik: 'Dusuk', bildirilenKisi: 'Mert Demir', tarih: '23.04.2024', durum: 'Acik' },
  ];
}
