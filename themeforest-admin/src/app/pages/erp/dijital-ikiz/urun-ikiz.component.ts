import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-urun-ikiz', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Ürün Dijital İkizi" subtitle="Ürün bazlı dijital ikiz simülasyon ve analiz" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class UrunIkizComponent {
  cols: ErpColumn[] = [
    { key: 'urun', label: 'Ürün' }, { key: 'sensor', label: 'Bağlı Sensör' },
    { key: 'simVeri', label: 'Sim. Verisi' }, { key: 'sapma', label: 'Sapma %' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'urun', label: 'Ürün/Model' }, { key: 'seriNo', label: 'Seri No' },
    { key: 'sensor', label: 'Bağlı Sensör Sayısı', type: 'number' }, { key: 'simVeri', label: 'Simülasyon Verisi' },
    { key: 'sapma', label: 'Fiziksel-Dijital Sapma %', type: 'number' }, { key: 'durum', label: 'İkiz Durumu', type: 'select', options: ['Senkron', 'Sapma Var', 'Güncelleniyor', 'Pasif'] }];
  data = [
    { urun: 'Endüstriyel Robot A1', seriNo: 'EA1-001', sensor: 24, simVeri: 'Sıcaklık/Titreşim/Akım', sapma: 0.3, durum: 'Senkron' },
    { urun: 'Kompresör B2', seriNo: 'KB2-045', sensor: 12, simVeri: 'Basınç/Nem/Sıcaklık', sapma: 2.1, durum: 'Sapma Var' },
    { urun: 'CNC Tezgah C3', seriNo: 'CC3-012', sensor: 32, simVeri: 'Titreşim/Sıcaklık/RPM', sapma: 0.1, durum: 'Senkron' },
    { urun: 'Pompa Ünitesi D4', seriNo: 'PD4-089', sensor: 8, simVeri: 'Basınç/Akış', sapma: 5.8, durum: 'Sapma Var' },
    { urun: 'Yeni Model E5', seriNo: 'NE5-001', sensor: 0, simVeri: '-', sapma: 0, durum: 'Güncelleniyor' }];
}
