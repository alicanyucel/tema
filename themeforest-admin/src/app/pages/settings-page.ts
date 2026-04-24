import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppLanguage, I18nService } from '../i18n.service';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSlideToggleModule],
  templateUrl: './settings-page.html',
  styleUrl: './settings-page.scss'
})
export class SettingsPageComponent {
  protected readonly i18n = inject(I18nService);
  protected companyName = 'Atlas ERP Teknoloji';
  protected supportMail = 'destek@atlaserp.com';
  protected mailNotifications = true;
  protected smsNotifications = false;

  protected setLanguage(lang: AppLanguage): void {
    this.i18n.setLanguage(lang);
  }
}
