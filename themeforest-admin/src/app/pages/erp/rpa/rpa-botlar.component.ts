import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-rpa-botlar', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="RPA Bot Yönetimi" subtitle="Robotik süreç otomasyonu bot ve görev yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class RpaBotlarComponent {
  cols: ErpColumn[] = [
    { key: 'botAdi', label: 'Bot Adı' }, { key: 'surecAdi', label: 'Süreç' },
    { key: 'gunlukIslem', label: 'Günlük İşlem' }, { key: 'basariOrani', label: 'Başarı %' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'botAdi', label: 'Bot Adı' }, { key: 'surecAdi', label: 'Süreç Adı' },
    { key: 'gunlukIslem', label: 'Günlük İşlem Adedi', type: 'number' }, { key: 'basariOrani', label: 'Başarı Oranı %', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Çalışıyor', 'Beklemede', 'Hatalı', 'Durduruldu'] }];
  data = [
    { botAdi: 'Fatura-Bot', surecAdi: 'Fatura Veri Girişi', gunlukIslem: 1250, basariOrani: 99.2, durum: 'Çalışıyor' },
    { botAdi: 'Rapor-Bot', surecAdi: 'Günlük Rapor Hazırlama', gunlukIslem: 15, basariOrani: 100, durum: 'Çalışıyor' },
    { botAdi: 'Stok-Bot', surecAdi: 'Stok Güncellemesi', gunlukIslem: 450, basariOrani: 97.8, durum: 'Çalışıyor' },
    { botAdi: 'Onay-Bot', surecAdi: 'Satın Alma Onayı', gunlukIslem: 85, basariOrani: 94.1, durum: 'Beklemede' },
    { botAdi: 'Eski-Bot', surecAdi: 'Veri Migrasyon', gunlukIslem: 0, basariOrani: 62.3, durum: 'Durduruldu' }];
}
