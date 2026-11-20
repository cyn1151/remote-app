import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { I18nInitService } from '../../services/i18n-init';

@Component({
  imports: [TranslatePipe],
  selector: 'app-catalogue',
  styleUrl: './catalogue.scss',
  templateUrl: './catalogue.html',
})
export class Catalogue {
 private i18nInit = inject(I18nInitService)
}
