import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-kaynak-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Kaynak Yönetimi" subtitle="Proje kaynak planlaması ve atamalar" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class KaynakYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'proje', label: 'Proje' },
    { key: 'kaynak', label: 'Kaynak' },
    { key: 'rol', label: 'Rol' },
    { key: 'kapasite', label: 'Kapasite %' },
    { key: 'baslangic', label: 'Başlangıç' },
    { key: 'bitis', label: 'Bitiş' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'proje', label: 'Proje' },
    { key: 'kaynak', label: 'Kaynak' },
    { key: 'rol', label: 'Rol', type: 'select', options: ['Proje Müdürü', 'Developer', 'Analist', 'Test', 'DevOps', 'Tasarımcı'] },
    { key: 'kapasite', label: 'Kapasite %', type: 'number' },
    { key: 'baslangic', label: 'Başlangıç' },
    { key: 'bitis', label: 'Bitiş' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Beklemede', 'Tamamlandi'] },
  ];
  data = [
    { proje: 'ERP Modül Geliştirme', kaynak: 'Mert Demir', rol: 'Developer', kapasite: 80, baslangic: '01.01.2024', bitis: '30.06.2024', durum: 'Aktif' },
    { proje: 'Depo Otomasyonu', kaynak: 'Selin Usta', rol: 'Developer', kapasite: 60, baslangic: '01.02.2024', bitis: '31.05.2024', durum: 'Aktif' },
    { proje: 'B2B Portal', kaynak: 'Can Arslan', rol: 'Analist', kapasite: 50, baslangic: '01.04.2024', bitis: '30.09.2024', durum: 'Aktif' },
    { proje: 'CRM Entegrasyonu', kaynak: 'Aylin Kara', rol: 'Test', kapasite: 100, baslangic: '15.01.2024', bitis: '15.03.2024', durum: 'Tamamlandi' },
  ];
}
