import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-uretim-planlama', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Üretim Planlama (MRP)" subtitle="Malzeme ihtiyaç planlaması ve üretim programı" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class UretimPlanlamaComponent {
  cols: ErpColumn[] = [
    { key: 'planNo', label: 'Plan No' },
    { key: 'urun', label: 'Ürün' },
    { key: 'miktar', label: 'Miktar' },
    { key: 'baslangic', label: 'Başlangıç' },
    { key: 'bitis', label: 'Bitiş' },
    { key: 'oncelik', label: 'Öncelik', type: 'badge' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'planNo', label: 'Plan No' },
    { key: 'urun', label: 'Ürün' },
    { key: 'miktar', label: 'Miktar', type: 'number' },
    { key: 'baslangic', label: 'Başlangıç' },
    { key: 'bitis', label: 'Bitiş' },
    { key: 'oncelik', label: 'Öncelik', type: 'select', options: ['Yuksek', 'Orta', 'Dusuk'] },
    { key: 'aciklama', label: 'Açıklama', type: 'textarea' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Beklemede', 'Devam Ediyor', 'Tamamlandi', 'İptal'] },
  ];
  data = [
    { planNo: 'MRP-001', urun: 'Ürün A Model X', miktar: 500, baslangic: '15.04.2024', bitis: '25.04.2024', oncelik: 'Yuksek', durum: 'Devam Ediyor' },
    { planNo: 'MRP-002', urun: 'Ürün B Model Y', miktar: 200, baslangic: '20.04.2024', bitis: '05.05.2024', oncelik: 'Orta', durum: 'Beklemede' },
    { planNo: 'MRP-003', urun: 'Aksesuar Seti', miktar: 1000, baslangic: '01.04.2024', bitis: '10.04.2024', oncelik: 'Dusuk', durum: 'Tamamlandi' },
    { planNo: 'MRP-004', urun: 'Yedek Parça Paketi', miktar: 300, baslangic: '25.04.2024', bitis: '10.05.2024', oncelik: 'Yuksek', durum: 'Beklemede' },
  ];
}
