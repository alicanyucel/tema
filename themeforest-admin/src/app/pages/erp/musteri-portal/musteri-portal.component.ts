import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-musteri-portal', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Müşteri Portalı" subtitle="Self-servis müşteri erişim ve işlem yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class MusteriPortalComponent {
  cols: ErpColumn[] = [
    { key: 'musteri', label: 'Müşteri' }, { key: 'kayitTarihi', label: 'Kayıt Tarihi' },
    { key: 'sonGiris', label: 'Son Giriş' }, { key: 'islemSayisi', label: 'İşlem Sayısı' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'musteri', label: 'Müşteri Adı' }, { key: 'email', label: 'E-posta' },
    { key: 'kayitTarihi', label: 'Kayıt Tarihi' }, { key: 'islemSayisi', label: 'İşlem Sayısı', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Pasif', 'Engellendi'] }];
  data = [
    { musteri: 'Nova Market', kayitTarihi: '2023-01-10', sonGiris: '2024-04-27 09:30', islemSayisi: 284, durum: 'Aktif' },
    { musteri: 'Alfa Holding', kayitTarihi: '2023-03-15', sonGiris: '2024-04-26 16:00', islemSayisi: 156, durum: 'Aktif' },
    { musteri: 'Beta Mağaza', kayitTarihi: '2023-06-20', sonGiris: '2024-04-25 11:20', islemSayisi: 98, durum: 'Aktif' },
    { musteri: 'Gama Lojistik', kayitTarihi: '2024-01-05', sonGiris: '2024-04-20 14:45', islemSayisi: 34, durum: 'Aktif' },
    { musteri: 'Delta Perakende', kayitTarihi: '2022-11-01', sonGiris: '2024-02-10 09:00', islemSayisi: 12, durum: 'Pasif' }];
}
