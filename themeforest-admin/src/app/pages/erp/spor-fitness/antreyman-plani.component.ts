import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-antreyman-plani', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Antrenman Planı" subtitle="Bireysel üye antrenman programı yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class AntreymanPlaniComponent {
  cols: ErpColumn[] = [
    { key: 'uye', label: 'Üye' }, { key: 'program', label: 'Program' },
    { key: 'seansHafta', label: 'Seans/Hafta' }, { key: 'ilerleme', label: 'İlerleme %' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'uye', label: 'Üye Adı' }, { key: 'program', label: 'Program Türü', type: 'select', options: ['Kilo Verme', 'Kas Kazanma', 'Dayanıklılık', 'Rehabilitasyon', 'Genel Fitness'] },
    { key: 'antrenor', label: 'Antrenör' }, { key: 'seansHafta', label: 'Haftalık Seans', type: 'number' },
    { key: 'ilerleme', label: 'Program İlerleme %', type: 'number' }, { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Tamamlandı', 'Askıya Alındı', 'Revize Edildi'] }];
  data = [
    { uye: 'Ahmet Kaya', program: 'Kilo Verme', antrenor: 'Selim T.', seansHafta: 4, ilerleme: 65, durum: 'Aktif' },
    { uye: 'Berrak Aslan', program: 'Dayanıklılık', antrenor: 'Elif M.', seansHafta: 5, ilerleme: 100, durum: 'Tamamlandı' },
    { uye: 'Cemre Doğan', program: 'Rehabilitasyon', antrenor: 'Dr. Murat K.', seansHafta: 3, ilerleme: 40, durum: 'Aktif' },
    { uye: 'Doruk Şen', program: 'Kas Kazanma', antrenor: 'Selim T.', seansHafta: 5, ilerleme: 25, durum: 'Aktif' },
    { uye: 'Elif Bora', program: 'Genel Fitness', antrenor: '-', seansHafta: 0, ilerleme: 0, durum: 'Askıya Alındı' }];
}
