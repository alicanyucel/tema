import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-sigorta-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Sigorta Yönetimi" subtitle="Şirket sigorta poliçeleri ve hasar takibi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class SigortaYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'policeNo', label: 'Poliçe No' }, { key: 'tur', label: 'Sigorta Türü' },
    { key: 'prim', label: 'Prim', type: 'currency' }, { key: 'bitis', label: 'Bitiş Tarihi' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'policeNo', label: 'Poliçe No' }, { key: 'tur', label: 'Sigorta Türü', type: 'select', options: ['Yangın', 'İşyeri', 'Nakliye', 'Sorumluluk', 'Hayat'] },
    { key: 'prim', label: 'Yıllık Prim', type: 'number' }, { key: 'bitis', label: 'Bitiş Tarihi' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Yenileme Gerekli', 'Sona Erdi'] }];
  data = [
    { policeNo: 'POL-2024-001', tur: 'Yangın', prim: 48000, bitis: '2024-12-31', durum: 'Aktif' },
    { policeNo: 'POL-2024-002', tur: 'Nakliye', prim: 32000, bitis: '2024-09-30', durum: 'Aktif' },
    { policeNo: 'POL-2024-003', tur: 'Sorumluluk', prim: 18000, bitis: '2024-06-30', durum: 'Yenileme Gerekli' },
    { policeNo: 'POL-2024-004', tur: 'İşyeri', prim: 65000, bitis: '2024-12-31', durum: 'Aktif' },
    { policeNo: 'POL-2023-005', tur: 'Hayat', prim: 24000, bitis: '2024-03-31', durum: 'Sona Erdi' }];
}
