import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-ml-modeller', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Makine Öğrenmesi Modelleri" subtitle="YZ ve ML model performans takibi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class MlModellerComponent {
  cols: ErpColumn[] = [
    { key: 'modelAdi', label: 'Model Adı' }, { key: 'algoritma', label: 'Algoritma' },
    { key: 'dogruluk', label: 'Doğruluk %' }, { key: 'egitimTarihi', label: 'Eğitim Tarihi' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'modelAdi', label: 'Model Adı' }, { key: 'algoritma', label: 'Algoritma', type: 'select', options: ['Random Forest', 'LSTM', 'XGBoost', 'Neural Network', 'SVM'] },
    { key: 'dogruluk', label: 'Doğruluk %', type: 'number' }, { key: 'egitimTarihi', label: 'Eğitim Tarihi' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Production', 'Staging', 'Eğitimde', 'Emekli'] }];
  data = [
    { modelAdi: 'SatışTahmini-v3', algoritma: 'LSTM', dogruluk: 93, egitimTarihi: '2024-04-01', durum: 'Production' },
    { modelAdi: 'MüşteriSegment', algoritma: 'Random Forest', dogruluk: 88, egitimTarihi: '2024-03-15', durum: 'Production' },
    { modelAdi: 'AnomaliDetect', algoritma: 'Neural Network', dogruluk: 91, egitimTarihi: '2024-04-10', durum: 'Staging' },
    { modelAdi: 'StokOptimize', algoritma: 'XGBoost', dogruluk: 85, egitimTarihi: '2024-04-20', durum: 'Eğitimde' },
    { modelAdi: 'ChurnV1', algoritma: 'SVM', dogruluk: 75, egitimTarihi: '2023-10-01', durum: 'Emekli' }];
}
