import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { I18nService } from '../i18n.service';

export interface NewTaskData {
  task: string;
  owner: string;
  dueDate: string;
  priority: 'Yuksek' | 'Orta' | 'Dusuk';
  status: 'Devam Ediyor' | 'Planlandi' | 'Gecikti' | 'Tamamlandi';
}

@Component({
  selector: 'app-new-task-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  template: `
    <h2 mat-dialog-title>{{ i18n.t('dialog.newTaskTitle') }}</h2>

    <form [formGroup]="form" (ngSubmit)="submit()">
      <mat-dialog-content class="dialog-content">
        <mat-form-field appearance="outline">
          <mat-label>{{ i18n.t('dialog.taskTitle') }}</mat-label>
          <input matInput formControlName="task" />
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>{{ i18n.t('dialog.owner') }}</mat-label>
          <input matInput formControlName="owner" />
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>{{ i18n.t('dialog.dueDate') }}</mat-label>
          <input matInput formControlName="dueDate" [placeholder]="i18n.t('dialog.dueDateHint')" />
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>{{ i18n.t('dialog.priority') }}</mat-label>
          <mat-select formControlName="priority">
            <mat-option value="Yuksek">{{ i18n.t('enum.priority.high') }}</mat-option>
            <mat-option value="Orta">{{ i18n.t('enum.priority.medium') }}</mat-option>
            <mat-option value="Dusuk">{{ i18n.t('enum.priority.low') }}</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>{{ i18n.t('dialog.status') }}</mat-label>
          <mat-select formControlName="status">
            <mat-option value="Planlandi">{{ i18n.t('enum.status.planned') }}</mat-option>
            <mat-option value="Devam Ediyor">{{ i18n.t('enum.status.inProgress') }}</mat-option>
            <mat-option value="Gecikti">{{ i18n.t('enum.status.delayed') }}</mat-option>
            <mat-option value="Tamamlandi">{{ i18n.t('enum.status.completed') }}</mat-option>
          </mat-select>
        </mat-form-field>
      </mat-dialog-content>

      <mat-dialog-actions align="end">
        <button mat-button type="button" mat-dialog-close>{{ i18n.t('dialog.cancel') }}</button>
        <button mat-flat-button type="submit" [disabled]="form.invalid">{{ i18n.t('dialog.save') }}</button>
      </mat-dialog-actions>
    </form>
  `,
  styles: [
    `
      .dialog-content {
        display: grid;
        grid-template-columns: 1fr;
        gap: 8px;
        width: min(520px, 82vw);
        padding-top: 8px;
      }

      mat-form-field {
        width: 100%;
      }
    `
  ]
})
export class NewTaskDialogComponent {
  private readonly fb = inject(FormBuilder);
  private readonly dialogRef = inject(MatDialogRef<NewTaskDialogComponent, NewTaskData>);
  protected readonly i18n = inject(I18nService);

  protected readonly form = this.fb.nonNullable.group({
    task: ['', [Validators.required, Validators.minLength(4)]],
    owner: ['', [Validators.required, Validators.minLength(2)]],
    dueDate: ['', Validators.required],
    priority: this.fb.nonNullable.control<NewTaskData['priority']>('Orta'),
    status: this.fb.nonNullable.control<NewTaskData['status']>('Planlandi')
  });

  protected submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.dialogRef.close(this.form.getRawValue());
  }
}
