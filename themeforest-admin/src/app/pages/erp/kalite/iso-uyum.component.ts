import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-iso-uyum', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="ISO Uyum Süreçleri" subtitle="ISO standartları uyum takibi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class IsoUyumComponent {
  cols: ErpColumn[] = [
    { key: 'standart', label: 'Standart' },
    { key: 'kapsam', label: 'Kapsam' },
    { key: 'sorumlu', label: 'Sorumlu' },
    { key: 'sonYenileme', label: 'Son Yenileme' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'standart', label: 'Standart' },
    { key: 'kapsam', label: 'Kapsam' },
    { key: 'sorumlu', label: 'Sorumlu' },
    { key: 'sonYenileme', label: 'Son Yenileme' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Uyumlu', 'İnceleniyor', 'Uyumsuz'] },
  ];
  data = [
    { standart: 'ISO 9001:2015', kapsam: 'Kalite Yönetimi', sorumlu: 'Ali Can', sonYenileme: '2023-11-10', durum: 'Uyumlu' },
    { standart: 'ISO 27001', kapsam: 'Bilgi Güvenliği', sorumlu: 'Mert Demir', sonYenileme: '2024-01-15', durum: 'Uyumlu' },
    { standart: 'ISO 14001', kapsam: 'Çevre Yönetimi', sorumlu: 'Aylin Kara', sonYenileme: '2023-09-01', durum: 'İnceleniyor' },
    { standart: 'ISO 45001', kapsam: 'İş Sağlığı', sorumlu: 'Selin Usta', sonYenileme: '2024-02-28', durum: 'Uyumlu' },
    { standart: 'ISO 50001', kapsam: 'Enerji Yönetimi', sorumlu: 'Ali Can', sonYenileme: '2022-06-01', durum: 'Uyumsuz' },
  ];
}
