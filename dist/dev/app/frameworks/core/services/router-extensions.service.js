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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
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
    RouterExtensions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, common_1.LocationStrategy])
    ], RouterExtensions);
    return RouterExtensions;
}());
exports.RouterExtensions = RouterExtensions;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL2NvcmUvc2VydmljZXMvcm91dGVyLWV4dGVuc2lvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHVCQUFpQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ25ELHVCQUFrRCxpQkFBaUIsQ0FBQyxDQUFBO0FBc0JwRTtJQUVFLDBCQUFtQixNQUFjLEVBQVUsZ0JBQWtDO1FBQTFELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUksQ0FBQztJQUUzRSxtQ0FBUSxHQUFmLFVBQWdCLFFBQW9CLEVBQUUsTUFBaUM7UUFDckUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sd0NBQWEsR0FBcEIsVUFBcUIsR0FBcUIsRUFBRSxPQUFrQztRQUM1RSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLCtCQUFJLEdBQVg7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQWZIO1FBQUMsaUJBQVUsRUFBRTs7d0JBQUE7SUFnQmIsdUJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLHdCQUFnQixtQkFlNUIsQ0FBQSIsImZpbGUiOiJhcHAvZnJhbWV3b3Jrcy9jb3JlL3NlcnZpY2VzL3JvdXRlci1leHRlbnNpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciwgVXJsVHJlZSwgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXh0ZW5kZWROYXZpZ2F0aW9uRXh0cmFzIGV4dGVuZHMgTmF2aWdhdGlvbkV4dHJhcyB7XG4gIC8vIE9wdGlvbnMgZm9yIG5hdGl2ZXNjcmlwdFxuICBjbGVhckhpc3Rvcnk/OiBib29sZWFuO1xuICBhbmltYXRlZD86IGJvb2xlYW47XG4gIHRyYW5zaXRpb24/OiB7IC8vIFNlZSAtPiBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hcGktcmVmZXJlbmNlL2ludGVyZmFjZXMvX3VpX2ZyYW1lXy5uYXZpZ2F0aW9udHJhbnNpdGlvbi5odG1sXG4gICAgbmFtZT86IHN0cmluZztcbiAgICBpbnN0YW5jZT86IGFueTtcbiAgICBkdXJhdGlvbj86IG51bWJlcjtcbiAgICBjdXJ2ZT86IGFueTtcbiAgfTtcbiAgLy8gRU5EIC0gT3B0aW9ucyBmb3IgbmF0aXZlc2NyaXB0XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJvdXRlckV4dGVuc2lvbnMge1xuICBuYXZpZ2F0ZShjb21tYW5kczogQXJyYXk8YW55PiwgZXh0cmFzPzogRXh0ZW5kZWROYXZpZ2F0aW9uRXh0cmFzKTogUHJvbWlzZTxib29sZWFuPjtcbiAgbmF2aWdhdGVCeVVybCh1cmw6IHN0cmluZyB8IFVybFRyZWUsIG9wdGlvbnM/OiBFeHRlbmRlZE5hdmlnYXRpb25FeHRyYXMpOiBQcm9taXNlPGJvb2xlYW4+O1xuICBiYWNrKCk6IHZvaWQ7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb3V0ZXJFeHRlbnNpb25zIGltcGxlbWVudHMgSVJvdXRlckV4dGVuc2lvbnMge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBsb2NhdGlvblN0cmF0ZWd5OiBMb2NhdGlvblN0cmF0ZWd5KSB7IH1cblxuICBwdWJsaWMgbmF2aWdhdGUoY29tbWFuZHM6IEFycmF5PGFueT4sIGV4dHJhcz86IEV4dGVuZGVkTmF2aWdhdGlvbkV4dHJhcyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShjb21tYW5kcywgZXh0cmFzKTtcbiAgfVxuXG4gIHB1YmxpYyBuYXZpZ2F0ZUJ5VXJsKHVybDogc3RyaW5nIHwgVXJsVHJlZSwgb3B0aW9ucz86IEV4dGVuZGVkTmF2aWdhdGlvbkV4dHJhcyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHVybCk7XG4gIH1cblxuICBwdWJsaWMgYmFjaygpIHtcbiAgICB0aGlzLmxvY2F0aW9uU3RyYXRlZ3kuYmFjaygpO1xuICB9XG59XG4iXX0=
