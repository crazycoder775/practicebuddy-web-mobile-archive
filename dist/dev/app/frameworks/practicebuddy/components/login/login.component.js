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
var firebase_service_1 = require('../../../practicebuddy/services/firebase.service');
var config_1 = require('../../../core/utils/config');
var router_1 = require('@angular/router');
var user_model_1 = require('../../../practicebuddy/models/user.model');
var LoginComponent = (function () {
    function LoginComponent(firebaseService, logger, _router, dialogs, frame, fancyalert) {
        this.firebaseService = firebaseService;
        this.logger = logger;
        this._router = _router;
        this.dialogs = dialogs;
        this.frame = frame;
        this.fancyalert = fancyalert;
        this.isLoggingIn = true;
        this.isAuthenticating = false;
        this.user = new user_model_1.UserModel();
        this.user.email = "user@nativescript.org";
        this.user.password = "password";
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log("initializing");
        if (config_1.Config.IS_MOBILE_NATIVE()) {
            if (this.frame.topmost().ios) {
                this.frame.topmost().ios.controller.visibleViewController.navigationItem.setHidesBackButtonAnimated(true, false);
            }
        }
    };
    LoginComponent.prototype.submit = function () {
        this.isAuthenticating = true;
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.firebaseService.login(this.user)
            .then(function () {
            _this.isAuthenticating = false;
            _this._router.navigate([""]);
        })
            .catch(function (message) {
            _this.isAuthenticating = false;
        });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.firebaseService.register(this.user)
            .then(function () {
            _this.isAuthenticating = false;
            _this.toggleDisplay();
        })
            .catch(function (message) {
            alert(message);
            _this.isAuthenticating = false;
        });
    };
    LoginComponent.prototype.forgotPassword = function () {
        var _this = this;
        this.fancyalert.TNSFancyAlert.showTextField('Email', '', new this.fancyalert.TNSFancyAlertButton({ label: 'OK', action: function (value) {
                console.log("User entered " + value);
                if (value.trim() != "") {
                    _this.firebaseService.resetPassword(value.trim())
                        .then(function (result) {
                        if (result) {
                            _this.fancyalert.TNSFancyAlert.showSuccess('Success!', 'Your password has been reset; please check your email!', 'OK!');
                        }
                    })
                        .catch(function (message) {
                    });
                }
            } }), 'alert.png', '#F2B208', 'Reset password', undefined, undefined);
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent = __decorate([
        base_component_1.BaseComponent({
            moduleId: module.id,
            selector: 'sd-login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(3, core_1.Inject(tokens_1.DIALOGS)),
        __param(4, core_1.Inject(tokens_1.FRAME)),
        __param(5, core_1.Inject(tokens_1.FANCYALERT)), 
        __metadata('design:paramtypes', [firebase_service_1.FirebaseService, log_service_1.LogService, router_1.Router, Object, Object, Object])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL3ByYWN0aWNlYnVkZHkvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUF1RSxlQUFlLENBQUMsQ0FBQTtBQUN2RiwrQkFBNEIseUNBQXlDLENBQUMsQ0FBQTtBQUN0RSw0QkFBeUIsb0NBQW9DLENBQUMsQ0FBQTtBQUM5RCx1QkFBeUMsc0JBQXNCLENBQUMsQ0FBQTtBQUNoRSxpQ0FBOEIsa0RBQWtELENBQUMsQ0FBQTtBQUVqRix1QkFBcUIsNEJBQTRCLENBQUMsQ0FBQTtBQUNsRCx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QywyQkFBd0IsMENBQTBDLENBQUMsQ0FBQTtBQVNuRTtJQU1FLHdCQUFtQixlQUFnQyxFQUMvQixNQUFrQixFQUNsQixPQUFlLEVBQ0UsT0FBWSxFQUNkLEtBQVUsRUFDTCxVQUFlO1FBTHBDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDRSxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUNMLGVBQVUsR0FBVixVQUFVLENBQUs7UUFUdkQsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBVWIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLHNCQUFTLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBdUIsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDbEMsQ0FBQztJQUVaLGlDQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLGVBQU0sQ0FBQyxnQkFBZ0IsRUFB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QUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBakdIO1FBQUMsOEJBQWEsQ0FBQztZQUNiLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUN4QixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtTQUN0QyxDQUFDO21CQVVhLGFBQU0sQ0FBQyxnQkFBTyxDQUFDO21CQUNmLGFBQU0sQ0FBQyxjQUFLLENBQUM7bUJBQ2IsYUFBTSxDQUFDLG1CQUFVLENBQUM7O3NCQVovQjtJQTRGRixxQkFBQztBQUFELENBM0ZBLEFBMkZDLElBQUE7QUEzRlksc0JBQWMsaUJBMkYxQixDQUFBIiwiZmlsZSI6ImFwcC9mcmFtZXdvcmtzL3ByYWN0aWNlYnVkZHkvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09uSW5pdCwgSW5qZWN0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kZWNvcmF0b3JzL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7TG9nU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9sb2cuc2VydmljZSc7XG5pbXBvcnQge0RJQUxPR1MsIEZSQU1FLCBGQU5DWUFMRVJUfSBmcm9tICcuLi8uLi8uLi9jb3JlL3Rva2Vucyc7XG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vcHJhY3RpY2VidWRkeS9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7Q29uZmlnfSBmcm9tICcuLi8uLi8uLi9jb3JlL3V0aWxzL2NvbmZpZyc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7VXNlck1vZGVsfSBmcm9tICcuLi8uLi8uLi9wcmFjdGljZWJ1ZGR5L21vZGVscy91c2VyLm1vZGVsJztcblxuQEJhc2VDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICdsb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydsb2dpbi5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHVzZXI6IFVzZXJNb2RlbDtcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xuICBpc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG5cbiAgXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsb2dnZXI6IExvZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBASW5qZWN0KERJQUxPR1MpIHByaXZhdGUgZGlhbG9nczogYW55LFxuICAgICAgICAgICAgICBASW5qZWN0KEZSQU1FKSBwcml2YXRlIGZyYW1lOiBhbnksXG4gICAgICAgICAgICAgIEBJbmplY3QoRkFOQ1lBTEVSVCkgcHJpdmF0ZSBmYW5jeWFsZXJ0OiBhbnlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlck1vZGVsKCk7XG4gICAgICAgICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwidXNlckBuYXRpdmVzY3JpcHQub3JnXCI7XG4gICAgICAgICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwicGFzc3dvcmRcIjtcbiAgICAgICAgICAgIH1cblxuIG5nT25Jbml0KCkge1xuICAgY29uc29sZS5sb2coXCJpbml0aWFsaXppbmdcIilcbiAgICBpZiAoQ29uZmlnLklTX01PQklMRV9OQVRJVkUoKSkge1xuICAgICAgaWYgKHRoaXMuZnJhbWUudG9wbW9zdCgpLmlvcykge1xuICAgICAgICB0aGlzLmZyYW1lLnRvcG1vc3QoKS5pb3MuY29udHJvbGxlci52aXNpYmxlVmlld0NvbnRyb2xsZXIubmF2aWdhdGlvbkl0ZW0uc2V0SGlkZXNCYWNrQnV0dG9uQW5pbWF0ZWQodHJ1ZSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0gXG4gIH1cblxuICBcbiBzdWJtaXQoKSB7XG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgdGhpcy5sb2dpbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNpZ25VcCgpO1xuICAgIH1cbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgIC8qaWYgKGdldENvbm5lY3Rpb25UeXBlKCkgPT0gY29ubmVjdGlvblR5cGUubm9uZSkge1xuICAgICAgYWxlcnQoXCJQQiByZXF1aXJlcyBhbiBpbnRlcm5ldCBjb25uZWN0aW9uIHRvIGxvZyBpbi5cIik7XG4gICAgICByZXR1cm47XG4gICAgfSovXG5cbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKG1lc3NhZ2U6YW55KSA9PiB7XG4gICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBzaWduVXAoKSB7XG4gICAgLyppZiAoZ2V0Q29ubmVjdGlvblR5cGUoKSA9PSBjb25uZWN0aW9uVHlwZS5ub25lKSB7XG4gICAgICBhbGVydChcIlBCIHJlcXVpcmVzIGFuIGludGVybmV0IGNvbm5lY3Rpb24gdG8gcmVnaXN0ZXIuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH0qL1xuXG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChtZXNzYWdlOmFueSkgPT4ge1xuICAgICAgICBhbGVydChtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIGZvcmdvdFBhc3N3b3JkKCkge1xuXG4gICAgdGhpcy5mYW5jeWFsZXJ0LlROU0ZhbmN5QWxlcnQuc2hvd1RleHRGaWVsZCgnRW1haWwnLCAnJywgbmV3IHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0QnV0dG9uKHsgbGFiZWw6ICdPSycsIGFjdGlvbjogKHZhbHVlOiBhbnkpID0+IHsgXG4gICAgICAgIGNvbnNvbGUubG9nKGBVc2VyIGVudGVyZWQgJHt2YWx1ZX1gKTsgXG4gICAgICAgIGlmICh2YWx1ZS50cmltKCkgIT0gXCJcIikge1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5yZXNldFBhc3N3b3JkKHZhbHVlLnRyaW0oKSlcbiAgICAgICAgICAudGhlbigocmVzdWx0OmFueSkgPT4ge1xuICAgICAgICAgICAgaWYocmVzdWx0KXtcbiAgICAgICAgICAgICAgdGhpcy5mYW5jeWFsZXJ0LlROU0ZhbmN5QWxlcnQuc2hvd1N1Y2Nlc3MoJ1N1Y2Nlc3MhJywgJ1lvdXIgcGFzc3dvcmQgaGFzIGJlZW4gcmVzZXQ7IHBsZWFzZSBjaGVjayB5b3VyIGVtYWlsIScsICdPSyEnKTsgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChtZXNzYWdlOmFueSkgPT4ge1xuICAgICAgICAgICAgLy9hbGVydGVkIGluIGJhY2tlbmRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0gfSksICdhbGVydC5wbmcnLCAnI0YyQjIwOCcsICdSZXNldCBwYXNzd29yZCcsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTsgIFxuIH1cbiAgXG50b2dnbGVEaXNwbGF5KCkge1xuICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgfVxufSJdfQ==
