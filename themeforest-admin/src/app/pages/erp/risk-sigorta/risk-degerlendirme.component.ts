import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-risk-degerlendirme', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Risk Değerlendirme" subtitle="Kurumsal risk analizi ve değerlendirme matrisi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class RiskDegerlendirmeComponent {
  cols: ErpColumn[] = [
    { key: 'riskAdi', label: 'Risk Adı' }, { key: 'kategori', label: 'Kategori' },
    { key: 'olasilik', label: 'Olasılık' }, { key: 'etki', label: 'Etki' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'riskAdi', label: 'Risk Adı' }, { key: 'kategori', label: 'Kategori', type: 'select', options: ['Operasyonel', 'Finansal', 'Stratejik', 'Uyum'] },
    { key: 'olasilik', label: 'Olasılık', type: 'select', options: ['Düşük', 'Orta', 'Yüksek'] },
    { key: 'etki', label: 'Etki', type: 'select', options: ['Düşük', 'Orta', 'Yüksek', 'Kritik'] },
    { key: 'durum', label: 'Durum', type: 'select', options: ['İzleniyor', 'Azaltıldı', 'Kabul Edildi', 'Kapalı'] }];
  data = [
    { riskAdi: 'Tedarik Zinciri Kesintisi', kategori: 'Operasyonel', olasilik: 'Orta', etki: 'Kritik', durum: 'İzleniyor' },
    { riskAdi: 'Döviz Kur Riski', kategori: 'Finansal', olasilik: 'Yüksek', etki: 'Yüksek', durum: 'Azaltıldı' },
    { riskAdi: 'KVKK Uyumsuzluğu', kategori: 'Uyum', olasilik: 'Düşük', etki: 'Yüksek', durum: 'İzleniyor' },
    { riskAdi: 'Siber Saldırı', kategori: 'Operasyonel', olasilik: 'Orta', etki: 'Kritik', durum: 'İzleniyor' },
    { riskAdi: 'Pazar Payı Kaybı', kategori: 'Stratejik', olasilik: 'Düşük', etki: 'Orta', durum: 'Kabul Edildi' }];
}
