import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-tarim-arazi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Arazi ve Tarım Yönetimi" subtitle="Arazi parselları ve üretim planlama" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class TarimAraziComponent {
  cols: ErpColumn[] = [
    { key: 'parsel', label: 'Parsel' }, { key: 'alan', label: 'Alan (da)' },
    { key: 'urun', label: 'Ürün' }, { key: 'verim', label: 'Verim (kg/da)' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'parsel', label: 'Parsel Adı/No' }, { key: 'alan', label: 'Alan (dekar)', type: 'number' },
    { key: 'urun', label: 'Ürün', type: 'select', options: ['Buğday', 'Mısır', 'Ayçiçeği', 'Domates', 'Biber', 'Zeytin'] },
    { key: 'verim', label: 'Hedef Verim (kg/da)', type: 'number' }, { key: 'durum', label: 'Durum', type: 'select', options: ['Ekim', 'Büyüme', 'Hasat', 'Dinlenme', 'Sulanıyor'] }];
  data = [
    { parsel: 'Parsel A-01', alan: 250, urun: 'Buğday', verim: 420, durum: 'Büyüme' },
    { parsel: 'Parsel A-02', alan: 180, urun: 'Mısır', verim: 850, durum: 'Büyüme' },
    { parsel: 'Parsel B-01', alan: 85, urun: 'Domates', verim: 4500, durum: 'Hasat' },
    { parsel: 'Parsel B-02', alan: 65, urun: 'Biber', verim: 2800, durum: 'Sulanıyor' },
    { parsel: 'Parsel C-01', alan: 320, urun: 'Zeytin', verim: 250, durum: 'Dinlenme' }];
}
