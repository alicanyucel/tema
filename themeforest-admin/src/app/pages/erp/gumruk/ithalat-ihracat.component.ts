import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-ithalat-ihracat', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="İthalat & İhracat" subtitle="Dış ticaret işlemleri ve gümrük takibi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class IthalatIhracatComponent {
  cols: ErpColumn[] = [
    { key: 'islem', label: 'İşlem No' }, { key: 'tur', label: 'Tür' },
    { key: 'ulke', label: 'Ülke' }, { key: 'tutar', label: 'Tutar ($)', type: 'currency' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'islem', label: 'İşlem Referans No' }, { key: 'tur', label: 'İşlem Türü', type: 'select', options: ['İthalat', 'İhracat', 'Transit', 'Geçici İhracat'] },
    { key: 'ulke', label: 'Ülke' }, { key: 'tutar', label: 'İşlem Tutarı ($)', type: 'number' },
    { key: 'durum', label: 'Gümrük Durumu', type: 'select', options: ['Gümrükte', 'Tamamlandı', 'Beklemede', 'Sorunlu'] }];
  data = [
    { islem: 'IH-2024-0421', tur: 'İhracat', ulke: 'Almanya', tutar: 85000, durum: 'Tamamlandı' },
    { islem: 'IT-2024-0422', tur: 'İthalat', ulke: 'Çin', tutar: 125000, durum: 'Gümrükte' },
    { islem: 'IH-2024-0423', tur: 'İhracat', ulke: 'ABD', tutar: 220000, durum: 'Tamamlandı' },
    { islem: 'IT-2024-0424', tur: 'İthalat', ulke: 'Japonya', tutar: 48000, durum: 'Beklemede' },
    { islem: 'TT-2024-0425', tur: 'Transit', ulke: 'Rusya', tutar: 75000, durum: 'Sorunlu' }];
}
