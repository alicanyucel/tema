import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-lojistik-optimizasyon', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Lojistik Optimizasyonu" subtitle="Rota, taşıma ve dağıtım optimizasyonu" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class LojistikOptimizasyonComponent {
  cols: ErpColumn[] = [
    { key: 'rotaNo', label: 'Rota No' },
    { key: 'kaynak', label: 'Kaynak' },
    { key: 'hedef', label: 'Hedef' },
    { key: 'maliyet', label: 'Maliyet', type: 'currency' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'rotaNo', label: 'Rota No' },
    { key: 'kaynak', label: 'Kaynak' },
    { key: 'hedef', label: 'Hedef' },
    { key: 'maliyet', label: 'Maliyet', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Optimize Edildi', 'Revize Gerekli'] },
  ];
  data = [
    { rotaNo: 'RTA-001', kaynak: 'İstanbul Depo', hedef: 'Ankara', maliyet: 3500, durum: 'Optimize Edildi' },
    { rotaNo: 'RTA-002', kaynak: 'İzmir Fabrika', hedef: 'İstanbul', maliyet: 2800, durum: 'Aktif' },
    { rotaNo: 'RTA-003', kaynak: 'Ankara Depo', hedef: 'Bursa', maliyet: 1900, durum: 'Revize Gerekli' },
    { rotaNo: 'RTA-004', kaynak: 'İstanbul Depo', hedef: 'İzmir', maliyet: 3100, durum: 'Optimize Edildi' },
    { rotaNo: 'RTA-005', kaynak: 'Bursa Fabrika', hedef: 'Ankara', maliyet: 2200, durum: 'Aktif' },
  ];
}
