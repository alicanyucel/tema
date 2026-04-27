import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-bagis-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Bağış Yönetimi" subtitle="Kurumsal bağış programları ve hibe takibi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class BagisYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'program', label: 'Program' }, { key: 'kategori', label: 'Kategori' },
    { key: 'tutar', label: 'Bağış Tutarı', type: 'currency' }, { key: 'faydalanan', label: 'Faydalanan Kişi' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'program', label: 'Program Adı' }, { key: 'kategori', label: 'Kategori', type: 'select', options: ['Eğitim', 'Sağlık', 'Çevre', 'Sanat', 'Sosyal Yardım', 'Spor'] },
    { key: 'tutar', label: 'Bağış Tutarı (₺)', type: 'number' }, { key: 'faydalanan', label: 'Faydalanan Kişi/Kuruluş Sayısı', type: 'number' },
    { key: 'durum', label: 'Proje Durumu', type: 'select', options: ['Aktif', 'Tamamlandı', 'Planlı', 'İptal'] }];
  data = [
    { program: 'Eğitime Destek Bursu', kategori: 'Eğitim', tutar: 500000, faydalanan: 250, durum: 'Aktif' },
    { program: 'Yeşil Okul Projesi', kategori: 'Çevre', tutar: 180000, faydalanan: 12, durum: 'Aktif' },
    { program: 'Kültür Sanat Desteği', kategori: 'Sanat', tutar: 120000, faydalanan: 35, durum: 'Tamamlandı' },
    { program: 'Spor Akademisi', kategori: 'Spor', tutar: 250000, faydalanan: 80, durum: 'Planlı' },
    { program: 'Engelli İstihdam', kategori: 'Sosyal Yardım', tutar: 350000, faydalanan: 45, durum: 'Aktif' }];
}
