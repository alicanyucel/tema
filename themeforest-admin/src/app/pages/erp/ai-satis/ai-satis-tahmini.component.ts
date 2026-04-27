import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-ai-satis-tahmini', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="YZ Destekli Satış Tahmini" subtitle="AI ile fırsat skorlama ve satış tahmini" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class AiSatisTahminiComponent {
  cols: ErpColumn[] = [
    { key: 'firsat', label: 'Fırsat' }, { key: 'musteri', label: 'Müşteri' },
    { key: 'deger', label: 'Beklenen Değer', type: 'currency' }, { key: 'aiSkoru', label: 'AI Kazanma Skoru' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'firsat', label: 'Fırsat Adı' }, { key: 'musteri', label: 'Müşteri' },
    { key: 'deger', label: 'Beklenen Değer', type: 'number' }, { key: 'aiSkoru', label: 'AI Kazanma Skoru (0-100)', type: 'number' },
    { key: 'durum', label: 'Aşama', type: 'select', options: ['Yeni', 'Nitelikli', 'Teklif', 'Müzakere', 'Kazanıldı', 'Kaybedildi'] }];
  data = [
    { firsat: 'ERP Genişletme', musteri: 'Nova Market', deger: 850000, aiSkoru: 87, durum: 'Müzakere' },
    { firsat: 'Yeni Modül Satışı', musteri: 'Alfa Holding', deger: 320000, aiSkoru: 72, durum: 'Teklif' },
    { firsat: 'Bulut Geçişi', musteri: 'Beta Şirket', deger: 450000, aiSkoru: 65, durum: 'Nitelikli' },
    { firsat: 'Lisans Yenileme', musteri: 'Gama Ltd.', deger: 180000, aiSkoru: 93, durum: 'Kazanıldı' },
    { firsat: 'YZ Modülü', musteri: 'Delta Corp.', deger: 620000, aiSkoru: 41, durum: 'Yeni' }];
}
