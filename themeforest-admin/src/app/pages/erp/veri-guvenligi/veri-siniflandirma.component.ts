import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-veri-siniflandirma', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Veri Sınıflandırma" subtitle="Kurumsal veri sınıflandırma ve etiketleme" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class VeriSiniflandirmaComponent {
  cols: ErpColumn[] = [
    { key: 'kategori', label: 'Veri Kategorisi' }, { key: 'sinif', label: 'Sınıflandırma' },
    { key: 'kayitSayisi', label: 'Kayıt Sayısı' }, { key: 'koruma', label: 'Koruma Seviyesi' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'kategori', label: 'Veri Kategorisi' }, { key: 'sinif', label: 'Gizlilik Sınıfı', type: 'select', options: ['Kamuya Açık', 'Dahili', 'Gizli', 'Çok Gizli'] },
    { key: 'kayitSayisi', label: 'Kayıt Sayısı', type: 'number' }, { key: 'koruma', label: 'Koruma Seviyesi', type: 'select', options: ['Temel', 'Gelişmiş', 'Maksimum'] },
    { key: 'durum', label: 'Durum', type: 'select', options: ['Etiketlendi', 'İnceleniyor', 'Beklemede'] }];
  data = [
    { kategori: 'Müşteri Kişisel Verisi', sinif: 'Gizli', kayitSayisi: 250000, koruma: 'Maksimum', durum: 'Etiketlendi' },
    { kategori: 'Finansal Kayıtlar', sinif: 'Çok Gizli', kayitSayisi: 85000, koruma: 'Maksimum', durum: 'Etiketlendi' },
    { kategori: 'Ürün Katalog', sinif: 'Kamuya Açık', kayitSayisi: 12000, koruma: 'Temel', durum: 'Etiketlendi' },
    { kategori: 'Çalışan Verileri', sinif: 'Gizli', kayitSayisi: 1500, koruma: 'Gelişmiş', durum: 'İnceleniyor' },
    { kategori: 'Operasyonel Loglar', sinif: 'Dahili', kayitSayisi: 5000000, koruma: 'Temel', durum: 'Beklemede' }];
}
