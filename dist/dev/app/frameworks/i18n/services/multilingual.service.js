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
var store_1 = require('@ngrx/store');
var ng2_translate_1 = require('ng2-translate');
var index_1 = require('../../analytics/index');
var index_2 = require('../../core/index');
var category_common_1 = require('../common/category.common');
var index_3 = require('../actions/index');
var MultilingualService = (function (_super) {
    __extends(MultilingualService, _super);
    function MultilingualService(analytics, translate, win, store) {
        var _this = this;
        _super.call(this, analytics);
        this.analytics = analytics;
        this.translate = translate;
        this.win = win;
        this.store = store;
        this.category = category_common_1.CATEGORY;
        translate.setDefaultLang('en');
        var userLang = win.navigator.language.split('-')[0];
        store.select('i18n').subscribe(function (state) {
            _this.translate.use(state.lang);
        });
        this.store.dispatch(new index_3.ChangeAction(userLang));
    }
    MultilingualService.SUPPORTED_LANGUAGES = [
        { code: 'en', title: 'English' }
    ];
    MultilingualService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [index_1.AnalyticsService, ng2_translate_1.TranslateService, index_2.WindowService, store_1.Store])
    ], MultilingualService);
    return MultilingualService;
}(index_1.Analytics));
exports.MultilingualService = MultilingualService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL2kxOG4vc2VydmljZXMvbXVsdGlsaW5ndWFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRzNDLHNCQUFzQixhQUFhLENBQUMsQ0FBQTtBQUNwQyw4QkFBaUMsZUFBZSxDQUFDLENBQUE7QUFHakQsc0JBQTRDLHVCQUF1QixDQUFDLENBQUE7QUFDcEUsc0JBQXFDLGtCQUFrQixDQUFDLENBQUE7QUFHeEQsZ0NBQXlCLDJCQUEyQixDQUFDLENBQUE7QUFFckQsc0JBQTZCLGtCQUFrQixDQUFDLENBQUE7QUFJaEQ7SUFBeUMsdUNBQVM7SUFRaEQsNkJBQ1MsU0FBMkIsRUFDMUIsU0FBMkIsRUFDM0IsR0FBa0IsRUFDbEIsS0FBZ0M7UUFaNUMsaUJBZ0NDO1FBbEJHLGtCQUFNLFNBQVMsQ0FBQyxDQUFDO1FBTFYsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDMUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsUUFBRyxHQUFILEdBQUcsQ0FBZTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUEyQjtRQUd4QyxJQUFJLENBQUMsUUFBUSxHQUFHLDBCQUFRLENBQUM7UUFHekIsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUcvQixJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFHcEQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUF5QjtZQUV2RCxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFHSCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG9CQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBM0JhLHVDQUFtQixHQUFpQjtRQUNoRCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtLQUNqQyxDQUFDO0lBUEo7UUFBQyxpQkFBVSxFQUFFOzsyQkFBQTtJQWlDYiwwQkFBQztBQUFELENBaENBLEFBZ0NDLENBaEN3QyxpQkFBUyxHQWdDakQ7QUFoQ1ksMkJBQW1CLHNCQWdDL0IsQ0FBQSIsImZpbGUiOiJhcHAvZnJhbWV3b3Jrcy9pMThuL3NlcnZpY2VzL211bHRpbGluZ3VhbC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBsaWJzXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICduZzItdHJhbnNsYXRlJztcblxuLy8gYXBwXG5pbXBvcnQgeyBBbmFseXRpY3MsIEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9hbmFseXRpY3MvaW5kZXgnO1xuaW1wb3J0IHsgV2luZG93U2VydmljZSwgSUxhbmcgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBDQVRFR09SWSB9IGZyb20gJy4uL2NvbW1vbi9jYXRlZ29yeS5jb21tb24nO1xuaW1wb3J0IHsgSU11bHRpbGluZ3VhbFN0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL2luZGV4JztcbmltcG9ydCB7IENoYW5nZUFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG4vLyBzZXJ2aWNlXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTXVsdGlsaW5ndWFsU2VydmljZSBleHRlbmRzIEFuYWx5dGljcyB7XG5cbiAgLy8gZGVmYXVsdCBzdXBwb3J0ZWQgbGFuZ3VhZ2VzXG4gIC8vIHNlZSB3ZWIubW9kdWxlLnRzIGZvciBleGFtcGxlIG9mIGhvdyB0byBwcm92aWRlIGRpZmZlcmVudCB2YWx1ZVxuICBwdWJsaWMgc3RhdGljIFNVUFBPUlRFRF9MQU5HVUFHRVM6IEFycmF5PElMYW5nPiA9IFtcbiAgICB7IGNvZGU6ICdlbicsIHRpdGxlOiAnRW5nbGlzaCcgfVxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhbmFseXRpY3M6IEFuYWx5dGljc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB3aW46IFdpbmRvd1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8SU11bHRpbGluZ3VhbFN0YXRlPlxuICApIHtcbiAgICBzdXBlcihhbmFseXRpY3MpO1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBDQVRFR09SWTtcblxuICAgIC8vIHRoaXMgbGFuZ3VhZ2Ugd2lsbCBiZSB1c2VkIGFzIGEgZmFsbGJhY2sgd2hlbiBhIHRyYW5zbGF0aW9uIGlzbid0IGZvdW5kIGluIHRoZSBjdXJyZW50IGxhbmd1YWdlXG4gICAgdHJhbnNsYXRlLnNldERlZmF1bHRMYW5nKCdlbicpO1xuXG4gICAgLy8gdXNlIGJyb3dzZXIvcGxhdGZvcm0gbGFuZyBpZiBhdmFpbGFibGVcbiAgICBsZXQgdXNlckxhbmcgPSB3aW4ubmF2aWdhdG9yLmxhbmd1YWdlLnNwbGl0KCctJylbMF07XG5cbiAgICAvLyBzdWJzY3JpYmUgdG8gY2hhbmdlc1xuICAgIHN0b3JlLnNlbGVjdCgnaTE4bicpLnN1YnNjcmliZSgoc3RhdGU6IElNdWx0aWxpbmd1YWxTdGF0ZSkgPT4ge1xuICAgICAgLy8gdXBkYXRlIG5nMi10cmFuc2xhdGUgd2hpY2ggd2lsbCBjYXVzZSB0cmFuc2xhdGlvbnMgdG8gb2NjdXIgd2hlcmV2ZXIgdGhlIFRyYW5zbGF0ZVBpcGUgaXMgdXNlZCBpbiB0aGUgdmlld1xuICAgICAgdGhpcy50cmFuc2xhdGUudXNlKHN0YXRlLmxhbmcpO1xuICAgIH0pO1xuXG4gICAgLy8gaW5pdCB0aGUgbGFuZ1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZUFjdGlvbih1c2VyTGFuZykpO1xuICB9XG59XG4iXX0=
