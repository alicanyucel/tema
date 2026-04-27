import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-kripto-fintech', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Kripto ve FinTech Araçları" subtitle="Kripto varlık ve yenilikçi finans modülleri" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class KriptoFintechComponent {
  cols: ErpColumn[] = [
    { key: 'varlik', label: 'Varlık' }, { key: 'tur', label: 'Tür' },
    { key: 'miktar', label: 'Miktar' }, { key: 'deger', label: 'Değer (USD)', type: 'currency' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'varlik', label: 'Varlık Adı' }, { key: 'tur', label: 'Tür', type: 'select', options: ['Bitcoin', 'Ethereum', 'Stablecoin', 'NFT', 'DeFi Token'] },
    { key: 'miktar', label: 'Miktar' }, { key: 'deger', label: 'USD Değer', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Tutuldu', 'İşlemde', 'Stake Edildi', 'Satıldı'] }];
  data = [
    { varlik: 'Bitcoin', tur: 'Bitcoin', miktar: '0.5 BTC', deger: 32500, durum: 'Tutuldu' },
    { varlik: 'Ethereum', tur: 'Ethereum', miktar: '10 ETH', deger: 35000, durum: 'Stake Edildi' },
    { varlik: 'USDC', tur: 'Stablecoin', miktar: '50.000 USDC', deger: 50000, durum: 'İşlemde' },
    { varlik: 'NFT Koleksiyon #1', tur: 'NFT', miktar: '5 adet', deger: 8500, durum: 'Tutuldu' },
    { varlik: 'Aave Token', tur: 'DeFi Token', miktar: '200 AAVE', deger: 3800, durum: 'Stake Edildi' }];
}
