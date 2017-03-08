var core_1 = require("@angular/core");
var fonticon_service_1 = require("./service/fonticon.service");
var background_service_1 = require("./service/core/background.service");
var connectivity = require("connectivity");
var moment = require("moment");
var application = require("application");
var storage_service_1 = require("./service/core/storage.service");
var AppComponent = (function () {
    function AppComponent(tnsFontIconService, backgroundService, zone, storageService) {
        this.tnsFontIconService = tnsFontIconService;
        this.backgroundService = backgroundService;
        this.zone = zone;
        this.storageService = storageService;
        moment.locale('zh-cn');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('app component on init');
        connectivity.startMonitoring(function (newConnectionType) {
            _this.zone.run(function () {
                console.log('connecction type ' + newConnectionType);
                switch (newConnectionType) {
                    case connectivity.connectionType.none:
                        _this.backgroundService.connectionChange('none');
                        console.log('connection type change to none');
                        break;
                    case connectivity.connectionType.wifi:
                        _this.backgroundService.connectionChange('wifi');
                        console.log('Connection type changed to WiFi.');
                        break;
                    default:
                        _this.backgroundService.connectionChange('mobile');
                        console.log('Connection type changed to mobile.');
                        break;
                }
            });
        });
        application.on(application.uncaughtErrorEvent, function (args) {
            var android = args.android;
            if (android) {
                console.log('uncaughtErrorEvent android=>');
                console.log('uncaughtErrorEvent args android=>', android);
            }
            else {
                console.log('uncaughtErrorEvent ios=>');
                console.log('uncaughtErrorEvent args ios=>', args.ios);
            }
            _this.storageService.setToken(null);
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        console.log('app component on destroy');
        connectivity.stopMonitoring();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: 'app.component.html'
    }),
    __metadata("design:paramtypes", [fonticon_service_1.TNSFontIconService,
        background_service_1.BackgroundService, core_1.NgZone,
        storage_service_1.StorageService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXFFO0FBQ3JFLCtEQUFnRTtBQUNoRSx3RUFBc0U7QUFDdEUsMkNBQTZDO0FBQzdDLCtCQUFpQztBQUNqQyx5Q0FBMkM7QUFDM0Msa0VBQWdFO0FBTWhFLElBQWEsWUFBWTtJQUNyQixzQkFBb0Isa0JBQXNDLEVBQzlDLGlCQUFvQyxFQUFVLElBQVksRUFDMUQsY0FBOEI7UUFGdEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUM5QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUMxRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFFdEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUFBLGlCQWtDQztRQWpDRyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDckMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxVQUFDLGlCQUF5QjtZQUNuRCxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLGlCQUFpQixDQUFDLENBQUM7Z0JBQ3JELE1BQU0sQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztvQkFDeEIsS0FBSyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUk7d0JBQ2pDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO3dCQUM5QyxLQUFLLENBQUM7b0JBQ1YsS0FBSyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUk7d0JBQ2pDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO3dCQUNoRCxLQUFLLENBQUM7b0JBQ1Y7d0JBQ0ksS0FBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7d0JBQ2xELEtBQUssQ0FBQztnQkFDZCxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVILFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLFVBQUEsSUFBSTtZQUMvQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO2dCQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRTlELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNELENBQUM7WUFDRCxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBR0wsbUJBQUM7QUFBRCxDQUFDLEFBbERELElBa0RDO0FBbERZLFlBQVk7SUFKeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxLQUFLO1FBQ2YsV0FBVyxFQUFFLG9CQUFvQjtLQUNwQyxDQUFDO3FDQUUwQyxxQ0FBa0I7UUFDM0Isc0NBQWlCLEVBQWdCLGFBQU07UUFDMUMsZ0NBQWM7R0FIakMsWUFBWSxDQWtEeEI7QUFsRFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9mb250aWNvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEJhY2tncm91bmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2NvcmUvYmFja2dyb3VuZC5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGNvbm5lY3Rpdml0eSBmcm9tICdjb25uZWN0aXZpdHknO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tICdhcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9jb3JlL3N0b3JhZ2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdG5zRm9udEljb25TZXJ2aWNlOiBUTlNGb250SWNvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYmFja2dyb3VuZFNlcnZpY2U6IEJhY2tncm91bmRTZXJ2aWNlLCBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgbW9tZW50LmxvY2FsZSgnemgtY24nKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FwcCBjb21wb25lbnQgb24gaW5pdCcpO1xuICAgICAgICBjb25uZWN0aXZpdHkuc3RhcnRNb25pdG9yaW5nKChuZXdDb25uZWN0aW9uVHlwZTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjY3Rpb24gdHlwZSAnICsgbmV3Q29ubmVjdGlvblR5cGUpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobmV3Q29ubmVjdGlvblR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUubm9uZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZFNlcnZpY2UuY29ubmVjdGlvbkNoYW5nZSgnbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3Rpb24gdHlwZSBjaGFuZ2UgdG8gbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLndpZmk6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhY2tncm91bmRTZXJ2aWNlLmNvbm5lY3Rpb25DaGFuZ2UoJ3dpZmknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0aW9uIHR5cGUgY2hhbmdlZCB0byBXaUZpLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhY2tncm91bmRTZXJ2aWNlLmNvbm5lY3Rpb25DaGFuZ2UoJ21vYmlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3Rpb24gdHlwZSBjaGFuZ2VkIHRvIG1vYmlsZS4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBhcHBsaWNhdGlvbi5vbihhcHBsaWNhdGlvbi51bmNhdWdodEVycm9yRXZlbnQsIGFyZ3MgPT4ge1xuICAgICAgICAgICAgbGV0IGFuZHJvaWQgPSBhcmdzLmFuZHJvaWQ7XG4gICAgICAgICAgICBpZiAoYW5kcm9pZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmNhdWdodEVycm9yRXZlbnQgYW5kcm9pZD0+Jyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuY2F1Z2h0RXJyb3JFdmVudCBhcmdzIGFuZHJvaWQ9PicsIGFuZHJvaWQpO1xuICAgICAgICAgICAgICAgIC8vIGFuZHJvaWQub3MuUHJvY2Vzcy5raWxsUHJvY2VzcyhhbmRyb2lkLm9zLlByb2Nlc3MubXlQaWQoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmNhdWdodEVycm9yRXZlbnQgaW9zPT4nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5jYXVnaHRFcnJvckV2ZW50IGFyZ3MgaW9zPT4nLCBhcmdzLmlvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldFRva2VuKG51bGwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FwcCBjb21wb25lbnQgb24gZGVzdHJveScpO1xuICAgICAgICBjb25uZWN0aXZpdHkuc3RvcE1vbml0b3JpbmcoKTtcbiAgICB9XG5cblxufVxuIl19