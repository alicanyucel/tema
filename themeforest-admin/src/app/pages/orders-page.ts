import { Component, computed, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { I18nService } from '../i18n.service';

interface OrderRow {
  orderNo: string;
  customer: string;
  total: number;
  payment: 'Kredi Karti' | 'Havale' | 'Kapida';
  status: 'Hazirlaniyor' | 'Kargoda' | 'Teslim Edildi';
}

@Component({
  selector: 'app-orders-page',
  standalone: true,
  imports: [CurrencyPipe, MatCardModule, MatChipsModule, MatTableModule, MatFormFieldModule, MatInputModule],
  templateUrl: './orders-page.html',
  styleUrl: './orders-page.scss'
})
export class OrdersPageComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly columns = ['orderNo', 'customer', 'total', 'payment', 'status'];
  protected readonly searchText = signal('');

  protected readonly orders: OrderRow[] = [
    { orderNo: 'SO-24081', customer: 'Nova Market', total: 1420.4, payment: 'Havale', status: 'Hazirlaniyor' },
    { orderNo: 'SO-24082', customer: 'Atlas Group', total: 384.95, payment: 'Kredi Karti', status: 'Kargoda' },
    { orderNo: 'SO-24083', customer: 'Marmara Ticaret', total: 2801.0, payment: 'Kredi Karti', status: 'Teslim Edildi' },
    { orderNo: 'SO-24084', customer: 'Anadolu Servis', total: 223.5, payment: 'Kapida', status: 'Kargoda' }
  ];

  protected readonly filteredOrders = computed(() => {
    const query = this.searchText().trim().toLowerCase();
    if (!query) {
      return this.orders;
    }

    return this.orders.filter((order) =>
      [order.orderNo, order.customer, order.payment, order.status].some((value) => value.toLowerCase().includes(query))
    );
  });

  protected onSearchInput(value: string): void {
    this.searchText.set(value);
  }

  protected paymentLabel(payment: OrderRow['payment']): string {
    const map: Record<OrderRow['payment'], string> = {
      'Kredi Karti': 'enum.payment.card',
      Havale: 'enum.payment.bank',
      Kapida: 'enum.payment.cod'
    };
    return this.i18n.t(map[payment]);
  }

  protected statusLabel(status: OrderRow['status']): string {
    const map: Record<OrderRow['status'], string> = {
      Hazirlaniyor: 'enum.status.preparing',
      Kargoda: 'enum.status.shipping',
      'Teslim Edildi': 'enum.status.delivered'
    };
    return this.i18n.t(map[status]);
  }
}
