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
var http_1 = require("@angular/http");
var base_component_1 = require("../../../core/decorators/base.component");
var utils_service_1 = require("../../../core/services/utils.service");
var tokens_1 = require("../../../core/tokens");
var router_1 = require("@angular/router");
var firebase_service_1 = require("../../../practicebuddy/services/firebase.service");
require("rxjs/add/operator/take");
require("rxjs/add/operator/map");
require("rxjs/Rx");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var StudentHomeComponent = (function () {
    function StudentHomeComponent(route, firebaseService, _router, ngZone, utils, timer, fancyalert, audio, fs, appsettings, loadingindicator, insomnia, http) {
        this.route = route;
        this.firebaseService = firebaseService;
        this._router = _router;
        this.ngZone = ngZone;
        this.utils = utils;
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
    StudentHomeComponent.prototype.goToHistory = function (id) {
        this._router.navigate(["/student-history", id]);
    };
    StudentHomeComponent.prototype.editStudent = function (id) {
        this._router.navigate(["/student-admin", id]);
    };
    StudentHomeComponent.prototype.deleteStudent = function (id) {
        var _this = this;
        var buttons = [
            new this.fancyalert.TNSFancyAlertButton({ label: 'No', action: function () { console.log('Cancel'); } }),
            new this.fancyalert.TNSFancyAlertButton({ label: 'Yes', action: function () {
                    _this.firebaseService.deleteStudent(id)
                        .then(function () {
                        _this.fancyalert.TNSFancyAlert.showSuccess('Success!', 'Student successfully deleted', 'OK!');
                        _this._router.navigate([""]);
                    }, function (err) {
                        alert(err);
                    });
                } })
        ];
        this.fancyalert.TNSFancyAlert.showCustomButtons(buttons, 'alert.png', '#F28600', 'Delete?', "Are you sure you want to delete this student?.", 'Ok');
    };
    StudentHomeComponent.prototype.toggleRecord = function (args) {
        var _this = this;
        if (!this.isTiming) {
            this.fancyalert.TNSFancyAlert.showError('Oops!', "Please start your practice session timer before starting to record.", 'OK!');
        }
        else {
            if (!this.isRecording) {
                this.recorderOptions = {
                    filename: this.utils.documentsPath("recording-" + Date.now() + ".m4a"),
                    infoCallback: function () {
                        console.log();
                    },
                    errorCallback: function () {
                        console.log();
                        alert('Error recording.');
                    }
                };
                this.startRecorder(this.recorderOptions);
                this.myRecordingTimer = this.timer.setInterval(function () {
                    if (_this.recorderseconds < 60 && _this.recorderseconds >= 0) {
                        ++_this.recorderseconds;
                    }
                    else {
                        _this.recorderseconds = 0;
                        _this.stopRecorder(_this.recorderOptions);
                    }
                }, 1000);
            }
        }
    };
    StudentHomeComponent.prototype.startRecorder = function (options) {
        var _this = this;
        console.log("start recording here");
        this.recorder.start(options).then(function (result) {
            _this.isRecording = true;
        }, function (err) {
            _this.isRecording = false;
            alert(err);
        });
    };
    StudentHomeComponent.prototype.stopRecorder = function (options) {
        var _this = this;
        this.timer.clearInterval(this.myRecordingTimer);
        if (this.isRecording) {
            this.recorder.stop(options).then(function () {
                _this.isRecording = false;
                _this.loadingindicator.show({ message: 'Saving your recording!' });
                console.log(options.filename);
                _this.firebaseService.saveRecording(options.filename).then(function (uploadedFile) {
                    _this.loadingindicator.hide();
                    var practiceId = _this.appsettings.getString('practiceId');
                    var track = uploadedFile.name;
                    _this.firebaseService.getDownloadUrl(track).then(function (downloadUrl) {
                        if (practiceId != null) {
                            _this.firebaseService.addPracticeTrack(practiceId, downloadUrl).then(function (result) {
                                console.log("practice written");
                            }, function (error) {
                                alert(error);
                            });
                        }
                        else {
                            _this.appsettings.setString('downloadUrl', downloadUrl);
                        }
                    });
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
        this.appsettings.clear();
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
                            var track = _this.appsettings.getString('downloadUrl');
                            _this.firebaseService.writePractice(_this.id, _this.name, _this.practicelength, _this.teacheremail, track).then(function (result) {
                                _this.appsettings.setString('practiceId', result.key);
                                _this.testForDone(_this.id, _this.status);
                            }, function (error) {
                                alert(error);
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
        this._router.navigate([""]);
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
            }
            this.firebaseService.incrementPracticesCompleted(this.id, this.practicescompleted);
        }
        this.fancyalert.TNSFancyAlert.showSuccess('Success!', msg, 'OK!');
    };
    StudentHomeComponent.prototype.ngOnDestroy = function () {
        this.stopTimer();
        this.stopRecorder(this.recorderOptions);
        if (this.sub)
            this.sub.unsubscribe();
        if (this.player)
            this.player.dispose();
    };
    return StudentHomeComponent;
}());
StudentHomeComponent = __decorate([
    base_component_1.BaseComponent({
        moduleId: module.id,
        selector: 'sd-student-home',
        templateUrl: 'student-home.component.html',
        styleUrls: ['student-home.css']
    }),
    core_1.Injectable(),
    __param(5, core_1.Inject(tokens_1.TIMER)),
    __param(6, core_1.Inject(tokens_1.FANCYALERT)),
    __param(7, core_1.Inject(tokens_1.AUDIO)),
    __param(8, core_1.Inject(tokens_1.FILE_SYSTEM)),
    __param(9, core_1.Inject(tokens_1.APPSETTINGS)),
    __param(10, core_1.Inject(tokens_1.LOADER)),
    __param(11, core_1.Inject(tokens_1.INSOMNIA)),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        firebase_service_1.FirebaseService,
        router_1.Router,
        core_1.NgZone,
        utils_service_1.UtilsService, Object, Object, Object, Object, Object, Object, Object, http_1.Http])
], StudentHomeComponent);
exports.StudentHomeComponent = StudentHomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudC1ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0dWRlbnQtaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUE4RTtBQUM5RSxzQ0FBOEQ7QUFDOUQsMEVBQXdFO0FBQ3hFLHNFQUFvRTtBQUNwRSwrQ0FBNEc7QUFDNUcsMENBQXlEO0FBQ3pELHFGQUFtRjtBQUVuRixrQ0FBZ0M7QUFDaEMsaUNBQStCO0FBQy9CLG1CQUFpQjtBQUVqQix3REFBdUQ7QUFTdkQsSUFBYSxvQkFBb0I7SUE0Qy9CLDhCQUNVLEtBQXFCLEVBQ3JCLGVBQWdDLEVBQ2hDLE9BQWUsRUFDZixNQUFjLEVBQ2QsS0FBbUIsRUFDSixLQUFVLEVBQ0wsVUFBZSxFQUNwQixLQUFVLEVBQ0osRUFBTyxFQUNQLFdBQWdCLEVBQ3JCLGdCQUFxQixFQUNuQixRQUFhLEVBQy9CLElBQVU7UUFaVixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ0osVUFBSyxHQUFMLEtBQUssQ0FBSztRQUNMLGVBQVUsR0FBVixVQUFVLENBQUs7UUFDcEIsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUNKLE9BQUUsR0FBRixFQUFFLENBQUs7UUFDUCxnQkFBVyxHQUFYLFdBQVcsQ0FBSztRQUNyQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQUs7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBNUNwQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQU8xQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFLcEIsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFN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LENBQUM7SUFHSCwyQkFBQztBQUFELENBQUMsQUE3WEQsSUE2WEM7QUE3WFksb0JBQW9CO0lBUGhDLDhCQUFhLENBQUM7UUFDYixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsNkJBQTZCO1FBQzFDLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO0tBQ2hDLENBQUM7SUFDRCxpQkFBVSxFQUFFO0lBbURSLFdBQUEsYUFBTSxDQUFDLGNBQUssQ0FBQyxDQUFBO0lBQ2IsV0FBQSxhQUFNLENBQUMsbUJBQVUsQ0FBQyxDQUFBO0lBQ2xCLFdBQUEsYUFBTSxDQUFDLGNBQUssQ0FBQyxDQUFBO0lBQ2IsV0FBQSxhQUFNLENBQUMsb0JBQVcsQ0FBQyxDQUFBO0lBQ25CLFdBQUEsYUFBTSxDQUFDLG9CQUFXLENBQUMsQ0FBQTtJQUNuQixZQUFBLGFBQU0sQ0FBQyxlQUFNLENBQUMsQ0FBQTtJQUNkLFlBQUEsYUFBTSxDQUFDLGlCQUFRLENBQUMsQ0FBQTtxQ0FYRix1QkFBYztRQUNKLGtDQUFlO1FBQ3ZCLGVBQU07UUFDUCxhQUFNO1FBQ1AsNEJBQVksMERBUWIsV0FBSTtHQXpEVCxvQkFBb0IsQ0E2WGhDO0FBN1hZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25Jbml0LCBPbkRlc3Ryb3ksIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RlY29yYXRvcnMvYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlJztcbmltcG9ydCB7IFRJTUVSLCBGQU5DWUFMRVJULCBBVURJTywgRklMRV9TWVNURU0sIEFQUFNFVFRJTkdTLCBMT0FERVIsIElOU09NTklBIH0gZnJvbSAnLi4vLi4vLi4vY29yZS90b2tlbnMnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9wcmFjdGljZWJ1ZGR5L3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3R1ZGVudE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vcHJhY3RpY2VidWRkeS9tb2RlbHMvc3R1ZGVudC5tb2RlbCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3Rha2UnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IFwicnhqcy9SeFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcblxuQEJhc2VDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLXN0dWRlbnQtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnc3R1ZGVudC1ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0dWRlbnQtaG9tZS5jc3MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHVkZW50SG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgc3R1ZGVudDogT2JzZXJ2YWJsZTxhbnk+O1xuICBwdWJsaWMgZWRpdGVkU3R1ZGVudDogU3R1ZGVudE1vZGVsO1xuICBwdWJsaWMgbXlTdHVkZW50OiBTdHVkZW50TW9kZWw7XG4gIGlkOiBhbnk7XG4gIHByaXZhdGUgc3ViOiBhbnk7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJhY3RpY2VzcmVxdWlyZWQ6IG51bWJlcjtcbiAgcHJhY3RpY2VsZW5ndGg6IG51bWJlcjtcbiAgcHJhY3RpY2VzY29tcGxldGVkOiBudW1iZXI7XG4gIHByYWN0aWNlSWQ6IHN0cmluZztcbiAgaW5zdHJ1bWVudDogbnVtYmVyO1xuICB0ZWFjaGVyZW1haWw6IHN0cmluZyA9IFwiXCI7XG4gIHJld2FyZDogc3RyaW5nO1xuICBub3RpZnlBbGw6IGJvb2xlYW47XG4gIC8vdGltZXJzXG4gIGlzVGltaW5nOiBib29sZWFuO1xuICBpc1BhdXNlZDogYm9vbGVhbjtcbiAgaXNSZWNvcmRpbmc6IGJvb2xlYW47XG4gIG1pbnV0ZXM6IG51bWJlciA9IDA7XG4gIHNlY29uZHM6IG51bWJlciA9IDA7XG4gIHByb2dyZXNzOiBzdHJpbmc7XG4gIG15VGltZXI6IGFueTtcbiAgLy9mb3IgcmVjb3JkZXJcbiAgbXlSZWNvcmRpbmdUaW1lcjogYW55O1xuICByZWNvcmRlcnNlY29uZHM6IG51bWJlciA9IDA7XG4gIC8vZW1haWxzXG4gIHN1YmplY3Q6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBzdGF0dXM6IHN0cmluZztcblxuICBwcml2YXRlIGlzUGxheWluZzogQm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHBsYXllcjogYW55O1xuICBwcml2YXRlIGN1cnJlbnRVcmw6IHN0cmluZztcbiAgcHJpdmF0ZSByZWNvcmRlcjogYW55O1xuICBwcml2YXRlIHJlY29yZGVyT3B0aW9uczogYW55O1xuICAvL21haWxcbiAgcHJpdmF0ZSBtYWlsZ3VuVXJsOiBzdHJpbmcgPSBcInByYWN0aWNlYnVkZHkubWFpbGd1bi5vcmdcIjtcbiAgcHJpdmF0ZSBhcGlLZXk6IHN0cmluZyA9IFwiWVhCcE9tdGxlUzAwY3pocGJqTnFZM3BqTlcxdU1ETnBZV1ptZWpKbWVtcHhZekZqTldJNU5RPT1cIjtcbiAgLy90aW1lclxuICBwdWJsaWMgbWludXRlcyQ6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgwKTtcbiAgcHVibGljIHNlY29uZHMkOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoMCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgdXRpbHM6IFV0aWxzU2VydmljZSxcbiAgICBASW5qZWN0KFRJTUVSKSBwcml2YXRlIHRpbWVyOiBhbnksXG4gICAgQEluamVjdChGQU5DWUFMRVJUKSBwcml2YXRlIGZhbmN5YWxlcnQ6IGFueSxcbiAgICBASW5qZWN0KEFVRElPKSBwcml2YXRlIGF1ZGlvOiBhbnksXG4gICAgQEluamVjdChGSUxFX1NZU1RFTSkgcHJpdmF0ZSBmczogYW55LFxuICAgIEBJbmplY3QoQVBQU0VUVElOR1MpIHByaXZhdGUgYXBwc2V0dGluZ3M6IGFueSxcbiAgICBASW5qZWN0KExPQURFUikgcHJpdmF0ZSBsb2FkaW5naW5kaWNhdG9yOiBhbnksXG4gICAgQEluamVjdChJTlNPTU5JQSkgcHJpdmF0ZSBpbnNvbW5pYTogYW55LFxuICAgIHByaXZhdGUgaHR0cDogSHR0cFxuICApIHtcbiAgICB0aGlzLnBsYXllciA9IG5ldyB0aGlzLmF1ZGlvLlROU1BsYXllcigpO1xuICAgIHRoaXMucmVjb3JkZXIgPSBuZXcgdGhpcy5hdWRpby5UTlNSZWNvcmRlcigpO1xuICAgIHRoaXMucmVjb3JkZXJPcHRpb25zID0gdGhpcy5yZWNvcmRlci5BdWRpb1JlY29yZGVyT3B0aW9ucztcbiAgICBcbiAgfVxuXG4gIFxuXG4gIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuaWQgPSBwYXJhbXNbJ2lkJ107XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15U3R1ZGVudCh0aGlzLmlkKS5zdWJzY3JpYmUoKHN0dWRlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBzdHVkZW50KSB7XG4gICAgICAgICAgICAgIC8vcHJvcHNcbiAgICAgICAgICAgICAgaWYgKHByb3AgPT09IFwiSWRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSBzdHVkZW50W3Byb3BdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwcm9wID09PSBcIk5hbWVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IHN0dWRlbnRbcHJvcF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHByb3AgPT09IFwiUHJhY3RpY2VzUmVxdWlyZWRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucHJhY3RpY2VzcmVxdWlyZWQgPSBzdHVkZW50W3Byb3BdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwcm9wID09PSBcIlByYWN0aWNlc0NvbXBsZXRlZFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmFjdGljZXNjb21wbGV0ZWQgPSBzdHVkZW50W3Byb3BdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwcm9wID09PSBcIlByYWN0aWNlTGVuZ3RoXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByYWN0aWNlbGVuZ3RoID0gc3R1ZGVudFtwcm9wXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJSZXdhcmRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucmV3YXJkID0gc3R1ZGVudFtwcm9wXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJJbnN0cnVtZW50XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RydW1lbnQgPSBzdHVkZW50W3Byb3BdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwcm9wID09PSBcIlRlYWNoZXJFbWFpbFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZWFjaGVyZW1haWwgPSBzdHVkZW50W3Byb3BdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwcm9wID09PSBcIk5vdGlmeUFsbFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlBbGwgPSBzdHVkZW50W3Byb3BdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBnb1RvSGlzdG9yeShpZDpzdHJpbmcpIHtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiL3N0dWRlbnQtaGlzdG9yeVwiLCBpZF0pO1xufVxuXG5lZGl0U3R1ZGVudChpZDpzdHJpbmcpe1xuICAgIC8vZWRpdCBzZWxlY3RlZCBzdHVkZW50XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIi9zdHVkZW50LWFkbWluXCIsIGlkXSk7XG59XG5cbmRlbGV0ZVN0dWRlbnQoaWQ6c3RyaW5nKXtcbiAgICAvKnZhciBvcHRpb25zID0ge1xuICAgICAgdGl0bGU6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgc3R1ZGVudD8nLFxuICAgICAgb2tCdXR0b25UZXh0OiAnWWVzJyxcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdObydcbiAgICB9O1xuICAgIHRoaXMuZGlhbG9ncy5jb25maXJtKG9wdGlvbnMpLnRoZW4oKHJlc3VsdDogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgIHRoaXMuc3R1ZGVudFNlcnZpY2UuZGVsZXRlU3R1ZGVudChpdGVtKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIC8vbm90aGluZ1xuICAgICAgICAgIH0sIChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTsqL1xuICAgIGxldCBidXR0b25zID0gW1xuICAgIG5ldyB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydEJ1dHRvbih7IGxhYmVsOiAnTm8nLCBhY3Rpb246ICgpID0+IHsgY29uc29sZS5sb2coJ0NhbmNlbCcpOyB9IH0pLFxuICAgIG5ldyB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydEJ1dHRvbih7IGxhYmVsOiAnWWVzJywgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmRlbGV0ZVN0dWRlbnQoaWQpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgIHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0LnNob3dTdWNjZXNzKCdTdWNjZXNzIScsICdTdHVkZW50IHN1Y2Nlc3NmdWxseSBkZWxldGVkJywgJ09LIScpO1xuICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xuICAgICAgICAgIH0sIChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICB9IH0pXG4gICAgXTtcbiAgICB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydC5zaG93Q3VzdG9tQnV0dG9ucyhidXR0b25zLCAnYWxlcnQucG5nJywgJyNGMjg2MDAnLCAnRGVsZXRlPycsIGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgc3R1ZGVudD8uYCwgJ09rJyk7XG5cblxufVxuXG4gIHRvZ2dsZVJlY29yZChhcmdzKSB7XG4gICAgaWYgKCF0aGlzLmlzVGltaW5nKSB7XG4gICAgICAgIHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0LnNob3dFcnJvcignT29wcyEnLCBcIlBsZWFzZSBzdGFydCB5b3VyIHByYWN0aWNlIHNlc3Npb24gdGltZXIgYmVmb3JlIHN0YXJ0aW5nIHRvIHJlY29yZC5cIiwgJ09LIScpO1xuICAgICAgfVxuICAgIGVsc2V7ICAgXG4gICAgICBpZiAoIXRoaXMuaXNSZWNvcmRpbmcpIHtcblxuICAgICAgIHRoaXMucmVjb3JkZXJPcHRpb25zID0ge1xuXG4gICAgICAgIGZpbGVuYW1lOiB0aGlzLnV0aWxzLmRvY3VtZW50c1BhdGgoYHJlY29yZGluZy0ke0RhdGUubm93KCl9Lm00YWApLFxuICAgIFxuICAgICAgICBpbmZvQ2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGVycm9yQ2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygpO1xuICAgICAgICAgIGFsZXJ0KCdFcnJvciByZWNvcmRpbmcuJyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vc3RhcnQgdGhlIHJlY29yZGVyXG4gICAgICB0aGlzLnN0YXJ0UmVjb3JkZXIodGhpcy5yZWNvcmRlck9wdGlvbnMpO1xuICAgICAgLy9zdGFydCB0aGUgdGltZXJcbiAgICAgIHRoaXMubXlSZWNvcmRpbmdUaW1lciA9IHRoaXMudGltZXIuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5yZWNvcmRlcnNlY29uZHMgPCA2MCAmJiB0aGlzLnJlY29yZGVyc2Vjb25kcyA+PSAwKSB7XG4gICAgICAgICAgICAgICsrdGhpcy5yZWNvcmRlcnNlY29uZHM7XG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5yZWNvcmRlcnNlY29uZHMpICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICB0aGlzLnJlY29yZGVyc2Vjb25kcyA9IDA7XG4gICAgICAgICAgdGhpcy5zdG9wUmVjb3JkZXIodGhpcy5yZWNvcmRlck9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDAwKTsgICAgXG4gICAgfVxuICB9XG59XG5cbiAgc3RhcnRSZWNvcmRlcihvcHRpb25zKXsgICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFydCByZWNvcmRpbmcgaGVyZVwiKVxuICAgICAgICAgIHRoaXMucmVjb3JkZXIuc3RhcnQob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7ICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuaXNSZWNvcmRpbmcgPSB0cnVlO1xuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc1JlY29yZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgIH0pO1xuICAgICAgXG4gIH1cblxuICBzdG9wUmVjb3JkZXIob3B0aW9ucyl7XG4gICAgdGhpcy50aW1lci5jbGVhckludGVydmFsKHRoaXMubXlSZWNvcmRpbmdUaW1lcik7XG4gICAgaWYgKHRoaXMuaXNSZWNvcmRpbmcpIHtcbiAgICAgIHRoaXMucmVjb3JkZXIuc3RvcChvcHRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc1JlY29yZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvYWRpbmdpbmRpY2F0b3Iuc2hvdyh7IG1lc3NhZ2U6ICdTYXZpbmcgeW91ciByZWNvcmRpbmchJyB9KTtcbiAgICAgICAgY29uc29sZS5sb2cob3B0aW9ucy5maWxlbmFtZSk7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnNhdmVSZWNvcmRpbmcob3B0aW9ucy5maWxlbmFtZSkudGhlbigodXBsb2FkZWRGaWxlOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdpbmRpY2F0b3IuaGlkZSgpOyAgICAgICAgICBcbiAgICAgICAgICBsZXQgcHJhY3RpY2VJZCA9IHRoaXMuYXBwc2V0dGluZ3MuZ2V0U3RyaW5nKCdwcmFjdGljZUlkJyk7XG4gICAgICAgICAgbGV0IHRyYWNrID0gdXBsb2FkZWRGaWxlLm5hbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0RG93bmxvYWRVcmwodHJhY2spLnRoZW4oKGRvd25sb2FkVXJsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vaWYgdGhlcmUgaXMgYSBwcmFjdGljZSBhbHJlYWR5IGxvZ2dlZCwgZWRpdCB0aGUgcmVjb3JkXG4gICAgICAgICAgICAgICAgICBpZihwcmFjdGljZUlkIT1udWxsKXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmFkZFByYWN0aWNlVHJhY2socHJhY3RpY2VJZCxkb3dubG9hZFVybCkudGhlbigocmVzdWx0OmFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInByYWN0aWNlIHdyaXR0ZW5cIilcbiAgICAgICAgICAgICAgICAgICAgICB9LCBcbiAgICAgICAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgLy9vdGhlcndpc2UsIHNhdmUgdGhlIGRvd25sb2FkcGF0aFxuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwc2V0dGluZ3Muc2V0U3RyaW5nKCdkb3dubG9hZFVybCcsZG93bmxvYWRVcmwpXG4gICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KSAgIFxuICAgICAgICB9LCAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZ2luZGljYXRvci5oaWRlKCk7XG4gICAgICAgICAgYWxlcnQoJ0ZpbGUgdXBsb2FkIGVycm9yOiAnICsgZXJyb3IpO1xuICAgICAgICB9KTsgICAgICBcbiAgICAgIH0sIChleCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhleCk7XG4gICAgICAgIHRoaXMuaXNSZWNvcmRpbmcgPSB0cnVlO1xuICAgIH0pO1xuICB9XG4gIHRoaXMuaXNSZWNvcmRpbmcgPSBmYWxzZTsgICAgXG59XG5cblxuICBzdGFydFRpbWVyKCkge1xuICAgIC8vaWYgaXQncyBub3QgYWxyZWFkeSB0aW1pbmdcbiAgICAvL2tlZXAgYXdha2VcbiAgICB0aGlzLmluc29tbmlhLmtlZXBBd2FrZSgpLnRoZW4oZnVuY3Rpb24oKSB7fSk7XG4gICAgLy9jbGVhciBhcHBzZXR0aW5nc1xuICAgIHRoaXMuYXBwc2V0dGluZ3MuY2xlYXIoKTtcbiAgICBpZiAoIXRoaXMuaXNUaW1pbmcpIHtcbiAgICAgICAgdGhpcy5pc1RpbWluZyA9IHRydWU7XG4gICAgICAgIHRoaXMubXlUaW1lciA9IHRoaXMudGltZXIuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnNlY29uZHMgPCA2MCAmJiB0aGlzLnNlY29uZHMgPj0gMCkge1xuICAgICAgICAgICAgKyt0aGlzLnNlY29uZHM7XG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNlY29uZHMkLm5leHQodGhpcy5zZWNvbmRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kcyA9IDA7XG4gICAgICAgICAgICArK3RoaXMubWludXRlcztcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMubWludXRlcyQubmV4dCh0aGlzLm1pbnV0ZXMpO1xuICAgICAgICAgICAgICAvL3doZW4gdGhpcy5taW51dGVzIGlzIHRoZSBzYW1lIGFzIHRoZSBzdHVkZW50IG1pbnV0ZXMsIHN0b3AgZXZlcnl0aGluZyBhbmQgd3JpdGUgdG8gZGIuXG4gICAgICAgICAgICAgIGlmICh0aGlzLm1pbnV0ZXMgPT0gdGhpcy5wcmFjdGljZWxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vc3RvcCB0aW1lclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgLy9pbmNyZW1lbnQgcHJhY3RpY2VzY29tcGxldGVkLCByZXNldCBpZiByZXF1aXJlZCA9IGNvbXBsZXRlZFxuICAgICAgICAgICAgICAgICsrdGhpcy5wcmFjdGljZXNjb21wbGV0ZWQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcmFjdGljZXNyZXF1aXJlZCA9PSB0aGlzLnByYWN0aWNlc2NvbXBsZXRlZCl7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFwiZG9uZVwiO1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcmFjdGljZXNjb21wbGV0ZWQgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKmxldCB0cmFjayA9IHRoaXMuYXBwc2V0dGluZ3MuZ2V0U3RyaW5nKCdmaWxlTmFtZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldERvd25sb2FkVXJsKHRyYWNrKS50aGVuKChkb3dubG9hZFVybDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICBsZXQgZG93bmxvYWRQYXRoID0gZG93bmxvYWRVcmw7XG4gICAgICAgICAgICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS53cml0ZVByYWN0aWNlKHRoaXMuaWQsdGhpcy5uYW1lLHRoaXMucHJhY3RpY2VsZW5ndGgsIHRoaXMudGVhY2hlcmVtYWlsKS50aGVuKChyZXN1bHQ6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVzdEZvckRvbmUodGhpcy5pZCwgdGhpcy5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgfSwgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkqL1xuICAgICAgICAgICAgICAgIGxldCB0cmFjayA9IHRoaXMuYXBwc2V0dGluZ3MuZ2V0U3RyaW5nKCdkb3dubG9hZFVybCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLndyaXRlUHJhY3RpY2UodGhpcy5pZCx0aGlzLm5hbWUsdGhpcy5wcmFjdGljZWxlbmd0aCwgdGhpcy50ZWFjaGVyZW1haWwsIHRyYWNrKS50aGVuKChyZXN1bHQ6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmFwcHNldHRpbmdzLnNldFN0cmluZygncHJhY3RpY2VJZCcscmVzdWx0LmtleSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXN0Rm9yRG9uZSh0aGlzLmlkLCB0aGlzLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICB9LCAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfVxuICAgIFxuICB9XG5cbiAgcmVzZXRUaW1lcigpIHtcbiAgICB0aGlzLmlzVGltaW5nID0gZmFsc2U7XG4gICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gIH1cblxuICBnb0hvbWUoKSB7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gIH1cblxuXG4gIHNlbmRFbWFpbChtb2RlKSB7XG4gICAgaWYgKHRoaXMudGVhY2hlcmVtYWlsKSB7XG4gICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKFxuICAgICAgICB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCYXNpYyBcIiArIHRoaXMuYXBpS2V5XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgICBpZihtb2RlID09IFwiZ29hbFwiKVxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdWJqZWN0ID0gXCJZb3VyIHN0dWRlbnQganVzdCBjb21wbGV0ZWQgYSBnb2FsIG9uIHRoZSBQcmFjdGljZSBCdWRkeSBhcHAhXCI7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJZb3VyIHN0dWRlbnQsIFwiK3RoaXMubmFtZStcIiwgY29tcGxldGVkIGEgZ29hbCBvbiB0aGUgUHJhY3RpY2UgQnVkZHkgYXBwLCBhbmQgaGFzIHF1YWxpZmllZCBmb3IgYSByZXdhcmQ6IFwiK3RoaXMucmV3YXJkK1wiLiBMb2dpbiB0byB0aGUgYXBwIHRvIHZpZXcgdGhlIHByYWN0aWNlIGRldGFpbHMgYW5kIGdpdmUgZmVlZGJhY2shXCI7XG4gICAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3ViamVjdCA9IFwiWW91ciBzdHVkZW50IGp1c3QgY29tcGxldGVkIGEgc2Vzc2lvbiBvbiB0aGUgUHJhY3RpY2UgQnVkZHkgYXBwIVwiOyAgICAgICBcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIllvdXIgc3R1ZGVudCwgXCIrdGhpcy5uYW1lK1wiLCBqdXN0IGxvZ2dlZCBhIHByYWN0aWNlIG9uIHRoZSBQcmFjdGljZSBCdWRkeSBhcHAuIExvZ2luIHRvIHRoZSBhcHAgdG8gdmlldyB0aGUgcHJhY3RpY2UgZGV0YWlscyBhbmQgZ2l2ZSBmZWVkYmFjayFcIjtcbiAgICAgIH1cbiAgICAgIGxldCBib2R5ID0gXCJmcm9tPXlvdXJmcmllbmRzQHByYWN0aWNlYnVkZHlhcHAuY29tJnRvPVwiICsgdGhpcy50ZWFjaGVyZW1haWwgKyBcIiZzdWJqZWN0PVwiICsgdGhpcy5zdWJqZWN0ICsgXCImdGV4dD1cIiArIHRoaXMubWVzc2FnZTtcbiAgICAgIHRoaXMuaHR0cC5wb3N0KFwiaHR0cHM6Ly9hcGkubWFpbGd1bi5uZXQvdjMvXCIgKyB0aGlzLm1haWxndW5VcmwgKyBcIi9tZXNzYWdlc1wiLCBib2R5LCBvcHRpb25zKVxuICAgICAgICAubWFwKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKVxuICAgICAgICAuZG8ocmVzdWx0ID0+IGNvbnNvbGUubG9nKFwiUkVTVUxUOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSkpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNFTlQhXCIpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcGF1c2VUaW1lcigpIHtcbiAgICB0aGlzLmlzVGltaW5nID0gZmFsc2U7XG4gICAgdGhpcy5pc1BhdXNlZCA9IHRydWU7XG4gICAgdGhpcy50aW1lci5jbGVhckludGVydmFsKHRoaXMubXlUaW1lcik7XG4gIH1cblxuICBzdG9wVGltZXIoKSB7XG4gICAgdGhpcy5pbnNvbW5pYS5hbGxvd1NsZWVwQWdhaW4oKS50aGVuKGZ1bmN0aW9uKCkge30pO1xuICAgICAgLy90b2RvIC0gd2FybiBpZiB5b3UncmUgc3RvcHBpbmcgZWFybHlcbiAgICAgIHRoaXMuaXNUaW1pbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMudGltZXIuY2xlYXJJbnRlcnZhbCh0aGlzLm15VGltZXIpO1xuICAgICAgdGhpcy5taW51dGVzID0gMDtcbiAgICAgIHRoaXMuc2Vjb25kcyA9IDA7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNlY29uZHMkLm5leHQodGhpcy5zZWNvbmRzKTtcbiAgICAgICAgdGhpcy5taW51dGVzJC5uZXh0KHRoaXMubWludXRlcyk7XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgdGVzdEZvckRvbmUoaWQ6IHN0cmluZywgc3RhdHVzOiBzdHJpbmcpIHtcbiAgICB2YXIgbXNnO1xuICAgIGlmICh0aGlzLnN0YXR1cyA9PSBcImRvbmVcIikge1xuICAgICAgLy9yZXNldCBwcmFjdGljZXNDb21wbGV0ZWQsIHNob3cgYWxlcnQsIGFuZCBzZW5kIGVtYWlsXG4gICAgICBtc2cgPSBcIkNvbmdyYXR1bGF0aW9ucyEgWW91IGNvbXBsZXRlZCBhIHByYWN0aWNlIGdvYWwhXCI7XG4gICAgICB0aGlzLnNlbmRFbWFpbChcImdvYWxcIik7XG4gICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5jbGVhclByYWN0aWNlc0NvbXBsZXRlZChpZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbXNnID0gXCJDb25ncmF0dWxhdGlvbnMhIFlvdSBjb21wbGV0ZWQgYSBwcmFjdGljZSBzZXNzaW9uIVwiO1xuICAgICAgaWYgKHRoaXMubm90aWZ5QWxsKXtcbiAgICAgICAgdGhpcy5zZW5kRW1haWwoXCJzZXNzaW9uXCIpOyAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgfVxuICAgICAgLy9pbmNyZW1lbnQgcHJhY3RpY2VzIGNvbXBsZXRlZFxuICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuaW5jcmVtZW50UHJhY3RpY2VzQ29tcGxldGVkKHRoaXMuaWQsIHRoaXMucHJhY3RpY2VzY29tcGxldGVkKTtcbiAgICB9XG4gICAgdGhpcy5mYW5jeWFsZXJ0LlROU0ZhbmN5QWxlcnQuc2hvd1N1Y2Nlc3MoJ1N1Y2Nlc3MhJywgbXNnLCAnT0shJyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgICB0aGlzLnN0b3BSZWNvcmRlcih0aGlzLnJlY29yZGVyT3B0aW9ucyk7XG4gICAgICBpZiAodGhpcy5zdWIpIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICBpZiAodGhpcy5wbGF5ZXIpIHRoaXMucGxheWVyLmRpc3Bvc2UoKTtcbiAgfVxuXG5cbn0iXX0=