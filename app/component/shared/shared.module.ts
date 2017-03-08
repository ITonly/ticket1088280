import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { TNSFontIconModule } from '../../service/fonticon.module';

import { NativeScriptUISideDrawerModule } from 'nativescript-telerik-ui-pro/sidedrawer/angular';
import { NativeScriptUIListViewModule } from 'nativescript-telerik-ui-pro/listview/angular';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { LoaderService } from '../../service/core/loader';

export const fontConfig: any = {
    'fa': 'fonts/font-awesome.css',
    'ion': 'fonts/ionicon.css',
    'wf': 'fonts/onlinewebfonts.css'
};

@NgModule({
    imports: [NativeScriptModule, NativeScriptFormsModule, NativeScriptRouterModule,
        TNSFontIconModule.forRoot(fontConfig), NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule
    ],
    declarations: [ ActionBarComponent],
    exports: [ActionBarComponent],
    providers: [LoaderService],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
