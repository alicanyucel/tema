import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-veri-madenciligi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Veri Madenciliği" subtitle="Büyük veri analizi ve veri madenciliği işlemleri" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class VeriMadenciIigiComponent {
  cols: ErpColumn[] = [
    { key: 'analizAdi', label: 'Analiz Adı' }, { key: 'veriKaynagi', label: 'Veri Kaynağı' },
    { key: 'kayitSayisi', label: 'Kayıt Sayısı' }, { key: 'tarih', label: 'Tarih' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'analizAdi', label: 'Analiz Adı' }, { key: 'veriKaynagi', label: 'Veri Kaynağı' },
    { key: 'kayitSayisi', label: 'Kayıt Sayısı', type: 'number' }, { key: 'tarih', label: 'Tarih' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Çalışıyor', 'Tamamlandı', 'Hata'] }];
  data = [
    { analizAdi: 'Müşteri Segmentasyonu', veriKaynagi: 'CRM', kayitSayisi: 125000, tarih: '2024-04-20', durum: 'Tamamlandı' },
    { analizAdi: 'Churn Tahmini', veriKaynagi: 'ERP', kayitSayisi: 45000, tarih: '2024-04-22', durum: 'Tamamlandı' },
    { analizAdi: 'Satış Trendi', veriKaynagi: 'Satış DB', kayitSayisi: 89000, tarih: '2024-04-25', durum: 'Çalışıyor' },
    { analizAdi: 'Stok Anomali Tespiti', veriKaynagi: 'Stok DB', kayitSayisi: 32000, tarih: '2024-04-26', durum: 'Tamamlandı' },
    { analizAdi: 'Tedarikçi Risk Skoru', veriKaynagi: 'Satınalma', kayitSayisi: 8500, tarih: '2024-04-27', durum: 'Çalışıyor' }];
}
