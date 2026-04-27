import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-kapasite-planlama', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Kapasite Planlama" subtitle="Kaynak ve kapasite kısıtlarıyla üretim planlama" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class KapasitePlanlamaComponent {
  cols: ErpColumn[] = [
    { key: 'kaynak', label: 'Kaynak' }, { key: 'kapasite', label: 'Kapasite (saat)' },
    { key: 'kullanim', label: 'Kullanım (saat)' }, { key: 'doluluk', label: 'Doluluk %' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'kaynak', label: 'Kaynak Adı' }, { key: 'kapasite', label: 'Kapasite (saat)', type: 'number' },
    { key: 'kullanim', label: 'Kullanım (saat)', type: 'number' }, { key: 'doluluk', label: 'Doluluk %', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Normal', 'Yoğun', 'Aşırı Yüklü', 'Boş'] }];
  data = [
    { kaynak: 'Hat-1 CNC', kapasite: 160, kullanim: 145, doluluk: 91, durum: 'Yoğun' },
    { kaynak: 'Hat-2 Montaj', kapasite: 160, kullanim: 120, doluluk: 75, durum: 'Normal' },
    { kaynak: 'Hat-3 Boyama', kapasite: 80, kullanim: 82, doluluk: 103, durum: 'Aşırı Yüklü' },
    { kaynak: 'Hat-4 Paketleme', kapasite: 160, kullanim: 60, doluluk: 38, durum: 'Boş' },
    { kaynak: 'Hat-5 Test', kapasite: 120, kullanim: 110, doluluk: 92, durum: 'Yoğun' }];
}
