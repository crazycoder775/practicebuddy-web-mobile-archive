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
var firebase_service_1 = require("../../../practicebuddy/services/firebase.service");
var config_1 = require("../../../core/utils/config");
var router_1 = require("@angular/router");
var user_model_1 = require("../../../practicebuddy/models/user.model");
var LoginComponent = (function () {
    function LoginComponent(firebaseService, logger, _router, frame, fancyalert) {
        this.firebaseService = firebaseService;
        this.logger = logger;
        this._router = _router;
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
    return LoginComponent;
}());
LoginComponent = __decorate([
    base_component_1.BaseComponent({
        moduleId: module.id,
        selector: 'sd-login',
        templateUrl: 'login.component.html',
        styleUrls: ['login.css'],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __param(3, core_1.Inject(tokens_1.FRAME)),
    __param(4, core_1.Inject(tokens_1.FANCYALERT)),
    __metadata("design:paramtypes", [firebase_service_1.FirebaseService,
        log_service_1.LogService,
        router_1.Router, Object, Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBdUY7QUFDdkYsMEVBQXNFO0FBQ3RFLGtFQUE4RDtBQUM5RCwrQ0FBdUQ7QUFDdkQscUZBQWlGO0FBRWpGLHFEQUFrRDtBQUNsRCwwQ0FBdUM7QUFDdkMsdUVBQW1FO0FBU25FLElBQWEsY0FBYztJQU16Qix3QkFBbUIsZUFBZ0MsRUFDL0IsTUFBa0IsRUFDbEIsT0FBZSxFQUNBLEtBQVUsRUFDTCxVQUFlO1FBSnBDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDQSxVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQ0wsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQVJ2RCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFTYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUF1QixDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBRVosaUNBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDMUIsRUFBRSxDQUFDLENBQUMsZUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLHFCQUFx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RSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO1FBQ3hCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO0tBQ3RDLENBQUM7SUFVYSxXQUFBLGFBQU0sQ0FBQyxjQUFLLENBQUMsQ0FBQTtJQUNiLFdBQUEsYUFBTSxDQUFDLG1CQUFVLENBQUMsQ0FBQTtxQ0FKSyxrQ0FBZTtRQUN2Qix3QkFBVTtRQUNULGVBQU07R0FSeEIsY0FBYyxDQTBGMUI7QUExRlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09uSW5pdCwgSW5qZWN0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kZWNvcmF0b3JzL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7TG9nU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9sb2cuc2VydmljZSc7XG5pbXBvcnQge0ZSQU1FLCBGQU5DWUFMRVJUfSBmcm9tICcuLi8uLi8uLi9jb3JlL3Rva2Vucyc7XG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vcHJhY3RpY2VidWRkeS9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7Q29uZmlnfSBmcm9tICcuLi8uLi8uLi9jb3JlL3V0aWxzL2NvbmZpZyc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7VXNlck1vZGVsfSBmcm9tICcuLi8uLi8uLi9wcmFjdGljZWJ1ZGR5L21vZGVscy91c2VyLm1vZGVsJztcblxuQEJhc2VDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICdsb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydsb2dpbi5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHVzZXI6IFVzZXJNb2RlbDtcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xuICBpc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG5cbiAgXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsb2dnZXI6IExvZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBASW5qZWN0KEZSQU1FKSBwcml2YXRlIGZyYW1lOiBhbnksXG4gICAgICAgICAgICAgIEBJbmplY3QoRkFOQ1lBTEVSVCkgcHJpdmF0ZSBmYW5jeWFsZXJ0OiBhbnlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlck1vZGVsKCk7XG4gICAgICAgICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwidXNlckBuYXRpdmVzY3JpcHQub3JnXCI7XG4gICAgICAgICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwicGFzc3dvcmRcIjtcbiAgICAgICAgICAgIH1cblxuIG5nT25Jbml0KCkge1xuICAgY29uc29sZS5sb2coXCJpbml0aWFsaXppbmdcIilcbiAgICBpZiAoQ29uZmlnLklTX01PQklMRV9OQVRJVkUoKSkge1xuICAgICAgaWYgKHRoaXMuZnJhbWUudG9wbW9zdCgpLmlvcykge1xuICAgICAgICB0aGlzLmZyYW1lLnRvcG1vc3QoKS5pb3MuY29udHJvbGxlci52aXNpYmxlVmlld0NvbnRyb2xsZXIubmF2aWdhdGlvbkl0ZW0uc2V0SGlkZXNCYWNrQnV0dG9uQW5pbWF0ZWQodHJ1ZSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0gXG4gIH1cblxuICBcbiBzdWJtaXQoKSB7XG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgdGhpcy5sb2dpbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNpZ25VcCgpO1xuICAgIH1cbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgIC8qaWYgKGdldENvbm5lY3Rpb25UeXBlKCkgPT0gY29ubmVjdGlvblR5cGUubm9uZSkge1xuICAgICAgYWxlcnQoXCJQQiByZXF1aXJlcyBhbiBpbnRlcm5ldCBjb25uZWN0aW9uIHRvIGxvZyBpbi5cIik7XG4gICAgICByZXR1cm47XG4gICAgfSovXG5cbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKG1lc3NhZ2U6YW55KSA9PiB7XG4gICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBzaWduVXAoKSB7XG4gICAgLyppZiAoZ2V0Q29ubmVjdGlvblR5cGUoKSA9PSBjb25uZWN0aW9uVHlwZS5ub25lKSB7XG4gICAgICBhbGVydChcIlBCIHJlcXVpcmVzIGFuIGludGVybmV0IGNvbm5lY3Rpb24gdG8gcmVnaXN0ZXIuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH0qL1xuXG4gICAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChtZXNzYWdlOmFueSkgPT4ge1xuICAgICAgICBhbGVydChtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIGZvcmdvdFBhc3N3b3JkKCkge1xuXG4gICAgdGhpcy5mYW5jeWFsZXJ0LlROU0ZhbmN5QWxlcnQuc2hvd1RleHRGaWVsZCgnRW1haWwnLCAnJywgbmV3IHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0QnV0dG9uKHsgbGFiZWw6ICdPSycsIGFjdGlvbjogKHZhbHVlOiBhbnkpID0+IHsgXG4gICAgICAgIGNvbnNvbGUubG9nKGBVc2VyIGVudGVyZWQgJHt2YWx1ZX1gKTsgXG4gICAgICAgIGlmICh2YWx1ZS50cmltKCkgIT0gXCJcIikge1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5yZXNldFBhc3N3b3JkKHZhbHVlLnRyaW0oKSlcbiAgICAgICAgICAudGhlbigocmVzdWx0OmFueSkgPT4ge1xuICAgICAgICAgICAgaWYocmVzdWx0KXtcbiAgICAgICAgICAgICAgdGhpcy5mYW5jeWFsZXJ0LlROU0ZhbmN5QWxlcnQuc2hvd1N1Y2Nlc3MoJ1N1Y2Nlc3MhJywgJ1lvdXIgcGFzc3dvcmQgaGFzIGJlZW4gcmVzZXQ7IHBsZWFzZSBjaGVjayB5b3VyIGVtYWlsIScsICdPSyEnKTsgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChtZXNzYWdlOmFueSkgPT4ge1xuICAgICAgICAgICAgLy9hbGVydGVkIGluIGJhY2tlbmRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0gfSksICdhbGVydC5wbmcnLCAnI0YyQjIwOCcsICdSZXNldCBwYXNzd29yZCcsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTsgIFxuIH1cbiAgXG50b2dnbGVEaXNwbGF5KCkge1xuICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgfVxufSJdfQ==