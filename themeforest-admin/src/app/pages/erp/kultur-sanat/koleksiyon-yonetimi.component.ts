import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-koleksiyon-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Koleksiyon Yönetimi" subtitle="Sanat eserleri ve koleksiyon envanteri" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class KoleksiyonYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'eser', label: 'Eser Adı' }, { key: 'sanatci', label: 'Sanatçı' },
    { key: 'deger', label: 'Değerleme', type: 'currency' }, { key: 'yer', label: 'Konum' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'eser', label: 'Eser Adı' }, { key: 'sanatci', label: 'Sanatçı/Yapımcı' },
    { key: 'tur', label: 'Eser Türü', type: 'select', options: ['Tablo', 'Heykel', 'Fotoğraf', 'Dijital Sanat', 'El Sanatları', 'Antika'] },
    { key: 'deger', label: 'Değerleme (₺)', type: 'number' }, { key: 'yer', label: 'Bulunduğu Yer' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Sergileniyor', 'Depoda', 'Ödünç Verildi', 'Restorasyon', 'Satıldı'] }];
  data = [
    { eser: 'Mavi Rüzgar', sanatci: 'Mehmet Çelik', tur: 'Tablo', deger: 85000, yer: 'Galeri A - Salon 2', durum: 'Sergileniyor' },
    { eser: 'Modern Form', sanatci: 'Zeynep Arslan', tur: 'Heykel', deger: 120000, yer: 'Galeri B - Atrium', durum: 'Sergileniyor' },
    { eser: 'Şehir Gece #3', sanatci: 'Ali Koç', tur: 'Fotoğraf', deger: 22000, yer: 'Depo Kat-2', durum: 'Depoda' },
    { eser: 'Osmanlı Çini', sanatci: 'Bilinmiyor', tur: 'Antika', deger: 350000, yer: 'Müze Ödünç', durum: 'Ödünç Verildi' },
    { eser: 'Dijital Portre', sanatci: 'Pixel Arts', tur: 'Dijital Sanat', deger: 15000, yer: 'Restorasyon Lab', durum: 'Restorasyon' }];
}
