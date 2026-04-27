import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-borclar', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Borçlar" subtitle="Tedarikçi borç takibi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class BorclarComponent {
  cols: ErpColumn[] = [
    { key: 'fatura', label: 'Fatura No' },
    { key: 'tedarikci', label: 'Tedarikçi' },
    { key: 'tutar', label: 'Tutar', type: 'currency' },
    { key: 'vade', label: 'Vade Tarihi' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'fatura', label: 'Fatura No' },
    { key: 'tedarikci', label: 'Tedarikçi' },
    { key: 'tutar', label: 'Tutar', type: 'number' },
    { key: 'vade', label: 'Vade Tarihi' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Beklemede', 'Tamamlandi', 'İptal'] },
  ];
  data = [
    { fatura: 'VND-2024-011', tedarikci: 'TechParts Ltd', tutar: 22000, vade: '18.05.2024', durum: 'Aktif' },
    { fatura: 'VND-2024-012', tedarikci: 'Global Supply', tutar: 45000, vade: '22.05.2024', durum: 'Beklemede' },
    { fatura: 'VND-2024-013', tedarikci: 'Delta Endüstri', tutar: 17500, vade: '30.05.2024', durum: 'Tamamlandi' },
    { fatura: 'VND-2024-014', tedarikci: 'Mega Components', tutar: 9800, vade: '05.06.2024', durum: 'Aktif' },
  ];
}
