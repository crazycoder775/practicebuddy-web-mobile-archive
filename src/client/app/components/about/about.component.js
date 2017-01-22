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
var index_1 = require("../../frameworks/core/index");
var AboutComponent = (function () {
    function AboutComponent(injector) {
        this.injector = injector;
    }
    Object.defineProperty(AboutComponent.prototype, "page", {
        get: function () {
            if (index_1.Config.PageClass) {
                if (!this._page) {
                    this._page = this.injector.get(index_1.Config.PageClass);
                }
                return this._page;
            }
        },
        enumerable: true,
        configurable: true
    });
    return AboutComponent;
}());
AboutComponent = __decorate([
    index_1.BaseComponent({
        moduleId: module.id,
        selector: 'sd-about',
        templateUrl: 'about.component.html',
        styleUrls: ['about.component.css']
    }),
    __metadata("design:paramtypes", [core_1.Injector])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMscURBQW9FO0FBUXBFLElBQWEsY0FBYztJQWV6Qix3QkFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUt0QyxDQUFDO0lBZkQsc0JBQVksZ0NBQUk7YUFBaEI7WUFDRSxFQUFFLENBQUMsQ0FBQyxjQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDckIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ25ELENBQUM7Z0JBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDcEIsQ0FBQztRQUNILENBQUM7OztPQUFBO0lBUUgscUJBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBckJZLGNBQWM7SUFOMUIscUJBQWEsQ0FBQztRQUNiLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO0tBQ25DLENBQUM7cUNBZ0I4QixlQUFRO0dBZjNCLGNBQWMsQ0FxQjFCO0FBckJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQsIENvbmZpZyB9IGZyb20gJy4uLy4uL2ZyYW1ld29ya3MvY29yZS9pbmRleCc7XG5cbkBCYXNlQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1hYm91dCcsXG4gIHRlbXBsYXRlVXJsOiAnYWJvdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYWJvdXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IHtcblxuICAvLyBKdXN0IG9uZSB3YXkgeW91IGNvdWxkIGhhbmRsZSB0aGUge059IGB1aS9wYWdlYCBQYWdlIGNsYXNzXG4gIC8vIGluIGEgc2hhcmVkIGNvbXBvbmVudC4uLlxuICBwcml2YXRlIF9wYWdlOiBhbnk7XG4gIHByaXZhdGUgZ2V0IHBhZ2UoKSB7XG4gICAgaWYgKENvbmZpZy5QYWdlQ2xhc3MpIHtcbiAgICAgIGlmICghdGhpcy5fcGFnZSkge1xuICAgICAgICB0aGlzLl9wYWdlID0gdGhpcy5pbmplY3Rvci5nZXQoQ29uZmlnLlBhZ2VDbGFzcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgLy8gVGhpcyBpcyBoZXJlIGFzIGFuIGV4YW1wbGVcbiAgICAvLyBpZiAodGhpcy5wYWdlKSB7XG4gICAgLy8gICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAvLyB9XG4gIH1cbn1cbiJdfQ==