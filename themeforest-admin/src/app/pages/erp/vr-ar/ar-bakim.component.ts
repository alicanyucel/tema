import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';
@Component({ selector: 'app-ar-bakim', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="AR Destekli Bakım" subtitle="Artırılmış gerçeklik ile saha teknik bakım kılavuzu" [columns]="cols" [fields]="fields" [initialData]="data" />` })
export class ArBakimComponent {
  cols: ErpColumn[] = [
    { key: 'bakim', label: 'Bakım Görevi' }, { key: 'ekipman', label: 'Ekipman' },
    { key: 'sure', label: 'Tahmini Süre (dk)' }, { key: 'arKullanimi', label: 'AR Adım' }, { key: 'durum', label: 'Durum', type: 'badge' }];
  fields: ErpField[] = [
    { key: 'bakim', label: 'Bakım Görevi Adı' }, { key: 'ekipman', label: 'Ekipman/Makine' },
    { key: 'sure', label: 'Tahmini Süre (dk)', type: 'number' }, { key: 'arKullanimi', label: 'AR Kılavuz Adım Sayısı', type: 'number' },
    { key: 'durum', label: 'Görev Durumu', type: 'select', options: ['Tamamlandı', 'Devam Ediyor', 'Planlandı', 'İptal'] }];
  data = [
    { bakim: 'Kompresör Filtresi Değişimi', ekipman: 'Kompresör-A1', sure: 45, arKullanimi: 12, durum: 'Tamamlandı' },
    { bakim: 'Robot Kol Kalibrasyonu', ekipman: 'UR10-B2', sure: 120, arKullanimi: 28, durum: 'Devam Ediyor' },
    { bakim: 'Pompa Contası', ekipman: 'Pompa-C3', sure: 30, arKullanimi: 8, durum: 'Planlandı' },
    { bakim: 'Bant Sistemi Muayene', ekipman: 'Konveyör-D4', sure: 60, arKullanimi: 18, durum: 'Tamamlandı' },
    { bakim: 'Isıtma Sistemi Bakımı', ekipman: 'HVAC-E5', sure: 90, arKullanimi: 22, durum: 'Planlandı' }];
}
