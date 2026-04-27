import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-satis-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Satış Yönetimi" subtitle="Satış fırsatları ve kapanan anlaşmalar" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class SatisYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'firsatNo', label: 'Fırsat No' },
    { key: 'musteri', label: 'Müşteri' },
    { key: 'urun', label: 'Ürün/Hizmet' },
    { key: 'tutar', label: 'Tutar', type: 'currency' },
    { key: 'kapanisTarihi', label: 'Kapanış Tarihi' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'firsatNo', label: 'Fırsat No' },
    { key: 'musteri', label: 'Müşteri' },
    { key: 'urun', label: 'Ürün/Hizmet' },
    { key: 'tutar', label: 'Tutar', type: 'number' },
    { key: 'kapanisTarihi', label: 'Kapanış Tarihi' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Tamamlandi', 'İptal', 'Beklemede'] },
  ];
  data = [
    { firsatNo: 'SAT-001', musteri: 'Nova Market', urun: 'ERP Yazılım Lisansı', tutar: 85000, kapanisTarihi: '30.04.2024', durum: 'Aktif' },
    { firsatNo: 'SAT-002', musteri: 'Atlas Group', urun: 'Depo Otomasyonu', tutar: 230000, kapanisTarihi: '15.05.2024', durum: 'Beklemede' },
    { firsatNo: 'SAT-003', musteri: 'Marmara Ticaret', urun: 'CRM Entegrasyonu', tutar: 45000, kapanisTarihi: '01.04.2024', durum: 'Tamamlandi' },
    { firsatNo: 'SAT-004', musteri: 'Anadolu Servis', urun: 'Bakım Sözleşmesi', tutar: 18000, kapanisTarihi: '20.05.2024', durum: 'Aktif' },
  ];
}
