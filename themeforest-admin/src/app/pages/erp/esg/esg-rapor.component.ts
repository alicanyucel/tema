import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-esg-rapor', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="ESG Raporlama" subtitle="Çevre, Sosyal ve Yönetişim performans metrikleri" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class EsgRaporComponent {
  cols: ErpColumn[] = [
    { key: 'kategori', label: 'ESG Kategorisi' }, { key: 'metrik', label: 'Metrik' },
    { key: 'deger', label: 'Değer' }, { key: 'hedef', label: 'Hedef' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'kategori', label: 'Kategori', type: 'select', options: ['Çevre (E)', 'Sosyal (S)', 'Yönetişim (G)'] },
    { key: 'metrik', label: 'Metrik Adı' }, { key: 'deger', label: 'Mevcut Değer' },
    { key: 'hedef', label: 'Hedef' }, { key: 'durum', label: 'Durum', type: 'select', options: ['Hedefte', 'Geride', 'Aştı'] }];
  data = [
    { kategori: 'Çevre (E)', metrik: 'CO₂ Emisyonu (ton)', deger: '2.450', hedef: '2.000', durum: 'Geride' },
    { kategori: 'Çevre (E)', metrik: 'Enerji Tüketimi (MWh)', deger: '18.500', hedef: '20.000', durum: 'Hedefte' },
    { kategori: 'Sosyal (S)', metrik: 'Çalışan Memnuniyet %', deger: '78', hedef: '80', durum: 'Geride' },
    { kategori: 'Sosyal (S)', metrik: 'Toplumsal Yatırım (₺)', deger: '500.000', hedef: '400.000', durum: 'Aştı' },
    { kategori: 'Yönetişim (G)', metrik: 'Bağımsız Yönetici %', deger: '45', hedef: '40', durum: 'Aştı' }];
}
