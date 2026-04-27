import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-ux-analitik', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Kullanıcı Deneyimi Analitik" subtitle="ERP kullanıcı davranışı ve UX metrikleri" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class UxAnalitikComponent {
  cols: ErpColumn[] = [
    { key: 'sayfa', label: 'Sayfa/Modül' }, { key: 'ziyaret', label: 'Aylık Ziyaret' },
    { key: 'suresi', label: 'Ort. Süre (dk)' }, { key: 'memnuniyet', label: 'Memnuniyet' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'sayfa', label: 'Sayfa/Modül' }, { key: 'ziyaret', label: 'Aylık Ziyaret', type: 'number' },
    { key: 'suresi', label: 'Ort. Süre (dk)', type: 'number' }, { key: 'memnuniyet', label: 'Memnuniyet (1-5)', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['İyi', 'Orta', 'Kötü'] }];
  data = [
    { sayfa: 'Dashboard', ziyaret: 12500, suresi: 8.5, memnuniyet: 4.4, durum: 'İyi' },
    { sayfa: 'Satış Yönetimi', ziyaret: 9800, suresi: 12.3, memnuniyet: 4.1, durum: 'İyi' },
    { sayfa: 'Stok Yönetimi', ziyaret: 7200, suresi: 15.8, memnuniyet: 3.6, durum: 'Orta' },
    { sayfa: 'Finans Raporları', ziyaret: 5400, suresi: 18.2, memnuniyet: 3.9, durum: 'Orta' },
    { sayfa: 'İK Modülü', ziyaret: 3100, suresi: 9.7, memnuniyet: 2.8, durum: 'Kötü' }];
}
