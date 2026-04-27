import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-gonulluler', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Gönüllülük ve CSR Yönetimi" subtitle="Sosyal sorumluluk ve gönüllülük program takibi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class GonullularComponent {
  cols: ErpColumn[] = [
    { key: 'program', label: 'Program' }, { key: 'katilimci', label: 'Katılımcı' },
    { key: 'saat', label: 'Toplam Saat' }, { key: 'etki', label: 'Etki' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'program', label: 'Program Adı' }, { key: 'tur', label: 'Program Türü', type: 'select', options: ['Çevre', 'Eğitim', 'Sağlık', 'Toplum', 'Hayvan Hakları'] },
    { key: 'katilimci', label: 'Katılımcı Sayısı', type: 'number' }, { key: 'saat', label: 'Toplam Gönüllülük Saati', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Tamamlandı', 'Planlandı'] }];
  data = [
    { program: 'Orman Dikme', tur: 'Çevre', katilimci: 145, saat: 870, etki: '1200 ağaç dikildi', durum: 'Tamamlandı' },
    { program: 'Kod Öğren', tur: 'Eğitim', katilimci: 38, saat: 456, etki: '320 öğrenci eğitildi', durum: 'Aktif' },
    { program: 'Kan Bağışı', tur: 'Sağlık', katilimci: 89, saat: 89, etki: '89 ünite kan', durum: 'Tamamlandı' },
    { program: 'Mahallem Temiz', tur: 'Çevre', katilimci: 62, saat: 186, etki: '3 mahalle temizlendi', durum: 'Aktif' },
    { program: 'Kış Yardımı', tur: 'Toplum', katilimci: 0, saat: 0, etki: 'Planlanıyor', durum: 'Planlandı' }];
}
