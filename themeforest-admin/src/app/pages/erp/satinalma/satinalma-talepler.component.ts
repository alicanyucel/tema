import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-satinalma-talepler', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Satın Alma Talepleri" subtitle="Departman bazlı satın alma talepleri" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class SatinalmaTaleplerComponent {
  cols: ErpColumn[] = [
    { key: 'talepNo', label: 'Talep No' },
    { key: 'departman', label: 'Departman' },
    { key: 'urun', label: 'Ürün/Hizmet' },
    { key: 'miktar', label: 'Miktar' },
    { key: 'tahminiTutar', label: 'Tahmini Tutar', type: 'currency' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'talepNo', label: 'Talep No' },
    { key: 'departman', label: 'Departman', type: 'select', options: ['IT', 'Üretim', 'Satış', 'İK', 'Pazarlama', 'Depo'] },
    { key: 'urun', label: 'Ürün/Hizmet' },
    { key: 'miktar', label: 'Miktar', type: 'number' },
    { key: 'tahminiTutar', label: 'Tahmini Tutar', type: 'number' },
    { key: 'aciklama', label: 'Açıklama', type: 'textarea' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Beklemede', 'Onaylandi', 'Reddedildi', 'Tamamlandi'] },
  ];
  data = [
    { talepNo: 'TAL-001', departman: 'IT', urun: '10x Laptop', miktar: 10, tahminiTutar: 150000, durum: 'Onaylandi' },
    { talepNo: 'TAL-002', departman: 'Üretim', urun: 'Yedek Parça Seti', miktar: 50, tahminiTutar: 35000, durum: 'Beklemede' },
    { talepNo: 'TAL-003', departman: 'Depo', urun: 'Raf Sistemi', miktar: 20, tahminiTutar: 48000, durum: 'Beklemede' },
    { talepNo: 'TAL-004', departman: 'Pazarlama', urun: 'Baskı Malzemeleri', miktar: 1000, tahminiTutar: 12000, durum: 'Tamamlandi' },
  ];
}
