import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-veri-etiketleme', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Veri Etiketleme" subtitle="ML model eğitimi için veri seti hazırlama" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class VeriEtiketlemeComponent {
  cols: ErpColumn[] = [
    { key: 'veriSeti', label: 'Veri Seti' }, { key: 'kayitSayisi', label: 'Kayıt Sayısı' },
    { key: 'etiketlenen', label: 'Etiketlenen' }, { key: 'ilerleme', label: 'İlerleme %' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'veriSeti', label: 'Veri Seti Adı' }, { key: 'tur', label: 'Veri Türü', type: 'select', options: ['Görüntü', 'Metin', 'Sayısal', 'Ses', 'Zaman Serisi'] },
    { key: 'kayitSayisi', label: 'Toplam Kayıt', type: 'number' }, { key: 'etiketlenen', label: 'Etiketlenen Kayıt', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Devam Ediyor', 'Tamamlandı', 'İnceleme', 'Onaylandı'] }];
  data = [
    { veriSeti: 'Ürün Görsel DS-01', tur: 'Görüntü', kayitSayisi: 50000, etiketlenen: 50000, ilerleme: 100, durum: 'Onaylandı' },
    { veriSeti: 'Müşteri Yorum DS-02', tur: 'Metin', kayitSayisi: 25000, etiketlenen: 22500, ilerleme: 90, durum: 'İnceleme' },
    { veriSeti: 'Satış Zaman DS-03', tur: 'Zaman Serisi', kayitSayisi: 100000, etiketlenen: 65000, ilerleme: 65, durum: 'Devam Ediyor' },
    { veriSeti: 'Arıza Ses DS-04', tur: 'Ses', kayitSayisi: 8000, etiketlenen: 3200, ilerleme: 40, durum: 'Devam Ediyor' },
    { veriSeti: 'Finansal DS-05', tur: 'Sayısal', kayitSayisi: 200000, etiketlenen: 0, ilerleme: 0, durum: 'Devam Ediyor' }];
}
