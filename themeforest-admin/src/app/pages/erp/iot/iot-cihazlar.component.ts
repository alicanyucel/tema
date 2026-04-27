import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-iot-cihazlar', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="IoT Cihaz Yönetimi" subtitle="Bağlı cihazlar ve sensör veri takibi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class IotCihazlarComponent {
  cols: ErpColumn[] = [
    { key: 'cihazAdi', label: 'Cihaz Adı' }, { key: 'tur', label: 'Tür' },
    { key: 'konum', label: 'Konum' }, { key: 'sonVeri', label: 'Son Veri' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'cihazAdi', label: 'Cihaz Adı' }, { key: 'tur', label: 'Cihaz Türü', type: 'select', options: ['Sensör', 'Aktüatör', 'Kamera', 'Ölçüm Cihazı'] },
    { key: 'konum', label: 'Konum' }, { key: 'sonVeri', label: 'Son Veri Zamanı' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Çevrimiçi', 'Çevrimdışı', 'Hata', 'Bakımda'] }];
  data = [
    { cihazAdi: 'Sıcaklık Sensörü Hat-1', tur: 'Sensör', konum: 'Üretim Hattı 1', sonVeri: '2024-04-27 10:45', durum: 'Çevrimiçi' },
    { cihazAdi: 'Nem Ölçer Depo-A', tur: 'Ölçüm Cihazı', konum: 'Depo A', sonVeri: '2024-04-27 10:44', durum: 'Çevrimiçi' },
    { cihazAdi: 'Güvenlik Kamera-1', tur: 'Kamera', konum: 'Ana Giriş', sonVeri: '2024-04-27 10:45', durum: 'Çevrimiçi' },
    { cihazAdi: 'Konveyör Motor', tur: 'Aktüatör', konum: 'Üretim Hattı 3', sonVeri: '2024-04-26 14:00', durum: 'Bakımda' },
    { cihazAdi: 'Titreşim Sensörü CNC-2', tur: 'Sensör', konum: 'CNC Bölümü', sonVeri: '2024-04-24 08:30', durum: 'Hata' }];
}
