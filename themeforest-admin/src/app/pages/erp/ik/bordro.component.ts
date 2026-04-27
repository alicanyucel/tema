import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-bordro', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Bordro" subtitle="Aylık bordro hesaplama ve takibi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class BordroComponent {
  cols: ErpColumn[] = [
    { key: 'sicilNo', label: 'Sicil No' },
    { key: 'adSoyad', label: 'Ad Soyad' },
    { key: 'donem', label: 'Dönem' },
    { key: 'brutMaas', label: 'Brüt Maaş', type: 'currency' },
    { key: 'kesintiler', label: 'Kesintiler', type: 'currency' },
    { key: 'netMaas', label: 'Net Maaş', type: 'currency' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'sicilNo', label: 'Sicil No' },
    { key: 'adSoyad', label: 'Ad Soyad' },
    { key: 'donem', label: 'Dönem' },
    { key: 'brutMaas', label: 'Brüt Maaş', type: 'number' },
    { key: 'kesintiler', label: 'Kesintiler', type: 'number' },
    { key: 'netMaas', label: 'Net Maaş', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Beklemede', 'Onaylandi', 'Odendi'] },
  ];
  data = [
    { sicilNo: 'EMP-001', adSoyad: 'Ece Yıldırım', donem: 'Nisan 2024', brutMaas: 45000, kesintiler: 9500, netMaas: 35500, durum: 'Odendi' },
    { sicilNo: 'EMP-002', adSoyad: 'Mert Demir', donem: 'Nisan 2024', brutMaas: 38000, kesintiler: 7900, netMaas: 30100, durum: 'Onaylandi' },
    { sicilNo: 'EMP-003', adSoyad: 'Aylin Kara', donem: 'Nisan 2024', brutMaas: 32000, kesintiler: 6700, netMaas: 25300, durum: 'Beklemede' },
    { sicilNo: 'EMP-004', adSoyad: 'Can Arslan', donem: 'Nisan 2024', brutMaas: 55000, kesintiler: 11800, netMaas: 43200, durum: 'Odendi' },
    { sicilNo: 'EMP-005', adSoyad: 'Selin Usta', donem: 'Nisan 2024', brutMaas: 42000, kesintiler: 8900, netMaas: 33100, durum: 'Onaylandi' },
  ];
}
