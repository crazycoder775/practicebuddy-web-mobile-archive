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
var core_1 = require("@angular/core");
require("./operators");
var index_1 = require("../frameworks/analytics/index");
var index_2 = require("../frameworks/core/index");
var AppComponent = (function () {
    function AppComponent(analytics, logger) {
        this.analytics = analytics;
        this.logger = logger;
        logger.debug("Config env: " + index_2.Config.ENVIRONMENT().ENV);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    index_2.BaseComponent({
        moduleId: module.id,
        selector: 'sd-app',
        templateUrl: 'app.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.Default
    }),
    __metadata("design:paramtypes", [index_1.AnalyticsService, index_2.LogService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHNDQUF3RDtBQUV4RCx1QkFBcUI7QUFHckIsdURBQWlFO0FBQ2pFLGtEQUE2RTtBQVc3RSxJQUFhLFlBQVk7SUFDdkIsc0JBQW1CLFNBQTJCLEVBQVMsTUFBa0I7UUFBdEQsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ3ZFLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWUsY0FBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBSlksWUFBWTtJQU54QixxQkFBYSxDQUFDO1FBQ2IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7UUFDakMsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE9BQU87S0FDakQsQ0FBQztxQ0FFOEIsd0JBQWdCLEVBQWlCLGtCQUFVO0dBRDlELFlBQVksQ0FJeEI7QUFKWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBhbnkgb3BlcmF0b3JzIG5lZWRlZCB0aHJvdWdob3V0IHlvdXIgYXBwbGljYXRpb25cbmltcG9ydCAnLi9vcGVyYXRvcnMnO1xuXG4vLyBhcHBcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi9mcmFtZXdvcmtzL2FuYWx5dGljcy9pbmRleCc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50LCBDb25maWcsIExvZ1NlcnZpY2UgfSBmcm9tICcuLi9mcmFtZXdvcmtzL2NvcmUvaW5kZXgnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbWFpbiBhcHBsaWNhdGlvbiBjb21wb25lbnQuXG4gKi9cbkBCYXNlQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1hcHAnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCAvLyBFdmVyeXRoaW5nIGVsc2UgdXNlcyBPblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIGFuYWx5dGljczogQW5hbHl0aWNzU2VydmljZSwgcHVibGljIGxvZ2dlcjogTG9nU2VydmljZSkge1xuICAgIGxvZ2dlci5kZWJ1ZyhgQ29uZmlnIGVudjogJHtDb25maWcuRU5WSVJPTk1FTlQoKS5FTlZ9YCk7XG4gIH1cbn1cbiJdfQ==