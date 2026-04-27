import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-plm-versiyonlama', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Versiyonlama" subtitle="Ürün versiyon ve revizyonları" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class PlmVersiyonlamaComponent {
  cols: ErpColumn[] = [
    { key: 'urunKodu', label: 'Ürün Kodu' },
    { key: 'versiyon', label: 'Versiyon' },
    { key: 'degisiklik', label: 'Değişiklik' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'urunKodu', label: 'Ürün Kodu' },
    { key: 'versiyon', label: 'Versiyon' },
    { key: 'degisiklik', label: 'Değişiklik Özeti', type: 'textarea' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Eski', 'Taslak'] },
  ];
  data = [
    { urunKodu: 'PRD-D001', versiyon: 'v3.0', degisiklik: 'Pompa gövdesi yeniden tasarlandı', tarih: '2024-04-10', durum: 'Aktif' },
    { urunKodu: 'PRD-D001', versiyon: 'v2.5', degisiklik: 'Salmastra malzemesi değiştirildi', tarih: '2023-10-01', durum: 'Eski' },
    { urunKodu: 'PRD-D002', versiyon: 'v2.0', degisiklik: 'Anten boyutu küçültüldü', tarih: '2024-02-28', durum: 'Aktif' },
    { urunKodu: 'PRD-D003', versiyon: 'v1.2', degisiklik: 'Yazılım güncellemesi', tarih: '2024-03-15', durum: 'Aktif' },
    { urunKodu: 'PRD-D004', versiyon: 'v0.1', degisiklik: 'İlk taslak', tarih: '2024-03-10', durum: 'Taslak' },
  ];
}
