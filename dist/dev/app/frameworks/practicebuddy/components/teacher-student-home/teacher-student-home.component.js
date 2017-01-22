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
        this._router.navigate(["/home"]);
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
                    console.log(err);
                    _this.isPlaying = false;
                },
                infoCallback: function (info) {
                    console.log("what: " + info);
                }
            };
            this.isPlaying = true;
            if (fileType === 'localFile') {
                this.player.playFromFile(playerOptions).then(function () {
                    _this.isPlaying = true;
                }, function (err) {
                    console.log(err);
                    _this.isPlaying = false;
                });
            }
            else if (fileType === 'remoteFile') {
                this.player.playFromUrl(playerOptions).then(function () {
                    _this.isPlaying = true;
                }, function (err) {
                    console.log(err);
                    _this.isPlaying = false;
                });
            }
        }
        catch (ex) {
            console.log(ex);
        }
    };
    TeacherStudentHomeComponent.prototype.playTrack = function (track) {
        if (!this.isPlaying) {
            this.playAudio(track, 'remoteFile');
        }
    };
    TeacherStudentHomeComponent.prototype.stopTrack = function (args) {
        if (this.isPlaying) {
            this.player.dispose().then(function () {
            }, function (err) {
                console.log(err);
            });
        }
    };
    TeacherStudentHomeComponent = __decorate([
        base_component_1.BaseComponent({
            moduleId: module.id,
            selector: 'sd-teacher-student-home',
            templateUrl: 'teacher-student-home.component.html',
            styleUrls: ['teacher-student-home.css']
        }),
        __param(4, core_1.Inject(tokens_1.FANCYALERT)),
        __param(5, core_1.Inject(tokens_1.AUDIO)), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, firebase_service_1.FirebaseService, router_1.Router, core_1.NgZone, Object, Object])
    ], TeacherStudentHomeComponent);
    return TeacherStudentHomeComponent;
}());
exports.TeacherStudentHomeComponent = TeacherStudentHomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL3ByYWN0aWNlYnVkZHkvY29tcG9uZW50cy90ZWFjaGVyLXN0dWRlbnQtaG9tZS90ZWFjaGVyLXN0dWRlbnQtaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUFxQyxlQUFlLENBQUMsQ0FBQTtBQUNyRCwrQkFBNEIseUNBQXlDLENBQUMsQ0FBQTtBQUV0RSx1QkFBZ0Msc0JBQXNCLENBQUMsQ0FBQTtBQUV2RCx1QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN2RCxpQ0FBOEIsa0RBQWtELENBQUMsQ0FBQTtBQVVqRjtJQVVFLHFDQUFvQixLQUFxQixFQUMzQixlQUFnQyxFQUNoQyxPQUFlLEVBQ2YsTUFBYyxFQUNNLFVBQWUsRUFDcEIsS0FBVTtRQUxuQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUMzQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDTSxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQ3BCLFVBQUssR0FBTCxLQUFLLENBQUs7UUFFL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVSLDhDQUFRLEdBQVI7UUFBQSxpQkFTRTtRQU5ELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ25ELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBVTtZQUM5QyxLQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FB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bWV3b3Jrcy9wcmFjdGljZWJ1ZGR5L2NvbXBvbmVudHMvdGVhY2hlci1zdHVkZW50LWhvbWUvdGVhY2hlci1zdHVkZW50LWhvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIE9uSW5pdCwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kZWNvcmF0b3JzL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7TG9nU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9sb2cuc2VydmljZSc7XG5pbXBvcnQge0ZBTkNZQUxFUlQsIEFVRElPfSBmcm9tICcuLi8uLi8uLi9jb3JlL3Rva2Vucyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vcHJhY3RpY2VidWRkeS9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlJztcbmltcG9ydCB7U3R1ZGVudE1vZGVsfSBmcm9tICcuLi8uLi8uLi9wcmFjdGljZWJ1ZGR5L21vZGVscy9zdHVkZW50Lm1vZGVsJztcbmltcG9ydCB7UHJhY3RpY2VNb2RlbH0gZnJvbSAnLi4vLi4vLi4vcHJhY3RpY2VidWRkeS9tb2RlbHMvcHJhY3RpY2UubW9kZWwnO1xuXG5AQmFzZUNvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtdGVhY2hlci1zdHVkZW50LWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ3RlYWNoZXItc3R1ZGVudC1ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RlYWNoZXItc3R1ZGVudC1ob21lLmNzcyddIFxufSlcbmV4cG9ydCBjbGFzcyBUZWFjaGVyU3R1ZGVudEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcbiAgcHVibGljIHN0dWRlbnQ6IE9ic2VydmFibGU8YW55PjtcbiAgcHVibGljIHN0dWRlbnRwcmFjdGljZXMkOiBPYnNlcnZhYmxlPGFueT47XG4gIHByaXZhdGUgc3ViOiBhbnk7XG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBpZDogc3RyaW5nO1xuICBwdWJsaWMgaXNQbGF5aW5nOiBib29sZWFuO1xuICBwdWJsaWMgcGxheWVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgICAgICBASW5qZWN0KEZBTkNZQUxFUlQpIHByaXZhdGUgZmFuY3lhbGVydDogYW55LFxuICAgICAgICBASW5qZWN0KEFVRElPKSBwcml2YXRlIGF1ZGlvOiBhbnkgICAgICAgICAgICAgICAgIFxuICAgICAgICApIHsgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgdGhpcy5hdWRpby5UTlNQbGF5ZXIoKTsgICAgXG4gICAgICAgIH1cblxuIG5nT25Jbml0KCkge1xuICAgLy9nZXQgdGhlIHN0dWRlbnQncyBiYXNlIGluZm8gYW5kIHRoZSBzcGVjaWZpYyBwcmFjdGljZSB3ZSBhcmUgc2hvd2lnblxuIFxuICB0aGlzLm5hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zWyduYW1lJ11cbiAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczphbnkpID0+IHtcbiAgICAgIHRoaXMuaWQgPSBwYXJhbXNbJ2lkJ107XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmlkKVxuICAgICAgdGhpcy5zdHVkZW50cHJhY3RpY2VzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlQcmFjdGljZXModGhpcy5pZCk7XG4gICAgfSk7XG4gIH1cblxuIGdvSG9tZSgpIHtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xuICB9IFxuXG4gIGFkZENvbW1lbnQocHJhY3RpY2VJZCl7XG4gICAgIHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0LnNob3dUZXh0RmllbGQoJ0NvbW1lbnQnLCAnJywgbmV3IHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0QnV0dG9uKHsgbGFiZWw6ICdTYXZlJywgYWN0aW9uOiAodmFsdWU6IGFueSkgPT4geyBcbiAgICAgICAgY29uc29sZS5sb2coYFVzZXIgZW50ZXJlZCAke3ZhbHVlfWApOyBcbiAgICAgICAgaWYgKHZhbHVlLnRyaW0oKSAhPSBcIlwiKSB7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmFkZENvbW1lbnQocHJhY3RpY2VJZCx2YWx1ZSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydC5zaG93U3VjY2VzcygnU3VjY2VzcyEnLCAnQ29tbWVudCBzdWNjZXNzZnVsbHkgYWRkZWQnLCAnT0shJyk7ICAgIFxuICAgICAgICAgIH0sIChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0gfSksICdwZW4ucG5nJywgJyMxNTk4RjYnLCAnQWRkIGEgY29tbWVudCcsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgfVxuXG4gIGFkZEF3YXJkKHByYWN0aWNlSWQpe1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvc3RpY2tlci1nYWxsZXJ5XCIsIHByYWN0aWNlSWRdKTtcbiAgfVxuICBtYXJrQ29tcGxldGUocHJhY3RpY2VJZCl7XG4gICAgbGV0IGJ1dHRvbnMgPSBbXG4gICAgbmV3IHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0QnV0dG9uKHsgbGFiZWw6ICdObycsIGFjdGlvbjogKCkgPT4geyBjb25zb2xlLmxvZygnQ2FuY2VsJyk7IH0gfSksXG4gICAgbmV3IHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0QnV0dG9uKHsgbGFiZWw6ICdZZXMnLCBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UubWFya0NvbXBsZXRlKHByYWN0aWNlSWQpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0LnNob3dTdWNjZXNzKCdTdWNjZXNzIScsICdBcmNoaXZlZCEnLCAnT0shJyk7ICAgIFxuICAgICAgICAgIH0sIChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICB9IH0pXG4gICAgXTtcbiAgICB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydC5zaG93Q3VzdG9tQnV0dG9ucyhidXR0b25zLCAnYWxlcnQucG5nJywgJyMxNTk4RjYnLCAnQXJjaGl2ZT8nLCBgQXJjaGl2ZSB0aGlzIHByYWN0aWNlP2AsICdPaycpOyAgXG4gIH1cblxuICBwdWJsaWMgcGxheUF1ZGlvKGZpbGVwYXRoOiBzdHJpbmcsIGZpbGVUeXBlOiBzdHJpbmcpIHtcblxuICAgIHRyeSB7XG4gICAgICB2YXIgcGxheWVyT3B0aW9ucyA9IHtcbiAgICAgICAgYXVkaW9GaWxlOiBmaWxlcGF0aCxcblxuICAgICAgICBjb21wbGV0ZUNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy5wbGF5ZXIuZGlzcG9zZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmc9ZmFsc2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRElTUE9TRUQnKTtcbiAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgZGlzcG9zZVBsYXllcjogJyArIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZXJyb3JDYWxsYmFjazogKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgdGhpcy5pc1BsYXlpbmc9ZmFsc2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5mb0NhbGxiYWNrOiAoaW5mbykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwid2hhdDogXCIgKyBpbmZvKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5pc1BsYXlpbmc9dHJ1ZTtcblxuICAgICAgaWYgKGZpbGVUeXBlID09PSAnbG9jYWxGaWxlJykge1xuICAgICAgICB0aGlzLnBsYXllci5wbGF5RnJvbUZpbGUocGxheWVyT3B0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc1BsYXlpbmc9dHJ1ZTtcbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgdGhpcy5pc1BsYXlpbmc9ZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChmaWxlVHlwZSA9PT0gJ3JlbW90ZUZpbGUnKSB7XG4gICAgICAgIHRoaXMucGxheWVyLnBsYXlGcm9tVXJsKHBsYXllck9wdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNQbGF5aW5nPXRydWU7XG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIHRoaXMuaXNQbGF5aW5nPWZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgY29uc29sZS5sb2coZXgpO1xuICAgIH1cblxuICB9XG4gIFxuICBwdWJsaWMgcGxheVRyYWNrKHRyYWNrKXtcbiAgaWYgKCF0aGlzLmlzUGxheWluZykge1xuICAgIHRoaXMucGxheUF1ZGlvKHRyYWNrLCAncmVtb3RlRmlsZScpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdG9wVHJhY2soYXJncykge1xuICAgIGlmICh0aGlzLmlzUGxheWluZykge1xuICAgICAgdGhpcy5wbGF5ZXIuZGlzcG9zZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cblxuXG5cblxuICBcblxuIFxufSJdfQ==
