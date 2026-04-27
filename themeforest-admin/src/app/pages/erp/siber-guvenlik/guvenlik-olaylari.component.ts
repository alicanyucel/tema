import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-guvenlik-olaylari', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Güvenlik Olayları" subtitle="Siber güvenlik olay kayıt ve müdahale yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class GuvenlikOlaylariComponent {
  cols: ErpColumn[] = [
    { key: 'olay', label: 'Olay' }, { key: 'tip', label: 'Tip' },
    { key: 'tarih', label: 'Tarih' }, { key: 'etkilenen', label: 'Etkilenen Sistem' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'olay', label: 'Olay Adı' }, { key: 'tip', label: 'Saldırı Tipi', type: 'select', options: ['Phishing', 'Brute Force', 'SQL Enjeksiyon', 'DDoS', 'Malware', 'Insider Threat'] },
    { key: 'tarih', label: 'Tespit Tarihi' }, { key: 'etkilenen', label: 'Etkilenen Sistem/Bileşen' },
    { key: 'durum', label: 'Olay Durumu', type: 'select', options: ['Kapatıldı', 'İnceleniyor', 'Aktif Tehdit', 'İzleniyor'] }];
  data = [
    { olay: 'Phishing E-posta Kampanyası', tip: 'Phishing', tarih: '12.04.2025', etkilenen: 'E-posta Sunucusu', durum: 'Kapatıldı' },
    { olay: 'VPN Brute Force Girişimi', tip: 'Brute Force', tarih: '18.04.2025', etkilenen: 'VPN Gateway', durum: 'Kapatıldı' },
    { olay: 'ERP SQL Anomali', tip: 'SQL Enjeksiyon', tarih: '22.04.2025', etkilenen: 'ERP Veritabanı', durum: 'İnceleniyor' },
    { olay: 'Web Sunucu DDoS', tip: 'DDoS', tarih: '25.04.2025', etkilenen: 'Web Sunucu', durum: 'Aktif Tehdit' },
    { olay: 'Anormal Veri Erişimi', tip: 'Insider Threat', tarih: '26.04.2025', etkilenen: 'Müşteri DB', durum: 'İzleniyor' }];
}
