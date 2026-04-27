import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-belge-arsivleme', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Belge Arşivleme" subtitle="Kurumsal belge ve doküman arşivi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class BelgeArsivlemeComponent {
  cols: ErpColumn[] = [
    { key: 'belgeNo', label: 'Belge No' },
    { key: 'baslik', label: 'Başlık' },
    { key: 'kategori', label: 'Kategori' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'belgeNo', label: 'Belge No' },
    { key: 'baslik', label: 'Başlık' },
    { key: 'kategori', label: 'Kategori', type: 'select', options: ['Sözleşme', 'Fatura', 'Rapor', 'Politika', 'Diğer'] },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Arşivlendi', 'Silindi'] },
  ];
  data = [
    { belgeNo: 'DOC-001', baslik: 'Gizlilik Sözleşmesi', kategori: 'Sözleşme', tarih: '2024-01-10', durum: 'Aktif' },
    { belgeNo: 'DOC-002', baslik: 'Yıllık Faaliyet Raporu', kategori: 'Rapor', tarih: '2024-03-15', durum: 'Aktif' },
    { belgeNo: 'DOC-003', baslik: 'IT Güvenlik Politikası', kategori: 'Politika', tarih: '2023-11-20', durum: 'Aktif' },
    { belgeNo: 'DOC-004', baslik: 'Tedarikçi Sözleşmesi', kategori: 'Sözleşme', tarih: '2023-08-05', durum: 'Arşivlendi' },
    { belgeNo: 'DOC-005', baslik: 'Q3 Finansal Rapor', kategori: 'Rapor', tarih: '2024-09-30', durum: 'Aktif' },
  ];
}
