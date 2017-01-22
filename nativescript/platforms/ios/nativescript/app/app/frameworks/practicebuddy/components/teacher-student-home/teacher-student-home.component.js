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
var TeacherStudentHomeComponent = (function () {
    function TeacherStudentHomeComponent(route, firebaseService, _router, ngZone, fancyalert, audio) {
        this.route = route;
        this.firebaseService = firebaseService;
        this._router = _router;
        this.ngZone = ngZone;
        this.fancyalert = fancyalert;
        this.audio = audio;
        this.player = new this.audio.TNSPlayer();
    }
    TeacherStudentHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.name = this.route.snapshot.queryParams['name'];
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log(_this.id);
            _this.studentpractices$ = _this.firebaseService.getMyPractices(_this.id);
        });
    };
    TeacherStudentHomeComponent.prototype.goHome = function () {
        this._router.navigate([""]);
    };
    TeacherStudentHomeComponent.prototype.addComment = function (practiceId) {
        var _this = this;
        this.fancyalert.TNSFancyAlert.showTextField('Comment', '', new this.fancyalert.TNSFancyAlertButton({ label: 'Save', action: function (value) {
                console.log("User entered " + value);
                if (value.trim() != "") {
                    _this.firebaseService.addComment(practiceId, value)
                        .then(function () {
                        _this.fancyalert.TNSFancyAlert.showSuccess('Success!', 'Comment successfully added', 'OK!');
                    }, function (err) {
                        alert(err);
                    });
                }
            } }), 'pen.png', '#1598F6', 'Add a comment', undefined, undefined);
    };
    TeacherStudentHomeComponent.prototype.addAward = function (practiceId) {
        this._router.navigate(["/sticker-gallery", practiceId]);
    };
    TeacherStudentHomeComponent.prototype.markComplete = function (practiceId) {
        var _this = this;
        var buttons = [
            new this.fancyalert.TNSFancyAlertButton({ label: 'No', action: function () { console.log('Cancel'); } }),
            new this.fancyalert.TNSFancyAlertButton({ label: 'Yes', action: function () {
                    _this.firebaseService.markComplete(practiceId)
                        .then(function () {
                        _this.fancyalert.TNSFancyAlert.showSuccess('Success!', 'Archived!', 'OK!');
                    }, function (err) {
                        alert(err);
                    });
                } })
        ];
        this.fancyalert.TNSFancyAlert.showCustomButtons(buttons, 'alert.png', '#1598F6', 'Archive?', "Archive this practice?", 'Ok');
    };
    TeacherStudentHomeComponent.prototype.playAudio = function (filepath, fileType) {
        var _this = this;
        try {
            var playerOptions = {
                audioFile: filepath,
                completeCallback: function () {
                    _this.player.dispose().then(function () {
                        _this.isPlaying = false;
                        console.log('DISPOSED');
                    }, function (err) {
                        console.log('ERROR disposePlayer: ' + err);
                    });
                },
                errorCallback: function (err) {
                    console.log(JSON.stringify(err));
                    _this.isPlaying = false;
                },
                infoCallback: function (info) {
                    alert('Info callback: ' + info.msg);
                }
            };
            this.isPlaying = true;
            this.player.playFromUrl(playerOptions).then(function () {
                _this.isPlaying = true;
            }, function (err) {
                console.log(err);
                _this.isPlaying = false;
            });
        }
        catch (ex) {
            console.log(ex);
        }
    };
    TeacherStudentHomeComponent.prototype.playTrack = function (item) {
        var url = item.Track;
        this.playAudio(url, 'remoteFile');
    };
    TeacherStudentHomeComponent.prototype.stopTrack = function (args) {
        console.log(this.isPlaying);
        if (this.isPlaying) {
            this.player.dispose().then(function () {
            }, function (err) {
                console.log(err);
            });
        }
    };
    return TeacherStudentHomeComponent;
}());
TeacherStudentHomeComponent = __decorate([
    base_component_1.BaseComponent({
        moduleId: module.id,
        selector: 'sd-teacher-student-home',
        templateUrl: 'teacher-student-home.component.html',
        styleUrls: ['teacher-student-home.css']
    }),
    __param(4, core_1.Inject(tokens_1.FANCYALERT)),
    __param(5, core_1.Inject(tokens_1.AUDIO)),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        firebase_service_1.FirebaseService,
        router_1.Router,
        core_1.NgZone, Object, Object])
], TeacherStudentHomeComponent);
exports.TeacherStudentHomeComponent = TeacherStudentHomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hlci1zdHVkZW50LWhvbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVhY2hlci1zdHVkZW50LWhvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBcUQ7QUFDckQsMEVBQXNFO0FBRXRFLCtDQUF1RDtBQUV2RCwwQ0FBdUQ7QUFDdkQscUZBQWlGO0FBVWpGLElBQWEsMkJBQTJCO0lBWXRDLHFDQUFvQixLQUFxQixFQUMzQixlQUFnQyxFQUNoQyxPQUFlLEVBQ2YsTUFBYyxFQUNNLFVBQWUsRUFDcEIsS0FBVTtRQUxuQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUMzQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDTSxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQ3BCLFVBQUssR0FBTCxLQUFLLENBQUs7UUFFL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVSLDhDQUFRLEdBQVI7UUFBQSxpQkFTRTtRQU5ELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ25ELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBVTtZQUM5QyxLQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNwQixLQUFJLENBQUMsaUJBQWlCLEdBQVEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVGLDRDQUFNLEdBQU47UUFDRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGdEQUFVLEdBQVYsVUFBVyxVQUFVO1FBQXJCLGlCQVlDO1FBWEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBQyxLQUFVO2dCQUNwSSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFnQixLQUFPLENBQUMsQ0FBQztnQkFDckMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBQyxLQUFLLENBQUM7eUJBQzlDLElBQUksQ0FBQzt3QkFDSixLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLDRCQUE0QixFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUM3RixDQUFDLEVBQUUsVUFBQyxHQUFRO3dCQUNWLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDYixDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELDhDQUFRLEdBQVIsVUFBUyxVQUFVO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0Qsa0RBQVksR0FBWixVQUFhLFVBQVU7UUFBdkIsaUJBYUM7UUFaQyxJQUFJLE9BQU8sR0FBRztZQUNkLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLGNBQVEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2xHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO29CQUM1RCxLQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7eUJBQzVDLElBQUksQ0FBQzt3QkFDRixLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDNUUsQ0FBQyxFQUFFLFVBQUMsR0FBUTt3QkFDVixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2IsQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxFQUFFLENBQUM7U0FDSCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9ILENBQUM7SUFFTSwrQ0FBUyxHQUFoQixVQUFpQixRQUFnQixFQUFFLFFBQWdCO1FBQW5ELGlCQXFDQztRQW5DQyxJQUFJLENBQUM7WUFDSCxJQUFJLGFBQWEsR0FBRztnQkFDbEIsU0FBUyxFQUFFLFFBQVE7Z0JBQ2pCLGdCQUFnQixFQUFFO29CQUNsQixLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQzt3QkFDekIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7d0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzFCLENBQUMsRUFBRSxVQUFDLEdBQUc7d0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDN0MsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxhQUFhLEVBQUUsVUFBQyxHQUFRO29CQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDakMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsWUFBWSxFQUFFLFVBQUMsSUFBUztvQkFDdEIsS0FBSyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEMsQ0FBQzthQUNGLENBQUM7WUFFRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUd0QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLENBQUMsRUFBRSxVQUFDLEdBQVE7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFTCxDQUFDO1FBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEIsQ0FBQztJQUNILENBQUM7SUFxQk0sK0NBQVMsR0FBaEIsVUFBaUIsSUFBUTtRQUN2QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFHSSwrQ0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQzNCLENBQUMsRUFBRSxVQUFDLEdBQUc7Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBTUQsa0NBQUM7QUFBRCxDQUFDLEFBbkpELElBbUpDO0FBbkpZLDJCQUEyQjtJQU52Qyw4QkFBYSxDQUFDO1FBQ2IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsV0FBVyxFQUFFLHFDQUFxQztRQUNsRCxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztLQUN4QyxDQUFDO0lBaUJPLFdBQUEsYUFBTSxDQUFDLG1CQUFVLENBQUMsQ0FBQTtJQUNsQixXQUFBLGFBQU0sQ0FBQyxjQUFLLENBQUMsQ0FBQTtxQ0FMTyx1QkFBYztRQUNWLGtDQUFlO1FBQ3ZCLGVBQU07UUFDUCxhQUFNO0dBZmpCLDJCQUEyQixDQW1KdkM7QUFuSlksa0VBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIE9uSW5pdCwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kZWNvcmF0b3JzL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7TG9nU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9sb2cuc2VydmljZSc7XG5pbXBvcnQge0ZBTkNZQUxFUlQsIEFVRElPfSBmcm9tICcuLi8uLi8uLi9jb3JlL3Rva2Vucyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vcHJhY3RpY2VidWRkeS9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlJztcbmltcG9ydCB7U3R1ZGVudE1vZGVsfSBmcm9tICcuLi8uLi8uLi9wcmFjdGljZWJ1ZGR5L21vZGVscy9zdHVkZW50Lm1vZGVsJztcbmltcG9ydCB7UHJhY3RpY2VNb2RlbH0gZnJvbSAnLi4vLi4vLi4vcHJhY3RpY2VidWRkeS9tb2RlbHMvcHJhY3RpY2UubW9kZWwnO1xuXG5AQmFzZUNvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtdGVhY2hlci1zdHVkZW50LWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ3RlYWNoZXItc3R1ZGVudC1ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RlYWNoZXItc3R1ZGVudC1ob21lLmNzcyddIFxufSlcbmV4cG9ydCBjbGFzcyBUZWFjaGVyU3R1ZGVudEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcbiAgcHVibGljIHN0dWRlbnQ6IE9ic2VydmFibGU8YW55PjtcbiAgcHVibGljIHN0dWRlbnRwcmFjdGljZXMkOiBPYnNlcnZhYmxlPGFueT47XG4gIHByaXZhdGUgc3ViOiBhbnk7XG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBpZDogc3RyaW5nO1xuICBwdWJsaWMgaXNQbGF5aW5nOiBib29sZWFuO1xuICBwdWJsaWMgcGxheWVyOiBhbnk7XG4gIHByaXZhdGUgY3VycmVudFVybDogc3RyaW5nO1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgICAgICBASW5qZWN0KEZBTkNZQUxFUlQpIHByaXZhdGUgZmFuY3lhbGVydDogYW55LFxuICAgICAgICBASW5qZWN0KEFVRElPKSBwcml2YXRlIGF1ZGlvOiBhbnkgICAgICAgICAgICAgICAgIFxuICAgICAgICApIHsgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgdGhpcy5hdWRpby5UTlNQbGF5ZXIoKTsgICAgXG4gICAgICAgIH1cblxuIG5nT25Jbml0KCkge1xuICAgLy9nZXQgdGhlIHN0dWRlbnQncyBiYXNlIGluZm8gYW5kIHRoZSBzcGVjaWZpYyBwcmFjdGljZSB3ZSBhcmUgc2hvd2lnblxuIFxuICB0aGlzLm5hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zWyduYW1lJ11cbiAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczphbnkpID0+IHtcbiAgICAgIHRoaXMuaWQgPSBwYXJhbXNbJ2lkJ107XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmlkKVxuICAgICAgdGhpcy5zdHVkZW50cHJhY3RpY2VzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlQcmFjdGljZXModGhpcy5pZCk7XG4gICAgfSk7XG4gIH1cblxuIGdvSG9tZSgpIHtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcbiAgfSBcblxuICBhZGRDb21tZW50KHByYWN0aWNlSWQpe1xuICAgICB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydC5zaG93VGV4dEZpZWxkKCdDb21tZW50JywgJycsIG5ldyB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydEJ1dHRvbih7IGxhYmVsOiAnU2F2ZScsIGFjdGlvbjogKHZhbHVlOiBhbnkpID0+IHsgXG4gICAgICAgIGNvbnNvbGUubG9nKGBVc2VyIGVudGVyZWQgJHt2YWx1ZX1gKTsgXG4gICAgICAgIGlmICh2YWx1ZS50cmltKCkgIT0gXCJcIikge1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5hZGRDb21tZW50KHByYWN0aWNlSWQsdmFsdWUpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mYW5jeWFsZXJ0LlROU0ZhbmN5QWxlcnQuc2hvd1N1Y2Nlc3MoJ1N1Y2Nlc3MhJywgJ0NvbW1lbnQgc3VjY2Vzc2Z1bGx5IGFkZGVkJywgJ09LIScpOyAgICBcbiAgICAgICAgICB9LCAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9IH0pLCAncGVuLnBuZycsICcjMTU5OEY2JywgJ0FkZCBhIGNvbW1lbnQnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gIH1cblxuICBhZGRBd2FyZChwcmFjdGljZUlkKXtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiL3N0aWNrZXItZ2FsbGVyeVwiLCBwcmFjdGljZUlkXSk7XG4gIH1cbiAgbWFya0NvbXBsZXRlKHByYWN0aWNlSWQpe1xuICAgIGxldCBidXR0b25zID0gW1xuICAgIG5ldyB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydEJ1dHRvbih7IGxhYmVsOiAnTm8nLCBhY3Rpb246ICgpID0+IHsgY29uc29sZS5sb2coJ0NhbmNlbCcpOyB9IH0pLFxuICAgIG5ldyB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydEJ1dHRvbih7IGxhYmVsOiAnWWVzJywgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLm1hcmtDb21wbGV0ZShwcmFjdGljZUlkKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydC5zaG93U3VjY2VzcygnU3VjY2VzcyEnLCAnQXJjaGl2ZWQhJywgJ09LIScpOyAgICBcbiAgICAgICAgICB9LCAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgfSk7XG4gICAgfSB9KVxuICAgIF07XG4gICAgdGhpcy5mYW5jeWFsZXJ0LlROU0ZhbmN5QWxlcnQuc2hvd0N1c3RvbUJ1dHRvbnMoYnV0dG9ucywgJ2FsZXJ0LnBuZycsICcjMTU5OEY2JywgJ0FyY2hpdmU/JywgYEFyY2hpdmUgdGhpcyBwcmFjdGljZT9gLCAnT2snKTsgIFxuICB9XG5cbiAgcHVibGljIHBsYXlBdWRpbyhmaWxlcGF0aDogc3RyaW5nLCBmaWxlVHlwZTogc3RyaW5nKSB7XG5cbiAgICB0cnkge1xuICAgICAgdmFyIHBsYXllck9wdGlvbnMgPSB7XG4gICAgICAgIGF1ZGlvRmlsZTogZmlsZXBhdGgsXG4gICAgICAgICAgY29tcGxldGVDYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgIHRoaXMucGxheWVyLmRpc3Bvc2UoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRElTUE9TRUQnKTtcbiAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgZGlzcG9zZVBsYXllcjogJyArIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZXJyb3JDYWxsYmFjazogKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbmZvQ2FsbGJhY2s6IChpbmZvOiBhbnkpID0+IHtcbiAgICAgICAgICBhbGVydCgnSW5mbyBjYWxsYmFjazogJyArIGluZm8ubXNnKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuXG5cbiAgICAgIHRoaXMucGxheWVyLnBsYXlGcm9tVXJsKHBsYXllck9wdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gICAgICB9LCAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIGNvbnNvbGUubG9nKGV4KTtcbiAgICB9XG4gIH1cblxuICAvKnB1YmxpYyBwbGF5VHJhY2soaXRlbTogYW55KSB7XG4gICAgbGV0IHVybCA9IGl0ZW0uVHJhY2s7XG5cbiAgICBpZiAodGhpcy5wbGF5ZXIpIHRoaXMucGxheWVyLnBhdXNlKCk7XG5cbiAgICBpZiAodGhpcy5jdXJyZW50VXJsICE9PSB1cmwpIHtcbiAgICAgIHRoaXMucGxheUF1ZGlvKHVybCwgJ3JlbW90ZUZpbGUnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNQbGF5aW5nKSB7XG4gICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICAgIHRoaXMucGxheWVyLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgIC8vYWxsb3cgY2hvaWNlXG4gICAgICAvL3RoaXMucGxheWVyLnBsYXkoKTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50VXJsID0gdXJsO1xuICB9Ki9cbiAgcHVibGljIHBsYXlUcmFjayhpdGVtOmFueSkge1xuICAgIGxldCB1cmwgPSBpdGVtLlRyYWNrO1xuICAgIHRoaXMucGxheUF1ZGlvKHVybCwgJ3JlbW90ZUZpbGUnKTtcbiAgfVxuXG5cbnB1YmxpYyBzdG9wVHJhY2soYXJncykge1xuICBjb25zb2xlLmxvZyh0aGlzLmlzUGxheWluZylcbiAgICBpZiAodGhpcy5pc1BsYXlpbmcpIHtcbiAgICAgIHRoaXMucGxheWVyLmRpc3Bvc2UoKS50aGVuKCgpID0+IHtcbiAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICAgIH1cbn1cblxuXG4gIFxuXG4gXG59Il19