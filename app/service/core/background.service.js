var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var BackgroundService = (function () {
    function BackgroundService() {
        /* tslint:disable */
        this.connectionChanged = new Subject_1.Subject();
        this.onConnectionChanged = this.connectionChanged.asObservable();
    }
    /* tslint:enable */
    BackgroundService.prototype.connectionChange = function (connectionType) {
        this.connectionChanged.next(connectionType);
    };
    return BackgroundService;
}());
BackgroundService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], BackgroundService);
exports.BackgroundService = BackgroundService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2dyb3VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNDQUEyQztBQUMzQyx3Q0FBMEM7QUFJMUMsSUFBYSxpQkFBaUI7SUFDMUI7UUFHQSxvQkFBb0I7UUFDcEIsc0JBQWlCLEdBQUcsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFDMUMsd0JBQW1CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBSDVELENBQUM7SUFJRCxtQkFBbUI7SUFFbkIsNENBQWdCLEdBQWhCLFVBQWlCLGNBQXNCO1FBQ25DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSxpQkFBaUI7SUFEN0IsaUJBQVUsRUFBRTs7R0FDQSxpQkFBaUIsQ0FZN0I7QUFaWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gICAgZnJvbSAncnhqcy9TdWJqZWN0JztcbmltcG9ydCAqIGFzIGNvbm5lY3Rpdml0eSBmcm9tICdjb25uZWN0aXZpdHknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuICAgIC8qIHRzbGludDpkaXNhYmxlICovXG4gICAgY29ubmVjdGlvbkNoYW5nZWQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gICAgb25Db25uZWN0aW9uQ2hhbmdlZCA9IHRoaXMuY29ubmVjdGlvbkNoYW5nZWQuYXNPYnNlcnZhYmxlKCk7XG4gICAgLyogdHNsaW50OmVuYWJsZSAqL1xuXG4gICAgY29ubmVjdGlvbkNoYW5nZShjb25uZWN0aW9uVHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbkNoYW5nZWQubmV4dChjb25uZWN0aW9uVHlwZSk7XG4gICAgfVxufVxuIl19