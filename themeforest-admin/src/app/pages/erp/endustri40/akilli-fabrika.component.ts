import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-akilli-fabrika', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Akıllı Fabrika Yönetimi" subtitle="Endüstri 4.0 akıllı üretim süreçleri" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class AkilliFabrikaComponent {
  cols: ErpColumn[] = [
    { key: 'hat', label: 'Üretim Hattı' }, { key: 'otomasyon', label: 'Otomasyon %' },
    { key: 'verimlilik', label: 'Verimlilik %' }, { key: 'ariza', label: 'Arıza/Ay' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'hat', label: 'Hat Adı' }, { key: 'otomasyon', label: 'Otomasyon Seviyesi %', type: 'number' },
    { key: 'verimlilik', label: 'Verimlilik %', type: 'number' }, { key: 'ariza', label: 'Aylık Arıza Sayısı', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Tam Çalışıyor', 'Kısmi', 'Bakımda', 'Durduruldu'] }];
  data = [
    { hat: 'Hat-1 (Montaj)', otomasyon: 85, verimlilik: 92, ariza: 2, durum: 'Tam Çalışıyor' },
    { hat: 'Hat-2 (İşleme)', otomasyon: 78, verimlilik: 88, ariza: 3, durum: 'Tam Çalışıyor' },
    { hat: 'Hat-3 (Boyama)', otomasyon: 92, verimlilik: 95, ariza: 1, durum: 'Tam Çalışıyor' },
    { hat: 'Hat-4 (Paketleme)', otomasyon: 65, verimlilik: 80, ariza: 5, durum: 'Kısmi' },
    { hat: 'Hat-5 (Eski)', otomasyon: 35, verimlilik: 60, ariza: 12, durum: 'Bakımda' }];
}
