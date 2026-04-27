import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-vr-egitim', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="VR/AR Eğitim ve Showroom" subtitle="Sanal ve artırılmış gerçeklik uygulamaları" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class VrEgitimComponent {
  cols: ErpColumn[] = [
    { key: 'uygulama', label: 'Uygulama' }, { key: 'tur', label: 'Tür' },
    { key: 'kullanim', label: 'Aylık Kullanım' }, { key: 'memnuniyet', label: 'Memnuniyet' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'uygulama', label: 'Uygulama Adı' }, { key: 'tur', label: 'Tür', type: 'select', options: ['VR Eğitim', 'AR Bakım', 'Sanal Showroom', 'AR Montaj', 'VR Simülasyon'] },
    { key: 'kullanim', label: 'Aylık Kullanım Sayısı', type: 'number' }, { key: 'memnuniyet', label: 'Memnuniyet (1-5)', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Beta', 'Geliştiriliyor', 'Pasif'] }];
  data = [
    { uygulama: 'Güvenlik Eğitimi VR', tur: 'VR Eğitim', kullanim: 450, memnuniyet: 4.7, durum: 'Aktif' },
    { uygulama: 'Ürün Showroom AR', tur: 'Sanal Showroom', kullanim: 1250, memnuniyet: 4.5, durum: 'Aktif' },
    { uygulama: 'Ekipman Bakım AR', tur: 'AR Bakım', kullanim: 180, memnuniyet: 4.2, durum: 'Aktif' },
    { uygulama: 'Montaj Kılavuzu AR', tur: 'AR Montaj', kullanim: 85, memnuniyet: 4.0, durum: 'Beta' },
    { uygulama: 'VR Simülatör v2', tur: 'VR Simülasyon', kullanim: 0, memnuniyet: 0, durum: 'Geliştiriliyor' }];
}
