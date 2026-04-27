import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-talep-tahmin-ai', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="YZ Talep Tahmini" subtitle="Yapay zekâ ile gelecek dönem talep tahmini" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class TalepTahminAiComponent {
  cols: ErpColumn[] = [
    { key: 'urun', label: 'Ürün/Hizmet' }, { key: 'donem', label: 'Dönem' },
    { key: 'tahmin', label: 'Tahmin Adeti' }, { gerceklesen: 'gerceklesen', label: 'Gerçekleşen' } as any,
    { key: 'hata', label: 'Hata %' }, { key: 'guven', label: 'Güven Skoru', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'urun', label: 'Ürün/Hizmet' }, { key: 'donem', label: 'Dönem' },
    { key: 'tahmin', label: 'Tahmin Adeti', type: 'number' }, { key: 'gerceklesen', label: 'Gerçekleşen Adet', type: 'number' },
    { key: 'hata', label: 'Tahmin Hata %', type: 'number' }, { key: 'guven', label: 'Güven Skoru', type: 'select', options: ['Yüksek', 'Orta', 'Düşük'] }];
  data = [
    { urun: 'Model X Pro', donem: 'Kasım 2025', tahmin: 1250, gerceklesen: 1185, hata: 5.2, guven: 'Yüksek' },
    { urun: 'Servis Paketi A', donem: 'Kasım 2025', tahmin: 340, gerceklesen: 312, hata: 8.2, guven: 'Orta' },
    { urun: 'Yedek Parça B12', donem: 'Kasım 2025', tahmin: 870, gerceklesen: 920, hata: 5.7, guven: 'Yüksek' },
    { urun: 'Sezonluk Ürün Y', donem: 'Aralık 2025', tahmin: 4500, gerceklesen: null, hata: null, guven: 'Orta' },
    { urun: 'Yazılım Lisansı', donem: 'Aralık 2025', tahmin: 125, gerceklesen: null, hata: null, guven: 'Yüksek' }];
}
