import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-e-mutabakat', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="E-Mutabakat" subtitle="Elektronik hesap mutabakat süreçleri" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class EMutabakatComponent {
  cols: ErpColumn[] = [
    { key: 'mutabakatNo', label: 'Mutabakat No' },
    { key: 'karsiTaraf', label: 'Karşı Taraf' },
    { key: 'bakiye', label: 'Bakiye', type: 'currency' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'mutabakatNo', label: 'Mutabakat No' },
    { key: 'karsiTaraf', label: 'Karşı Taraf' },
    { key: 'bakiye', label: 'Bakiye', type: 'number' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Onaylandı', 'Beklemede', 'Uyuşmazlık'] },
  ];
  data = [
    { mutabakatNo: 'MT-2024-001', karsiTaraf: 'Nova Market', bakiye: 45800, tarih: '2024-04-01', durum: 'Onaylandı' },
    { mutabakatNo: 'MT-2024-002', karsiTaraf: 'Alfa Holding', bakiye: 128000, tarih: '2024-04-05', durum: 'Beklemede' },
    { mutabakatNo: 'MT-2024-003', karsiTaraf: 'Beta Mağaza', bakiye: 23400, tarih: '2024-04-08', durum: 'Onaylandı' },
    { mutabakatNo: 'MT-2024-004', karsiTaraf: 'Gama Lojistik', bakiye: 67500, tarih: '2024-04-10', durum: 'Uyuşmazlık' },
    { mutabakatNo: 'MT-2024-005', karsiTaraf: 'Delta Perakende', bakiye: 15200, tarih: '2024-04-15', durum: 'Beklemede' },
  ];
}
