import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-musteri-skorlama', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Müşteri Skorlama" subtitle="YZ tabanlı müşteri kalite ve satış potansiyeli skoru" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class MusteriSkorlamaComponent {
  cols: ErpColumn[] = [
    { key: 'musteri', label: 'Müşteri' }, { key: 'skor', label: 'YZ Skor' },
    { key: 'segment', label: 'Segment' }, { key: 'potansiyel', label: 'Potansiyel (₺)', type: 'currency' }, { key: 'durum', label: 'Öncelik', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'musteri', label: 'Müşteri Adı' }, { key: 'skor', label: 'YZ Müşteri Skoru (0-100)', type: 'number' },
    { key: 'segment', label: 'Müşteri Segmenti', type: 'select', options: ['Platinum', 'Gold', 'Silver', 'Bronze', 'Yeni'] },
    { key: 'potansiyel', label: '12 Ay Potansiyeli (₺)', type: 'number' }, { key: 'durum', label: 'Satış Önceliği', type: 'select', options: ['Yüksek', 'Orta', 'Düşük'] }];
  data = [
    { musteri: 'ABC Holding', skor: 95, segment: 'Platinum', potansiyel: 2500000, durum: 'Yüksek' },
    { musteri: 'XYZ Sanayi A.Ş.', skor: 82, segment: 'Gold', potansiyel: 850000, durum: 'Yüksek' },
    { musteri: 'Beta Pazarlama', skor: 71, segment: 'Silver', potansiyel: 320000, durum: 'Orta' },
    { musteri: 'Küçük İşletme Ltd.', skor: 45, segment: 'Bronze', potansiyel: 65000, durum: 'Düşük' },
    { musteri: 'Gamma Tech (Yeni)', skor: 62, segment: 'Yeni', potansiyel: 180000, durum: 'Orta' }];
}
