import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-urun-gelistirme', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Ürün Geliştirme Süreçleri" subtitle="Ar-Ge ve ürün geliştirme proje takibi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class UrunGelistirmeComponent {
  cols: ErpColumn[] = [
    { key: 'projeNo', label: 'Proje No' },
    { key: 'urunAdi', label: 'Ürün Adı' },
    { key: 'asamasi', label: 'Aşama' },
    { key: 'hedefTarih', label: 'Hedef Tarih' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'projeNo', label: 'Proje No' },
    { key: 'urunAdi', label: 'Ürün Adı' },
    { key: 'asamasi', label: 'Aşama', type: 'select', options: ['Fikir', 'Fizibilite', 'Geliştirme', 'Test', 'Lansman'] },
    { key: 'hedefTarih', label: 'Hedef Tarih' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Planlandı', 'Devam Ediyor', 'Tamamlandı', 'İptal'] },
  ];
  data = [
    { projeNo: 'RD-001', urunAdi: 'Akıllı Sensör Ailesi', asamasi: 'Geliştirme', hedefTarih: '2024-09-01', durum: 'Devam Ediyor' },
    { projeNo: 'RD-002', urunAdi: 'Enerji Verimli Motor', asamasi: 'Test', hedefTarih: '2024-07-15', durum: 'Devam Ediyor' },
    { projeNo: 'RD-003', urunAdi: 'Modüler Kontrol Paneli', asamasi: 'Lansman', hedefTarih: '2024-05-01', durum: 'Tamamlandı' },
    { projeNo: 'RD-004', urunAdi: 'IoT Gateway v2', asamasi: 'Fizibilite', hedefTarih: '2024-11-01', durum: 'Planlandı' },
    { projeNo: 'RD-005', urunAdi: 'Özel Proje A', asamasi: 'Fikir', hedefTarih: '2025-01-01', durum: 'Planlandı' },
  ];
}
