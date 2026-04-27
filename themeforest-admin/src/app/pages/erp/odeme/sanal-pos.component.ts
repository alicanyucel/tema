import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-sanal-pos', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Sanal POS" subtitle="Online ödeme işlemleri ve komisyon takibi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class SanalPosComponent {
  cols: ErpColumn[] = [
    { key: 'islemNo', label: 'İşlem No' },
    { key: 'musteri', label: 'Müşteri' },
    { key: 'tutar', label: 'Tutar', type: 'currency' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'islemNo', label: 'İşlem No' },
    { key: 'musteri', label: 'Müşteri' },
    { key: 'tutar', label: 'Tutar', type: 'number' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Onaylandı', 'Beklemede', 'Reddedildi', 'İade'] },
  ];
  data = [
    { islemNo: 'POS-001', musteri: 'Nova Market', tutar: 12500, tarih: '2024-04-27 10:15', durum: 'Onaylandı' },
    { islemNo: 'POS-002', musteri: 'Bireysel Müşteri', tutar: 850, tarih: '2024-04-27 11:03', durum: 'Onaylandı' },
    { islemNo: 'POS-003', musteri: 'Beta Mağaza', tutar: 34000, tarih: '2024-04-26 14:22', durum: 'Reddedildi' },
    { islemNo: 'POS-004', musteri: 'Alfa Holding', tutar: 78900, tarih: '2024-04-26 16:45', durum: 'Onaylandı' },
    { islemNo: 'POS-005', musteri: 'Bireysel Müşteri', tutar: 2400, tarih: '2024-04-25 09:30', durum: 'İade' },
  ];
}
