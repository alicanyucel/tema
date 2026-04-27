import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-ar-ge-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Ar-Ge Yönetimi" subtitle="Araştırma geliştirme proje ve bütçe takibi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class ArGeYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'proje', label: 'Proje' }, { key: 'butce', label: 'Bütçe', type: 'currency' },
    { key: 'harcama', label: 'Harcama', type: 'currency' }, { key: 'ilerleme', label: 'İlerleme %' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'proje', label: 'Proje Adı' }, { key: 'kategori', label: 'Kategori', type: 'select', options: ['Temel Araştırma', 'Uygulamalı Ar-Ge', 'Ürün Geliştirme', 'Süreç İnovasyonu'] },
    { key: 'butce', label: 'Toplam Bütçe', type: 'number' }, { key: 'harcama', label: 'Harcama', type: 'number' },
    { key: 'ilerleme', label: 'İlerleme %', type: 'number' }, { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Tamamlandı', 'Durduruldu', 'Planlandı'] }];
  data = [
    { proje: 'YZ Asistan v2', kategori: 'Ürün Geliştirme', butce: 1200000, harcama: 680000, ilerleme: 55, durum: 'Aktif' },
    { proje: 'Nanomalzeme Araştırması', kategori: 'Temel Araştırma', butce: 850000, harcama: 720000, ilerleme: 85, durum: 'Aktif' },
    { proje: 'Enerji Depolama', kategori: 'Uygulamalı Ar-Ge', butce: 2100000, harcama: 450000, ilerleme: 20, durum: 'Aktif' },
    { proje: 'Süreç Otomasyonu v1', kategori: 'Süreç İnovasyonu', butce: 400000, harcama: 400000, ilerleme: 100, durum: 'Tamamlandı' },
    { proje: 'Kuantum Hesaplama', kategori: 'Temel Araştırma', butce: 3500000, harcama: 0, ilerleme: 0, durum: 'Planlandı' }];
}
