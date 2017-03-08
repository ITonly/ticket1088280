import { Router } from '@angular/router';
import { HttpModule, Http, XHRBackend, RequestOptions, XSRFStrategy } from '@angular/http';
import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { registerElement } from 'nativescript-angular/element-registry';

import { NgModule, enableProdMode, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { initializeOnAngular } from 'nativescript-web-image-cache';
import { RouterExtensions, NSModuleFactoryLoader } from 'nativescript-angular/router';

import { ACCOUNTING_BASE_PATH } from './api/accounting';
import { TNSFontIconModule } from '../app/service/fonticon.module';

import {
    StorageService, HttpBaseService, GPXSRFStrategy, LoaderService,
     Config, BackgroundService, RouteStateService
} from './service/core';
import * as application from 'application';

import { SharedModule } from './component/shared/shared.module';

import { routes } from './app.routes';
import { AppComponent } from './app.component';

// Uncomment for release version
//  enableProdMode();

export function httpHelperFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions,
    router: Router, storageService: StorageService, loaderService: LoaderService) {
    return new HttpBaseService(xhrBackend, requestOptions,
        router, storageService, loaderService);
}

export function newGPXSRFStrategy() {
    return new GPXSRFStrategy();
}

@NgModule({
    imports: [
        NativeScriptModule, NativeScriptRouterModule, NativeScriptFormsModule,
        NativeScriptRouterModule.forRoot(routes), HttpModule,
        TNSFontIconModule.forRoot({
            'fa': 'fonts/font-awesome.css',
            'ion': 'fonts/ionicon.css',
            'wf': 'fonts/onlinewebfonts.css'
        }),
    ],
    declarations: [
        AppComponent
    ],
    exports: [],
    bootstrap: [AppComponent],
    providers: [
        StorageService, LoaderService, Config, BackgroundService,
         RouteStateService,
        { provide: XSRFStrategy, useFactory: newGPXSRFStrategy },

        // comment when run  bundle
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader },

        { provide: ACCOUNTING_BASE_PATH, useValue: 'https://api-accounting-dev.guanplus.com' },
        // { provide: ACCOUNTING_BASE_PATH, useValue: 'https://api-accounting.guanplus.com' },
        // { provide: IDENTITY_BASE_PATH, useValue: 'https://api-identity.guanplus.com' },
        {
            provide: Http,
            useFactory: httpHelperFactory,
            deps: [XHRBackend, RequestOptions, Router, StorageService, LoaderService]
        }
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

registerElement('DropDown', () => require('nativescript-drop-down').DropDown);

application.on(application.launchEvent, function (args: application.ApplicationEventData) {
    initializeOnAngular();
});
