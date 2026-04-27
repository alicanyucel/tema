import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-sozlesme-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Sözleşme Yönetimi" subtitle="Şirket sözleşmeleri ve hukuki belgeler" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class SozlesmeYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'sozlesmeNo', label: 'Sözleşme No' }, { key: 'taraf', label: 'Karşı Taraf' },
    { key: 'tur', label: 'Tür' }, { key: 'bitis', label: 'Bitiş Tarihi' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'sozlesmeNo', label: 'Sözleşme No' }, { key: 'taraf', label: 'Karşı Taraf' },
    { key: 'tur', label: 'Sözleşme Türü', type: 'select', options: ['Satış', 'Satın Alma', 'İş', 'Kira', 'Gizlilik'] },
    { key: 'bitis', label: 'Bitiş Tarihi' }, { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Yenileme Gerekli', 'Sona Erdi', 'İptal'] }];
  data = [
    { sozlesmeNo: 'SZ-2024-001', taraf: 'Nova Market', tur: 'Satış', bitis: '2024-12-31', durum: 'Aktif' },
    { sozlesmeNo: 'SZ-2024-002', taraf: 'TechSupply A.Ş.', tur: 'Satın Alma', bitis: '2024-06-30', durum: 'Yenileme Gerekli' },
    { sozlesmeNo: 'SZ-2024-003', taraf: 'Ofis Binası', tur: 'Kira', bitis: '2025-03-31', durum: 'Aktif' },
    { sozlesmeNo: 'SZ-2024-004', taraf: 'IT Danışmanlık Ltd.', tur: 'İş', bitis: '2024-09-30', durum: 'Aktif' },
    { sozlesmeNo: 'SZ-2023-005', taraf: 'Reklam Ajansı', tur: 'Satın Alma', bitis: '2023-12-31', durum: 'Sona Erdi' }];
}
