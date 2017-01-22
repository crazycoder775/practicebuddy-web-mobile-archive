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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var ng2_translate_1 = require("ng2-translate");
var index_1 = require("../core/index");
var index_2 = require("./components/index");
var index_3 = require("./services/index");
function translateFactory(http) {
    return new ng2_translate_1.TranslateStaticLoader(http, (index_1.Config.IS_MOBILE_NATIVE() ? '/' : '') + "assets/i18n", '.json');
}
exports.translateFactory = translateFactory;
;
var MultilingualModule = MultilingualModule_1 = (function () {
    function MultilingualModule(parentModule) {
        if (parentModule) {
            throw new Error('MultilingualModule already loaded; Import in root module only.');
        }
    }
    MultilingualModule.forRoot = function (configuredProviders) {
        return {
            ngModule: MultilingualModule_1,
            providers: configuredProviders
        };
    };
    return MultilingualModule;
}());
MultilingualModule = MultilingualModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ng2_translate_1.TranslateModule.forRoot()
        ],
        declarations: [
            index_2.LangSwitcherComponent
        ],
        exports: [
            index_2.LangSwitcherComponent,
            ng2_translate_1.TranslateModule
        ],
        providers: [
            index_3.MultilingualService
        ]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [MultilingualModule])
], MultilingualModule);
exports.MultilingualModule = MultilingualModule;
var MultilingualModule_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlsaW5ndWFsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm11bHRpbGluZ3VhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLHNDQUFrRjtBQUNsRiwwQ0FBK0M7QUFDL0Msd0NBQTZDO0FBQzdDLDBDQUErQztBQUMvQyxzQ0FBaUQ7QUFHakQsK0NBQXVFO0FBR3ZFLHVDQUF1QztBQUd2Qyw0Q0FBMkQ7QUFDM0QsMENBQXVEO0FBR3ZELDBCQUFpQyxJQUFVO0lBQ3pDLE1BQU0sQ0FBQyxJQUFJLHFDQUFxQixDQUFDLElBQUksRUFBRSxDQUFHLGNBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLGlCQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeEcsQ0FBQztBQUZELDRDQUVDO0FBQUEsQ0FBQztBQXlCRixJQUFhLGtCQUFrQjtJQVc3Qiw0QkFBb0MsWUFBZ0M7UUFDbEUsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7UUFDcEYsQ0FBQztJQUNILENBQUM7SUFYTSwwQkFBTyxHQUFkLFVBQWUsbUJBQStCO1FBQzVDLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxvQkFBa0I7WUFDNUIsU0FBUyxFQUFFLG1CQUFtQjtTQUMvQixDQUFDO0lBQ0osQ0FBQztJQU9ILHlCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSxrQkFBa0I7SUFuQjlCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHFCQUFZO1lBQ1oscUJBQVk7WUFDWixtQkFBVztZQUNYLGlCQUFVO1lBQ1YsK0JBQWUsQ0FBQyxPQUFPLEVBQUU7U0FDMUI7UUFDRCxZQUFZLEVBQUU7WUFDWiw2QkFBcUI7U0FDdEI7UUFDRCxPQUFPLEVBQUU7WUFDUCw2QkFBcUI7WUFDckIsK0JBQWU7U0FDaEI7UUFDRCxTQUFTLEVBQUU7WUFDVCwyQkFBbUI7U0FDcEI7S0FDRixDQUFDO0lBWWEsV0FBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsZUFBUSxFQUFFLENBQUE7cUNBQWUsa0JBQWtCO0dBWHpELGtCQUFrQixDQWdCOUI7QUFoQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBNb2R1bGUsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuLy8gbGlic1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVTdGF0aWNMb2FkZXIgfSBmcm9tICduZzItdHJhbnNsYXRlJztcblxuLy8gYXBwXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBMYW5nU3dpdGNoZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgTXVsdGlsaW5ndWFsU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xuXG4vLyBmb3IgQW9UIGNvbXBpbGF0aW9uXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlRmFjdG9yeShodHRwOiBIdHRwKSB7XG4gIHJldHVybiBuZXcgVHJhbnNsYXRlU3RhdGljTG9hZGVyKGh0dHAsIGAke0NvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkgPyAnLycgOiAnJ31hc3NldHMvaTE4bmAsICcuanNvbicpO1xufTtcblxuLyoqXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgZm9yIG1vZHVsZXMgdGhhdCBtaWdodCBiZSBpbXBvcnRlZCBieSBhIGxhenkgbG9hZGVkIG1vZHVsZS5cbiAqL1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBIdHRwTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KClcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTGFuZ1N3aXRjaGVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMYW5nU3dpdGNoZXJDb21wb25lbnQsXG4gICAgVHJhbnNsYXRlTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE11bHRpbGluZ3VhbFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aWxpbmd1YWxNb2R1bGUge1xuXG4gIC8vIG9wdGlvbmFsIHVzYWdlXG4gIC8vIGlkZWFsbHkgd2UgY291bGQgdXNlIHRoaXMgdG8gb3ZlcnJpZGUgVHJhbnNsYXRlTW9kdWxlLCBidXQgaXQgcmVxdWlyZXMgdGhlIHN0YXRpYyBhYm92ZSBhdCBtb21lbnRcbiAgc3RhdGljIGZvclJvb3QoY29uZmlndXJlZFByb3ZpZGVyczogQXJyYXk8YW55Pik6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTXVsdGlsaW5ndWFsTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBjb25maWd1cmVkUHJvdmlkZXJzXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogTXVsdGlsaW5ndWFsTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdWx0aWxpbmd1YWxNb2R1bGUgYWxyZWFkeSBsb2FkZWQ7IEltcG9ydCBpbiByb290IG1vZHVsZSBvbmx5LicpO1xuICAgIH1cbiAgfVxufVxuIl19