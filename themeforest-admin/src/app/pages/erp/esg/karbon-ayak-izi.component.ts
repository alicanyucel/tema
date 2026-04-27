import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-karbon-ayak-izi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Karbon Ayak İzi Takibi" subtitle="Emisyon ölçümü ve karbon nötr hedefleri" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class KarbonAyakIziComponent {
  cols: ErpColumn[] = [
    { key: 'kaynak', label: 'Emisyon Kaynağı' }, { key: 'kategori', label: 'Kapsam' },
    { key: 'tonCO2', label: 'Ton CO₂/yıl' }, { key: 'hedef', label: 'Hedef Azalma %' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'kaynak', label: 'Emisyon Kaynağı' }, { key: 'kategori', label: 'Kapsam', type: 'select', options: ['Kapsam 1 (Doğrudan)', 'Kapsam 2 (Enerji)', 'Kapsam 3 (Dolaylı)'] },
    { key: 'tonCO2', label: 'Ton CO₂/yıl', type: 'number' }, { key: 'hedef', label: 'Hedef Azalma %', type: 'number' },
    { key: 'durum', label: 'Trend', type: 'select', options: ['Azalıyor', 'Sabit', 'Artıyor'] }];
  data = [
    { kaynak: 'Fabrika Isıtma', kategori: 'Kapsam 1 (Doğrudan)', tonCO2: 850, hedef: 30, durum: 'Azalıyor' },
    { kaynak: 'Elektrik Tüketimi', kategori: 'Kapsam 2 (Enerji)', tonCO2: 1240, hedef: 50, durum: 'Azalıyor' },
    { kaynak: 'Tedarik Zinciri', kategori: 'Kapsam 3 (Dolaylı)', tonCO2: 3400, hedef: 20, durum: 'Sabit' },
    { kaynak: 'Kurumsal Araçlar', kategori: 'Kapsam 1 (Doğrudan)', tonCO2: 420, hedef: 40, durum: 'Azalıyor' },
    { kaynak: 'İş Seyahatleri', kategori: 'Kapsam 3 (Dolaylı)', tonCO2: 180, hedef: 60, durum: 'Artıyor' }];
}
