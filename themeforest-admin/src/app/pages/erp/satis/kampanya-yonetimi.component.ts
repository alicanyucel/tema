import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-kampanya-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Kampanya Yönetimi" subtitle="Pazarlama kampanyaları ve promosyonlar" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class KampanyaYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'kampanyaKodu', label: 'Kampanya Kodu' },
    { key: 'ad', label: 'Kampanya Adı' },
    { key: 'kanal', label: 'Kanal' },
    { key: 'baslangic', label: 'Başlangıç' },
    { key: 'bitis', label: 'Bitiş' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'kampanyaKodu', label: 'Kampanya Kodu' },
    { key: 'ad', label: 'Kampanya Adı' },
    { key: 'kanal', label: 'Kanal', type: 'select', options: ['E-posta', 'SMS', 'Sosyal Medya', 'Web', 'Mağaza'] },
    { key: 'baslangic', label: 'Başlangıç' },
    { key: 'bitis', label: 'Bitiş' },
    { key: 'aciklama', label: 'Açıklama', type: 'textarea' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Beklemede', 'Tamamlandi', 'İptal'] },
  ];
  data = [
    { kampanyaKodu: 'KMP-001', ad: 'Bahar İndirimi', kanal: 'E-posta', baslangic: '01.04.2024', bitis: '30.04.2024', durum: 'Aktif' },
    { kampanyaKodu: 'KMP-002', ad: 'B2B Özel Fiyat', kanal: 'Web', baslangic: '15.04.2024', bitis: '15.05.2024', durum: 'Aktif' },
    { kampanyaKodu: 'KMP-003', ad: 'SMS Flash Sale', kanal: 'SMS', baslangic: '20.04.2024', bitis: '21.04.2024', durum: 'Tamamlandi' },
    { kampanyaKodu: 'KMP-004', ad: 'Sosyal Medya Çekiliş', kanal: 'Sosyal Medya', baslangic: '01.05.2024', bitis: '07.05.2024', durum: 'Beklemede' },
  ];
}
