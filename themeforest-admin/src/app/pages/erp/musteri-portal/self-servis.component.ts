import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-self-servis', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Self-Servis Merkezi" subtitle="Müşteri self-servis işlemleri ve talep yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class SelfServisComponent {
  cols: ErpColumn[] = [
    { key: 'islem', label: 'İşlem Türü' }, { key: 'kullanim', label: 'Aylık Kullanım' },
    { key: 'tamamlanmaOrani', label: 'Tamamlanma %' }, { key: 'tasarruf', label: 'Tasarruf (₺/ay)' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'islem', label: 'Self-Servis İşlemi' }, { key: 'kategori', label: 'Kategori', type: 'select', options: ['Fatura', 'Sipariş', 'Destek', 'Hesap', 'Raporlar'] },
    { key: 'kullanim', label: 'Aylık Kullanım Sayısı', type: 'number' }, { key: 'tamamlanmaOrani', label: 'Tamamlanma %', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Beta', 'Geliştiriliyor'] }];
  data = [
    { islem: 'Fatura İndirme', kategori: 'Fatura', kullanim: 3420, tamamlanmaOrani: 98, tasarruf: 34200, durum: 'Aktif' },
    { islem: 'Sipariş Takip', kategori: 'Sipariş', kullanim: 5680, tamamlanmaOrani: 99, tasarruf: 56800, durum: 'Aktif' },
    { islem: 'Destek Talebi', kategori: 'Destek', kullanim: 1250, tamamlanmaOrani: 85, tasarruf: 12500, durum: 'Aktif' },
    { islem: 'Adres Güncelleme', kategori: 'Hesap', kullanim: 450, tamamlanmaOrani: 97, tasarruf: 4500, durum: 'Aktif' },
    { islem: 'Özel Raporlar', kategori: 'Raporlar', kullanim: 0, tamamlanmaOrani: 0, tasarruf: 0, durum: 'Beta' }];
}
