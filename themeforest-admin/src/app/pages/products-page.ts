import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { I18nService } from '../i18n.service';

interface ProductRow {
  sku: string;
  name: string;
  category: string;
  stock: number;
  price: number;
  status: 'Aktif' | 'Az Stok' | 'Pasif';
}

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CurrencyPipe, MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatTableModule],
  templateUrl: './products-page.html',
  styleUrl: './products-page.scss'
})
export class ProductsPageComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly columns = ['sku', 'name', 'category', 'stock', 'price', 'status'];

  protected readonly products: ProductRow[] = [
    { sku: 'PRD-1002', name: 'Akilli Barkod Okuyucu', category: 'Depo', stock: 164, price: 129.9, status: 'Aktif' },
    { sku: 'PRD-1028', name: 'Endustriyel Etiket Yazici', category: 'Depo', stock: 24, price: 349.5, status: 'Az Stok' },
    { sku: 'PRD-1091', name: 'Kasa Entegrasyon Modulu', category: 'POS', stock: 0, price: 79.0, status: 'Pasif' },
    { sku: 'PRD-1110', name: 'Satis Analiz Lisansi', category: 'Yazilim', stock: 340, price: 49.99, status: 'Aktif' }
  ];

  protected statusLabel(status: ProductRow['status']): string {
    const map: Record<ProductRow['status'], string> = {
      Aktif: 'enum.status.active',
      'Az Stok': 'enum.status.lowStock',
      Pasif: 'enum.status.passive'
    };
    return this.i18n.t(map[status]);
  }
}
