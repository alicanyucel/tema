import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-hasat-planlama', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Hasat Planlama" subtitle="Tarımsal hasat takvimi ve verim tahmini" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class HasatPlanlamaComponent {
  cols: ErpColumn[] = [
    { key: 'urun', label: 'Tarım Ürünü' }, { key: 'alan', label: 'Alan (dekar)' },
    { key: 'tahminiVerim', label: 'Tahmini Verim (ton)' }, { key: 'hasatTarihi', label: 'Hasat Tarihi' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'urun', label: 'Tarım Ürünü', type: 'select', options: ['Buğday', 'Arpa', 'Mısır', 'Ayçiçek', 'Pamuk', 'Şeker Pancarı', 'Sebze', 'Meyve'] },
    { key: 'alan', label: 'Ekim Alanı (dekar)', type: 'number' }, { key: 'tahminiVerim', label: 'Tahmini Verim (ton)', type: 'number' },
    { key: 'hasatTarihi', label: 'Planlanan Hasat Tarihi' }, { key: 'durum', label: 'Hasat Durumu', type: 'select', options: ['Büyüme', 'Olgunlaşıyor', 'Hasat Zamanı', 'Hasat Edildi', 'Depolandı'] }];
  data = [
    { urun: 'Buğday', alan: 850, tahminiVerim: 340, hasatTarihi: 'Temmuz 2025', durum: 'Büyüme' },
    { urun: 'Mısır', alan: 420, tahminiVerim: 252, hasatTarihi: 'Eylül 2025', durum: 'Büyüme' },
    { urun: 'Ayçiçek', alan: 350, tahminiVerim: 105, hasatTarihi: 'Ağustos 2025', durum: 'Büyüme' },
    { urun: 'Arpa', alan: 280, tahminiVerim: 112, hasatTarihi: 'Haziran 2025', durum: 'Olgunlaşıyor' },
    { urun: 'Domates', alan: 120, tahminiVerim: 480, hasatTarihi: 'Temmuz 2025', durum: 'Büyüme' }];
}
