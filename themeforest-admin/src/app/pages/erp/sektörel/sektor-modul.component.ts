import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-sektor-modul', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Sektörel Modüller" subtitle="Sektöre özgü ERP yapılandırmaları" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class SektorModulComponent {
  cols: ErpColumn[] = [
    { key: 'modul', label: 'Modül Adı' }, { key: 'sektor', label: 'Sektör' },
    { key: 'ozzellik', label: 'Temel Özellik' }, { key: 'kullanici', label: 'Kullanıcı Sayısı' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'modul', label: 'Modül Adı' }, { key: 'sektor', label: 'Sektör', type: 'select', options: ['Sağlık', 'İnşaat', 'Perakende', 'Üretim', 'Hizmet'] },
    { key: 'ozzellik', label: 'Temel Özellik' }, { key: 'kullanici', label: 'Kullanıcı Sayısı', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Beta', 'Planlandı'] }];
  data = [
    { modul: 'Hasta Takip', sektor: 'Sağlık', ozzellik: 'HBYS Entegrasyonu', kullanici: 450, durum: 'Aktif' },
    { modul: 'Hakediş Yönetimi', sektor: 'İnşaat', ozzellik: 'KGS Uyum', kullanici: 120, durum: 'Aktif' },
    { modul: 'Mağaza Yönetimi', sektor: 'Perakende', ozzellik: 'POS Entegrasyon', kullanici: 280, durum: 'Aktif' },
    { modul: 'Kalite Kontrol Plus', sektor: 'Üretim', ozzellik: 'ISO 9001', kullanici: 95, durum: 'Beta' },
    { modul: 'Hizmet Takip Pro', sektor: 'Hizmet', ozzellik: 'SLA Yönetimi', kullanici: 0, durum: 'Planlandı' }];
}
