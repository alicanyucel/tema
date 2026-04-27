import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-talep-tahmini', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Talep Tahmini" subtitle="Ürün ve malzeme talep tahminleri" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class TalepTahminiComponent {
  cols: ErpColumn[] = [
    { key: 'urun', label: 'Ürün/Malzeme' },
    { key: 'mevcutStok', label: 'Mevcut Stok' },
    { key: 'tahminiTalep', label: 'Tahmini Talep' },
    { key: 'donem', label: 'Dönem' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'urun', label: 'Ürün/Malzeme' },
    { key: 'mevcutStok', label: 'Mevcut Stok', type: 'number' },
    { key: 'tahminiTalep', label: 'Tahmini Talep', type: 'number' },
    { key: 'donem', label: 'Dönem' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Yeterli', 'Kritik', 'Yetersiz'] },
  ];
  data = [
    { urun: 'Hammadde A', mevcutStok: 5000, tahminiTalep: 4200, donem: 'Q2 2024', durum: 'Yeterli' },
    { urun: 'Komponent B-12', mevcutStok: 320, tahminiTalep: 800, donem: 'Q2 2024', durum: 'Yetersiz' },
    { urun: 'Ambalaj Malzemesi', mevcutStok: 12000, tahminiTalep: 9500, donem: 'Q2 2024', durum: 'Yeterli' },
    { urun: 'Yarı Mamul C', mevcutStok: 150, tahminiTalep: 200, donem: 'Q2 2024', durum: 'Kritik' },
    { urun: 'Yedek Parça D', mevcutStok: 2000, tahminiTalep: 1800, donem: 'Q2 2024', durum: 'Yeterli' },
  ];
}
