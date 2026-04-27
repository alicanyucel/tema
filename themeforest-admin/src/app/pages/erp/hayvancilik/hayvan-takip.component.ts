import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-hayvan-takip', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Hayvan Takibi" subtitle="Sürü ve bireysel hayvan kayıtları" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class HayvanTakipComponent {
  cols: ErpColumn[] = [
    { key: 'kupeno', label: 'Küpe No' },
    { key: 'tur', label: 'Tür', type: 'badge' },
    { key: 'irk', label: 'Irk' },
    { key: 'yas', label: 'Yaş (ay)' },
    { key: 'agirlik', label: 'Ağırlık (kg)' },
    { key: 'ahir', label: 'Ahır/Padok' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'kupeno', label: 'Küpe / Çip No' },
    { key: 'tur', label: 'Tür', type: 'select', options: ['Büyükbaş', 'Küçükbaş', 'Kanatlı', 'Domuz', 'At', 'Diğer'] },
    { key: 'irk', label: 'Irk' },
    { key: 'yas', label: 'Yaş (ay)', type: 'number' },
    { key: 'agirlik', label: 'Canlı Ağırlık (kg)', type: 'number' },
    { key: 'ahir', label: 'Ahır / Padok' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Sağlıklı', 'Hasta', 'Gebe', 'Doğum Sonrası', 'Satışa Hazır', 'Karantina'] },
  ];
  data = [
    { kupeno: 'TR-00125-001', tur: 'Büyükbaş', irk: 'Holstein', yas: 36, agirlik: 580, ahir: 'Ahır-A', durum: 'Sağlıklı' },
    { kupeno: 'TR-00125-002', tur: 'Büyükbaş', irk: 'Simental', yas: 48, agirlik: 650, ahir: 'Ahır-A', durum: 'Gebe' },
    { kupeno: 'TR-00125-015', tur: 'Büyükbaş', irk: 'Jersey', yas: 24, agirlik: 420, ahir: 'Ahır-B', durum: 'Hasta' },
    { kupeno: 'TR-00210-001', tur: 'Küçükbaş', irk: 'Merinos', yas: 18, agirlik: 65, ahir: 'Padok-1', durum: 'Sağlıklı' },
    { kupeno: 'TR-00210-040', tur: 'Küçükbaş', irk: 'Akkaraman', yas: 30, agirlik: 72, ahir: 'Padok-1', durum: 'Satışa Hazır' },
    { kupeno: 'TR-00300-001', tur: 'Kanatlı', irk: 'Ross 308', yas: 2, agirlik: 2.4, ahir: 'Kümes-1', durum: 'Sağlıklı' },
  ];
}
