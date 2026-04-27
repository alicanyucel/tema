import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-gumruk-beyan', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Gümrük Beyan ve Dış Ticaret" subtitle="İthalat-ihracat ve gümrük beyan yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class GumrukBeyanComponent {
  cols: ErpColumn[] = [
    { key: 'beyanNo', label: 'Beyan No' }, { key: 'tur', label: 'Tür' },
    { key: 'urun', label: 'Ürün/Kalem' }, { key: 'deger', label: 'Gümrük Değeri', type: 'currency' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'beyanNo', label: 'Beyan No' }, { key: 'tur', label: 'Tür', type: 'select', options: ['İthalat', 'İhracat', 'Transit', 'Geçici İthalat'] },
    { key: 'urun', label: 'Ürün/Kalem' }, { key: 'deger', label: 'Gümrük Değeri (USD)', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Hazırlanıyor', 'Onay Bekliyor', 'Onaylandı', 'Serbest Bırakıldı', 'İptal'] }];
  data = [
    { beyanNo: 'IHR-2024-0156', tur: 'İhracat', urun: 'Makine Parçaları', deger: 125000, durum: 'Serbest Bırakıldı' },
    { beyanNo: 'ITH-2024-0234', tur: 'İthalat', urun: 'Elektronik Komponent', deger: 85000, durum: 'Onaylandı' },
    { beyanNo: 'IHR-2024-0178', tur: 'İhracat', urun: 'Tekstil Ürünleri', deger: 45000, durum: 'Onay Bekliyor' },
    { beyanNo: 'ITH-2024-0289', tur: 'İthalat', urun: 'Hammadde', deger: 210000, durum: 'Hazırlanıyor' },
    { beyanNo: 'TRN-2024-0045', tur: 'Transit', urun: 'Otomotiv Parçası', deger: 320000, durum: 'Serbest Bırakıldı' }];
}
