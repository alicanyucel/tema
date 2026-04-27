import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-calisma-akisi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Çalışma Akışı ve İşbirliği" subtitle="Sosyal iş akışı ve ekip işbirliği yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class CalismAkisiComponent {
  cols: ErpColumn[] = [
    { key: 'akis', label: 'Akış Adı' }, { key: 'ekip', label: 'Ekip' },
    { key: 'gorevSayisi', label: 'Görev Sayısı' }, { key: 'tamamlanan', label: 'Tamamlanan' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'akis', label: 'Akış Adı' }, { key: 'ekip', label: 'Ekip/Departman' },
    { key: 'gorevSayisi', label: 'Toplam Görev', type: 'number' }, { key: 'tamamlanan', label: 'Tamamlanan Görev', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Tamamlandı', 'Beklemede', 'İptal'] }];
  data = [
    { akis: 'Ürün Lansmanı', ekip: 'Pazarlama', gorevSayisi: 24, tamamlanan: 18, durum: 'Aktif' },
    { akis: 'Q2 Bütçe Planı', ekip: 'Finans', gorevSayisi: 12, tamamlanan: 12, durum: 'Tamamlandı' },
    { akis: 'IT Altyapı Yenileme', ekip: 'IT', gorevSayisi: 35, tamamlanan: 8, durum: 'Aktif' },
    { akis: 'Satış Eğitimi', ekip: 'İK', gorevSayisi: 8, tamamlanan: 0, durum: 'Beklemede' },
    { akis: 'Müşteri Anketi', ekip: 'Satış', gorevSayisi: 6, tamamlanan: 3, durum: 'Aktif' }];
}
