import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-dijital-ikiz-sim', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Dijital İkiz Simülasyonu" subtitle="Fabrika ve ürün dijital ikiz yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class DijitalIkizSimComponent {
  cols: ErpColumn[] = [
    { key: 'ikizAdi', label: 'Dijital İkiz' }, { key: 'fizikselVarlik', label: 'Fiziksel Varlık' },
    { key: 'guncelleme', label: 'Son Güncelleme' }, { key: 'uyum', label: 'Uyum %' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'ikizAdi', label: 'Dijital İkiz Adı' }, { key: 'fizikselVarlik', label: 'Fiziksel Varlık' },
    { key: 'guncelleme', label: 'Son Güncelleme' }, { key: 'uyum', label: 'Uyum %', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Senkron', 'Gecikmiş', 'Hata', 'Pasif'] }];
  data = [
    { ikizAdi: 'Fabrika-Alpha İkizi', fizikselVarlik: 'Fabrika Üretim Hattı', guncelleme: '2024-04-27 10:00', uyum: 98.5, durum: 'Senkron' },
    { ikizAdi: 'Ürün-A İkizi', fizikselVarlik: 'Ürün A Model Serisi', guncelleme: '2024-04-27 09:30', uyum: 97.1, durum: 'Senkron' },
    { ikizAdi: 'Depo-B İkizi', fizikselVarlik: 'Depo B Sistemi', guncelleme: '2024-04-26 18:00', uyum: 92.3, durum: 'Gecikmiş' },
    { ikizAdi: 'Ekipman CNC-1 İkizi', fizikselVarlik: 'CNC Makine 1', guncelleme: '2024-04-26 12:00', uyum: 88.0, durum: 'Gecikmiş' },
    { ikizAdi: 'Eski Hat İkizi', fizikselVarlik: 'Hat 5 (Eski)', guncelleme: '2024-01-01 00:00', uyum: 0, durum: 'Pasif' }];
}
