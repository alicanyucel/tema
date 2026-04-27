import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({
  selector: 'app-gelen-kutusu',
  standalone: true,
  imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Gelen Kutusu" subtitle="Gelen e-posta mesajlari ve operasyon kayitlari" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class GelenKutusuComponent {
  cols: ErpColumn[] = [
    { key: 'kimden', label: 'Kimden' },
    { key: 'konu', label: 'Konu' },
    { key: 'etiket', label: 'Etiket', type: 'badge' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];

  fields: ErpField[] = [
    { key: 'kimden', label: 'Gonderen' },
    { key: 'konu', label: 'Konu' },
    { key: 'etiket', label: 'Etiket', type: 'select', options: ['Siparis', 'Destek', 'Finans', 'IK', 'Sistem', 'Diger'] },
    { key: 'tarih', label: 'Tarih (YYYY-MM-DD HH:mm)' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Okunmadi', 'Okundu', 'Yildizli', 'Arsivlendi'] },
  ];

  data = [
    { kimden: 'tedarik@nova.com', konu: 'Nisan ayi sevkiyat teyidi', etiket: 'Siparis', tarih: '2026-04-27 09:12', durum: 'Okunmadi' },
    { kimden: 'destek@atlaserp.com', konu: 'Sistem guncelleme notlari', etiket: 'Sistem', tarih: '2026-04-26 17:45', durum: 'Okundu' },
    { kimden: 'finance@northtrade.io', konu: 'Mutabakat dokumani ektedir', etiket: 'Finans', tarih: '2026-04-25 13:20', durum: 'Yildizli' },
    { kimden: 'ik@partnerhr.com', konu: 'Yeni aday havuzu', etiket: 'IK', tarih: '2026-04-24 08:50', durum: 'Okundu' },
  ];
}
