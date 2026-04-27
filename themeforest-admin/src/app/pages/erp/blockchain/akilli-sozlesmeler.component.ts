import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-akilli-sozlesmeler', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Akıllı Sözleşmeler" subtitle="Blockchain tabanlı akıllı sözleşme yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class AkilliSozlesmelerComponent {
  cols: ErpColumn[] = [
    { key: 'sozlesmeId', label: 'Sözleşme ID' }, { key: 'taraflar', label: 'Taraflar' },
    { key: 'deger', label: 'Değer', type: 'currency' }, { key: 'olusturma', label: 'Oluşturma' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'sozlesmeId', label: 'Sözleşme Hash ID' }, { key: 'taraflar', label: 'Taraflar' },
    { key: 'deger', label: 'Sözleşme Değeri', type: 'number' }, { key: 'olusturma', label: 'Oluşturma Tarihi' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Tamamlandı', 'İptal', 'Uyuşmazlık'] }];
  data = [
    { sozlesmeId: '0x4f8a...b12c', taraflar: 'Şirket ↔ Nova Market', deger: 450000, olusturma: '2024-01-15', durum: 'Aktif' },
    { sozlesmeId: '0x7e2d...c89f', taraflar: 'Şirket ↔ TechSupply', deger: 128000, olusturma: '2024-02-10', durum: 'Tamamlandı' },
    { sozlesmeId: '0x3a1b...d45e', taraflar: 'Şirket ↔ Lojistik', deger: 85000, olusturma: '2024-03-01', durum: 'Aktif' },
    { sozlesmeId: '0x9c3f...a67b', taraflar: 'Şirket ↔ IT Danış.', deger: 200000, olusturma: '2024-04-05', durum: 'Aktif' },
    { sozlesmeId: '0x1d5e...f23a', taraflar: 'Şirket ↔ Reklam Ajans', deger: 45000, olusturma: '2023-11-20', durum: 'Tamamlandı' }];
}
