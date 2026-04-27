import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-ai-optimizasyon', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="YZ Süreç Optimizasyonu" subtitle="Yapay zekâ destekli süreç ve kaynak optimizasyonu" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class AiOptimizasyonComponent {
  cols: ErpColumn[] = [
    { key: 'surec', label: 'Süreç' }, { key: 'onceOncesi', label: 'Önceki Süre (dk)' },
    { key: 'sonrasi', label: 'Sonraki Süre (dk)' }, { key: 'tasarruf', label: 'Tasarruf %' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'surec', label: 'Süreç Adı' }, { key: 'onceOncesi', label: 'Optimizasyon Öncesi (dk)', type: 'number' },
    { key: 'sonrasi', label: 'Optimizasyon Sonrası (dk)', type: 'number' }, { key: 'tasarruf', label: 'Tasarruf %', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Uygulandı', 'Test', 'Önerildi', 'Reddedildi'] }];
  data = [
    { surec: 'Fatura İşleme', onceOncesi: 45, sonrasi: 8, tasarruf: 82, durum: 'Uygulandı' },
    { surec: 'Stok Sayımı', onceOncesi: 180, sonrasi: 35, tasarruf: 81, durum: 'Uygulandı' },
    { surec: 'Müşteri Eşleştirme', onceOncesi: 30, sonrasi: 5, tasarruf: 83, durum: 'Test' },
    { surec: 'Rota Planlaması', onceOncesi: 60, sonrasi: 12, tasarruf: 80, durum: 'Uygulandı' },
    { surec: 'Maliyet Analizi', onceOncesi: 240, sonrasi: 40, tasarruf: 83, durum: 'Önerildi' }];
}
