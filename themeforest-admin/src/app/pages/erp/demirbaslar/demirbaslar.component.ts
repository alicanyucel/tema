import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-demirbaslar', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Demirbaş Listesi" subtitle="Tüm demirbaş ve sabit varlık envanteri" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class DemirbaslarComponent {
  cols: ErpColumn[] = [
    { key: 'kod', label: 'Demirbaş Kodu' },
    { key: 'ad', label: 'Adı' },
    { key: 'kategori', label: 'Kategori', type: 'badge' },
    { key: 'konum', label: 'Konum' },
    { key: 'deger', label: 'Alış Değeri', type: 'currency' },
    { key: 'edinimTarihi', label: 'Edinim Tarihi' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'kod', label: 'Demirbaş Kodu' },
    { key: 'ad', label: 'Adı' },
    { key: 'kategori', label: 'Kategori', type: 'select', options: ['Makine & Teçhizat', 'Araç & Gereç', 'Bilgisayar & Teknoloji', 'Mobilya & Ofis', 'Bina & Yapı', 'Tarım Makinesi', 'Hayvancılık Ekipmanı', 'Diğer'] },
    { key: 'konum', label: 'Konum / Departman' },
    { key: 'deger', label: 'Alış Değeri (₺)', type: 'number' },
    { key: 'edinimTarihi', label: 'Edinim Tarihi' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Bakımda', 'Hurda', 'Devredildi', 'Kayıp'] },
  ];
  data = [
    { kod: 'DMB-001', ad: 'Traktör John Deere 6M', kategori: 'Tarım Makinesi', konum: 'Çiftlik A', deger: 1850000, edinimTarihi: '2022-04-10', durum: 'Aktif' },
    { kod: 'DMB-002', ad: 'Sulama Pompası', kategori: 'Tarım Makinesi', konum: 'Parsel A-01', deger: 48000, edinimTarihi: '2021-07-20', durum: 'Aktif' },
    { kod: 'DMB-003', ad: 'Depo Binası', kategori: 'Bina & Yapı', konum: 'Merkez', deger: 2200000, edinimTarihi: '2019-01-15', durum: 'Aktif' },
    { kod: 'DMB-004', ad: 'Kombine Harman Makinesi', kategori: 'Tarım Makinesi', konum: 'Çiftlik B', deger: 3200000, edinimTarihi: '2023-08-05', durum: 'Aktif' },
    { kod: 'DMB-005', ad: 'Eski Çapa Makinesi', kategori: 'Tarım Makinesi', konum: 'Ambar', deger: 25000, edinimTarihi: '2015-03-12', durum: 'Hurda' },
    { kod: 'DMB-006', ad: 'Ofis Bilgisayar Seti', kategori: 'Bilgisayar & Teknoloji', konum: 'Ofis', deger: 45000, edinimTarihi: '2023-01-10', durum: 'Aktif' },
  ];
}
