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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var _ = require("lodash");
var angulartics2_1 = require("angulartics2");
var AnalyticsService = (function () {
    function AnalyticsService(angulartics2, segment) {
        this.angulartics2 = angulartics2;
        this.segment = segment;
        this.devMode(false);
    }
    AnalyticsService.prototype.track = function (action, properties) {
        if (!this.devMode()) {
            this.segment.eventTrack(action, properties);
        }
    };
    AnalyticsService.prototype.pageTrack = function (path, location) {
        if (!this.devMode()) {
            this.segment.pageTrack(path, location);
        }
    };
    AnalyticsService.prototype.identify = function (properties) {
        if (!this.devMode()) {
            this.segment.setUserProperties(properties);
        }
    };
    AnalyticsService.prototype.devMode = function (enable) {
        if (typeof enable !== 'undefined') {
            this.angulartics2.developerMode(enable);
        }
        return this.angulartics2.settings.developerMode;
    };
    return AnalyticsService;
}());
AnalyticsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [angulartics2_1.Angulartics2, angulartics2_1.Angulartics2Segment])
], AnalyticsService);
exports.AnalyticsService = AnalyticsService;
var Analytics = (function () {
    function Analytics(analytics) {
        this.analytics = analytics;
    }
    Analytics.prototype.track = function (action, properties) {
        this.analytics.track(action, _.extend(properties, { category: this.category }));
    };
    return Analytics;
}());
Analytics = __decorate([
    __param(0, core_1.Inject(AnalyticsService)),
    __metadata("design:paramtypes", [AnalyticsService])
], Analytics);
exports.Analytics = Analytics;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmFseXRpY3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0Esc0NBQW1EO0FBR25ELDBCQUE0QjtBQUM1Qiw2Q0FBaUU7QUFnQmpFLElBQWEsZ0JBQWdCO0lBRTNCLDBCQUFvQixZQUEwQixFQUFVLE9BQTRCO1FBQWhFLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFRbEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBS00sZ0NBQUssR0FBWixVQUFhLE1BQWMsRUFBRSxVQUFnQztRQUMzRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDSCxDQUFDO0lBTU0sb0NBQVMsR0FBaEIsVUFBaUIsSUFBWSxFQUFFLFFBQWE7UUFDMUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN6QyxDQUFDO0lBQ0gsQ0FBQztJQUtNLG1DQUFRLEdBQWYsVUFBZ0IsVUFBZTtRQUM3QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QyxDQUFDO0lBQ0gsQ0FBQztJQU9NLGtDQUFPLEdBQWQsVUFBZSxNQUFnQjtRQUM3QixFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO0lBQ2xELENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFwREQsSUFvREM7QUFwRFksZ0JBQWdCO0lBRDVCLGlCQUFVLEVBQUU7cUNBR3VCLDJCQUFZLEVBQW1CLGtDQUFtQjtHQUZ6RSxnQkFBZ0IsQ0FvRDVCO0FBcERZLDRDQUFnQjtBQTBEN0IsSUFBYSxTQUFTO0lBSXBCLG1CQUE2QyxTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUV4RSxDQUFDO0lBS0QseUJBQUssR0FBTCxVQUFNLE1BQWMsRUFBRSxVQUFnQztRQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLFNBQVM7SUFJUCxXQUFBLGFBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO3FDQUFtQixnQkFBZ0I7R0FKN0QsU0FBUyxDQWNyQjtBQWRZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGxpYnNcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiwgQW5ndWxhcnRpY3MyU2VnbWVudCB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFuYWx5dGljc1Byb3BlcnRpZXMge1xuICBjYXRlZ29yeT86IHN0cmluZztcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIHZhbHVlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBbmFseXRpY3Mge1xuICB0cmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogSUFuYWx5dGljc1Byb3BlcnRpZXMpOiB2b2lkO1xufVxuXG4vKipcbiAqIFdyYXBwZXIgZm9yIEFuZ3VsYXJ0aWNzMlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW5hbHl0aWNzU2VydmljZSBpbXBsZW1lbnRzIElBbmFseXRpY3Mge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIsIHByaXZhdGUgc2VnbWVudDogQW5ndWxhcnRpY3MyU2VnbWVudCkge1xuICAgIC8vIG9wdGlvbnNcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhcnRpY3MvYW5ndWxhcnRpY3MyL2Jsb2IvbWFzdGVyL3NyYy9jb3JlL2FuZ3VsYXJ0aWNzMi50cyNMOTAtTDEwNFxuICAgIC8vIGFuZ3VsYXJ0aWNzMi52aXJ0dWFsUGFnZXZpZXdzKHZhbHVlOiBib29sZWFuKTtcbiAgICAvLyBhbmd1bGFydGljczIuZXhjbHVkZVJvdXRlcyhyb3V0ZXM6IEFycmF5PHN0cmluZz4pO1xuICAgIC8vIGFuZ3VsYXJ0aWNzMi5maXJzdFBhZ2V2aWV3KHZhbHVlOiBib29sZWFuKTtcbiAgICAvLyBhbmd1bGFydGljczIud2l0aEJhc2UodmFsdWU6IHN0cmluZyk7XG5cbiAgICB0aGlzLmRldk1vZGUoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrIGFjdGlvbnMsIGV2ZW50cywgZXRjLlxuICAgKiovXG4gIHB1YmxpYyB0cmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogSUFuYWx5dGljc1Byb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGV2TW9kZSgpKSB7XG4gICAgICB0aGlzLnNlZ21lbnQuZXZlbnRUcmFjayhhY3Rpb24sIHByb3BlcnRpZXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgYXV0b21hdGljYWxseSBieSBkZWZhdWx0IHdpdGggQW5ndWxhciAyIFJvdXRpbmdcbiAgICogSG93ZXZlciwgdGhhdCBjYW4gYmUgdHVybmVkIG9mZiBhbmQgdGhpcyBjb3VsZCBiZSB1c2VkIG1hbnVhbGx5XG4gICAqKi9cbiAgcHVibGljIHBhZ2VUcmFjayhwYXRoOiBzdHJpbmcsIGxvY2F0aW9uOiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuZGV2TW9kZSgpKSB7XG4gICAgICB0aGlzLnNlZ21lbnQucGFnZVRyYWNrKHBhdGgsIGxvY2F0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSWRlbnRpZnkgYXV0aGVudGljYXRlZCB1c2Vyc1xuICAgKiovXG4gIHB1YmxpYyBpZGVudGlmeShwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuZGV2TW9kZSgpKSB7XG4gICAgICB0aGlzLnNlZ21lbnQuc2V0VXNlclByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRyb2wgd2hldGhlciBhbmFseXRpY3MgYXJlIHRyYWNrZWRcbiAgICogdHJ1ZTogZGV2IG1vZGUgb24sIHRoZXJlZm9yZSBkbyBub3QgdHJhY2sgYW55dGhpbmdcbiAgICogZmFsc2U6IGRldiBtb2RlIG9mZiwgdHJhY2sgZXZlcnl0aGluZ1xuICAgKiovXG4gIHB1YmxpYyBkZXZNb2RlKGVuYWJsZT86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIGVuYWJsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuYW5ndWxhcnRpY3MyLmRldmVsb3Blck1vZGUoZW5hYmxlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmRldmVsb3Blck1vZGU7XG4gIH1cbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzXG4gKiBTdGFuZGFyZGl6ZXMgdHJhY2tpbmcgYWN0aW9ucyBhbmQgY2F0ZWdvcml6YXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEFuYWx5dGljcyBpbXBsZW1lbnRzIElBbmFseXRpY3Mge1xuICAvLyBzdWItY2xhc3NlcyBzaG91bGQgZGVmaW5lIHRoZWlyIGNhdGVnb3J5XG4gIHB1YmxpYyBjYXRlZ29yeTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQW5hbHl0aWNzU2VydmljZSkgcHVibGljIGFuYWx5dGljczogQW5hbHl0aWNzU2VydmljZSkge1xuXG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgYWN0aW9ucywgZXZlbnRzLCBldGMuXG4gICAqKi9cbiAgdHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IElBbmFseXRpY3NQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgdGhpcy5hbmFseXRpY3MudHJhY2soYWN0aW9uLCBfLmV4dGVuZChwcm9wZXJ0aWVzLCB7IGNhdGVnb3J5OiB0aGlzLmNhdGVnb3J5IH0pKTtcbiAgfVxufVxuIl19