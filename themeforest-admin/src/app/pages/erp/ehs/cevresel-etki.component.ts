import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-cevresel-etki', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Çevresel Etki Takibi" subtitle="Emisyon, atık ve çevre metrikleri" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class CevreselEtkiComponent {
  cols: ErpColumn[] = [
    { key: 'metrik', label: 'Metrik' },
    { key: 'deger', label: 'Değer' },
    { key: 'birim', label: 'Birim' },
    { key: 'donem', label: 'Dönem' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'metrik', label: 'Metrik' },
    { key: 'deger', label: 'Değer', type: 'number' },
    { key: 'birim', label: 'Birim', type: 'select', options: ['ton CO₂', 'kWh', 'm³', 'kg'] },
    { key: 'donem', label: 'Dönem' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Hedef Altı', 'Hedefte', 'Hedef Üstü'] },
  ];
  data = [
    { metrik: 'CO₂ Emisyonu', deger: 1240, birim: 'ton CO₂', donem: 'Q1 2024', durum: 'Hedefte' },
    { metrik: 'Enerji Tüketimi', deger: 85000, birim: 'kWh', donem: 'Q1 2024', durum: 'Hedef Altı' },
    { metrik: 'Su Tüketimi', deger: 3200, birim: 'm³', donem: 'Q1 2024', durum: 'Hedefte' },
    { metrik: 'Endüstriyel Atık', deger: 420, birim: 'kg', donem: 'Q1 2024', durum: 'Hedef Üstü' },
    { metrik: 'Geri Dönüştürülen Atık', deger: 310, birim: 'kg', donem: 'Q1 2024', durum: 'Hedefte' },
  ];
}
