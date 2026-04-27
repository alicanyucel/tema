import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-satis-sonrasi-servis', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Satış Sonrası Servis" subtitle="Garanti, bakım ve satış sonrası hizmet takibi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class SatisSonrasiServisComponent {
  cols: ErpColumn[] = [
    { key: 'servisNo', label: 'Servis No' }, { key: 'musteri', label: 'Müşteri' },
    { key: 'urun', label: 'Ürün' }, { key: 'talep', label: 'Talep Türü' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'servisNo', label: 'Servis No' }, { key: 'musteri', label: 'Müşteri' },
    { key: 'urun', label: 'Ürün/Model' }, { key: 'talep', label: 'Talep Türü', type: 'select', options: ['Garanti Tamiri', 'Bakım', 'Yedek Parça', 'İade'] },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Açık', 'İşlemde', 'Tamamlandı', 'İptal'] }];
  data = [
    { servisNo: 'SRS-001', musteri: 'Nova Market', urun: 'Ürün A Model X', talep: 'Garanti Tamiri', durum: 'İşlemde' },
    { servisNo: 'SRS-002', musteri: 'Alfa Holding', urun: 'Ürün B Model Y', talep: 'Bakım', durum: 'Tamamlandı' },
    { servisNo: 'SRS-003', musteri: 'Beta Mağaza', urun: 'Ürün C Model Z', talep: 'İade', durum: 'Açık' },
    { servisNo: 'SRS-004', musteri: 'Gama Lojistik', urun: 'Ürün A Model X', talep: 'Yedek Parça', durum: 'İşlemde' },
    { servisNo: 'SRS-005', musteri: 'Delta Perakende', urun: 'Ürün D Model W', talep: 'Bakım', durum: 'Tamamlandı' }];
}
