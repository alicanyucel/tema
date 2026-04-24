import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page';
import { FinancePageComponent } from './pages/finance-page';
import { OrdersPageComponent } from './pages/orders-page';
import { ProductsPageComponent } from './pages/products-page';
import { SettingsPageComponent } from './pages/settings-page';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'dashboard' },
	{ path: 'dashboard', component: DashboardPageComponent },
	{ path: 'urunler', component: ProductsPageComponent },
	{ path: 'siparisler', component: OrdersPageComponent },
	{ path: 'finans', component: FinancePageComponent },
	{ path: 'ayarlar', component: SettingsPageComponent },
	{ path: '**', redirectTo: 'dashboard' }
];
