import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-ucus-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Uçuş ve Ulaşım Yönetimi" subtitle="Havacılık ve ulaşım operasyon takibi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class UcusYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'sefer', label: 'Sefer No' }, { key: 'kalkis', label: 'Kalkış' },
    { key: 'varis', label: 'Varış' }, { key: 'saat', label: 'Kalkış Saati' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'sefer', label: 'Sefer No' }, { key: 'kalkis', label: 'Kalkış Havalimanı' },
    { key: 'varis', label: 'Varış Havalimanı' }, { key: 'saat', label: 'Planlanan Kalkış' },
    { key: 'ucakTipi', label: 'Uçak Tipi', type: 'select', options: ['A320', 'B737', 'A321', 'B787', 'ATR72'] },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Zamanında', 'Gecikmeli', 'Kalkış Yaptı', 'İndi', 'İptal'] }];
  data = [
    { sefer: 'XY-101', kalkis: 'IST', varis: 'ESB', saat: '07:30', durum: 'Zamanında' },
    { sefer: 'XY-202', kalkis: 'ESB', varis: 'ADB', saat: '09:15', durum: 'Kalkış Yaptı' },
    { sefer: 'XY-303', kalkis: 'ADB', varis: 'IST', saat: '11:45', durum: 'Gecikmeli' },
    { sefer: 'XY-404', kalkis: 'IST', varis: 'SAW', saat: '14:00', durum: 'Zamanında' },
    { sefer: 'XY-505', kalkis: 'SAW', varis: 'TZX', saat: '16:30', durum: 'İptal' }];
}
