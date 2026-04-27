import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-kaynak-optimizasyon', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Kaynak Optimizasyonu" subtitle="Enerji ve doğal kaynak optimizasyon planları" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class KaynakOptimizasyonComponent {
  cols: ErpColumn[] = [
    { key: 'proje', label: 'Optimizasyon Projesi' }, { key: 'hedefTasarruf', label: 'Hedef Tasarruf %' },
    { key: 'gerceklesen', label: 'Gerçekleşen %' }, { key: 'yatirim', label: 'Yatırım', type: 'currency' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'proje', label: 'Proje Adı' }, { key: 'hedefTasarruf', label: 'Hedef Tasarruf %', type: 'number' },
    { key: 'gerceklesen', label: 'Gerçekleşen %', type: 'number' }, { key: 'yatirim', label: 'Yatırım Maliyeti', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Planlandı', 'Devam Ediyor', 'Tamamlandı'] }];
  data = [
    { proje: 'LED Aydınlatma Dönüşümü', hedefTasarruf: 30, gerceklesen: 28, yatirim: 85000, durum: 'Tamamlandı' },
    { proje: 'Güneş Paneli Kurulumu', hedefTasarruf: 40, gerceklesen: 35, yatirim: 450000, durum: 'Devam Ediyor' },
    { proje: 'Kompresör Optimizasyonu', hedefTasarruf: 15, gerceklesen: 0, yatirim: 120000, durum: 'Planlandı' },
    { proje: 'Atık Isı Geri Kazanımı', hedefTasarruf: 20, gerceklesen: 18, yatirim: 200000, durum: 'Tamamlandı' },
    { proje: 'Akıllı Bina Sistemi', hedefTasarruf: 25, gerceklesen: 10, yatirim: 350000, durum: 'Devam Ediyor' }];
}
