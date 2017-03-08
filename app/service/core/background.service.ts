import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import * as connectivity from 'connectivity';

@Injectable()
export class BackgroundService {
    constructor() {

    }
    /* tslint:disable */
    connectionChanged = new Subject<string>();
    onConnectionChanged = this.connectionChanged.asObservable();
    /* tslint:enable */

    connectionChange(connectionType: string) {
        this.connectionChanged.next(connectionType);
    }
}
