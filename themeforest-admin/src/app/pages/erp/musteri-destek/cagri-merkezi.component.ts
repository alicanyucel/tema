import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-cagri-merkezi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Çağrı Merkezi Entegrasyonu" subtitle="Müşteri çağrı ve iletişim takibi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class CagriMerkeziComponent {
  cols: ErpColumn[] = [
    { key: 'cagriNo', label: 'Çağrı No' },
    { key: 'musteri', label: 'Müşteri' },
    { key: 'konu', label: 'Konu' },
    { key: 'sure', label: 'Süre (dk)' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'cagriNo', label: 'Çağrı No' },
    { key: 'musteri', label: 'Müşteri' },
    { key: 'konu', label: 'Konu', type: 'select', options: ['Teknik Destek', 'Sipariş', 'Şikayet', 'Bilgi'] },
    { key: 'sure', label: 'Süre (dk)', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Beklemede', 'Devam Ediyor', 'Kapalı'] },
  ];
  data = [
    { cagriNo: 'CLL-001', musteri: 'Nova Market', konu: 'Teknik Destek', sure: 12, durum: 'Kapalı' },
    { cagriNo: 'CLL-002', musteri: 'Alfa Holding', konu: 'Sipariş', sure: 7, durum: 'Kapalı' },
    { cagriNo: 'CLL-003', musteri: 'Beta Mağaza', konu: 'Şikayet', sure: 18, durum: 'Devam Ediyor' },
    { cagriNo: 'CLL-004', musteri: 'Gama Lojistik', konu: 'Bilgi', sure: 4, durum: 'Kapalı' },
    { cagriNo: 'CLL-005', musteri: 'Delta Perakende', konu: 'Teknik Destek', sure: 0, durum: 'Beklemede' },
  ];
}
