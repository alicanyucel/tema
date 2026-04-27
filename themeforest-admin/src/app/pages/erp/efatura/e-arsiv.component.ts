import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-e-arsiv', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="E-Arşiv" subtitle="E-arşiv faturaları ve belge yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class EArsivComponent {
  cols: ErpColumn[] = [
    { key: 'arsivNo', label: 'Arşiv No' },
    { key: 'belgeAdi', label: 'Belge Adı' },
    { key: 'tutar', label: 'Tutar', type: 'currency' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'arsivNo', label: 'Arşiv No' },
    { key: 'belgeAdi', label: 'Belge Adı' },
    { key: 'tutar', label: 'Tutar', type: 'number' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Arşivlendi', 'İşlemde', 'Silindi'] },
  ];
  data = [
    { arsivNo: 'EA-2024-001', belgeAdi: 'Perakende Fatura Nisan', tutar: 8900, tarih: '2024-04-01', durum: 'Arşivlendi' },
    { arsivNo: 'EA-2024-002', belgeAdi: 'Toptan Satış Faturası', tutar: 54200, tarih: '2024-04-05', durum: 'Arşivlendi' },
    { arsivNo: 'EA-2024-003', belgeAdi: 'Yurt Dışı İhracat', tutar: 320000, tarih: '2024-04-08', durum: 'İşlemde' },
    { arsivNo: 'EA-2024-004', belgeAdi: 'İade Faturası', tutar: 3400, tarih: '2024-04-11', durum: 'Arşivlendi' },
    { arsivNo: 'EA-2024-005', belgeAdi: 'Hizmet Faturası', tutar: 12000, tarih: '2024-04-15', durum: 'Arşivlendi' },
  ];
}
