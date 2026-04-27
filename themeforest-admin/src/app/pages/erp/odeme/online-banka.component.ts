import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-online-banka', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Online Banka Entegrasyonu" subtitle="Banka hesapları ve otomatik ekstre aktarımı" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class OnlineBankaComponent {
  cols: ErpColumn[] = [
    { key: 'banka', label: 'Banka' },
    { key: 'hesapNo', label: 'Hesap No' },
    { key: 'bakiye', label: 'Bakiye', type: 'currency' },
    { key: 'sonGuncelleme', label: 'Son Güncelleme' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'banka', label: 'Banka' },
    { key: 'hesapNo', label: 'Hesap No' },
    { key: 'bakiye', label: 'Bakiye', type: 'number' },
    { key: 'sonGuncelleme', label: 'Son Güncelleme' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Bağlı', 'Bağlantı Kesildi', 'Hata'] },
  ];
  data = [
    { banka: 'Ziraat Bankası', hesapNo: 'TR10 0001 0010 1234 5678 90', bakiye: 850000, sonGuncelleme: '2024-04-27 08:00', durum: 'Bağlı' },
    { banka: 'Garanti BBVA', hesapNo: 'TR20 0006 2000 9876 5432 10', bakiye: 430000, sonGuncelleme: '2024-04-27 08:00', durum: 'Bağlı' },
    { banka: 'İş Bankası', hesapNo: 'TR30 0064 0001 1122 3344 5500', bakiye: 215000, sonGuncelleme: '2024-04-26 23:00', durum: 'Bağlı' },
    { banka: 'Yapı Kredi', hesapNo: 'TR40 0006 7010 0011 2233 4455', bakiye: 95000, sonGuncelleme: '2024-04-25 14:30', durum: 'Hata' },
    { banka: 'Akbank', hesapNo: 'TR50 0004 6001 2345 6789 0100', bakiye: 320000, sonGuncelleme: '2024-04-27 08:00', durum: 'Bağlı' },
  ];
}
