import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-otomasyon-izleme', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Otomasyon İzleme" subtitle="İş süreci otomasyonu performans izleme" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class OtomasyonIzlemeComponent {
  cols: ErpColumn[] = [
    { key: 'otomasyon', label: 'Otomasyon' }, { key: 'kategori', label: 'Kategori' },
    { key: 'calisma', label: 'Aylık Çalışma' }, { key: 'basari', label: 'Başarı %' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'otomasyon', label: 'Otomasyon Adı' }, { key: 'kategori', label: 'Kategori', type: 'select', options: ['Onay Akışı', 'Bildirim', 'Entegrasyon', 'Raporlama', 'Veri Senkron'] },
    { key: 'calisma', label: 'Aylık Çalışma Sayısı', type: 'number' }, { key: 'basari', label: 'Başarı Oranı %', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Hata', 'Durduruldu', 'Test'] }];
  data = [
    { otomasyon: 'Fatura Onay Akışı', kategori: 'Onay Akışı', calisma: 1250, basari: 99.2, durum: 'Aktif' },
    { otomasyon: 'Stok Uyarı SMS', kategori: 'Bildirim', calisma: 340, basari: 98.5, durum: 'Aktif' },
    { otomasyon: 'ERP-CRM Senkron', kategori: 'Veri Senkron', calisma: 720, basari: 92.1, durum: 'Hata' },
    { otomasyon: 'Aylık Satış Raporu', kategori: 'Raporlama', calisma: 1, basari: 100, durum: 'Aktif' },
    { otomasyon: 'API Entegrasyon', kategori: 'Entegrasyon', calisma: 0, basari: 0, durum: 'Test' }];
}
