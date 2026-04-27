import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <div class="modal-wrap">
      <div class="modal-head">
        <h2>{{ data.title }}</h2>
        <button mat-icon-button (click)="close()" aria-label="Kapat">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <div class="modal-list">
        @for (item of data.items; track item.title + item.time) {
          <article class="modal-item" [class.modal-item--unread]="item.unread">
            <header>
              <strong>{{ item.from ? item.from + ' - ' + item.title : item.title }}</strong>
              <small>{{ item.time }}</small>
            </header>
            <p>{{ item.detail }}</p>
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
      grid-template-rows: auto 1fr auto;
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

    .modal-list {
      overflow: auto;
      display: grid;
      gap: 10px;
      padding-right: 2px;
    }

    .modal-item {
      border: 1px solid rgba(148, 163, 184, 0.35);
      border-radius: 12px;
      padding: 10px 12px;
      background: rgba(248, 250, 252, 0.5);

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

      &.modal-item--unread {
        border-color: rgba(14, 116, 144, 0.45);
        box-shadow: inset 3px 0 0 #0e7490;
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
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: InboxModalData,
    private readonly dialogRef: MatDialogRef<InboxModalComponent>
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
