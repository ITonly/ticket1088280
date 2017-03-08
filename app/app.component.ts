import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { TNSFontIconService } from './service/fonticon.service';
import { BackgroundService } from './service/core/background.service';
import * as connectivity from 'connectivity';
import * as moment from 'moment';
import * as application from 'application';
import { StorageService } from './service/core/storage.service';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
    constructor(private tnsFontIconService: TNSFontIconService,
        private backgroundService: BackgroundService, private zone: NgZone,
        private storageService: StorageService
    ) {
        moment.locale('zh-cn');
    }

    ngOnInit() {
        console.log('app component on init');
        connectivity.startMonitoring((newConnectionType: number) => {
            this.zone.run(() => {
                console.log('connecction type ' + newConnectionType);
                switch (newConnectionType) {
                    case connectivity.connectionType.none:
                        this.backgroundService.connectionChange('none');
                        console.log('connection type change to none');
                        break;
                    case connectivity.connectionType.wifi:
                        this.backgroundService.connectionChange('wifi');
                        console.log('Connection type changed to WiFi.');
                        break;
                    default:
                        this.backgroundService.connectionChange('mobile');
                        console.log('Connection type changed to mobile.');
                        break;
                }
            });
        });

        application.on(application.uncaughtErrorEvent, args => {
            let android = args.android;
            if (android) {
                console.log('uncaughtErrorEvent android=>');
                console.log('uncaughtErrorEvent args android=>', android);
                // android.os.Process.killProcess(android.os.Process.myPid());
            } else {
                console.log('uncaughtErrorEvent ios=>');
                console.log('uncaughtErrorEvent args ios=>', args.ios);
            }
            this.storageService.setToken(null);
        });
    }

    ngOnDestroy() {
        console.log('app component on destroy');
        connectivity.stopMonitoring();
    }


}
