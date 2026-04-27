import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-chatbot-musteri', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="AI Müşteri Hizmetleri" subtitle="Chatbot ve otomatik müşteri destek yönetimi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class ChatbotMusteriComponent {
  cols: ErpColumn[] = [
    { key: 'talepNo', label: 'Talep No' }, { key: 'musteri', label: 'Müşteri' },
    { key: 'konu', label: 'Konu' }, { key: 'kanal', label: 'Kanal' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'talepNo', label: 'Talep No' }, { key: 'musteri', label: 'Müşteri' },
    { key: 'konu', label: 'Talep Konusu' }, { key: 'kanal', label: 'Kanal', type: 'select', options: ['Chatbot', 'E-posta', 'Telefon', 'WhatsApp', 'Web Form'] },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Açık', 'AI Çözümlendi', 'İnsan Desteğine Yönlendirildi', 'Tamamlandı'] }];
  data = [
    { talepNo: 'TKP-001', musteri: 'Nova Market', konu: 'Fatura Sorgusu', kanal: 'Chatbot', durum: 'AI Çözümlendi' },
    { talepNo: 'TKP-002', musteri: 'Alfa Ltd.', konu: 'Ürün İadesi', kanal: 'WhatsApp', durum: 'İnsan Desteğine Yönlendirildi' },
    { talepNo: 'TKP-003', musteri: 'Beta Şirket', konu: 'Şifre Sıfırlama', kanal: 'Chatbot', durum: 'AI Çözümlendi' },
    { talepNo: 'TKP-004', musteri: 'Gama Corp.', konu: 'Teknik Sorun', kanal: 'Telefon', durum: 'Tamamlandı' },
    { talepNo: 'TKP-005', musteri: 'Delta Market', konu: 'Fiyat Bilgisi', kanal: 'Chatbot', durum: 'Açık' }];
}
