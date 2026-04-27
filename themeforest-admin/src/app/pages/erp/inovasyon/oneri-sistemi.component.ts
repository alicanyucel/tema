import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-oneri-sistemi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Çalışan Öneri Sistemi" subtitle="Çalışan inovasyon fikirleri ve öneri takibi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class OneriSistemiComponent {
  cols: ErpColumn[] = [
    { key: 'oneriNo', label: 'Öneri No' },
    { key: 'calisan', label: 'Çalışan' },
    { key: 'oneriBasligi', label: 'Öneri Başlığı' },
    { key: 'kategori', label: 'Kategori' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'oneriNo', label: 'Öneri No' },
    { key: 'calisan', label: 'Çalışan' },
    { key: 'oneriBasligi', label: 'Öneri Başlığı' },
    { key: 'kategori', label: 'Kategori', type: 'select', options: ['Süreç İyileştirme', 'Maliyet Azaltma', 'Müşteri Deneyimi', 'Teknoloji'] },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Değerlendirmede', 'Onaylandı', 'Reddedildi', 'Uygulandı'] },
  ];
  data = [
    { oneriNo: 'ON-001', calisan: 'Ali Can', oneriBasligi: 'Fatura Otomasyonu', kategori: 'Süreç İyileştirme', durum: 'Uygulandı' },
    { oneriNo: 'ON-002', calisan: 'Aylin Kara', oneriBasligi: 'Enerji Tasarrufu Planı', kategori: 'Maliyet Azaltma', durum: 'Onaylandı' },
    { oneriNo: 'ON-003', calisan: 'Mert Demir', oneriBasligi: 'Müşteri Self-Servis Portalı', kategori: 'Müşteri Deneyimi', durum: 'Değerlendirmede' },
    { oneriNo: 'ON-004', calisan: 'Selin Usta', oneriBasligi: 'Yapay Zeka Destekli Stok', kategori: 'Teknoloji', durum: 'Onaylandı' },
    { oneriNo: 'ON-005', calisan: 'Burak Yıldız', oneriBasligi: 'Kâğıtsız Ofis Uygulaması', kategori: 'Süreç İyileştirme', durum: 'Değerlendirmede' },
  ];
}
