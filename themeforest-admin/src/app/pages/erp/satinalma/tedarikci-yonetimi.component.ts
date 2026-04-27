import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-tedarikci-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Tedarikçi Yönetimi" subtitle="Tedarikçi kayıtları ve değerlendirme" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class TedarikciYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'tedNo', label: 'Tedarikçi No' },
    { key: 'firma', label: 'Firma Adı' },
    { key: 'kategori', label: 'Kategori' },
    { key: 'telefon', label: 'Telefon' },
    { key: 'puanlama', label: 'Puanlama' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'tedNo', label: 'Tedarikçi No' },
    { key: 'firma', label: 'Firma Adı' },
    { key: 'kategori', label: 'Kategori', type: 'select', options: ['Hammadde', 'Elektronik', 'Lojistik', 'Yazılım', 'Hizmet', 'Diğer'] },
    { key: 'telefon', label: 'Telefon' },
    { key: 'email', label: 'E-posta' },
    { key: 'puanlama', label: 'Puanlama (1-5)', type: 'number' },
    { key: 'notlar', label: 'Notlar', type: 'textarea' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Pasif', 'Beklemede'] },
  ];
  data = [
    { tedNo: 'TED-001', firma: 'TechParts Ltd', kategori: 'Elektronik', telefon: '0212 444 1001', puanlama: 5, durum: 'Aktif' },
    { tedNo: 'TED-002', firma: 'Global Supply Co', kategori: 'Hammadde', telefon: '0216 444 2002', puanlama: 4, durum: 'Aktif' },
    { tedNo: 'TED-003', firma: 'Delta Lojistik', kategori: 'Lojistik', telefon: '0312 444 3003', puanlama: 3, durum: 'Aktif' },
    { tedNo: 'TED-004', firma: 'Mega Components', kategori: 'Elektronik', telefon: '0232 444 4004', puanlama: 4, durum: 'Beklemede' },
    { tedNo: 'TED-005', firma: 'Eski Tedarikçi AS', kategori: 'Hammadde', telefon: '0342 444 5005', puanlama: 2, durum: 'Pasif' },
  ];
}
