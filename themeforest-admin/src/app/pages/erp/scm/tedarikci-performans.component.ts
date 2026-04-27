import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-tedarikci-performans', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Tedarikçi Performans Analizi" subtitle="Tedarikçi skorlama ve değerlendirme raporları" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class TedarikciPerformansComponent {
  cols: ErpColumn[] = [
    { key: 'tedarikci', label: 'Tedarikçi' },
    { key: 'puan', label: 'Puan' },
    { key: 'zamanindaTeslim', label: 'Zamanında Teslim %' },
    { key: 'kalitePuani', label: 'Kalite Puanı' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'tedarikci', label: 'Tedarikçi' },
    { key: 'puan', label: 'Toplam Puan', type: 'number' },
    { key: 'zamanindaTeslim', label: 'Zamanında Teslim %', type: 'number' },
    { key: 'kalitePuani', label: 'Kalite Puanı', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Tercihli', 'Onaylı', 'İncelemede', 'Kara Liste'] },
  ];
  data = [
    { tedarikci: 'Metaş A.Ş.', puan: 92, zamanindaTeslim: 97, kalitePuani: 95, durum: 'Tercihli' },
    { tedarikci: 'Teknopar Ltd.', puan: 85, zamanindaTeslim: 88, kalitePuani: 90, durum: 'Onaylı' },
    { tedarikci: 'Global Malzeme', puan: 71, zamanindaTeslim: 74, kalitePuani: 80, durum: 'İncelemede' },
    { tedarikci: 'Hızlı Sevk A.Ş.', puan: 88, zamanindaTeslim: 94, kalitePuani: 86, durum: 'Onaylı' },
    { tedarikci: 'Ekonomik Tedarik', puan: 45, zamanindaTeslim: 55, kalitePuani: 60, durum: 'Kara Liste' },
  ];
}
