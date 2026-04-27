import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-mobil-erp-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Mobil ERP Yönetimi" subtitle="Mobil uygulama erişim ve cihaz yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class MobilErpYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'kullanici', label: 'Kullanıcı' }, { key: 'cihaz', label: 'Cihaz' },
    { key: 'platform', label: 'Platform' }, { key: 'sonGiris', label: 'Son Giriş' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'kullanici', label: 'Kullanıcı' }, { key: 'cihaz', label: 'Cihaz Adı' },
    { key: 'platform', label: 'Platform', type: 'select', options: ['iOS', 'Android', 'Web'] },
    { key: 'sonGiris', label: 'Son Giriş' }, { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Pasif', 'Engellendi'] }];
  data = [
    { kullanici: 'Ali Can', cihaz: 'iPhone 15', platform: 'iOS', sonGiris: '2024-04-27 09:15', durum: 'Aktif' },
    { kullanici: 'Mert Demir', cihaz: 'Samsung S24', platform: 'Android', sonGiris: '2024-04-27 08:45', durum: 'Aktif' },
    { kullanici: 'Aylin Kara', cihaz: 'iPad Pro', platform: 'iOS', sonGiris: '2024-04-26 17:30', durum: 'Aktif' },
    { kullanici: 'Selin Usta', cihaz: 'Pixel 8', platform: 'Android', sonGiris: '2024-04-25 11:20', durum: 'Aktif' },
    { kullanici: 'Eski Kullanıcı', cihaz: 'Android Tab', platform: 'Android', sonGiris: '2024-03-01 10:00', durum: 'Engellendi' }];
}
