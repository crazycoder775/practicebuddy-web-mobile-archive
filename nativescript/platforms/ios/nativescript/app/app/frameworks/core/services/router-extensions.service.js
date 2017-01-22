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
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var RouterExtensions = (function () {
    function RouterExtensions(router, locationStrategy) {
        this.router = router;
        this.locationStrategy = locationStrategy;
    }
    RouterExtensions.prototype.navigate = function (commands, extras) {
        return this.router.navigate(commands, extras);
    };
    RouterExtensions.prototype.navigateByUrl = function (url, options) {
        return this.router.navigateByUrl(url);
    };
    RouterExtensions.prototype.back = function () {
        this.locationStrategy.back();
    };
    return RouterExtensions;
}());
RouterExtensions = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, common_1.LocationStrategy])
], RouterExtensions);
exports.RouterExtensions = RouterExtensions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLWV4dGVuc2lvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvdXRlci1leHRlbnNpb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHNDQUEyQztBQUMzQywwQ0FBbUQ7QUFDbkQsMENBQW9FO0FBc0JwRSxJQUFhLGdCQUFnQjtJQUUzQiwwQkFBbUIsTUFBYyxFQUFVLGdCQUFrQztRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFM0UsbUNBQVEsR0FBZixVQUFnQixRQUFvQixFQUFFLE1BQWlDO1FBQ3JFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLHdDQUFhLEdBQXBCLFVBQXFCLEdBQXFCLEVBQUUsT0FBa0M7UUFDNUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSwrQkFBSSxHQUFYO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksZ0JBQWdCO0lBRDVCLGlCQUFVLEVBQUU7cUNBR2dCLGVBQU0sRUFBNEIseUJBQWdCO0dBRmxFLGdCQUFnQixDQWU1QjtBQWZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyLCBVcmxUcmVlLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBFeHRlbmRlZE5hdmlnYXRpb25FeHRyYXMgZXh0ZW5kcyBOYXZpZ2F0aW9uRXh0cmFzIHtcbiAgLy8gT3B0aW9ucyBmb3IgbmF0aXZlc2NyaXB0XG4gIGNsZWFySGlzdG9yeT86IGJvb2xlYW47XG4gIGFuaW1hdGVkPzogYm9vbGVhbjtcbiAgdHJhbnNpdGlvbj86IHsgLy8gU2VlIC0+IGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FwaS1yZWZlcmVuY2UvaW50ZXJmYWNlcy9fdWlfZnJhbWVfLm5hdmlnYXRpb250cmFuc2l0aW9uLmh0bWxcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIGluc3RhbmNlPzogYW55O1xuICAgIGR1cmF0aW9uPzogbnVtYmVyO1xuICAgIGN1cnZlPzogYW55O1xuICB9O1xuICAvLyBFTkQgLSBPcHRpb25zIGZvciBuYXRpdmVzY3JpcHRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUm91dGVyRXh0ZW5zaW9ucyB7XG4gIG5hdmlnYXRlKGNvbW1hbmRzOiBBcnJheTxhbnk+LCBleHRyYXM/OiBFeHRlbmRlZE5hdmlnYXRpb25FeHRyYXMpOiBQcm9taXNlPGJvb2xlYW4+O1xuICBuYXZpZ2F0ZUJ5VXJsKHVybDogc3RyaW5nIHwgVXJsVHJlZSwgb3B0aW9ucz86IEV4dGVuZGVkTmF2aWdhdGlvbkV4dHJhcyk6IFByb21pc2U8Ym9vbGVhbj47XG4gIGJhY2soKTogdm9pZDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvdXRlckV4dGVuc2lvbnMgaW1wbGVtZW50cyBJUm91dGVyRXh0ZW5zaW9ucyB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGxvY2F0aW9uU3RyYXRlZ3k6IExvY2F0aW9uU3RyYXRlZ3kpIHsgfVxuXG4gIHB1YmxpYyBuYXZpZ2F0ZShjb21tYW5kczogQXJyYXk8YW55PiwgZXh0cmFzPzogRXh0ZW5kZWROYXZpZ2F0aW9uRXh0cmFzKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLm5hdmlnYXRlKGNvbW1hbmRzLCBleHRyYXMpO1xuICB9XG5cbiAgcHVibGljIG5hdmlnYXRlQnlVcmwodXJsOiBzdHJpbmcgfCBVcmxUcmVlLCBvcHRpb25zPzogRXh0ZW5kZWROYXZpZ2F0aW9uRXh0cmFzKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodXJsKTtcbiAgfVxuXG4gIHB1YmxpYyBiYWNrKCkge1xuICAgIHRoaXMubG9jYXRpb25TdHJhdGVneS5iYWNrKCk7XG4gIH1cbn1cbiJdfQ==