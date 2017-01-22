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
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var ng2_translate_1 = require("ng2-translate");
var index_1 = require("../../analytics/index");
var index_2 = require("../../core/index");
var category_common_1 = require("../common/category.common");
var index_3 = require("../actions/index");
var MultilingualService = (function (_super) {
    __extends(MultilingualService, _super);
    function MultilingualService(analytics, translate, win, store) {
        var _this = _super.call(this, analytics) || this;
        _this.analytics = analytics;
        _this.translate = translate;
        _this.win = win;
        _this.store = store;
        _this.category = category_common_1.CATEGORY;
        translate.setDefaultLang('en');
        var userLang = win.navigator.language.split('-')[0];
        store.select('i18n').subscribe(function (state) {
            _this.translate.use(state.lang);
        });
        _this.store.dispatch(new index_3.ChangeAction(userLang));
        return _this;
    }
    return MultilingualService;
}(index_1.Analytics));
MultilingualService.SUPPORTED_LANGUAGES = [
    { code: 'en', title: 'English' }
];
MultilingualService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.AnalyticsService,
        ng2_translate_1.TranslateService,
        index_2.WindowService,
        store_1.Store])
], MultilingualService);
exports.MultilingualService = MultilingualService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlsaW5ndWFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtdWx0aWxpbmd1YWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBMkM7QUFHM0MscUNBQW9DO0FBQ3BDLCtDQUFpRDtBQUdqRCwrQ0FBb0U7QUFDcEUsMENBQXdEO0FBR3hELDZEQUFxRDtBQUVyRCwwQ0FBZ0Q7QUFJaEQsSUFBYSxtQkFBbUI7SUFBUyx1Q0FBUztJQVFoRCw2QkFDUyxTQUEyQixFQUMxQixTQUEyQixFQUMzQixHQUFrQixFQUNsQixLQUFnQztRQUoxQyxZQU1FLGtCQUFNLFNBQVMsQ0FBQyxTQWlCakI7UUF0QlEsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDMUIsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsU0FBRyxHQUFILEdBQUcsQ0FBZTtRQUNsQixXQUFLLEdBQUwsS0FBSyxDQUEyQjtRQUd4QyxLQUFJLENBQUMsUUFBUSxHQUFHLDBCQUFRLENBQUM7UUFHekIsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUcvQixJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFHcEQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUF5QjtZQUV2RCxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFHSCxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG9CQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7SUFDbEQsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQWhDRCxDQUF5QyxpQkFBUyxHQWdDakQ7QUE1QmUsdUNBQW1CLEdBQWlCO0lBQ2hELEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO0NBQ2pDLENBQUM7QUFOUyxtQkFBbUI7SUFEL0IsaUJBQVUsRUFBRTtxQ0FVUyx3QkFBZ0I7UUFDZixnQ0FBZ0I7UUFDdEIscUJBQWE7UUFDWCxhQUFLO0dBWlgsbUJBQW1CLENBZ0MvQjtBQWhDWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGxpYnNcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ25nMi10cmFuc2xhdGUnO1xuXG4vLyBhcHBcbmltcG9ydCB7IEFuYWx5dGljcywgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uLy4uL2FuYWx5dGljcy9pbmRleCc7XG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlLCBJTGFuZyB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IENBVEVHT1JZIH0gZnJvbSAnLi4vY29tbW9uL2NhdGVnb3J5LmNvbW1vbic7XG5pbXBvcnQgeyBJTXVsdGlsaW5ndWFsU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvaW5kZXgnO1xuaW1wb3J0IHsgQ2hhbmdlQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbi8vIHNlcnZpY2VcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNdWx0aWxpbmd1YWxTZXJ2aWNlIGV4dGVuZHMgQW5hbHl0aWNzIHtcblxuICAvLyBkZWZhdWx0IHN1cHBvcnRlZCBsYW5ndWFnZXNcbiAgLy8gc2VlIHdlYi5tb2R1bGUudHMgZm9yIGV4YW1wbGUgb2YgaG93IHRvIHByb3ZpZGUgZGlmZmVyZW50IHZhbHVlXG4gIHB1YmxpYyBzdGF0aWMgU1VQUE9SVEVEX0xBTkdVQUdFUzogQXJyYXk8SUxhbmc+ID0gW1xuICAgIHsgY29kZTogJ2VuJywgdGl0bGU6ICdFbmdsaXNoJyB9XG4gIF07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFuYWx5dGljczogQW5hbHl0aWNzU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIHdpbjogV2luZG93U2VydmljZSxcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxJTXVsdGlsaW5ndWFsU3RhdGU+XG4gICkge1xuICAgIHN1cGVyKGFuYWx5dGljcyk7XG4gICAgdGhpcy5jYXRlZ29yeSA9IENBVEVHT1JZO1xuXG4gICAgLy8gdGhpcyBsYW5ndWFnZSB3aWxsIGJlIHVzZWQgYXMgYSBmYWxsYmFjayB3aGVuIGEgdHJhbnNsYXRpb24gaXNuJ3QgZm91bmQgaW4gdGhlIGN1cnJlbnQgbGFuZ3VhZ2VcbiAgICB0cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoJ2VuJyk7XG5cbiAgICAvLyB1c2UgYnJvd3Nlci9wbGF0Zm9ybSBsYW5nIGlmIGF2YWlsYWJsZVxuICAgIGxldCB1c2VyTGFuZyA9IHdpbi5uYXZpZ2F0b3IubGFuZ3VhZ2Uuc3BsaXQoJy0nKVswXTtcblxuICAgIC8vIHN1YnNjcmliZSB0byBjaGFuZ2VzXG4gICAgc3RvcmUuc2VsZWN0KCdpMThuJykuc3Vic2NyaWJlKChzdGF0ZTogSU11bHRpbGluZ3VhbFN0YXRlKSA9PiB7XG4gICAgICAvLyB1cGRhdGUgbmcyLXRyYW5zbGF0ZSB3aGljaCB3aWxsIGNhdXNlIHRyYW5zbGF0aW9ucyB0byBvY2N1ciB3aGVyZXZlciB0aGUgVHJhbnNsYXRlUGlwZSBpcyB1c2VkIGluIHRoZSB2aWV3XG4gICAgICB0aGlzLnRyYW5zbGF0ZS51c2Uoc3RhdGUubGFuZyk7XG4gICAgfSk7XG5cbiAgICAvLyBpbml0IHRoZSBsYW5nXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlQWN0aW9uKHVzZXJMYW5nKSk7XG4gIH1cbn1cbiJdfQ==