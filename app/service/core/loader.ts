import { Injectable } from '@angular/core';
import { LoadingIndicator } from 'nativescript-loading-indicator';



@Injectable()
export class LoaderService {
    loader = new LoadingIndicator();
    options = {
        message: '加载中...',
        ios: {
            details: '',
            square: false,
            margin: 10,
            dimBackground: true,
            color: 'transparent'
        }
    };

    enableLoader: boolean = true;

    constructor() {

    }

    enable(value: boolean) {
        this.enableLoader = value;
    }

    show(iosDetails?:string) {
        if (this.enableLoader ) {
            if (iosDetails) {
                this.options.ios.details = iosDetails;
            }
            this.loader.show(this.options);
        }
    }

    hide() {
        this.loader.hide();
    }

}
