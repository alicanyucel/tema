import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-rezervasyon', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Otel ve Turizm Rezervasyonları" subtitle="Otel oda ve turizm paket rezervasyon yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class RezervasyonComponent {
  cols: ErpColumn[] = [
    { key: 'rezNo', label: 'Rez. No' }, { key: 'misafir', label: 'Misafir' },
    { key: 'oda', label: 'Oda/Paket' }, { key: 'tarih', label: 'Giriş-Çıkış' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'rezNo', label: 'Rezervasyon No' }, { key: 'misafir', label: 'Misafir Adı' },
    { key: 'oda', label: 'Oda/Paket', type: 'select', options: ['Standart Oda', 'Superior Oda', 'Suit', 'Villa', 'Ultra All-Inclusive'] },
    { key: 'tarih', label: 'Giriş-Çıkış Tarihleri' }, { key: 'tutar', label: 'Toplam Tutar', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Onaylandı', 'Bekleniyor', 'Check-in', 'Check-out', 'İptal'] }];
  data = [
    { rezNo: 'RZ-2024-0891', misafir: 'Ahmet Kara', oda: 'Superior Oda', tarih: '15-20 Mayıs 2024', durum: 'Onaylandı' },
    { rezNo: 'RZ-2024-0892', misafir: 'Sarah Johnson', oda: 'Suit', tarih: '18-25 Mayıs 2024', durum: 'Onaylandı' },
    { rezNo: 'RZ-2024-0893', misafir: 'Klaus Müller', oda: 'Villa', tarih: '01-08 Haziran 2024', durum: 'Bekleniyor' },
    { rezNo: 'RZ-2024-0885', misafir: 'Hasan Demir', oda: 'Standart Oda', tarih: '26-28 Nisan 2024', durum: 'Check-in' },
    { rezNo: 'RZ-2024-0880', misafir: 'Maria Garcia', oda: 'Ultra All-Inclusive', tarih: '20-27 Nisan 2024', durum: 'Check-out' }];
}
