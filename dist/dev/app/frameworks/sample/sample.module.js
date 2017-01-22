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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var index_1 = require('./components/index');
var index_2 = require('./services/index');
var multilingual_module_1 = require('../i18n/multilingual.module');
var SampleModule = (function () {
    function SampleModule(parentModule) {
        if (parentModule) {
            throw new Error('SampleModule already loaded; Import in root module only.');
        }
    }
    SampleModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule,
                multilingual_module_1.MultilingualModule,
            ],
            declarations: [
                index_1.SAMPLE_COMPONENTS
            ],
            providers: [
                index_2.SAMPLE_PROVIDERS
            ],
            exports: [
                index_1.SAMPLE_COMPONENTS,
                multilingual_module_1.MultilingualModule
            ]
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.SkipSelf()), 
        __metadata('design:paramtypes', [SampleModule])
    ], SampleModule);
    return SampleModule;
}());
exports.SampleModule = SampleModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL3NhbXBsZS9zYW1wbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0MscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRy9DLHNCQUFrQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3ZELHNCQUFpQyxrQkFBa0IsQ0FBQyxDQUFBO0FBQ3BELG9DQUFtQyw2QkFBNkIsQ0FBQyxDQUFBO0FBeUJqRTtJQUVFLHNCQUFvQyxZQUEwQjtRQUM1RCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQztRQUM5RSxDQUFDO0lBQ0gsQ0FBQztJQXpCSDtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWTtnQkFDWixtQkFBVztnQkFDWCxpQkFBVTtnQkFDVixxQkFBWTtnQkFDWix3Q0FBa0I7YUFDbkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1oseUJBQWlCO2FBQ2xCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULHdCQUFnQjthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDUCx5QkFBaUI7Z0JBQ2pCLHdDQUFrQjthQUNuQjtTQUNGLENBQUM7bUJBR2EsZUFBUSxFQUFFO21CQUFFLGVBQVEsRUFBRTs7b0JBSG5DO0lBUUYsbUJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLG9CQUFZLGVBT3hCLENBQUEiLCJmaWxlIjoiYXBwL2ZyYW1ld29ya3Mvc2FtcGxlL3NhbXBsZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBhcHBcbmltcG9ydCB7IFNBTVBMRV9DT01QT05FTlRTIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IFNBTVBMRV9QUk9WSURFUlMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IE11bHRpbGluZ3VhbE1vZHVsZSB9IGZyb20gJy4uL2kxOG4vbXVsdGlsaW5ndWFsLm1vZHVsZSc7XG5cbi8qKlxuICogRG8gbm90IHNwZWNpZnkgcHJvdmlkZXJzIGZvciBtb2R1bGVzIHRoYXQgbWlnaHQgYmUgaW1wb3J0ZWQgYnkgYSBsYXp5IGxvYWRlZCBtb2R1bGUuXG4gKi9cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBIdHRwTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBNdWx0aWxpbmd1YWxNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNBTVBMRV9DT01QT05FTlRTXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFNBTVBMRV9QUk9WSURFUlNcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNBTVBMRV9DT01QT05FTlRTLFxuICAgIE11bHRpbGluZ3VhbE1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNhbXBsZU1vZHVsZSB7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBTYW1wbGVNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NhbXBsZU1vZHVsZSBhbHJlYWR5IGxvYWRlZDsgSW1wb3J0IGluIHJvb3QgbW9kdWxlIG9ubHkuJyk7XG4gICAgfVxuICB9XG59XG4iXX0=
