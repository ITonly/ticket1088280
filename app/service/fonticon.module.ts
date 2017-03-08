import { NgModule, ModuleWithProviders } from '@angular/core';
import { TNSFontIconPipe, TNSFontIconPurePipe } from '../pipe/fonticon.pipe';
import { TNSFontIconService, TNS_FONT_ICON_CONFIG } from './fonticon.service';

// for manual imports
export * from '../pipe/fonticon.pipe';
export * from './fonticon.service';

const PIPES: Array<any> = [
    TNSFontIconPipe,
    TNSFontIconPurePipe
];

export function provideService(providedConfig: any): any {
    return [TNSFontIconService,
        { provide: TNS_FONT_ICON_CONFIG, multi: false, useValue: providedConfig }
    ];
}

@NgModule({
    declarations: PIPES,
    exports: PIPES
})
export class TNSFontIconModule {
    static forRoot(providedConfig: any): ModuleWithProviders {
        return {
            ngModule: TNSFontIconModule,
            providers: [provideService(providedConfig)]
        };
    }
}
