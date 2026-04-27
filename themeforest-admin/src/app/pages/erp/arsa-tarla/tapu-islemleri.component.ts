import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-tapu-islemleri', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Tapu İşlemleri" subtitle="Devir, ipotek ve tapu takip yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class TapuIslemleriComponent {
  cols: ErpColumn[] = [
    { key: 'tapuNo', label: 'Tapu No' },
    { key: 'parsel', label: 'Parsel' },
    { key: 'tip', label: 'İşlem Tipi', type: 'badge' },
    { key: 'tarih', label: 'İşlem Tarihi' },
    { key: 'taraf', label: 'Karşı Taraf' },
    { key: 'tutar', label: 'Tutar', type: 'currency' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'tapuNo', label: 'Tapu No / Yevmiye No' },
    { key: 'parsel', label: 'Parsel No' },
    { key: 'tip', label: 'İşlem Tipi', type: 'select', options: ['Devir', 'Satış', 'İpotek', 'İpotek Kaldırma', 'Miras Devri', 'Hibe'] },
    { key: 'tarih', label: 'İşlem Tarihi' },
    { key: 'taraf', label: 'Karşı Taraf (Alıcı/Satıcı)' },
    { key: 'tutar', label: 'İşlem Tutarı (₺)', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Tamamlandı', 'Devam Ediyor', 'Beklemede', 'İptal'] },
  ];
  data = [
    { tapuNo: 'YEV-2024-001', parsel: '201-P05', tip: 'Satış', tarih: '2024-03-15', taraf: 'Ahmet Yılmaz', tutar: 4700000, durum: 'Devam Ediyor' },
    { tapuNo: 'YEV-2023-058', parsel: '085-P02', tip: 'İpotek', tarih: '2023-11-22', taraf: 'Garanti Bankası', tutar: 400000, durum: 'Tamamlandı' },
    { tapuNo: 'YEV-2023-031', parsel: '057-P08', tip: 'Devir', tarih: '2023-06-10', taraf: 'Fatma Öztürk', tutar: 1050000, durum: 'Tamamlandı' },
    { tapuNo: 'YEV-2024-012', parsel: '319-P03', tip: 'Miras Devri', tarih: '2024-01-05', taraf: 'Hukuk Mirasçıları', tutar: 0, durum: 'Tamamlandı' },
  ];
}
