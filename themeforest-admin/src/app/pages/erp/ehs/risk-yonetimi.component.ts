import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-risk-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Risk Yönetimi" subtitle="Kurumsal risk kaydı ve aksiyon planları" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class RiskYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'riskKodu', label: 'Risk Kodu' },
    { key: 'aciklama', label: 'Açıklama' },
    { key: 'kategori', label: 'Kategori' },
    { key: 'olasilik', label: 'Olasılık' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'riskKodu', label: 'Risk Kodu' },
    { key: 'aciklama', label: 'Açıklama', type: 'textarea' },
    { key: 'kategori', label: 'Kategori', type: 'select', options: ['Operasyonel', 'Finansal', 'IT', 'Çevresel', 'Hukuki'] },
    { key: 'olasilik', label: 'Olasılık', type: 'select', options: ['Düşük', 'Orta', 'Yüksek'] },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Açık', 'Azaltılıyor', 'Kapalı'] },
  ];
  data = [
    { riskKodu: 'RSK-001', aciklama: 'Tedarikçi gecikmesi', kategori: 'Operasyonel', olasilik: 'Orta', durum: 'Açık' },
    { riskKodu: 'RSK-002', aciklama: 'Veri ihlali riski', kategori: 'IT', olasilik: 'Düşük', durum: 'Azaltılıyor' },
    { riskKodu: 'RSK-003', aciklama: 'Kur dalgalanması', kategori: 'Finansal', olasilik: 'Yüksek', durum: 'Açık' },
    { riskKodu: 'RSK-004', aciklama: 'Atık yönetimi uyumsuzluğu', kategori: 'Çevresel', olasilik: 'Düşük', durum: 'Kapalı' },
    { riskKodu: 'RSK-005', aciklama: 'Sözleşme ihlali', kategori: 'Hukuki', olasilik: 'Düşük', durum: 'Azaltılıyor' },
  ];
}
