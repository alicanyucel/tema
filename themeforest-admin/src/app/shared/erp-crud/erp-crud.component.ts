import { Component, Input, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { ErpCrudDialogComponent, ErpDialogData } from './erp-crud-dialog.component';

export interface ErpColumn {
  key: string;
  label: string;
  type?: 'text' | 'number' | 'currency' | 'badge' | 'date';
  badgeMap?: Record<string, string>;
}

export interface ErpField {
  key: string;
  label: string;
  type?: 'text' | 'number' | 'select' | 'textarea';
  options?: string[];
}

@Component({
  selector: 'app-erp-crud',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    MatChipsModule
  ],
  template: `
    <section class="page-head">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </section>

    <div class="toolbar-row">
      <mat-form-field appearance="outline" class="search-field">
        <mat-label>Arama</mat-label>
        <mat-icon matPrefix>search</mat-icon>
        <input matInput type="text" placeholder="Kayıt ara..." [(ngModel)]="searchText" />
      </mat-form-field>
      <button mat-flat-button color="primary" class="add-btn" (click)="openAdd()">
        <mat-icon>add</mat-icon> Yeni Ekle
      </button>
    </div>

    <mat-card appearance="outlined" class="table-wrap">
      <table mat-table [dataSource]="pagedRows()" class="erp-table">
        @for (col of columns; track col.key) {
          <ng-container [matColumnDef]="col.key">
            <th mat-header-cell *matHeaderCellDef>{{ col.label }}</th>
            <td mat-cell *matCellDef="let row">
              @if (col.type === 'currency') {
                {{ row[col.key] | number: '1.2-2' }} ₺
              } @else if (col.type === 'badge') {
                <span [class]="'badge badge-' + slugify(row[col.key])">{{ row[col.key] }}</span>
              } @else {
                {{ row[col.key] }}
              }
            </td>
          </ng-container>
        }
        <ng-container matColumnDef="actions">
          <th mat-header-cell *matHeaderCellDef style="width:130px">İşlemler</th>
          <td mat-cell *matCellDef="let row; let i = index">
            <button mat-icon-button color="primary" matTooltip="İncele" (click)="openView(row)">
              <mat-icon>visibility</mat-icon>
            </button>
            <button mat-icon-button color="accent" matTooltip="Düzenle" (click)="openEdit(row)">
              <mat-icon>edit</mat-icon>
            </button>
            <button mat-icon-button color="warn" matTooltip="Sil" (click)="deleteRow(row)">
              <mat-icon>delete</mat-icon>
            </button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns()"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns()"></tr>
      </table>

      @if (filteredRows().length === 0) {
        <p class="empty-state">Kayıt bulunamadı.</p>
      }

      <mat-paginator
        [length]="filteredRows().length"
        [pageSize]="pageSize"
        [pageSizeOptions]="[5, 10, 25]"
        [pageIndex]="pageIndex()"
        (page)="onPage($event)"
        showFirstLastButtons
      />
    </mat-card>
  `,
  styles: [`
    .page-head { margin-bottom: 14px; h1, p { margin: 0; } p { margin-top: 4px; opacity: .66; } }
    .toolbar-row { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; flex-wrap: wrap; }
    .search-field { flex: 1; min-width: 200px; max-width: 400px; }
    .add-btn { display: flex; align-items: center; gap: 4px; height: 46px; border-radius: 10px; }
    .table-wrap { border-radius: 18px; overflow: hidden; }
    .erp-table { width: 100%; background: transparent; }
    .empty-state { padding: 12px 16px; opacity: .7; margin: 0; }
    .badge { padding: 3px 10px; border-radius: 99px; font-size: .8rem; font-weight: 600; background: rgba(100,116,139,.12); color: #475569; }
    .badge-aktif { background: rgba(34,197,94,.16); color: #166534; }
    .badge-pasif { background: rgba(239,68,68,.16); color: #991b1b; }
    .badge-beklemede, .badge-planlandi { background: rgba(234,179,8,.2); color: #854d0e; }
    .badge-tamamlandi { background: rgba(34,197,94,.16); color: #166534; }
    .badge-devam-ediyor { background: rgba(59,130,246,.16); color: #1e40af; }
    .badge-iptal { background: rgba(239,68,68,.16); color: #991b1b; }
    .badge-acik { background: rgba(59,130,246,.16); color: #1e40af; }
    .badge-kapali { background: rgba(100,116,139,.12); color: #475569; }
    .badge-yuksek { background: rgba(239,68,68,.16); color: #991b1b; }
    .badge-orta { background: rgba(234,179,8,.2); color: #854d0e; }
    .badge-dusuk { background: rgba(34,197,94,.16); color: #166534; }
    .badge-kargoda { background: rgba(14,165,233,.16); color: #0e7490; }
    .badge-hazirlaniyor { background: rgba(251,191,36,.2); color: #92400e; }
    .badge-teslim-edildi { background: rgba(34,197,94,.16); color: #166534; }
  `]
})
export class ErpCrudComponent implements OnInit {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() columns: ErpColumn[] = [];
  @Input() fields: ErpField[] = [];
  @Input() initialData: Record<string, any>[] = [];

  private dialog = inject(MatDialog);

  rows = signal<Record<string, any>[]>([]);
  searchText = '';
  pageSize = 10;
  pageIndex = signal(0);

  ngOnInit() {
    this.rows.set([...this.initialData]);
  }

  displayedColumns = computed(() => [...this.columns.map(c => c.key), 'actions']);

  filteredRows = computed(() => {
    const q = this.searchText.trim().toLowerCase();
    if (!q) return this.rows();
    return this.rows().filter(row =>
      Object.values(row).some(v => String(v).toLowerCase().includes(q))
    );
  });

  pagedRows = computed(() => {
    const start = this.pageIndex() * this.pageSize;
    return this.filteredRows().slice(start, start + this.pageSize);
  });

  onPage(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageIndex.set(e.pageIndex);
  }

  slugify(val: string): string {
    return String(val).toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  }

  openAdd() {
    const data: ErpDialogData = { mode: 'add', fields: this.fields, row: {} };
    this.dialog.open(ErpCrudDialogComponent, { width: '560px', data }).afterClosed().subscribe(result => {
      if (result) this.rows.update(r => [result, ...r]);
    });
  }

  openEdit(row: Record<string, any>) {
    const data: ErpDialogData = { mode: 'edit', fields: this.fields, row: { ...row } };
    this.dialog.open(ErpCrudDialogComponent, { width: '560px', data }).afterClosed().subscribe(result => {
      if (result) this.rows.update(r => r.map(item => item === row ? result : item));
    });
  }

  openView(row: Record<string, any>) {
    const data: ErpDialogData = { mode: 'view', fields: this.fields, row: { ...row } };
    this.dialog.open(ErpCrudDialogComponent, { width: '560px', data });
  }

  deleteRow(row: Record<string, any>) {
    this.rows.update(r => r.filter(item => item !== row));
  }
}
