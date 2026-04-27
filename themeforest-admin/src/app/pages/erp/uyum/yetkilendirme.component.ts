import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-yetkilendirme', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Yetkilendirme" subtitle="Kullanıcı rolleri ve erişim yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class YetkilendirmeComponent {
  cols: ErpColumn[] = [
    { key: 'kullanici', label: 'Kullanıcı' },
    { key: 'rol', label: 'Rol' },
    { key: 'departman', label: 'Departman' },
    { key: 'sonGiris', label: 'Son Giriş' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'kullanici', label: 'Kullanıcı Adı' },
    { key: 'adSoyad', label: 'Ad Soyad' },
    { key: 'email', label: 'E-posta' },
    { key: 'rol', label: 'Rol', type: 'select', options: ['Admin', 'Yönetici', 'Kullanıcı', 'Salt Okuma'] },
    { key: 'departman', label: 'Departman', type: 'select', options: ['IT', 'Finans', 'Satış', 'İK', 'Üretim', 'Depo'] },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Pasif', 'Kilitli'] },
  ];
  data = [
    { kullanici: 'ece.yildirim', rol: 'Yönetici', departman: 'Satış', sonGiris: '27.04.2024 09:15', durum: 'Aktif' },
    { kullanici: 'mert.demir', rol: 'Admin', departman: 'IT', sonGiris: '27.04.2024 08:50', durum: 'Aktif' },
    { kullanici: 'aylin.kara', rol: 'Kullanıcı', departman: 'İK', sonGiris: '26.04.2024 17:30', durum: 'Aktif' },
    { kullanici: 'can.arslan', rol: 'Yönetici', departman: 'Finans', sonGiris: '27.04.2024 10:00', durum: 'Aktif' },
    { kullanici: 'eski.kullanici', rol: 'Salt Okuma', departman: 'Satış', sonGiris: '01.01.2024 11:00', durum: 'Pasif' },
  ];
}
