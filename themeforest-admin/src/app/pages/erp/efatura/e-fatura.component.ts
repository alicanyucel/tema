import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-e-fatura', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="E-Fatura" subtitle="Elektronik fatura gönderim ve takibi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class EFaturaComponent {
  cols: ErpColumn[] = [
    { key: 'faturaNo', label: 'Fatura No' },
    { key: 'alici', label: 'Alıcı' },
    { key: 'tutar', label: 'Tutar', type: 'currency' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'faturaNo', label: 'Fatura No' },
    { key: 'alici', label: 'Alıcı' },
    { key: 'tutar', label: 'Tutar', type: 'number' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Gönderildi', 'Onaylandı', 'Reddedildi', 'Beklemede'] },
  ];
  data = [
    { faturaNo: 'EF-2024-001', alici: 'Nova Market', tutar: 45800, tarih: '2024-04-10', durum: 'Onaylandı' },
    { faturaNo: 'EF-2024-002', alici: 'Alfa Holding', tutar: 128000, tarih: '2024-04-12', durum: 'Gönderildi' },
    { faturaNo: 'EF-2024-003', alici: 'Beta Mağaza', tutar: 23400, tarih: '2024-04-15', durum: 'Onaylandı' },
    { faturaNo: 'EF-2024-004', alici: 'Gama Lojistik', tutar: 67500, tarih: '2024-04-18', durum: 'Beklemede' },
    { faturaNo: 'EF-2024-005', alici: 'Delta Perakende', tutar: 15200, tarih: '2024-04-20', durum: 'Reddedildi' },
  ];
}
