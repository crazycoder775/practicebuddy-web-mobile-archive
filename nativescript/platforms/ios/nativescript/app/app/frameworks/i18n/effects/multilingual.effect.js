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
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var lodash_1 = require("lodash");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
var multilingual_service_1 = require("../services/multilingual.service");
var multilingual = require("../actions/multilingual.action");
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
    return MultilingualEffects;
}());
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], MultilingualEffects.prototype, "change$", void 0);
MultilingualEffects = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        effects_1.Actions,
        multilingual_service_1.MultilingualService])
], MultilingualEffects);
exports.MultilingualEffects = MultilingualEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlsaW5ndWFsLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm11bHRpbGluZ3VhbC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHNDQUEyQztBQUczQyxxQ0FBNEM7QUFDNUMseUNBQWdEO0FBQ2hELGlDQUF1QztBQUN2Qyw4Q0FBNkM7QUFDN0MsaUNBQStCO0FBRy9CLHlFQUF1RTtBQUN2RSw2REFBK0Q7QUFHL0QsSUFBYSxtQkFBbUI7SUFrQjlCLDZCQUNVLEtBQWlCLEVBQ2pCLFFBQWlCLEVBQ2pCLGdCQUFxQztRQUgvQyxpQkFJSztRQUhLLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXFCO1FBbkJyQyxZQUFPLEdBQXVCLElBQUksQ0FBQyxRQUFRO2FBQ2xELE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQzthQUN2QyxHQUFHLENBQUMsVUFBQSxNQUFNO1lBQ1QsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUMxQixFQUFFLENBQUMsQ0FBQyxpQkFBUSxDQUFDLFlBQUcsQ0FBQywwQ0FBbUIsQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pFLElBQUksaUJBQWlCLEdBQUcsSUFBSSxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRWpFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBRTFGLE1BQU0sQ0FBQyxJQUFJLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRU4sTUFBTSxDQUFDLElBQUksWUFBWSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RELENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQU1ELENBQUM7SUFDUCwwQkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUFyQlc7SUFBVCxnQkFBTSxFQUFFOzhCQUFVLHVCQUFVO29EQWN4QjtBQWhCTSxtQkFBbUI7SUFEL0IsaUJBQVUsRUFBRTtxQ0FvQk0sYUFBSztRQUNGLGlCQUFPO1FBQ0MsMENBQW1CO0dBckJwQyxtQkFBbUIsQ0F1Qi9CO0FBdkJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gbGlic1xuaW1wb3J0IHsgU3RvcmUsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgaW5jbHVkZXMsIG1hcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbXVsdGlsaW5ndWFsLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgbXVsdGlsaW5ndWFsIGZyb20gJy4uL2FjdGlvbnMvbXVsdGlsaW5ndWFsLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNdWx0aWxpbmd1YWxFZmZlY3RzIHtcblxuICBARWZmZWN0KCkgY2hhbmdlJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJFxuICAgIC5vZlR5cGUobXVsdGlsaW5ndWFsLkFjdGlvblR5cGVzLkNIQU5HRSlcbiAgICAubWFwKGFjdGlvbiA9PiB7XG4gICAgICBsZXQgbGFuZyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgaWYgKGluY2x1ZGVzKG1hcChNdWx0aWxpbmd1YWxTZXJ2aWNlLlNVUFBPUlRFRF9MQU5HVUFHRVMsICdjb2RlJyksIGxhbmcpKSB7XG4gICAgICAgIGxldCBsYW5nQ2hhbmdlZEFjdGlvbiA9IG5ldyBtdWx0aWxpbmd1YWwuTGFuZ0NoYW5nZWRBY3Rpb24obGFuZyk7IFxuICAgICAgICAvLyB0cmFjayBhbmFseXRpY3NcbiAgICAgICAgdGhpcy5tdWx0aWxhbmdTZXJ2aWNlLnRyYWNrKGxhbmdDaGFuZ2VkQWN0aW9uLnR5cGUsIHsgbGFiZWw6IGxhbmdDaGFuZ2VkQWN0aW9uLnBheWxvYWQgfSk7XG4gICAgICAgIC8vIGNoYW5nZSBzdGF0ZVxuICAgICAgICByZXR1cm4gbmV3IG11bHRpbGluZ3VhbC5MYW5nQ2hhbmdlZEFjdGlvbihsYW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgKGhlcmUgZm9yIGV4YW1wbGUpXG4gICAgICAgIHJldHVybiBuZXcgbXVsdGlsaW5ndWFsLkxhbmdVbnN1cHBvcnRlZEFjdGlvbihsYW5nKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBtdWx0aWxhbmdTZXJ2aWNlOiBNdWx0aWxpbmd1YWxTZXJ2aWNlXG4gICkgeyB9XG59XG4iXX0=