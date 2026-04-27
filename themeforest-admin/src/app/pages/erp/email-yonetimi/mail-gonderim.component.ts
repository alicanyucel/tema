import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({
  selector: 'app-mail-gonderim',
  standalone: true,
  imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Mail Gonderim" subtitle="Toplu gonderim, taslak ve silme operasyonlari" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class MailGonderimComponent {
  cols: ErpColumn[] = [
    { key: 'alici', label: 'Alici' },
    { key: 'konu', label: 'Konu' },
    { key: 'kanal', label: 'Kanal', type: 'badge' },
    { key: 'gonderimZamani', label: 'Gonderim Zamani' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];

  fields: ErpField[] = [
    { key: 'alici', label: 'Alici (tekil veya grup)' },
    { key: 'konu', label: 'Mail Konusu' },
    { key: 'kanal', label: 'Kanal', type: 'select', options: ['Tekli', 'Toplu', 'Otomatik Kural'] },
    { key: 'gonderimZamani', label: 'Planlanan Zaman (YYYY-MM-DD HH:mm)' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Taslak', 'Planlandi', 'Gonderildi', 'Basarisiz', 'Silindi'] },
  ];

  data = [
    { alici: 'satis-ekibi@atlas.com', konu: 'Haftalik satis raporu', kanal: 'Toplu', gonderimZamani: '2026-04-28 08:00', durum: 'Planlandi' },
    { alici: 'musteri@ornek.com', konu: 'Siparisiniz yola cikti', kanal: 'Otomatik Kural', gonderimZamani: '2026-04-27 10:15', durum: 'Gonderildi' },
    { alici: 'finans@northtrade.io', konu: 'Odeme hatirlatmasi', kanal: 'Tekli', gonderimZamani: '2026-04-27 11:40', durum: 'Taslak' },
    { alici: 'kampanya-listesi-2', konu: 'Bahar kampanyasi', kanal: 'Toplu', gonderimZamani: '2026-04-26 14:00', durum: 'Silindi' },
  ];
}
