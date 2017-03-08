import { Injectable } from '@angular/core';
import * as applicationSettings from 'application-settings';
let cryptoJS = require('crypto-js');

const eK = 'D67D6C65A215A906CC89DE28D8CAE2D0FD8A7A8D1E2888AFBB9F28B8ECB2B9F1';

@Injectable()
export class StorageService {

    constructor(
    ) { };

    setToken(oauthToken: any) {
        if (oauthToken) {
            let tokenString = JSON.stringify(oauthToken);
            let encryptedToken = this.encrypt(tokenString, eK);
            this.setCookie('OAUTH_TOKEN', encryptedToken);
        } else {
            this.removeCookie('OAUTH_TOKEN');
        }
    }

    getToken() {
        let encrptedToken = this.getCookie('OAUTH_TOKEN');
        if (encrptedToken) {
            let token = this.decrypt(encrptedToken, eK) as any;
            return JSON.parse(token);
        } else {
            return '';
        }
    }

    setPincode(key: string, value: string) {
        let pincodeValue = this.encrypt(value, eK);
        applicationSettings.setString(key, pincodeValue);
    }

    getPincode(key: string) {
        let encryptedString = applicationSettings.getString(key);
        if (encryptedString) {
            let pincodeData = this.decrypt(encryptedString, eK) as string;
            /*jshint eqnull:true */
            if (pincodeData.length !== 0) {
                return pincodeData;
            } else {
                return '';
            }
        } else {
            return '';
        }
    }
    removePincode(key: string) {
        applicationSettings.remove(key);
    }


    private setCookie(key: string, value: Object) {
        let cookieValue = this.encrypt(JSON.stringify(value), eK);
        applicationSettings.setString(key, cookieValue);
    }

    private removeCookie(key: string) {
        applicationSettings.remove(key);
    }

    private getCookie(key: string) {
        let encryptedString = applicationSettings.getString(key);
        if (encryptedString) {
            let cookieData = this.decrypt(encryptedString, eK) as string;
            /*jshint eqnull:true */
            if (cookieData != null) {
                return JSON.parse(cookieData);
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    private encrypt(v: any, key: string): string {
        return cryptoJS.AES
            .encrypt(JSON.stringify(v), key)
            .toString();
    }

    private decrypt<T>(v: string, key: string): T {
        let bytes = cryptoJS.AES.decrypt(v, key);
        let json = bytes.toString(cryptoJS.enc.Utf8);

        return JSON.parse(json);
    }
}
