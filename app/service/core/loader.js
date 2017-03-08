var core_1 = require("@angular/core");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var LoaderService = (function () {
    function LoaderService() {
        this.loader = new nativescript_loading_indicator_1.LoadingIndicator();
        this.options = {
            message: '加载中...',
            ios: {
                details: '',
                square: false,
                margin: 10,
                dimBackground: true,
                color: 'transparent'
            }
        };
        this.enableLoader = true;
    }
    LoaderService.prototype.enable = function (value) {
        this.enableLoader = value;
    };
    LoaderService.prototype.show = function (iosDetails) {
        if (this.enableLoader) {
            if (iosDetails) {
                this.options.ios.details = iosDetails;
            }
            this.loader.show(this.options);
        }
    };
    LoaderService.prototype.hide = function () {
        this.loader.hide();
    };
    return LoaderService;
}());
LoaderService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], LoaderService);
exports.LoaderService = LoaderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNDQUEyQztBQUMzQyxpRkFBa0U7QUFLbEUsSUFBYSxhQUFhO0lBZXRCO1FBZEEsV0FBTSxHQUFHLElBQUksaURBQWdCLEVBQUUsQ0FBQztRQUNoQyxZQUFPLEdBQUc7WUFDTixPQUFPLEVBQUUsUUFBUTtZQUNqQixHQUFHLEVBQUU7Z0JBQ0QsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLEtBQUssRUFBRSxhQUFhO2FBQ3ZCO1NBQ0osQ0FBQztRQUVGLGlCQUFZLEdBQVksSUFBSSxDQUFDO0lBSTdCLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sS0FBYztRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRUQsNEJBQUksR0FBSixVQUFLLFVBQWtCO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztZQUMxQyxDQUFDO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLENBQUM7SUFDTCxDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVMLG9CQUFDO0FBQUQsQ0FBQyxBQXBDRCxJQW9DQztBQXBDWSxhQUFhO0lBRHpCLGlCQUFVLEVBQUU7O0dBQ0EsYUFBYSxDQW9DekI7QUFwQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2FkaW5nSW5kaWNhdG9yIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yJztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2FkZXJTZXJ2aWNlIHtcbiAgICBsb2FkZXIgPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIG1lc3NhZ2U6ICfliqDovb3kuK0uLi4nLFxuICAgICAgICBpb3M6IHtcbiAgICAgICAgICAgIGRldGFpbHM6ICcnLFxuICAgICAgICAgICAgc3F1YXJlOiBmYWxzZSxcbiAgICAgICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgICAgICBkaW1CYWNrZ3JvdW5kOiB0cnVlLFxuICAgICAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBlbmFibGVMb2FkZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBlbmFibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5lbmFibGVMb2FkZXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzaG93KGlvc0RldGFpbHM/OnN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5lbmFibGVMb2FkZXIgKSB7XG4gICAgICAgICAgICBpZiAoaW9zRGV0YWlscykge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pb3MuZGV0YWlscyA9IGlvc0RldGFpbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvYWRlci5zaG93KHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XG4gICAgfVxuXG59XG4iXX0=