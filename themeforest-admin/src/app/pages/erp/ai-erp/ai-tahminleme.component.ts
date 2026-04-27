import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-ai-tahminleme', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="YZ Destekli Tahminleme" subtitle="Yapay zekâ modelleriyle satış ve talep tahminleri" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class AiTahminlemeComponent {
  cols: ErpColumn[] = [
    { key: 'model', label: 'Model Adı' }, { key: 'hedef', label: 'Tahmin Hedefi' },
    { key: 'dogruluk', label: 'Doğruluk %' }, { key: 'guncelleme', label: 'Son Güncelleme' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'model', label: 'Model Adı' }, { key: 'hedef', label: 'Tahmin Hedefi', type: 'select', options: ['Satış', 'Talep', 'Stok', 'Churn', 'Fiyat'] },
    { key: 'dogruluk', label: 'Doğruluk %', type: 'number' }, { key: 'guncelleme', label: 'Son Güncelleme' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Eğitimde', 'Pasif'] }];
  data = [
    { model: 'SatışGPT-v2', hedef: 'Satış', dogruluk: 91, guncelleme: '2024-04-20', durum: 'Aktif' },
    { model: 'TalepNet', hedef: 'Talep', dogruluk: 87, guncelleme: '2024-04-15', durum: 'Aktif' },
    { model: 'ChurnDetect', hedef: 'Churn', dogruluk: 85, guncelleme: '2024-04-10', durum: 'Aktif' },
    { model: 'StokPredict', hedef: 'Stok', dogruluk: 78, guncelleme: '2024-03-30', durum: 'Eğitimde' },
    { model: 'FiyatBot', hedef: 'Fiyat', dogruluk: 82, guncelleme: '2024-04-05', durum: 'Aktif' }];
}
