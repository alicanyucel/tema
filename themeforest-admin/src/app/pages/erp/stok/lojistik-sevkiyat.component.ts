import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-lojistik-sevkiyat', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Lojistik ve Sevkiyat" subtitle="Gönderim takibi ve teslimat yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class LojistikSevkiyatComponent {
  cols: ErpColumn[] = [
    { key: 'takipNo', label: 'Takip No' },
    { key: 'musteri', label: 'Müşteri' },
    { key: 'kargo', label: 'Kargo Firması' },
    { key: 'gonderimTarihi', label: 'Gönderim Tarihi' },
    { key: 'tahminiTeslimat', label: 'Tahmini Teslimat' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'takipNo', label: 'Takip No' },
    { key: 'musteri', label: 'Müşteri' },
    { key: 'kargo', label: 'Kargo Firması', type: 'select', options: ['Aras Kargo', 'Yurtiçi Kargo', 'MNG Kargo', 'UPS', 'DHL'] },
    { key: 'gonderimTarihi', label: 'Gönderim Tarihi' },
    { key: 'tahminiTeslimat', label: 'Tahmini Teslimat' },
    { key: 'adres', label: 'Teslimat Adresi', type: 'textarea' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Hazirlaniyor', 'Kargoda', 'Teslim Edildi', 'İptal'] },
  ];
  data = [
    { takipNo: 'TRK-001', musteri: 'Nova Market', kargo: 'Aras Kargo', gonderimTarihi: '15.04.2024', tahminiTeslimat: '17.04.2024', durum: 'Teslim Edildi' },
    { takipNo: 'TRK-002', musteri: 'Atlas Group', kargo: 'DHL', gonderimTarihi: '16.04.2024', tahminiTeslimat: '20.04.2024', durum: 'Kargoda' },
    { takipNo: 'TRK-003', musteri: 'Marmara Ticaret', kargo: 'MNG Kargo', gonderimTarihi: '17.04.2024', tahminiTeslimat: '19.04.2024', durum: 'Kargoda' },
    { takipNo: 'TRK-004', musteri: 'Anadolu Servis', kargo: 'UPS', gonderimTarihi: '18.04.2024', tahminiTeslimat: '22.04.2024', durum: 'Hazirlaniyor' },
  ];
}
