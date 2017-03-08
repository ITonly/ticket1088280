var core_1 = require("@angular/core");
var RouteStateService = (function () {
    function RouteStateService() {
        this.selectedIndex = 0;
        this.transaction = {};
        this.accountTransLineItemModels = [];
        this.accountTransLineItem = {
            id: 0,
            amount: null,
            department: {
                id: '',
                name: '选择部门',
            },
            businessCategory: {
                id: '',
                name: '选择类别',
                businessCategoryType: {
                    value: 'Income'
                },
                parentBusinessCategoryModelId: '',
                level: 1,
            },
            description: '',
            accountTransactionModel: {},
            order: 0,
            levelOneSelectedIndex: 0,
            levelTwoSelectedIndex: 0,
            departmentSelectedIndex: 0,
            needBusinessCategory: false,
            needDepartment: false,
            needAmount: false
        };
    }
    RouteStateService.prototype.setTransaction = function (key, value) {
        this.transaction[key] = value;
    };
    RouteStateService.prototype.getTransaction = function (key) {
        var transaction = this.transaction[key];
        if (transaction) {
            var amount = transaction.amount;
            if (amount) {
                transaction.amount = amount.toFixed(2);
            }
        }
        return transaction;
    };
    RouteStateService.prototype.setSelectedIndex = function (value) {
        this.selectedIndex = value;
    };
    RouteStateService.prototype.getSelectedIndex = function () {
        return this.selectedIndex;
    };
    RouteStateService.prototype.setTransItemModels = function (value) {
        this.accountTransLineItemModels = value;
    };
    RouteStateService.prototype.getTransItemModels = function () {
        if (this.accountTransLineItemModels.length === 0) {
            this.accountTransLineItemModels.push(this.accountTransLineItem);
        }
        return this.accountTransLineItemModels;
    };
    RouteStateService.prototype.clear = function () {
        this.accountTransLineItemModels = [];
        this.transaction = {};
    };
    return RouteStateService;
}());
RouteStateService = __decorate([
    core_1.Injectable()
], RouteStateService);
exports.RouteStateService = RouteStateService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtc3RhdGUtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvdXRlLXN0YXRlLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQTJDO0FBRzNDLElBQWEsaUJBQWlCO0lBRDlCO1FBRUksa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsK0JBQTBCLEdBQWUsRUFBRSxDQUFDO1FBQzVDLHlCQUFvQixHQUFXO1lBQzNCLEVBQUUsRUFBRSxDQUFDO1lBQ0wsTUFBTSxFQUFFLElBQUk7WUFDWixVQUFVLEVBQUU7Z0JBQ1IsRUFBRSxFQUFFLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE1BQU07YUFDZjtZQUNELGdCQUFnQixFQUFFO2dCQUNkLEVBQUUsRUFBRSxFQUFFO2dCQUNOLElBQUksRUFBRSxNQUFNO2dCQUNaLG9CQUFvQixFQUFFO29CQUNsQixLQUFLLEVBQUUsUUFBUTtpQkFDbEI7Z0JBQ0QsNkJBQTZCLEVBQUUsRUFBRTtnQkFDakMsS0FBSyxFQUFFLENBQUM7YUFDWDtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsdUJBQXVCLEVBQUUsRUFBRTtZQUMzQixLQUFLLEVBQUUsQ0FBQztZQUNSLHFCQUFxQixFQUFFLENBQUM7WUFDeEIscUJBQXFCLEVBQUUsQ0FBQztZQUN4Qix1QkFBdUIsRUFBRSxDQUFDO1lBQzFCLG9CQUFvQixFQUFFLEtBQUs7WUFDM0IsY0FBYyxFQUFFLEtBQUs7WUFDckIsVUFBVSxFQUFFLEtBQUs7U0FDcEIsQ0FBQztJQTJDTixDQUFDO0lBeENHLDBDQUFjLEdBQWQsVUFBZSxHQUFHLEVBQUUsS0FBSztRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBRUQsMENBQWMsR0FBZCxVQUFlLEdBQUc7UUFDZCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ2hDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsV0FBVyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUV2QixDQUFDO0lBQ0QsNENBQWdCLEdBQWhCLFVBQWlCLEtBQUs7UUFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELDRDQUFnQixHQUFoQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFHRCw4Q0FBa0IsR0FBbEIsVUFBbUIsS0FBSztRQUNwQixJQUFJLENBQUMsMEJBQTBCLEdBQUcsS0FBSyxDQUFDO0lBQzVDLENBQUM7SUFFRCw4Q0FBa0IsR0FBbEI7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNwRSxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQztJQUMzQyxDQUFDO0lBRUQsaUNBQUssR0FBTDtRQUNJLElBQUksQ0FBQywwQkFBMEIsR0FBRyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVMLHdCQUFDO0FBQUQsQ0FBQyxBQXhFRCxJQXdFQztBQXhFWSxpQkFBaUI7SUFEN0IsaUJBQVUsRUFBRTtHQUNBLGlCQUFpQixDQXdFN0I7QUF4RVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm91dGVTdGF0ZVNlcnZpY2Uge1xuICAgIHNlbGVjdGVkSW5kZXg6IG51bWJlciA9IDA7XG4gICAgdHJhbnNhY3Rpb246IE9iamVjdCA9IHt9O1xuICAgIGFjY291bnRUcmFuc0xpbmVJdGVtTW9kZWxzOiBBcnJheTxhbnk+ID0gW107XG4gICAgYWNjb3VudFRyYW5zTGluZUl0ZW06IE9iamVjdCA9IHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIGFtb3VudDogbnVsbCxcbiAgICAgICAgZGVwYXJ0bWVudDoge1xuICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgbmFtZTogJ+mAieaLqemDqOmXqCcsXG4gICAgICAgIH0sXG4gICAgICAgIGJ1c2luZXNzQ2F0ZWdvcnk6IHtcbiAgICAgICAgICAgIGlkOiAnJyxcbiAgICAgICAgICAgIG5hbWU6ICfpgInmi6nnsbvliKsnLFxuICAgICAgICAgICAgYnVzaW5lc3NDYXRlZ29yeVR5cGU6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ0luY29tZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJlbnRCdXNpbmVzc0NhdGVnb3J5TW9kZWxJZDogJycsXG4gICAgICAgICAgICBsZXZlbDogMSxcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBhY2NvdW50VHJhbnNhY3Rpb25Nb2RlbDoge30sXG4gICAgICAgIG9yZGVyOiAwLFxuICAgICAgICBsZXZlbE9uZVNlbGVjdGVkSW5kZXg6IDAsXG4gICAgICAgIGxldmVsVHdvU2VsZWN0ZWRJbmRleDogMCxcbiAgICAgICAgZGVwYXJ0bWVudFNlbGVjdGVkSW5kZXg6IDAsXG4gICAgICAgIG5lZWRCdXNpbmVzc0NhdGVnb3J5OiBmYWxzZSxcbiAgICAgICAgbmVlZERlcGFydG1lbnQ6IGZhbHNlLFxuICAgICAgICBuZWVkQW1vdW50OiBmYWxzZVxuICAgIH07XG5cblxuICAgIHNldFRyYW5zYWN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbltrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0VHJhbnNhY3Rpb24oa2V5KSB7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IHRoaXMudHJhbnNhY3Rpb25ba2V5XTtcbiAgICAgICAgaWYgKHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICBsZXQgYW1vdW50ID0gdHJhbnNhY3Rpb24uYW1vdW50O1xuICAgICAgICAgICAgaWYgKGFtb3VudCkge1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLmFtb3VudCA9IGFtb3VudC50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcblxuICAgIH1cbiAgICBzZXRTZWxlY3RlZEluZGV4KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldFNlbGVjdGVkSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgfVxuXG5cbiAgICBzZXRUcmFuc0l0ZW1Nb2RlbHModmFsdWUpIHtcbiAgICAgICAgdGhpcy5hY2NvdW50VHJhbnNMaW5lSXRlbU1vZGVscyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldFRyYW5zSXRlbU1vZGVscygpIHtcbiAgICAgICAgaWYgKHRoaXMuYWNjb3VudFRyYW5zTGluZUl0ZW1Nb2RlbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnRUcmFuc0xpbmVJdGVtTW9kZWxzLnB1c2godGhpcy5hY2NvdW50VHJhbnNMaW5lSXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudFRyYW5zTGluZUl0ZW1Nb2RlbHM7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuYWNjb3VudFRyYW5zTGluZUl0ZW1Nb2RlbHMgPSBbXTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbiA9IHt9O1xuICAgIH1cblxufVxuIl19