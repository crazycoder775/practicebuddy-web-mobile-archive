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
var store_1 = require('@ngrx/store');
var effects_1 = require('@ngrx/effects');
var lodash_1 = require('lodash');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
var multilingual_service_1 = require('../services/multilingual.service');
var multilingual = require('../actions/multilingual.action');
var MultilingualEffects = (function () {
    function MultilingualEffects(store, actions$, multilangService) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.multilangService = multilangService;
        this.change$ = this.actions$
            .ofType(multilingual.ActionTypes.CHANGE)
            .map(function (action) {
            var lang = action.payload;
            if (lodash_1.includes(lodash_1.map(multilingual_service_1.MultilingualService.SUPPORTED_LANGUAGES, 'code'), lang)) {
                var langChangedAction = new multilingual.LangChangedAction(lang);
                _this.multilangService.track(langChangedAction.type, { label: langChangedAction.payload });
                return new multilingual.LangChangedAction(lang);
            }
            else {
                return new multilingual.LangUnsupportedAction(lang);
            }
        });
    }
    __decorate([
        effects_1.Effect(), 
        __metadata('design:type', Observable_1.Observable)
    ], MultilingualEffects.prototype, "change$", void 0);
    MultilingualEffects = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [store_1.Store, effects_1.Actions, multilingual_service_1.MultilingualService])
    ], MultilingualEffects);
    return MultilingualEffects;
}());
exports.MultilingualEffects = MultilingualEffects;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL2kxOG4vZWZmZWN0cy9tdWx0aWxpbmd1YWwuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFHM0Msc0JBQThCLGFBQWEsQ0FBQyxDQUFBO0FBQzVDLHdCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBOEIsUUFBUSxDQUFDLENBQUE7QUFDdkMsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBRy9CLHFDQUFvQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3ZFLElBQVksWUFBWSxXQUFNLGdDQUFnQyxDQUFDLENBQUE7QUFHL0Q7SUFrQkUsNkJBQ1UsS0FBaUIsRUFDakIsUUFBaUIsRUFDakIsZ0JBQXFDO1FBckJqRCxpQkF1QkM7UUFKVyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFxQjtRQW5CckMsWUFBTyxHQUF1QixJQUFJLENBQUMsUUFBUTthQUNsRCxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7YUFDdkMsR0FBRyxDQUFDLFVBQUEsTUFBTTtZQUNULElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDMUIsRUFBRSxDQUFDLENBQUMsaUJBQVEsQ0FBQyxZQUFHLENBQUMsMENBQW1CLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RSxJQUFJLGlCQUFpQixHQUFHLElBQUksWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVqRSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUUxRixNQUFNLENBQUMsSUFBSSxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVOLE1BQU0sQ0FBQyxJQUFJLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0RCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFNRCxDQUFDO0lBcEJMO1FBQUMsZ0JBQU0sRUFBRTs7d0RBQUE7SUFIWDtRQUFDLGlCQUFVLEVBQUU7OzJCQUFBO0lBd0JiLDBCQUFDO0FBQUQsQ0F2QkEsQUF1QkMsSUFBQTtBQXZCWSwyQkFBbUIsc0JBdUIvQixDQUFBIiwiZmlsZSI6ImFwcC9mcmFtZXdvcmtzL2kxOG4vZWZmZWN0cy9tdWx0aWxpbmd1YWwuZWZmZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBsaWJzXG5pbXBvcnQgeyBTdG9yZSwgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0LCBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBpbmNsdWRlcywgbWFwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IE11bHRpbGluZ3VhbFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9tdWx0aWxpbmd1YWwuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBtdWx0aWxpbmd1YWwgZnJvbSAnLi4vYWN0aW9ucy9tdWx0aWxpbmd1YWwuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE11bHRpbGluZ3VhbEVmZmVjdHMge1xuXG4gIEBFZmZlY3QoKSBjaGFuZ2UkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkXG4gICAgLm9mVHlwZShtdWx0aWxpbmd1YWwuQWN0aW9uVHlwZXMuQ0hBTkdFKVxuICAgIC5tYXAoYWN0aW9uID0+IHtcbiAgICAgIGxldCBsYW5nID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBpZiAoaW5jbHVkZXMobWFwKE11bHRpbGluZ3VhbFNlcnZpY2UuU1VQUE9SVEVEX0xBTkdVQUdFUywgJ2NvZGUnKSwgbGFuZykpIHtcbiAgICAgICAgbGV0IGxhbmdDaGFuZ2VkQWN0aW9uID0gbmV3IG11bHRpbGluZ3VhbC5MYW5nQ2hhbmdlZEFjdGlvbihsYW5nKTsgXG4gICAgICAgIC8vIHRyYWNrIGFuYWx5dGljc1xuICAgICAgICB0aGlzLm11bHRpbGFuZ1NlcnZpY2UudHJhY2sobGFuZ0NoYW5nZWRBY3Rpb24udHlwZSwgeyBsYWJlbDogbGFuZ0NoYW5nZWRBY3Rpb24ucGF5bG9hZCB9KTtcbiAgICAgICAgLy8gY2hhbmdlIHN0YXRlXG4gICAgICAgIHJldHVybiBuZXcgbXVsdGlsaW5ndWFsLkxhbmdDaGFuZ2VkQWN0aW9uKGxhbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCAoaGVyZSBmb3IgZXhhbXBsZSlcbiAgICAgICAgcmV0dXJuIG5ldyBtdWx0aWxpbmd1YWwuTGFuZ1Vuc3VwcG9ydGVkQWN0aW9uKGxhbmcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4sXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG11bHRpbGFuZ1NlcnZpY2U6IE11bHRpbGluZ3VhbFNlcnZpY2VcbiAgKSB7IH1cbn1cbiJdfQ==
