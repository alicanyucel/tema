import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-yedek-parca', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Yedek Parça Yönetimi" subtitle="Servis yedek parça stok ve talep yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class YedekParcaComponent {
  cols: ErpColumn[] = [
    { key: 'parcaKodu', label: 'Parça Kodu' }, { key: 'aciklama', label: 'Açıklama' },
    { key: 'stok', label: 'Stok' }, { key: 'fiyat', label: 'Birim Fiyat', type: 'currency' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'parcaKodu', label: 'Parça Kodu' }, { key: 'aciklama', label: 'Açıklama' },
    { key: 'urun', label: 'Uyumlu Ürün' }, { key: 'stok', label: 'Stok Adedi', type: 'number' },
    { key: 'fiyat', label: 'Birim Fiyat (₺)', type: 'number' }, { key: 'durum', label: 'Stok Durumu', type: 'select', options: ['Yeterli', 'Düşük', 'Kritik', 'Tükendi'] }];
  data = [
    { parcaKodu: 'YP-A001', aciklama: 'Ana Kart A Serisi', stok: 45, fiyat: 1250, durum: 'Yeterli' },
    { parcaKodu: 'YP-B012', aciklama: 'Motor Dişlisi B', stok: 12, fiyat: 380, durum: 'Düşük' },
    { parcaKodu: 'YP-C034', aciklama: 'Fan Motoru', stok: 3, fiyat: 220, durum: 'Kritik' },
    { parcaKodu: 'YP-D056', aciklama: 'Güç Kaynağı', stok: 0, fiyat: 850, durum: 'Tükendi' },
    { parcaKodu: 'YP-E078', aciklama: 'Sensör Kablosu', stok: 120, fiyat: 45, durum: 'Yeterli' }];
}
