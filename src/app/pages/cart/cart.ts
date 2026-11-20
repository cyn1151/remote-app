import { Component, inject } from '@angular/core';
import { I18nInitService } from '../../services/i18n-init';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  standalone: true,
  selector: 'app-cart',
  styleUrl: './cart.scss',
  templateUrl: './cart.html',
})
export class Cart {
   private i18nInit = inject(I18nInitService)
}
