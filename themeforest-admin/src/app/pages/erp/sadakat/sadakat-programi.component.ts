import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-sadakat-programi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Sadakat Programı" subtitle="Müşteri sadakat puanları ve ödül programları" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class SadakatProgramiComponent {
  cols: ErpColumn[] = [
    { key: 'musteri', label: 'Müşteri' }, { key: 'puan', label: 'Toplam Puan' },
    { key: 'seviye', label: 'Seviye' }, { key: 'sonIslem', label: 'Son İşlem' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'musteri', label: 'Müşteri' }, { key: 'puan', label: 'Puan', type: 'number' },
    { key: 'seviye', label: 'Seviye', type: 'select', options: ['Bronz', 'Gümüş', 'Altın', 'Platin'] },
    { key: 'sonIslem', label: 'Son İşlem Tarihi' }, { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Pasif', 'Askıda'] }];
  data = [
    { musteri: 'Nova Market', puan: 45800, seviye: 'Platin', sonIslem: '2024-04-27', durum: 'Aktif' },
    { musteri: 'Alfa Holding', puan: 32100, seviye: 'Altın', sonIslem: '2024-04-25', durum: 'Aktif' },
    { musteri: 'Beta Mağaza', puan: 18500, seviye: 'Gümüş', sonIslem: '2024-04-20', durum: 'Aktif' },
    { musteri: 'Gama Lojistik', puan: 8900, seviye: 'Bronz', sonIslem: '2024-04-15', durum: 'Aktif' },
    { musteri: 'Delta Perakende', puan: 2100, seviye: 'Bronz', sonIslem: '2024-03-10', durum: 'Pasif' }];
}
