import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-rpa-surecleri', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="RPA Süreç Listesi" subtitle="Robot süreç otomasyonu tanımlı süreçler" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class RpaSurecleriComponent {
  cols: ErpColumn[] = [
    { key: 'surec', label: 'Süreç Adı' }, { key: 'robot', label: 'Robot' },
    { key: 'calismaKez', label: 'Haftalık Çalışma' }, { key: 'zamantasarrufu', label: 'Tasarruf (saat/ay)' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'surec', label: 'Süreç Adı' }, { key: 'robot', label: 'Robot Adı' },
    { key: 'calismaKez', label: 'Haftalık Çalışma Sayısı', type: 'number' }, { key: 'zamantasarrufu', label: 'Zaman Tasarrufu (saat/ay)', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Çalışıyor', 'Durduruldu', 'Hata', 'Planlı Bakım'] }];
  data = [
    { surec: 'Fatura Veri Girişi', robot: 'BOT-FIN-01', calismaKez: 120, zamantasarrufu: 80, durum: 'Çalışıyor' },
    { surec: 'E-posta Sınıflandırma', robot: 'BOT-CRM-02', calismaKez: 840, zamantasarrufu: 120, durum: 'Çalışıyor' },
    { surec: 'Stok Güncelleme', robot: 'BOT-STK-03', calismaKez: 35, zamantasarrufu: 45, durum: 'Hata' },
    { surec: 'Raporlama Döngüsü', robot: 'BOT-RPT-04', calismaKez: 4, zamantasarrufu: 30, durum: 'Çalışıyor' },
    { surec: 'Özlük Güncelleme', robot: 'BOT-HR-05', calismaKez: 0, zamantasarrufu: 0, durum: 'Planlı Bakım' }];
}
