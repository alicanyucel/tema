import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-filo-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Filo Yönetimi" subtitle="Araç filosu ve rota optimizasyon takibi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class FiloYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'arac', label: 'Araç' }, { key: 'sofor', label: 'Şoför' },
    { key: 'konum', label: 'Mevcut Konum' }, { key: 'kmSayaci', label: 'KM Sayacı' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'arac', label: 'Araç Plakası/ID' }, { key: 'tur', label: 'Araç Türü', type: 'select', options: ['TIR', 'Kamyon', 'Van', 'Binek', 'Motosiklet'] },
    { key: 'sofor', label: 'Şoför Adı' }, { key: 'kmSayaci', label: 'KM Sayacı', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Yolda', 'Depoda', 'Bakımda', 'Müsait'] }];
  data = [
    { arac: '34 XYZ 001', sofor: 'Hasan K.', konum: 'İstanbul-Ankara E80', kmSayaci: 145230, durum: 'Yolda' },
    { arac: '34 ABC 202', sofor: 'Mehmet T.', konum: 'Ankara Depo', kmSayaci: 98450, durum: 'Depoda' },
    { arac: '06 DEF 303', sofor: 'Ali R.', konum: 'İzmir Dağıtım', kmSayaci: 210870, durum: 'Yolda' },
    { arac: '34 GHI 404', sofor: '-', konum: 'Merkez Garaj', kmSayaci: 56120, durum: 'Bakımda' },
    { arac: '35 JKL 505', sofor: 'Can A.', konum: 'Bursa Depo', kmSayaci: 32870, durum: 'Müsait' }];
}
