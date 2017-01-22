"use strict";
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
require('./operators');
var index_1 = require('../frameworks/analytics/index');
var index_2 = require('../frameworks/core/index');
var AppComponent = (function () {
    function AppComponent(analytics, logger) {
        this.analytics = analytics;
        this.logger = logger;
        logger.debug("Config env: " + index_2.Config.ENVIRONMENT().ENV);
    }
    AppComponent = __decorate([
        index_2.BaseComponent({
            moduleId: module.id,
            selector: 'sd-app',
            templateUrl: 'app.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.Default
        }), 
        __metadata('design:paramtypes', [index_1.AnalyticsService, index_2.LogService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUV4RCxRQUFPLGFBQWEsQ0FBQyxDQUFBO0FBR3JCLHNCQUFpQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ2pFLHNCQUFrRCwwQkFBMEIsQ0FBQyxDQUFBO0FBVzdFO0lBQ0Usc0JBQW1CLFNBQTJCLEVBQVMsTUFBa0I7UUFBdEQsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ3ZFLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWUsY0FBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFUSDtRQUFDLHFCQUFhLENBQUM7WUFDYixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsT0FBTztTQUNqRCxDQUFDOztvQkFBQTtJQUtGLG1CQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSxvQkFBWSxlQUl4QixDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gYW55IG9wZXJhdG9ycyBuZWVkZWQgdGhyb3VnaG91dCB5b3VyIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vb3BlcmF0b3JzJztcblxuLy8gYXBwXG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vZnJhbWV3b3Jrcy9hbmFseXRpY3MvaW5kZXgnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCwgQ29uZmlnLCBMb2dTZXJ2aWNlIH0gZnJvbSAnLi4vZnJhbWV3b3Jrcy9jb3JlL2luZGV4JztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIG1haW4gYXBwbGljYXRpb24gY29tcG9uZW50LlxuICovXG5AQmFzZUNvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtYXBwJyxcbiAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQgLy8gRXZlcnl0aGluZyBlbHNlIHVzZXMgT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhbmFseXRpY3M6IEFuYWx5dGljc1NlcnZpY2UsIHB1YmxpYyBsb2dnZXI6IExvZ1NlcnZpY2UpIHtcbiAgICBsb2dnZXIuZGVidWcoYENvbmZpZyBlbnY6ICR7Q29uZmlnLkVOVklST05NRU5UKCkuRU5WfWApO1xuICB9XG59XG4iXX0=
