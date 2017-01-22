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
var core_module_1 = require('../core/core.module');
var tokens_1 = require('../core/tokens');
var index_1 = require('./services/index');
var PracticeBuddyModule = (function () {
    function PracticeBuddyModule(parentModule) {
        console.log("PBModule constructor");
        if (parentModule) {
            throw new Error('PBModule already loaded; Import in root module only.');
        }
    }
    PracticeBuddyModule.forRoot = function (configuredProviders) {
        return {
            ngModule: PracticeBuddyModule,
            providers: configuredProviders
        };
    };
    PracticeBuddyModule = __decorate([
        core_1.NgModule({
            imports: [
                core_module_1.CoreModule
            ],
            providers: [
                index_1.PRACTICEBUDDY_PROVIDERS,
                tokens_1.TOKENS_SHARED
            ]
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.SkipSelf()), 
        __metadata('design:paramtypes', [PracticeBuddyModule])
    ], PracticeBuddyModule);
    return PracticeBuddyModule;
}());
exports.PracticeBuddyModule = PracticeBuddyModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL3ByYWN0aWNlYnVkZHkvcHJhY3RpY2VidWRkeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLHFCQUFrRSxlQUFlLENBQUMsQ0FBQTtBQUdsRiw0QkFBMkIscUJBQXFCLENBQUMsQ0FBQTtBQUNqRCx1QkFBOEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvQyxzQkFBd0Msa0JBQWtCLENBQUMsQ0FBQTtBQWdCM0Q7SUFPRSw2QkFBcUMsWUFBaUM7UUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1FBQzFFLENBQUM7SUFDSCxDQUFDO0lBWE0sMkJBQU8sR0FBZCxVQUFlLG1CQUErQjtRQUM1QyxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFNBQVMsRUFBRSxtQkFBbUI7U0FDL0IsQ0FBQztJQUNKLENBQUM7SUFmSDtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCx3QkFBVTthQUNYO1lBQ0QsU0FBUyxFQUFFO2dCQUNULCtCQUF1QjtnQkFDdkIsc0JBQWE7YUFDZDtTQUNGLENBQUM7bUJBUWMsZUFBUSxFQUFFO21CQUFFLGVBQVEsRUFBRTs7MkJBUnBDO0lBY0YsMEJBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLDJCQUFtQixzQkFhL0IsQ0FBQSIsImZpbGUiOiJhcHAvZnJhbWV3b3Jrcy9wcmFjdGljZWJ1ZGR5L3ByYWN0aWNlYnVkZHkubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBhcHBcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICcuLi9jb3JlL2NvcmUubW9kdWxlJztcbmltcG9ydCB7IFRPS0VOU19TSEFSRUQgfSBmcm9tICcuLi9jb3JlL3Rva2Vucyc7XG5pbXBvcnQgeyBQUkFDVElDRUJVRERZX1BST1ZJREVSUyB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xuXG5cbi8qKlxuICogRG8gbm90IHNwZWNpZnkgcHJvdmlkZXJzIGZvciBtb2R1bGVzIHRoYXQgbWlnaHQgYmUgaW1wb3J0ZWQgYnkgYSBsYXp5IGxvYWRlZCBtb2R1bGUuXG4gKi9cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvcmVNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgUFJBQ1RJQ0VCVUREWV9QUk9WSURFUlMsXG4gICAgVE9LRU5TX1NIQVJFRFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFByYWN0aWNlQnVkZHlNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWd1cmVkUHJvdmlkZXJzOiBBcnJheTxhbnk+KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBQcmFjdGljZUJ1ZGR5TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBjb25maWd1cmVkUHJvdmlkZXJzXG4gICAgfTtcbiAgfVxuICBjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBQcmFjdGljZUJ1ZGR5TW9kdWxlKSB7XG4gICAgY29uc29sZS5sb2coYFBCTW9kdWxlIGNvbnN0cnVjdG9yYCk7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQQk1vZHVsZSBhbHJlYWR5IGxvYWRlZDsgSW1wb3J0IGluIHJvb3QgbW9kdWxlIG9ubHkuJyk7XG4gICAgfVxuICB9XG59XG4iXX0=
