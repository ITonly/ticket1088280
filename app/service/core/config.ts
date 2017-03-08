import { Injectable, Inject, Optional } from '@angular/core';
import { ACCOUNTING_BASE_PATH } from '../../api/accounting/variables';
let app = require('nativescript-appversion');

export class Config {
    author = {
        name: '',
        title: '',
        copyright: '©北京有序云创技术有限公司 2016 All Rights Reserved',
        icp: '京ICP备 15043499号',
        version: '',
        supportEmail: 'support@guanplus.com',
        supportPhone: '400-809-0751',
        supportInfo: '客服：400-809-0751 邮箱：support@guanplus.com',
        website: 'https://app.guanplus.com'
    };

    apiUrls = {
        identity: '',
        resource: ''
    };

    constructor( @Optional() @Inject(ACCOUNTING_BASE_PATH) accountingPath: string) {
        this.apiUrls.resource = accountingPath;
        console.log(accountingPath);
        this.getAppVersion();
    }

    private getAppVersion() {
        let self: any = this;
        app.getVersionName().then(function(version) {
            self.author.version = version;
        });
    }
};
