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
var config_1 = require("../../../core/utils/config");
var router_1 = require("@angular/router");
var firebase_service_1 = require("../../../practicebuddy/services/firebase.service");
var HomeComponent = (function () {
    function HomeComponent(firebaseService, logger, _router, frame, routerExtensions, dialogs, fancyalert) {
        this.firebaseService = firebaseService;
        this.logger = logger;
        this._router = _router;
        this.frame = frame;
        this.routerExtensions = routerExtensions;
        this.dialogs = dialogs;
        this.fancyalert = fancyalert;
        this.isOpen = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.fancyalert.TNSFancyAlert.shouldDismissOnTapOutside = true;
        this.students$ = this.firebaseService.getMyStudents();
        if (config_1.Config.IS_MOBILE_NATIVE()) {
            if (this.frame.topmost().ios) {
                this.frame.topmost().ios.controller.visibleViewController.navigationItem.setHidesBackButtonAnimated(true, false);
            }
        }
    };
    HomeComponent.prototype.onTap = function () {
        this.isOpen = !this.isOpen;
    };
    HomeComponent.prototype.goToStudentHome = function (id) {
        this.isOpen = false;
        this._router.navigate(["/student-home", id]);
    };
    HomeComponent.prototype.goToTeachersHome = function () {
        this.isOpen = false;
        this._router.navigate(["/teacher-home"]);
    };
    HomeComponent.prototype.addStudent = function () {
        var _this = this;
        this.isOpen = false;
        var options = {
            title: 'Add a student',
            okButtonText: 'Save',
            cancelButtonText: 'Cancel',
            inputType: this.dialogs.inputType.text
        };
        this.dialogs.prompt(options).then(function (result) {
            if (result.text.trim() != "") {
                _this.firebaseService.add(result.text)
                    .then(function () {
                    _this.fancyalert.TNSFancyAlert.showSuccess('Success!', 'Student successfully added', 'OK!');
                }, function (err) {
                    alert(err);
                });
            }
        });
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this.isOpen = false;
        var buttons = [
            new this.fancyalert.TNSFancyAlertButton({ label: 'No', action: function () { console.log('Cancel'); } }),
            new this.fancyalert.TNSFancyAlertButton({
                label: 'Yes', action: function () {
                    _this.firebaseService.logout();
                    _this.routerExtensions.navigate(["/login"], { clearHistory: true });
                }
            })
        ];
        this.fancyalert.TNSFancyAlert.showCustomButtons(buttons, 'alert.png', '#F13030', 'Logout?', "Are you sure you want to logout?", 'Ok');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    base_component_1.BaseComponent({
        moduleId: module.id,
        selector: 'sd-home',
        templateUrl: 'home.component.html',
        styleUrls: ['home.css'],
        animations: [
            core_1.trigger('state', [
                core_1.state('active', core_1.style({ transform: 'rotate(45)' })),
                core_1.state('inactive', core_1.style({ transform: 'rotate(0)' })),
                core_1.transition('inactivebtn => activebtna', [
                    core_1.animate('280ms ease-in', core_1.keyframes([
                        core_1.style({ opacity: 1, transform: 'translateY(0)' }),
                        core_1.style({ opacity: 1, transform: 'translateX(70)' })
                    ]))
                ]),
                core_1.transition('inactivebtn => activebtnb', [
                    core_1.animate('280ms ease-in', core_1.keyframes([
                        core_1.style({ opacity: 1, transform: 'translateX(0)' }),
                        core_1.style({ opacity: 1, transform: 'translateY(-80)' })
                    ]))
                ]),
                core_1.transition('inactivebtn => activebtnc', [
                    core_1.animate('280ms ease-in', core_1.keyframes([
                        core_1.style({ opacity: 1, transform: 'translateY(0)' }),
                        core_1.style({ opacity: 1, transform: 'translateX(-70)' }),
                    ]))
                ]),
                core_1.transition('activebtna => inactivebtn', [
                    core_1.animate('280ms ease-out', core_1.keyframes([
                        core_1.style({ opacity: 0, transform: 'translateX(0)' }),
                        core_1.style({ opacity: 0, transform: 'translateY(0)' })
                    ]))
                ]),
                core_1.transition('activebtnb => inactivebtn', [
                    core_1.animate('280ms ease-out', core_1.keyframes([
                        core_1.style({ opacity: 0, transform: 'translateX(0)' }),
                        core_1.style({ opacity: 0, transform: 'translateY(0)' })
                    ]))
                ]),
                core_1.transition('activebtnc => inactivebtn', [
                    core_1.animate('280ms ease-out', core_1.keyframes([
                        core_1.style({ opacity: 0, transform: 'translateX(0)' }),
                        core_1.style({ opacity: 0, transform: 'translateY(0)' })
                    ]))
                ])
            ])
        ]
    }),
    __param(3, core_1.Inject(tokens_1.FRAME)),
    __param(4, core_1.Inject(tokens_1.NAVIGATION_EXTENSIONS)),
    __param(5, core_1.Inject(tokens_1.DIALOGS)),
    __param(6, core_1.Inject(tokens_1.FANCYALERT)),
    __metadata("design:paramtypes", [firebase_service_1.FirebaseService,
        log_service_1.LogService,
        router_1.Router, Object, Object, Object, Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTZIO0FBQzdILDBFQUF3RTtBQUN4RSxrRUFBZ0U7QUFDaEUsK0NBQXlGO0FBRXpGLHFEQUFvRDtBQUNwRCwwQ0FBeUM7QUFDekMscUZBQW1GO0FBb0RuRixJQUFhLGFBQWE7SUFHdEIsdUJBQW1CLGVBQWdDLEVBQ3ZDLE1BQWtCLEVBQ2xCLE9BQWUsRUFDQSxLQUFVLEVBQ00sZ0JBQXFCLEVBQ25DLE9BQVksRUFDVCxVQUFlO1FBTjVCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUN2QyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDQSxVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQ00scUJBQWdCLEdBQWhCLGdCQUFnQixDQUFLO1FBQ25DLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFDVCxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBRS9DLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFEWCxDQUFDO0lBR0wsZ0NBQVEsR0FBUjtRQUVJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztRQUUvRCxJQUFJLENBQUMsU0FBUyxHQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0QsRUFBRSxDQUFDLENBQUMsZUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQywwQkFBMEIsQ0FB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Q0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgdHJpZ2dlciwgc3R5bGUsIGFuaW1hdGUsIHN0YXRlLCB0cmFuc2l0aW9uLCBrZXlmcmFtZXMsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kZWNvcmF0b3JzL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2xvZy5zZXJ2aWNlJztcbmltcG9ydCB7IEZSQU1FLCBESUFMT0dTLCBGQU5DWUFMRVJULCBOQVZJR0FUSU9OX0VYVEVOU0lPTlMgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3Rva2Vucyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvdXRpbHMvY29uZmlnJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9wcmFjdGljZWJ1ZGR5L3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3R1ZGVudE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vcHJhY3RpY2VidWRkeS9tb2RlbHMvc3R1ZGVudC5tb2RlbCc7XG5cbkBCYXNlQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnc2QtaG9tZScsXG4gICAgdGVtcGxhdGVVcmw6ICdob21lLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnaG9tZS5jc3MnXSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ3N0YXRlJywgW1xuICAgICAgICAgICAgc3RhdGUoJ2FjdGl2ZScsIHN0eWxlKHsgdHJhbnNmb3JtOiAncm90YXRlKDQ1KScgfSkpLFxuICAgICAgICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdyb3RhdGUoMCknIH0pKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlYnRuID0+IGFjdGl2ZWJ0bmEnLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMjgwbXMgZWFzZS1pbicsIGtleWZyYW1lcyhbXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSksXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCg3MCknIH0pXG4gICAgICAgICAgICAgICAgXSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlYnRuID0+IGFjdGl2ZWJ0bmInLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMjgwbXMgZWFzZS1pbicsIGtleWZyYW1lcyhbXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSksXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtODApJyB9KVxuICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZWJ0biA9PiBhY3RpdmVidG5jJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzI4MG1zIGVhc2UtaW4nLCBrZXlmcmFtZXMoW1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH0pLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTcwKScgfSksXG5cbiAgICAgICAgICAgICAgICBdKSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignYWN0aXZlYnRuYSA9PiBpbmFjdGl2ZWJ0bicsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyODBtcyBlYXNlLW91dCcsIGtleWZyYW1lcyhbXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSksXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSlcbiAgICAgICAgICAgICAgICBdKSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignYWN0aXZlYnRuYiA9PiBpbmFjdGl2ZWJ0bicsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyODBtcyBlYXNlLW91dCcsIGtleWZyYW1lcyhbXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSksXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSlcbiAgICAgICAgICAgICAgICBdKSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignYWN0aXZlYnRuYyA9PiBpbmFjdGl2ZWJ0bicsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyODBtcyBlYXNlLW91dCcsIGtleWZyYW1lcyhbXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSksXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSlcbiAgICAgICAgICAgICAgICBdKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBzdHVkZW50cyQ6IE9ic2VydmFibGU8YW55PjtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgQEluamVjdChGUkFNRSkgcHJpdmF0ZSBmcmFtZTogYW55LFxuICAgICAgICBASW5qZWN0KE5BVklHQVRJT05fRVhURU5TSU9OUykgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBhbnksXG4gICAgICAgIEBJbmplY3QoRElBTE9HUykgcHJpdmF0ZSBkaWFsb2dzOiBhbnksXG4gICAgICAgIEBJbmplY3QoRkFOQ1lBTEVSVCkgcHJpdmF0ZSBmYW5jeWFsZXJ0OiBhbnlcbiAgICApIHsgfVxuICAgIGlzT3BlbiA9IGZhbHNlO1xuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgdGhpcy5mYW5jeWFsZXJ0LlROU0ZhbmN5QWxlcnQuc2hvdWxkRGlzbWlzc09uVGFwT3V0c2lkZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5zdHVkZW50cyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15U3R1ZGVudHMoKTtcbiAgICAgICAgaWYgKENvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lLnRvcG1vc3QoKS5pb3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lLnRvcG1vc3QoKS5pb3MuY29udHJvbGxlci52aXNpYmxlVmlld0NvbnRyb2xsZXIubmF2aWdhdGlvbkl0ZW0uc2V0SGlkZXNCYWNrQnV0dG9uQW5pbWF0ZWQodHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25UYXAoKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuICAgIH1cblxuICAgIGdvVG9TdHVkZW50SG9tZShpZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvc3R1ZGVudC1ob21lXCIsIGlkXSk7XG4gICAgfVxuXG4gICAgZ29Ub1RlYWNoZXJzSG9tZSgpIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIi90ZWFjaGVyLWhvbWVcIl0pO1xuICAgIH1cblxuICAgIGFkZFN0dWRlbnQoKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdBZGQgYSBzdHVkZW50JyxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ1NhdmUnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gICAgICAgICAgICBpbnB1dFR5cGU6IHRoaXMuZGlhbG9ncy5pbnB1dFR5cGUudGV4dFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRpYWxvZ3MucHJvbXB0KG9wdGlvbnMpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnRleHQudHJpbSgpICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5hZGQocmVzdWx0LnRleHQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0LnNob3dTdWNjZXNzKCdTdWNjZXNzIScsICdTdHVkZW50IHN1Y2Nlc3NmdWxseSBhZGRlZCcsICdPSyEnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvKnRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0LnNob3dUZXh0RmllbGQoJ0FkZCcsICcnLCBuZXcgdGhpcy5mYW5jeWFsZXJ0LlROU0ZhbmN5QWxlcnRCdXR0b24oeyBsYWJlbDogJ1NhdmUnLCBhY3Rpb246ICh2YWx1ZTogYW55KSA9PiB7IFxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBVc2VyIGVudGVyZWQgJHt2YWx1ZX1gKTsgXG4gICAgICAgICAgICAgaWYgKHZhbHVlLnRyaW0oKSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuYWRkKHZhbHVlKVxuICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydC5zaG93U3VjY2VzcygnU3VjY2VzcyEnLCAnU3R1ZGVudCBzdWNjZXNzZnVsbHkgYWRkZWQnLCAnT0shJyk7ICAgIFxuICAgICAgICAgICAgICAgfSwgKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9IH0pLCAncGx1cy5wbmcnLCAnI0YyQjIwOCcsICdBZGQgYSBzdHVkZW50JywgdW5kZWZpbmVkLCB1bmRlZmluZWQpOyovXG5cbiAgICB9XG5cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgLy9jaGVjayB3aGV0aGVyIGZvciByZWFsLCB0aGVuIGxvZ291dFxuICAgICAgICAvL3RvZG8ga2VlcCBkaWFsb2cgZm9yIGFuZHJvaWRcbiAgICAgICAgLyp2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICB0aXRsZTogJ0xvZ291dD8nLFxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ1llcycsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCdcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kaWFsb2dzLmNvbmZpcm0ob3B0aW9ucykudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICAvL25hdmlnYXRlXG4gICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIi9cIl0pO1xuICAgICAgICB9KTsqL1xuICAgICAgICBsZXQgYnV0dG9ucyA9IFtcbiAgICAgICAgICAgIG5ldyB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydEJ1dHRvbih7IGxhYmVsOiAnTm8nLCBhY3Rpb246ICgpID0+IHsgY29uc29sZS5sb2coJ0NhbmNlbCcpOyB9IH0pLFxuICAgICAgICAgICAgbmV3IHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0QnV0dG9uKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1llcycsIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5mYW5jeWFsZXJ0LlROU0ZhbmN5QWxlcnQuc2hvd0N1c3RvbUJ1dHRvbnMoYnV0dG9ucywgJ2FsZXJ0LnBuZycsICcjRjEzMDMwJywgJ0xvZ291dD8nLCBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxvZ291dD9gLCAnT2snKTtcblxuXG4gICAgfVxuXG5cblxufSJdfQ==