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
var base_component_1 = require("../../../core/decorators/base.component");
var router_1 = require("@angular/router");
var firebase_service_1 = require("../../../practicebuddy/services/firebase.service");
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
        this._router.navigate([""]);
    };
    return TeacherStudentArchiveComponent;
}());
TeacherStudentArchiveComponent = __decorate([
    base_component_1.BaseComponent({
        moduleId: module.id,
        selector: 'sd-teacher-student-archive',
        templateUrl: 'teacher-student-archive.component.html',
        styleUrls: ['teacher-student-archive.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        firebase_service_1.FirebaseService,
        router_1.Router,
        core_1.NgZone])
], TeacherStudentArchiveComponent);
exports.TeacherStudentArchiveComponent = TeacherStudentArchiveComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hlci1zdHVkZW50LWFyY2hpdmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVhY2hlci1zdHVkZW50LWFyY2hpdmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBcUQ7QUFDckQsMEVBQXNFO0FBR3RFLDBDQUF1RDtBQUN2RCxxRkFBaUY7QUFTakYsSUFBYSw4QkFBOEI7SUFJekMsd0NBQW9CLEtBQXFCLEVBQzNCLGVBQWdDLEVBQ2hDLE9BQWUsRUFDZixNQUFjO1FBSFIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDM0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ25CLENBQUM7SUFFWCxpREFBUSxHQUFSO1FBQ0csSUFBSSxDQUFDLHlCQUF5QixHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNyRixDQUFDO0lBRUQsK0NBQU0sR0FBTjtRQUNHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBR0gscUNBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBbkJZLDhCQUE4QjtJQU4xQyw4QkFBYSxDQUFDO1FBQ2IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSw0QkFBNEI7UUFDdEMsV0FBVyxFQUFFLHdDQUF3QztRQUNyRCxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztLQUMzQyxDQUFDO3FDQUsyQix1QkFBYztRQUNWLGtDQUFlO1FBQ3ZCLGVBQU07UUFDUCxhQUFNO0dBUGpCLDhCQUE4QixDQW1CMUM7QUFuQlksd0VBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIE9uSW5pdCwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kZWNvcmF0b3JzL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7TG9nU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9sb2cuc2VydmljZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vcHJhY3RpY2VidWRkeS9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlJztcbmltcG9ydCB7U3R1ZGVudE1vZGVsfSBmcm9tICcuLi8uLi8uLi9wcmFjdGljZWJ1ZGR5L21vZGVscy9zdHVkZW50Lm1vZGVsJztcblxuQEJhc2VDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLXRlYWNoZXItc3R1ZGVudC1hcmNoaXZlJyxcbiAgdGVtcGxhdGVVcmw6ICd0ZWFjaGVyLXN0dWRlbnQtYXJjaGl2ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0ZWFjaGVyLXN0dWRlbnQtYXJjaGl2ZS5jc3MnXSBcbn0pXG5leHBvcnQgY2xhc3MgVGVhY2hlclN0dWRlbnRBcmNoaXZlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG4gIHB1YmxpYyBhcmNoaXZlZHN0dWRlbnRwcmFjdGljZXMkOiBPYnNlcnZhYmxlPGFueT47XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgICAgICAgKSB7fVxuXG4gbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcmNoaXZlZHN0dWRlbnRwcmFjdGljZXMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRBcmNoaXZlZFByYWN0aWNlcygpO1xuIH1cblxuIGdvSG9tZSgpIHtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcbiAgfSBcbiAgXG4gXG59Il19