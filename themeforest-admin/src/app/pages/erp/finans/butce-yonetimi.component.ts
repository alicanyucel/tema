import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-butce-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Bütçe Yönetimi" subtitle="Departman bazlı bütçe planlaması ve takibi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class ButceYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'departman', label: 'Departman' },
    { key: 'donem', label: 'Dönem' },
    { key: 'planlanan', label: 'Planlanan', type: 'currency' },
    { key: 'gerceklesen', label: 'Gerçekleşen', type: 'currency' },
    { key: 'kalan', label: 'Kalan', type: 'currency' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'departman', label: 'Departman' },
    { key: 'donem', label: 'Dönem' },
    { key: 'planlanan', label: 'Planlanan', type: 'number' },
    { key: 'gerceklesen', label: 'Gerçekleşen', type: 'number' },
    { key: 'kalan', label: 'Kalan', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Tamamlandi', 'Beklemede'] },
  ];
  data = [
    { departman: 'Satış', donem: 'Q2-2024', planlanan: 300000, gerceklesen: 275000, kalan: 25000, durum: 'Aktif' },
    { departman: 'Pazarlama', donem: 'Q2-2024', planlanan: 120000, gerceklesen: 98000, kalan: 22000, durum: 'Aktif' },
    { departman: 'İK', donem: 'Q2-2024', planlanan: 80000, gerceklesen: 82000, kalan: -2000, durum: 'Beklemede' },
    { departman: 'IT', donem: 'Q2-2024', planlanan: 150000, gerceklesen: 143000, kalan: 7000, durum: 'Aktif' },
    { departman: 'Üretim', donem: 'Q2-2024', planlanan: 500000, gerceklesen: 510000, kalan: -10000, durum: 'Beklemede' },
  ];
}
