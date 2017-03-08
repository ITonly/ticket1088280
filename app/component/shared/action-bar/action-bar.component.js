var core_1 = require("@angular/core");
var platform_1 = require("platform");
var fonticon_module_1 = require("../../../service/fonticon.module");
var router_1 = require("nativescript-angular/router");
var platform_providers_1 = require("nativescript-angular/platform-providers");
var page_1 = require("ui/page");
var router_2 = require("@angular/router");
var background_service_1 = require("../../../service/core/background.service");
var ActionBarComponent = (function () {
    function ActionBarComponent(fonticon, device, routerExtensions, backgroundService, page, router) {
        this.fonticon = fonticon;
        this.device = device;
        this.routerExtensions = routerExtensions;
        this.backgroundService = backgroundService;
        this.page = page;
        this.router = router;
        this.showNavBack = false;
        this.hideAction = false;
        this.useCustomTap = false;
        this.allowTitleClick = false;
        this.onNavTap = new core_1.EventEmitter();
        this.onTitleTap = new core_1.EventEmitter();
        this.isNoConnection = false;
        this.navIcon = 'res://ic_menu';
        this.navIconIos = 'ion-navicon';
        this.showBar = false;
    }
    ActionBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.showNavBack) {
            this.navIcon = 'res://ic_back';
            this.navIconIos = 'ion-ios-arrow-back';
        }
        else {
            this.navIcon = 'res://ic_menu';
            this.navIconIos = 'ion-navicon';
        }
        this.page.actionBarHidden = this.hideAction;
        this.subscription = this.backgroundService.onConnectionChanged.subscribe(function (connectionType) {
            console.log('connnection change actionBar', connectionType);
            if (connectionType === 'none') {
                _this.routerExtensions.navigate(['/'], {
                    clearHistory: true,
                    transition: {
                        name: 'slideRight',
                    },
                    animated: false
                });
            }
        });
        if (platform_1.isAndroid) {
            console.log('isAndroid', platform_1.isAndroid);
            this.showBar = false;
        }
        else {
            this.showBar = true;
        }
    };
    ActionBarComponent.prototype.onNavBtnTap = function () {
        console.log('onNavBtnTap=>', this.showNavBack, this.useCustomTap);
        if (!this.showNavBack || this.useCustomTap) {
            this.onNavTap.emit();
        }
        else {
            this.routerExtensions.backToPreviousPage();
        }
    };
    ActionBarComponent.prototype.onActionTitleTap = function () {
        if (this.allowTitleClick) {
            this.onTitleTap.emit();
        }
    };
    ActionBarComponent.prototype.ngOnDestroy = function () {
        console.log('unsubscribe to connectionChange');
        // prevent memory leak when component destroyed
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    };
    return ActionBarComponent;
}());
__decorate([
    core_1.Input('actionTitle'),
    __metadata("design:type", String)
], ActionBarComponent.prototype, "title", void 0);
__decorate([
    core_1.Input('showNav'),
    __metadata("design:type", Boolean)
], ActionBarComponent.prototype, "showNavBack", void 0);
__decorate([
    core_1.Input('hide'),
    __metadata("design:type", Boolean)
], ActionBarComponent.prototype, "hideAction", void 0);
__decorate([
    core_1.Input('useCustomTap'),
    __metadata("design:type", Boolean)
], ActionBarComponent.prototype, "useCustomTap", void 0);
__decorate([
    core_1.Input('allowTitleClick'),
    __metadata("design:type", Boolean)
], ActionBarComponent.prototype, "allowTitleClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ActionBarComponent.prototype, "onNavTap", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ActionBarComponent.prototype, "onTitleTap", void 0);
ActionBarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'gpm-action-bar',
        templateUrl: 'action-bar.component.html'
    }),
    __param(1, core_1.Inject(platform_providers_1.DEVICE)),
    __metadata("design:paramtypes", [fonticon_module_1.TNSFontIconService, Object, router_1.RouterExtensions,
        background_service_1.BackgroundService,
        page_1.Page, router_2.Router])
], ActionBarComponent);
exports.ActionBarComponent = ActionBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpb24tYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQ0FHdUI7QUFDdkIscUNBQTREO0FBQzVELG9FQUFzRTtBQUV0RSxzREFBK0Q7QUFDL0QsOEVBQWlFO0FBRWpFLGdDQUErQjtBQUMvQiwwQ0FBeUM7QUFHekMsK0VBQTZFO0FBTzdFLElBQWEsa0JBQWtCO0lBZTNCLDRCQUFvQixRQUE0QixFQUNwQixNQUFjLEVBQzlCLGdCQUFrQyxFQUNsQyxpQkFBb0MsRUFDcEMsSUFBVSxFQUFVLE1BQWM7UUFKMUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFqQjVCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDcEIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDM0Isb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakQsYUFBUSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzlCLGVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUVsQyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxZQUFPLEdBQVcsZUFBZSxDQUFDO1FBQ2xDLGVBQVUsR0FBVyxhQUFhLENBQUM7UUFFbkMsWUFBTyxHQUFZLEtBQUssQ0FBQztJQVFqQyxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQStCQztRQTlCRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FB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TSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixXQUFXLEVBQUUsMkJBQTJCO0tBQzNDLENBQUM7SUFpQk8sV0FBQSxhQUFNLENBQUMsMkJBQU0sQ0FBQyxDQUFBO3FDQURXLG9DQUFrQixVQUVsQix5QkFBZ0I7UUFDZixzQ0FBaUI7UUFDOUIsV0FBSSxFQUFrQixlQUFNO0dBbkJyQyxrQkFBa0IsQ0FnRjlCO0FBaEZZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdJbml0LFxuICAgIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MsIGRldmljZSwgc2NyZWVuIH0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZS9mb250aWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgRGV2aWNlLCBwbGF0Zm9ybU5hbWVzIH0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBERVZJQ0UgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybS1wcm92aWRlcnMnO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3VpL2NvcmUvdmlldyc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICogYXMgRGlhbG9ncyBmcm9tICd1aS9kaWFsb2dzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IEJhY2tncm91bmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZS9jb3JlL2JhY2tncm91bmQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdncG0tYWN0aW9uLWJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICdhY3Rpb24tYmFyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25CYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCdhY3Rpb25UaXRsZScpIHRpdGxlOiBzdHJpbmc7XG4gICAgQElucHV0KCdzaG93TmF2Jykgc2hvd05hdkJhY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoJ2hpZGUnKSBoaWRlQWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCd1c2VDdXN0b21UYXAnKSB1c2VDdXN0b21UYXA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoJ2FsbG93VGl0bGVDbGljaycpIGFsbG93VGl0bGVDbGljazogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBPdXRwdXQoKSBvbk5hdlRhcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgb25UaXRsZVRhcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHByaXZhdGUgaXNOb0Nvbm5lY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIG5hdkljb246IHN0cmluZyA9ICdyZXM6Ly9pY19tZW51JztcbiAgICBwcml2YXRlIG5hdkljb25Jb3M6IHN0cmluZyA9ICdpb24tbmF2aWNvbic7XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIHNob3dCYXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSxcbiAgICAgICAgQEluamVjdChERVZJQ0UpIHByaXZhdGUgZGV2aWNlOiBEZXZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBiYWNrZ3JvdW5kU2VydmljZTogQmFja2dyb3VuZFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3dOYXZCYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm5hdkljb24gPSAncmVzOi8vaWNfYmFjayc7XG4gICAgICAgICAgICB0aGlzLm5hdkljb25Jb3MgPSAnaW9uLWlvcy1hcnJvdy1iYWNrJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubmF2SWNvbiA9ICdyZXM6Ly9pY19tZW51JztcbiAgICAgICAgICAgIHRoaXMubmF2SWNvbklvcyA9ICdpb24tbmF2aWNvbic7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdGhpcy5oaWRlQWN0aW9uO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYmFja2dyb3VuZFNlcnZpY2Uub25Db25uZWN0aW9uQ2hhbmdlZC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBjb25uZWN0aW9uVHlwZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5uZWN0aW9uIGNoYW5nZSBhY3Rpb25CYXInLCBjb25uZWN0aW9uVHlwZSk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb25UeXBlID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnLyddLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzbGlkZVJpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkOiBmYWxzZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2lzQW5kcm9pZCcsIGlzQW5kcm9pZCk7XG4gICAgICAgICAgICB0aGlzLnNob3dCYXIgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0JhciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk5hdkJ0blRhcCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uTmF2QnRuVGFwPT4nLCB0aGlzLnNob3dOYXZCYWNrLCB0aGlzLnVzZUN1c3RvbVRhcCk7XG4gICAgICAgIGlmICghdGhpcy5zaG93TmF2QmFjayB8fCB0aGlzLnVzZUN1c3RvbVRhcCkge1xuICAgICAgICAgICAgdGhpcy5vbk5hdlRhcC5lbWl0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFjdGlvblRpdGxlVGFwKCkge1xuICAgICAgICBpZiAodGhpcy5hbGxvd1RpdGxlQ2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMub25UaXRsZVRhcC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Vuc3Vic2NyaWJlIHRvIGNvbm5lY3Rpb25DaGFuZ2UnKTtcbiAgICAgICAgLy8gcHJldmVudCBtZW1vcnkgbGVhayB3aGVuIGNvbXBvbmVudCBkZXN0cm95ZWRcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICB9XG59XG4iXX0=