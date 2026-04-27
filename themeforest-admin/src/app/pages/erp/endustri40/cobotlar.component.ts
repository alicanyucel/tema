import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-cobotlar', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Cobot Yönetimi" subtitle="İşbirlikçi robot (cobot) izleme ve görev yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class CobotlarComponent {
  cols: ErpColumn[] = [
    { key: 'cobot', label: 'Cobot Adı' }, { key: 'gorev', label: 'Görev' },
    { key: 'verimlilik', label: 'Verimlilik %' }, { key: 'calismaSaati', label: 'Çalışma (saat/gün)' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'cobot', label: 'Cobot Adı/Modeli' }, { key: 'gorev', label: 'Atanan Görev', type: 'select', options: ['Montaj', 'Paketleme', 'Kalite Kontrol', 'Malzeme Taşıma', 'Kaynak'] },
    { key: 'verimlilik', label: 'Verimlilik %', type: 'number' }, { key: 'calismaSaati', label: 'Günlük Çalışma (saat)', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Çalışıyor', 'Bakımda', 'Bekleniyor', 'Arızalı'] }];
  data = [
    { cobot: 'UR10-A1', gorev: 'Montaj', verimlilik: 94, calismaSaati: 18, durum: 'Çalışıyor' },
    { cobot: 'KUKA-LBR-B2', gorev: 'Kalite Kontrol', verimlilik: 98, calismaSaati: 22, durum: 'Çalışıyor' },
    { cobot: 'ABB-YuMi-C3', gorev: 'Paketleme', verimlilik: 89, calismaSaati: 0, durum: 'Bakımda' },
    { cobot: 'FANUC-CRX-D4', gorev: 'Malzeme Taşıma', verimlilik: 91, calismaSaati: 16, durum: 'Çalışıyor' },
    { cobot: 'Doosan-E5', gorev: 'Kaynak', verimlilik: 0, calismaSaati: 0, durum: 'Arızalı' }];
}
