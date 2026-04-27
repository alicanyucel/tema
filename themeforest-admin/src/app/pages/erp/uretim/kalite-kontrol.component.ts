import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-kalite-kontrol', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Kalite Kontrol" subtitle="Üretim ve giriş kalite kontrol kayıtları" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class KaliteKontrolComponent {
  cols: ErpColumn[] = [
    { key: 'kkNo', label: 'KK No' },
    { key: 'urun', label: 'Ürün' },
    { key: 'miktar', label: 'Kontrol Miktarı' },
    { key: 'hatali', label: 'Hatalı Adet' },
    { key: 'kontroller', label: 'Kontrolör' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'sonuc', label: 'Sonuç', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'kkNo', label: 'KK No' },
    { key: 'urun', label: 'Ürün' },
    { key: 'miktar', label: 'Kontrol Miktarı', type: 'number' },
    { key: 'hatali', label: 'Hatalı Adet', type: 'number' },
    { key: 'kontroller', label: 'Kontrolör' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'notlar', label: 'Notlar', type: 'textarea' },
    { key: 'sonuc', label: 'Sonuç', type: 'select', options: ['Aktif', 'Tamamlandi', 'Beklemede', 'İptal'] },
  ];
  data = [
    { kkNo: 'QC-001', urun: 'Ürün A Model X', miktar: 100, hatali: 2, kontroller: 'Ali Yıldız', tarih: '20.04.2024', sonuc: 'Tamamlandi' },
    { kkNo: 'QC-002', urun: 'Hammadde Lot B', miktar: 500, hatali: 0, kontroller: 'Ayşe Demir', tarih: '21.04.2024', sonuc: 'Tamamlandi' },
    { kkNo: 'QC-003', urun: 'Aksesuar Seti', miktar: 200, hatali: 15, kontroller: 'Ali Yıldız', tarih: '22.04.2024', sonuc: 'Beklemede' },
    { kkNo: 'QC-004', urun: 'Yedek Parça Lot A', miktar: 150, hatali: 3, kontroller: 'Ayşe Demir', tarih: '23.04.2024', sonuc: 'Tamamlandi' },
  ];
}
