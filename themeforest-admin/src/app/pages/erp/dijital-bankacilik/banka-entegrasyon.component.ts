import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-banka-entegrasyon', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Dijital Bankacılık Entegrasyonu" subtitle="Banka hesapları ve otomatik mutabakat" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class BankaEntegrasyonComponent {
  cols: ErpColumn[] = [
    { key: 'banka', label: 'Banka' }, { key: 'hesapNo', label: 'Hesap No' },
    { key: 'bakiye', label: 'Bakiye', type: 'currency' }, { key: 'sonSenkron', label: 'Son Senkron' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'banka', label: 'Banka Adı', type: 'select', options: ['Garanti BBVA', 'İş Bankası', 'Yapı Kredi', 'Ziraat', 'Akbank'] },
    { key: 'hesapNo', label: 'IBAN/Hesap No' }, { key: 'bakiye', label: 'Bakiye', type: 'number' },
    { key: 'sonSenkron', label: 'Son Senkron Zamanı' }, { key: 'durum', label: 'Durum', type: 'select', options: ['Bağlı', 'Bağlantı Hatası', 'Güncelleniyor'] }];
  data = [
    { banka: 'Garanti BBVA', hesapNo: 'TR33 0006 2000 ...', bakiye: 4820500, sonSenkron: '2024-04-27 10:30', durum: 'Bağlı' },
    { banka: 'İş Bankası', hesapNo: 'TR42 0006 4000 ...', bakiye: 2150800, sonSenkron: '2024-04-27 10:30', durum: 'Bağlı' },
    { banka: 'Yapı Kredi', hesapNo: 'TR25 0006 7010 ...', bakiye: 980200, sonSenkron: '2024-04-27 10:30', durum: 'Bağlı' },
    { banka: 'Ziraat', hesapNo: 'TR56 0001 0025 ...', bakiye: 3400000, sonSenkron: '2024-04-27 10:28', durum: 'Güncelleniyor' },
    { banka: 'Akbank', hesapNo: 'TR04 0004 6001 ...', bakiye: 650000, sonSenkron: '2024-04-26 18:00', durum: 'Bağlantı Hatası' }];
}
