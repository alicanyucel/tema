import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';

export interface InboxModalItem {
  title: string;
  detail: string;
  time: string;
  unread: boolean;
  from?: string;
}

export interface InboxModalData {
  type: 'notification' | 'message';
  title: string;
  items: InboxModalItem[];
}

@Component({
  selector: 'app-inbox-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatTooltipModule],
  template: `
    <div class="modal-wrap">
      <div class="modal-head">
        <h2>{{ data.title }}</h2>
        <button mat-icon-button (click)="close()" aria-label="Kapat">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <!-- Toolbar -->
      <div class="modal-toolbar">
        <mat-checkbox
          [checked]="isAllSelected"
          [indeterminate]="isSomeSelected && !isAllSelected"
          (change)="toggleAll($event.checked)"
          aria-label="Tümünü seç">
          Tümünü seç ({{ selectedIndices.size }}/{{ items.length }})
        </mat-checkbox>

        <div class="toolbar-actions">
          @if (selectedIndices.size > 0) {
            <button mat-stroked-button color="warn"
              (click)="deleteSelected()"
              matTooltip="Seçilileri sil">
              <mat-icon>delete_sweep</mat-icon>
              Seçilileri Sil ({{ selectedIndices.size }})
            </button>
          }
          @if (items.length > 0) {
            <button mat-stroked-button color="warn"
              (click)="deleteAll()"
              matTooltip="Tümünü sil">
              <mat-icon>delete_forever</mat-icon>
              Tümünü Sil
            </button>
          }
        </div>
      </div>

      <div class="modal-list">
        @if (items.length === 0) {
          <div class="modal-empty">
            <mat-icon>inbox</mat-icon>
            <span>Gösterilecek kayıt yok.</span>
          </div>
        }
        @for (item of items; track item.title + item.time; let i = $index) {
          <article class="modal-item" [class.modal-item--unread]="item.unread" [class.modal-item--selected]="selectedIndices.has(i)">
            <mat-checkbox
              class="item-checkbox"
              [checked]="selectedIndices.has(i)"
              (change)="toggleItem(i, $event.checked)"
              aria-label="Seç">
            </mat-checkbox>
            <div class="item-body">
              <header>
                <strong>{{ item.from ? item.from + ' - ' + item.title : item.title }}</strong>
                <small>{{ item.time }}</small>
              </header>
              <p>{{ item.detail }}</p>
            </div>
            <button mat-icon-button color="warn" class="item-delete"
              (click)="deleteOne(i)"
              matTooltip="Sil">
              <mat-icon>delete</mat-icon>
            </button>
          </article>
        }
      </div>

      <div class="modal-actions">
        <button mat-stroked-button (click)="close()">Kapat</button>
      </div>
    </div>
  `,
  styles: [`
    .modal-wrap {
      width: min(760px, 92vw);
      max-height: 78vh;
      display: grid;
      grid-template-rows: auto auto 1fr auto;
      gap: 12px;
      padding: 14px 16px;
    }

    .modal-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(148, 163, 184, 0.35);
      padding-bottom: 10px;

      h2 {
        margin: 0;
        font-size: 1.15rem;
      }
    }

    .modal-toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;
      padding: 4px 0 6px;
      border-bottom: 1px solid rgba(148, 163, 184, 0.2);
    }

    .toolbar-actions {
      display: flex;
      gap: 8px;

      button {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 0.82rem;

        mat-icon {
          font-size: 1.1rem;
          width: 1.1rem;
          height: 1.1rem;
        }
      }
    }

    .modal-list {
      overflow: auto;
      display: grid;
      gap: 10px;
      padding-right: 2px;
    }

    .modal-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 40px 0;
      opacity: 0.5;

      mat-icon {
        font-size: 2.4rem;
        width: 2.4rem;
        height: 2.4rem;
      }
    }

    .modal-item {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      border: 1px solid rgba(148, 163, 184, 0.35);
      border-radius: 12px;
      padding: 10px 12px;
      background: rgba(248, 250, 252, 0.5);
      transition: background 0.15s, border-color 0.15s;

      .item-checkbox {
        flex-shrink: 0;
        margin-top: 2px;
      }

      .item-body {
        flex: 1;
        min-width: 0;

        header {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 6px;
        }

        strong {
          font-size: 0.96rem;
        }

        small {
          opacity: 0.72;
          white-space: nowrap;
        }

        p {
          margin: 0;
          line-height: 1.45;
          opacity: 0.9;
        }
      }

      .item-delete {
        flex-shrink: 0;
        opacity: 0;
        transition: opacity 0.15s;
        width: 32px;
        height: 32px;
        line-height: 32px;

        mat-icon {
          font-size: 1.1rem;
          width: 1.1rem;
          height: 1.1rem;
        }
      }

      &:hover .item-delete {
        opacity: 1;
      }

      &.modal-item--unread {
        border-color: rgba(14, 116, 144, 0.45);
        box-shadow: inset 3px 0 0 #0e7490;
      }

      &.modal-item--selected {
        background: rgba(14, 116, 144, 0.07);
        border-color: rgba(14, 116, 144, 0.55);

        .item-delete {
          opacity: 1;
        }
      }
    }

    .modal-actions {
      border-top: 1px solid rgba(148, 163, 184, 0.35);
      padding-top: 10px;
      display: flex;
      justify-content: flex-end;
    }
  `]
})
export class InboxModalComponent {
  items: InboxModalItem[];
  selectedIndices = new Set<number>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: InboxModalData,
    private readonly dialogRef: MatDialogRef<InboxModalComponent>
  ) {
    this.items = [...data.items];
  }

  get isAllSelected(): boolean {
    return this.items.length > 0 && this.selectedIndices.size === this.items.length;
  }

  get isSomeSelected(): boolean {
    return this.selectedIndices.size > 0;
  }

  toggleAll(checked: boolean): void {
    if (checked) {
      this.items.forEach((_, i) => this.selectedIndices.add(i));
    } else {
      this.selectedIndices.clear();
    }
  }

  toggleItem(index: number, checked: boolean): void {
    if (checked) {
      this.selectedIndices.add(index);
    } else {
      this.selectedIndices.delete(index);
    }
  }

  deleteOne(index: number): void {
    this.items.splice(index, 1);
    // Re-map selectedIndices after splice
    const updated = new Set<number>();
    this.selectedIndices.forEach(i => {
      if (i < index) updated.add(i);
      else if (i > index) updated.add(i - 1);
    });
    this.selectedIndices = updated;
  }

  deleteSelected(): void {
    const toDelete = Array.from(this.selectedIndices).sort((a, b) => b - a);
    toDelete.forEach(i => this.items.splice(i, 1));
    this.selectedIndices.clear();
  }

  deleteAll(): void {
    this.items = [];
    this.selectedIndices.clear();
  }

  close(): void {
    this.dialogRef.close();
  }
}
