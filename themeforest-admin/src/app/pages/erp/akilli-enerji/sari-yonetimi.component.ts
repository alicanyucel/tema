import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-sari-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Şarj Altyapısı Yönetimi" subtitle="Elektrikli araç şarj istasyonu izleme ve yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class SariYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'istasyon', label: 'İstasyon' }, { key: 'konum', label: 'Konum' },
    { key: 'guc', label: 'Güç (kW)' }, { key: 'kullanim', label: 'Aylık Kullanım (kWh)' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'istasyon', label: 'İstasyon Adı' }, { key: 'konum', label: 'Konum' },
    { key: 'tip', label: 'Şarj Tipi', type: 'select', options: ['AC Level 2', 'DC Fast Charge', 'Ultra Fast 150kW+'] },
    { key: 'guc', label: 'Güç Kapasitesi (kW)', type: 'number' }, { key: 'kullanim', label: 'Aylık Kullanım (kWh)', type: 'number' },
    { key: 'durum', label: 'İstasyon Durumu', type: 'select', options: ['Aktif', 'Meşgul', 'Bakımda', 'Arızalı'] }];
  data = [
    { istasyon: 'Fabrika Giriş-1', konum: 'Fabrika Otoparkı', guc: 22, kullanim: 1850, durum: 'Aktif' },
    { istasyon: 'Fabrika Giriş-2', konum: 'Fabrika Otoparkı', guc: 22, kullanim: 2100, durum: 'Meşgul' },
    { istasyon: 'DC Hızlı-1', konum: 'Yükleme Rampa', guc: 150, kullanim: 4200, durum: 'Aktif' },
    { istasyon: 'Depo Alanı-1', konum: 'Lojistik Depo', guc: 50, kullanim: 0, durum: 'Bakımda' },
    { istasyon: 'Ofis Park-1', konum: 'Ofis Binası', guc: 11, kullanim: 980, durum: 'Aktif' }];
}
