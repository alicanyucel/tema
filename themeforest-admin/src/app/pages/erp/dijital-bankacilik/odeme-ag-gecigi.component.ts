import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-odeme-ag-gecigi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Ödeme Ağ Geçidi" subtitle="Dijital ödeme entegrasyon ve işlem yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class OdemeAgGecigiComponent {
  cols: ErpColumn[] = [
    { key: 'tur', label: 'Ödeme Türü' }, { key: 'islem', label: 'Aylık İşlem' },
    { key: 'ciro', label: 'Aylık Ciro', type: 'currency' }, { key: 'basari', label: 'Başarı %' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'tur', label: 'Ödeme Türü', type: 'select', options: ['Kredi Kartı', 'Havale/EFT', 'Kripto', 'BKM Express', 'Apple Pay', 'Google Pay'] },
    { key: 'islem', label: 'Aylık İşlem Sayısı', type: 'number' }, { key: 'ciro', label: 'Aylık Ciro (₺)', type: 'number' },
    { key: 'basari', label: 'İşlem Başarı %', type: 'number' }, { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Pasif', 'Test', 'Bakım'] }];
  data = [
    { tur: 'Kredi Kartı', islem: 18500, ciro: 2450000, basari: 98.7, durum: 'Aktif' },
    { tur: 'Havale/EFT', islem: 4200, ciro: 850000, basari: 99.9, durum: 'Aktif' },
    { tur: 'BKM Express', islem: 3100, ciro: 420000, basari: 97.2, durum: 'Aktif' },
    { tur: 'Kripto', islem: 85, ciro: 125000, basari: 95.3, durum: 'Test' },
    { tur: 'Apple Pay', islem: 2450, ciro: 380000, basari: 99.1, durum: 'Aktif' }];
}
