import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-raporlama-bi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="BI Raporlama" subtitle="İş zekâsı raporları ve gösterge panelleri" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class RaporlamaBiComponent {
  cols: ErpColumn[] = [
    { key: 'raporAdi', label: 'Rapor Adı' }, { key: 'kategori', label: 'Kategori' },
    { key: 'sahip', label: 'Sahip' }, { key: 'guncellenme', label: 'Güncellenme' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'raporAdi', label: 'Rapor Adı' }, { key: 'kategori', label: 'Kategori', type: 'select', options: ['Satış', 'Finans', 'Üretim', 'İK'] },
    { key: 'sahip', label: 'Sahip' }, { key: 'guncellenme', label: 'Güncellenme Tarihi' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Taslak', 'Arşivlendi'] }];
  data = [
    { raporAdi: 'Aylık Satış Özeti', kategori: 'Satış', sahip: 'Ali Can', guncellenme: '2024-04-27', durum: 'Aktif' },
    { raporAdi: 'Kâr/Zarar Tablosu', kategori: 'Finans', sahip: 'Finans Ekibi', guncellenme: '2024-04-25', durum: 'Aktif' },
    { raporAdi: 'Üretim Verimlilik Raporu', kategori: 'Üretim', sahip: 'Mert Demir', guncellenme: '2024-04-20', durum: 'Aktif' },
    { raporAdi: 'İK Devir Analizi', kategori: 'İK', sahip: 'Aylin Kara', guncellenme: '2024-04-15', durum: 'Taslak' },
    { raporAdi: 'Müşteri Yaşam Boyu Değeri', kategori: 'Satış', sahip: 'CRM Ekibi', guncellenme: '2024-04-10', durum: 'Aktif' }];
}
