import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-saglik-takip', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Çalışan Sağlık ve Wellbeing" subtitle="Dijital sağlık takip ve program yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class SaglikTakipComponent {
  cols: ErpColumn[] = [
    { key: 'program', label: 'Program' }, { key: 'katilimci', label: 'Katılımcı' },
    { key: 'memnuniyet', label: 'Memnuniyet' }, { key: 'etki', label: 'Etki Skoru' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'program', label: 'Program Adı' }, { key: 'tur', label: 'Tür', type: 'select', options: ['Fiziksel Sağlık', 'Mental Sağlık', 'Beslenme', 'Spor', 'Meditatif'] },
    { key: 'katilimci', label: 'Katılımcı Sayısı', type: 'number' }, { key: 'memnuniyet', label: 'Memnuniyet (1-5)', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Tamamlandı', 'Planlandı'] }];
  data = [
    { program: 'Yürüyüş Meydan Okuma', tur: 'Fiziksel Sağlık', katilimci: 180, memnuniyet: 4.5, durum: 'Aktif' },
    { program: 'Mindfulness Atölyesi', tur: 'Mental Sağlık', katilimci: 65, memnuniyet: 4.8, durum: 'Aktif' },
    { program: 'Sağlıklı Beslenme Haftası', tur: 'Beslenme', katilimci: 220, memnuniyet: 4.2, durum: 'Tamamlandı' },
    { program: 'Şirket Spor Günü', tur: 'Spor', katilimci: 0, memnuniyet: 0, durum: 'Planlandı' },
    { program: 'Nefes Egzersizleri', tur: 'Meditatif', katilimci: 45, memnuniyet: 4.6, durum: 'Aktif' }];
}
