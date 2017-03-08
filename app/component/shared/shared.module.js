var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var fonticon_module_1 = require("../../service/fonticon.module");
var angular_1 = require("nativescript-telerik-ui-pro/sidedrawer/angular");
var angular_2 = require("nativescript-telerik-ui-pro/listview/angular");
var action_bar_component_1 = require("./action-bar/action-bar.component");
var loader_1 = require("../../service/core/loader");
exports.fontConfig = {
    'fa': 'fonts/font-awesome.css',
    'ion': 'fonts/ionicon.css',
    'wf': 'fonts/onlinewebfonts.css'
};
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [platform_1.NativeScriptModule, forms_1.NativeScriptFormsModule, router_1.NativeScriptRouterModule,
            fonticon_module_1.TNSFontIconModule.forRoot(exports.fontConfig), angular_1.NativeScriptUISideDrawerModule,
            angular_2.NativeScriptUIListViewModule
        ],
        declarations: [action_bar_component_1.ActionBarComponent],
        exports: [action_bar_component_1.ActionBarComponent],
        providers: [loader_1.LoaderService],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMERBQW1FO0FBQ25FLG9EQUFxRTtBQUNyRSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLGlFQUFrRTtBQUVsRSwwRUFBZ0c7QUFDaEcsd0VBQTRGO0FBQzVGLDBFQUF1RTtBQUN2RSxvREFBMEQ7QUFFN0MsUUFBQSxVQUFVLEdBQVE7SUFDM0IsSUFBSSxFQUFFLHdCQUF3QjtJQUM5QixLQUFLLEVBQUUsbUJBQW1CO0lBQzFCLElBQUksRUFBRSwwQkFBMEI7Q0FDbkMsQ0FBQztBQVlGLElBQWEsWUFBWTtJQUF6QjtJQUE0QixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBQTdCLElBQTZCO0FBQWhCLFlBQVk7SUFWeEIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsNkJBQWtCLEVBQUUsK0JBQXVCLEVBQUUsaUNBQXdCO1lBQzNFLG1DQUFpQixDQUFDLE9BQU8sQ0FBQyxrQkFBVSxDQUFDLEVBQUUsd0NBQThCO1lBQ3JFLHNDQUE0QjtTQUMvQjtRQUNELFlBQVksRUFBRSxDQUFFLHlDQUFrQixDQUFDO1FBQ25DLE9BQU8sRUFBRSxDQUFDLHlDQUFrQixDQUFDO1FBQzdCLFNBQVMsRUFBRSxDQUFDLHNCQUFhLENBQUM7UUFDMUIsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7S0FDOUIsQ0FBQztHQUNXLFlBQVksQ0FBSTtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvZm9udGljb24ubW9kdWxlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWktcHJvL3NpZGVkcmF3ZXIvYW5ndWxhcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWktcHJvL2xpc3R2aWV3L2FuZ3VsYXInO1xuaW1wb3J0IHsgQWN0aW9uQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9hY3Rpb24tYmFyL2FjdGlvbi1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2NvcmUvbG9hZGVyJztcblxuZXhwb3J0IGNvbnN0IGZvbnRDb25maWc6IGFueSA9IHtcbiAgICAnZmEnOiAnZm9udHMvZm9udC1hd2Vzb21lLmNzcycsXG4gICAgJ2lvbic6ICdmb250cy9pb25pY29uLmNzcycsXG4gICAgJ3dmJzogJ2ZvbnRzL29ubGluZXdlYmZvbnRzLmNzcydcbn07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZSwgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdChmb250Q29uZmlnKSwgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFsgQWN0aW9uQmFyQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbQWN0aW9uQmFyQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtMb2FkZXJTZXJ2aWNlXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHsgfVxuIl19