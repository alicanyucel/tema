import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-mikro-finans', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Mikro Finans & Kredi" subtitle="Mikro kredi portföy ve geri ödeme takibi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class MikroFinansComponent {
  cols: ErpColumn[] = [
    { key: 'musteri', label: 'Müşteri' }, { key: 'krediTutari', label: 'Kredi Tutarı', type: 'currency' },
    { key: 'kalan', label: 'Kalan Bakiye', type: 'currency' }, { key: 'taksitler', label: 'Kalan Taksit' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'musteri', label: 'Müşteri Adı' }, { key: 'krediTur', label: 'Kredi Türü', type: 'select', options: ['Esnaf Kredisi', 'Tarım Kredisi', 'KOBİ Başlangıç', 'Acil İhtiyaç', 'Eğitim Kredisi'] },
    { key: 'krediTutari', label: 'Kredi Tutarı (₺)', type: 'number' }, { key: 'kalan', label: 'Kalan Bakiye (₺)', type: 'number' },
    { key: 'taksitler', label: 'Kalan Taksit Sayısı', type: 'number' }, { key: 'durum', label: 'Ödeme Durumu', type: 'select', options: ['Düzenli', 'Gecikmiş', 'Tamamlandı', 'Sorunlu'] }];
  data = [
    { musteri: 'Ahmet Bakkal', krediTur: 'Esnaf Kredisi', krediTutari: 25000, kalan: 12500, taksitler: 6, durum: 'Düzenli' },
    { musteri: 'Fatma Terzi', krediTur: 'KOBİ Başlangıç', krediTutari: 50000, kalan: 38000, taksitler: 15, durum: 'Düzenli' },
    { musteri: 'Hasan Çiftçi', krediTur: 'Tarım Kredisi', krediTutari: 30000, kalan: 18000, taksitler: 8, durum: 'Gecikmiş' },
    { musteri: 'Ayşe Öğrenci', krediTur: 'Eğitim Kredisi', krediTutari: 15000, kalan: 0, taksitler: 0, durum: 'Tamamlandı' },
    { musteri: 'Murat Esnaf', krediTur: 'Acil İhtiyaç', krediTutari: 8000, kalan: 7200, taksitler: 10, durum: 'Sorunlu' }];
}
