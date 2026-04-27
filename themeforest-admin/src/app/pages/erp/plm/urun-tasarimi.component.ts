import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-urun-tasarimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Ürün Tasarımı" subtitle="Ürün tasarım projeleri ve teknik çizimler" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class UrunTasarimiComponent {
  cols: ErpColumn[] = [
    { key: 'urunKodu', label: 'Ürün Kodu' },
    { key: 'urunAdi', label: 'Ürün Adı' },
    { key: 'tasarimci', label: 'Tasarımcı' },
    { key: 'baslangicTarihi', label: 'Başlangıç' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'urunKodu', label: 'Ürün Kodu' },
    { key: 'urunAdi', label: 'Ürün Adı' },
    { key: 'tasarimci', label: 'Tasarımcı' },
    { key: 'baslangicTarihi', label: 'Başlangıç Tarihi' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Taslak', 'Tasarım', 'Prototip', 'Onaylı'] },
  ];
  data = [
    { urunKodu: 'PRD-D001', urunAdi: 'Endüstriyel Pompa X3', tasarimci: 'Ali Can', baslangicTarihi: '2024-01-15', durum: 'Prototip' },
    { urunKodu: 'PRD-D002', urunAdi: 'Kompakt Sensör v2', tasarimci: 'Mert Demir', baslangicTarihi: '2024-02-20', durum: 'Tasarım' },
    { urunKodu: 'PRD-D003', urunAdi: 'Akıllı Vana Sistemi', tasarimci: 'Aylin Kara', baslangicTarihi: '2023-11-01', durum: 'Onaylı' },
    { urunKodu: 'PRD-D004', urunAdi: 'Modüler Panel Seti', tasarimci: 'Selin Usta', baslangicTarihi: '2024-03-10', durum: 'Taslak' },
    { urunKodu: 'PRD-D005', urunAdi: 'IoT Kontrol Kartı', tasarimci: 'Ali Can', baslangicTarihi: '2024-04-01', durum: 'Tasarım' },
  ];
}
