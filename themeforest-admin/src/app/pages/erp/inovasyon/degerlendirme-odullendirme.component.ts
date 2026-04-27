import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-degerlendirme-odullendirme', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Değerlendirme ve Ödüllendirme" subtitle="İnovasyon katkılarının değerlendirilmesi ve ödüllendirilmesi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class DegerlendirmeOdullendirmeComponent {
  cols: ErpColumn[] = [
    { key: 'calisan', label: 'Çalışan' },
    { key: 'katki', label: 'Katkı' },
    { key: 'puan', label: 'Puan' },
    { key: 'odul', label: 'Ödül' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'calisan', label: 'Çalışan' },
    { key: 'katki', label: 'Katkı Açıklaması' },
    { key: 'puan', label: 'Puan', type: 'number' },
    { key: 'odul', label: 'Ödül' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Değerlendirmede', 'Onaylandı', 'Verildi'] },
  ];
  data = [
    { calisan: 'Ali Can', katki: 'Fatura Otomasyon Projesi', puan: 95, odul: '5.000 TL Bonus', durum: 'Verildi' },
    { calisan: 'Aylin Kara', katki: 'Enerji Tasarrufu Önerisi', puan: 80, odul: 'Ekstra İzin (3 gün)', durum: 'Onaylandı' },
    { calisan: 'Mert Demir', katki: 'Self-Servis Portal Tasarımı', puan: 72, odul: 'Eğitim Bütçesi', durum: 'Değerlendirmede' },
    { calisan: 'Selin Usta', katki: 'AI Stok Yönetimi Teklifi', puan: 88, odul: '3.000 TL Bonus', durum: 'Onaylandı' },
    { calisan: 'Burak Yıldız', katki: 'Kâğıtsız Ofis Projesi', puan: 65, odul: 'Plaket', durum: 'Değerlendirmede' },
  ];
}
