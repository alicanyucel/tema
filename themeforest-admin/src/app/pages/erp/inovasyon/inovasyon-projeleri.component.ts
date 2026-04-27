import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-inovasyon-projeleri', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="İnovasyon Projeleri" subtitle="Yenilik ve AR-GE proje portföyü" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class InovasyonProjeleriComponent {
  cols: ErpColumn[] = [
    { key: 'projeAdi', label: 'Proje Adı' },
    { key: 'ekip', label: 'Ekip' },
    { key: 'butce', label: 'Bütçe', type: 'currency' },
    { key: 'bitisTarihi', label: 'Bitiş Tarihi' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'projeAdi', label: 'Proje Adı' },
    { key: 'ekip', label: 'Ekip / Sorumlu' },
    { key: 'butce', label: 'Bütçe', type: 'number' },
    { key: 'bitisTarihi', label: 'Bitiş Tarihi' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Planlama', 'Geliştirme', 'Test', 'Tamamlandı', 'İptal'] },
  ];
  data = [
    { projeAdi: 'AI Destekli Talep Tahmini', ekip: 'Veri Bilimi', butce: 250000, bitisTarihi: '2024-09-30', durum: 'Geliştirme' },
    { projeAdi: 'IoT Üretim Takip', ekip: 'Üretim & IT', butce: 400000, bitisTarihi: '2024-12-31', durum: 'Planlama' },
    { projeAdi: 'Blockchain Tedarik Zinciri', ekip: 'Satınalma & IT', butce: 600000, bitisTarihi: '2025-06-30', durum: 'Planlama' },
    { projeAdi: 'Müşteri 360 Platformu', ekip: 'CRM Ekibi', butce: 180000, bitisTarihi: '2024-07-31', durum: 'Test' },
    { projeAdi: 'Otonom Depo Sistemi', ekip: 'Lojistik & Robotik', butce: 1200000, bitisTarihi: '2025-12-31', durum: 'Planlama' },
  ];
}
