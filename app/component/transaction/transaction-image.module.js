var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var router_1 = require("nativescript-angular/router");
var fonticon_module_1 = require("../../service/fonticon.module");
var transaction_image_component_1 = require("./transaction-image.component");
var shared_module_1 = require("../shared/shared.module");
var pipe_module_1 = require("../../pipe/pipe.module");
exports.routerConfig = [
    {
        path: '',
        component: transaction_image_component_1.TransactionImageComponent
    }
];
var TransactionImageModule = (function () {
    function TransactionImageModule() {
    }
    return TransactionImageModule;
}());
TransactionImageModule = __decorate([
    core_1.NgModule({
        schemas: [core_1.NO_ERRORS_SCHEMA],
        imports: [platform_1.NativeScriptModule, forms_1.NativeScriptFormsModule, router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forChild(exports.routerConfig),
            shared_module_1.SharedModule, pipe_module_1.PipeModule, fonticon_module_1.TNSFontIconModule.forRoot({
                'fa': 'fonts/font-awesome.css'
            })],
        declarations: [transaction_image_component_1.TransactionImageComponent],
        exports: [transaction_image_component_1.TransactionImageComponent]
    }),
    __metadata("design:paramtypes", [])
], TransactionImageModule);
exports.TransactionImageModule = TransactionImageModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24taW1hZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhbnNhY3Rpb24taW1hZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNDQUEyRDtBQUMzRCwwREFBbUU7QUFDbkUsb0RBQXFFO0FBQ3JFLHNEQUF1RTtBQUN2RSxpRUFBa0U7QUFFbEUsNkVBQTBFO0FBQzFFLHlEQUF1RDtBQUN2RCxzREFBb0Q7QUFFdkMsUUFBQSxZQUFZLEdBQUc7SUFDeEI7UUFDSSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSx1REFBeUI7S0FDdkM7Q0FDSixDQUFDO0FBWUYsSUFBYSxzQkFBc0I7SUFDL0I7SUFFQSxDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLHNCQUFzQjtJQVZsQyxlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztRQUMzQixPQUFPLEVBQUUsQ0FBQyw2QkFBa0IsRUFBRSwrQkFBdUIsRUFBRSxpQ0FBd0I7WUFDM0UsaUNBQXdCLENBQUMsUUFBUSxDQUFDLG9CQUFZLENBQUM7WUFDL0MsNEJBQVksRUFBRSx3QkFBVSxFQUFFLG1DQUFpQixDQUFDLE9BQU8sQ0FBQztnQkFDaEQsSUFBSSxFQUFFLHdCQUF3QjthQUNqQyxDQUFDLENBQUM7UUFDUCxZQUFZLEVBQUUsQ0FBQyx1REFBeUIsQ0FBQztRQUN6QyxPQUFPLEVBQUUsQ0FBQyx1REFBeUIsQ0FBQztLQUN2QyxDQUFDOztHQUNXLHNCQUFzQixDQUlsQztBQUpZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvZm9udGljb24ubW9kdWxlJztcblxuaW1wb3J0IHsgVHJhbnNhY3Rpb25JbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vdHJhbnNhY3Rpb24taW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IFBpcGVNb2R1bGUgfSBmcm9tICcuLi8uLi9waXBlL3BpcGUubW9kdWxlJztcblxuZXhwb3J0IGNvbnN0IHJvdXRlckNvbmZpZyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBjb21wb25lbnQ6IFRyYW5zYWN0aW9uSW1hZ2VDb21wb25lbnRcbiAgICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlLCBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSwgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVyQ29uZmlnKSxcbiAgICAgICAgU2hhcmVkTW9kdWxlLCBQaXBlTW9kdWxlLCBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAgICdmYSc6ICdmb250cy9mb250LWF3ZXNvbWUuY3NzJ1xuICAgICAgICB9KV0sXG4gICAgZGVjbGFyYXRpb25zOiBbVHJhbnNhY3Rpb25JbWFnZUNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1RyYW5zYWN0aW9uSW1hZ2VDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uSW1hZ2VNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxufVxuIl19