import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-regulasyon-uyum', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Regülasyon Uyum Takibi" subtitle="Yasal düzenlemeler ve uyum yükümlülükleri" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class RegulasyonUyumComponent {
  cols: ErpColumn[] = [
    { key: 'regülasyon', label: 'Regülasyon' }, { key: 'kurum', label: 'İlgili Kurum' },
    { key: 'son', label: 'Son Başvuru' }, { key: 'ceza', label: 'Ceza Riski', type: 'currency' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'regülasyon', label: 'Regülasyon/Yükümlülük' }, { key: 'kurum', label: 'Düzenleyici Kurum' },
    { key: 'son', label: 'Son Başvuru Tarihi' }, { key: 'ceza', label: 'Olası Ceza (₺)', type: 'number' },
    { key: 'durum', label: 'Uyum Durumu', type: 'select', options: ['Uyumlu', 'Risk Altında', 'Uyumsuz', 'Güncelleniyor'] }];
  data = [
    { regülasyon: 'KDV Beyanname', kurum: 'GİB', son: '26.04.2025', ceza: 50000, durum: 'Uyumlu' },
    { regülasyon: 'SGK Bildirge', kurum: 'SGK', son: '23.04.2025', ceza: 25000, durum: 'Uyumlu' },
    { regülasyon: 'KVKK Bildirimi', kurum: 'KVKK Kurulu', son: '01.06.2025', ceza: 1000000, durum: 'Risk Altında' },
    { regülasyon: 'ÇED Raporu', kurum: 'Çevre Bakanlığı', son: '30.03.2025', ceza: 500000, durum: 'Güncelleniyor' },
    { regülasyon: 'İhracat Lisansı', kurum: 'Ticaret Bakanlığı', son: '15.07.2025', ceza: 250000, durum: 'Uyumlu' }];
}
