var Dialogs = require("ui/dialogs");
var moment = require("moment");
var platform_1 = require("platform");
var application = require("application");
var BaseComponent = (function () {
    function BaseComponent(page, loader) {
        this.page = page;
        this.loader = loader;
        if (application.android) {
            application.android.foregroundActivity.setRequestedOrientation(1);
        }
    }
    BaseComponent.prototype.refresh = function (_function) {
        var timeout = 400;
        if (platform_1.isIOS) {
            timeout = 0;
        }
        setTimeout(_function, 400);
    };
    BaseComponent.prototype.showError = function (errorMessage) {
        return Dialogs.alert({
            title: '错误',
            message: errorMessage,
            okButtonText: '确定'
        });
    };
    BaseComponent.prototype.ngOnDestroy = function () {
        this.enableLoader(true);
    };
    BaseComponent.prototype.enableLoader = function (value) {
        this.loader.enable(value);
    };
    BaseComponent.prototype.showLoader = function (value, iosMessage) {
        if (value) {
            this.loader.show(iosMessage);
        }
        else {
            this.loader.hide();
        }
    };
    BaseComponent.prototype.showDialog = function (title, message, okButtonText) {
        return Dialogs.confirm({
            title: title,
            message: message,
            okButtonText: okButtonText,
        }).then(function (result) {
            return result;
        });
    };
    BaseComponent.prototype.showOKCancelConfirm = function (title, message) {
        return Dialogs.confirm({
            title: title,
            message: message,
            okButtonText: '确定',
            cancelButtonText: '取消'
        }).then(function (result) {
            return result;
        });
    };
    BaseComponent.prototype.showCustomConfirm = function (title, message, leftBtn, rightBtn) {
        return Dialogs.confirm({
            title: title,
            message: message,
            okButtonText: leftBtn,
            cancelButtonText: rightBtn
        }).then(function (result) {
            return result;
        });
    };
    BaseComponent.prototype.showOneConfirm = function (title, message, leftBtn) {
        return Dialogs.confirm({
            title: title,
            message: message,
            okButtonText: leftBtn,
        }).then(function (result) {
            return result;
        });
    };
    BaseComponent.prototype.showPrompt = function (title, message, okButtonText, cancelButtonText, defaultText, inputTypeString) {
        var inputType = Dialogs.inputType.text;
        return Dialogs.prompt({
            title: title,
            message: message,
            okButtonText: okButtonText,
            cancelButtonText: cancelButtonText,
            defaultText: defaultText,
            inputType: inputType
        });
    };
    BaseComponent.prototype.showPromptUpdate = function (message, defaultText) {
        var inputType = Dialogs.inputType.password;
        return this.showPrompt('', message, '确定', '取消', defaultText, '');
    };
    BaseComponent.prototype.getPage = function () {
        return this.page;
    };
    BaseComponent.prototype.setActionBarHidden = function (hidden) {
        this.page.actionBarHidden = hidden;
    };
    BaseComponent.prototype.getUTCDateFromString = function (value, format) {
        var utcDate = moment.utc(value, format, true);
        return utcDate.toDate();
    };
    BaseComponent.prototype.getCurrentDate = function () {
        var currentdate = moment().format('YYYY-MM-DD');
        return currentdate;
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxvQ0FBc0M7QUFDdEMsK0JBQWlDO0FBRWpDLHFDQUFpQztBQUNqQyx5Q0FBMkM7QUFFM0M7SUFDSSx1QkFBb0IsSUFBVSxFQUFVLE1BQXFCO1FBQXpDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3pELEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLFdBQVcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEUsQ0FBQztJQUNMLENBQUM7SUFFRCwrQkFBTyxHQUFQLFVBQVEsU0FBUztRQUNiLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUVsQixFQUFFLENBQUMsQ0FBQyxnQkFBSyxDQUFDLENBQUMsQ0FBQztZQUNSLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUVELFVBQVUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxZQUFvQjtRQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FDaEI7WUFDSSxLQUFLLEVBQUUsSUFBSTtZQUNYLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLEtBQWM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxLQUFjLEVBQUUsVUFBbUI7UUFDMUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsQ0FBQztJQUNMLENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsS0FBYSxFQUFFLE9BQWUsRUFBRSxZQUFvQjtRQUMzRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNuQixLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFlBQVksRUFBRSxZQUFZO1NBQzdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1YsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwyQ0FBbUIsR0FBbkIsVUFBb0IsS0FBYSxFQUFFLE9BQWU7UUFDOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDbkIsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixZQUFZLEVBQUUsSUFBSTtZQUNsQixnQkFBZ0IsRUFBRSxJQUFJO1NBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1YsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5Q0FBaUIsR0FBakIsVUFBa0IsS0FBYSxFQUFFLE9BQWUsRUFBRSxPQUFZLEVBQUUsUUFBYTtRQUN6RSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNuQixLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFlBQVksRUFBRSxPQUFPO1lBQ3JCLGdCQUFnQixFQUFFLFFBQVE7U0FDN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDVixNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELHNDQUFjLEdBQWQsVUFBZSxLQUFhLEVBQUUsT0FBZSxFQUFFLE9BQVk7UUFDdkQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDbkIsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixZQUFZLEVBQUUsT0FBTztTQUN4QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNWLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLEtBQWEsRUFBRSxPQUFlLEVBQUUsWUFBb0IsRUFDM0QsZ0JBQXdCLEVBQUUsV0FBbUIsRUFDN0MsZUFBdUI7UUFDdkIsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFFdkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDbEIsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixZQUFZLEVBQUUsWUFBWTtZQUMxQixnQkFBZ0IsRUFBRSxnQkFBZ0I7WUFDbEMsV0FBVyxFQUFFLFdBQVc7WUFDeEIsU0FBUyxFQUFFLFNBQVM7U0FDdkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdDQUFnQixHQUFoQixVQUFpQixPQUFlLEVBQUUsV0FBbUI7UUFDakQsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFFM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEIsVUFBbUIsTUFBZTtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7SUFDdkMsQ0FBQztJQUVELDRDQUFvQixHQUFwQixVQUFxQixLQUFhLEVBQUUsTUFBYztRQUM5QyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sc0NBQWMsR0FBckI7UUFDSSxJQUFJLFdBQVcsR0FBUSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBMUhELElBMEhDO0FBMUhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCAqIGFzIERpYWxvZ3MgZnJvbSAndWkvZGlhbG9ncyc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2NvcmUvbG9hZGVyJztcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSAnYXBwbGljYXRpb24nO1xuXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGxvYWRlcjogTG9hZGVyU2VydmljZSkge1xuICAgICAgICBpZiAoYXBwbGljYXRpb24uYW5kcm9pZCkge1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHkuc2V0UmVxdWVzdGVkT3JpZW50YXRpb24oMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWZyZXNoKF9mdW5jdGlvbikge1xuICAgICAgICBsZXQgdGltZW91dCA9IDQwMDtcblxuICAgICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dChfZnVuY3Rpb24sIDQwMCk7XG4gICAgfVxuXG4gICAgc2hvd0Vycm9yKGVycm9yTWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBEaWFsb2dzLmFsZXJ0KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6ZSZ6K+vJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAn56Gu5a6aJ1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmVuYWJsZUxvYWRlcih0cnVlKTtcbiAgICB9XG5cbiAgICBlbmFibGVMb2FkZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5sb2FkZXIuZW5hYmxlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBzaG93TG9hZGVyKHZhbHVlOiBib29sZWFuLCBpb3NNZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkZXIuc2hvdyhpb3NNZXNzYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dEaWFsb2codGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBva0J1dHRvblRleHQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gRGlhbG9ncy5jb25maXJtKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IG9rQnV0dG9uVGV4dCxcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd09LQ2FuY2VsQ29uZmlybSh0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIERpYWxvZ3MuY29uZmlybSh7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAn56Gu5a6aJyxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICflj5bmtognXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dDdXN0b21Db25maXJtKHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgbGVmdEJ0bjogYW55LCByaWdodEJ0bjogYW55KSB7XG4gICAgICAgIHJldHVybiBEaWFsb2dzLmNvbmZpcm0oe1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogbGVmdEJ0bixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IHJpZ2h0QnRuXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaG93T25lQ29uZmlybSh0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGxlZnRCdG46IGFueSkge1xuICAgICAgICByZXR1cm4gRGlhbG9ncy5jb25maXJtKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IGxlZnRCdG4sXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dQcm9tcHQodGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBva0J1dHRvblRleHQ6IHN0cmluZyxcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogc3RyaW5nLCBkZWZhdWx0VGV4dDogc3RyaW5nLFxuICAgICAgICBpbnB1dFR5cGVTdHJpbmc6IHN0cmluZykge1xuICAgICAgICBsZXQgaW5wdXRUeXBlID0gRGlhbG9ncy5pbnB1dFR5cGUudGV4dDtcblxuICAgICAgICByZXR1cm4gRGlhbG9ncy5wcm9tcHQoe1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogb2tCdXR0b25UZXh0LFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsQnV0dG9uVGV4dCxcbiAgICAgICAgICAgIGRlZmF1bHRUZXh0OiBkZWZhdWx0VGV4dCxcbiAgICAgICAgICAgIGlucHV0VHlwZTogaW5wdXRUeXBlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dQcm9tcHRVcGRhdGUobWVzc2FnZTogc3RyaW5nLCBkZWZhdWx0VGV4dDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBpbnB1dFR5cGUgPSBEaWFsb2dzLmlucHV0VHlwZS5wYXNzd29yZDtcblxuICAgICAgICByZXR1cm4gdGhpcy5zaG93UHJvbXB0KCcnLCBtZXNzYWdlLCAn56Gu5a6aJywgJ+WPlua2iCcsIGRlZmF1bHRUZXh0LCAnJyk7XG4gICAgfVxuXG4gICAgZ2V0UGFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgICB9XG5cbiAgICBzZXRBY3Rpb25CYXJIaWRkZW4oaGlkZGVuOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBoaWRkZW47XG4gICAgfVxuXG4gICAgZ2V0VVRDRGF0ZUZyb21TdHJpbmcodmFsdWU6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcpOiBEYXRlIHtcbiAgICAgICAgbGV0IHV0Y0RhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBmb3JtYXQsIHRydWUpO1xuICAgICAgICByZXR1cm4gdXRjRGF0ZS50b0RhdGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q3VycmVudERhdGUoKSB7XG4gICAgICAgIGxldCBjdXJyZW50ZGF0ZTogYW55ID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICAgIHJldHVybiBjdXJyZW50ZGF0ZTtcbiAgICB9XG59XG4iXX0=