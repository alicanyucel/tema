import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-enerji-tuketimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Enerji Tüketimi" subtitle="Tesis ve makine bazlı enerji tüketim takibi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class EnerjiTuketimiComponent {
  cols: ErpColumn[] = [
    { key: 'tesis', label: 'Tesis/Bölüm' }, { key: 'kaynak', label: 'Kaynak' },
    { key: 'tuketim', label: 'Tüketim (kWh)' }, { key: 'maliyet', label: 'Maliyet', type: 'currency' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'tesis', label: 'Tesis/Bölüm' }, { key: 'kaynak', label: 'Enerji Kaynağı', type: 'select', options: ['Elektrik', 'Doğalgaz', 'Güneş', 'Su'] },
    { key: 'tuketim', label: 'Tüketim', type: 'number' }, { key: 'maliyet', label: 'Maliyet', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Normal', 'Yüksek', 'Kritik'] }];
  data = [
    { tesis: 'Üretim Hattı 1', kaynak: 'Elektrik', tuketim: 45000, maliyet: 135000, durum: 'Normal' },
    { tesis: 'Depo A', kaynak: 'Elektrik', tuketim: 12000, maliyet: 36000, durum: 'Normal' },
    { tesis: 'Genel Merkez', kaynak: 'Doğalgaz', tuketim: 8500, maliyet: 42500, durum: 'Yüksek' },
    { tesis: 'Boyahane', kaynak: 'Elektrik', tuketim: 28000, maliyet: 84000, durum: 'Kritik' },
    { tesis: 'Çatı Panelleri', kaynak: 'Güneş', tuketim: 18000, maliyet: 0, durum: 'Normal' }];
}
