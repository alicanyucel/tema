import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-ai-hr-yetenek', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="YZ Destekli Yetenek Yönetimi" subtitle="Yapay zekâ ile işe alım ve yetenek analizi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class AiHrYetenekComponent {
  cols: ErpColumn[] = [
    { key: 'aday', label: 'Aday' }, { key: 'pozisyon', label: 'Pozisyon' },
    { key: 'uyumSkoru', label: 'YZ Uyum Skoru' }, { key: 'kaynak', label: 'Kaynak' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'aday', label: 'Aday Adı' }, { key: 'pozisyon', label: 'Pozisyon' },
    { key: 'uyumSkoru', label: 'YZ Uyum Skoru (0-100)', type: 'number' }, { key: 'kaynak', label: 'Başvuru Kaynağı', type: 'select', options: ['LinkedIn', 'Kariyer.net', 'Referans', 'Web Sitesi', 'Yetkinlik Tarama'] },
    { key: 'durum', label: 'Aşama', type: 'select', options: ['İncelemede', 'Mülakat', 'Teklif', 'İşe Alındı', 'Elendi'] }];
  data = [
    { aday: 'Ahmet Y.', pozisyon: 'Kıdemli Yazılım Geliştirici', uyumSkoru: 94, kaynak: 'LinkedIn', durum: 'Mülakat' },
    { aday: 'Zeynep K.', pozisyon: 'Veri Analisti', uyumSkoru: 91, kaynak: 'Kariyer.net', durum: 'Teklif' },
    { aday: 'Murat D.', pozisyon: 'Proje Yöneticisi', uyumSkoru: 87, kaynak: 'Referans', durum: 'Mülakat' },
    { aday: 'Selin A.', pozisyon: 'Ürün Müdürü', uyumSkoru: 82, kaynak: 'LinkedIn', durum: 'İncelemede' },
    { aday: 'Emre B.', pozisyon: 'Kıdemli Yazılım Geliştirici', uyumSkoru: 61, kaynak: 'Web Sitesi', durum: 'Elendi' }];
}
