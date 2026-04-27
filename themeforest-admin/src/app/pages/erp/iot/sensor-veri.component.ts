import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-sensor-veri', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Sensör Veri Yönetimi" subtitle="IoT sensör okuma ve veri analizi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class SensorVeriComponent {
  cols: ErpColumn[] = [
    { key: 'sensor', label: 'Sensör' }, { key: 'olcum', label: 'Ölçüm Türü' },
    { key: 'deger', label: 'Son Değer' }, { key: 'esik', label: 'Eşik Değer' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'sensor', label: 'Sensör Adı' }, { key: 'olcum', label: 'Ölçüm Türü', type: 'select', options: ['Sıcaklık', 'Nem', 'Basınç', 'Titreşim', 'Işık', 'Akım'] },
    { key: 'deger', label: 'Mevcut Değer' }, { key: 'esik', label: 'Alarm Eşiği' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Normal', 'Uyarı', 'Alarm', 'Çevrimdışı'] }];
  data = [
    { sensor: 'Sıcaklık-Hat1-A', olcum: 'Sıcaklık', deger: '72°C', esik: '80°C', durum: 'Normal' },
    { sensor: 'Nem-Depo-B', olcum: 'Nem', deger: '%65', esik: '%70', durum: 'Uyarı' },
    { sensor: 'Titreşim-Motor-3', olcum: 'Titreşim', deger: '4.2 mm/s', esik: '5 mm/s', durum: 'Uyarı' },
    { sensor: 'Basınç-Hat2', olcum: 'Basınç', deger: '8.9 bar', esik: '10 bar', durum: 'Normal' },
    { sensor: 'Akım-Panel-1', olcum: 'Akım', deger: '-', esik: '50A', durum: 'Çevrimdışı' }];
}
