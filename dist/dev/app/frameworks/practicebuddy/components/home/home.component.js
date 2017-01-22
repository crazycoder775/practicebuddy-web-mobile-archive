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
var config_1 = require('../../../core/utils/config');
var router_1 = require('@angular/router');
var firebase_service_1 = require('../../../practicebuddy/services/firebase.service');
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
    HomeComponent.prototype.goToHistory = function (id) {
        this.isOpen = false;
        this._router.navigate(["/student-history", id]);
    };
    HomeComponent.prototype.editStudent = function (id) {
        this.isOpen = false;
        this._router.navigate(["/student-admin", id]);
    };
    HomeComponent.prototype.goToTeachersHome = function () {
        this.isOpen = false;
        this._router.navigate(["/teacher-home"]);
    };
    HomeComponent.prototype.addStudent = function () {
        var _this = this;
        this.isOpen = false;
        this.fancyalert.TNSFancyAlert.showTextField('Add', '', new this.fancyalert.TNSFancyAlertButton({ label: 'Save', action: function (value) {
                console.log("User entered " + value);
                if (value.trim() != "") {
                    _this.firebaseService.add(value)
                        .then(function () {
                        _this.fancyalert.TNSFancyAlert.showSuccess('Success!', 'Student successfully added', 'OK!');
                    }, function (err) {
                        alert(err);
                    });
                }
            } }), 'plus.png', '#F2B208', 'Add a student', undefined, undefined);
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this.isOpen = false;
        var buttons = [
            new this.fancyalert.TNSFancyAlertButton({ label: 'No', action: function () { console.log('Cancel'); } }),
            new this.fancyalert.TNSFancyAlertButton({ label: 'Yes', action: function () {
                    _this.firebaseService.logout();
                    _this.routerExtensions.navigate(["/login"], { clearHistory: true });
                } })
        ];
        this.fancyalert.TNSFancyAlert.showCustomButtons(buttons, 'alert.png', '#F13030', 'Logout?', "Are you sure you want to logout?", 'Ok');
    };
    HomeComponent.prototype.deleteStudent = function (item) {
        var _this = this;
        var buttons = [
            new this.fancyalert.TNSFancyAlertButton({ label: 'No', action: function () { console.log('Cancel'); } }),
            new this.fancyalert.TNSFancyAlertButton({ label: 'Yes', action: function () {
                    _this.firebaseService.deleteStudent(item)
                        .then(function () {
                        _this.fancyalert.TNSFancyAlert.showSuccess('Success!', 'Student successfully deleted', 'OK!');
                    }, function (err) {
                        alert(err);
                    });
                } })
        ];
        this.fancyalert.TNSFancyAlert.showCustomButtons(buttons, 'alert.png', '#F28600', 'Delete?', "Are you sure you want to delete this student?.", 'Ok');
    };
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
        __metadata('design:paramtypes', [firebase_service_1.FirebaseService, log_service_1.LogService, router_1.Router, Object, Object, Object, Object])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL3ByYWN0aWNlYnVkZHkvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkcsZUFBZSxDQUFDLENBQUE7QUFDM0gsK0JBQTRCLHlDQUF5QyxDQUFDLENBQUE7QUFDdEUsNEJBQXlCLG9DQUFvQyxDQUFDLENBQUE7QUFDOUQsdUJBQWdFLHNCQUFzQixDQUFDLENBQUE7QUFFdkYsdUJBQXFCLDRCQUE0QixDQUFDLENBQUE7QUFDbEQsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsaUNBQThCLGtEQUFrRCxDQUFDLENBQUE7QUFvRGpGO0lBR0UsdUJBQW1CLGVBQWdDLEVBQy9CLE1BQWtCLEVBQ2xCLE9BQWUsRUFDQSxLQUFVLEVBQ00sZ0JBQXFCLEVBQ25DLE9BQVksRUFDVCxVQUFlO1FBTnBDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDQSxVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQ00scUJBQWdCLEdBQWhCLGdCQUFnQixDQUFLO1FBQ25DLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFDVCxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBRXpELFdBQU0sR0FBRyxLQUFLLENBQUM7SUFEQSxDQUFDO0lBR2YsZ0NBQVEsR0FBUjtRQUVHLElBQUksQ0FBQyxTQUFTLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzRCxFQUFFLENBQUMsQ0FBQyxlQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDLDBCQUEwQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNySCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFSCw2QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVELHVDQUFlLEdBQWYsVUFBZ0IsRUFBUztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksRUFBUztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxFQUFTO1FBRWpCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQUEsaUJBNkJDO1FBNUJFLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBaUJuQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFDLEtBQVU7Z0JBQy9ILE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWdCLEtBQU8sQ0FBQyxDQUFDO2dCQUNyQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDekIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO3lCQUM1QixJQUFJLENBQUM7d0JBQ0osS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSw0QkFBNEIsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDN0YsQ0FBQyxFQUFFLFVBQUMsR0FBUTt3QkFDVixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2IsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFHRCw4QkFBTSxHQUFOO1FBQUEsaUJBdUJDO1FBdEJHLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBWXBCLElBQUksT0FBTyxHQUFHO1lBQ2QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsY0FBUSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDbEcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7b0JBQzVELEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzlCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBRSxDQUFDO2dCQUN4RSxDQUFDLEVBQUUsQ0FBQztTQUNILENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsa0NBQWtDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFHMUksQ0FBQztJQUVELHFDQUFhLEdBQWIsVUFBYyxJQUFpQjtRQUEvQixpQkE4QkM7UUFkRyxJQUFJLE9BQU8sR0FBRztZQUNkLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLGNBQVEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2xHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO29CQUM1RCxLQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7eUJBQ3JDLElBQUksQ0FBQzt3QkFDSCxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLDhCQUE4QixFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNoRyxDQUFDLEVBQUUsVUFBQyxHQUFRO3dCQUNWLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDYixDQUFDLENBQUMsQ0FBQztnQkFDVCxDQUFDLEVBQUUsQ0FBQztTQUNILENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsZ0RBQWdELEVBQUUsSUFBSSxDQUFDLENBQUM7SUFHeEosQ0FBQztJQXhMRDtRQUFDLDhCQUFhLENBQUM7WUFDYixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDdkIsVUFBVSxFQUFFO2dCQUNOLGNBQU8sQ0FBQyxPQUFPLEVBQUU7b0JBQ2IsWUFBSyxDQUFDLFFBQVEsRUFBRSxZQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztvQkFDbkQsWUFBSyxDQUFDLFVBQVUsRUFBRSxZQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztvQkFDcEQsaUJBQVUsQ0FBQywyQkFBMkIsRUFBRTt3QkFDcEMsY0FBTyxDQUFDLGVBQWUsRUFBRSxnQkFBUyxDQUFDOzRCQUMvQixZQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUMsQ0FBQzs0QkFDL0MsWUFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQzt5QkFDbkQsQ0FBQyxDQUFDO3FCQUNOLENBQUM7b0JBQ0YsaUJBQVUsQ0FBQywyQkFBMkIsRUFBRTt3QkFDbkMsY0FBTyxDQUFDLGVBQWUsRUFBRSxnQkFBUyxDQUFDOzRCQUNoQyxZQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUMsQ0FBQzs0QkFDL0MsWUFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsQ0FBQzt5QkFDcEQsQ0FBQyxDQUFDO3FCQUNOLENBQUM7b0JBQ0YsaUJBQVUsQ0FBQywyQkFBMkIsRUFBRTt3QkFDbkMsY0FBTyxDQUFDLGVBQWUsRUFBRSxnQkFBUyxDQUFDOzRCQUNoQyxZQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUMsQ0FBQzs0QkFDL0MsWUFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsQ0FBQzt5QkFFcEQsQ0FBQyxDQUFDO3FCQUNOLENBQUM7b0JBQ0YsaUJBQVUsQ0FBQywyQkFBMkIsRUFBRTt3QkFDckMsY0FBTyxDQUFDLGdCQUFnQixFQUFFLGdCQUFTLENBQUM7NEJBQy9CLFlBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBQyxDQUFDOzRCQUMvQyxZQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUMsQ0FBQzt5QkFDbEQsQ0FBQyxDQUFDO3FCQUNOLENBQUM7b0JBQ0YsaUJBQVUsQ0FBQywyQkFBMkIsRUFBRTt3QkFDbkMsY0FBTyxDQUFDLGdCQUFnQixFQUFFLGdCQUFTLENBQUM7NEJBQ2pDLFlBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBQyxDQUFDOzRCQUMvQyxZQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUMsQ0FBQzt5QkFDbEQsQ0FBQyxDQUFDO3FCQUNOLENBQUM7b0JBQ0YsaUJBQVUsQ0FBQywyQkFBMkIsRUFBRTt3QkFDbkMsY0FBTyxDQUFDLGdCQUFnQixFQUFFLGdCQUFTLENBQUM7NEJBQ2pDLFlBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBQyxDQUFDOzRCQUMvQyxZQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUMsQ0FBQzt5QkFDbEQsQ0FBQyxDQUFDO3FCQUNOLENBQUM7aUJBQ0wsQ0FBQzthQUNMO1NBQ0osQ0FBQzttQkFPYSxhQUFNLENBQUMsY0FBSyxDQUFDO21CQUNiLGFBQU0sQ0FBQyw4QkFBcUIsQ0FBQzttQkFDN0IsYUFBTSxDQUFDLGdCQUFPLENBQUM7bUJBQ2YsYUFBTSxDQUFDLG1CQUFVLENBQUM7O3FCQVYvQjtJQTBJRixvQkFBQztBQUFELENBeklBLEFBeUlDLElBQUE7QUF6SVkscUJBQWEsZ0JBeUl6QixDQUFBIiwiZmlsZSI6ImFwcC9mcmFtZXdvcmtzL3ByYWN0aWNlYnVkZHkvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIHRyaWdnZXIsIHN0eWxlLCBhbmltYXRlLCBzdGF0ZSwgdHJhbnNpdGlvbiwga2V5ZnJhbWVzLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jhc2VDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uL2NvcmUvZGVjb3JhdG9ycy9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQge0xvZ1NlcnZpY2V9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHtGUkFNRSwgRElBTE9HUywgRkFOQ1lBTEVSVCwgTkFWSUdBVElPTl9FWFRFTlNJT05TfSBmcm9tICcuLi8uLi8uLi9jb3JlL3Rva2Vucyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0NvbmZpZ30gZnJvbSAnLi4vLi4vLi4vY29yZS91dGlscy9jb25maWcnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vcHJhY3RpY2VidWRkeS9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlJztcbmltcG9ydCB7U3R1ZGVudE1vZGVsfSBmcm9tICcuLi8uLi8uLi9wcmFjdGljZWJ1ZGR5L21vZGVscy9zdHVkZW50Lm1vZGVsJztcblxuQEJhc2VDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaG9tZS5jc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdzdGF0ZScsIFtcbiAgICAgICAgICAgIHN0YXRlKCdhY3RpdmUnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3JvdGF0ZSg0NSknIH0pKSxcbiAgICAgICAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHsgdHJhbnNmb3JtOiAncm90YXRlKDApJyB9KSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZWJ0biA9PiBhY3RpdmVidG5hJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzI4MG1zIGVhc2UtaW4nLCBrZXlmcmFtZXMoW1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSd9KSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNzApJ30pICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZWJ0biA9PiBhY3RpdmVidG5iJywgW1xuICAgICAgICAgICAgICAgICBhbmltYXRlKCcyODBtcyBlYXNlLWluJywga2V5ZnJhbWVzKFtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknfSksXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC04MCknfSlcbiAgICAgICAgICAgICAgICBdKSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmVidG4gPT4gYWN0aXZlYnRuYycsIFtcbiAgICAgICAgICAgICAgICAgYW5pbWF0ZSgnMjgwbXMgZWFzZS1pbicsIGtleWZyYW1lcyhbXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ30pLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNzApJ30pLFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBdKSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignYWN0aXZlYnRuYSA9PiBpbmFjdGl2ZWJ0bicsIFtcbiAgICAgICAgICAgICAgIGFuaW1hdGUoJzI4MG1zIGVhc2Utb3V0Jywga2V5ZnJhbWVzKFtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknfSksXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ30pXG4gICAgICAgICAgICAgICAgXSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZWJ0bmIgPT4gaW5hY3RpdmVidG4nLCBbXG4gICAgICAgICAgICAgICAgIGFuaW1hdGUoJzI4MG1zIGVhc2Utb3V0Jywga2V5ZnJhbWVzKFtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknfSksXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ30pXG4gICAgICAgICAgICAgICAgXSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZWJ0bmMgPT4gaW5hY3RpdmVidG4nLCBbXG4gICAgICAgICAgICAgICAgIGFuaW1hdGUoJzI4MG1zIGVhc2Utb3V0Jywga2V5ZnJhbWVzKFtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknfSksXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ30pXG4gICAgICAgICAgICAgICAgXSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKSBcbiAgICBdICBcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHN0dWRlbnRzJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgQEluamVjdChGUkFNRSkgcHJpdmF0ZSBmcmFtZTogYW55LFxuICAgICAgICAgICAgICBASW5qZWN0KE5BVklHQVRJT05fRVhURU5TSU9OUykgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBhbnksXG4gICAgICAgICAgICAgIEBJbmplY3QoRElBTE9HUykgcHJpdmF0ZSBkaWFsb2dzOiBhbnksXG4gICAgICAgICAgICAgIEBJbmplY3QoRkFOQ1lBTEVSVCkgcHJpdmF0ZSBmYW5jeWFsZXJ0OiBhbnlcbiAgICAgICAgICAgICkge31cbmlzT3BlbiA9IGZhbHNlO1xuXG4gbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLnN0dWRlbnRzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlTdHVkZW50cygpO1xuICAgIGlmIChDb25maWcuSVNfTU9CSUxFX05BVElWRSgpKSB7XG4gICAgICBpZiAodGhpcy5mcmFtZS50b3Btb3N0KCkuaW9zKSB7XG4gICAgICAgICAgdGhpcy5mcmFtZS50b3Btb3N0KCkuaW9zLmNvbnRyb2xsZXIudmlzaWJsZVZpZXdDb250cm9sbGVyLm5hdmlnYXRpb25JdGVtLnNldEhpZGVzQmFja0J1dHRvbkFuaW1hdGVkKHRydWUsIGZhbHNlKTtcbiAgICAgIH0gXG4gICAgfSAgICBcbiAgfVxuXG5vblRhcCgpIHtcbiAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XG59XG5cbmdvVG9TdHVkZW50SG9tZShpZDpzdHJpbmcpIHtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvc3R1ZGVudC1ob21lXCIsIGlkXSk7XG59XG5cbmdvVG9IaXN0b3J5KGlkOnN0cmluZykge1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIi9zdHVkZW50LWhpc3RvcnlcIiwgaWRdKTtcbn1cblxuZWRpdFN0dWRlbnQoaWQ6c3RyaW5nKXtcbiAgICAvL2VkaXQgc2VsZWN0ZWQgc3R1ZGVudFxuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIi9zdHVkZW50LWFkbWluXCIsIGlkXSk7XG59XG5cbmdvVG9UZWFjaGVyc0hvbWUoKXtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvdGVhY2hlci1ob21lXCJdKTtcbn1cblxuYWRkU3R1ZGVudCgpe1xuICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgIC8qdmFyIG9wdGlvbnMgPSB7XG4gICAgICB0aXRsZTogJ0FkZCBhIHN0dWRlbnQnLFxuICAgICAgb2tCdXR0b25UZXh0OiAnU2F2ZScsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgICAgIGlucHV0VHlwZTogdGhpcy5kaWFsb2dzLmlucHV0VHlwZS50ZXh0XG4gICAgfTtcbiAgICB0aGlzLmRpYWxvZ3MucHJvbXB0KG9wdGlvbnMpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0LnRleHQudHJpbSgpICE9IFwiXCIpIHtcbiAgICAgICB0aGlzLnN0dWRlbnRTZXJ2aWNlLmFkZChyZXN1bHQudGV4dClcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydC5zaG93U3VjY2VzcygnU3VjY2VzcyEnLCAnU3R1ZGVudCBzdWNjZXNzZnVsbHkgYWRkZWQnLCAnT0shJyk7ICAgIFxuICAgICAgICAgIH0sIChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTsqL1xuICAgIHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0LnNob3dUZXh0RmllbGQoJ0FkZCcsICcnLCBuZXcgdGhpcy5mYW5jeWFsZXJ0LlROU0ZhbmN5QWxlcnRCdXR0b24oeyBsYWJlbDogJ1NhdmUnLCBhY3Rpb246ICh2YWx1ZTogYW55KSA9PiB7IFxuICAgICAgICBjb25zb2xlLmxvZyhgVXNlciBlbnRlcmVkICR7dmFsdWV9YCk7IFxuICAgICAgICBpZiAodmFsdWUudHJpbSgpICE9IFwiXCIpIHtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuYWRkKHZhbHVlKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0LnNob3dTdWNjZXNzKCdTdWNjZXNzIScsICdTdHVkZW50IHN1Y2Nlc3NmdWxseSBhZGRlZCcsICdPSyEnKTsgICAgXG4gICAgICAgICAgfSwgKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSB9KSwgJ3BsdXMucG5nJywgJyNGMkIyMDgnLCAnQWRkIGEgc3R1ZGVudCcsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbn1cblxuXG5sb2dvdXQoKXtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIC8vY2hlY2sgd2hldGhlciBmb3IgcmVhbCwgdGhlbiBsb2dvdXRcbiAgICAvL3RvZG8ga2VlcCBkaWFsb2cgZm9yIGFuZHJvaWRcbiAgICAvKnZhciBvcHRpb25zID0ge1xuICAgICAgdGl0bGU6ICdMb2dvdXQ/JyxcbiAgICAgIG9rQnV0dG9uVGV4dDogJ1llcycsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJ1xuICAgIH07XG4gICAgdGhpcy5kaWFsb2dzLmNvbmZpcm0ob3B0aW9ucykudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIC8vbmF2aWdhdGVcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvXCJdKTtcbiAgICB9KTsqL1xuICAgIGxldCBidXR0b25zID0gW1xuICAgIG5ldyB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydEJ1dHRvbih7IGxhYmVsOiAnTm8nLCBhY3Rpb246ICgpID0+IHsgY29uc29sZS5sb2coJ0NhbmNlbCcpOyB9IH0pLFxuICAgIG5ldyB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydEJ1dHRvbih7IGxhYmVsOiAnWWVzJywgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9ICk7XG4gICAgfSB9KVxuICAgIF07XG4gICAgdGhpcy5mYW5jeWFsZXJ0LlROU0ZhbmN5QWxlcnQuc2hvd0N1c3RvbUJ1dHRvbnMoYnV0dG9ucywgJ2FsZXJ0LnBuZycsICcjRjEzMDMwJywgJ0xvZ291dD8nLCBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxvZ291dD9gLCAnT2snKTtcblxuXG59XG5cbmRlbGV0ZVN0dWRlbnQoaXRlbTpTdHVkZW50TW9kZWwpe1xuICAgIC8qdmFyIG9wdGlvbnMgPSB7XG4gICAgICB0aXRsZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBzdHVkZW50PycsXG4gICAgICBva0J1dHRvblRleHQ6ICdZZXMnLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vJ1xuICAgIH07XG4gICAgdGhpcy5kaWFsb2dzLmNvbmZpcm0ob3B0aW9ucykudGhlbigocmVzdWx0OiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgdGhpcy5zdHVkZW50U2VydmljZS5kZWxldGVTdHVkZW50KGl0ZW0pXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy9ub3RoaW5nXG4gICAgICAgICAgfSwgKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pOyovXG4gICAgbGV0IGJ1dHRvbnMgPSBbXG4gICAgbmV3IHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0QnV0dG9uKHsgbGFiZWw6ICdObycsIGFjdGlvbjogKCkgPT4geyBjb25zb2xlLmxvZygnQ2FuY2VsJyk7IH0gfSksXG4gICAgbmV3IHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0QnV0dG9uKHsgbGFiZWw6ICdZZXMnLCBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZGVsZXRlU3R1ZGVudChpdGVtKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydC5zaG93U3VjY2VzcygnU3VjY2VzcyEnLCAnU3R1ZGVudCBzdWNjZXNzZnVsbHkgZGVsZXRlZCcsICdPSyEnKTsgICAgXG4gICAgICAgICAgfSwgKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgIH0pO1xuICAgIH0gfSlcbiAgICBdO1xuICAgIHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0LnNob3dDdXN0b21CdXR0b25zKGJ1dHRvbnMsICdhbGVydC5wbmcnLCAnI0YyODYwMCcsICdEZWxldGU/JywgYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBzdHVkZW50Py5gLCAnT2snKTtcblxuXG59XG4gXG59Il19
