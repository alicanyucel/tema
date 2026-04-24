import { DecimalPipe, NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { I18nService } from '../i18n.service';
import { NewTaskData, NewTaskDialogComponent } from './new-task-dialog';

type TrendType = 'up' | 'down';

interface StatCard {
  title: string;
  value: string;
  trend: string;
  trendType: TrendType;
  icon: string;
}

interface RevenueBar {
  month: string;
  value: number;
}

interface RevenueDetail {
  month: string;
  revenue: number;
  target: number;
  expense: number;
  orders: number;
}

interface TaskRow {
  task: string;
  owner: string;
  dueDate: string;
  priority: 'Yuksek' | 'Orta' | 'Dusuk';
  status: 'Devam Ediyor' | 'Planlandi' | 'Gecikti' | 'Tamamlandi';
}

interface Activity {
  title: string;
  description: string;
  time: string;
}

interface TeamLoad {
  name: string;
  role: string;
  load: number;
}

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    DecimalPipe,
    NgClass,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatIconModule,
    MatProgressBarModule,
    MatTableModule
  ],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss'
})
export class DashboardPageComponent {
  private readonly dialog = inject(MatDialog);
  protected readonly i18n = inject(I18nService);
  protected readonly displayedColumns = ['task', 'owner', 'dueDate', 'priority', 'status'];
  protected readonly showDetailedAnalysis = signal(false);

  protected readonly statCards: StatCard[] = [
    { title: 'Aylik Gelir', value: '$128,450', trend: '+12.6%', trendType: 'up', icon: 'payments' },
    { title: 'Aktif Musteri', value: '8,942', trend: '+4.1%', trendType: 'up', icon: 'groups' },
    { title: 'Acil Ticket', value: '34', trend: '-8.2%', trendType: 'down', icon: 'support_agent' },
    { title: 'Donusum Orani', value: '5.9%', trend: '+1.4%', trendType: 'up', icon: 'trending_up' }
  ];

  protected readonly revenueBars: RevenueBar[] = [
    { month: 'Oca', value: 58 },
    { month: 'Sub', value: 72 },
    { month: 'Mar', value: 66 },
    { month: 'Nis', value: 81 },
    { month: 'May', value: 76 },
    { month: 'Haz', value: 92 },
    { month: 'Tem', value: 88 }
  ];

  protected readonly revenueDetails: RevenueDetail[] = [
    { month: 'Ocak', revenue: 84200, target: 90000, expense: 39100, orders: 1189 },
    { month: 'Subat', revenue: 97300, target: 95000, expense: 40480, orders: 1335 },
    { month: 'Mart', revenue: 91600, target: 98000, expense: 41950, orders: 1278 },
    { month: 'Nisan', revenue: 108400, target: 102000, expense: 43740, orders: 1450 },
    { month: 'Mayis', revenue: 101500, target: 105000, expense: 44200, orders: 1386 },
    { month: 'Haziran', revenue: 120800, target: 110000, expense: 46890, orders: 1622 },
    { month: 'Temmuz', revenue: 114900, target: 112000, expense: 47240, orders: 1570 }
  ];

  protected readonly trendLinePoints = this.revenueBars
    .map((bar, index) => {
      const x = Math.round((index / (this.revenueBars.length - 1)) * 100);
      const y = 100 - bar.value;
      return `${x},${y}`;
    })
    .join(' ');

  protected readonly tasks = signal<TaskRow[]>([
    {
      task: 'Kurumsal fatura akisi yeniden tasarimi',
      owner: 'Ece Yildirim',
      dueDate: '29 Nisan',
      priority: 'Yuksek',
      status: 'Devam Ediyor'
    },
    {
      task: 'Depo senkronizasyonu performans tuning',
      owner: 'Mert Demir',
      dueDate: '30 Nisan',
      priority: 'Orta',
      status: 'Planlandi'
    },
    {
      task: 'B2B musteri onboarding otomasyonu',
      owner: 'Aylin Kara',
      dueDate: '1 Mayis',
      priority: 'Yuksek',
      status: 'Gecikti'
    },
    {
      task: 'Rapor ihracinda PDF sadelestirme',
      owner: 'Can Arslan',
      dueDate: '2 Mayis',
      priority: 'Dusuk',
      status: 'Tamamlandi'
    }
  ]);

  protected readonly activities: Activity[] = [
    {
      title: 'Yeni siparis senaryosu canliya alindi',
      description: 'Ops ekibi stok rezervasyon adimini aktif etti.',
      time: '12 dk once'
    },
    {
      title: 'Muhasebe entegrasyon loglari temizlendi',
      description: '3 tekrar eden hata kalici olarak cozuldu.',
      time: '48 dk once'
    },
    {
      title: 'CEO paneli KPI alanlari guncellendi',
      description: 'Yeni brut kar metrigi eklendi.',
      time: '1 saat once'
    }
  ];

  protected readonly teamLoad: TeamLoad[] = [
    { name: 'Selin Usta', role: 'Frontend Lead', load: 82 },
    { name: 'Ozan Cakir', role: 'Backend Architect', load: 67 },
    { name: 'Burak Inan', role: 'DevOps Engineer', load: 54 }
  ];

  protected openNewTaskDialog(): void {
    this.dialog
      .open(NewTaskDialogComponent, { width: '520px' })
      .afterClosed()
      .subscribe((result?: NewTaskData) => {
        if (!result) {
          return;
        }

        this.tasks.update((items) => [result, ...items]);
      });
  }

  protected toggleDetailedAnalysis(): void {
    this.showDetailedAnalysis.update((value) => !value);
  }

  protected priorityLabel(priority: TaskRow['priority']): string {
    const map: Record<TaskRow['priority'], string> = {
      Yuksek: 'enum.priority.high',
      Orta: 'enum.priority.medium',
      Dusuk: 'enum.priority.low'
    };
    return this.i18n.t(map[priority]);
  }

  protected taskStatusLabel(status: TaskRow['status']): string {
    const map: Record<TaskRow['status'], string> = {
      'Devam Ediyor': 'enum.status.inProgress',
      Planlandi: 'enum.status.planned',
      Gecikti: 'enum.status.delayed',
      Tamamlandi: 'enum.status.completed'
    };
    return this.i18n.t(map[status]);
  }
}
