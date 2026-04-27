import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-e-irsaliye', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="E-İrsaliye" subtitle="Elektronik sevk irsaliyesi takibi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class EIrsaliyeComponent {
  cols: ErpColumn[] = [
    { key: 'irsaliyeNo', label: 'İrsaliye No' },
    { key: 'alici', label: 'Alıcı' },
    { key: 'adet', label: 'Ürün Adedi' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'irsaliyeNo', label: 'İrsaliye No' },
    { key: 'alici', label: 'Alıcı' },
    { key: 'adet', label: 'Ürün Adedi', type: 'number' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Gönderildi', 'Teslim Edildi', 'İptal'] },
  ];
  data = [
    { irsaliyeNo: 'EI-2024-001', alici: 'Nova Market', adet: 200, tarih: '2024-04-10', durum: 'Teslim Edildi' },
    { irsaliyeNo: 'EI-2024-002', alici: 'Alfa Holding', adet: 50, tarih: '2024-04-12', durum: 'Gönderildi' },
    { irsaliyeNo: 'EI-2024-003', alici: 'Beta Mağaza', adet: 120, tarih: '2024-04-14', durum: 'Teslim Edildi' },
    { irsaliyeNo: 'EI-2024-004', alici: 'Gama Lojistik', adet: 80, tarih: '2024-04-17', durum: 'Gönderildi' },
    { irsaliyeNo: 'EI-2024-005', alici: 'Delta Perakende', adet: 30, tarih: '2024-04-19', durum: 'İptal' },
  ];
}
