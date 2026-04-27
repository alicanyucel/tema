import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-sehir-hizmetleri', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Akıllı Şehir Hizmetleri" subtitle="Belediye ve şehir altyapı entegrasyon yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class SehirHizmetleriComponent {
  cols: ErpColumn[] = [
    { key: 'hizmet', label: 'Hizmet' }, { key: 'kategori', label: 'Kategori' },
    { key: 'kapsam', label: 'Kapsam' }, { key: 'memnuniyet', label: 'Vatandaş Memnuniyeti' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'hizmet', label: 'Hizmet Adı' }, { key: 'kategori', label: 'Kategori', type: 'select', options: ['Ulaşım', 'Atık Yönetimi', 'Su/Enerji', 'Güvenlik', 'Yeşil Alan'] },
    { key: 'kapsam', label: 'Kapsam (mahalle/bölge)' }, { key: 'memnuniyet', label: 'Memnuniyet %', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Bakım', 'Genişletiliyor', 'Planlandı'] }];
  data = [
    { hizmet: 'Akıllı Trafik Sistemi', kategori: 'Ulaşım', kapsam: 'Merkez 45 kavşak', memnuniyet: 72, durum: 'Aktif' },
    { hizmet: 'IoT Atık Takip', kategori: 'Atık Yönetimi', kapsam: '12 mahalle', memnuniyet: 68, durum: 'Aktif' },
    { hizmet: 'Akıllı Aydınlatma', kategori: 'Su/Enerji', kapsam: 'Tüm ilçe', memnuniyet: 81, durum: 'Aktif' },
    { hizmet: 'Kentsel Güvenlik', kategori: 'Güvenlik', kapsam: '8 bölge', memnuniyet: 75, durum: 'Genişletiliyor' },
    { hizmet: 'Park Rezervasyon', kategori: 'Yeşil Alan', kapsam: '22 park', memnuniyet: 0, durum: 'Planlandı' }];
}
