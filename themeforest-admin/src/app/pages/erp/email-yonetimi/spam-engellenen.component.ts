import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({
  selector: 'app-spam-engellenen',
  standalone: true,
  imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Spam & Engellenen" subtitle="Spam kurallari, engelli gonderenler ve sapma tespiti" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class SpamEngellenenComponent {
  cols: ErpColumn[] = [
    { key: 'kaynak', label: 'Kaynak' },
    { key: 'neden', label: 'Neden' },
    { key: 'riskSkoru', label: 'Risk Skoru' },
    { key: 'aksiyon', label: 'Aksiyon', type: 'badge' },
    { key: 'sonGorulme', label: 'Son Gorulme' },
  ];

  fields: ErpField[] = [
    { key: 'kaynak', label: 'Mail / Domain / IP' },
    { key: 'neden', label: 'Neden' },
    { key: 'riskSkoru', label: 'Risk Skoru (0-100)', type: 'number' },
    { key: 'aksiyon', label: 'Aksiyon', type: 'select', options: ['Engellendi', 'Spam Kutusuna Tasindi', 'Karantina', 'Gecici Izin'] },
    { key: 'sonGorulme', label: 'Son Gorulme (YYYY-MM-DD HH:mm)' },
  ];

  data = [
    { kaynak: 'offer@fake-invoice.net', neden: 'Sahte fatura kalibi', riskSkoru: 96, aksiyon: 'Karantina', sonGorulme: '2026-04-27 10:44' },
    { kaynak: 'promo@bulkpromo.xyz', neden: 'Toplu tanitim/istenmeyen icerik', riskSkoru: 88, aksiyon: 'Spam Kutusuna Tasindi', sonGorulme: '2026-04-27 09:11' },
    { kaynak: 'finance-update@spoofed.com', neden: 'Domain spoofing tespiti', riskSkoru: 99, aksiyon: 'Engellendi', sonGorulme: '2026-04-26 22:03' },
    { kaynak: '192.168.44.21', neden: 'Anomali: dakikada yuksek mail cikisi', riskSkoru: 81, aksiyon: 'Gecici Izin', sonGorulme: '2026-04-26 16:28' },
  ];
}
