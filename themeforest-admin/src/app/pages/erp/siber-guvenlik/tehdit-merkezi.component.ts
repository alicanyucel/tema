import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-tehdit-merkezi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Siber Güvenlik Olay Merkezi" subtitle="Siber tehdit tespiti ve güvenlik olayları" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class TehditMerkeziComponent {
  cols: ErpColumn[] = [
    { key: 'olay', label: 'Olay' }, { key: 'kategori', label: 'Kategori' },
    { key: 'ip', label: 'Kaynak IP' }, { key: 'tarih', label: 'Tespit Tarihi' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'olay', label: 'Olay Adı' }, { key: 'kategori', label: 'Kategori', type: 'select', options: ['Phishing', 'Brute Force', 'Malware', 'DDoS', 'Veri Sızıntısı', 'Yetkisiz Erişim'] },
    { key: 'ip', label: 'Kaynak IP' }, { key: 'tarih', label: 'Tespit Tarihi' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'İnceleniyor', 'Çözüldü', 'Yanlış Alarm'] }];
  data = [
    { olay: 'Phishing E-postası', kategori: 'Phishing', ip: '185.234.xxx.xxx', tarih: '2024-04-27 08:15', durum: 'Çözüldü' },
    { olay: 'Brute Force VPN', kategori: 'Brute Force', ip: '45.92.xxx.xxx', tarih: '2024-04-26 23:50', durum: 'İnceleniyor' },
    { olay: 'Şüpheli SQL Sorgu', kategori: 'Yetkisiz Erişim', ip: '192.168.1.45', tarih: '2024-04-26 16:30', durum: 'Aktif' },
    { olay: 'Ransomware Girişimi', kategori: 'Malware', ip: '91.108.xxx.xxx', tarih: '2024-04-25 10:00', durum: 'Çözüldü' },
    { olay: 'Yüksek Trafik', kategori: 'DDoS', ip: 'Çoklu', tarih: '2024-04-20 14:00', durum: 'Yanlış Alarm' }];
}
