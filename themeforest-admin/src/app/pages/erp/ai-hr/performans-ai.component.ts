import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-performans-ai', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="YZ Performans Değerlendirme" subtitle="Yapay zekâ destekli çalışan performans analizi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class PerformansAiComponent {
  cols: ErpColumn[] = [
    { key: 'calisan', label: 'Çalışan' }, { key: 'departman', label: 'Departman' },
    { key: 'aiSkor', label: 'YZ Skor' }, { key: 'trend', label: 'Trend' }, { key: 'durum', label: 'Seviye', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'calisan', label: 'Çalışan Adı' }, { key: 'departman', label: 'Departman' },
    { key: 'aiSkor', label: 'YZ Performans Skoru (0-100)', type: 'number' }, { key: 'trend', label: 'Trend', type: 'select', options: ['Yükseliyor', 'Sabit', 'Düşüyor'] },
    { key: 'durum', label: 'Performans Seviyesi', type: 'select', options: ['Üstün', 'İyi', 'Orta', 'Gelişim Gerekli'] }];
  data = [
    { calisan: 'Ahmet Yılmaz', departman: 'Satış', aiSkor: 92, trend: 'Yükseliyor', durum: 'Üstün' },
    { calisan: 'Zeynep Kaya', departman: 'Yazılım', aiSkor: 88, trend: 'Sabit', durum: 'İyi' },
    { calisan: 'Mustafa Demir', departman: 'Muhasebe', aiSkor: 74, trend: 'Yükseliyor', durum: 'İyi' },
    { calisan: 'Elif Şahin', departman: 'Müşteri Hizm.', aiSkor: 65, trend: 'Düşüyor', durum: 'Orta' },
    { calisan: 'Burak Arslan', departman: 'Lojistik', aiSkor: 48, trend: 'Düşüyor', durum: 'Gelişim Gerekli' }];
}
