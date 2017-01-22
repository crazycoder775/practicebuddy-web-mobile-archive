"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var store_1 = require('@ngrx/store');
var index_1 = require('../../core/index');
var index_2 = require('../../analytics/index');
var category_common_1 = require('../common/category.common');
var NameListService = (function (_super) {
    __extends(NameListService, _super);
    function NameListService(analytics, store, http) {
        _super.call(this, analytics);
        this.analytics = analytics;
        this.store = store;
        this.http = http;
        this.category = category_common_1.CATEGORY;
    }
    NameListService.prototype.getNames = function () {
        return this.http.get((index_1.Config.IS_MOBILE_NATIVE() ? '/' : '') + "assets/data.json")
            .map(function (res) { return res.json(); });
    };
    NameListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [index_2.AnalyticsService, store_1.Store, http_1.Http])
    ], NameListService);
    return NameListService;
}(index_2.Analytics));
exports.NameListService = NameListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL3NhbXBsZS9zZXJ2aWNlcy9uYW1lLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQXFCLGVBQWUsQ0FBQyxDQUFBO0FBR3JDLHNCQUFzQixhQUFhLENBQUMsQ0FBQTtBQUlwQyxzQkFBdUIsa0JBQWtCLENBQUMsQ0FBQTtBQUMxQyxzQkFBNEMsdUJBQXVCLENBQUMsQ0FBQTtBQUNwRSxnQ0FBeUIsMkJBQTJCLENBQUMsQ0FBQTtBQU9yRDtJQUFxQyxtQ0FBUztJQUU1Qyx5QkFDUyxTQUEyQixFQUMxQixLQUEwQixFQUMxQixJQUFVO1FBRWxCLGtCQUFNLFNBQVMsQ0FBQyxDQUFDO1FBSlYsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFDMUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUdsQixJQUFJLENBQUMsUUFBUSxHQUFHLDBCQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBRyxjQUFNLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxzQkFBa0IsQ0FBQzthQUM1RSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQWZIO1FBQUMsaUJBQVUsRUFBRTs7dUJBQUE7SUFnQmIsc0JBQUM7QUFBRCxDQWZBLEFBZUMsQ0Fmb0MsaUJBQVMsR0FlN0M7QUFmWSx1QkFBZSxrQkFlM0IsQ0FBQSIsImZpbGUiOiJhcHAvZnJhbWV3b3Jrcy9zYW1wbGUvc2VydmljZXMvbmFtZS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbi8vIGxpYnNcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbi8vIGFwcFxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XG5pbXBvcnQgeyBBbmFseXRpY3MsIEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9hbmFseXRpY3MvaW5kZXgnO1xuaW1wb3J0IHsgQ0FURUdPUlkgfSBmcm9tICcuLi9jb21tb24vY2F0ZWdvcnkuY29tbW9uJztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBJU2FtcGxlU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvaW5kZXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL25hbWUtbGlzdC5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmFtZUxpc3RTZXJ2aWNlIGV4dGVuZHMgQW5hbHl0aWNzIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYW5hbHl0aWNzOiBBbmFseXRpY3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPElTYW1wbGVTdGF0ZT4sXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwXG4gICkge1xuICAgIHN1cGVyKGFuYWx5dGljcyk7XG4gICAgdGhpcy5jYXRlZ29yeSA9IENBVEVHT1JZO1xuICB9XG5cbiAgZ2V0TmFtZXMoKTogT2JzZXJ2YWJsZTxBcnJheTxzdHJpbmc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7Q29uZmlnLklTX01PQklMRV9OQVRJVkUoKSA/ICcvJyA6ICcnfWFzc2V0cy9kYXRhLmpzb25gKVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gIH1cbn1cbiJdfQ==
