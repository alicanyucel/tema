import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-genel-muhasebe', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Genel Muhasebe" subtitle="Hesap hareketleri ve yevmiye kayıtları" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class GenelMuhasebeComponent {
  cols: ErpColumn[] = [
    { key: 'hesapKodu', label: 'Hesap Kodu' },
    { key: 'hesapAdi', label: 'Hesap Adı' },
    { key: 'borç', label: 'Borç', type: 'currency' },
    { key: 'alacak', label: 'Alacak', type: 'currency' },
    { key: 'bakiye', label: 'Bakiye', type: 'currency' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'hesapKodu', label: 'Hesap Kodu' },
    { key: 'hesapAdi', label: 'Hesap Adı' },
    { key: 'borç', label: 'Borç', type: 'number' },
    { key: 'alacak', label: 'Alacak', type: 'number' },
    { key: 'bakiye', label: 'Bakiye', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Pasif'] },
  ];
  data = [
    { hesapKodu: '100', hesapAdi: 'Kasa', borç: 50000, alacak: 30000, bakiye: 20000, durum: 'Aktif' },
    { hesapKodu: '102', hesapAdi: 'Bankalar', borç: 120000, alacak: 75000, bakiye: 45000, durum: 'Aktif' },
    { hesapKodu: '120', hesapAdi: 'Alıcılar', borç: 85000, alacak: 60000, bakiye: 25000, durum: 'Aktif' },
    { hesapKodu: '320', hesapAdi: 'Satıcılar', borç: 40000, alacak: 90000, bakiye: 50000, durum: 'Aktif' },
    { hesapKodu: '600', hesapAdi: 'Yurt İçi Satışlar', borç: 0, alacak: 200000, bakiye: 200000, durum: 'Aktif' },
    { hesapKodu: '770', hesapAdi: 'Genel Giderler', borç: 35000, alacak: 0, bakiye: 35000, durum: 'Pasif' },
  ];
}
