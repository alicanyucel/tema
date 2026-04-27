import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-rota-optimizasyon', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Rota Optimizasyonu" subtitle="YZ destekli teslimat rota ve yakıt optimizasyonu" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class RotaOptimizasyonComponent {
  cols: ErpColumn[] = [
    { key: 'rota', label: 'Rota' }, { key: 'arac', label: 'Araç' },
    { key: 'km', label: 'Toplam KM' }, { key: 'tasarruf', label: 'Yakıt Tasarrufu %' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'rota', label: 'Rota Adı' }, { key: 'arac', label: 'Araç Plakası' },
    { key: 'km', label: 'Toplam KM', type: 'number' }, { key: 'tasarruf', label: 'Yakıt Tasarrufu %', type: 'number' },
    { key: 'durum', label: 'Rota Durumu', type: 'select', options: ['Aktif', 'Tamamlandı', 'Optimize Edildi', 'Beklemede'] }];
  data = [
    { rota: 'İstanbul Anadolu Hattı', arac: '34 ABC 001', km: 285, tasarruf: 18, durum: 'Aktif' },
    { rota: 'Ankara Merkez Dağıtım', arac: '06 DEF 023', km: 142, tasarruf: 22, durum: 'Tamamlandı' },
    { rota: 'İzmir Sahil Rotası', arac: '35 GHI 045', km: 198, tasarruf: 15, durum: 'Aktif' },
    { rota: 'Bursa Endüstri Zonu', arac: '16 JKL 067', km: 87, tasarruf: 25, durum: 'Optimize Edildi' },
    { rota: 'Yeni Sefer Planı', arac: '-', km: 0, tasarruf: 0, durum: 'Beklemede' }];
}
