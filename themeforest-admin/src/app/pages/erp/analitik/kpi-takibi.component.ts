import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-kpi-takibi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="KPI Takibi" subtitle="Temel performans göstergeleri izleme" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class KpiTakibiComponent {
  cols: ErpColumn[] = [
    { key: 'kpiKodu', label: 'KPI Kodu' },
    { key: 'ad', label: 'KPI Adı' },
    { key: 'kategori', label: 'Kategori' },
    { key: 'hedef', label: 'Hedef' },
    { key: 'gerceklesen', label: 'Gerçekleşen' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'kpiKodu', label: 'KPI Kodu' },
    { key: 'ad', label: 'KPI Adı' },
    { key: 'kategori', label: 'Kategori', type: 'select', options: ['Satış', 'Finans', 'Üretim', 'İK', 'Müşteri Hizmetleri'] },
    { key: 'hedef', label: 'Hedef' },
    { key: 'gerceklesen', label: 'Gerçekleşen' },
    { key: 'aciklama', label: 'Açıklama', type: 'textarea' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Beklemede', 'Pasif'] },
  ];
  data = [
    { kpiKodu: 'KPI-001', ad: 'Aylık Gelir', kategori: 'Satış', hedef: '₺150.000', gerceklesen: '₺128.450', durum: 'Beklemede' },
    { kpiKodu: 'KPI-002', ad: 'Dönüşüm Oranı', kategori: 'Satış', hedef: '%7', gerceklesen: '%5.9', durum: 'Beklemede' },
    { kpiKodu: 'KPI-003', ad: 'Müşteri Memnuniyeti', kategori: 'Müşteri Hizmetleri', hedef: '4.5/5', gerceklesen: '4.3/5', durum: 'Aktif' },
    { kpiKodu: 'KPI-004', ad: 'Stok Devir Hızı', kategori: 'Üretim', hedef: '12x', gerceklesen: '10.5x', durum: 'Beklemede' },
    { kpiKodu: 'KPI-005', ad: 'Personel Devir Oranı', kategori: 'İK', hedef: '%5', gerceklesen: '%3.2', durum: 'Aktif' },
  ];
}
