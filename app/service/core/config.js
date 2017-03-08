var core_1 = require("@angular/core");
var variables_1 = require("../../api/accounting/variables");
var app = require('nativescript-appversion');
var Config = (function () {
    function Config(accountingPath) {
        this.author = {
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
        this.apiUrls = {
            identity: '',
            resource: ''
        };
        this.apiUrls.resource = accountingPath;
        console.log(accountingPath);
        this.getAppVersion();
    }
    Config.prototype.getAppVersion = function () {
        var self = this;
        app.getVersionName().then(function (version) {
            self.author.version = version;
        });
    };
    return Config;
}());
Config = __decorate([
    __param(0, core_1.Optional()), __param(0, core_1.Inject(variables_1.ACCOUNTING_BASE_PATH)),
    __metadata("design:paramtypes", [String])
], Config);
exports.Config = Config;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNDQUE2RDtBQUM3RCw0REFBc0U7QUFDdEUsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFFN0MsSUFBYSxNQUFNO0lBa0JmLGdCQUF1RCxjQUFzQjtRQWpCN0UsV0FBTSxHQUFHO1lBQ0wsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULFNBQVMsRUFBRSx3Q0FBd0M7WUFDbkQsR0FBRyxFQUFFLGlCQUFpQjtZQUN0QixPQUFPLEVBQUUsRUFBRTtZQUNYLFlBQVksRUFBRSxzQkFBc0I7WUFDcEMsWUFBWSxFQUFFLGNBQWM7WUFDNUIsV0FBVyxFQUFFLHlDQUF5QztZQUN0RCxPQUFPLEVBQUUsMEJBQTBCO1NBQ3RDLENBQUM7UUFFRixZQUFPLEdBQUc7WUFDTixRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxFQUFFO1NBQ2YsQ0FBQztRQUdFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU8sOEJBQWEsR0FBckI7UUFDSSxJQUFJLElBQUksR0FBUSxJQUFJLENBQUM7UUFDckIsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLE9BQU87WUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBOUJZLE1BQU07SUFrQkQsV0FBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsYUFBTSxDQUFDLGdDQUFvQixDQUFDLENBQUE7O0dBbEI3QyxNQUFNLENBOEJsQjtBQTlCWSx3QkFBTTtBQThCbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFDQ09VTlRJTkdfQkFTRV9QQVRIIH0gZnJvbSAnLi4vLi4vYXBpL2FjY291bnRpbmcvdmFyaWFibGVzJztcbmxldCBhcHAgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtYXBwdmVyc2lvbicpO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlnIHtcbiAgICBhdXRob3IgPSB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIGNvcHlyaWdodDogJ8Kp5YyX5Lqs5pyJ5bqP5LqR5Yib5oqA5pyv5pyJ6ZmQ5YWs5Y+4IDIwMTYgQWxsIFJpZ2h0cyBSZXNlcnZlZCcsXG4gICAgICAgIGljcDogJ+S6rElDUOWkhyAxNTA0MzQ5OeWPtycsXG4gICAgICAgIHZlcnNpb246ICcnLFxuICAgICAgICBzdXBwb3J0RW1haWw6ICdzdXBwb3J0QGd1YW5wbHVzLmNvbScsXG4gICAgICAgIHN1cHBvcnRQaG9uZTogJzQwMC04MDktMDc1MScsXG4gICAgICAgIHN1cHBvcnRJbmZvOiAn5a6i5pyN77yaNDAwLTgwOS0wNzUxIOmCrueuse+8mnN1cHBvcnRAZ3VhbnBsdXMuY29tJyxcbiAgICAgICAgd2Vic2l0ZTogJ2h0dHBzOi8vYXBwLmd1YW5wbHVzLmNvbSdcbiAgICB9O1xuXG4gICAgYXBpVXJscyA9IHtcbiAgICAgICAgaWRlbnRpdHk6ICcnLFxuICAgICAgICByZXNvdXJjZTogJydcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBJbmplY3QoQUNDT1VOVElOR19CQVNFX1BBVEgpIGFjY291bnRpbmdQYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hcGlVcmxzLnJlc291cmNlID0gYWNjb3VudGluZ1BhdGg7XG4gICAgICAgIGNvbnNvbGUubG9nKGFjY291bnRpbmdQYXRoKTtcbiAgICAgICAgdGhpcy5nZXRBcHBWZXJzaW9uKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRBcHBWZXJzaW9uKCkge1xuICAgICAgICBsZXQgc2VsZjogYW55ID0gdGhpcztcbiAgICAgICAgYXBwLmdldFZlcnNpb25OYW1lKCkudGhlbihmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgICAgICAgICBzZWxmLmF1dGhvci52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbiJdfQ==