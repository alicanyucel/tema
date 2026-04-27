import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-denetim-sertifikasyon', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Denetim ve Sertifikasyon" subtitle="Sertifikasyon süreçleri ve denetim takvimi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class DenetimSertifikasyonComponent {
  cols: ErpColumn[] = [
    { key: 'sertifikaAdi', label: 'Sertifika' },
    { key: 'kurum', label: 'Kurum' },
    { key: 'alimTarihi', label: 'Alım Tarihi' },
    { key: 'gecerlilikTarihi', label: 'Geçerlilik' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'sertifikaAdi', label: 'Sertifika Adı' },
    { key: 'kurum', label: 'Kurum' },
    { key: 'alimTarihi', label: 'Alım Tarihi' },
    { key: 'gecerlilikTarihi', label: 'Geçerlilik Tarihi' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Yenileme Gerekli', 'Süresi Doldu'] },
  ];
  data = [
    { sertifikaAdi: 'ISO 9001 Sertifikası', kurum: 'TSE', alimTarihi: '2022-03-10', gecerlilikTarihi: '2025-03-10', durum: 'Aktif' },
    { sertifikaAdi: 'ISO 27001 Sertifikası', kurum: 'BSI', alimTarihi: '2023-07-01', gecerlilikTarihi: '2026-07-01', durum: 'Aktif' },
    { sertifikaAdi: 'CE Uygunluk', kurum: 'TÜV', alimTarihi: '2021-11-15', gecerlilikTarihi: '2024-11-15', durum: 'Yenileme Gerekli' },
    { sertifikaAdi: 'Çevre Sertifikası', kurum: 'TSE', alimTarihi: '2020-05-20', gecerlilikTarihi: '2023-05-20', durum: 'Süresi Doldu' },
    { sertifikaAdi: 'İş Güvenliği Belgesi', kurum: 'SGK', alimTarihi: '2024-01-08', gecerlilikTarihi: '2027-01-08', durum: 'Aktif' },
  ];
}
