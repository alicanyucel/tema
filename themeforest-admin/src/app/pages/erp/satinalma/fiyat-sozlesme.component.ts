import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-fiyat-sozlesme', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Fiyat ve Sözleşme Yönetimi" subtitle="Tedarikçi sözleşmeleri ve fiyat anlaşmaları" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class FiyatSozlesmeComponent {
  cols: ErpColumn[] = [
    { key: 'sozlesmeNo', label: 'Sözleşme No' },
    { key: 'tedarikci', label: 'Tedarikçi' },
    { key: 'kapsam', label: 'Kapsam' },
    { key: 'baslangic', label: 'Başlangıç' },
    { key: 'bitis', label: 'Bitiş' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'sozlesmeNo', label: 'Sözleşme No' },
    { key: 'tedarikci', label: 'Tedarikçi' },
    { key: 'kapsam', label: 'Kapsam' },
    { key: 'baslangic', label: 'Başlangıç' },
    { key: 'bitis', label: 'Bitiş' },
    { key: 'aciklama', label: 'Açıklama', type: 'textarea' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Pasif', 'Beklemede', 'Tamamlandi'] },
  ];
  data = [
    { sozlesmeNo: 'SZL-001', tedarikci: 'TechParts Ltd', kapsam: 'Elektronik Parça Temini', baslangic: '01.01.2024', bitis: '31.12.2024', durum: 'Aktif' },
    { sozlesmeNo: 'SZL-002', tedarikci: 'Global Supply Co', kapsam: 'Hammadde Çerçeve Anlaşma', baslangic: '01.02.2024', bitis: '31.01.2025', durum: 'Aktif' },
    { sozlesmeNo: 'SZL-003', tedarikci: 'Delta Lojistik', kapsam: 'Taşıma ve Lojistik', baslangic: '01.03.2024', bitis: '28.02.2025', durum: 'Aktif' },
    { sozlesmeNo: 'SZL-004', tedarikci: 'Eski Tedarikçi AS', kapsam: 'Hammadde', baslangic: '01.01.2023', bitis: '31.12.2023', durum: 'Tamamlandi' },
  ];
}
