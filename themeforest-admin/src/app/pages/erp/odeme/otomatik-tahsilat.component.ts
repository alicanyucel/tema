import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-otomatik-tahsilat', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Otomatik Tahsilat" subtitle="Otomatik ödeme ve tahsilat talimatları" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class OtomatikTahsilatComponent {
  cols: ErpColumn[] = [
    { key: 'tahsilatNo', label: 'Tahsilat No' },
    { key: 'musteri', label: 'Müşteri' },
    { key: 'tutar', label: 'Tutar', type: 'currency' },
    { key: 'planlananTarih', label: 'Planlanan Tarih' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'tahsilatNo', label: 'Tahsilat No' },
    { key: 'musteri', label: 'Müşteri' },
    { key: 'tutar', label: 'Tutar', type: 'number' },
    { key: 'planlananTarih', label: 'Planlanan Tarih' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Planlandı', 'Tahsil Edildi', 'Başarısız', 'İptal'] },
  ];
  data = [
    { tahsilatNo: 'TAH-001', musteri: 'Nova Market', tutar: 45800, planlananTarih: '2024-05-01', durum: 'Planlandı' },
    { tahsilatNo: 'TAH-002', musteri: 'Alfa Holding', tutar: 128000, planlananTarih: '2024-04-30', durum: 'Tahsil Edildi' },
    { tahsilatNo: 'TAH-003', musteri: 'Beta Mağaza', tutar: 23400, planlananTarih: '2024-04-28', durum: 'Tahsil Edildi' },
    { tahsilatNo: 'TAH-004', musteri: 'Gama Lojistik', tutar: 67500, planlananTarih: '2024-05-03', durum: 'Planlandı' },
    { tahsilatNo: 'TAH-005', musteri: 'Delta Perakende', tutar: 15200, planlananTarih: '2024-04-25', durum: 'Başarısız' },
  ];
}
