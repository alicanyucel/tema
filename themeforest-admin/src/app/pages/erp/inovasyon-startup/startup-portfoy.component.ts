import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-startup-portfoy', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Start-up Portföyü" subtitle="Yatırım yapılan start-up ve girişim takibi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class StartupPortfoyComponent {
  cols: ErpColumn[] = [
    { key: 'startup', label: 'Start-up' }, { key: 'alan', label: 'Faaliyet Alanı' },
    { key: 'yatirim', label: 'Yatırım', type: 'currency' }, { key: 'asama', label: 'Aşama' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'startup', label: 'Start-up Adı' }, { key: 'alan', label: 'Faaliyet Alanı', type: 'select', options: ['FinTech', 'HealthTech', 'AgriTech', 'EdTech', 'DeepTech'] },
    { key: 'yatirim', label: 'Yatırım Tutarı', type: 'number' }, { key: 'asama', label: 'Aşama', type: 'select', options: ['Pre-Seed', 'Seed', 'Series A', 'Series B'] },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Exit', 'Tasfiye'] }];
  data = [
    { startup: 'PayNow', alan: 'FinTech', yatirim: 500000, asama: 'Seed', durum: 'Aktif' },
    { startup: 'HealthAI', alan: 'HealthTech', yatirim: 1200000, asama: 'Series A', durum: 'Aktif' },
    { startup: 'FarmBot', alan: 'AgriTech', yatirim: 250000, asama: 'Pre-Seed', durum: 'Aktif' },
    { startup: 'LearnFast', alan: 'EdTech', yatirim: 750000, asama: 'Seed', durum: 'Aktif' },
    { startup: 'DataChip', alan: 'DeepTech', yatirim: 2000000, asama: 'Series B', durum: 'Exit' }];
}
