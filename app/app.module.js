var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var element_registry_1 = require("nativescript-angular/element-registry");
var core_1 = require("@angular/core");
var router_2 = require("nativescript-angular/router");
var nativescript_web_image_cache_1 = require("nativescript-web-image-cache");
var router_3 = require("nativescript-angular/router");
var accounting_1 = require("./api/accounting");
var fonticon_module_1 = require("../app/service/fonticon.module");
var core_2 = require("./service/core");
var application = require("application");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
// Uncomment for release version
//  enableProdMode();
function httpHelperFactory(xhrBackend, requestOptions, router, storageService, loaderService) {
    return new core_2.HttpBaseService(xhrBackend, requestOptions, router, storageService, loaderService);
}
exports.httpHelperFactory = httpHelperFactory;
function newGPXSRFStrategy() {
    return new core_2.GPXSRFStrategy();
}
exports.newGPXSRFStrategy = newGPXSRFStrategy;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_1.NativeScriptModule, router_2.NativeScriptRouterModule, forms_1.NativeScriptFormsModule,
            router_2.NativeScriptRouterModule.forRoot(app_routes_1.routes), http_1.HttpModule,
            fonticon_module_1.TNSFontIconModule.forRoot({
                'fa': 'fonts/font-awesome.css',
                'ion': 'fonts/ionicon.css',
                'wf': 'fonts/onlinewebfonts.css'
            }),
        ],
        declarations: [
            app_component_1.AppComponent
        ],
        exports: [],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            core_2.StorageService, core_2.LoaderService, core_2.Config, core_2.BackgroundService,
            core_2.RouteStateService,
            { provide: http_1.XSRFStrategy, useFactory: newGPXSRFStrategy },
            // comment when run  bundle
            { provide: core_1.NgModuleFactoryLoader, useClass: router_3.NSModuleFactoryLoader },
            { provide: accounting_1.ACCOUNTING_BASE_PATH, useValue: 'https://api-accounting-dev.guanplus.com' },
            // { provide: ACCOUNTING_BASE_PATH, useValue: 'https://api-accounting.guanplus.com' },
            // { provide: IDENTITY_BASE_PATH, useValue: 'https://api-identity.guanplus.com' },
            {
                provide: http_1.Http,
                useFactory: httpHelperFactory,
                deps: [http_1.XHRBackend, http_1.RequestOptions, router_1.Router, core_2.StorageService, core_2.LoaderService]
            }
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
element_registry_1.registerElement('DropDown', function () { return require('nativescript-drop-down').DropDown; });
application.on(application.launchEvent, function (args) {
    nativescript_web_image_cache_1.initializeOnAngular();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQXlDO0FBQ3pDLHNDQUEyRjtBQUMzRiwwREFBbUU7QUFDbkUsb0RBQXFFO0FBQ3JFLDBFQUF3RTtBQUV4RSxzQ0FBa0c7QUFDbEcsc0RBQXVFO0FBRXZFLDZFQUFtRTtBQUNuRSxzREFBc0Y7QUFFdEYsK0NBQXdEO0FBQ3hELGtFQUFtRTtBQUVuRSx1Q0FHd0I7QUFDeEIseUNBQTJDO0FBSTNDLDJDQUFzQztBQUN0QyxpREFBK0M7QUFFL0MsZ0NBQWdDO0FBQ2hDLHFCQUFxQjtBQUVyQiwyQkFBa0MsVUFBc0IsRUFBRSxjQUE4QixFQUNwRixNQUFjLEVBQUUsY0FBOEIsRUFBRSxhQUE0QjtJQUM1RSxNQUFNLENBQUMsSUFBSSxzQkFBZSxDQUFDLFVBQVUsRUFBRSxjQUFjLEVBQ2pELE1BQU0sRUFBRSxjQUFjLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUpELDhDQUlDO0FBRUQ7SUFDSSxNQUFNLENBQUMsSUFBSSxxQkFBYyxFQUFFLENBQUM7QUFDaEMsQ0FBQztBQUZELDhDQUVDO0FBb0NELElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsU0FBUztJQWxDckIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsNkJBQWtCLEVBQUUsaUNBQXdCLEVBQUUsK0JBQXVCO1lBQ3JFLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxtQkFBTSxDQUFDLEVBQUUsaUJBQVU7WUFDcEQsbUNBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUN0QixJQUFJLEVBQUUsd0JBQXdCO2dCQUM5QixLQUFLLEVBQUUsbUJBQW1CO2dCQUMxQixJQUFJLEVBQUUsMEJBQTBCO2FBQ25DLENBQUM7U0FDTDtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUUsRUFBRTtRQUNYLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDekIsU0FBUyxFQUFFO1lBQ1AscUJBQWMsRUFBRSxvQkFBYSxFQUFFLGFBQU0sRUFBRSx3QkFBaUI7WUFDdkQsd0JBQWlCO1lBQ2xCLEVBQUUsT0FBTyxFQUFFLG1CQUFZLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFO1lBRXhELDJCQUEyQjtZQUMzQixFQUFFLE9BQU8sRUFBRSw0QkFBcUIsRUFBRSxRQUFRLEVBQUUsOEJBQXFCLEVBQUU7WUFFbkUsRUFBRSxPQUFPLEVBQUUsaUNBQW9CLEVBQUUsUUFBUSxFQUFFLHlDQUF5QyxFQUFFO1lBQ3RGLHNGQUFzRjtZQUN0RixrRkFBa0Y7WUFDbEY7Z0JBQ0ksT0FBTyxFQUFFLFdBQUk7Z0JBQ2IsVUFBVSxFQUFFLGlCQUFpQjtnQkFDN0IsSUFBSSxFQUFFLENBQUMsaUJBQVUsRUFBRSxxQkFBYyxFQUFFLGVBQU0sRUFBRSxxQkFBYyxFQUFFLG9CQUFhLENBQUM7YUFDNUU7U0FDSjtRQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO0tBQzlCLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUztBQUV0QixrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUMsUUFBUSxFQUExQyxDQUEwQyxDQUFDLENBQUM7QUFFOUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFVBQVUsSUFBc0M7SUFDcEYsa0RBQW1CLEVBQUUsQ0FBQztBQUMxQixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBIdHRwLCBYSFJCYWNrZW5kLCBSZXF1ZXN0T3B0aW9ucywgWFNSRlN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xuXG5pbXBvcnQgeyBOZ01vZHVsZSwgZW5hYmxlUHJvZE1vZGUsIE5PX0VSUk9SU19TQ0hFTUEsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgaW5pdGlhbGl6ZU9uQW5ndWxhciB9IGZyb20gJ25hdGl2ZXNjcmlwdC13ZWItaW1hZ2UtY2FjaGUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgTlNNb2R1bGVGYWN0b3J5TG9hZGVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQUNDT1VOVElOR19CQVNFX1BBVEggfSBmcm9tICcuL2FwaS9hY2NvdW50aW5nJztcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSAnLi4vYXBwL3NlcnZpY2UvZm9udGljb24ubW9kdWxlJztcblxuaW1wb3J0IHtcbiAgICBTdG9yYWdlU2VydmljZSwgSHR0cEJhc2VTZXJ2aWNlLCBHUFhTUkZTdHJhdGVneSwgTG9hZGVyU2VydmljZSxcbiAgICAgQ29uZmlnLCBCYWNrZ3JvdW5kU2VydmljZSwgUm91dGVTdGF0ZVNlcnZpY2Vcbn0gZnJvbSAnLi9zZXJ2aWNlL2NvcmUnO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSAnYXBwbGljYXRpb24nO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudC9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuXG4vLyBVbmNvbW1lbnQgZm9yIHJlbGVhc2UgdmVyc2lvblxuLy8gIGVuYWJsZVByb2RNb2RlKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBodHRwSGVscGVyRmFjdG9yeSh4aHJCYWNrZW5kOiBYSFJCYWNrZW5kLCByZXF1ZXN0T3B0aW9uczogUmVxdWVzdE9wdGlvbnMsXG4gICAgcm91dGVyOiBSb3V0ZXIsIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSwgbG9hZGVyU2VydmljZTogTG9hZGVyU2VydmljZSkge1xuICAgIHJldHVybiBuZXcgSHR0cEJhc2VTZXJ2aWNlKHhockJhY2tlbmQsIHJlcXVlc3RPcHRpb25zLFxuICAgICAgICByb3V0ZXIsIHN0b3JhZ2VTZXJ2aWNlLCBsb2FkZXJTZXJ2aWNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0dQWFNSRlN0cmF0ZWd5KCkge1xuICAgIHJldHVybiBuZXcgR1BYU1JGU3RyYXRlZ3koKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSwgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLCBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSwgSHR0cE1vZHVsZSxcbiAgICAgICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgICAnZmEnOiAnZm9udHMvZm9udC1hd2Vzb21lLmNzcycsXG4gICAgICAgICAgICAnaW9uJzogJ2ZvbnRzL2lvbmljb24uY3NzJyxcbiAgICAgICAgICAgICd3Zic6ICdmb250cy9vbmxpbmV3ZWJmb250cy5jc3MnXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW10sXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgU3RvcmFnZVNlcnZpY2UsIExvYWRlclNlcnZpY2UsIENvbmZpZywgQmFja2dyb3VuZFNlcnZpY2UsXG4gICAgICAgICBSb3V0ZVN0YXRlU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiBYU1JGU3RyYXRlZ3ksIHVzZUZhY3Rvcnk6IG5ld0dQWFNSRlN0cmF0ZWd5IH0sXG5cbiAgICAgICAgLy8gY29tbWVudCB3aGVuIHJ1biAgYnVuZGxlXG4gICAgICAgIHsgcHJvdmlkZTogTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCB1c2VDbGFzczogTlNNb2R1bGVGYWN0b3J5TG9hZGVyIH0sXG5cbiAgICAgICAgeyBwcm92aWRlOiBBQ0NPVU5USU5HX0JBU0VfUEFUSCwgdXNlVmFsdWU6ICdodHRwczovL2FwaS1hY2NvdW50aW5nLWRldi5ndWFucGx1cy5jb20nIH0sXG4gICAgICAgIC8vIHsgcHJvdmlkZTogQUNDT1VOVElOR19CQVNFX1BBVEgsIHVzZVZhbHVlOiAnaHR0cHM6Ly9hcGktYWNjb3VudGluZy5ndWFucGx1cy5jb20nIH0sXG4gICAgICAgIC8vIHsgcHJvdmlkZTogSURFTlRJVFlfQkFTRV9QQVRILCB1c2VWYWx1ZTogJ2h0dHBzOi8vYXBpLWlkZW50aXR5Lmd1YW5wbHVzLmNvbScgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogSHR0cCxcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGh0dHBIZWxwZXJGYWN0b3J5LFxuICAgICAgICAgICAgZGVwczogW1hIUkJhY2tlbmQsIFJlcXVlc3RPcHRpb25zLCBSb3V0ZXIsIFN0b3JhZ2VTZXJ2aWNlLCBMb2FkZXJTZXJ2aWNlXVxuICAgICAgICB9XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuXG5yZWdpc3RlckVsZW1lbnQoJ0Ryb3BEb3duJywgKCkgPT4gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LWRyb3AtZG93bicpLkRyb3BEb3duKTtcblxuYXBwbGljYXRpb24ub24oYXBwbGljYXRpb24ubGF1bmNoRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBhcHBsaWNhdGlvbi5BcHBsaWNhdGlvbkV2ZW50RGF0YSkge1xuICAgIGluaXRpYWxpemVPbkFuZ3VsYXIoKTtcbn0pO1xuIl19