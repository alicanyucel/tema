import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-tedarikci-portal', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Tedarikçi Portalı" subtitle="Tedarikçi erişim ve işbirliği yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class TedarikciPortalComponent {
  cols: ErpColumn[] = [
    { key: 'tedarikci', label: 'Tedarikçi' }, { key: 'yetkili', label: 'Yetkili' },
    { key: 'aktifSiparis', label: 'Aktif Sipariş' }, { key: 'sonGiris', label: 'Son Giriş' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'tedarikci', label: 'Tedarikçi Adı' }, { key: 'yetkili', label: 'Yetkili Kişi' },
    { key: 'aktifSiparis', label: 'Aktif Sipariş', type: 'number' }, { key: 'sonGiris', label: 'Son Giriş' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Davet Gönderildi', 'Pasif'] }];
  data = [
    { tedarikci: 'TechSupply A.Ş.', yetkili: 'Hakan Kaya', aktifSiparis: 5, sonGiris: '2024-04-27 10:00', durum: 'Aktif' },
    { tedarikci: 'MateryalPro Ltd.', yetkili: 'Zeynep Arslan', aktifSiparis: 3, sonGiris: '2024-04-26 15:30', durum: 'Aktif' },
    { tedarikci: 'LojistikPlus Co.', yetkili: 'Emre Şahin', aktifSiparis: 8, sonGiris: '2024-04-25 09:00', durum: 'Aktif' },
    { tedarikci: 'Elektronik A.Ş.', yetkili: 'Cansu Demir', aktifSiparis: 0, sonGiris: '-', durum: 'Davet Gönderildi' },
    { tedarikci: 'Tekstil Ltd.', yetkili: 'Okan Yılmaz', aktifSiparis: 0, sonGiris: '2024-01-10', durum: 'Pasif' }];
}
