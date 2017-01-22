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
var WindowService = (function () {
    function WindowService() {
        this.navigator = {};
        this.location = {};
    }
    WindowService.prototype.alert = function (msg) { return; };
    WindowService.prototype.confirm = function (msg) { return; };
    WindowService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], WindowService);
    return WindowService;
}());
exports.WindowService = WindowService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL2NvcmUvc2VydmljZXMvd2luZG93LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQU0zQztJQUFBO1FBRVMsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQVEsRUFBRSxDQUFDO0lBSTVCLENBQUM7SUFIUSw2QkFBSyxHQUFaLFVBQWEsR0FBVyxJQUFVLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDcEMsK0JBQU8sR0FBZCxVQUFlLEdBQVcsSUFBVSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBTi9DO1FBQUMsaUJBQVUsRUFBRTs7cUJBQUE7SUFRYixvQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFkscUJBQWEsZ0JBT3pCLENBQUEiLCJmaWxlIjoiYXBwL2ZyYW1ld29ya3MvY29yZS9zZXJ2aWNlcy93aW5kb3cuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBJV2luZG93IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pd2luZG93JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdpbmRvd1NlcnZpY2UgaW1wbGVtZW50cyBJV2luZG93IHtcbiAgXG4gIHB1YmxpYyBuYXZpZ2F0b3I6IGFueSA9IHt9O1xuICBwdWJsaWMgbG9jYXRpb246IGFueSA9IHt9O1xuICBwdWJsaWMgYWxlcnQobXNnOiBzdHJpbmcpOiB2b2lkIHsgcmV0dXJuOyB9XG4gIHB1YmxpYyBjb25maXJtKG1zZzogc3RyaW5nKTogdm9pZCB7IHJldHVybjsgfVxuXG59XG4iXX0=
