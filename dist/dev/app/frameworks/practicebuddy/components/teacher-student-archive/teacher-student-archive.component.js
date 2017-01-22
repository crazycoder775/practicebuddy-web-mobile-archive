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
var base_component_1 = require('../../../core/decorators/base.component');
var router_1 = require('@angular/router');
var firebase_service_1 = require('../../../practicebuddy/services/firebase.service');
var TeacherStudentArchiveComponent = (function () {
    function TeacherStudentArchiveComponent(route, firebaseService, _router, ngZone) {
        this.route = route;
        this.firebaseService = firebaseService;
        this._router = _router;
        this.ngZone = ngZone;
    }
    TeacherStudentArchiveComponent.prototype.ngOnInit = function () {
        this.archivedstudentpractices$ = this.firebaseService.getArchivedPractices();
    };
    TeacherStudentArchiveComponent.prototype.goHome = function () {
        this._router.navigate(["/home"]);
    };
    TeacherStudentArchiveComponent = __decorate([
        base_component_1.BaseComponent({
            moduleId: module.id,
            selector: 'sd-teacher-student-archive',
            templateUrl: 'teacher-student-archive.component.html',
            styleUrls: ['teacher-student-archive.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, firebase_service_1.FirebaseService, router_1.Router, core_1.NgZone])
    ], TeacherStudentArchiveComponent);
    return TeacherStudentArchiveComponent;
}());
exports.TeacherStudentArchiveComponent = TeacherStudentArchiveComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL3ByYWN0aWNlYnVkZHkvY29tcG9uZW50cy90ZWFjaGVyLXN0dWRlbnQtYXJjaGl2ZS90ZWFjaGVyLXN0dWRlbnQtYXJjaGl2ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxQyxlQUFlLENBQUMsQ0FBQTtBQUNyRCwrQkFBNEIseUNBQXlDLENBQUMsQ0FBQTtBQUd0RSx1QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN2RCxpQ0FBOEIsa0RBQWtELENBQUMsQ0FBQTtBQVNqRjtJQUlFLHdDQUFvQixLQUFxQixFQUMzQixlQUFnQyxFQUNoQyxPQUFlLEVBQ2YsTUFBYztRQUhSLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQzNCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNuQixDQUFDO0lBRVgsaURBQVEsR0FBUjtRQUNHLElBQUksQ0FBQyx5QkFBeUIsR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDckYsQ0FBQztJQUVELCtDQUFNLEdBQU47UUFDRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQXRCSDtRQUFDLDhCQUFhLENBQUM7WUFDYixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxXQUFXLEVBQUUsd0NBQXdDO1lBQ3JELFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzNDLENBQUM7O3NDQUFBO0lBb0JGLHFDQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CWSxzQ0FBOEIsaUNBbUIxQyxDQUFBIiwiZmlsZSI6ImFwcC9mcmFtZXdvcmtzL3ByYWN0aWNlYnVkZHkvY29tcG9uZW50cy90ZWFjaGVyLXN0dWRlbnQtYXJjaGl2ZS90ZWFjaGVyLXN0dWRlbnQtYXJjaGl2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgT25Jbml0LCBOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCYXNlQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9jb3JlL2RlY29yYXRvcnMvYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHtMb2dTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2xvZy5zZXJ2aWNlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9wcmFjdGljZWJ1ZGR5L3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2UnO1xuaW1wb3J0IHtTdHVkZW50TW9kZWx9IGZyb20gJy4uLy4uLy4uL3ByYWN0aWNlYnVkZHkvbW9kZWxzL3N0dWRlbnQubW9kZWwnO1xuXG5AQmFzZUNvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtdGVhY2hlci1zdHVkZW50LWFyY2hpdmUnLFxuICB0ZW1wbGF0ZVVybDogJ3RlYWNoZXItc3R1ZGVudC1hcmNoaXZlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RlYWNoZXItc3R1ZGVudC1hcmNoaXZlLmNzcyddIFxufSlcbmV4cG9ydCBjbGFzcyBUZWFjaGVyU3R1ZGVudEFyY2hpdmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcbiAgcHVibGljIGFyY2hpdmVkc3R1ZGVudHByYWN0aWNlcyQ6IE9ic2VydmFibGU8YW55PjtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZVxuICAgICAgICApIHt9XG5cbiBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFyY2hpdmVkc3R1ZGVudHByYWN0aWNlcyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldEFyY2hpdmVkUHJhY3RpY2VzKCk7XG4gfVxuXG4gZ29Ib21lKCkge1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvaG9tZVwiXSk7XG4gIH0gXG4gIFxuIFxufSJdfQ==
