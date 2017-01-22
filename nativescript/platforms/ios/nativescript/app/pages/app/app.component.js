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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_1 = require("@ngrx/store");
var app_component_1 = require("../../app/frameworks/practicebuddy/components/app/app.component");
var index_1 = require("../../app/frameworks/core/index");
var index_2 = require("../../app/frameworks/analytics/index");
var actionbar_util_1 = require("../../shared/core/utils/actionbar.util");
var NSAppComponent = (function (_super) {
    __extends(NSAppComponent, _super);
    function NSAppComponent(analytics, log, store, router) {
        var _this = _super.call(this) || this;
        _this.analytics = analytics;
        _this.log = log;
        _this.store = store;
        _this.router = router;
        log.debug('NSAppComponent constructor');
        actionbar_util_1.ActionBarUtil.STATUSBAR_STYLE(1);
        router.events.subscribe(function (e) {
            _this.log.debug("Router Event: " + e.toString());
        });
        return _this;
    }
    return NSAppComponent;
}(app_component_1.AppComponent));
NSAppComponent = __decorate([
    __param(0, core_1.Inject(index_2.AnalyticsService)), __param(1, core_1.Inject(index_1.LogService)), __param(2, core_1.Inject(store_1.Store)), __param(3, core_1.Inject(router_1.Router)),
    __metadata("design:paramtypes", [index_2.AnalyticsService, index_1.LogService, store_1.Store, router_1.Router])
], NSAppComponent);
exports.NSAppComponent = NSAppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0NBQXVDO0FBQ3ZDLDBDQUF5QztBQUd6QyxxQ0FBb0M7QUFHcEMsaUdBQStGO0FBQy9GLHlEQUE2RDtBQUM3RCw4REFBd0U7QUFDeEUseUVBQXVFO0FBRXZFLElBQWEsY0FBYztJQUFTLGtDQUFZO0lBSTlDLHdCQUE4QyxTQUEyQixFQUE4QixHQUFlLEVBQXlCLEtBQWlCLEVBQTBCLE1BQWM7UUFBeE0sWUFDRSxpQkFBTyxTQVFSO1FBVDZDLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQThCLFNBQUcsR0FBSCxHQUFHLENBQVk7UUFBeUIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUEwQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXRNLEdBQUcsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUV4Qyw4QkFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVqQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsbUJBQWlCLENBQUMsQ0FBQyxRQUFRLEVBQUksQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFDOztJQUNMLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFkRCxDQUFvQyw0QkFBWSxHQWMvQztBQWRZLGNBQWM7SUFJWCxXQUFBLGFBQU0sQ0FBQyx3QkFBZ0IsQ0FBQyxDQUFBLEVBQXNDLFdBQUEsYUFBTSxDQUFDLGtCQUFVLENBQUMsQ0FBQSxFQUEyQixXQUFBLGFBQU0sQ0FBQyxhQUFLLENBQUMsQ0FBQSxFQUE2QixXQUFBLGFBQU0sQ0FBQyxlQUFNLENBQUMsQ0FBQTtxQ0FBeEgsd0JBQWdCLEVBQW1DLGtCQUFVLEVBQWdDLGFBQUssRUFBdUMsZUFBTTtHQUo3TCxjQUFjLENBYzFCO0FBZFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8vIGxpYnNcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG4vLyBhcHBcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2FwcC9mcmFtZXdvcmtzL3ByYWN0aWNlYnVkZHkvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXBwL2ZyYW1ld29ya3MvY29yZS9pbmRleCc7XG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXBwL2ZyYW1ld29ya3MvYW5hbHl0aWNzL2luZGV4JztcbmltcG9ydCB7IEFjdGlvbkJhclV0aWwgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29yZS91dGlscy9hY3Rpb25iYXIudXRpbCc7XG5cbmV4cG9ydCBjbGFzcyBOU0FwcENvbXBvbmVudCBleHRlbmRzIEFwcENvbXBvbmVudCB7XG5cbiAgLy8gQEluamVjdCBkZWNvcmF0b3IgaXMgdXNlZCBvbiBpbmplY3RhYmxlcyBoZXJlIHNpbmNlIHRoaXMgY29tcG9uZW50IG1lcmVseSBleHRlbmRzIEFwcENvbXBvbmVudFxuICAvLyBTaW5jZSBAQ29tcG9uZW50IGRlY29yYXRvciBpcyBub3QgdXNlZCBoZXJlLCB0aGlzIGVuc3VyZXMgbWV0YWRhdGEgd2lsbCBiZSBnZW5lcmF0ZWRcbiAgY29uc3RydWN0b3IoIEBJbmplY3QoQW5hbHl0aWNzU2VydmljZSkgcHVibGljIGFuYWx5dGljczogQW5hbHl0aWNzU2VydmljZSwgQEluamVjdChMb2dTZXJ2aWNlKSBwcml2YXRlIGxvZzogTG9nU2VydmljZSwgQEluamVjdChTdG9yZSkgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55PiwgQEluamVjdChSb3V0ZXIpIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICBzdXBlcigpO1xuICAgIGxvZy5kZWJ1ZygnTlNBcHBDb21wb25lbnQgY29uc3RydWN0b3InKTtcblxuICAgIEFjdGlvbkJhclV0aWwuU1RBVFVTQkFSX1NUWUxFKDEpO1xuXG4gICAgcm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGUpID0+IHtcbiAgICAgIHRoaXMubG9nLmRlYnVnKGBSb3V0ZXIgRXZlbnQ6ICR7ZS50b1N0cmluZygpfWApO1xuICAgIH0pO1xuICB9XG59XG4iXX0=