import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-dijital-varlik', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Dijital Varlık Yönetimi" subtitle="Blockchain tabanlı dijital varlık ve token yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class DijitalVarlikComponent {
  cols: ErpColumn[] = [
    { key: 'varlik', label: 'Varlık' }, { key: 'tur', label: 'Tür' },
    { key: 'miktar', label: 'Miktar' }, { key: 'deger', label: 'Değer (₺)', type: 'currency' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'varlik', label: 'Varlık Adı' }, { key: 'tur', label: 'Varlık Türü', type: 'select', options: ['Mülkiyet Tokeni', 'Stok Tokeni', 'Sadakat Puanı', 'NFT Sertifika', 'CO2 Kredisi'] },
    { key: 'miktar', label: 'Miktar' }, { key: 'deger', label: 'Değer (₺)', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Kilitli', 'Transfer Edildi', 'Yakıldı'] }];
  data = [
    { varlik: 'Depo A Mülkiyet', tur: 'Mülkiyet Tokeni', miktar: '1000 TOKEN', deger: 4500000, durum: 'Aktif' },
    { varlik: 'Ürün Parti #A01', tur: 'Stok Tokeni', miktar: '500 TOKEN', deger: 250000, durum: 'Aktif' },
    { varlik: 'Müşteri Puan #C45', tur: 'Sadakat Puanı', miktar: '150.000 PUAN', deger: 15000, durum: 'Aktif' },
    { varlik: 'ISO Sertifika 2024', tur: 'NFT Sertifika', miktar: '1 NFT', deger: 5000, durum: 'Aktif' },
    { varlik: 'Karbon Kredisi Q1', tur: 'CO2 Kredisi', miktar: '200 TON', deger: 180000, durum: 'Transfer Edildi' }];
}
