import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-alacaklar', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Alacaklar" subtitle="Müşteri alacak takibi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class AlacaklarComponent {
  cols: ErpColumn[] = [
    { key: 'fatura', label: 'Fatura No' },
    { key: 'musteri', label: 'Müşteri' },
    { key: 'tutar', label: 'Tutar', type: 'currency' },
    { key: 'vade', label: 'Vade Tarihi' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'fatura', label: 'Fatura No' },
    { key: 'musteri', label: 'Müşteri' },
    { key: 'tutar', label: 'Tutar', type: 'number' },
    { key: 'vade', label: 'Vade Tarihi' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Beklemede', 'Tamamlandi', 'İptal'] },
  ];
  data = [
    { fatura: 'FTR-2024-001', musteri: 'Nova Market', tutar: 14200, vade: '15.05.2024', durum: 'Aktif' },
    { fatura: 'FTR-2024-002', musteri: 'Atlas Group', tutar: 8500, vade: '20.05.2024', durum: 'Beklemede' },
    { fatura: 'FTR-2024-003', musteri: 'Marmara Ticaret', tutar: 32000, vade: '01.06.2024', durum: 'Tamamlandi' },
    { fatura: 'FTR-2024-004', musteri: 'Anadolu Servis', tutar: 5750, vade: '10.06.2024', durum: 'Aktif' },
    { fatura: 'FTR-2024-005', musteri: 'Bosphorus Corp', tutar: 19400, vade: '25.06.2024', durum: 'Beklemede' },
  ];
}
