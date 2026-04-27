import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-saglik-asi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Sağlık & Aşı Takibi" subtitle="Hayvan sağlık kayıtları, aşı ve tedavi takibi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class SaglikAsiComponent {
  cols: ErpColumn[] = [
    { key: 'kupeno', label: 'Küpe No' },
    { key: 'islem', label: 'İşlem', type: 'badge' },
    { key: 'tarih', label: 'Tarih' },
    { key: 'veteriner', label: 'Veteriner' },
    { key: 'ilac', label: 'İlaç / Aşı' },
    { key: 'maliyet', label: 'Maliyet', type: 'currency' },
    { key: 'sonrakiTarih', label: 'Sonraki Kontrol' },
  ];
  fields: ErpField[] = [
    { key: 'kupeno', label: 'Küpe / Çip No' },
    { key: 'islem', label: 'İşlem Tipi', type: 'select', options: ['Aşı', 'Tedavi', 'Rutin Muayene', 'Doğum', 'Operasyon', 'Karantina'] },
    { key: 'tarih', label: 'İşlem Tarihi' },
    { key: 'veteriner', label: 'Veteriner Adı' },
    { key: 'ilac', label: 'İlaç / Aşı / Malzeme' },
    { key: 'maliyet', label: 'Maliyet (₺)', type: 'number' },
    { key: 'sonrakiTarih', label: 'Sonraki Kontrol Tarihi' },
  ];
  data = [
    { kupeno: 'TR-00125-001', islem: 'Aşı', tarih: '2024-03-10', veteriner: 'Dr. Ahmet Koç', ilac: 'Şap Aşısı', maliyet: 450, sonrakiTarih: '2024-09-10' },
    { kupeno: 'TR-00125-015', islem: 'Tedavi', tarih: '2024-04-01', veteriner: 'Dr. Zeynep Ak', ilac: 'Amoksisilin 250mg', maliyet: 850, sonrakiTarih: '2024-04-08' },
    { kupeno: 'TR-00125-002', islem: 'Doğum', tarih: '2024-04-15', veteriner: 'Dr. Ahmet Koç', ilac: '-', maliyet: 600, sonrakiTarih: '2024-05-15' },
    { kupeno: 'TR-00210-001', islem: 'Aşı', tarih: '2024-02-20', veteriner: 'Dr. Mehmet Yel', ilac: 'Brucella Aşısı', maliyet: 180, sonrakiTarih: '2025-02-20' },
    { kupeno: 'TR-00300-001', islem: 'Rutin Muayene', tarih: '2024-04-10', veteriner: 'Dr. Zeynep Ak', ilac: 'Vitamin B kompleks', maliyet: 120, sonrakiTarih: '2024-05-10' },
  ];
}
