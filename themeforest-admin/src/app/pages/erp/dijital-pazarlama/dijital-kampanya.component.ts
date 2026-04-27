import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-dijital-kampanya', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Dijital Pazarlama Kampanyaları" subtitle="Online reklam ve dijital kampanya performansı" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class DijitalKampanyaComponent {
  cols: ErpColumn[] = [
    { key: 'kampanya', label: 'Kampanya' }, { key: 'kanal', label: 'Kanal' },
    { key: 'butce', label: 'Bütçe', type: 'currency' }, { key: 'donusum', label: 'Dönüşüm %' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'kampanya', label: 'Kampanya Adı' }, { key: 'kanal', label: 'Kanal', type: 'select', options: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'E-posta', 'SEO'] },
    { key: 'butce', label: 'Bütçe', type: 'number' }, { key: 'donusum', label: 'Dönüşüm %', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Duraklatıldı', 'Tamamlandı'] }];
  data = [
    { kampanya: 'Nisan Satış Kampanyası', kanal: 'Google Ads', butce: 25000, donusum: 3.8, durum: 'Aktif' },
    { kampanya: 'B2B Lead Gen', kanal: 'LinkedIn Ads', butce: 18000, donusum: 2.1, durum: 'Aktif' },
    { kampanya: 'E-posta Remarketing', kanal: 'E-posta', butce: 5000, donusum: 5.2, durum: 'Aktif' },
    { kampanya: 'Marka Bilinirliği', kanal: 'Meta Ads', butce: 30000, donusum: 1.5, durum: 'Aktif' },
    { kampanya: 'Organik Büyüme', kanal: 'SEO', butce: 8000, donusum: 4.7, durum: 'Aktif' }];
}
