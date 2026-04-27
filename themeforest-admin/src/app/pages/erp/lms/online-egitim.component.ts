import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-online-egitim', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Online Eğitim Platformu" subtitle="Dijital eğitim içerikleri ve tamamlanma oranları" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class OnlineEgitimComponent {
  cols: ErpColumn[] = [
    { key: 'kursAdi', label: 'Kurs Adı' },
    { key: 'kategori', label: 'Kategori' },
    { key: 'kayitSayisi', label: 'Kayıt Sayısı' },
    { key: 'tamamlanmaOrani', label: 'Tamamlanma %' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'kursAdi', label: 'Kurs Adı' },
    { key: 'kategori', label: 'Kategori', type: 'select', options: ['Teknik', 'Yönetim', 'Uyum', 'Kişisel Gelişim'] },
    { key: 'kayitSayisi', label: 'Kayıt Sayısı', type: 'number' },
    { key: 'tamamlanmaOrani', label: 'Tamamlanma %', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Taslak', 'Arşivlendi'] },
  ];
  data = [
    { kursAdi: 'ERP Temel Kullanım', kategori: 'Teknik', kayitSayisi: 55, tamamlanmaOrani: 78, durum: 'Aktif' },
    { kursAdi: 'Liderlik Becerileri', kategori: 'Yönetim', kayitSayisi: 30, tamamlanmaOrani: 90, durum: 'Aktif' },
    { kursAdi: 'KVKK Farkındalığı', kategori: 'Uyum', kayitSayisi: 120, tamamlanmaOrani: 65, durum: 'Aktif' },
    { kursAdi: 'Zaman Yönetimi', kategori: 'Kişisel Gelişim', kayitSayisi: 45, tamamlanmaOrani: 55, durum: 'Aktif' },
    { kursAdi: 'Eski Muhasebe Sistemi', kategori: 'Teknik', kayitSayisi: 10, tamamlanmaOrani: 100, durum: 'Arşivlendi' },
  ];
}
