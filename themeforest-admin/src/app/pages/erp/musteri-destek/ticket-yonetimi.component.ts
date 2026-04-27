import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-ticket-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Ticket Yönetimi" subtitle="Destek talepleri ve çözüm süreçleri" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class TicketYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'ticketNo', label: 'Ticket No' },
    { key: 'musteri', label: 'Müşteri' },
    { key: 'konu', label: 'Konu' },
    { key: 'oncelik', label: 'Öncelik', type: 'badge' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'ticketNo', label: 'Ticket No' },
    { key: 'musteri', label: 'Müşteri' },
    { key: 'konu', label: 'Konu', type: 'textarea' },
    { key: 'oncelik', label: 'Öncelik', type: 'select', options: ['Düşük', 'Orta', 'Yüksek'] },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Açık', 'İşlemde', 'Beklemede', 'Kapalı'] },
  ];
  data = [
    { ticketNo: 'TKT-001', musteri: 'Nova Market', konu: 'Fatura uyuşmazlığı', oncelik: 'Yüksek', durum: 'Açık' },
    { ticketNo: 'TKT-002', musteri: 'Alfa Holding', konu: 'Şifre sıfırlama', oncelik: 'Düşük', durum: 'Kapalı' },
    { ticketNo: 'TKT-003', musteri: 'Beta Mağaza', konu: 'Ürün iade talebi', oncelik: 'Orta', durum: 'İşlemde' },
    { ticketNo: 'TKT-004', musteri: 'Gama Lojistik', konu: 'Raporlama hatası', oncelik: 'Orta', durum: 'Beklemede' },
    { ticketNo: 'TKT-005', musteri: 'Delta Perakende', konu: 'Entegrasyon sorunu', oncelik: 'Yüksek', durum: 'İşlemde' },
  ];
}
