import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-is-sagligi-guvenligi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="İş Sağlığı ve Güvenliği" subtitle="İSG olayları, eğitimler ve risk değerlendirmeleri" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class IsSagligiGuvenligiComponent {
  cols: ErpColumn[] = [
    { key: 'kayitNo', label: 'Kayıt No' },
    { key: 'tip', label: 'Tip' },
    { key: 'bolge', label: 'Bölge' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'kayitNo', label: 'Kayıt No' },
    { key: 'tip', label: 'Tip', type: 'select', options: ['Kaza', 'Ramak Kala', 'Eğitim', 'Denetim'] },
    { key: 'bolge', label: 'Bölge' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Açık', 'İnceleniyor', 'Kapalı'] },
  ];
  data = [
    { kayitNo: 'ISG-001', tip: 'Denetim', bolge: 'Üretim Hattı A', tarih: '2024-04-05', durum: 'Kapalı' },
    { kayitNo: 'ISG-002', tip: 'Ramak Kala', bolge: 'Depo', tarih: '2024-03-18', durum: 'İnceleniyor' },
    { kayitNo: 'ISG-003', tip: 'Eğitim', bolge: 'Tüm Bölgeler', tarih: '2024-02-10', durum: 'Kapalı' },
    { kayitNo: 'ISG-004', tip: 'Kaza', bolge: 'Montaj Hattı', tarih: '2024-01-22', durum: 'Kapalı' },
    { kayitNo: 'ISG-005', tip: 'Denetim', bolge: 'Kimyasal Depo', tarih: '2024-04-20', durum: 'Açık' },
  ];
}
