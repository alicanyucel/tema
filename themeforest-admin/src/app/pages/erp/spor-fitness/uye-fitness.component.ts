import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-uye-fitness', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Üyelik ve Fitness Yönetimi" subtitle="Spor tesisi üye ve program yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class UyeFitnessComponent {
  cols: ErpColumn[] = [
    { key: 'uye', label: 'Üye' }, { key: 'paket', label: 'Paket' },
    { key: 'kayitTarihi', label: 'Kayıt' }, { key: 'yenileme', label: 'Yenileme Tarihi' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'uye', label: 'Üye Adı Soyadı' }, { key: 'paket', label: 'Üyelik Paketi', type: 'select', options: ['Temel', 'Standart', 'Premium', 'VIP', 'Kurumsal'] },
    { key: 'kayitTarihi', label: 'Kayıt Tarihi' }, { key: 'yenileme', label: 'Yenileme Tarihi' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Donduruldu', 'Süresi Doldu', 'İptal'] }];
  data = [
    { uye: 'Ayşe Demir', paket: 'Premium', kayitTarihi: '2024-01-15', yenileme: '2025-01-15', durum: 'Aktif' },
    { uye: 'Mehmet Yılmaz', paket: 'Standart', kayitTarihi: '2024-03-01', yenileme: '2025-03-01', durum: 'Aktif' },
    { uye: 'Fatma Kaya', paket: 'VIP', kayitTarihi: '2023-09-10', yenileme: '2024-09-10', durum: 'Aktif' },
    { uye: 'Ali Çelik', paket: 'Temel', kayitTarihi: '2023-12-01', yenileme: '2024-06-01', durum: 'Donduruldu' },
    { uye: 'Zeynep Arslan', paket: 'Standart', kayitTarihi: '2022-05-20', yenileme: '2023-05-20', durum: 'Süresi Doldu' }];
}
