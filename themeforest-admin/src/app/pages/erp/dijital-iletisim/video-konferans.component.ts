import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-video-konferans', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Video Konferans Yönetimi" subtitle="Kurumsal görüntülü toplantı planlama ve kayıtlar" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class VideoKonferansComponent {
  cols: ErpColumn[] = [
    { key: 'toplanti', label: 'Toplantı' }, { key: 'katilimci', label: 'Katılımcı' },
    { key: 'tarih', label: 'Tarih/Saat' }, { key: 'sure', label: 'Süre (dk)' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'toplanti', label: 'Toplantı Konusu' }, { key: 'platform', label: 'Platform', type: 'select', options: ['Teams', 'Zoom', 'Google Meet', 'Webex', 'Jitsi'] },
    { key: 'katilimci', label: 'Katılımcı Sayısı', type: 'number' }, { key: 'tarih', label: 'Tarih/Saat' },
    { key: 'sure', label: 'Süre (dk)', type: 'number' }, { key: 'durum', label: 'Durum', type: 'select', options: ['Planlandı', 'Devam Ediyor', 'Tamamlandı', 'İptal'] }];
  data = [
    { toplanti: 'Q2 Satış Değerlendirme', platform: 'Teams', katilimci: 24, tarih: '28.04.2025 14:00', sure: 90, durum: 'Planlandı' },
    { toplanti: 'Ürün Geliştirme Sprint', platform: 'Zoom', katilimci: 8, tarih: '27.04.2025 10:00', sure: 60, durum: 'Tamamlandı' },
    { toplanti: 'Tedarikçi Görüşmesi', platform: 'Google Meet', katilimci: 4, tarih: '27.04.2025 15:30', sure: 45, durum: 'Tamamlandı' },
    { toplanti: 'Yönetim Kurulu', platform: 'Zoom', katilimci: 12, tarih: '29.04.2025 09:00', sure: 120, durum: 'Planlandı' },
    { toplanti: 'Müşteri Demosu', platform: 'Teams', katilimci: 6, tarih: '26.04.2025 16:00', sure: 0, durum: 'İptal' }];
}
