import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-duygu-analizi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Duygu Analizi" subtitle="Müşteri geri bildirim duygu ve his analizi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class DuyguAnaliziComponent {
  cols: ErpColumn[] = [
    { key: 'kaynak', label: 'Kaynak' }, { key: 'duygu', label: 'Baskın Duygu' },
    { key: 'olumlu', label: 'Olumlu %' }, { key: 'olumsuz', label: 'Olumsuz %' }, { key: 'durum', label: 'Trend', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'kaynak', label: 'Geri Bildirim Kaynağı', type: 'select', options: ['Anket', 'E-posta', 'Sosyal Medya', 'Call Center', 'Canlı Destek', 'App Store Yorumları'] },
    { key: 'duygu', label: 'Baskın Duygu', type: 'select', options: ['Memnun', 'Nötr', 'Hayal Kırıklığı', 'Öfkeli', 'Heyecanlı'] },
    { key: 'olumlu', label: 'Olumlu Oran %', type: 'number' }, { key: 'olumsuz', label: 'Olumsuz Oran %', type: 'number' },
    { key: 'durum', label: 'Trend', type: 'select', options: ['İyileşiyor', 'Sabit', 'Kötüleşiyor'] }];
  data = [
    { kaynak: 'Anket', duygu: 'Memnun', olumlu: 78, olumsuz: 12, durum: 'İyileşiyor' },
    { kaynak: 'Sosyal Medya', duygu: 'Nötr', olumlu: 62, olumsuz: 25, durum: 'Sabit' },
    { kaynak: 'Call Center', duygu: 'Hayal Kırıklığı', olumlu: 45, olumsuz: 42, durum: 'Kötüleşiyor' },
    { kaynak: 'App Store Yorumları', duygu: 'Memnun', olumlu: 82, olumsuz: 8, durum: 'İyileşiyor' },
    { kaynak: 'E-posta', duygu: 'Nötr', olumlu: 55, olumsuz: 18, durum: 'Sabit' }];
}
