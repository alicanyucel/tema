import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-personel-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Personel Yönetimi" subtitle="Çalışan kayıtları ve organizasyon şeması" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class PersonelYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'sicilNo', label: 'Sicil No' },
    { key: 'adSoyad', label: 'Ad Soyad' },
    { key: 'departman', label: 'Departman' },
    { key: 'unvan', label: 'Ünvan' },
    { key: 'iseBaslama', label: 'İşe Başlama' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'sicilNo', label: 'Sicil No' },
    { key: 'adSoyad', label: 'Ad Soyad' },
    { key: 'departman', label: 'Departman', type: 'select', options: ['IT', 'Üretim', 'Satış', 'İK', 'Pazarlama', 'Finans', 'Depo'] },
    { key: 'unvan', label: 'Ünvan' },
    { key: 'email', label: 'E-posta' },
    { key: 'telefon', label: 'Telefon' },
    { key: 'iseBaslama', label: 'İşe Başlama' },
    { key: 'maas', label: 'Maaş', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Pasif', 'İzinde'] },
  ];
  data = [
    { sicilNo: 'EMP-001', adSoyad: 'Ece Yıldırım', departman: 'Satış', unvan: 'Satış Müdürü', iseBaslama: '01.03.2019', durum: 'Aktif' },
    { sicilNo: 'EMP-002', adSoyad: 'Mert Demir', departman: 'IT', unvan: 'Backend Developer', iseBaslama: '15.06.2020', durum: 'Aktif' },
    { sicilNo: 'EMP-003', adSoyad: 'Aylin Kara', departman: 'İK', unvan: 'İK Uzmanı', iseBaslama: '01.09.2021', durum: 'İzinde' },
    { sicilNo: 'EMP-004', adSoyad: 'Can Arslan', departman: 'Finans', unvan: 'Mali Müşavir', iseBaslama: '10.01.2018', durum: 'Aktif' },
    { sicilNo: 'EMP-005', adSoyad: 'Selin Usta', departman: 'IT', unvan: 'Frontend Lead', iseBaslama: '01.04.2020', durum: 'Aktif' },
  ];
}
