import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-online-siparis', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Online Sipariş" subtitle="E-ticaret kanalından gelen siparişler" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class OnlineSiparisComponent {
  cols: ErpColumn[] = [
    { key: 'siparisNo', label: 'Sipariş No' },
    { key: 'musteri', label: 'Müşteri' },
    { key: 'kanal', label: 'Kanal' },
    { key: 'tutar', label: 'Tutar', type: 'currency' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'siparisNo', label: 'Sipariş No' },
    { key: 'musteri', label: 'Müşteri' },
    { key: 'kanal', label: 'Kanal', type: 'select', options: ['Web Sitesi', 'Mobil Uygulama', 'B2B Portal', 'Pazar Yeri'] },
    { key: 'tutar', label: 'Tutar', type: 'number' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'teslimatAdresi', label: 'Teslimat Adresi', type: 'textarea' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Beklemede', 'Hazirlaniyor', 'Kargoda', 'Teslim Edildi', 'İptal'] },
  ];
  data = [
    { siparisNo: 'ONL-001', musteri: 'Ahmet Kaya', kanal: 'Web Sitesi', tutar: 1250, tarih: '23.04.2024', durum: 'Kargoda' },
    { siparisNo: 'ONL-002', musteri: 'Zeynep Yılmaz', kanal: 'Mobil Uygulama', tutar: 3400, tarih: '23.04.2024', durum: 'Hazirlaniyor' },
    { siparisNo: 'ONL-003', musteri: 'Nova Market', kanal: 'B2B Portal', tutar: 28500, tarih: '22.04.2024', durum: 'Beklemede' },
    { siparisNo: 'ONL-004', musteri: 'Mehmet Öz', kanal: 'Pazar Yeri', tutar: 890, tarih: '22.04.2024', durum: 'Teslim Edildi' },
  ];
}
