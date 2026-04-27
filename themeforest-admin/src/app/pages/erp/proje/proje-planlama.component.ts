import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-proje-planlama', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Proje Planlama" subtitle="Proje takibi ve zaman çizelgesi" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class ProjePlanlamaComponent {
  cols: ErpColumn[] = [
    { key: 'projeNo', label: 'Proje No' },
    { key: 'projeAdi', label: 'Proje Adı' },
    { key: 'mudur', label: 'Proje Müdürü' },
    { key: 'baslangic', label: 'Başlangıç' },
    { key: 'bitis', label: 'Bitiş' },
    { key: 'ilerleme', label: 'İlerleme %' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'projeNo', label: 'Proje No' },
    { key: 'projeAdi', label: 'Proje Adı' },
    { key: 'mudur', label: 'Proje Müdürü' },
    { key: 'baslangic', label: 'Başlangıç' },
    { key: 'bitis', label: 'Bitiş' },
    { key: 'ilerleme', label: 'İlerleme %', type: 'number' },
    { key: 'aciklama', label: 'Açıklama', type: 'textarea' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Beklemede', 'Devam Ediyor', 'Tamamlandi', 'İptal'] },
  ];
  data = [
    { projeNo: 'PRJ-001', projeAdi: 'ERP Modül Geliştirme', mudur: 'Ece Yıldırım', baslangic: '01.01.2024', bitis: '30.06.2024', ilerleme: 65, durum: 'Devam Ediyor' },
    { projeNo: 'PRJ-002', projeAdi: 'Depo Otomasyonu', mudur: 'Mert Demir', baslangic: '01.02.2024', bitis: '31.05.2024', ilerleme: 40, durum: 'Devam Ediyor' },
    { projeNo: 'PRJ-003', projeAdi: 'CRM Entegrasyonu', mudur: 'Selin Usta', baslangic: '15.01.2024', bitis: '15.03.2024', ilerleme: 100, durum: 'Tamamlandi' },
    { projeNo: 'PRJ-004', projeAdi: 'B2B Portal', mudur: 'Can Arslan', baslangic: '01.04.2024', bitis: '30.09.2024', ilerleme: 20, durum: 'Devam Ediyor' },
  ];
}
