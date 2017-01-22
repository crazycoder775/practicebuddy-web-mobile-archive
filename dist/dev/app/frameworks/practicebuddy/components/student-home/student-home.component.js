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
var http_1 = require('@angular/http');
var base_component_1 = require('../../../core/decorators/base.component');
var tokens_1 = require('../../../core/tokens');
var router_1 = require('@angular/router');
var firebase_service_1 = require('../../../practicebuddy/services/firebase.service');
require('rxjs/add/operator/take');
require('rxjs/add/operator/map');
require("rxjs/Rx");
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var StudentHomeComponent = (function () {
    function StudentHomeComponent(route, firebaseService, _router, ngZone, timer, fancyalert, audio, fs, appsettings, loadingindicator, insomnia, http) {
        this.route = route;
        this.firebaseService = firebaseService;
        this._router = _router;
        this.ngZone = ngZone;
        this.timer = timer;
        this.fancyalert = fancyalert;
        this.audio = audio;
        this.fs = fs;
        this.appsettings = appsettings;
        this.loadingindicator = loadingindicator;
        this.insomnia = insomnia;
        this.http = http;
        this.teacheremail = "";
        this.minutes = 0;
        this.seconds = 0;
        this.recorderseconds = 0;
        this.isPlaying = false;
        this.mailgunUrl = "practicebuddy.mailgun.org";
        this.apiKey = "YXBpOmtleS00czhpbjNqY3pjNW1uMDNpYWZmejJmempxYzFjNWI5NQ==";
        this.minutes$ = new BehaviorSubject_1.BehaviorSubject(0);
        this.seconds$ = new BehaviorSubject_1.BehaviorSubject(0);
        this.player = new this.audio.TNSPlayer();
        this.recorder = new this.audio.TNSRecorder();
        this.recorderOptions = this.recorder.AudioRecorderOptions;
    }
    StudentHomeComponent.prototype.ngOnInit = function () {
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
                    }
                });
            });
        });
    };
    StudentHomeComponent.prototype.toggleRecord = function (args) {
        var _this = this;
        if (!this.isTiming) {
            this.fancyalert.TNSFancyAlert.showError('Oops!', "Please start your practice session timer before starting to record.", 'OK!');
        }
        else {
            if (!this.isRecording) {
                this.startRecorder();
                this.myRecordingTimer = this.timer.setInterval(function () {
                    if (_this.recorderseconds < 60 && _this.recorderseconds >= 0) {
                        ++_this.recorderseconds;
                        console.log(_this.recorderseconds);
                    }
                    else {
                        _this.recorderseconds = 0;
                        _this.stopRecorder();
                    }
                }, 1000);
            }
        }
    };
    StudentHomeComponent.prototype.startRecorder = function () {
        var _this = this;
        var audioFolder = this.fs.knownFolders.currentApp().getFolder("audio");
        var name = Math.random();
        this.recorderOptions = {
            filename: audioFolder.path + "/" + name + "." + (this.appsettings.android ? 'mp3' : 'caf'),
            infoCallback: function () {
                console.log();
            },
            errorCallback: function () {
                console.log();
                alert('Error recording.');
            }
        };
        console.log("recording");
        this.recorder.start(this.recorderOptions).then(function (result) {
            _this.isRecording = true;
        }, function (err) {
            _this.isRecording = false;
            alert(err);
        });
    };
    StudentHomeComponent.prototype.stopRecorder = function () {
        var _this = this;
        this.timer.clearInterval(this.myRecordingTimer);
        if (this.isRecording) {
            this.recorder.stop(this.recorderOptions).then(function () {
                _this.isRecording = false;
                _this.loadingindicator.show({ message: 'Saving your recording!' });
                _this.firebaseService.saveRecording(_this.recorderOptions.filename).then(function (uploadedFile) {
                    _this.loadingindicator.hide();
                    _this.appsettings.setString('fileName', uploadedFile.name);
                }, function (error) {
                    _this.loadingindicator.hide();
                    alert('File upload error: ' + error);
                });
            }, function (ex) {
                console.log(ex);
                _this.isRecording = true;
            });
        }
        this.isRecording = false;
    };
    StudentHomeComponent.prototype.startTimer = function () {
        var _this = this;
        this.insomnia.keepAwake().then(function () { });
        if (!this.isTiming) {
            this.isTiming = true;
            this.myTimer = this.timer.setInterval(function () {
                if (_this.seconds < 60 && _this.seconds >= 0) {
                    ++_this.seconds;
                    _this.ngZone.run(function () {
                        _this.seconds$.next(_this.seconds);
                    });
                }
                else {
                    _this.seconds = 0;
                    ++_this.minutes;
                    _this.ngZone.run(function () {
                        _this.minutes$.next(_this.minutes);
                        if (_this.minutes == _this.practicelength) {
                            _this.stopTimer();
                            ++_this.practicescompleted;
                            if (_this.practicesrequired == _this.practicescompleted) {
                                _this.status = "done";
                                _this.practicescompleted = 0;
                            }
                            var track = _this.appsettings.getString('fileName');
                            _this.firebaseService.getDownloadUrl(track).then(function (downloadUrl) {
                                _this.firebaseService.writePractice(_this.id, _this.name, _this.practicelength, _this.teacheremail, downloadUrl).then(function (result) {
                                    _this.testForDone(_this.id, _this.status);
                                }, function (error) {
                                    alert(error);
                                });
                            });
                        }
                    });
                }
            }, 1000);
        }
    };
    StudentHomeComponent.prototype.resetTimer = function () {
        this.isTiming = false;
        this.isPaused = false;
        this.stopTimer();
    };
    StudentHomeComponent.prototype.goHome = function () {
        this._router.navigate(["/home"]);
    };
    StudentHomeComponent.prototype.sendEmail = function (mode) {
        if (this.teacheremail) {
            var headers = new http_1.Headers({
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + this.apiKey
            });
            var options = new http_1.RequestOptions({ headers: headers });
            if (mode == "goal") {
                this.subject = "Your student just completed a goal on the Practice Buddy app!";
                this.message = "Your student, " + this.name + ", completed a goal on the Practice Buddy app, and has qualified for a reward: " + this.reward + ". Login to the app to view the practice details and give feedback!";
            }
            else {
                this.subject = "Your student just completed a session on the Practice Buddy app!";
                this.message = "Your student, " + this.name + ", just logged a practice on the Practice Buddy app. Login to the app to view the practice details and give feedback!";
            }
            var body = "from=yourfriends@practicebuddyapp.com&to=" + this.teacheremail + "&subject=" + this.subject + "&text=" + this.message;
            this.http.post("https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages", body, options)
                .map(function (result) { return result.json(); })
                .do(function (result) { return console.log("RESULT: ", JSON.stringify(result)); })
                .subscribe(function (result) {
                console.log("SENT!");
            }, function (error) {
                console.log(error);
            });
        }
    };
    StudentHomeComponent.prototype.pauseTimer = function () {
        this.isTiming = false;
        this.isPaused = true;
        this.timer.clearInterval(this.myTimer);
    };
    StudentHomeComponent.prototype.stopTimer = function () {
        var _this = this;
        this.insomnia.allowSleepAgain().then(function () { });
        this.isTiming = false;
        this.isPaused = false;
        this.timer.clearInterval(this.myTimer);
        this.minutes = 0;
        this.seconds = 0;
        this.ngZone.run(function () {
            _this.seconds$.next(_this.seconds);
            _this.minutes$.next(_this.minutes);
        });
    };
    StudentHomeComponent.prototype.testForDone = function (id, status) {
        var msg;
        if (this.status == "done") {
            msg = "Congratulations! You completed a practice goal!";
            this.sendEmail("goal");
            this.firebaseService.clearPracticesCompleted(id);
        }
        else {
            msg = "Congratulations! You completed a practice session!";
            if (this.notifyAll) {
                this.sendEmail("session");
                this.firebaseService.incrementPracticesCompleted(this.id, this.practicescompleted);
            }
        }
        this.fancyalert.TNSFancyAlert.showSuccess('Success!', msg, 'OK!');
    };
    StudentHomeComponent.prototype.ngOnDestroy = function () {
        this.stopTimer();
        this.stopRecorder();
        if (this.sub)
            this.sub.unsubscribe();
        if (this.player)
            this.player.dispose();
    };
    StudentHomeComponent = __decorate([
        base_component_1.BaseComponent({
            moduleId: module.id,
            selector: 'sd-student-home',
            templateUrl: 'student-home.component.html',
            styleUrls: ['student-home.css']
        }),
        core_1.Injectable(),
        __param(4, core_1.Inject(tokens_1.TIMER)),
        __param(5, core_1.Inject(tokens_1.FANCYALERT)),
        __param(6, core_1.Inject(tokens_1.AUDIO)),
        __param(7, core_1.Inject(tokens_1.FILE_SYSTEM)),
        __param(8, core_1.Inject(tokens_1.APPSETTINGS)),
        __param(9, core_1.Inject(tokens_1.LOADER)),
        __param(10, core_1.Inject(tokens_1.INSOMNIA)), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, firebase_service_1.FirebaseService, router_1.Router, core_1.NgZone, Object, Object, Object, Object, Object, Object, Object, http_1.Http])
    ], StudentHomeComponent);
    return StudentHomeComponent;
}());
exports.StudentHomeComponent = StudentHomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL3ByYWN0aWNlYnVkZHkvY29tcG9uZW50cy9zdHVkZW50LWhvbWUvc3R1ZGVudC1ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUJBQThELGVBQWUsQ0FBQyxDQUFBO0FBQzlFLHFCQUE4QyxlQUFlLENBQUMsQ0FBQTtBQUM5RCwrQkFBOEIseUNBQXlDLENBQUMsQ0FBQTtBQUN4RSx1QkFBcUYsc0JBQXNCLENBQUMsQ0FBQTtBQUM1Ryx1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCxpQ0FBZ0Msa0RBQWtELENBQUMsQ0FBQTtBQUVuRixRQUFPLHdCQUF3QixDQUFDLENBQUE7QUFDaEMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFFakIsZ0NBQWdDLHNCQUFzQixDQUFDLENBQUE7QUFTdkQ7SUEyQ0UsOEJBQ1UsS0FBcUIsRUFDckIsZUFBZ0MsRUFDaEMsT0FBZSxFQUNmLE1BQWMsRUFDQyxLQUFVLEVBQ0wsVUFBZSxFQUNwQixLQUFVLEVBQ0osRUFBTyxFQUNQLFdBQWdCLEVBQ3JCLGdCQUFxQixFQUNuQixRQUFhLEVBQy9CLElBQVU7UUFYVixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDQyxVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQ0wsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUNwQixVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQ0osT0FBRSxHQUFGLEVBQUUsQ0FBSztRQUNQLGdCQUFXLEdBQVgsV0FBVyxDQUFLO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBSztRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLFNBQUksR0FBSixJQUFJLENBQU07UUEzQ3BCLGlCQUFZ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UjtJQXlUYiwyQkFBQztBQUFELENBeFRBLEFBd1RDLElBQUE7QUF4VFksNEJBQW9CLHVCQXdUaEMsQ0FBQSIsImZpbGUiOiJhcHAvZnJhbWV3b3Jrcy9wcmFjdGljZWJ1ZGR5L2NvbXBvbmVudHMvc3R1ZGVudC1ob21lL3N0dWRlbnQtaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9uSW5pdCwgT25EZXN0cm95LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kZWNvcmF0b3JzL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IFRJTUVSLCBGQU5DWUFMRVJULCBBVURJTywgRklMRV9TWVNURU0sIEFQUFNFVFRJTkdTLCBMT0FERVIsIElOU09NTklBIH0gZnJvbSAnLi4vLi4vLi4vY29yZS90b2tlbnMnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9wcmFjdGljZWJ1ZGR5L3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3R1ZGVudE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vcHJhY3RpY2VidWRkeS9tb2RlbHMvc3R1ZGVudC5tb2RlbCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3Rha2UnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IFwicnhqcy9SeFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcblxuQEJhc2VDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLXN0dWRlbnQtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnc3R1ZGVudC1ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0dWRlbnQtaG9tZS5jc3MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHVkZW50SG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgc3R1ZGVudDogT2JzZXJ2YWJsZTxhbnk+O1xuICBwdWJsaWMgZWRpdGVkU3R1ZGVudDogU3R1ZGVudE1vZGVsO1xuICBwdWJsaWMgbXlTdHVkZW50OiBTdHVkZW50TW9kZWw7XG4gIGlkOiBhbnk7XG4gIHByaXZhdGUgc3ViOiBhbnk7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJhY3RpY2VzcmVxdWlyZWQ6IG51bWJlcjtcbiAgcHJhY3RpY2VsZW5ndGg6IG51bWJlcjtcbiAgcHJhY3RpY2VzY29tcGxldGVkOiBudW1iZXI7XG4gIGluc3RydW1lbnQ6IG51bWJlcjtcbiAgdGVhY2hlcmVtYWlsOiBzdHJpbmcgPSBcIlwiO1xuICByZXdhcmQ6IHN0cmluZztcbiAgbm90aWZ5QWxsOiBib29sZWFuO1xuICAvL3RpbWVyc1xuICBpc1RpbWluZzogYm9vbGVhbjtcbiAgaXNQYXVzZWQ6IGJvb2xlYW47XG4gIGlzUmVjb3JkaW5nOiBib29sZWFuO1xuICBtaW51dGVzOiBudW1iZXIgPSAwO1xuICBzZWNvbmRzOiBudW1iZXIgPSAwO1xuICBwcm9ncmVzczogc3RyaW5nO1xuICBteVRpbWVyOiBhbnk7XG4gIC8vZm9yIHJlY29yZGVyXG4gIG15UmVjb3JkaW5nVGltZXI6IGFueTtcbiAgcmVjb3JkZXJzZWNvbmRzOiBudW1iZXIgPSAwO1xuICAvL2VtYWlsc1xuICBzdWJqZWN0OiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgc3RhdHVzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBpc1BsYXlpbmc6IEJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBwbGF5ZXI6IGFueTtcbiAgcHJpdmF0ZSBjdXJyZW50VXJsOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVjb3JkZXI6IGFueTtcbiAgcHJpdmF0ZSByZWNvcmRlck9wdGlvbnM6IGFueTtcbiAgLy9tYWlsXG4gIHByaXZhdGUgbWFpbGd1blVybDogc3RyaW5nID0gXCJwcmFjdGljZWJ1ZGR5Lm1haWxndW4ub3JnXCI7XG4gIHByaXZhdGUgYXBpS2V5OiBzdHJpbmcgPSBcIllYQnBPbXRsZVMwMGN6aHBiak5xWTNwak5XMXVNRE5wWVdabWVqSm1lbXB4WXpGak5XSTVOUT09XCI7XG4gIC8vdGltZXJcbiAgcHVibGljIG1pbnV0ZXMkOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoMCk7XG4gIHB1YmxpYyBzZWNvbmRzJDogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBASW5qZWN0KFRJTUVSKSBwcml2YXRlIHRpbWVyOiBhbnksXG4gICAgQEluamVjdChGQU5DWUFMRVJUKSBwcml2YXRlIGZhbmN5YWxlcnQ6IGFueSxcbiAgICBASW5qZWN0KEFVRElPKSBwcml2YXRlIGF1ZGlvOiBhbnksXG4gICAgQEluamVjdChGSUxFX1NZU1RFTSkgcHJpdmF0ZSBmczogYW55LFxuICAgIEBJbmplY3QoQVBQU0VUVElOR1MpIHByaXZhdGUgYXBwc2V0dGluZ3M6IGFueSxcbiAgICBASW5qZWN0KExPQURFUikgcHJpdmF0ZSBsb2FkaW5naW5kaWNhdG9yOiBhbnksXG4gICAgQEluamVjdChJTlNPTU5JQSkgcHJpdmF0ZSBpbnNvbW5pYTogYW55LFxuICAgIHByaXZhdGUgaHR0cDogSHR0cFxuICApIHtcbiAgICB0aGlzLnBsYXllciA9IG5ldyB0aGlzLmF1ZGlvLlROU1BsYXllcigpO1xuICAgIHRoaXMucmVjb3JkZXIgPSBuZXcgdGhpcy5hdWRpby5UTlNSZWNvcmRlcigpO1xuICAgIHRoaXMucmVjb3JkZXJPcHRpb25zID0gdGhpcy5yZWNvcmRlci5BdWRpb1JlY29yZGVyT3B0aW9ucztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuaWQgPSBwYXJhbXNbJ2lkJ107XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15U3R1ZGVudCh0aGlzLmlkKS5zdWJzY3JpYmUoKHN0dWRlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBzdHVkZW50KSB7XG4gICAgICAgICAgICAgIC8vcHJvcHNcbiAgICAgICAgICAgICAgaWYgKHByb3AgPT09IFwiSWRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSBzdHVkZW50W3Byb3BdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwcm9wID09PSBcIk5hbWVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IHN0dWRlbnRbcHJvcF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHByb3AgPT09IFwiUHJhY3RpY2VzUmVxdWlyZWRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucHJhY3RpY2VzcmVxdWlyZWQgPSBzdHVkZW50W3Byb3BdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwcm9wID09PSBcIlByYWN0aWNlc0NvbXBsZXRlZFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmFjdGljZXNjb21wbGV0ZWQgPSBzdHVkZW50W3Byb3BdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwcm9wID09PSBcIlByYWN0aWNlTGVuZ3RoXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByYWN0aWNlbGVuZ3RoID0gc3R1ZGVudFtwcm9wXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJSZXdhcmRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucmV3YXJkID0gc3R1ZGVudFtwcm9wXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJJbnN0cnVtZW50XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RydW1lbnQgPSBzdHVkZW50W3Byb3BdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwcm9wID09PSBcIlRlYWNoZXJFbWFpbFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZWFjaGVyZW1haWwgPSBzdHVkZW50W3Byb3BdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwcm9wID09PSBcIk5vdGlmeUFsbFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlBbGwgPSBzdHVkZW50W3Byb3BdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICB0b2dnbGVSZWNvcmQoYXJncykge1xuICAgIGlmICghdGhpcy5pc1RpbWluZykge1xuICAgICAgICB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydC5zaG93RXJyb3IoJ09vcHMhJywgXCJQbGVhc2Ugc3RhcnQgeW91ciBwcmFjdGljZSBzZXNzaW9uIHRpbWVyIGJlZm9yZSBzdGFydGluZyB0byByZWNvcmQuXCIsICdPSyEnKTtcbiAgICAgIH1cbiAgICBlbHNleyAgIFxuICAgICAgaWYgKCF0aGlzLmlzUmVjb3JkaW5nKSB7XG4gICAgICAvL3N0YXJ0IHRoZSByZWNvcmRlclxuICAgICAgdGhpcy5zdGFydFJlY29yZGVyKCk7XG4gICAgICAvL3N0YXJ0IHRoZSB0aW1lclxuICAgICAgdGhpcy5teVJlY29yZGluZ1RpbWVyID0gdGhpcy50aW1lci5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnJlY29yZGVyc2Vjb25kcyA8IDYwICYmIHRoaXMucmVjb3JkZXJzZWNvbmRzID49IDApIHtcbiAgICAgICAgICAgICAgKyt0aGlzLnJlY29yZGVyc2Vjb25kcztcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZWNvcmRlcnNlY29uZHMpICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICB0aGlzLnJlY29yZGVyc2Vjb25kcyA9IDA7XG4gICAgICAgICAgdGhpcy5zdG9wUmVjb3JkZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwMCk7ICAgIFxuICAgIH1cbiAgfVxufVxuXG4gIHN0YXJ0UmVjb3JkZXIoKXtcbiAgICBsZXQgYXVkaW9Gb2xkZXIgPSB0aGlzLmZzLmtub3duRm9sZGVycy5jdXJyZW50QXBwKCkuZ2V0Rm9sZGVyKFwiYXVkaW9cIik7XG4gICAgICAvL2dpdmUgdGhlIGZpbGUgbmFtZSBhIHJhbmRvbSB2YWx1ZVxuICAgICAgbGV0IG5hbWUgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgXG4gICAgICB0aGlzLnJlY29yZGVyT3B0aW9ucyA9IHtcblxuICAgICAgICBmaWxlbmFtZTogYCR7YXVkaW9Gb2xkZXIucGF0aH0vJHtuYW1lfS4ke3RoaXMuYXBwc2V0dGluZ3MuYW5kcm9pZCA/ICdtcDMnIDogJ2NhZid9YCxcblxuICAgICAgICBpbmZvQ2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGVycm9yQ2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygpO1xuICAgICAgICAgIGFsZXJ0KCdFcnJvciByZWNvcmRpbmcuJyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcInJlY29yZGluZ1wiKVxuICAgICAgICAgIHRoaXMucmVjb3JkZXIuc3RhcnQodGhpcy5yZWNvcmRlck9wdGlvbnMpLnRoZW4oKHJlc3VsdCkgPT4geyAgICAgICAgICBcbiAgICAgICAgICB0aGlzLmlzUmVjb3JkaW5nID0gdHJ1ZTtcbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgIHRoaXMuaXNSZWNvcmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICB9KTtcbiAgICAgIFxuICB9XG5cbiAgc3RvcFJlY29yZGVyKCl7XG4gICAgdGhpcy50aW1lci5jbGVhckludGVydmFsKHRoaXMubXlSZWNvcmRpbmdUaW1lcik7XG4gICAgaWYgKHRoaXMuaXNSZWNvcmRpbmcpIHtcbiAgICAgIHRoaXMucmVjb3JkZXIuc3RvcCh0aGlzLnJlY29yZGVyT3B0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNSZWNvcmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2FkaW5naW5kaWNhdG9yLnNob3coeyBtZXNzYWdlOiAnU2F2aW5nIHlvdXIgcmVjb3JkaW5nIScgfSk7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnNhdmVSZWNvcmRpbmcodGhpcy5yZWNvcmRlck9wdGlvbnMuZmlsZW5hbWUpLnRoZW4oKHVwbG9hZGVkRmlsZTogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5naW5kaWNhdG9yLmhpZGUoKTtcbiAgICAgICAgICB0aGlzLmFwcHNldHRpbmdzLnNldFN0cmluZygnZmlsZU5hbWUnLCB1cGxvYWRlZEZpbGUubmFtZSk7XG4gICAgICAgIH0sIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5naW5kaWNhdG9yLmhpZGUoKTtcbiAgICAgICAgICBhbGVydCgnRmlsZSB1cGxvYWQgZXJyb3I6ICcgKyBlcnJvcik7XG4gICAgICAgIH0pOyAgICAgIFxuICAgICAgfSwgKGV4KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV4KTtcbiAgICAgICAgdGhpcy5pc1JlY29yZGluZyA9IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgdGhpcy5pc1JlY29yZGluZyA9IGZhbHNlOyAgICBcbn1cblxuXG4gIHN0YXJ0VGltZXIoKSB7XG4gICAgLy9pZiBpdCdzIG5vdCBhbHJlYWR5IHRpbWluZ1xuICAgIC8va2VlcCBhd2FrZVxuICAgIHRoaXMuaW5zb21uaWEua2VlcEF3YWtlKCkudGhlbihmdW5jdGlvbigpIHt9KTtcblxuICAgIGlmICghdGhpcy5pc1RpbWluZykge1xuICAgICAgICB0aGlzLmlzVGltaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5teVRpbWVyID0gdGhpcy50aW1lci5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuc2Vjb25kcyA8IDYwICYmIHRoaXMuc2Vjb25kcyA+PSAwKSB7XG4gICAgICAgICAgICArK3RoaXMuc2Vjb25kcztcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2Vjb25kcyQubmV4dCh0aGlzLnNlY29uZHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRzID0gMDtcbiAgICAgICAgICAgICsrdGhpcy5taW51dGVzO1xuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5taW51dGVzJC5uZXh0KHRoaXMubWludXRlcyk7XG4gICAgICAgICAgICAgIC8vd2hlbiB0aGlzLm1pbnV0ZXMgaXMgdGhlIHNhbWUgYXMgdGhlIHN0dWRlbnQgbWludXRlcywgc3RvcCBldmVyeXRoaW5nIGFuZCB3cml0ZSB0byBkYi5cbiAgICAgICAgICAgICAgaWYgKHRoaXMubWludXRlcyA9PSB0aGlzLnByYWN0aWNlbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy9zdG9wIHRpbWVyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICAvL2luY3JlbWVudCBwcmFjdGljZXNjb21wbGV0ZWQsIHJlc2V0IGlmIHJlcXVpcmVkID0gY29tcGxldGVkXG4gICAgICAgICAgICAgICAgKyt0aGlzLnByYWN0aWNlc2NvbXBsZXRlZDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZih0aGlzLnByYWN0aWNlc3JlcXVpcmVkID09IHRoaXMucHJhY3RpY2VzY29tcGxldGVkKXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gXCJkb25lXCI7XG4gICAgICAgICAgICAgICAgICB0aGlzLnByYWN0aWNlc2NvbXBsZXRlZCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCB0cmFjayA9IHRoaXMuYXBwc2V0dGluZ3MuZ2V0U3RyaW5nKCdmaWxlTmFtZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldERvd25sb2FkVXJsKHRyYWNrKS50aGVuKChkb3dubG9hZFVybDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS53cml0ZVByYWN0aWNlKHRoaXMuaWQsdGhpcy5uYW1lLHRoaXMucHJhY3RpY2VsZW5ndGgsIHRoaXMudGVhY2hlcmVtYWlsLCBkb3dubG9hZFVybCkudGhlbigocmVzdWx0OmFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlc3RGb3JEb25lKHRoaXMuaWQsIHRoaXMuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgIH0sIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH1cbiAgICBcbiAgfVxuXG4gIHJlc2V0VGltZXIoKSB7XG4gICAgdGhpcy5pc1RpbWluZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0b3BUaW1lcigpO1xuICB9XG5cbiAgZ29Ib21lKCkge1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvaG9tZVwiXSk7XG4gIH1cblxuXG4gIHNlbmRFbWFpbChtb2RlKSB7XG4gICAgaWYgKHRoaXMudGVhY2hlcmVtYWlsKSB7XG4gICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKFxuICAgICAgICB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCYXNpYyBcIiArIHRoaXMuYXBpS2V5XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgICBpZihtb2RlID09IFwiZ29hbFwiKVxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdWJqZWN0ID0gXCJZb3VyIHN0dWRlbnQganVzdCBjb21wbGV0ZWQgYSBnb2FsIG9uIHRoZSBQcmFjdGljZSBCdWRkeSBhcHAhXCI7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJZb3VyIHN0dWRlbnQsIFwiK3RoaXMubmFtZStcIiwgY29tcGxldGVkIGEgZ29hbCBvbiB0aGUgUHJhY3RpY2UgQnVkZHkgYXBwLCBhbmQgaGFzIHF1YWxpZmllZCBmb3IgYSByZXdhcmQ6IFwiK3RoaXMucmV3YXJkK1wiLiBMb2dpbiB0byB0aGUgYXBwIHRvIHZpZXcgdGhlIHByYWN0aWNlIGRldGFpbHMgYW5kIGdpdmUgZmVlZGJhY2shXCI7XG4gICAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3ViamVjdCA9IFwiWW91ciBzdHVkZW50IGp1c3QgY29tcGxldGVkIGEgc2Vzc2lvbiBvbiB0aGUgUHJhY3RpY2UgQnVkZHkgYXBwIVwiOyAgICAgICBcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIllvdXIgc3R1ZGVudCwgXCIrdGhpcy5uYW1lK1wiLCBqdXN0IGxvZ2dlZCBhIHByYWN0aWNlIG9uIHRoZSBQcmFjdGljZSBCdWRkeSBhcHAuIExvZ2luIHRvIHRoZSBhcHAgdG8gdmlldyB0aGUgcHJhY3RpY2UgZGV0YWlscyBhbmQgZ2l2ZSBmZWVkYmFjayFcIjtcbiAgICAgIH1cbiAgICAgIGxldCBib2R5ID0gXCJmcm9tPXlvdXJmcmllbmRzQHByYWN0aWNlYnVkZHlhcHAuY29tJnRvPVwiICsgdGhpcy50ZWFjaGVyZW1haWwgKyBcIiZzdWJqZWN0PVwiICsgdGhpcy5zdWJqZWN0ICsgXCImdGV4dD1cIiArIHRoaXMubWVzc2FnZTtcbiAgICAgIHRoaXMuaHR0cC5wb3N0KFwiaHR0cHM6Ly9hcGkubWFpbGd1bi5uZXQvdjMvXCIgKyB0aGlzLm1haWxndW5VcmwgKyBcIi9tZXNzYWdlc1wiLCBib2R5LCBvcHRpb25zKVxuICAgICAgICAubWFwKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKVxuICAgICAgICAuZG8ocmVzdWx0ID0+IGNvbnNvbGUubG9nKFwiUkVTVUxUOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSkpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNFTlQhXCIpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcGF1c2VUaW1lcigpIHtcbiAgICB0aGlzLmlzVGltaW5nID0gZmFsc2U7XG4gICAgdGhpcy5pc1BhdXNlZCA9IHRydWU7XG4gICAgdGhpcy50aW1lci5jbGVhckludGVydmFsKHRoaXMubXlUaW1lcik7XG4gIH1cblxuICBzdG9wVGltZXIoKSB7XG4gICAgdGhpcy5pbnNvbW5pYS5hbGxvd1NsZWVwQWdhaW4oKS50aGVuKGZ1bmN0aW9uKCkge30pO1xuICAgICAgLy90b2RvIC0gd2FybiBpZiB5b3UncmUgc3RvcHBpbmcgZWFybHlcbiAgICAgIHRoaXMuaXNUaW1pbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMudGltZXIuY2xlYXJJbnRlcnZhbCh0aGlzLm15VGltZXIpO1xuICAgICAgdGhpcy5taW51dGVzID0gMDtcbiAgICAgIHRoaXMuc2Vjb25kcyA9IDA7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNlY29uZHMkLm5leHQodGhpcy5zZWNvbmRzKTtcbiAgICAgICAgdGhpcy5taW51dGVzJC5uZXh0KHRoaXMubWludXRlcyk7XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgdGVzdEZvckRvbmUoaWQ6IHN0cmluZywgc3RhdHVzOiBzdHJpbmcpIHtcbiAgICB2YXIgbXNnO1xuICAgIGlmICh0aGlzLnN0YXR1cyA9PSBcImRvbmVcIikge1xuICAgICAgLy9yZXNldCBwcmFjdGljZXNDb21wbGV0ZWQsIHNob3cgYWxlcnQsIGFuZCBzZW5kIGVtYWlsXG4gICAgICBtc2cgPSBcIkNvbmdyYXR1bGF0aW9ucyEgWW91IGNvbXBsZXRlZCBhIHByYWN0aWNlIGdvYWwhXCI7XG4gICAgICB0aGlzLnNlbmRFbWFpbChcImdvYWxcIik7XG4gICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5jbGVhclByYWN0aWNlc0NvbXBsZXRlZChpZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbXNnID0gXCJDb25ncmF0dWxhdGlvbnMhIFlvdSBjb21wbGV0ZWQgYSBwcmFjdGljZSBzZXNzaW9uIVwiO1xuICAgICAgaWYgKHRoaXMubm90aWZ5QWxsKXtcbiAgICAgICAgdGhpcy5zZW5kRW1haWwoXCJzZXNzaW9uXCIpO1xuICAgICAgICAvL2luY3JlbWVudCBwcmFjdGljZXMgY29tcGxldGVkXG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmluY3JlbWVudFByYWN0aWNlc0NvbXBsZXRlZCh0aGlzLmlkLCB0aGlzLnByYWN0aWNlc2NvbXBsZXRlZCk7ICAgICAgICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydC5zaG93U3VjY2VzcygnU3VjY2VzcyEnLCBtc2csICdPSyEnKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICAgIHRoaXMuc3RvcFJlY29yZGVyKCk7XG4gICAgICBpZiAodGhpcy5zdWIpIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICBpZiAodGhpcy5wbGF5ZXIpIHRoaXMucGxheWVyLmRpc3Bvc2UoKTtcbiAgfVxuXG5cbn0iXX0=
