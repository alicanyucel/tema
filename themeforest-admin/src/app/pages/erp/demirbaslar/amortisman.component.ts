import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-amortisman', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Amortisman Takibi" subtitle="Demirbaş amortisman hesaplama ve izleme" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class AmortismanComponent {
  cols: ErpColumn[] = [
    { key: 'kod', label: 'Demirbaş Kodu' },
    { key: 'ad', label: 'Adı' },
    { key: 'alisDefteri', label: 'Alış Değeri', type: 'currency' },
    { key: 'oran', label: 'Oran (%)' },
    { key: 'birikmisDeger', label: 'Birikmiş Amortisman', type: 'currency' },
    { key: 'netDeger', label: 'Net Defter Değeri', type: 'currency' },
    { key: 'yil', label: 'Kalan Ömür (Yıl)' },
  ];
  fields: ErpField[] = [
    { key: 'kod', label: 'Demirbaş Kodu' },
    { key: 'ad', label: 'Adı' },
    { key: 'alisDefteri', label: 'Alış Değeri (₺)', type: 'number' },
    { key: 'oran', label: 'Amortisman Oranı (%)', type: 'number' },
    { key: 'birikmisDeger', label: 'Birikmiş Amortisman (₺)', type: 'number' },
    { key: 'netDeger', label: 'Net Defter Değeri (₺)', type: 'number' },
    { key: 'yil', label: 'Kalan Ömür (Yıl)', type: 'number' },
  ];
  data = [
    { kod: 'DMB-001', ad: 'Traktör John Deere 6M', alisDefteri: 1850000, oran: 15, birikmisDeger: 555000, netDeger: 1295000, yil: 4 },
    { kod: 'DMB-002', ad: 'Sulama Pompası', alisDefteri: 48000, oran: 20, birikmisDeger: 28800, netDeger: 19200, yil: 2 },
    { kod: 'DMB-003', ad: 'Depo Binası', alisDefteri: 2200000, oran: 2, birikmisDeger: 220000, netDeger: 1980000, yil: 40 },
    { kod: 'DMB-004', ad: 'Kombine Harman Makinesi', alisDefteri: 3200000, oran: 15, birikmisDeger: 240000, netDeger: 2960000, yil: 5 },
    { kod: 'DMB-006', ad: 'Ofis Bilgisayar Seti', alisDefteri: 45000, oran: 25, birikmisDeger: 22500, netDeger: 22500, yil: 2 },
  ];
}
