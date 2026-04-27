import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-izin-mesai', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="İzin ve Mesai Takibi" subtitle="Personel izin talepleri ve mesai kayıtları" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class IzinMesaiComponent {
  cols: ErpColumn[] = [
    { key: 'sicilNo', label: 'Sicil No' },
    { key: 'adSoyad', label: 'Ad Soyad' },
    { key: 'tip', label: 'İzin/Mesai' },
    { key: 'baslangic', label: 'Başlangıç' },
    { key: 'bitis', label: 'Bitiş' },
    { key: 'gunSaati', label: 'Gün/Saat' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'sicilNo', label: 'Sicil No' },
    { key: 'adSoyad', label: 'Ad Soyad' },
    { key: 'tip', label: 'Tip', type: 'select', options: ['Yıllık İzin', 'Hastalık İzni', 'Ücretsiz İzin', 'Mesai'] },
    { key: 'baslangic', label: 'Başlangıç' },
    { key: 'bitis', label: 'Bitiş' },
    { key: 'gunSaati', label: 'Gün/Saat' },
    { key: 'aciklama', label: 'Açıklama', type: 'textarea' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Beklemede', 'Onaylandi', 'Reddedildi', 'Tamamlandi'] },
  ];
  data = [
    { sicilNo: 'EMP-001', adSoyad: 'Ece Yıldırım', tip: 'Yıllık İzin', baslangic: '22.04.2024', bitis: '26.04.2024', gunSaati: '5 Gün', durum: 'Onaylandi' },
    { sicilNo: 'EMP-003', adSoyad: 'Aylin Kara', tip: 'Hastalık İzni', baslangic: '20.04.2024', bitis: '22.04.2024', gunSaati: '3 Gün', durum: 'Onaylandi' },
    { sicilNo: 'EMP-002', adSoyad: 'Mert Demir', tip: 'Mesai', baslangic: '15.04.2024', bitis: '15.04.2024', gunSaati: '4 Saat', durum: 'Tamamlandi' },
    { sicilNo: 'EMP-005', adSoyad: 'Selin Usta', tip: 'Yıllık İzin', baslangic: '01.05.2024', bitis: '03.05.2024', gunSaati: '3 Gün', durum: 'Beklemede' },
  ];
}
