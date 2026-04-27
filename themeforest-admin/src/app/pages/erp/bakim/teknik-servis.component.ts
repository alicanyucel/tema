import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-teknik-servis', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Teknik Servis" subtitle="Müşteri servis talepleri ve çözüm takibi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class TeknikServisComponent {
  cols: ErpColumn[] = [
    { key: 'servisNo', label: 'Servis No' },
    { key: 'musteri', label: 'Müşteri' },
    { key: 'sorun', label: 'Sorun Başlığı' },
    { key: 'once', label: 'Öncelik', type: 'badge' },
    { key: 'atanan', label: 'Atanan Teknisyen' },
    { key: 'acilisTarihi', label: 'Açılış Tarihi' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'servisNo', label: 'Servis No' },
    { key: 'musteri', label: 'Müşteri' },
    { key: 'sorun', label: 'Sorun Başlığı' },
    { key: 'sorunDetay', label: 'Sorun Detayı', type: 'textarea' },
    { key: 'once', label: 'Öncelik', type: 'select', options: ['Yuksek', 'Orta', 'Dusuk'] },
    { key: 'atanan', label: 'Atanan Teknisyen' },
    { key: 'acilisTarihi', label: 'Açılış Tarihi' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Acik', 'Devam Ediyor', 'Tamamlandi', 'İptal'] },
  ];
  data = [
    { servisNo: 'SRV-001', musteri: 'Nova Market', sorun: 'Barkod okuyucu arızası', once: 'Yuksek', atanan: 'Ozan Çakır', acilisTarihi: '20.04.2024', durum: 'Devam Ediyor' },
    { servisNo: 'SRV-002', musteri: 'Atlas Group', sorun: 'Yazıcı sürücü sorunu', once: 'Orta', atanan: 'Burak İnan', acilisTarihi: '21.04.2024', durum: 'Acik' },
    { servisNo: 'SRV-003', musteri: 'Marmara Ticaret', sorun: 'ERP login hatası', once: 'Yuksek', atanan: 'Ozan Çakır', acilisTarihi: '18.04.2024', durum: 'Tamamlandi' },
    { servisNo: 'SRV-004', musteri: 'Anadolu Servis', sorun: 'Rapor export sorunu', once: 'Dusuk', atanan: 'Burak İnan', acilisTarihi: '22.04.2024', durum: 'Acik' },
  ];
}
