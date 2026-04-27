import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-kvkk-uyum', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="KVKK Uyum Yönetimi" subtitle="Kişisel verilerin korunması mevzuat uyumu" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class KvkkUyumComponent {
  cols: ErpColumn[] = [
    { key: 'faaliyet', label: 'İşleme Faaliyeti' }, { key: 'kategori', label: 'Veri Kategorisi' },
    { key: 'dayanak', label: 'Hukuki Dayanak' }, { key: 'saklama', label: 'Saklama Süresi' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'faaliyet', label: 'İşleme Faaliyeti' }, { key: 'kategori', label: 'Veri Kategorisi', type: 'select', options: ['Kimlik', 'İletişim', 'Finansal', 'Özel Nitelikli', 'Davranışsal'] },
    { key: 'dayanak', label: 'Hukuki Dayanak', type: 'select', options: ['Açık Rıza', 'Sözleşme', 'Kanuni Yükümlülük', 'Meşru Menfaat'] },
    { key: 'saklama', label: 'Saklama Süresi' }, { key: 'durum', label: 'Uyum Durumu', type: 'select', options: ['Uyumlu', 'Eksik', 'Güncellenmeli'] }];
  data = [
    { faaliyet: 'Müşteri Verisi İşleme', kategori: 'Kimlik', dayanak: 'Sözleşme', saklama: '10 Yıl', durum: 'Uyumlu' },
    { faaliyet: 'Pazarlama E-postası', kategori: 'İletişim', dayanak: 'Açık Rıza', saklama: 'Rıza İptaline Kadar', durum: 'Uyumlu' },
    { faaliyet: 'Finansal Kayıtlar', kategori: 'Finansal', dayanak: 'Kanuni Yükümlülük', saklama: '10 Yıl', durum: 'Uyumlu' },
    { faaliyet: 'Çalışan Sağlık Kaydı', kategori: 'Özel Nitelikli', dayanak: 'Açık Rıza', saklama: '5 Yıl', durum: 'Güncellenmeli' },
    { faaliyet: 'Web Analitik', kategori: 'Davranışsal', dayanak: 'Açık Rıza', saklama: '2 Yıl', durum: 'Eksik' }];
}
