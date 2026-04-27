import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-arsa-takip', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Arsa & Parsel Takibi" subtitle="Arsa, tarla ve parsel yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class ArsaTakipComponent {
  cols: ErpColumn[] = [
    { key: 'parselNo', label: 'Parsel No' },
    { key: 'ada', label: 'Ada' },
    { key: 'il', label: 'İl/İlçe' },
    { key: 'alan', label: 'Alan (m²)', type: 'number' },
    { key: 'tip', label: 'Tip', type: 'badge' },
    { key: 'deger', label: 'Değer', type: 'currency' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'parselNo', label: 'Parsel No' },
    { key: 'ada', label: 'Ada No' },
    { key: 'il', label: 'İl / İlçe / Köy' },
    { key: 'alan', label: 'Alan (m²)', type: 'number' },
    { key: 'tip', label: 'Tip', type: 'select', options: ['Tarla', 'Arsa', 'Bağ', 'Bahçe', 'Mera', 'Orman', 'Diğer'] },
    { key: 'deger', label: 'Rayiç Değer (₺)', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Kirada', 'Satışta', 'Hukuki Süreçte'] },
  ];
  data = [
    { parselNo: '142-P01', ada: '142', il: 'Konya / Çumra', alan: 48000, tip: 'Tarla', deger: 960000, durum: 'Aktif' },
    { parselNo: '085-P02', ada: '085', il: 'İzmir / Torbalı', alan: 12500, tip: 'Bağ', deger: 625000, durum: 'Kirada' },
    { parselNo: '201-P05', ada: '201', il: 'Ankara / Sincan', alan: 3200, tip: 'Arsa', deger: 4800000, durum: 'Satışta' },
    { parselNo: '057-P08', ada: '057', il: 'Bursa / İnegöl', alan: 22000, tip: 'Bahçe', deger: 1100000, durum: 'Aktif' },
    { parselNo: '319-P03', ada: '319', il: 'Adana / Ceyhan', alan: 75000, tip: 'Tarla', deger: 2250000, durum: 'Aktif' },
  ];
}
