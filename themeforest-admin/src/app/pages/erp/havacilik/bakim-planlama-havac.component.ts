import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-bakim-planlama-havac', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Uçak Bakım Planlaması" subtitle="Havacılık MRO bakım takvim ve uyum yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class BakimPlanlamaHavacComponent {
  cols: ErpColumn[] = [
    { key: 'ucak', label: 'Uçak' }, { key: 'bakimTuru', label: 'Bakım Türü' },
    { key: 'sonBakim', label: 'Son Bakım' }, { key: 'sonrakiBakim', label: 'Sonraki Bakım' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'ucak', label: 'Uçak Tescil No' }, { key: 'model', label: 'Model', type: 'select', options: ['B737-800', 'A320neo', 'B787-9', 'A330-300', 'ATR72'] },
    { key: 'bakimTuru', label: 'Bakım Tipi', type: 'select', options: ['A Check', 'B Check', 'C Check', 'D Check', 'Line Maintenance'] },
    { key: 'sonBakim', label: 'Son Bakım Tarihi' }, { key: 'sonrakiBakim', label: 'Sonraki Planlanan Bakım' },
    { key: 'durum', label: 'Uyum Durumu', type: 'select', options: ['Uyumlu', 'Yaklaşan Bakım', 'Acil Bakım', 'Bakımda'] }];
  data = [
    { ucak: 'TC-ABC', model: 'B737-800', bakimTuru: 'A Check', sonBakim: '10.01.2025', sonrakiBakim: '10.07.2025', durum: 'Uyumlu' },
    { ucak: 'TC-DEF', model: 'A320neo', bakimTuru: 'C Check', sonBakim: '05.03.2025', sonrakiBakim: '05.05.2025', durum: 'Yaklaşan Bakım' },
    { ucak: 'TC-GHI', model: 'B787-9', bakimTuru: 'Line Maintenance', sonBakim: '25.04.2025', sonrakiBakim: '25.05.2025', durum: 'Uyumlu' },
    { ucak: 'TC-JKL', model: 'A330-300', bakimTuru: 'D Check', sonBakim: '01.04.2025', sonrakiBakim: '01.04.2031', durum: 'Uyumlu' },
    { ucak: 'TC-MNO', model: 'ATR72', bakimTuru: 'B Check', sonBakim: '20.04.2025', sonrakiBakim: '20.04.2025', durum: 'Acil Bakım' }];
}
