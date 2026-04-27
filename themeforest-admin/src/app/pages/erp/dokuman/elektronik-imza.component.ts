import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-elektronik-imza', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Elektronik İmza Entegrasyonu" subtitle="Dijital imza süreçleri ve takibi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class ElektronikImzaComponent {
  cols: ErpColumn[] = [
    { key: 'belgeNo', label: 'Belge No' },
    { key: 'imzalayan', label: 'İmzalayan' },
    { key: 'tarih', label: 'İmza Tarihi' },
    { key: 'gecerlilikTarihi', label: 'Geçerlilik' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'belgeNo', label: 'Belge No' },
    { key: 'imzalayan', label: 'İmzalayan' },
    { key: 'tarih', label: 'İmza Tarihi' },
    { key: 'gecerlilikTarihi', label: 'Geçerlilik Tarihi' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Geçerli', 'Beklemede', 'Süresi Doldu'] },
  ];
  data = [
    { belgeNo: 'SIG-001', imzalayan: 'Ali Can', tarih: '2024-04-10', gecerlilikTarihi: '2025-04-10', durum: 'Geçerli' },
    { belgeNo: 'SIG-002', imzalayan: 'Aylin Kara', tarih: '2024-03-01', gecerlilikTarihi: '2025-03-01', durum: 'Geçerli' },
    { belgeNo: 'SIG-003', imzalayan: 'Mert Demir', tarih: '2023-06-15', gecerlilikTarihi: '2024-06-15', durum: 'Süresi Doldu' },
    { belgeNo: 'SIG-004', imzalayan: 'Finans Ekip', tarih: '', gecerlilikTarihi: '', durum: 'Beklemede' },
    { belgeNo: 'SIG-005', imzalayan: 'Selin Usta', tarih: '2024-01-20', gecerlilikTarihi: '2025-01-20', durum: 'Geçerli' },
  ];
}
