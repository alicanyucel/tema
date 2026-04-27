import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-etkinlik-yonetimi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Etkinlik ve Sanat Yönetimi" subtitle="Kültürel etkinlik ve koleksiyon takibi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class EtkinlikYonetimiComponent {
  cols: ErpColumn[] = [
    { key: 'etkinlik', label: 'Etkinlik' }, { key: 'tur', label: 'Tür' },
    { key: 'tarih', label: 'Tarih' }, { key: 'katilimci', label: 'Katılımcı' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'etkinlik', label: 'Etkinlik Adı' }, { key: 'tur', label: 'Tür', type: 'select', options: ['Sergi', 'Konser', 'Tiyatro', 'Festival', 'Ödül Töreni'] },
    { key: 'tarih', label: 'Tarih' }, { key: 'katilimci', label: 'Beklenen Katılımcı', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Planlandı', 'Satışta', 'Tamamlandı', 'İptal'] }];
  data = [
    { etkinlik: 'Çağdaş Sanat Sergisi', tur: 'Sergi', tarih: '2024-05-10', katilimci: 2500, durum: 'Planlandı' },
    { etkinlik: 'Klasik Müzik Gecesi', tur: 'Konser', tarih: '2024-05-25', katilimci: 800, durum: 'Satışta' },
    { etkinlik: 'Bahar Festivali', tur: 'Festival', tarih: '2024-04-15', katilimci: 15000, durum: 'Tamamlandı' },
    { etkinlik: 'Şehir Tiyatrosu', tur: 'Tiyatro', tarih: '2024-06-01', katilimci: 400, durum: 'Planlandı' },
    { etkinlik: 'Yılın Sanatçısı', tur: 'Ödül Töreni', tarih: '2024-12-15', katilimci: 600, durum: 'Planlandı' }];
}
