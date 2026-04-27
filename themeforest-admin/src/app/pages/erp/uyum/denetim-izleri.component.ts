import { Component } from '@angular/core';
import { ErpCrudComponent, ErpColumn, ErpField } from '../../../shared/erp-crud/erp-crud.component';

@Component({ selector: 'app-denetim-izleri', standalone: true, imports: [ErpCrudComponent],
  template: `<app-erp-crud title="Denetim İzleri" subtitle="Sistem aktiviteleri ve audit log kayıtları" [columns]="cols" [fields]="fields" [initialData]="data" />`
})
export class DenetimIzleriComponent {
  cols: ErpColumn[] = [
    { key: 'logNo', label: 'Log No' },
    { key: 'kullanici', label: 'Kullanıcı' },
    { key: 'islem', label: 'İşlem' },
    { key: 'modul', label: 'Modül' },
    { key: 'tarihSaat', label: 'Tarih/Saat' },
    { key: 'durum', label: 'Sonuç', type: 'badge' },
  ];
  fields: ErpField[] = [
    { key: 'logNo', label: 'Log No' },
    { key: 'kullanici', label: 'Kullanıcı' },
    { key: 'islem', label: 'İşlem' },
    { key: 'modul', label: 'Modül' },
    { key: 'tarihSaat', label: 'Tarih/Saat' },
    { key: 'detay', label: 'Detay', type: 'textarea' },
    { key: 'durum', label: 'Sonuç', type: 'select', options: ['Aktif', 'Beklemede', 'İptal'] },
  ];
  data = [
    { logNo: 'LOG-001', kullanici: 'mert.demir', islem: 'Kullanıcı Oluşturma', modul: 'Yetkilendirme', tarihSaat: '27.04.2024 08:55', durum: 'Aktif' },
    { logNo: 'LOG-002', kullanici: 'ece.yildirim', islem: 'Fatura Silme', modul: 'Alacaklar', tarihSaat: '27.04.2024 09:20', durum: 'Aktif' },
    { logNo: 'LOG-003', kullanici: 'can.arslan', islem: 'Bordro Onaylama', modul: 'Bordro', tarihSaat: '27.04.2024 10:05', durum: 'Aktif' },
    { logNo: 'LOG-004', kullanici: 'eski.kullanici', islem: 'Yetkisiz Erişim Girişimi', modul: 'Finans', tarihSaat: '26.04.2024 23:45', durum: 'İptal' },
    { logNo: 'LOG-005', kullanici: 'aylin.kara', islem: 'İzin Talebi Güncelleme', modul: 'İzin/Mesai', tarihSaat: '26.04.2024 16:30', durum: 'Aktif' },
  ];
}
