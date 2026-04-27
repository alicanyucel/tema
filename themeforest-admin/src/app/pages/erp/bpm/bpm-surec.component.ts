import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-bpm-surec', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="BPM Süreç Yönetimi" subtitle="İş süreçleri modelleme ve otomasyon" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class BpmSurecComponent {
  cols: ErpColumn[] = [
    { key: 'surec', label: 'Süreç Adı' }, { key: 'departman', label: 'Departman' },
    { key: 'adimSayisi', label: 'Adım Sayısı' }, { key: 'sure', label: 'Ort. Süre (saat)' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'surec', label: 'Süreç Adı' }, { key: 'departman', label: 'Departman', type: 'select', options: ['Satış', 'İK', 'Muhasebe', 'Lojistik', 'IT'] },
    { key: 'adimSayisi', label: 'Adım Sayısı', type: 'number' }, { key: 'sure', label: 'Ort. Süre (saat)', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Yayında', 'Taslak', 'Revize Edilmeli', 'Arşiv'] }];
  data = [
    { surec: 'Satın Alma Onayı', departman: 'Muhasebe', adimSayisi: 6, sure: 8, durum: 'Yayında' },
    { surec: 'İzin Talebi', departman: 'İK', adimSayisi: 4, sure: 2, durum: 'Yayında' },
    { surec: 'Müşteri Onboarding', departman: 'Satış', adimSayisi: 9, sure: 24, durum: 'Yayında' },
    { surec: 'Lojistik Çıkış Onayı', departman: 'Lojistik', adimSayisi: 5, sure: 4, durum: 'Revize Edilmeli' },
    { surec: 'IT Erişim Talebi', departman: 'IT', adimSayisi: 3, sure: 1, durum: 'Taslak' }];
}
