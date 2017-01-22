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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var ng2_translate_1 = require('ng2-translate');
var index_1 = require('../core/index');
var index_2 = require('./components/index');
var index_3 = require('./services/index');
function translateFactory(http) {
    return new ng2_translate_1.TranslateStaticLoader(http, (index_1.Config.IS_MOBILE_NATIVE() ? '/' : '') + "assets/i18n", '.json');
}
exports.translateFactory = translateFactory;
;
var MultilingualModule = (function () {
    function MultilingualModule(parentModule) {
        if (parentModule) {
            throw new Error('MultilingualModule already loaded; Import in root module only.');
        }
    }
    MultilingualModule.forRoot = function (configuredProviders) {
        return {
            ngModule: MultilingualModule,
            providers: configuredProviders
        };
    };
    MultilingualModule = __decorate([
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
        __param(0, core_1.Optional()),
        __param(0, core_1.SkipSelf()), 
        __metadata('design:paramtypes', [MultilingualModule])
    ], MultilingualModule);
    return MultilingualModule;
}());
exports.MultilingualModule = MultilingualModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL2kxOG4vbXVsdGlsaW5ndWFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EscUJBQWtFLGVBQWUsQ0FBQyxDQUFBO0FBQ2xGLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUdqRCw4QkFBdUQsZUFBZSxDQUFDLENBQUE7QUFHdkUsc0JBQXVCLGVBQWUsQ0FBQyxDQUFBO0FBR3ZDLHNCQUFzQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQzNELHNCQUFvQyxrQkFBa0IsQ0FBQyxDQUFBO0FBR3ZELDBCQUFpQyxJQUFVO0lBQ3pDLE1BQU0sQ0FBQyxJQUFJLHFDQUFxQixDQUFDLElBQUksRUFBRSxDQUFHLGNBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLGlCQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeEcsQ0FBQztBQUZlLHdCQUFnQixtQkFFL0IsQ0FBQTtBQUFBLENBQUM7QUF5QkY7SUFXRSw0QkFBb0MsWUFBZ0M7UUFDbEUsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7UUFDcEYsQ0FBQztJQUNILENBQUM7SUFYTSwwQkFBTyxHQUFkLFVBQWUsbUJBQStCO1FBQzVDLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFLG1CQUFtQjtTQUMvQixDQUFDO0lBQ0osQ0FBQztJQTVCSDtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWTtnQkFDWixxQkFBWTtnQkFDWixtQkFBVztnQkFDWCxpQkFBVTtnQkFDViwrQkFBZSxDQUFDLE9BQU8sRUFBRTthQUMxQjtZQUNELFlBQVksRUFBRTtnQkFDWiw2QkFBcUI7YUFDdEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsNkJBQXFCO2dCQUNyQiwrQkFBZTthQUNoQjtZQUNELFNBQVMsRUFBRTtnQkFDVCwyQkFBbUI7YUFDcEI7U0FDRixDQUFDO21CQVlhLGVBQVEsRUFBRTttQkFBRSxlQUFRLEVBQUU7OzBCQVpuQztJQWlCRix5QkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksMEJBQWtCLHFCQWdCOUIsQ0FBQSIsImZpbGUiOiJhcHAvZnJhbWV3b3Jrcy9pMThuL211bHRpbGluZ3VhbC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSwgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG4vLyBsaWJzXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUsIFRyYW5zbGF0ZVN0YXRpY0xvYWRlciB9IGZyb20gJ25nMi10cmFuc2xhdGUnO1xuXG4vLyBhcHBcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IExhbmdTd2l0Y2hlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5cbi8vIGZvciBBb1QgY29tcGlsYXRpb25cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVGYWN0b3J5KGh0dHA6IEh0dHApIHtcbiAgcmV0dXJuIG5ldyBUcmFuc2xhdGVTdGF0aWNMb2FkZXIoaHR0cCwgYCR7Q29uZmlnLklTX01PQklMRV9OQVRJVkUoKSA/ICcvJyA6ICcnfWFzc2V0cy9pMThuYCwgJy5qc29uJyk7XG59O1xuXG4vKipcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBmb3IgbW9kdWxlcyB0aGF0IG1pZ2h0IGJlIGltcG9ydGVkIGJ5IGEgbGF6eSBsb2FkZWQgbW9kdWxlLlxuICovXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3QoKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMYW5nU3dpdGNoZXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIExhbmdTd2l0Y2hlckNvbXBvbmVudCxcbiAgICBUcmFuc2xhdGVNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTXVsdGlsaW5ndWFsU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpbGluZ3VhbE1vZHVsZSB7XG5cbiAgLy8gb3B0aW9uYWwgdXNhZ2VcbiAgLy8gaWRlYWxseSB3ZSBjb3VsZCB1c2UgdGhpcyB0byBvdmVycmlkZSBUcmFuc2xhdGVNb2R1bGUsIGJ1dCBpdCByZXF1aXJlcyB0aGUgc3RhdGljIGFib3ZlIGF0IG1vbWVudFxuICBzdGF0aWMgZm9yUm9vdChjb25maWd1cmVkUHJvdmlkZXJzOiBBcnJheTxhbnk+KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBNdWx0aWxpbmd1YWxNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IGNvbmZpZ3VyZWRQcm92aWRlcnNcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBNdWx0aWxpbmd1YWxNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ011bHRpbGluZ3VhbE1vZHVsZSBhbHJlYWR5IGxvYWRlZDsgSW1wb3J0IGluIHJvb3QgbW9kdWxlIG9ubHkuJyk7XG4gICAgfVxuICB9XG59XG4iXX0=
