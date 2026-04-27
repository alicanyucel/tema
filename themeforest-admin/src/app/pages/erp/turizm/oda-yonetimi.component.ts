import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-oda-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Oda Yönetimi" subtitle="Otel oda envanter ve doluluk yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class OdaYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'odaNo', label: 'Oda No' }, { key: 'tip', label: 'Oda Tipi' },
    { key: 'fiyat', label: 'Gecelik Fiyat', type: 'currency' }, { key: 'kapasite', label: 'Kapasite' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'odaNo', label: 'Oda Numarası' }, { key: 'tip', label: 'Oda Tipi', type: 'select', options: ['Standart', 'Deluxe', 'Suite', 'Aile Odası', 'Engelli Odası'] },
    { key: 'fiyat', label: 'Gecelik Fiyat (₺)', type: 'number' }, { key: 'kapasite', label: 'Maksimum Kapasite', type: 'number' },
    { key: 'durum', label: 'Oda Durumu', type: 'select', options: ['Müsait', 'Dolu', 'Temizleniyor', 'Bakımda', 'Rezerve'] }];
  data = [
    { odaNo: '101', tip: 'Standart', fiyat: 850, kapasite: 2, durum: 'Müsait' },
    { odaNo: '205', tip: 'Deluxe', fiyat: 1450, kapasite: 3, durum: 'Dolu' },
    { odaNo: '310', tip: 'Suite', fiyat: 3500, kapasite: 4, durum: 'Rezerve' },
    { odaNo: '412', tip: 'Aile Odası', fiyat: 2200, kapasite: 6, durum: 'Temizleniyor' },
    { odaNo: '115', tip: 'Engelli Odası', fiyat: 900, kapasite: 2, durum: 'Bakımda' }];
}
