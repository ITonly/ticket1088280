import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { TNSFontIconModule } from '../../service/fonticon.module';

import { TransactionImageComponent } from './transaction-image.component';
import { SharedModule } from '../shared/shared.module';
import { PipeModule } from '../../pipe/pipe.module';

export const routerConfig = [
    {
        path: '',
        component: TransactionImageComponent
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [NativeScriptModule, NativeScriptFormsModule, NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig),
        SharedModule, PipeModule, TNSFontIconModule.forRoot({
            'fa': 'fonts/font-awesome.css'
        })],
    declarations: [TransactionImageComponent],
    exports: [TransactionImageComponent]
})
export class TransactionImageModule {
    constructor() {

    }
}
