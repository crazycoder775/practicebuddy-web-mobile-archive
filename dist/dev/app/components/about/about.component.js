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
var index_1 = require('../../frameworks/core/index');
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
    AboutComponent = __decorate([
        index_1.BaseComponent({
            moduleId: module.id,
            selector: 'sd-about',
            templateUrl: 'about.component.html',
            styleUrls: ['about.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.Injector])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHNCQUFzQyw2QkFBNkIsQ0FBQyxDQUFBO0FBUXBFO0lBZUUsd0JBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFLdEMsQ0FBQztJQWZELHNCQUFZLGdDQUFJO2FBQWhCO1lBQ0UsRUFBRSxDQUFDLENBQUMsY0FBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNuRCxDQUFDO2dCQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7UUFDSCxDQUFDOzs7T0FBQTtJQW5CSDtRQUFDLHFCQUFhLENBQUM7WUFDYixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNuQyxDQUFDOztzQkFBQTtJQXNCRixxQkFBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlksc0JBQWMsaUJBcUIxQixDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50LCBDb25maWcgfSBmcm9tICcuLi8uLi9mcmFtZXdvcmtzL2NvcmUvaW5kZXgnO1xuXG5AQmFzZUNvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtYWJvdXQnLFxuICB0ZW1wbGF0ZVVybDogJ2Fib3V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Fib3V0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCB7XG5cbiAgLy8gSnVzdCBvbmUgd2F5IHlvdSBjb3VsZCBoYW5kbGUgdGhlIHtOfSBgdWkvcGFnZWAgUGFnZSBjbGFzc1xuICAvLyBpbiBhIHNoYXJlZCBjb21wb25lbnQuLi5cbiAgcHJpdmF0ZSBfcGFnZTogYW55O1xuICBwcml2YXRlIGdldCBwYWdlKCkge1xuICAgIGlmIChDb25maWcuUGFnZUNsYXNzKSB7XG4gICAgICBpZiAoIXRoaXMuX3BhZ2UpIHtcbiAgICAgICAgdGhpcy5fcGFnZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KENvbmZpZy5QYWdlQ2xhc3MpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIC8vIFRoaXMgaXMgaGVyZSBhcyBhbiBleGFtcGxlXG4gICAgLy8gaWYgKHRoaXMucGFnZSkge1xuICAgIC8vICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgLy8gfVxuICB9XG59XG4iXX0=
