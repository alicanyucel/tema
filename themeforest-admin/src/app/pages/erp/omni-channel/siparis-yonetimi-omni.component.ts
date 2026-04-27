import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-siparis-yonetimi-omni', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Omni-Channel Sipariş Yönetimi" subtitle="Çok kanallı sipariş entegrasyon ve yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class SiparisYonetimiOmniComponent {
  cols: ErpColumn[] = [
    { key: 'siparis', label: 'Sipariş No' }, { key: 'kanal', label: 'Kanal' },
    { key: 'tutar', label: 'Tutar', type: 'currency' }, { key: 'teslimat', label: 'Teslimat' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'siparis', label: 'Sipariş No' }, { key: 'kanal', label: 'Satış Kanalı', type: 'select', options: ['Web Mağaza', 'Mobil Uygulama', 'Fiziksel Mağaza', 'Call Center', 'Marketplace', 'WhatsApp'] },
    { key: 'tutar', label: 'Sipariş Tutarı (₺)', type: 'number' }, { key: 'teslimat', label: 'Teslimat Tipi', type: 'select', options: ['Kargo', 'Mağazadan Al', 'Same Day', 'Click & Collect'] },
    { key: 'durum', label: 'Sipariş Durumu', type: 'select', options: ['Hazırlanıyor', 'Kargoda', 'Teslim Edildi', 'İptal', 'İade'] }];
  data = [
    { siparis: 'OMN-2024-001', kanal: 'Mobil Uygulama', tutar: 1250, teslimat: 'Kargo', durum: 'Kargoda' },
    { siparis: 'OMN-2024-002', kanal: 'Web Mağaza', tutar: 4800, teslimat: 'Same Day', durum: 'Hazırlanıyor' },
    { siparis: 'OMN-2024-003', kanal: 'Fiziksel Mağaza', tutar: 650, teslimat: 'Mağazadan Al', durum: 'Teslim Edildi' },
    { siparis: 'OMN-2024-004', kanal: 'WhatsApp', tutar: 2200, teslimat: 'Kargo', durum: 'Hazırlanıyor' },
    { siparis: 'OMN-2024-005', kanal: 'Marketplace', tutar: 380, teslimat: 'Kargo', durum: 'İptal' }];
}
