import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { I18nService } from '../i18n.service';

interface Transaction {
  label: string;
  amount: number;
  type: 'Gelir' | 'Gider';
  date: string;
}

@Component({
  selector: 'app-finance-page',
  standalone: true,
  imports: [CurrencyPipe, MatCardModule, MatProgressBarModule],
  templateUrl: './finance-page.html',
  styleUrl: './finance-page.scss'
})
export class FinancePageComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly transactions: Transaction[] = [
    { label: 'Kurumsal Paket Tahsilati', amount: 12840, type: 'Gelir', date: '24 Nisan' },
    { label: 'Lojistik ve Dagitim Gideri', amount: 2180, type: 'Gider', date: '23 Nisan' },
    { label: 'Yillik Lisans Yenileme', amount: 4200, type: 'Gelir', date: '22 Nisan' },
    { label: 'Sunucu Maliyeti', amount: 980, type: 'Gider', date: '21 Nisan' }
  ];
}
