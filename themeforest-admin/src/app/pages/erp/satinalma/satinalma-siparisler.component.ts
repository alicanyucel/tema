import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-satinalma-siparisler', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Satın Alma Siparişleri" subtitle="Tedarikçilere verilen satın alma siparişleri" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class SatinalmaSiparislerComponent {
  cols: ErpColumn[] = [
    { key: 'siparisNo', label: 'Sipariş No' },
    { key: 'tedarikci', label: 'Tedarikçi' },
    { key: 'tutar', label: 'Tutar', type: 'currency' },
    { key: 'siparisTarihi', label: 'Sipariş Tarihi' },
    { key: 'teslimatTarihi', label: 'Tahmini Teslimat' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'siparisNo', label: 'Sipariş No' },
    { key: 'tedarikci', label: 'Tedarikçi' },
    { key: 'tutar', label: 'Tutar', type: 'number' },
    { key: 'siparisTarihi', label: 'Sipariş Tarihi' },
    { key: 'teslimatTarihi', label: 'Tahmini Teslimat' },
    { key: 'notlar', label: 'Notlar', type: 'textarea' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Beklemede', 'Onaylandi', 'Kargoda', 'Teslim Edildi', 'İptal'] },
  ];
  data = [
    { siparisNo: 'PO-2024-001', tedarikci: 'TechParts Ltd', tutar: 45000, siparisTarihi: '08.04.2024', teslimatTarihi: '25.04.2024', durum: 'Kargoda' },
    { siparisNo: 'PO-2024-002', tedarikci: 'Global Supply Co', tutar: 128000, siparisTarihi: '10.04.2024', teslimatTarihi: '30.04.2024', durum: 'Onaylandi' },
    { siparisNo: 'PO-2024-003', tedarikci: 'Delta Lojistik', tutar: 22000, siparisTarihi: '12.04.2024', teslimatTarihi: '22.04.2024', durum: 'Teslim Edildi' },
    { siparisNo: 'PO-2024-004', tedarikci: 'Mega Components', tutar: 67000, siparisTarihi: '14.04.2024', teslimatTarihi: '05.05.2024', durum: 'Beklemede' },
  ];
}
