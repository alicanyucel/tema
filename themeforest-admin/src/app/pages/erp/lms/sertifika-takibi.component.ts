import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-sertifika-takibi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Sertifika Takibi" subtitle="Çalışan sertifikaları ve yenileme takibi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class SertifikaTakibiComponent {
  cols: ErpColumn[] = [
    { key: 'calisan', label: 'Çalışan' },
    { key: 'sertifika', label: 'Sertifika' },
    { key: 'alimTarihi', label: 'Alım Tarihi' },
    { key: 'gecerlilikTarihi', label: 'Geçerlilik' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'calisan', label: 'Çalışan' },
    { key: 'sertifika', label: 'Sertifika Adı' },
    { key: 'alimTarihi', label: 'Alım Tarihi' },
    { key: 'gecerlilikTarihi', label: 'Geçerlilik Tarihi' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Yenileme Gerekli', 'Süresi Doldu'] },
  ];
  data = [
    { calisan: 'Ali Can', sertifika: 'PMP', alimTarihi: '2022-06-10', gecerlilikTarihi: '2025-06-10', durum: 'Aktif' },
    { calisan: 'Mert Demir', sertifika: 'AWS Solutions Architect', alimTarihi: '2023-03-15', gecerlilikTarihi: '2026-03-15', durum: 'Aktif' },
    { calisan: 'Aylin Kara', sertifika: 'CISM', alimTarihi: '2021-11-01', gecerlilikTarihi: '2024-11-01', durum: 'Yenileme Gerekli' },
    { calisan: 'Selin Usta', sertifika: 'Scrum Master', alimTarihi: '2023-07-20', gecerlilikTarihi: '2025-07-20', durum: 'Aktif' },
    { calisan: 'Finans Ekip', sertifika: 'CPA', alimTarihi: '2020-04-05', gecerlilikTarihi: '2023-04-05', durum: 'Süresi Doldu' },
  ];
}
