import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-mobil-onay', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Mobil Onay Akışları" subtitle="Mobil üzerinden onay bekleyen işlemler" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class MobilOnayComponent {
  cols: ErpColumn[] = [
    { key: 'islemNo', label: 'İşlem No' }, { key: 'tur', label: 'Tür' },
    { key: 'talepEden', label: 'Talep Eden' }, { key: 'tutar', label: 'Tutar', type: 'currency' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'islemNo', label: 'İşlem No' }, { key: 'tur', label: 'Tür', type: 'select', options: ['Satın Alma', 'Harcama', 'İzin', 'Mesai'] },
    { key: 'talepEden', label: 'Talep Eden' }, { key: 'tutar', label: 'Tutar', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Beklemede', 'Onaylandı', 'Reddedildi'] }];
  data = [
    { islemNo: 'ONY-001', tur: 'Satın Alma', talepEden: 'Mert Demir', tutar: 15000, durum: 'Beklemede' },
    { islemNo: 'ONY-002', tur: 'İzin', talepEden: 'Selin Usta', tutar: 0, durum: 'Onaylandı' },
    { islemNo: 'ONY-003', tur: 'Harcama', talepEden: 'Burak Yıldız', tutar: 3500, durum: 'Beklemede' },
    { islemNo: 'ONY-004', tur: 'Mesai', talepEden: 'Aylin Kara', tutar: 1200, durum: 'Onaylandı' },
    { islemNo: 'ONY-005', tur: 'Satın Alma', talepEden: 'Ali Can', tutar: 85000, durum: 'Beklemede' }];
}
