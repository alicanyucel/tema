import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-teklif-siparis', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Teklif ve Sipariş Yönetimi" subtitle="Satış teklifleri ve sipariş takibi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class TeklifSiparisComponent {
  cols: ErpColumn[] = [
    { key: 'no', label: 'Teklif/Sipariş No' },
    { key: 'musteri', label: 'Müşteri' },
    { key: 'tutar', label: 'Tutar', type: 'currency' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'tip', label: 'Tip' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'no', label: 'No' },
    { key: 'musteri', label: 'Müşteri' },
    { key: 'tutar', label: 'Tutar', type: 'number' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'tip', label: 'Tip', type: 'select', options: ['Teklif', 'Sipariş', 'Revizyon'] },
    { key: 'aciklama', label: 'Açıklama', type: 'textarea' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Beklemede', 'Aktif', 'Tamamlandi', 'İptal'] },
  ];
  data = [
    { no: 'TKL-2024-001', musteri: 'Nova Market', tutar: 45000, tarih: '10.04.2024', tip: 'Teklif', durum: 'Beklemede' },
    { no: 'SPR-2024-082', musteri: 'Atlas Group', tutar: 128000, tarih: '12.04.2024', tip: 'Sipariş', durum: 'Aktif' },
    { no: 'TKL-2024-002', musteri: 'Bosphorus Corp', tutar: 73500, tarih: '14.04.2024', tip: 'Teklif', durum: 'Tamamlandi' },
    { no: 'SPR-2024-083', musteri: 'Anadolu Servis', tutar: 22000, tarih: '15.04.2024', tip: 'Sipariş', durum: 'Aktif' },
  ];
}
