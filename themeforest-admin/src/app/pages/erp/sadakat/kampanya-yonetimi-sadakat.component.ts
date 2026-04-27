import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-kampanya-yonetimi-sadakat', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Kampanya Yönetimi" subtitle="Müşteri sadakat kampanyaları ve teklifler" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class KampanyaYonetimiSadakatComponent {
  cols: ErpColumn[] = [
    { key: 'kampanyaAdi', label: 'Kampanya Adı' }, { key: 'indirim', label: 'İndirim %' },
    { key: 'hedefKitle', label: 'Hedef Kitle' }, { key: 'bitis', label: 'Bitiş' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'kampanyaAdi', label: 'Kampanya Adı' }, { key: 'indirim', label: 'İndirim %', type: 'number' },
    { key: 'hedefKitle', label: 'Hedef Kitle', type: 'select', options: ['Tüm Müşteriler', 'Platin', 'Altın', 'Yeni Müşteri'] },
    { key: 'bitis', label: 'Bitiş Tarihi' }, { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Planlandı', 'Sona Erdi'] }];
  data = [
    { kampanyaAdi: 'Yaz Sezonu İndirimi', indirim: 20, hedefKitle: 'Tüm Müşteriler', bitis: '2024-08-31', durum: 'Planlandı' },
    { kampanyaAdi: 'Platin Özel Teklif', indirim: 35, hedefKitle: 'Platin', bitis: '2024-05-31', durum: 'Aktif' },
    { kampanyaAdi: 'Hoş Geldin Bonusu', indirim: 15, hedefKitle: 'Yeni Müşteri', bitis: '2024-12-31', durum: 'Aktif' },
    { kampanyaAdi: 'Altın Üye Avantajı', indirim: 25, hedefKitle: 'Altın', bitis: '2024-06-30', durum: 'Aktif' },
    { kampanyaAdi: 'Kış Kampanyası', indirim: 30, hedefKitle: 'Tüm Müşteriler', bitis: '2024-02-28', durum: 'Sona Erdi' }];
}
