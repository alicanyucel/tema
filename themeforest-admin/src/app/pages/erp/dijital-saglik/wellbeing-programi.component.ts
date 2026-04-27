import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-wellbeing-programi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Wellbeing Programı" subtitle="Çalışan sağlık ve refah programı yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class WellbeingProgramiComponent {
  cols: ErpColumn[] = [
    { key: 'program', label: 'Program' }, { key: 'tur', label: 'Tür' },
    { key: 'katilim', label: 'Katılım' }, { key: 'memnuniyet', label: 'Memnuniyet' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'program', label: 'Program Adı' }, { key: 'tur', label: 'Kategori', type: 'select', options: ['Fiziksel Sağlık', 'Mental Sağlık', 'Beslenme', 'Finansal Refah', 'Sosyal Aktivite'] },
    { key: 'katilim', label: 'Katılımcı Sayısı', type: 'number' }, { key: 'memnuniyet', label: 'Memnuniyet Puanı (1-5)', type: 'number' },
    { key: 'durum', label: 'Program Durumu', type: 'select', options: ['Aktif', 'Tamamlandı', 'Planlandı'] }];
  data = [
    { program: 'Yoga & Meditasyon', tur: 'Mental Sağlık', katilim: 85, memnuniyet: 4.7, durum: 'Aktif' },
    { program: 'Koşu Kulübü', tur: 'Fiziksel Sağlık', katilim: 120, memnuniyet: 4.5, durum: 'Aktif' },
    { program: 'Sağlıklı Beslenme', tur: 'Beslenme', katilim: 200, memnuniyet: 4.2, durum: 'Aktif' },
    { program: 'Finansal Planlama', tur: 'Finansal Refah', katilim: 65, memnuniyet: 4.4, durum: 'Tamamlandı' },
    { program: 'Takım Pikniği', tur: 'Sosyal Aktivite', katilim: 0, memnuniyet: 0, durum: 'Planlandı' }];
}
