import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-surekli-iyilestirme', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Sürekli İyileştirme" subtitle="Kaizen ve iyileştirme aksiyonları" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class SurekliIyilestirmeComponent {
  cols: ErpColumn[] = [
    { key: 'baslik', label: 'İyileştirme Başlığı' },
    { key: 'departman', label: 'Departman' },
    { key: 'sorumlu', label: 'Sorumlu' },
    { key: 'hedefTarih', label: 'Hedef Tarih' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'baslik', label: 'İyileştirme Başlığı' },
    { key: 'departman', label: 'Departman', type: 'select', options: ['Üretim', 'Lojistik', 'Satın Alma', 'İK', 'IT'] },
    { key: 'sorumlu', label: 'Sorumlu' },
    { key: 'hedefTarih', label: 'Hedef Tarih' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Planlandı', 'Devam Ediyor', 'Tamamlandı'] },
  ];
  data = [
    { baslik: 'Üretim hattı döngü süresi azaltma', departman: 'Üretim', sorumlu: 'Ali Can', hedefTarih: '2024-06-01', durum: 'Devam Ediyor' },
    { baslik: 'Depo düzeni optimizasyonu', departman: 'Lojistik', sorumlu: 'Mert Demir', hedefTarih: '2024-05-15', durum: 'Tamamlandı' },
    { baslik: 'Tedarikçi değerlendirme sistemi', departman: 'Satın Alma', sorumlu: 'Aylin Kara', hedefTarih: '2024-07-01', durum: 'Planlandı' },
    { baslik: 'Onboarding sürecini dijitalleştirme', departman: 'İK', sorumlu: 'Selin Usta', hedefTarih: '2024-04-30', durum: 'Devam Ediyor' },
    { baslik: 'ERP entegrasyonu hızlandırma', departman: 'IT', sorumlu: 'Ali Can', hedefTarih: '2024-08-01', durum: 'Planlandı' },
  ];
}
