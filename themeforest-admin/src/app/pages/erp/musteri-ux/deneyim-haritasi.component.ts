import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-deneyim-haritasi', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Müşteri Deneyim Haritası" subtitle="Müşteri yolculuğu ve temas noktası analizi" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class DeneyimHaritasiComponent {
  cols: ErpColumn[] = [
    { key: 'aşama', label: 'Aşama' }, { key: 'temasNoktasi', label: 'Temas Noktası' },
    { key: 'memnuniyet', label: 'Memnuniyet' }, { key: 'aciklar', label: 'Açıklar' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'aşama', label: 'Yolculuk Aşaması', type: 'select', options: ['Farkındalık', 'Değerlendirme', 'Satın Alma', 'Kullanım', 'Savunuculuk'] },
    { key: 'temasNoktasi', label: 'Temas Noktası' }, { key: 'memnuniyet', label: 'Memnuniyet (1-5)', type: 'number' },
    { key: 'aciklar', label: 'Açıklar/Sorunlar', type: 'textarea' }, { key: 'durum', label: 'Durum', type: 'select', options: ['İyi', 'İyileştirme Gerekiyor', 'Kritik'] }];
  data = [
    { aşama: 'Farkındalık', temasNoktasi: 'Web Sitesi', memnuniyet: 3.8, aciklar: 'Yavaş yükleme', durum: 'İyileştirme Gerekiyor' },
    { aşama: 'Değerlendirme', temasNoktasi: 'Demo Talebi', memnuniyet: 4.2, aciklar: '-', durum: 'İyi' },
    { aşama: 'Satın Alma', temasNoktasi: 'Sözleşme', memnuniyet: 3.5, aciklar: 'Karmaşık süreç', durum: 'İyileştirme Gerekiyor' },
    { aşama: 'Kullanım', temasNoktasi: 'Onboarding', memnuniyet: 2.9, aciklar: 'Yetersiz eğitim', durum: 'Kritik' },
    { aşama: 'Savunuculuk', temasNoktasi: 'Referans Programı', memnuniyet: 4.5, aciklar: '-', durum: 'İyi' }];
}
