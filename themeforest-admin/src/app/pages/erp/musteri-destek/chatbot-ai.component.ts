import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-chatbot-ai', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Chatbot/AI Destek" subtitle="Yapay zeka destekli müşteri etkileşim günlükleri" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class ChatbotAiComponent {
  cols: ErpColumn[] = [
    { key: 'oturumNo', label: 'Oturum No' },
    { key: 'kanal', label: 'Kanal' },
    { key: 'mesajSayisi', label: 'Mesaj Sayısı' },
    { key: 'cozumOrani', label: 'Çözüm Oranı %' },
    { key: 'durum', label: 'Durum', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'oturumNo', label: 'Oturum No' },
    { key: 'kanal', label: 'Kanal', type: 'select', options: ['Web', 'Mobil', 'WhatsApp', 'E-posta'] },
    { key: 'mesajSayisi', label: 'Mesaj Sayısı', type: 'number' },
    { key: 'cozumOrani', label: 'Çözüm Oranı %', type: 'number' },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Çözüldü', 'İnsana Devredildi', 'Terk Edildi'] },
  ];
  data = [
    { oturumNo: 'BOT-001', kanal: 'Web', mesajSayisi: 8, cozumOrani: 95, durum: 'Çözüldü' },
    { oturumNo: 'BOT-002', kanal: 'WhatsApp', mesajSayisi: 15, cozumOrani: 60, durum: 'İnsana Devredildi' },
    { oturumNo: 'BOT-003', kanal: 'Mobil', mesajSayisi: 5, cozumOrani: 100, durum: 'Çözüldü' },
    { oturumNo: 'BOT-004', kanal: 'Web', mesajSayisi: 3, cozumOrani: 0, durum: 'Terk Edildi' },
    { oturumNo: 'BOT-005', kanal: 'E-posta', mesajSayisi: 12, cozumOrani: 80, durum: 'Çözüldü' },
  ];
}
