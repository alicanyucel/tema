import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-hukuki-davalar', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Hukuki Davalar" subtitle="Şirket dava ve hukuki süreç takibi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class HukukiDavalarComponent {
  cols: ErpColumn[] = [
    { key: 'davaNo', label: 'Dava No' }, { key: 'konu', label: 'Konu' },
    { key: 'avukat', label: 'Avukat' }, { key: 'durusma', label: 'Duruşma Tarihi' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'davaNo', label: 'Dava No' }, { key: 'konu', label: 'Dava Konusu' },
    { key: 'avukat', label: 'Avukat / Hukuk Firması' }, { key: 'durusma', label: 'Sonraki Duruşma' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Devam Ediyor', 'Kazanıldı', 'Kaybedildi', 'Uzlaşma'] }];
  data = [
    { davaNo: 'DV-2024-001', konu: 'Alacak Davası', avukat: 'Av. Kemal Çelik', durusma: '2024-05-15', durum: 'Devam Ediyor' },
    { davaNo: 'DV-2024-002', konu: 'İş Hukuku', avukat: 'Av. Selin Öz', durusma: '2024-06-20', durum: 'Devam Ediyor' },
    { davaNo: 'DV-2023-003', konu: 'Ticari Uyuşmazlık', avukat: 'Av. Kemal Çelik', durusma: '-', durum: 'Kazanıldı' },
    { davaNo: 'DV-2023-004', konu: 'Marka İhlali', avukat: 'IP Hukuk Ltd.', durusma: '-', durum: 'Uzlaşma' },
    { davaNo: 'DV-2022-005', konu: 'Vergi Uyuşmazlığı', avukat: 'Av. Selin Öz', durusma: '-', durum: 'Kazanıldı' }];
}
