import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-egitim-platform', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Yenilikçi Eğitim Platformu" subtitle="Micro-öğrenme ve gamification içerik yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class EgitimPlatformComponent {
  cols: ErpColumn[] = [
    { key: 'egitim', label: 'Eğitim Adı' }, { key: 'format', label: 'Format' },
    { key: 'sure', label: 'Süre (dk)' }, { key: 'tamamlama', label: 'Tamamlama %' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'egitim', label: 'Eğitim Adı' }, { key: 'format', label: 'Format', type: 'select', options: ['Video', 'Quiz', 'Oyun', 'Infografik', 'Podcast'] },
    { key: 'sure', label: 'Süre (dakika)', type: 'number' }, { key: 'tamamlama', label: 'Tamamlama %', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Yayında', 'Taslak', 'Revize Edilmeli', 'Arşiv'] }];
  data = [
    { egitim: 'ERP Temelleri', format: 'Video', sure: 8, tamamlama: 78, durum: 'Yayında' },
    { egitim: 'Satış Teknikleri Quiz', format: 'Quiz', sure: 5, tamamlama: 65, durum: 'Yayında' },
    { egitim: 'Müşteri Yönetimi Oyunu', format: 'Oyun', sure: 15, tamamlama: 42, durum: 'Yayında' },
    { egitim: 'Finans Temel', format: 'Infografik', sure: 3, tamamlama: 91, durum: 'Yayında' },
    { egitim: 'Liderlik Dersleri', format: 'Podcast', sure: 12, tamamlama: 0, durum: 'Taslak' }];
}
