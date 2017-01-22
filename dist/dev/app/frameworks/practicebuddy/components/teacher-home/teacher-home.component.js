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
var base_component_1 = require('../../../core/decorators/base.component');
var log_service_1 = require('../../../core/services/log.service');
var tokens_1 = require('../../../core/tokens');
var router_1 = require('@angular/router');
var firebase_service_1 = require('../../../practicebuddy/services/firebase.service');
var TeacherHomeComponent = (function () {
    function TeacherHomeComponent(firebaseService, logger, _router, frame, dialogs) {
        this.firebaseService = firebaseService;
        this.logger = logger;
        this._router = _router;
        this.frame = frame;
        this.dialogs = dialogs;
    }
    TeacherHomeComponent.prototype.ngOnInit = function () {
        this.teacherstudents$ = this.firebaseService.getTeacherStudents();
    };
    TeacherHomeComponent.prototype.goHome = function () {
        this._router.navigate(["/home"]);
    };
    TeacherHomeComponent.prototype.goToTeacherStudentHome = function (student) {
        var navigationExtras = {
            queryParams: { 'name': student.Name }
        };
        this._router.navigate(["/teacher-student-home", student.id], navigationExtras);
    };
    TeacherHomeComponent.prototype.viewArchive = function () {
        this._router.navigate(["/teacher-student-archive"]);
    };
    TeacherHomeComponent = __decorate([
        base_component_1.BaseComponent({
            moduleId: module.id,
            selector: 'sd-teacher-home',
            templateUrl: 'teacher-home.component.html',
            styleUrls: ['teacher-home.css']
        }),
        __param(3, core_1.Inject(tokens_1.FRAME)),
        __param(4, core_1.Inject(tokens_1.DIALOGS)), 
        __metadata('design:paramtypes', [firebase_service_1.FirebaseService, log_service_1.LogService, router_1.Router, Object, Object])
    ], TeacherHomeComponent);
    return TeacherHomeComponent;
}());
exports.TeacherHomeComponent = TeacherHomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL3ByYWN0aWNlYnVkZHkvY29tcG9uZW50cy90ZWFjaGVyLWhvbWUvdGVhY2hlci1ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUJBQTZCLGVBQWUsQ0FBQyxDQUFBO0FBQzdDLCtCQUE0Qix5Q0FBeUMsQ0FBQyxDQUFBO0FBQ3RFLDRCQUF5QixvQ0FBb0MsQ0FBQyxDQUFBO0FBQzlELHVCQUE2QixzQkFBc0IsQ0FBQyxDQUFBO0FBR3BELHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLGlDQUE4QixrREFBa0QsQ0FBQyxDQUFBO0FBU2pGO0lBR0UsOEJBQW1CLGVBQWdDLEVBQy9CLE1BQWtCLEVBQ2xCLE9BQWUsRUFDQSxLQUFVLEVBQ1IsT0FBWTtRQUo5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ0EsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUNSLFlBQU8sR0FBUCxPQUFPLENBQUs7SUFDcEMsQ0FBQztJQUVmLHVDQUFRLEdBQVI7UUFDRyxJQUFJLENBQUMsZ0JBQWdCLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3pFLENBQUM7SUFFRixxQ0FBTSxHQUFOO1FBQ0csSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCxxREFBc0IsR0FBdEIsVUFBdUIsT0FBb0I7UUFDekMsSUFBSSxnQkFBZ0IsR0FBRztZQUNyQixXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRTtTQUN0QyxDQUFBO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsMENBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFoQ0g7UUFBQyw4QkFBYSxDQUFDO1lBQ2IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztTQUNoQyxDQUFDO21CQU9hLGFBQU0sQ0FBQyxjQUFLLENBQUM7bUJBQ2IsYUFBTSxDQUFDLGdCQUFPLENBQUM7OzRCQVI1QjtJQThCRiwyQkFBQztBQUFELENBN0JBLEFBNkJDLElBQUE7QUE3QlksNEJBQW9CLHVCQTZCaEMsQ0FBQSIsImZpbGUiOiJhcHAvZnJhbWV3b3Jrcy9wcmFjdGljZWJ1ZGR5L2NvbXBvbmVudHMvdGVhY2hlci1ob21lL3RlYWNoZXItaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kZWNvcmF0b3JzL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7TG9nU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9sb2cuc2VydmljZSc7XG5pbXBvcnQge0ZSQU1FLCBESUFMT0dTfSBmcm9tICcuLi8uLi8uLi9jb3JlL3Rva2Vucyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0NvbmZpZ30gZnJvbSAnLi4vLi4vLi4vY29yZS91dGlscy9jb25maWcnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vcHJhY3RpY2VidWRkeS9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlJztcbmltcG9ydCB7U3R1ZGVudE1vZGVsfSBmcm9tICcuLi8uLi8uLi9wcmFjdGljZWJ1ZGR5L21vZGVscy9zdHVkZW50Lm1vZGVsJztcblxuQEJhc2VDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLXRlYWNoZXItaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAndGVhY2hlci1ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RlYWNoZXItaG9tZS5jc3MnXSBcbn0pXG5leHBvcnQgY2xhc3MgVGVhY2hlckhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcbiAgcHVibGljIHRlYWNoZXJzdHVkZW50cyQ6IE9ic2VydmFibGU8YW55PjtcbiAgY29uc3RydWN0b3IocHVibGljIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGxvZ2dlcjogTG9nU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIEBJbmplY3QoRlJBTUUpIHByaXZhdGUgZnJhbWU6IGFueSxcbiAgICAgICAgICAgICAgQEluamVjdChESUFMT0dTKSBwcml2YXRlIGRpYWxvZ3M6IGFueVxuICAgICAgICAgICAgKSB7fVxuXG4gbmdPbkluaXQoKSB7XG4gICAgdGhpcy50ZWFjaGVyc3R1ZGVudHMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRUZWFjaGVyU3R1ZGVudHMoKTtcbiAgfVxuXG4gZ29Ib21lKCkge1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvaG9tZVwiXSk7XG4gIH1cbiAgZ29Ub1RlYWNoZXJTdHVkZW50SG9tZShzdHVkZW50OlN0dWRlbnRNb2RlbCl7XG4gICAgbGV0IG5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICBxdWVyeVBhcmFtczogeyAnbmFtZSc6IHN0dWRlbnQuTmFtZSB9XG4gICAgfVxuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvdGVhY2hlci1zdHVkZW50LWhvbWVcIiwgc3R1ZGVudC5pZF0sIG5hdmlnYXRpb25FeHRyYXMpO1xuICB9XG4gIFxuICB2aWV3QXJjaGl2ZSgpe1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvdGVhY2hlci1zdHVkZW50LWFyY2hpdmVcIl0pO1xuICB9XG5cbiBcbn0iXX0=
