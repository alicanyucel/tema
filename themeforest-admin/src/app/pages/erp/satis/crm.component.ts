import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-crm', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Müşteri İlişkileri (CRM)" subtitle="Müşteri kayıtları ve iletişim geçmişi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class CrmComponent {
  cols: ErpColumn[] = [
    { key: 'musteriNo', label: 'Müşteri No' },
    { key: 'ad', label: 'Ad Soyad/Firma' },
    { key: 'sektor', label: 'Sektör' },
    { key: 'telefon', label: 'Telefon' },
    { key: 'temsilci', label: 'Satış Temsilcisi' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'musteriNo', label: 'Müşteri No' },
    { key: 'ad', label: 'Ad Soyad/Firma' },
    { key: 'sektor', label: 'Sektör', type: 'select', options: ['Perakende', 'İmalat', 'Hizmet', 'İnşaat', 'Teknoloji', 'Diğer'] },
    { key: 'telefon', label: 'Telefon' },
    { key: 'email', label: 'E-posta' },
    { key: 'temsilci', label: 'Satış Temsilcisi' },
    { key: 'notlar', label: 'Notlar', type: 'textarea' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Pasif', 'Beklemede'] },
  ];
  data = [
    { musteriNo: 'CRM-001', ad: 'Nova Market', sektor: 'Perakende', telefon: '0212 555 1001', temsilci: 'Ece Yıldırım', durum: 'Aktif' },
    { musteriNo: 'CRM-002', ad: 'Atlas Group', sektor: 'İmalat', telefon: '0216 555 2002', temsilci: 'Mert Demir', durum: 'Aktif' },
    { musteriNo: 'CRM-003', ad: 'Marmara Ticaret', sektor: 'Hizmet', telefon: '0312 555 3003', temsilci: 'Aylin Kara', durum: 'Beklemede' },
    { musteriNo: 'CRM-004', ad: 'Anadolu Servis', sektor: 'Hizmet', telefon: '0332 555 4004', temsilci: 'Can Arslan', durum: 'Aktif' },
    { musteriNo: 'CRM-005', ad: 'Bosphorus Corp', sektor: 'Teknoloji', telefon: '0212 555 5005', temsilci: 'Selin Usta', durum: 'Pasif' },
  ];
}
