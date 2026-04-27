import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-envanter-takibi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Envanter Takibi" subtitle="Stok seviyeleri ve ürün envanteri" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class EnvanterTakibiComponent {
  cols: ErpColumn[] = [
    { key: 'sku', label: 'SKU' },
    { key: 'urunAdi', label: 'Ürün Adı' },
    { key: 'kategori', label: 'Kategori' },
    { key: 'stok', label: 'Stok Adedi' },
    { key: 'minStok', label: 'Min. Stok' },
    { key: 'birimFiyat', label: 'Birim Fiyat', type: 'currency' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'sku', label: 'SKU' },
    { key: 'urunAdi', label: 'Ürün Adı' },
    { key: 'kategori', label: 'Kategori', type: 'select', options: ['Elektronik', 'Makine', 'Hammadde', 'Yazılım', 'Sarf Malzeme'] },
    { key: 'stok', label: 'Stok Adedi', type: 'number' },
    { key: 'minStok', label: 'Min. Stok', type: 'number' },
    { key: 'birimFiyat', label: 'Birim Fiyat', type: 'number' },
    { key: 'depo', label: 'Depo Konumu' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Az Stok', 'Pasif'] },
  ];
  data = [
    { sku: 'PRD-1002', urunAdi: 'Akıllı Barkod Okuyucu', kategori: 'Elektronik', stok: 164, minStok: 20, birimFiyat: 129.90, durum: 'Aktif' },
    { sku: 'PRD-1028', urunAdi: 'Endüstriyel Etiket Yazıcı', kategori: 'Elektronik', stok: 12, minStok: 15, birimFiyat: 349.50, durum: 'Az Stok' },
    { sku: 'PRD-1091', urunAdi: 'Kasa Entegrasyon Modülü', kategori: 'Yazılım', stok: 0, minStok: 5, birimFiyat: 79.00, durum: 'Pasif' },
    { sku: 'PRD-1110', urunAdi: 'Satış Analiz Lisansı', kategori: 'Yazılım', stok: 340, minStok: 50, birimFiyat: 49.99, durum: 'Aktif' },
    { sku: 'PRD-1200', urunAdi: 'Konveyör Bant Seti', kategori: 'Makine', stok: 8, minStok: 10, birimFiyat: 4500.00, durum: 'Az Stok' },
  ];
}
