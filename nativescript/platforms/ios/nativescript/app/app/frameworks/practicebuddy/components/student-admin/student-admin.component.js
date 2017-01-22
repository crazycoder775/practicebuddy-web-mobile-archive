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
var tokens_1 = require("../../../core/tokens");
var router_1 = require("@angular/router");
var firebase_service_1 = require("../../../practicebuddy/services/firebase.service");
var student_model_1 = require("../../../practicebuddy/models/student.model");
require("rxjs/add/operator/take");
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
        this._router.navigate([""]);
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
    return StudentAdminComponent;
}());
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
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        firebase_service_1.FirebaseService,
        router_1.Router,
        core_1.NgZone, Object, Object, Object, Object, Object])
], StudentAdminComponent);
exports.StudentAdminComponent = StudentAdminComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudC1hZG1pbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdHVkZW50LWFkbWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTZGO0FBQzdGLDBFQUF3RTtBQUN4RSwrQ0FBb0c7QUFHcEcsMENBQXlEO0FBQ3pELHFGQUFtRjtBQUNuRiw2RUFBMkU7QUFFM0Usa0NBQWdDO0FBUWhDLElBQWEscUJBQXFCO0lBcUJoQywrQkFDVSxLQUFxQixFQUNyQixlQUFnQyxFQUNoQyxPQUFlLEVBQ2YsTUFBYyxFQUNDLEtBQVUsRUFDTSxnQkFBcUIsRUFDaEMsVUFBZSxFQUNuQixNQUFXLEVBQ1AsVUFBZTtRQVJuQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDQyxVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQ00scUJBQWdCLEdBQWhCLGdCQUFnQixDQUFLO1FBQ2hDLGVBQVUsR0FBVixVQUFVLENBQUs7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBSztRQUNQLGVBQVUsR0FBVixVQUFVLENBQUs7UUFwQjdDLGVBQVUsR0FBVyxFQUFFLENBQUM7SUFxQnBCLENBQUM7SUFFTCx3Q0FBUSxHQUFSO1FBQUEsaUJBOENDO1FBNUNDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBVztZQUNqRCxLQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixLQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsT0FBTztnQkFDM0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFH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LG1CQUFVLENBQUMsQ0FBQTtxQ0FSSix1QkFBYztRQUNKLGtDQUFlO1FBQ3ZCLGVBQU07UUFDUCxhQUFNO0dBekJiLHFCQUFxQixDQTZLakM7QUE3S1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBOZ1pvbmUsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kZWNvcmF0b3JzL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IEZSQU1FLCBMSVNUUElDS0VSLCBGQU5DWUFMRVJULCBOQVZJR0FUSU9OX0VYVEVOU0lPTlMsIFNXSVRDSCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvdG9rZW5zJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29yZS91dGlscy9jb25maWcnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9wcmFjdGljZWJ1ZGR5L3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3R1ZGVudE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vcHJhY3RpY2VidWRkeS9tb2RlbHMvc3R1ZGVudC5tb2RlbCc7XG5pbXBvcnQgeyBQcmFjdGljZU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vcHJhY3RpY2VidWRkeS9tb2RlbHMvcHJhY3RpY2UubW9kZWwnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90YWtlJztcblxuQEJhc2VDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLXN0dWRlbnQtYWRtaW4nLFxuICB0ZW1wbGF0ZVVybDogJ3N0dWRlbnQtYWRtaW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3R1ZGVudC1hZG1pbi5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdHVkZW50QWRtaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIG5hbWU6IHN0cmluZztcbiAgcHJhY3RpY2VzcmVxdWlyZWQ6IG51bWJlcjtcbiAgcHJhY3RpY2VsZW5ndGg6IG51bWJlcjtcbiAgcHJhY3RpY2VzY29tcGxldGVkOiBudW1iZXI7XG4gIHJld2FyZDogc3RyaW5nO1xuICBhZG1pbnBhc3N3b3JkOiBzdHJpbmc7XG4gIHRlYWNoZXJlbWFpbDogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIGluc3RydW1lbnQ6IG51bWJlciA9IDEwO1xuICBpbnN0cnVtZW50czogYW55O1xuICBzZWxlY3RlZEluc3RydW1lbnRJbmRleDogbnVtYmVyO1xuICBzZWxlY3RlZFN3aXRjaEluZGV4OiBib29sZWFuO1xuICBub3RpZnlBbGw6IGJvb2xlYW47XG4gIHByYWN0aWNlczogUHJhY3RpY2VNb2RlbDtcbiAgcHVibGljIHN0dWRlbnQ6IE9ic2VydmFibGU8YW55PjtcbiAgcHVibGljIG5ld3N0dWRlbnQ6IFN0dWRlbnRNb2RlbDtcbiAgaWQ6IGFueTtcbiAgcHJpdmF0ZSBzdWI6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgQEluamVjdChGUkFNRSkgcHJpdmF0ZSBmcmFtZTogYW55LFxuICAgIEBJbmplY3QoTkFWSUdBVElPTl9FWFRFTlNJT05TKSBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IGFueSxcbiAgICBASW5qZWN0KExJU1RQSUNLRVIpIHByaXZhdGUgbGlzdFBpY2tlcjogYW55LFxuICAgIEBJbmplY3QoU1dJVENIKSBwcml2YXRlIFN3aXRjaDogYW55LFxuICAgIEBJbmplY3QoRkFOQ1lBTEVSVCkgcHJpdmF0ZSBmYW5jeWFsZXJ0OiBhbnlcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5pZCA9IHBhcmFtc1snaWQnXTtcbiAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15U3R1ZGVudCh0aGlzLmlkKS5zdWJzY3JpYmUoKHN0dWRlbnQpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIHN0dWRlbnQpIHtcbiAgICAgICAgICAgIC8vcHJvcHNcbiAgICAgICAgICAgIGlmIChwcm9wID09PSBcIklkXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5pZCA9IHN0dWRlbnRbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJOYW1lXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5uYW1lID0gc3R1ZGVudFtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wID09PSBcIlByYWN0aWNlc1JlcXVpcmVkXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcmFjdGljZXNyZXF1aXJlZCA9IHN0dWRlbnRbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJQcmFjdGljZXNDb21wbGV0ZWRcIikge1xuICAgICAgICAgICAgICB0aGlzLnByYWN0aWNlc2NvbXBsZXRlZCA9IHN0dWRlbnRbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJBZG1pblBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5hZG1pbnBhc3N3b3JkID0gc3R1ZGVudFtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wID09PSBcIlByYWN0aWNlTGVuZ3RoXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcmFjdGljZWxlbmd0aCA9IHN0dWRlbnRbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJSZXdhcmRcIikge1xuICAgICAgICAgICAgICB0aGlzLnJld2FyZCA9IHN0dWRlbnRbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJJbnN0cnVtZW50XCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50ID0gc3R1ZGVudFtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wID09PSBcIlRlYWNoZXJFbWFpbFwiKSB7XG4gICAgICAgICAgICAgIHRoaXMudGVhY2hlcmVtYWlsID0gc3R1ZGVudFtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wID09PSBcIk5vdGlmeUFsbFwiKSB7XG4gICAgICAgICAgICAgIHRoaXMubm90aWZ5QWxsID0gc3R1ZGVudFtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudHMgPSBbJ2Fjb3VzdGljIGd1aXRhcicsICdiYW5qbycsICdjZWxsbycsXG4gICAgICAgICAgICAgICdjbGFyaW5ldCcsICdlbGVjcmljIGd1aXRhcicsICdmbHV0ZScsICdmcmVuY2ggaG9ybicsXG4gICAgICAgICAgICAgICdoYW5kYmVsbHMnLCAnaGFycCcsICdtYW5kb2xpbicsICdtdXNpYycsICdvYm9lJywgJ29yZ2FuJywgJ3BlcmN1c3Npb24nLCAncGlhbm8nLCAnc2F4JyxcbiAgICAgICAgICAgICAgJ3Ryb21ib25lJywgJ3RydW1wZXQnLCAndmlvbGluJywgJ3ZvaWNlJywgJ3h5bG9waG9uZSddO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnRlc3RGb3JQYXNzd29yZCgpO1xuICB9XG5cbiAgZ29Ib21lKCkge1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdGVkSW5kZXhDaGFuZ2VkKHBpY2tlcjogYW55KSB7XG4gICAgdGhpcy5zZWxlY3RlZEluc3RydW1lbnRJbmRleCA9IHBpY2tlci5zZWxlY3RlZEluZGV4O1xuICB9XG5cbiAgcHVibGljIHNlbGVjdGVkU3dpdGNoQ2hhbmdlZChyZXN1bHQpIHtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgdGhpcy5zZWxlY3RlZFN3aXRjaEluZGV4ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZFN3aXRjaEluZGV4ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cblxuXG4gIHRlc3RGb3JQYXNzd29yZCgpIHtcbiAgICBpZiAodGhpcy5hZG1pbnBhc3N3b3JkKSB7XG4gICAgICAvL3RvZG8gdGhpcyBzaG91bGQgY3ljbGUgc28gdGhleSBkb24ndCBnZXQgaW4gYWNjaWRlbnRhbGx5XG4gICAgICB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydC5zaG93VGV4dEZpZWxkKCdQYXNzd29yZCcsICcnLCBuZXcgdGhpcy5mYW5jeWFsZXJ0LlROU0ZhbmN5QWxlcnRCdXR0b24oe1xuICAgICAgICBsYWJlbDogJ1N1Ym1pdCcsIGFjdGlvbjogKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgVXNlciBlbnRlcmVkICR7dmFsdWV9YCk7XG4gICAgICAgICAgaWYgKHZhbHVlLnRyaW0oKSAhPSBcIlwiICYmIHZhbHVlLnRyaW0oKSA9PSB0aGlzLmFkbWlucGFzc3dvcmQpIHtcbiAgICAgICAgICAgIC8vY2xvc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvL2Vycm9yXG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvcigpO1xuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSwgJ2FsZXJ0LnBuZycsICcjRDQ0OTM3JywgJ0VudGVyIHlvdXIgcGFzc3dvcmQnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gIH1cblxuICBzaG93RXJyb3IoKSB7XG4gICAgbGV0IGJ1dHRvbnMgPSBbXG4gICAgICBuZXcgdGhpcy5mYW5jeWFsZXJ0LlROU0ZhbmN5QWxlcnRCdXR0b24oe1xuICAgICAgICBsYWJlbDogJ09rIScsIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJyddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgXTtcbiAgICB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydC5zaG93Q3VzdG9tQnV0dG9ucyhidXR0b25zLCAnYWxlcnQucG5nJywgJyNGMTMwMzAnLCAnU29ycnkhJywgYFNvcnJ5LCB5b3UgbmVlZCB0byBlbnRlciBhIHBhc3N3b3JkIHRvIGFjY2VzcyB0aGlzIGFyZWEhYCwgJycpO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIHRoaXMubmV3c3R1ZGVudCA9IG5ldyBTdHVkZW50TW9kZWwoXG4gICAgICB0aGlzLmlkLFxuICAgICAgdGhpcy5hZG1pbnBhc3N3b3JkLFxuICAgICAgdGhpcy5kYXRlLFxuICAgICAgdGhpcy5zZWxlY3RlZEluc3RydW1lbnRJbmRleCxcbiAgICAgIHRoaXMubmFtZSxcbiAgICAgIE1hdGgucm91bmQodGhpcy5wcmFjdGljZWxlbmd0aCksXG4gICAgICB0aGlzLnByYWN0aWNlc2NvbXBsZXRlZCxcbiAgICAgIE1hdGgucm91bmQodGhpcy5wcmFjdGljZXNyZXF1aXJlZCksXG4gICAgICB0aGlzLnJld2FyZCxcbiAgICAgIHRoaXMudGVhY2hlcmVtYWlsLFxuICAgICAgdGhpcy5zZWxlY3RlZFN3aXRjaEluZGV4KVxuXG4gICAgLy92YWxpZGF0aW9uXG5cbiAgaWYodGhpcy5uZXdzdHVkZW50Lk5hbWUgPT0gXCJcIiB8fCBcbiAgICB0aGlzLm5ld3N0dWRlbnQuUHJhY3RpY2VzUmVxdWlyZWQgPCAxIHx8IFxuICAgIHRoaXMubmV3c3R1ZGVudC5QcmFjdGljZUxlbmd0aCA8IDEgfHwgXG4gICAgdGhpcy5uZXdzdHVkZW50LlJld2FyZCA9PSBcIlwiKSB7XG4gICAgICAgIHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0LnNob3dFcnJvcignT29wcyEnLCAnUGxlYXNlIGVudGVyIHZhbHVlcyBpbiB0aGUgcmVxdWlyZWQgZmllbGRzJywgJ09LIScpO1xuICAgIH1cbiAgXG4gIGVsc2UgaWYodGhpcy5uZXdzdHVkZW50Lk5vdGlmeUFsbCA9PSB0cnVlICYmIHRoaXMubmV3c3R1ZGVudC5UZWFjaGVyRW1haWwgPT0gXCJcIil7XG4gICAgICAgIHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0LnNob3dFcnJvcignT29wcyEnLCAnSWYgeW91IHdhbnQgeW91ciB0ZWFjaGVyIHRvIHJlY2VpdmUgZW1haWxzLCBwbGVhc2UgZW50ZXIgdGhlaXIgZW1haWwgYWRkcmVzcycsICdPSyEnKTtcbiAgfVxuXG4gICBlbHNlIHtcbiAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2Uuc2F2ZVNldHRpbmdzKHRoaXMubmV3c3R1ZGVudClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5mYW5jeWFsZXJ0LlROU0ZhbmN5QWxlcnQuc2hvd1N1Y2Nlc3MoJ1NhdmVkIScsICdTdHVkZW50IGluZm8gc2F2ZWQhJywgJ09LIScpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgIH1cbiAgfVxuXG59Il19