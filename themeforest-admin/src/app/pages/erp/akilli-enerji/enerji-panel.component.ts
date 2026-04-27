import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-enerji-panel', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Akıllı Enerji Paneli" subtitle="Enerji tüketimi izleme ve optimizasyon" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class EnerjiPanelComponent {
  cols: ErpColumn[] = [
    { key: 'alan', label: 'Alan/Bölüm' }, { key: 'tuketim', label: 'Tüketim (kWh)' },
    { key: 'maliyet', label: 'Maliyet', type: 'currency' }, { key: 'hedef', label: 'Hedef (kWh)' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'alan', label: 'Alan/Bölüm' }, { key: 'tur', label: 'Enerji Türü', type: 'select', options: ['Elektrik', 'Doğalgaz', 'Güneş', 'Jeotermal'] },
    { key: 'tuketim', label: 'Aylık Tüketim (kWh)', type: 'number' }, { key: 'maliyet', label: 'Aylık Maliyet (₺)', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Hedefte', 'Aşıldı', 'Verimli'] }];
  data = [
    { alan: 'Üretim Tesisi', tuketim: 85400, maliyet: 512400, hedef: 80000, durum: 'Aşıldı' },
    { alan: 'Genel Merkez', tuketim: 24500, maliyet: 147000, hedef: 25000, durum: 'Hedefte' },
    { alan: 'Depo A', tuketim: 12800, maliyet: 76800, hedef: 15000, durum: 'Verimli' },
    { alan: 'Güneş Paneli', tuketim: -18500, maliyet: -111000, hedef: -20000, durum: 'Hedefte' },
    { alan: 'Çağrı Merkezi', tuketim: 8200, maliyet: 49200, hedef: 8000, durum: 'Aşıldı' }];
}
