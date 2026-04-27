import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-gamification', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Gamification & Ödül Sistemi" subtitle="Öğrenme oyunlaştırma ve başarı rozetleri" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class GamificationComponent {
  cols: ErpColumn[] = [
    { key: 'kullanici', label: 'Kullanıcı' }, { key: 'puan', label: 'Toplam Puan' },
    { key: 'rozet', label: 'Rozet Sayısı' }, { key: 'seviye', label: 'Seviye' }, { key: 'durum', label: 'Liderlik', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'kullanici', label: 'Kullanıcı Adı' }, { key: 'puan', label: 'Toplam Puan', type: 'number' },
    { key: 'rozet', label: 'Kazanılan Rozet', type: 'number' }, { key: 'seviye', label: 'Öğrenme Seviyesi', type: 'select', options: ['Başlangıç', 'Orta', 'İleri', 'Uzman', 'Usta'] },
    { key: 'durum', label: 'Liderlik Sırası', type: 'select', options: ['Top 10', 'Top 50', 'Top 100', 'Diğer'] }];
  data = [
    { kullanici: 'Ayşe Koyuncu', puan: 12500, rozet: 24, seviye: 'Uzman', durum: 'Top 10' },
    { kullanici: 'Mert Özdemir', puan: 10200, rozet: 18, seviye: 'İleri', durum: 'Top 10' },
    { kullanici: 'Dilek Yıldız', puan: 8700, rozet: 15, seviye: 'İleri', durum: 'Top 50' },
    { kullanici: 'Can Bulut', puan: 4300, rozet: 8, seviye: 'Orta', durum: 'Top 100' },
    { kullanici: 'Yeni Katılımcı', puan: 250, rozet: 1, seviye: 'Başlangıç', durum: 'Diğer' }];
}
