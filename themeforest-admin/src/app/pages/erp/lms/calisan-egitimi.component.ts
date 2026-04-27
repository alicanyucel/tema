import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-calisan-egitimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Çalışan Eğitimleri" subtitle="Şirket içi eğitim programları ve katılımcı takibi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class CalisanEgitimiComponent {
  cols: ErpColumn[] = [
    { key: 'egitimAdi', label: 'Eğitim Adı' },
    { key: 'egitmen', label: 'Eğitmen' },
    { key: 'katilimci', label: 'Katılımcı Sayısı' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'egitimAdi', label: 'Eğitim Adı' },
    { key: 'egitmen', label: 'Eğitmen' },
    { key: 'katilimci', label: 'Katılımcı Sayısı', type: 'number' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Planlandı', 'Devam Ediyor', 'Tamamlandı', 'İptal'] },
  ];
  data = [
    { egitimAdi: 'İş Sağlığı ve Güvenliği', egitmen: 'Dış Eğitmen', katilimci: 45, tarih: '2024-04-15', durum: 'Tamamlandı' },
    { egitimAdi: 'ERP Kullanıcı Eğitimi', egitmen: 'Ali Can', katilimci: 30, tarih: '2024-05-10', durum: 'Planlandı' },
    { egitimAdi: 'Müşteri İlişkileri', egitmen: 'Aylin Kara', katilimci: 20, tarih: '2024-04-20', durum: 'Tamamlandı' },
    { egitimAdi: 'Liderlik Gelişimi', egitmen: 'Dış Eğitmen', katilimci: 15, tarih: '2024-05-20', durum: 'Planlandı' },
    { egitimAdi: 'Siber Güvenlik Farkındalığı', egitmen: 'Mert Demir', katilimci: 60, tarih: '2024-04-25', durum: 'Devam Ediyor' },
  ];
}
