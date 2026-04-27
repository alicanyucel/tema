import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-zimmet', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Zimmet Yönetimi" subtitle="Personele zimmetlenen demirbaşlar" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class ZimmetComponent {
  cols: ErpColumn[] = [
    { key: 'demirbasKod', label: 'Demirbaş Kodu' },
    { key: 'demirbasAd', label: 'Demirbaş Adı' },
    { key: 'personel', label: 'Personel' },
    { key: 'departman', label: 'Departman' },
    { key: 'zimmetTarihi', label: 'Zimmet Tarihi' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'demirbasKod', label: 'Demirbaş Kodu' },
    { key: 'demirbasAd', label: 'Demirbaş Adı' },
    { key: 'personel', label: 'Zimmetlenen Personel' },
    { key: 'departman', label: 'Departman / Birim' },
    { key: 'zimmetTarihi', label: 'Zimmet Tarihi' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Zimmetli', 'İade Edildi', 'Kayıp', 'Arızalı'] },
  ];
  data = [
    { demirbasKod: 'DMB-001', demirbasAd: 'Traktör John Deere 6M', personel: 'Hasan Çelik', departman: 'Tarla Ekibi', zimmetTarihi: '2022-04-12', durum: 'Zimmetli' },
    { demirbasKod: 'DMB-002', demirbasAd: 'Sulama Pompası', personel: 'Mehmet Yıldız', departman: 'Sulama Ekibi', zimmetTarihi: '2021-07-22', durum: 'Zimmetli' },
    { demirbasKod: 'DMB-006', demirbasAd: 'Ofis Bilgisayar Seti', personel: 'Ayşe Kaya', departman: 'Muhasebe', zimmetTarihi: '2023-01-12', durum: 'Zimmetli' },
    { demirbasKod: 'DMB-005', demirbasAd: 'Eski Çapa Makinesi', personel: 'Ali Arslan', departman: 'Bakım', zimmetTarihi: '2015-03-15', durum: 'İade Edildi' },
  ];
}
