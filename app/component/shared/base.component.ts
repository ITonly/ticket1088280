import { Component, OnDestroy } from '@angular/core';
import { Page } from 'ui/page';
import * as Dialogs from 'ui/dialogs';
import * as moment from 'moment';
import { LoaderService } from '../../service/core/loader';
import { isIOS } from 'platform';
import * as application from 'application';

export class BaseComponent implements OnDestroy {
    constructor(private page: Page, private loader: LoaderService) {
        if (application.android) {
            application.android.foregroundActivity.setRequestedOrientation(1);
        }
    }

    refresh(_function) {
        let timeout = 400;

        if (isIOS) {
            timeout = 0;
        }

        setTimeout(_function, 400);
    }

    showError(errorMessage: string) {
        return Dialogs.alert(
            {
                title: '错误',
                message: errorMessage,
                okButtonText: '确定'
            }
        );
    }

    ngOnDestroy() {
        this.enableLoader(true);
    }

    enableLoader(value: boolean) {
        this.loader.enable(value);
    }

    showLoader(value: boolean, iosMessage?: string) {
        if (value) {
            this.loader.show(iosMessage);
        } else {
            this.loader.hide();
        }
    }

    showDialog(title: string, message: string, okButtonText: string) {
        return Dialogs.confirm({
            title: title,
            message: message,
            okButtonText: okButtonText,
        }).then(result => {
            return result;
        });
    }

    showOKCancelConfirm(title: string, message: string) {
        return Dialogs.confirm({
            title: title,
            message: message,
            okButtonText: '确定',
            cancelButtonText: '取消'
        }).then(result => {
            return result;
        });
    }

    showCustomConfirm(title: string, message: string, leftBtn: any, rightBtn: any) {
        return Dialogs.confirm({
            title: title,
            message: message,
            okButtonText: leftBtn,
            cancelButtonText: rightBtn
        }).then(result => {
            return result;
        });
    }
    showOneConfirm(title: string, message: string, leftBtn: any) {
        return Dialogs.confirm({
            title: title,
            message: message,
            okButtonText: leftBtn,
        }).then(result => {
            return result;
        });
    }

    showPrompt(title: string, message: string, okButtonText: string,
        cancelButtonText: string, defaultText: string,
        inputTypeString: string) {
        let inputType = Dialogs.inputType.text;

        return Dialogs.prompt({
            title: title,
            message: message,
            okButtonText: okButtonText,
            cancelButtonText: cancelButtonText,
            defaultText: defaultText,
            inputType: inputType
        });
    }

    showPromptUpdate(message: string, defaultText: string) {
        let inputType = Dialogs.inputType.password;

        return this.showPrompt('', message, '确定', '取消', defaultText, '');
    }

    getPage() {
        return this.page;
    }

    setActionBarHidden(hidden: boolean) {
        this.page.actionBarHidden = hidden;
    }

    getUTCDateFromString(value: string, format: string): Date {
        let utcDate = moment.utc(value, format, true);
        return utcDate.toDate();
    }

    public getCurrentDate() {
        let currentdate: any = moment().format('YYYY-MM-DD');
        return currentdate;
    }
}
