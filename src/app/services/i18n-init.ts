import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class I18nInitService {
    private translateService = inject(TranslateService);
    private http = inject(HttpClient);
    private langChange$?: Subscription;

    private readonly remotePrefixs = [
        './i18n-remote/'
    ]

    constructor() {
        const currentLang = this.translateService.currentLang() ?? 'zh';
        this.loadAllTranslations(currentLang);
        this.langChange$ = this.translateService.onLangChange.subscribe((event) => {
            this.loadAllTranslations(event.lang);
        })
    }

    ngOnDestroy() {
        this.langChange$?.unsubscribe();
    }

    private loadAllTranslations(lang: string) {
        for (const remotePrefix of this.remotePrefixs) {
            this.http.get(`${remotePrefix}${lang}.json`)
                .subscribe({
                    next: (data) => {
                        this.translateService.setTranslation(lang, data as any, true);
                    },
                    error: (_err) => {
                        console.warn(`Remote translation not found: ${remotePrefix}${lang}.json`);
                    }
                })
        }

    }
}
