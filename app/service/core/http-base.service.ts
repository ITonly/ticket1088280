import * as _ from 'lodash';

import {
    Http, RequestOptionsArgs, Response, RequestOptions, XSRFStrategy,
    ConnectionBackend, Headers
} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { StorageService } from './storage.service';
import { LoaderService } from './loader';

export class GPXSRFStrategy extends XSRFStrategy {
    public configureRequest(_req: any) {
        // noop
        console.log('XSRFStrategy');
    }
}

export class HttpBaseService extends Http {

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions,
        private _router: Router, private storageService: StorageService,
        private loaderService: LoaderService) {
        super(backend, defaultOptions);
    }

    request(url: string, options?: RequestOptionsArgs): Observable<Response> {
        this.loaderService.show();
        return this.intercept(super.request(url, this.getRequestOptionArgs(options, url)).share());
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        this.loaderService.show();
        return this.intercept(super.get(url, options).share());
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        this.loaderService.show();
        return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)).share());
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        this.loaderService.show();
        return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)).share());
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        this.loaderService.show();
        return this.intercept(super.delete(url, options).share());
    }

    getRequestOptionArgs(options?: RequestOptionsArgs, url?: string): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        // Set Accept Json for Firefox
        options.headers.set('Accept', 'application/json');
        if (_.endsWith(url, 'token')) {
            return options;
        }
        options.headers.set('Content-Type', 'application/json');
        let token = this.storageService.getToken();
        if (token && token.access_token && !_.endsWith(url, 'register')
            && !_.endsWith(url, 'forget_password')) {
            options.headers.set('Authorization', 'bearer ' + token.access_token);
            if (token.user && token.user.currentCompany && token.user.currentCompany.id) {
                options.headers.set('company_id', token.user.currentCompany.id);
            }
        }
        return options;
    }

    intercept(observable: Observable<any>): Observable<Response> {
        observable.subscribe(
            res => this.loaderService.hide(),
            error => this.loaderService.hide()
        );

        return observable.catch((err, source) => {
            this.loaderService.hide();
            if (err.status === 401 && !_.endsWith(err.url, 'token')) {
                this._router.navigate(['/login']);
                return Observable.empty();
            } else {
                return Observable.throw(err);
            }
        });
    }
}
