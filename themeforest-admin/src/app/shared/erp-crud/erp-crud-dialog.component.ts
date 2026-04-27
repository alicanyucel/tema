import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ErpField } from './erp-crud.component';
import { I18nService } from '../../i18n.service';

export interface ErpDialogData {
  mode: 'add' | 'edit' | 'view';
  fields: ErpField[];
  row: Record<string, any>;
}

@Component({
  selector: 'app-erp-crud-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule],
  template: `
    <div class="dlg-header">
      <mat-icon class="dlg-icon">{{ modeIcon() }}</mat-icon>
      <h2 mat-dialog-title>{{ modeTitle() }}</h2>
      <button mat-icon-button mat-dialog-close class="close-btn"><mat-icon>close</mat-icon></button>
    </div>
    <mat-dialog-content class="dlg-body">
      @for (field of data.fields; track field.key) {
        <mat-form-field appearance="outline" class="field-full">
          <mat-label>{{ field.label }}</mat-label>
          @if (field.type === 'select') {
            <mat-select [(ngModel)]="row[field.key]" [disabled]="isView">
              @for (opt of field.options; track opt) {
                <mat-option [value]="opt">{{ opt }}</mat-option>
              }
            </mat-select>
          } @else if (field.type === 'textarea') {
            <textarea matInput [(ngModel)]="row[field.key]" [readonly]="isView" rows="3"></textarea>
          } @else {
            <input matInput [type]="field.type === 'number' ? 'number' : 'text'" [(ngModel)]="row[field.key]" [readonly]="isView" />
          }
        </mat-form-field>
      }
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>{{ isView ? i18n.t('erp.close') : i18n.t('erp.cancel') }}</button>
      @if (!isView) {
        <button mat-flat-button color="primary" (click)="save()">
          <mat-icon>{{ data.mode === 'add' ? 'add' : 'save' }}</mat-icon>
          {{ data.mode === 'add' ? i18n.t('erp.add') : i18n.t('erp.save') }}
        </button>
      }
    </mat-dialog-actions>
  `,
  styles: [`
    .dlg-header { display: flex; align-items: center; gap: 10px; padding: 20px 24px 0; }
    .dlg-icon { color: #0e7490; font-size: 28px; width: 28px; height: 28px; }
    h2[mat-dialog-title] { margin: 0; flex: 1; font-size: 1.15rem; }
    .close-btn { margin-left: auto; }
    .dlg-body { padding: 16px 24px; display: flex; flex-direction: column; gap: 4px; }
    .field-full { width: 100%; }
  `]
})
export class ErpCrudDialogComponent {
  row: Record<string, any>;
  get isView() { return this.data.mode === 'view'; }
  readonly i18n = inject(I18nService);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ErpDialogData,
    private ref: MatDialogRef<ErpCrudDialogComponent>
  ) {
    this.row = { ...data.row };
  }

  modeIcon(): string {
    return this.data.mode === 'add' ? 'add_circle' : this.data.mode === 'edit' ? 'edit' : 'visibility';
  }

  modeTitle(): string {
    return this.data.mode === 'add'
      ? this.i18n.t('erp.addRecord')
      : this.data.mode === 'edit'
        ? this.i18n.t('erp.editRecord')
        : this.i18n.t('erp.viewRecord');
  }

  save() {
    this.ref.close(this.row);
  }
}
