import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-isbirligi-araclari', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="İşbirliği ve İletişim Araçları" subtitle="Dijital çalışma alanı ve ekip iletişim yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class IsbirligiAraclariComponent {
  cols: ErpColumn[] = [
    { key: 'kanal', label: 'Kanal/Araç' }, { key: 'tur', label: 'Tür' },
    { key: 'uye', label: 'Üye Sayısı' }, { key: 'mesaj', label: 'Aylık Mesaj' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'kanal', label: 'Kanal/Araç Adı' }, { key: 'tur', label: 'Tür', type: 'select', options: ['Anlık Mesajlaşma', 'Video Konferans', 'Proje Tahtası', 'Doküman Paylaşım', 'E-posta'] },
    { key: 'uye', label: 'Üye/Kullanıcı Sayısı', type: 'number' }, { key: 'mesaj', label: 'Aylık Mesaj/İşlem', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Aktif', 'Arşiv', 'Entegrasyon Bekleniyor'] }];
  data = [
    { kanal: '#genel', tur: 'Anlık Mesajlaşma', uye: 245, mesaj: 18400, durum: 'Aktif' },
    { kanal: 'Haftalık Toplantı', tur: 'Video Konferans', uye: 50, mesaj: 12, durum: 'Aktif' },
    { kanal: 'Proje Alpha', tur: 'Proje Tahtası', uye: 18, mesaj: 450, durum: 'Aktif' },
    { kanal: 'Bilgi Bankası', tur: 'Doküman Paylaşım', uye: 245, mesaj: 2100, durum: 'Aktif' },
    { kanal: 'Eski E-posta Sistemi', tur: 'E-posta', uye: 245, mesaj: 0, durum: 'Arşiv' }];
}
