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
var tokens_1 = require('../../../core/tokens');
var router_1 = require('@angular/router');
var firebase_service_1 = require('../../../practicebuddy/services/firebase.service');
var student_model_1 = require('../../../practicebuddy/models/student.model');
require('rxjs/add/operator/take');
var StudentAdminComponent = (function () {
    function StudentAdminComponent(route, firebaseService, _router, ngZone, frame, routerExtensions, listPicker, Switch, fancyalert) {
        this.route = route;
        this.firebaseService = firebaseService;
        this._router = _router;
        this.ngZone = ngZone;
        this.frame = frame;
        this.routerExtensions = routerExtensions;
        this.listPicker = listPicker;
        this.Switch = Switch;
        this.fancyalert = fancyalert;
        this.instrument = 10;
    }
    StudentAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.firebaseService.getMyStudent(_this.id).subscribe(function (student) {
                _this.ngZone.run(function () {
                    for (var prop in student) {
                        if (prop === "Id") {
                            _this.id = student[prop];
                        }
                        if (prop === "Name") {
                            _this.name = student[prop];
                        }
                        if (prop === "PracticesRequired") {
                            _this.practicesrequired = student[prop];
                        }
                        if (prop === "PracticesCompleted") {
                            _this.practicescompleted = student[prop];
                        }
                        if (prop === "AdminPassword") {
                            _this.adminpassword = student[prop];
                        }
                        if (prop === "PracticeLength") {
                            _this.practicelength = student[prop];
                        }
                        if (prop === "Reward") {
                            _this.reward = student[prop];
                        }
                        if (prop === "Instrument") {
                            _this.instrument = student[prop];
                        }
                        if (prop === "TeacherEmail") {
                            _this.teacheremail = student[prop];
                        }
                        if (prop === "NotifyAll") {
                            _this.notifyAll = student[prop];
                        }
                        _this.instruments = ['acoustic guitar', 'banjo', 'cello',
                            'clarinet', 'elecric guitar', 'flute', 'french horn',
                            'handbells', 'harp', 'mandolin', 'music', 'oboe', 'organ', 'percussion', 'piano', 'sax',
                            'trombone', 'trumpet', 'violin', 'voice', 'xylophone'];
                    }
                });
            });
        });
    };
    StudentAdminComponent.prototype.ngAfterViewInit = function () {
        this.testForPassword();
    };
    StudentAdminComponent.prototype.goHome = function () {
        this._router.navigate(["/home"]);
    };
    StudentAdminComponent.prototype.selectedIndexChanged = function (picker) {
        this.selectedInstrumentIndex = picker.selectedIndex;
    };
    StudentAdminComponent.prototype.selectedSwitchChanged = function (result) {
        console.log(result);
        if (result) {
            this.selectedSwitchIndex = true;
        }
        else {
            this.selectedSwitchIndex = false;
        }
    };
    StudentAdminComponent.prototype.testForPassword = function () {
        var _this = this;
        if (this.adminpassword) {
            this.fancyalert.TNSFancyAlert.showTextField('Password', '', new this.fancyalert.TNSFancyAlertButton({
                label: 'Submit', action: function (value) {
                    console.log("User entered " + value);
                    if (value.trim() != "" && value.trim() == _this.adminpassword) {
                    }
                    else {
                        _this.showError();
                    }
                }
            }), 'alert.png', '#D44937', 'Enter your password', undefined, undefined);
        }
    };
    StudentAdminComponent.prototype.showError = function () {
        var _this = this;
        var buttons = [
            new this.fancyalert.TNSFancyAlertButton({
                label: 'Ok!', action: function () {
                    _this.routerExtensions.navigate([''], { clearHistory: true });
                }
            }),
        ];
        this.fancyalert.TNSFancyAlert.showCustomButtons(buttons, 'alert.png', '#F13030', 'Sorry!', "Sorry, you need to enter a password to access this area!", '');
    };
    StudentAdminComponent.prototype.submit = function () {
        var _this = this;
        this.newstudent = new student_model_1.StudentModel(this.id, this.adminpassword, this.date, this.selectedInstrumentIndex, this.name, Math.round(this.practicelength), this.practicescompleted, Math.round(this.practicesrequired), this.reward, this.teacheremail, this.selectedSwitchIndex);
        if (this.newstudent.Name == "" ||
            this.newstudent.PracticesRequired < 1 ||
            this.newstudent.PracticeLength < 1 ||
            this.newstudent.Reward == "") {
            this.fancyalert.TNSFancyAlert.showError('Oops!', 'Please enter values in the required fields', 'OK!');
        }
        else if (this.newstudent.NotifyAll == true && this.newstudent.TeacherEmail == "") {
            this.fancyalert.TNSFancyAlert.showError('Oops!', 'If you want your teacher to receive emails, please enter their email address', 'OK!');
        }
        else {
            this.firebaseService.saveSettings(this.newstudent)
                .then(function () {
                _this.fancyalert.TNSFancyAlert.showSuccess('Saved!', 'Student info saved!', 'OK!');
            })
                .catch(function (e) {
                console.log(e.message);
            });
        }
    };
    StudentAdminComponent = __decorate([
        base_component_1.BaseComponent({
            moduleId: module.id,
            selector: 'sd-student-admin',
            templateUrl: 'student-admin.component.html',
            styleUrls: ['student-admin.css']
        }),
        __param(4, core_1.Inject(tokens_1.FRAME)),
        __param(5, core_1.Inject(tokens_1.NAVIGATION_EXTENSIONS)),
        __param(6, core_1.Inject(tokens_1.LISTPICKER)),
        __param(7, core_1.Inject(tokens_1.SWITCH)),
        __param(8, core_1.Inject(tokens_1.FANCYALERT)), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, firebase_service_1.FirebaseService, router_1.Router, core_1.NgZone, Object, Object, Object, Object, Object])
    ], StudentAdminComponent);
    return StudentAdminComponent;
}());
exports.StudentAdminComponent = StudentAdminComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL3ByYWN0aWNlYnVkZHkvY29tcG9uZW50cy9zdHVkZW50LWFkbWluL3N0dWRlbnQtYWRtaW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkUsZUFBZSxDQUFDLENBQUE7QUFDN0YsK0JBQThCLHlDQUF5QyxDQUFDLENBQUE7QUFDeEUsdUJBQTZFLHNCQUFzQixDQUFDLENBQUE7QUFHcEcsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFDekQsaUNBQWdDLGtEQUFrRCxDQUFDLENBQUE7QUFDbkYsOEJBQTZCLDZDQUE2QyxDQUFDLENBQUE7QUFFM0UsUUFBTyx3QkFBd0IsQ0FBQyxDQUFBO0FBUWhDO0lBcUJFLCtCQUNVLEtBQXFCLEVBQ3JCLGVBQWdDLEVBQ2hDLE9BQWUsRUFDZixNQUFjLEVBQ0MsS0FBVSxFQUNNLGdCQUFxQixFQUNoQyxVQUFlLEVBQ25CLE1BQVcsRUFDUCxVQUFlO1FBUm5DLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNDLFVBQUssR0FBTCxLQUFLLENBQUs7UUFDTSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQUs7UUFDaEMsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFLO1FBQ1AsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQXBCN0MsZUFBVSxHQUFXLEVBQUUsQ0FBQztJQXFCcEIsQ0FBQztJQUVMLHdDQUFRLEdBQVI7UUFBQSxpQkE4Q0M7UUE1Q0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFXO1lBQ2pELEtBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLEtB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QU0sQ0FBQzttQkFDZCxhQUFNLENBQUMsbUJBQVUsQ0FBQzs7NkJBL0JyQjtJQThLRiw0QkFBQztBQUFELENBN0tBLEFBNktDLElBQUE7QUE3S1ksNkJBQXFCLHdCQTZLakMsQ0FBQSIsImZpbGUiOiJhcHAvZnJhbWV3b3Jrcy9wcmFjdGljZWJ1ZGR5L2NvbXBvbmVudHMvc3R1ZGVudC1hZG1pbi9zdHVkZW50LWFkbWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgTmdab25lLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZGVjb3JhdG9ycy9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGUkFNRSwgTElTVFBJQ0tFUiwgRkFOQ1lBTEVSVCwgTkFWSUdBVElPTl9FWFRFTlNJT05TLCBTV0lUQ0ggfSBmcm9tICcuLi8uLi8uLi9jb3JlL3Rva2Vucyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvdXRpbHMvY29uZmlnJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcHJhY3RpY2VidWRkeS9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0dWRlbnRNb2RlbCB9IGZyb20gJy4uLy4uLy4uL3ByYWN0aWNlYnVkZHkvbW9kZWxzL3N0dWRlbnQubW9kZWwnO1xuaW1wb3J0IHsgUHJhY3RpY2VNb2RlbCB9IGZyb20gJy4uLy4uLy4uL3ByYWN0aWNlYnVkZHkvbW9kZWxzL3ByYWN0aWNlLm1vZGVsJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdGFrZSc7XG5cbkBCYXNlQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1zdHVkZW50LWFkbWluJyxcbiAgdGVtcGxhdGVVcmw6ICdzdHVkZW50LWFkbWluLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0dWRlbnQtYWRtaW4uY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3R1ZGVudEFkbWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBuYW1lOiBzdHJpbmc7XG4gIHByYWN0aWNlc3JlcXVpcmVkOiBudW1iZXI7XG4gIHByYWN0aWNlbGVuZ3RoOiBudW1iZXI7XG4gIHByYWN0aWNlc2NvbXBsZXRlZDogbnVtYmVyO1xuICByZXdhcmQ6IHN0cmluZztcbiAgYWRtaW5wYXNzd29yZDogc3RyaW5nO1xuICB0ZWFjaGVyZW1haWw6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICBpbnN0cnVtZW50OiBudW1iZXIgPSAxMDtcbiAgaW5zdHJ1bWVudHM6IGFueTtcbiAgc2VsZWN0ZWRJbnN0cnVtZW50SW5kZXg6IG51bWJlcjtcbiAgc2VsZWN0ZWRTd2l0Y2hJbmRleDogYm9vbGVhbjtcbiAgbm90aWZ5QWxsOiBib29sZWFuO1xuICBwcmFjdGljZXM6IFByYWN0aWNlTW9kZWw7XG4gIHB1YmxpYyBzdHVkZW50OiBPYnNlcnZhYmxlPGFueT47XG4gIHB1YmxpYyBuZXdzdHVkZW50OiBTdHVkZW50TW9kZWw7XG4gIGlkOiBhbnk7XG4gIHByaXZhdGUgc3ViOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIEBJbmplY3QoRlJBTUUpIHByaXZhdGUgZnJhbWU6IGFueSxcbiAgICBASW5qZWN0KE5BVklHQVRJT05fRVhURU5TSU9OUykgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBhbnksXG4gICAgQEluamVjdChMSVNUUElDS0VSKSBwcml2YXRlIGxpc3RQaWNrZXI6IGFueSxcbiAgICBASW5qZWN0KFNXSVRDSCkgcHJpdmF0ZSBTd2l0Y2g6IGFueSxcbiAgICBASW5qZWN0KEZBTkNZQUxFUlQpIHByaXZhdGUgZmFuY3lhbGVydDogYW55XG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuaWQgPSBwYXJhbXNbJ2lkJ107XG4gICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRNeVN0dWRlbnQodGhpcy5pZCkuc3Vic2NyaWJlKChzdHVkZW50KSA9PiB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBzdHVkZW50KSB7XG4gICAgICAgICAgICAvL3Byb3BzXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJJZFwiKSB7XG4gICAgICAgICAgICAgIHRoaXMuaWQgPSBzdHVkZW50W3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3AgPT09IFwiTmFtZVwiKSB7XG4gICAgICAgICAgICAgIHRoaXMubmFtZSA9IHN0dWRlbnRbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJQcmFjdGljZXNSZXF1aXJlZFwiKSB7XG4gICAgICAgICAgICAgIHRoaXMucHJhY3RpY2VzcmVxdWlyZWQgPSBzdHVkZW50W3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3AgPT09IFwiUHJhY3RpY2VzQ29tcGxldGVkXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcmFjdGljZXNjb21wbGV0ZWQgPSBzdHVkZW50W3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3AgPT09IFwiQWRtaW5QYXNzd29yZFwiKSB7XG4gICAgICAgICAgICAgIHRoaXMuYWRtaW5wYXNzd29yZCA9IHN0dWRlbnRbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJQcmFjdGljZUxlbmd0aFwiKSB7XG4gICAgICAgICAgICAgIHRoaXMucHJhY3RpY2VsZW5ndGggPSBzdHVkZW50W3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3AgPT09IFwiUmV3YXJkXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZXdhcmQgPSBzdHVkZW50W3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3AgPT09IFwiSW5zdHJ1bWVudFwiKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudCA9IHN0dWRlbnRbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJUZWFjaGVyRW1haWxcIikge1xuICAgICAgICAgICAgICB0aGlzLnRlYWNoZXJlbWFpbCA9IHN0dWRlbnRbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJOb3RpZnlBbGxcIikge1xuICAgICAgICAgICAgICB0aGlzLm5vdGlmeUFsbCA9IHN0dWRlbnRbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRzID0gWydhY291c3RpYyBndWl0YXInLCAnYmFuam8nLCAnY2VsbG8nLFxuICAgICAgICAgICAgICAnY2xhcmluZXQnLCAnZWxlY3JpYyBndWl0YXInLCAnZmx1dGUnLCAnZnJlbmNoIGhvcm4nLFxuICAgICAgICAgICAgICAnaGFuZGJlbGxzJywgJ2hhcnAnLCAnbWFuZG9saW4nLCAnbXVzaWMnLCAnb2JvZScsICdvcmdhbicsICdwZXJjdXNzaW9uJywgJ3BpYW5vJywgJ3NheCcsXG4gICAgICAgICAgICAgICd0cm9tYm9uZScsICd0cnVtcGV0JywgJ3Zpb2xpbicsICd2b2ljZScsICd4eWxvcGhvbmUnXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy50ZXN0Rm9yUGFzc3dvcmQoKTtcbiAgfVxuXG4gIGdvSG9tZSgpIHtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdGVkSW5kZXhDaGFuZ2VkKHBpY2tlcjogYW55KSB7XG4gICAgdGhpcy5zZWxlY3RlZEluc3RydW1lbnRJbmRleCA9IHBpY2tlci5zZWxlY3RlZEluZGV4O1xuICB9XG5cbiAgcHVibGljIHNlbGVjdGVkU3dpdGNoQ2hhbmdlZChyZXN1bHQpIHtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgdGhpcy5zZWxlY3RlZFN3aXRjaEluZGV4ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZFN3aXRjaEluZGV4ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cblxuXG4gIHRlc3RGb3JQYXNzd29yZCgpIHtcbiAgICBpZiAodGhpcy5hZG1pbnBhc3N3b3JkKSB7XG4gICAgICAvL3RvZG8gdGhpcyBzaG91bGQgY3ljbGUgc28gdGhleSBkb24ndCBnZXQgaW4gYWNjaWRlbnRhbGx5XG4gICAgICB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydC5zaG93VGV4dEZpZWxkKCdQYXNzd29yZCcsICcnLCBuZXcgdGhpcy5mYW5jeWFsZXJ0LlROU0ZhbmN5QWxlcnRCdXR0b24oe1xuICAgICAgICBsYWJlbDogJ1N1Ym1pdCcsIGFjdGlvbjogKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgVXNlciBlbnRlcmVkICR7dmFsdWV9YCk7XG4gICAgICAgICAgaWYgKHZhbHVlLnRyaW0oKSAhPSBcIlwiICYmIHZhbHVlLnRyaW0oKSA9PSB0aGlzLmFkbWlucGFzc3dvcmQpIHtcbiAgICAgICAgICAgIC8vY2xvc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvL2Vycm9yXG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvcigpO1xuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSwgJ2FsZXJ0LnBuZycsICcjRDQ0OTM3JywgJ0VudGVyIHlvdXIgcGFzc3dvcmQnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gIH1cblxuICBzaG93RXJyb3IoKSB7XG4gICAgbGV0IGJ1dHRvbnMgPSBbXG4gICAgICBuZXcgdGhpcy5mYW5jeWFsZXJ0LlROU0ZhbmN5QWxlcnRCdXR0b24oe1xuICAgICAgICBsYWJlbDogJ09rIScsIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJyddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgXTtcbiAgICB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydC5zaG93Q3VzdG9tQnV0dG9ucyhidXR0b25zLCAnYWxlcnQucG5nJywgJyNGMTMwMzAnLCAnU29ycnkhJywgYFNvcnJ5LCB5b3UgbmVlZCB0byBlbnRlciBhIHBhc3N3b3JkIHRvIGFjY2VzcyB0aGlzIGFyZWEhYCwgJycpO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIHRoaXMubmV3c3R1ZGVudCA9IG5ldyBTdHVkZW50TW9kZWwoXG4gICAgICB0aGlzLmlkLFxuICAgICAgdGhpcy5hZG1pbnBhc3N3b3JkLFxuICAgICAgdGhpcy5kYXRlLFxuICAgICAgdGhpcy5zZWxlY3RlZEluc3RydW1lbnRJbmRleCxcbiAgICAgIHRoaXMubmFtZSxcbiAgICAgIE1hdGgucm91bmQodGhpcy5wcmFjdGljZWxlbmd0aCksXG4gICAgICB0aGlzLnByYWN0aWNlc2NvbXBsZXRlZCxcbiAgICAgIE1hdGgucm91bmQodGhpcy5wcmFjdGljZXNyZXF1aXJlZCksXG4gICAgICB0aGlzLnJld2FyZCxcbiAgICAgIHRoaXMudGVhY2hlcmVtYWlsLFxuICAgICAgdGhpcy5zZWxlY3RlZFN3aXRjaEluZGV4KVxuXG4gICAgLy92YWxpZGF0aW9uXG5cbiAgaWYodGhpcy5uZXdzdHVkZW50Lk5hbWUgPT0gXCJcIiB8fCBcbiAgICB0aGlzLm5ld3N0dWRlbnQuUHJhY3RpY2VzUmVxdWlyZWQgPCAxIHx8IFxuICAgIHRoaXMubmV3c3R1ZGVudC5QcmFjdGljZUxlbmd0aCA8IDEgfHwgXG4gICAgdGhpcy5uZXdzdHVkZW50LlJld2FyZCA9PSBcIlwiKSB7XG4gICAgICAgIHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0LnNob3dFcnJvcignT29wcyEnLCAnUGxlYXNlIGVudGVyIHZhbHVlcyBpbiB0aGUgcmVxdWlyZWQgZmllbGRzJywgJ09LIScpO1xuICAgIH1cbiAgXG4gIGVsc2UgaWYodGhpcy5uZXdzdHVkZW50Lk5vdGlmeUFsbCA9PSB0cnVlICYmIHRoaXMubmV3c3R1ZGVudC5UZWFjaGVyRW1haWwgPT0gXCJcIil7XG4gICAgICAgIHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0LnNob3dFcnJvcignT29wcyEnLCAnSWYgeW91IHdhbnQgeW91ciB0ZWFjaGVyIHRvIHJlY2VpdmUgZW1haWxzLCBwbGVhc2UgZW50ZXIgdGhlaXIgZW1haWwgYWRkcmVzcycsICdPSyEnKTtcbiAgfVxuXG4gICBlbHNlIHtcbiAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2Uuc2F2ZVNldHRpbmdzKHRoaXMubmV3c3R1ZGVudClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5mYW5jeWFsZXJ0LlROU0ZhbmN5QWxlcnQuc2hvd1N1Y2Nlc3MoJ1NhdmVkIScsICdTdHVkZW50IGluZm8gc2F2ZWQhJywgJ09LIScpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgIH1cbiAgfVxuXG59Il19
