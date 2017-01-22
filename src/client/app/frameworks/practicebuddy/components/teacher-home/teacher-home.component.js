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
var core_1 = require("@angular/core");
var base_component_1 = require("../../../core/decorators/base.component");
var log_service_1 = require("../../../core/services/log.service");
var tokens_1 = require("../../../core/tokens");
var router_1 = require("@angular/router");
var firebase_service_1 = require("../../../practicebuddy/services/firebase.service");
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
        this._router.navigate([""]);
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
    return TeacherHomeComponent;
}());
TeacherHomeComponent = __decorate([
    base_component_1.BaseComponent({
        moduleId: module.id,
        selector: 'sd-teacher-home',
        templateUrl: 'teacher-home.component.html',
        styleUrls: ['teacher-home.css']
    }),
    __param(3, core_1.Inject(tokens_1.FRAME)),
    __param(4, core_1.Inject(tokens_1.DIALOGS)),
    __metadata("design:paramtypes", [firebase_service_1.FirebaseService,
        log_service_1.LogService,
        router_1.Router, Object, Object])
], TeacherHomeComponent);
exports.TeacherHomeComponent = TeacherHomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hlci1ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlYWNoZXItaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUE2QztBQUM3QywwRUFBc0U7QUFDdEUsa0VBQThEO0FBQzlELCtDQUFvRDtBQUdwRCwwQ0FBdUM7QUFDdkMscUZBQWlGO0FBU2pGLElBQWEsb0JBQW9CO0lBRy9CLDhCQUFtQixlQUFnQyxFQUMvQixNQUFrQixFQUNsQixPQUFlLEVBQ0EsS0FBVSxFQUNSLE9BQVk7UUFKOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQy9CLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNBLFVBQUssR0FBTCxLQUFLLENBQUs7UUFDUixZQUFPLEdBQVAsT0FBTyxDQUFLO0lBQ3BDLENBQUM7SUFFZix1Q0FBUSxHQUFSO1FBQ0csSUFBSSxDQUFDLGdCQUFnQixHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN6RSxDQUFDO0lBRUYscUNBQU0sR0FBTjtRQUNHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0QscURBQXNCLEdBQXRCLFVBQXVCLE9BQW9CO1FBQ3pDLElBQUksZ0JBQWdCLEdBQUc7WUFDckIsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUU7U0FDdEMsQ0FBQTtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELDBDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBR0gsMkJBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLG9CQUFvQjtJQU5oQyw4QkFBYSxDQUFDO1FBQ2IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsV0FBVyxFQUFFLDZCQUE2QjtRQUMxQyxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztLQUNoQyxDQUFDO0lBT2EsV0FBQSxhQUFNLENBQUMsY0FBSyxDQUFDLENBQUE7SUFDYixXQUFBLGFBQU0sQ0FBQyxnQkFBTyxDQUFDLENBQUE7cUNBSlEsa0NBQWU7UUFDdkIsd0JBQVU7UUFDVCxlQUFNO0dBTHhCLG9CQUFvQixDQTZCaEM7QUE3Qlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jhc2VDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uL2NvcmUvZGVjb3JhdG9ycy9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQge0xvZ1NlcnZpY2V9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHtGUkFNRSwgRElBTE9HU30gZnJvbSAnLi4vLi4vLi4vY29yZS90b2tlbnMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtDb25maWd9IGZyb20gJy4uLy4uLy4uL2NvcmUvdXRpbHMvY29uZmlnJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtGaXJlYmFzZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3ByYWN0aWNlYnVkZHkvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZSc7XG5pbXBvcnQge1N0dWRlbnRNb2RlbH0gZnJvbSAnLi4vLi4vLi4vcHJhY3RpY2VidWRkeS9tb2RlbHMvc3R1ZGVudC5tb2RlbCc7XG5cbkBCYXNlQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC10ZWFjaGVyLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ3RlYWNoZXItaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0ZWFjaGVyLWhvbWUuY3NzJ10gXG59KVxuZXhwb3J0IGNsYXNzIFRlYWNoZXJIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG4gIHB1YmxpYyB0ZWFjaGVyc3R1ZGVudHMkOiBPYnNlcnZhYmxlPGFueT47XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsb2dnZXI6IExvZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBASW5qZWN0KEZSQU1FKSBwcml2YXRlIGZyYW1lOiBhbnksXG4gICAgICAgICAgICAgIEBJbmplY3QoRElBTE9HUykgcHJpdmF0ZSBkaWFsb2dzOiBhbnlcbiAgICAgICAgICAgICkge31cblxuIG5nT25Jbml0KCkge1xuICAgIHRoaXMudGVhY2hlcnN0dWRlbnRzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0VGVhY2hlclN0dWRlbnRzKCk7XG4gIH1cblxuIGdvSG9tZSgpIHtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcbiAgfVxuICBnb1RvVGVhY2hlclN0dWRlbnRIb21lKHN0dWRlbnQ6U3R1ZGVudE1vZGVsKXtcbiAgICBsZXQgbmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7ICduYW1lJzogc3R1ZGVudC5OYW1lIH1cbiAgICB9XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIi90ZWFjaGVyLXN0dWRlbnQtaG9tZVwiLCBzdHVkZW50LmlkXSwgbmF2aWdhdGlvbkV4dHJhcyk7XG4gIH1cbiAgXG4gIHZpZXdBcmNoaXZlKCl7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIi90ZWFjaGVyLXN0dWRlbnQtYXJjaGl2ZVwiXSk7XG4gIH1cblxuIFxufSJdfQ==