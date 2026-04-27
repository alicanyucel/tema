import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-insaat-modulu', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="İnşaat Sektör Modülü" subtitle="İnşaat projeleri hakediş ve metraj yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class InsaatModuluComponent {
  cols: ErpColumn[] = [
    { key: 'proje', label: 'Proje' }, { key: 'hakedis', label: 'Son Hakediş', type: 'currency' },
    { key: 'tamamlanma', label: 'Tamamlanma %' }, { key: 'isgucuGun', label: 'İşgücü (Gün)' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'proje', label: 'Proje Adı' }, { key: 'tur', label: 'Proje Türü', type: 'select', options: ['Konut', 'Ticari', 'Altyapı', 'Endüstriyel', 'Hastane'] },
    { key: 'hakedis', label: 'Son Hakediş Tutarı (₺)', type: 'number' }, { key: 'tamamlanma', label: 'Tamamlanma %', type: 'number' },
    { key: 'isgucuGun', label: 'İşgücü (Adam/Gün)', type: 'number' }, { key: 'durum', label: 'Durum', type: 'select', options: ['İnşaat Devam', 'Tamamlandı', 'Askıya Alındı', 'Planlama'] }];
  data = [
    { proje: 'Çevre Yolu Köprüsü', tur: 'Altyapı', hakedis: 4500000, tamamlanma: 68, isgucuGun: 12400, durum: 'İnşaat Devam' },
    { proje: 'Rezidans Tower A', tur: 'Konut', hakedis: 2800000, tamamlanma: 45, isgucuGun: 8200, durum: 'İnşaat Devam' },
    { proje: 'AVM Renovasyon', tur: 'Ticari', hakedis: 1200000, tamamlanma: 100, isgucuGun: 3500, durum: 'Tamamlandı' },
    { proje: 'Fabrika Binası', tur: 'Endüstriyel', hakedis: 0, tamamlanma: 0, isgucuGun: 0, durum: 'Planlama' },
    { proje: 'Şehir Hastanesi', tur: 'Hastane', hakedis: 6800000, tamamlanma: 32, isgucuGun: 18700, durum: 'İnşaat Devam' }];
}
