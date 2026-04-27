import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-is-emirleri', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="İş Emirleri" subtitle="Üretim iş emirleri takibi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class IsEmirleriComponent {
  cols: ErpColumn[] = [
    { key: 'isEmriNo', label: 'İş Emri No' },
    { key: 'urun', label: 'Ürün' },
    { key: 'miktar', label: 'Miktar' },
    { key: 'atanan', label: 'Atanan Ekip' },
    { key: 'planlananBitis', label: 'Planlanan Bitiş' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'isEmriNo', label: 'İş Emri No' },
    { key: 'urun', label: 'Ürün' },
    { key: 'miktar', label: 'Miktar', type: 'number' },
    { key: 'atanan', label: 'Atanan Ekip' },
    { key: 'planlananBitis', label: 'Planlanan Bitiş' },
    { key: 'talimatlar', label: 'Talimatlar', type: 'textarea' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Beklemede', 'Devam Ediyor', 'Tamamlandi', 'İptal'] },
  ];
  data = [
    { isEmriNo: 'WO-2024-001', urun: 'Ürün A Model X', miktar: 100, atanan: 'Hat 1 Ekibi', planlananBitis: '20.04.2024', durum: 'Devam Ediyor' },
    { isEmriNo: 'WO-2024-002', urun: 'Ürün B Model Y', miktar: 50, atanan: 'Hat 2 Ekibi', planlananBitis: '22.04.2024', durum: 'Beklemede' },
    { isEmriNo: 'WO-2024-003', urun: 'Aksesuar Seti', miktar: 200, atanan: 'Montaj Ekibi', planlananBitis: '10.04.2024', durum: 'Tamamlandi' },
    { isEmriNo: 'WO-2024-004', urun: 'Yedek Parça Paketi', miktar: 75, atanan: 'Hat 1 Ekibi', planlananBitis: '28.04.2024', durum: 'Beklemede' },
  ];
}
