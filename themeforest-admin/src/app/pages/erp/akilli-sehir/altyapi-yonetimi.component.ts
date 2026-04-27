import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-altyapi-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Şehir Altyapı Yönetimi" subtitle="Akıllı şehir altyapı izleme ve bakım planlaması" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class AltyapiYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'altyapi', label: 'Altyapı Unsuru' }, { key: 'bolge', label: 'Bölge' },
    { key: 'yas', label: 'Yaş (Yıl)' }, { key: 'kapasite', label: 'Kapasite %' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'altyapi', label: 'Altyapı Unsuru' }, { key: 'tur', label: 'Tür', type: 'select', options: ['Su Şebekesi', 'Elektrik', 'Doğalgaz', 'Yol', 'Kanalizasyon', 'İletişim'] },
    { key: 'bolge', label: 'Hizmet Bölgesi' }, { key: 'yas', label: 'Altyapı Yaşı (Yıl)', type: 'number' },
    { key: 'kapasite', label: 'Mevcut Kapasite Kullanım %', type: 'number' }, { key: 'durum', label: 'Durum', type: 'select', options: ['Normal', 'Bakım Gerekli', 'Kritik', 'Yenileme Planlandı'] }];
  data = [
    { altyapi: 'Su Şebekesi Ana Hat', tur: 'Su Şebekesi', bolge: 'Kuzey', yas: 35, kapasite: 78, durum: 'Bakım Gerekli' },
    { altyapi: 'Elektrik Dağıtım', tur: 'Elektrik', bolge: 'Merkez', yas: 18, kapasite: 85, durum: 'Normal' },
    { altyapi: 'Doğalgaz Boru Hattı', tur: 'Doğalgaz', bolge: 'Güney', yas: 22, kapasite: 60, durum: 'Normal' },
    { altyapi: 'Ana Yol D-100', tur: 'Yol', bolge: 'Çevre', yas: 15, kapasite: 95, durum: 'Kritik' },
    { altyapi: 'Fiber Optik Ağ', tur: 'İletişim', bolge: 'Tüm Şehir', yas: 5, kapasite: 45, durum: 'Normal' }];
}
