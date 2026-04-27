import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-uretim-cizelge', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Üretim Çizelgeleme" subtitle="İleri planlama ve üretim kapasitesi optimizasyonu" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class UretimCizelgeComponent {
  cols: ErpColumn[] = [
    { key: 'is', label: 'İş Emri' }, { key: 'urun', label: 'Ürün' },
    { key: 'miktar', label: 'Miktar' }, { key: 'planlanan', label: 'Planlanan Tarih' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'is', label: 'İş Emri' }, { key: 'urun', label: 'Ürün' },
    { key: 'miktar', label: 'Miktar', type: 'number' }, { key: 'planlanan', label: 'Planlanan Tarih' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Planlandı', 'Üretimde', 'Tamamlandı', 'Gecikti'] }];
  data = [
    { is: 'IE-2024-100', urun: 'Ürün A', miktar: 500, planlanan: '2024-04-30', durum: 'Planlandı' },
    { is: 'IE-2024-101', urun: 'Ürün B', miktar: 200, planlanan: '2024-04-28', durum: 'Üretimde' },
    { is: 'IE-2024-102', urun: 'Ürün C', miktar: 1000, planlanan: '2024-05-05', durum: 'Planlandı' },
    { is: 'IE-2024-103', urun: 'Ürün D', miktar: 150, planlanan: '2024-04-25', durum: 'Gecikti' },
    { is: 'IE-2024-104', urun: 'Ürün E', miktar: 800, planlanan: '2024-04-20', durum: 'Tamamlandı' }];
}
