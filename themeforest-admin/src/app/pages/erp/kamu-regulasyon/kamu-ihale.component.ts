import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-kamu-ihale', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Kamu İhale Yönetimi" subtitle="e-Devlet ve kamu ihale süreçleri" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class KamuIhaleComponent {
  cols: ErpColumn[] = [
    { key: 'ihaleNo', label: 'İhale No' }, { key: 'kurum', label: 'Kurum' },
    { key: 'deger', label: 'Değer', type: 'currency' }, { key: 'tarih', label: 'Son Teklif Tarihi' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'ihaleNo', label: 'İhale No' }, { key: 'kurum', label: 'Kamu Kurumu' },
    { key: 'aciklama', label: 'İhale Konusu', type: 'textarea' }, { key: 'deger', label: 'Tahmini Değer', type: 'number' },
    { key: 'tarih', label: 'Son Teklif Tarihi' }, { key: 'durum', label: 'Durum', type: 'select', options: ['Hazırlanıyor', 'Teklif Verildi', 'Kazanıldı', 'Kaybedildi', 'İptal'] }];
  data = [
    { ihaleNo: '2024/001234', kurum: 'Sağlık Bakanlığı', deger: 8500000, tarih: '2024-05-15', durum: 'Hazırlanıyor' },
    { ihaleNo: '2024/000987', kurum: 'MEB', deger: 3200000, tarih: '2024-04-30', durum: 'Teklif Verildi' },
    { ihaleNo: '2024/000756', kurum: 'Belediye', deger: 1850000, tarih: '2024-04-20', durum: 'Kazanıldı' },
    { ihaleNo: '2023/009876', kurum: 'Üniversite', deger: 950000, tarih: '2023-12-15', durum: 'Kaybedildi' },
    { ihaleNo: '2024/000321', kurum: 'AFAD', deger: 2100000, tarih: '2024-04-10', durum: 'İptal' }];
}
