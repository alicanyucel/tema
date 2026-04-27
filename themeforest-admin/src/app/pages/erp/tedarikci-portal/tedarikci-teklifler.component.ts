import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-tedarikci-teklifler', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Tedarikçi Teklifleri" subtitle="Tedarikçi portalı üzerinden gelen teklifler" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class TedarikciTekliflerComponent {
  cols: ErpColumn[] = [
    { key: 'teklifNo', label: 'Teklif No' }, { key: 'tedarikci', label: 'Tedarikçi' },
    { key: 'tutar', label: 'Tutar', type: 'currency' }, { key: 'gecerlilik', label: 'Geçerlilik' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'teklifNo', label: 'Teklif No' }, { key: 'tedarikci', label: 'Tedarikçi' },
    { key: 'tutar', label: 'Tutar', type: 'number' }, { key: 'gecerlilik', label: 'Geçerlilik' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Değerlendirmede', 'Onaylandı', 'Reddedildi'] }];
  data = [
    { teklifNo: 'TT-001', tedarikci: 'TechSupply A.Ş.', tutar: 145000, gecerlilik: '2024-05-31', durum: 'Değerlendirmede' },
    { teklifNo: 'TT-002', tedarikci: 'MateryalPro Ltd.', tutar: 87000, gecerlilik: '2024-05-15', durum: 'Onaylandı' },
    { teklifNo: 'TT-003', tedarikci: 'LojistikPlus Co.', tutar: 32000, gecerlilik: '2024-04-30', durum: 'Reddedildi' },
    { teklifNo: 'TT-004', tedarikci: 'Elektronik A.Ş.', tutar: 215000, gecerlilik: '2024-06-30', durum: 'Değerlendirmede' },
    { teklifNo: 'TT-005', tedarikci: 'Tekstil Ltd.', tutar: 54000, gecerlilik: '2024-05-20', durum: 'Onaylandı' }];
}
