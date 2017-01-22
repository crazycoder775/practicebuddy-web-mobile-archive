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
var log_service_1 = require('../../core/services/log.service');
var config_1 = require('../../core/utils/config');
var tokens_1 = require('../../core/tokens');
var utils_service_1 = require('../../core/services/utils.service');
var Observable_1 = require('rxjs/Observable');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var router_1 = require('@angular/router');
require('rxjs/add/operator/share');
require('rxjs/add/operator/find');
var FirebaseService = (function () {
    function FirebaseService(logger, ngZone, utils, _router, firebase, LoadingIndicator, AppSettings, routerExtensions) {
        var _this = this;
        this.logger = logger;
        this.ngZone = ngZone;
        this.utils = utils;
        this._router = _router;
        this.firebase = firebase;
        this.LoadingIndicator = LoadingIndicator;
        this.AppSettings = AppSettings;
        this.routerExtensions = routerExtensions;
        this.items = new BehaviorSubject_1.BehaviorSubject([]);
        this.practiceitems = new BehaviorSubject_1.BehaviorSubject([]);
        this.teacherstudentsitems = new BehaviorSubject_1.BehaviorSubject([]);
        this.practicearchiveitems = new BehaviorSubject_1.BehaviorSubject([]);
        this._allItems = [];
        this._allPracticeItems = [];
        this._allTeacherStudentsItems = [];
        this._allPracticeArchiveItems = [];
        logger.debug("Firebase initializing...");
        if (config_1.Config.IS_MOBILE_NATIVE()) {
            firebase.init({
                persist: false,
                storageBucket: 'gs://practicebuddy-4d466.appspot.com',
                onAuthStateChanged: function (data) {
                    _this.logger.debug("Logged " + (data.loggedIn ? 'into' : 'out of') + " firebase.");
                    if (data.loggedIn) {
                        config_1.Config.token = data.user.uid;
                        config_1.Config.email = data.user.email;
                        _this.routerExtensions.navigate([""], { clearHistory: true });
                    }
                    else {
                        _this._router.navigate(["/login"]);
                    }
                }
            }).then(function () {
                _this.logger.debug('firebase.init done');
            }, function (error) {
                _this.logger.debug('firebase.init error: ' + error);
            });
        }
        else {
            var config = {
                apiKey: "AIzaSyD1zfCdGei1OU9wphWTu8wNjarjwe-rRwQ",
                authDomain: "practicebuddy-4d466.firebaseapp.com",
                databaseURL: "https://practicebuddy-4d466.firebaseio.com",
                storageBucket: "practicebuddy-4d466.appspot.com",
                messagingSenderId: "858571045381"
            };
            firebase.initializeApp(config);
            this._database = firebase.database();
            this._auth = firebase.auth();
        }
    }
    FirebaseService.prototype.login = function (user) {
        var _this = this;
        if (config_1.Config.IS_MOBILE_NATIVE()) {
            return this.firebase.login({
                type: this.firebase.LoginType.PASSWORD,
                email: user.email,
                password: user.password
            }).then(function (result) {
                config_1.Config.token = result.uid;
                config_1.Config.email = result.user.email;
                return JSON.stringify(result);
            }, function (errorMessage) {
                _this.logger.debug("firebase auth error:");
                _this.logger.debug(errorMessage);
                alert(errorMessage);
            });
        }
        else {
            return this._auth.signInWithEmailAndPassword(user.email, user.password)
                .then(function (result) {
                config_1.Config.token = result.uid;
                config_1.Config.email = result.user.email;
            }, function (error) {
                alert(error.message);
            });
        }
    };
    FirebaseService.prototype.register = function (user) {
        if (config_1.Config.IS_MOBILE_NATIVE()) {
            return this.firebase.createUser({
                email: user.email,
                password: user.password
            }).then(function (result) {
                return JSON.stringify(result);
            }, function (errorMessage) {
                alert(errorMessage);
            });
        }
        else {
            return this._auth.createUserWithEmailAndPassword(user.email, user.password)
                .then(function (result) {
                return JSON.stringify(result);
            }, function (error) {
                alert(error.message);
            });
        }
    };
    FirebaseService.prototype.resetPassword = function (email) {
        if (config_1.Config.IS_MOBILE_NATIVE()) {
            return this.firebase.resetPassword({
                email: email
            }).then(function (result) {
                return true;
            }, function (errorMessage) {
                alert(errorMessage);
            });
        }
        else {
            return this._auth.sendPasswordResetEmail(email).then(function (result) {
                return JSON.stringify("You've requested to have your password reset. Please check your email to proceed.");
            }, function (error) {
                alert(error.message);
            });
        }
    };
    FirebaseService.prototype.logout = function () {
        config_1.Config.invalidateToken();
        this.firebase.logout();
    };
    FirebaseService.prototype.getMyStudents = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'StudentSettings';
            var listener;
            if (config_1.Config.IS_MOBILE_NATIVE()) {
                _this.LoadingIndicator.show({ message: 'Finding my Students...' });
                var onValueEvent = function (snapshot) {
                    _this.ngZone.run(function () {
                        var results = _this.handleSnapshot(snapshot.value);
                        observer.next(results);
                        _this.LoadingIndicator.hide();
                    });
                };
                _this.firebase.addValueEventListener(onValueEvent, "/" + path).then(function () {
                    _this.LoadingIndicator.hide();
                });
            }
            else {
                listener = _this.firebase.database().ref(path).orderByChild('date')
                    .on('value', function (snapshot) {
                    _this.ngZone.run(function () {
                        observer.next(_this.handleSnapshot(snapshot.value));
                    });
                }, observer.error);
            }
            return function () {
                if (config_1.Config.IS_MOBILE_NATIVE()) {
                }
                else {
                    _this.firebase.database().ref(path).off('value', listener);
                }
            };
        }).share();
    };
    FirebaseService.prototype.getMyPractices = function (id) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Practices';
            var listener;
            if (config_1.Config.IS_MOBILE_NATIVE()) {
                _this.LoadingIndicator.show({ message: 'Finding Practices...' });
                var onValueEvent = function (snapshot) {
                    _this.ngZone.run(function () {
                        var results = _this.handlePracticeSnapshot(id, snapshot.value, path);
                        observer.next(results);
                    });
                };
                _this.firebase.addValueEventListener(onValueEvent, "/" + path).then(function () {
                    _this.LoadingIndicator.hide();
                });
            }
            else {
                listener = _this.firebase.database().ref(path).orderByChild('date')
                    .on('value', function (snapshot) {
                    _this.ngZone.run(function () {
                        observer.next(_this.handlePracticeSnapshot(id, snapshot.value, path));
                    });
                }, observer.error);
            }
            return function () {
                if (config_1.Config.IS_MOBILE_NATIVE()) {
                }
                else {
                    _this.firebase.database().ref(path).off('value', listener);
                }
            };
        }).share();
    };
    FirebaseService.prototype.getArchivedPractices = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'Practices';
            var listener;
            if (config_1.Config.IS_MOBILE_NATIVE()) {
                _this.LoadingIndicator.show({ message: 'Finding Practices...' });
                var onValueEvent = function (snapshot) {
                    _this.ngZone.run(function () {
                        var results = _this.handlePracticeArchiveSnapshot(snapshot.value, path);
                        observer.next(results);
                    });
                };
                _this.firebase.addValueEventListener(onValueEvent, "/" + path).then(function () {
                    _this.LoadingIndicator.hide();
                });
            }
            else {
                listener = _this.firebase.database().ref(path).orderByChild('date')
                    .on('value', function (snapshot) {
                    _this.ngZone.run(function () {
                        observer.next(_this.handlePracticeArchiveSnapshot(snapshot.value, path));
                    });
                }, observer.error);
            }
            return function () {
                if (config_1.Config.IS_MOBILE_NATIVE()) {
                }
                else {
                    _this.firebase.database().ref(path).off('value', listener);
                }
            };
        }).share();
    };
    FirebaseService.prototype.getTeacherStudents = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'StudentSettings';
            var listener;
            if (config_1.Config.IS_MOBILE_NATIVE()) {
                _this.LoadingIndicator.show({ message: 'Finding Students...' });
                var onValueEvent = function (snapshot) {
                    _this.ngZone.run(function () {
                        var results = _this.handleTeacherStudentsSnapshot(snapshot.value, path);
                        observer.next(results);
                    });
                };
                _this.firebase.addValueEventListener(onValueEvent, "/" + path).then(function () {
                    _this.LoadingIndicator.hide();
                });
            }
            else {
                listener = _this.firebase.database().ref(path).orderByChild('date')
                    .on('value', function (snapshot) {
                    _this.ngZone.run(function () {
                        observer.next(_this.handleTeacherStudentsSnapshot(snapshot.value, path));
                    });
                }, observer.error);
            }
            return function () {
                if (config_1.Config.IS_MOBILE_NATIVE()) {
                }
                else {
                    _this.firebase.database().ref(path).off('value', listener);
                }
            };
        }).share();
    };
    FirebaseService.prototype.getMyStudent = function (id) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            observer.next(_this._allItems.filter(function (s) { return s.id === id; })[0]);
        }).share();
    };
    FirebaseService.prototype.add = function (name) {
        return this.firebase.push("/StudentSettings", {
            "Name": name,
            "Date": 0 - Date.now(),
            "PracticesRequired": 5,
            "PracticesCompleted": 0,
            "PracticeLength": 20,
            "Reward": "A special prize!",
            "AdminPassword": "",
            "TeacherEmail": "",
            "Instrument": 10,
            "NotifyAll": false,
            "UID": config_1.Config.token
        }).then(function (result) {
            return 'Student added!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.incrementPracticesCompleted = function (id, currPracticesCompleted) {
        this.publishUpdates();
        return this.firebase.update("/StudentSettings/" + id + "", { PracticesCompleted: currPracticesCompleted })
            .then(function (result) {
            return 'Student information saved!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.writePractice = function (id, name, practicelength, teacheremail, track) {
        this.publishUpdates();
        return this.firebase.push("/Practices/", { StudentId: id, Name: name, Date: this.firebase.ServerValue.TIMESTAMP, PracticeLength: practicelength, TeacherEmail: teacheremail, Track: track })
            .then(function (result) {
            return 'Practice information saved!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.addComment = function (id, comment) {
        this.publishUpdates();
        return this.firebase.update("/Practices/" + id + "", { Comment: comment })
            .then(function (result) {
            return 'Practice Commented!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.addAward = function (id, stickerId) {
        this.publishUpdates();
        return this.firebase.update("/Practices/" + id + "", { Sticker: stickerId })
            .then(function (result) {
            return 'Sticker Added!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.markComplete = function (id) {
        this.publishUpdates();
        return this.firebase.update("/Practices/" + id + "", { Archive: true })
            .then(function (result) {
            return 'Practice Archived!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.clearPracticesCompleted = function (id) {
        this.publishUpdates();
        return this.firebase.update("/StudentSettings/" + id + "", { PracticesCompleted: 0 })
            .then(function (result) {
            return 'Congratulations! You completed a practice goal!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.saveSettings = function (student) {
        this.publishUpdates();
        return this.firebase.update("/StudentSettings/" + student.id + "", { Name: student.Name, Instrument: student.Instrument, AdminPassword: student.AdminPassword, PracticesRequired: student.PracticesRequired, PracticeLength: student.PracticeLength, Reward: student.Reward, TeacherEmail: student.TeacherEmail, NotifyAll: student.NotifyAll })
            .then(function (result) {
            return 'Student information saved!';
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.deleteStudent = function (student) {
        return this.firebase.remove("/StudentSettings/" + student.id + "")
            .then(this.publishUpdates())
            .catch(this.handleErrors);
    };
    FirebaseService.prototype.getDownloadUrl = function (remoteFilePath) {
        return this.firebase.getDownloadUrl({
            remoteFullPath: remoteFilePath })
            .then(function (url) {
            return url;
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.saveRecording = function (localPath, file) {
        var filename = this.utils.getFilename(localPath);
        var remotePath = "" + filename;
        if (config_1.Config.IS_MOBILE_NATIVE()) {
            return this.firebase.uploadFile({
                remoteFullPath: remotePath,
                localFullPath: localPath
            });
        }
        else {
            return this.firebase.storage().ref().child(remotePath).put(file);
        }
    };
    FirebaseService.prototype.handleSnapshot = function (data) {
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
                if (config_1.Config.token === result.UID) {
                    this._allItems.push(result);
                }
            }
            this.publishUpdates();
        }
        return this._allItems;
    };
    FirebaseService.prototype.handleTeacherStudentsSnapshot = function (data, path) {
        this._allTeacherStudentsItems = [];
        if (path)
            if (data) {
                for (var id in data) {
                    var result = Object.assign({ id: id }, data[id]);
                    if (config_1.Config.email === result.TeacherEmail) {
                        this._allTeacherStudentsItems.push(result);
                    }
                }
                this.publishTeacherStudentsUpdates();
            }
        return this._allTeacherStudentsItems;
    };
    FirebaseService.prototype.handlePracticeArchiveSnapshot = function (data, path) {
        this._allPracticeArchiveItems = [];
        if (path)
            if (data) {
                for (var id in data) {
                    var result = Object.assign({ id: id }, data[id]);
                    if (config_1.Config.email === result.TeacherEmail && result.Archive) {
                        this._allPracticeArchiveItems.push(result);
                    }
                }
                this.publishPracticeArchiveUpdates();
            }
        return this._allPracticeArchiveItems;
    };
    FirebaseService.prototype.handlePracticeSnapshot = function (studentId, data, path) {
        this._allPracticeItems = [];
        if (path)
            if (data) {
                for (var id in data) {
                    var result = Object.assign({ id: id }, data[id]);
                    if (studentId === result.StudentId) {
                        this._allPracticeItems.push(result);
                    }
                }
                this.publishPracticeUpdates();
            }
        return this._allPracticeItems;
    };
    FirebaseService.prototype.publishUpdates = function () {
        this._allItems.sort(function (a, b) {
            if (a.Date < b.Date)
                return -1;
            if (a.Date > b.Date)
                return 1;
            return 0;
        });
        this.items.next(this._allItems.slice());
    };
    FirebaseService.prototype.publishPracticeUpdates = function () {
        this._allPracticeItems.sort(function (a, b) {
            if (a.Date > b.Date)
                return -1;
            if (a.Date < b.Date)
                return 1;
            return 0;
        });
        this.practiceitems.next(this._allPracticeItems.slice());
    };
    FirebaseService.prototype.publishPracticeArchiveUpdates = function () {
        this._allPracticeArchiveItems.sort(function (a, b) {
            if (a.Date > b.Date)
                return -1;
            if (a.Date < b.Date)
                return 1;
            return 0;
        });
        this.practicearchiveitems.next(this._allPracticeArchiveItems.slice());
    };
    FirebaseService.prototype.publishTeacherStudentsUpdates = function () {
        this._allTeacherStudentsItems.sort(function (a, b) {
            if (a.Date < b.Date)
                return -1;
            if (a.Date > b.Date)
                return 1;
            return 0;
        });
        this.teacherstudentsitems.next(this._allTeacherStudentsItems.slice());
    };
    FirebaseService.prototype.handleErrors = function (error) {
        return Promise.reject(error.message);
    };
    FirebaseService = __decorate([
        core_1.Injectable(),
        __param(4, core_1.Inject(tokens_1.FIREBASE)),
        __param(5, core_1.Inject(tokens_1.LOADER)),
        __param(6, core_1.Inject(tokens_1.APPSETTINGS)),
        __param(7, core_1.Inject(tokens_1.NAVIGATION_EXTENSIONS)), 
        __metadata('design:paramtypes', [log_service_1.LogService, core_1.NgZone, utils_service_1.UtilsService, router_1.Router, Object, Object, Object, Object])
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL3ByYWN0aWNlYnVkZHkvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUJBQXlDLGVBQWUsQ0FBQyxDQUFBO0FBQ3pELDRCQUF5QixpQ0FBaUMsQ0FBQyxDQUFBO0FBQzNELHVCQUFxQix5QkFBeUIsQ0FBQyxDQUFBO0FBQy9DLHVCQUFtRSxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3ZGLDhCQUEyQixtQ0FBbUMsQ0FBQyxDQUFBO0FBQy9ELDJCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBQzNDLGdDQUE4QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ3JELHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pELFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUNqQyxRQUFPLHdCQUF3QixDQUFDLENBQUE7QUFRaEM7SUFjRSx5QkFDVSxNQUFrQixFQUNsQixNQUFjLEVBQ2QsS0FBbUIsRUFDbkIsT0FBZSxFQUNHLFFBQWEsRUFDZixnQkFBcUIsRUFDaEIsV0FBZ0IsRUFDTixnQkFBcUI7UUF0QmhFLGlCQTRsQkM7UUE3a0JXLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNHLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDZixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQUs7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQUs7UUFDTixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQUs7UUFsQjlELFVBQUssR0FBeUMsSUFBSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLGtCQUFhLEdBQTBDLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvRSx5QkFBb0IsR0FBeUMsSUFBSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JG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QixDQUFDOzt1QkF2QnJCO0lBNmxCYixzQkFBQztBQUFELENBNWxCQSxBQTRsQkMsSUFBQTtBQTVsQlksdUJBQWUsa0JBNGxCM0IsQ0FBQSIsImZpbGUiOiJhcHAvZnJhbWV3b3Jrcy9wcmFjdGljZWJ1ZGR5L3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEluamVjdCwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TG9nU2VydmljZX0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy9sb2cuc2VydmljZSc7XG5pbXBvcnQge0NvbmZpZ30gZnJvbSAnLi4vLi4vY29yZS91dGlscy9jb25maWcnO1xuaW1wb3J0IHtGSVJFQkFTRSwgTE9BREVSLCBBUFBTRVRUSU5HUywgTkFWSUdBVElPTl9FWFRFTlNJT05TfSBmcm9tICcuLi8uLi9jb3JlL3Rva2Vucyc7XG5pbXBvcnQge1V0aWxzU2VydmljZX0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maW5kJztcbmltcG9ydCB7VXNlck1vZGVsfSBmcm9tICcuLi9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQge1N0dWRlbnRNb2RlbH0gZnJvbSAnLi4vbW9kZWxzL3N0dWRlbnQubW9kZWwnO1xuaW1wb3J0IHtQcmFjdGljZU1vZGVsfSBmcm9tICcuLi9tb2RlbHMvcHJhY3RpY2UubW9kZWwnO1xuXG5kZWNsYXJlIHZhciB6b25lZENhbGxiYWNrOiBGdW5jdGlvbjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpcmViYXNlU2VydmljZSB7XG4gIHByaXZhdGUgX2F1dGg6IGFueTtcbiAgcHJpdmF0ZSBfZGF0YWJhc2U6IGFueTtcbiAgXG4gIGl0ZW1zOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8U3R1ZGVudE1vZGVsPj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgcHJhY3RpY2VpdGVtczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PFByYWN0aWNlTW9kZWw+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICB0ZWFjaGVyc3R1ZGVudHNpdGVtczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PFN0dWRlbnRNb2RlbD4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7IFxuICBwcmFjdGljZWFyY2hpdmVpdGVtczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PFByYWN0aWNlTW9kZWw+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBcbiAgcHJpdmF0ZSBfYWxsSXRlbXM6IEFycmF5PFN0dWRlbnRNb2RlbD4gPSBbXTtcbiAgcHJpdmF0ZSBfYWxsUHJhY3RpY2VJdGVtczogQXJyYXk8UHJhY3RpY2VNb2RlbD4gPSBbXTtcbiAgcHJpdmF0ZSBfYWxsVGVhY2hlclN0dWRlbnRzSXRlbXM6IEFycmF5PFN0dWRlbnRNb2RlbD4gPSBbXTtcbiAgcHJpdmF0ZSBfYWxsUHJhY3RpY2VBcmNoaXZlSXRlbXM6IEFycmF5PFByYWN0aWNlTW9kZWw+ID0gW107XG4gIFxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxvZ2dlcjogTG9nU2VydmljZSxcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgdXRpbHM6IFV0aWxzU2VydmljZSxcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBASW5qZWN0KEZJUkVCQVNFKSBwcml2YXRlIGZpcmViYXNlOiBhbnksXG4gICAgQEluamVjdChMT0FERVIpIHByaXZhdGUgTG9hZGluZ0luZGljYXRvcjogYW55LFxuICAgIEBJbmplY3QoQVBQU0VUVElOR1MpIHByaXZhdGUgQXBwU2V0dGluZ3M6IGFueSxcbiAgICBASW5qZWN0KE5BVklHQVRJT05fRVhURU5TSU9OUykgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBhbnkpIHtcbiAgICBsb2dnZXIuZGVidWcoYEZpcmViYXNlIGluaXRpYWxpemluZy4uLmApO1xuXG4gICAgaWYgKENvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkpIHtcbiAgICAgIGZpcmViYXNlLmluaXQoe1xuICAgICAgICAvL2tlZXAgcGVyc2lzdCBmYWxzZSBvciB5b3Ugd29uJ3QgZ2V0IG51bWJlcnMgYmFjayFcbiAgICAgICAgcGVyc2lzdDogZmFsc2UsXG4gICAgICAgIHN0b3JhZ2VCdWNrZXQ6ICdnczovL3ByYWN0aWNlYnVkZHktNGQ0NjYuYXBwc3BvdC5jb20nLFxuICAgICAgICAvLyBpT1NFbXVsYXRvckZsdXNoOiB0cnVlLFxuICAgICAgICBvbkF1dGhTdGF0ZUNoYW5nZWQ6IChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTG9nZ2VkICR7ZGF0YS5sb2dnZWRJbiA/ICdpbnRvJyA6ICdvdXQgb2YnfSBmaXJlYmFzZS5gKTtcbiAgICAgICAgICBpZihkYXRhLmxvZ2dlZEluKXtcbiAgICAgICAgICAgIENvbmZpZy50b2tlbiA9IGRhdGEudXNlci51aWQ7XG4gICAgICAgICAgICBDb25maWcuZW1haWwgPSBkYXRhLnVzZXIuZW1haWw7XG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdmaXJlYmFzZS5pbml0IGRvbmUnKTtcbiAgICAgIH0sIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdmaXJlYmFzZS5pbml0IGVycm9yOiAnICsgZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gd2ViXG4gICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICBhcGlLZXk6IFwiQUl6YVN5RDF6ZkNkR2VpMU9VOXdwaFdUdTh3Tmphcmp3ZS1yUndRXCIsXG4gICAgICAgIGF1dGhEb21haW46IFwicHJhY3RpY2VidWRkeS00ZDQ2Ni5maXJlYmFzZWFwcC5jb21cIixcbiAgICAgICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9wcmFjdGljZWJ1ZGR5LTRkNDY2LmZpcmViYXNlaW8uY29tXCIsXG4gICAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwicHJhY3RpY2VidWRkeS00ZDQ2Ni5hcHBzcG90LmNvbVwiLFxuICAgICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI4NTg1NzEwNDUzODFcIlxuICAgICAgfTtcbiAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcbiAgICAgIHRoaXMuX2RhdGFiYXNlID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcbiAgICAgIHRoaXMuX2F1dGggPSBmaXJlYmFzZS5hdXRoKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGxvZ2luKHVzZXI6IFVzZXJNb2RlbCkge1xuICAgIGlmIChDb25maWcuSVNfTU9CSUxFX05BVElWRSgpKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyZWJhc2UubG9naW4oe1xuICAgICAgdHlwZTogdGhpcy5maXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgfSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICBDb25maWcudG9rZW4gPSByZXN1bHQudWlkO1xuICAgICAgICAgIENvbmZpZy5lbWFpbCA9IHJlc3VsdC51c2VyLmVtYWlsO1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xuICAgICAgfSwgKGVycm9yTWVzc2FnZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBmaXJlYmFzZSBhdXRoIGVycm9yOmApO1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCh1c2VyLmVtYWlsLCB1c2VyLnBhc3N3b3JkKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0OmFueSkgeyAgICAgICAgXG4gICAgICAgIENvbmZpZy50b2tlbiA9IHJlc3VsdC51aWQ7XG4gICAgICAgIENvbmZpZy5lbWFpbCA9IHJlc3VsdC51c2VyLmVtYWlsO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycm9yOmFueSkge1xuICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyKHVzZXI6IFVzZXJNb2RlbCl7XG4gICAgaWYgKENvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpcmViYXNlLmNyZWF0ZVVzZXIoe1xuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcbiAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xuICAgICAgICAgIH0sIChlcnJvck1lc3NhZ2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgIHJldHVybiB0aGlzLl9hdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCh1c2VyLmVtYWlsLCB1c2VyLnBhc3N3b3JkKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0OmFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yOmFueSkge1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZXNldFBhc3N3b3JkKGVtYWlsOiBhbnkpe1xuICAgIGlmIChDb25maWcuSVNfTU9CSUxFX05BVElWRSgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5maXJlYmFzZS5yZXNldFBhc3N3b3JkKHtcbiAgICAgIGVtYWlsOiBlbWFpbFxuICAgICAgfSkudGhlbihcbiAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSwgKGVycm9yTWVzc2FnZTogYW55KSA9PiB7XG4gICAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgLy93ZWJcbiAgICByZXR1cm4gdGhpcy5fYXV0aC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KFwiWW91J3ZlIHJlcXVlc3RlZCB0byBoYXZlIHlvdXIgcGFzc3dvcmQgcmVzZXQuIFBsZWFzZSBjaGVjayB5b3VyIGVtYWlsIHRvIHByb2NlZWQuXCIpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3I6YW55KSB7XG4gICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xuICAgICB9KTtcbiAgICB9XG4gIH0gXG5cbiAgcHVibGljIGxvZ291dCgpe1xuICAgIENvbmZpZy5pbnZhbGlkYXRlVG9rZW4oKTtcbiAgICB0aGlzLmZpcmViYXNlLmxvZ291dCgpO1xuICB9XG5cbiAgLy9lbmQgdXNlciBzZXR0aW5nc1xuXG4gIHB1YmxpYyBnZXRNeVN0dWRlbnRzKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgXG4gICAgLy90aGlzIGdldHMgdGhlIHN0dWRlbnRzIGFzc29jaWF0ZWQgdG8gdGhlIGFjY291bnRcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIGxldCBwYXRoID0gJ1N0dWRlbnRTZXR0aW5ncyc7XG4gICAgICBsZXQgbGlzdGVuZXI6IGFueTtcblxuICAgICAgaWYgKENvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkpIHtcbiAgICAgICAgICBcbiAgICAgICAgdGhpcy5Mb2FkaW5nSW5kaWNhdG9yLnNob3coeyBtZXNzYWdlOiAnRmluZGluZyBteSBTdHVkZW50cy4uLicgfSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLmhhbmRsZVNuYXBzaG90KHNuYXBzaG90LnZhbHVlKTtcbiAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xuICAgICAgICAgICAgIHRoaXMuTG9hZGluZ0luZGljYXRvci5oaWRlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5maXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLkxvYWRpbmdJbmRpY2F0b3IuaGlkZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8qdGhpcy5maXJlYmFzZS5xdWVyeShcbiAgICAgICAgICBvblZhbHVlRXZlbnQsIFxuICAgICAgICAgIGAvJHtwYXRofWAsXG4gICAgICAgICAge1xuICAgICAgICAgICAgb3JkZXJCeToge1xuICAgICAgICAgICAgICB0eXBlOiB0aGlzLmZpcmViYXNlLlF1ZXJ5T3JkZXJCeVR5cGUuQ0hJTEQsXG4gICAgICAgICAgICAgIHZhbHVlOiAnVUlEJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJhbmdlczogW3tcbiAgICAgICAgICAgICAgdHlwZTogdGhpcy5maXJlYmFzZS5RdWVyeVJhbmdlVHlwZS5FUVVBTF9UTyxcbiAgICAgICAgICAgICAgdmFsdWU6IENvbmZpZy50b2tlblxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XG4gICAgICAgICkqL1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0ZW5lciA9IHRoaXMuZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYocGF0aCkub3JkZXJCeUNoaWxkKCdkYXRlJylcbiAgICAgICAgICAub24oJ3ZhbHVlJywgKHNuYXBzaG90OmFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLmhhbmRsZVNuYXBzaG90KHNuYXBzaG90LnZhbHVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCBvYnNlcnZlci5lcnJvcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIC8vIFVuc3Vic2NyaWJlXG4gICAgICAgIGlmIChDb25maWcuSVNfTU9CSUxFX05BVElWRSgpKSB7XG4gICAgICAgICAgLy8gbm90aGluZyBuZWVkcyB0byBjbGVhbiB1cCB3aXRoIG5hdGl2ZSBmaXJlYmFzZSBJIGRvbid0IHRoaW5rP1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNsZWFudXAgYW5kIGRldGFjaCBsaXN0ZW5lclxuICAgICAgICAgIHRoaXMuZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYocGF0aCkub2ZmKCd2YWx1ZScsIGxpc3RlbmVyKTtcbiAgICAgICAgfSAgICAgXG4gICAgICB9O1xuICAgIH0pLnNoYXJlKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TXlQcmFjdGljZXMoaWQ6c3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvL3RoaXMgZ2V0cyB0aGUgcHJhY3RpY2VzIGFzc29jaWF0ZWQgdG8gYSBzdHVkZW50XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBsZXQgcGF0aCA9ICdQcmFjdGljZXMnO1xuICAgICAgbGV0IGxpc3RlbmVyOiBhbnk7XG5cbiAgICAgIGlmIChDb25maWcuSVNfTU9CSUxFX05BVElWRSgpKSB7XG4gICAgICAgICAgXG4gICAgICAgIHRoaXMuTG9hZGluZ0luZGljYXRvci5zaG93KHsgbWVzc2FnZTogJ0ZpbmRpbmcgUHJhY3RpY2VzLi4uJyB9KTtcbiAgICAgICAgICBcbiAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5oYW5kbGVQcmFjdGljZVNuYXBzaG90KGlkLHNuYXBzaG90LnZhbHVlLCBwYXRoKTtcbiAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5Mb2FkaW5nSW5kaWNhdG9yLmhpZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3RlbmVyID0gdGhpcy5maXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS5vcmRlckJ5Q2hpbGQoJ2RhdGUnKVxuICAgICAgICAgIC5vbigndmFsdWUnLCAoc25hcHNob3Q6YW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHRoaXMuaGFuZGxlUHJhY3RpY2VTbmFwc2hvdChpZCwgc25hcHNob3QudmFsdWUsIHBhdGgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIG9ic2VydmVyLmVycm9yKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgLy8gVW5zdWJzY3JpYmVcbiAgICAgICAgaWYgKENvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkpIHtcbiAgICAgICAgICAvLyBub3RoaW5nIG5lZWRzIHRvIGNsZWFuIHVwIHdpdGggbmF0aXZlIGZpcmViYXNlIEkgZG9uJ3QgdGhpbms/XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2xlYW51cCBhbmQgZGV0YWNoIGxpc3RlbmVyXG4gICAgICAgICAgdGhpcy5maXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS5vZmYoJ3ZhbHVlJywgbGlzdGVuZXIpO1xuICAgICAgICB9ICAgICBcbiAgICAgIH07XG4gICAgfSkuc2hhcmUoKTtcbiAgfVxuXG5wdWJsaWMgZ2V0QXJjaGl2ZWRQcmFjdGljZXMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvL3RoaXMgZ2V0cyB0aGUgcHJhY3RpY2VzIGFzc29jaWF0ZWQgdG8gYSB0ZWFjaGVyXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBsZXQgcGF0aCA9ICdQcmFjdGljZXMnO1xuICAgICAgbGV0IGxpc3RlbmVyOiBhbnk7XG5cbiAgICAgIGlmIChDb25maWcuSVNfTU9CSUxFX05BVElWRSgpKSB7XG4gICAgICAgICAgXG4gICAgICAgIHRoaXMuTG9hZGluZ0luZGljYXRvci5zaG93KHsgbWVzc2FnZTogJ0ZpbmRpbmcgUHJhY3RpY2VzLi4uJyB9KTtcbiAgICAgICAgICBcbiAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5oYW5kbGVQcmFjdGljZUFyY2hpdmVTbmFwc2hvdChzbmFwc2hvdC52YWx1ZSwgcGF0aCk7XG4gICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAvJHtwYXRofWApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuTG9hZGluZ0luZGljYXRvci5oaWRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0ZW5lciA9IHRoaXMuZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYocGF0aCkub3JkZXJCeUNoaWxkKCdkYXRlJylcbiAgICAgICAgICAub24oJ3ZhbHVlJywgKHNuYXBzaG90OmFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLmhhbmRsZVByYWN0aWNlQXJjaGl2ZVNuYXBzaG90KHNuYXBzaG90LnZhbHVlLCBwYXRoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCBvYnNlcnZlci5lcnJvcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIC8vIFVuc3Vic2NyaWJlXG4gICAgICAgIGlmIChDb25maWcuSVNfTU9CSUxFX05BVElWRSgpKSB7XG4gICAgICAgICAgLy8gbm90aGluZyBuZWVkcyB0byBjbGVhbiB1cCB3aXRoIG5hdGl2ZSBmaXJlYmFzZSBJIGRvbid0IHRoaW5rP1xuICAgICAgICAgIC8vIG1heSBuZWVkIHRvIGNoZWNrIHdpdGggRWRkeSwgYnV0IHNob3VsZCBiZSBvayBmb3Igbm93XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2xlYW51cCBhbmQgZGV0YWNoIGxpc3RlbmVyXG4gICAgICAgICAgdGhpcy5maXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS5vZmYoJ3ZhbHVlJywgbGlzdGVuZXIpO1xuICAgICAgICB9ICAgICBcbiAgICAgIH07XG4gICAgfSkuc2hhcmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUZWFjaGVyU3R1ZGVudHMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvL3RoaXMgZ2V0cyB0aGUgc3R1ZGVudHMgYXNzb2NpYXRlZCB0byB0aGUgYWNjb3VudFxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgbGV0IHBhdGggPSAnU3R1ZGVudFNldHRpbmdzJztcbiAgICAgIGxldCBsaXN0ZW5lcjogYW55O1xuXG4gICAgICBpZiAoQ29uZmlnLklTX01PQklMRV9OQVRJVkUoKSkge1xuICAgICAgICAgIFxuICAgICAgICB0aGlzLkxvYWRpbmdJbmRpY2F0b3Iuc2hvdyh7IG1lc3NhZ2U6ICdGaW5kaW5nIFN0dWRlbnRzLi4uJyB9KTtcbiAgICAgICAgICBcbiAgICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5oYW5kbGVUZWFjaGVyU3R1ZGVudHNTbmFwc2hvdChzbmFwc2hvdC52YWx1ZSwgcGF0aCk7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5Mb2FkaW5nSW5kaWNhdG9yLmhpZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3RlbmVyID0gdGhpcy5maXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS5vcmRlckJ5Q2hpbGQoJ2RhdGUnKVxuICAgICAgICAgIC5vbigndmFsdWUnLCAoc25hcHNob3Q6YW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHRoaXMuaGFuZGxlVGVhY2hlclN0dWRlbnRzU25hcHNob3Qoc25hcHNob3QudmFsdWUsIHBhdGgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIG9ic2VydmVyLmVycm9yKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgLy8gVW5zdWJzY3JpYmVcbiAgICAgICAgaWYgKENvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkpIHtcbiAgICAgICAgICAvLyBub3RoaW5nIG5lZWRzIHRvIGNsZWFuIHVwIHdpdGggbmF0aXZlIGZpcmViYXNlIEkgZG9uJ3QgdGhpbms/XG4gICAgICAgICAgLy8gbWF5IG5lZWQgdG8gY2hlY2sgd2l0aCBFZGR5LCBidXQgc2hvdWxkIGJlIG9rIGZvciBub3dcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjbGVhbnVwIGFuZCBkZXRhY2ggbGlzdGVuZXJcbiAgICAgICAgICB0aGlzLmZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHBhdGgpLm9mZigndmFsdWUnLCBsaXN0ZW5lcik7XG4gICAgICAgIH0gICAgIFxuICAgICAgfTtcbiAgICB9KS5zaGFyZSgpO1xuICB9XG5cbiAgcHVibGljIGdldE15U3R1ZGVudChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIG9ic2VydmVyLm5leHQodGhpcy5fYWxsSXRlbXMuZmlsdGVyKHMgPT4gcy5pZCA9PT0gaWQpWzBdKTtcbiAgICB9KS5zaGFyZSgpO1xuICB9XG4gIFxuICBwdWJsaWMgYWRkKG5hbWU6IHN0cmluZykgeyAgIFxuICAgIHJldHVybiB0aGlzLmZpcmViYXNlLnB1c2goXG4gICAgICAgIFwiL1N0dWRlbnRTZXR0aW5nc1wiLFxuICAgICAgICB7XG4gICAgICAgICAgXCJOYW1lXCI6IG5hbWUsXG4gICAgICAgICAgXCJEYXRlXCI6IDAgLSBEYXRlLm5vdygpLCBcbiAgICAgICAgICBcIlByYWN0aWNlc1JlcXVpcmVkXCI6IDUsXG4gICAgICAgICAgXCJQcmFjdGljZXNDb21wbGV0ZWRcIjogMCwgXG4gICAgICAgICAgXCJQcmFjdGljZUxlbmd0aFwiOiAyMCwgXG4gICAgICAgICAgXCJSZXdhcmRcIjogXCJBIHNwZWNpYWwgcHJpemUhXCIsXG4gICAgICAgICAgXCJBZG1pblBhc3N3b3JkXCI6IFwiXCIsXG4gICAgICAgICAgXCJUZWFjaGVyRW1haWxcIjogXCJcIixcbiAgICAgICAgICBcIkluc3RydW1lbnRcIjogMTAsXG4gICAgICAgICAgXCJOb3RpZnlBbGxcIjogZmFsc2UsXG4gICAgICAgICAgXCJVSURcIjogQ29uZmlnLnRva2VuXG4gICAgICAgIH1cbiAgICAgICkudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcbiAgICAgICAgICByZXR1cm4gJ1N0dWRlbnQgYWRkZWQhJztcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9KTsgXG4gIH1cblxuICBwdWJsaWMgaW5jcmVtZW50UHJhY3RpY2VzQ29tcGxldGVkKGlkOnN0cmluZyxjdXJyUHJhY3RpY2VzQ29tcGxldGVkOm51bWJlcil7XG4gICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgIHJldHVybiB0aGlzLmZpcmViYXNlLnVwZGF0ZShcIi9TdHVkZW50U2V0dGluZ3MvXCIraWQrXCJcIix7UHJhY3RpY2VzQ29tcGxldGVkOiBjdXJyUHJhY3RpY2VzQ29tcGxldGVkfSlcbiAgICAgIC50aGVuKFxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xuICAgICAgICAgIHJldHVybiAnU3R1ZGVudCBpbmZvcm1hdGlvbiBzYXZlZCEnO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pOyAgXG4gIH1cblxuICBwdWJsaWMgd3JpdGVQcmFjdGljZShpZDpzdHJpbmcsIG5hbWU6IHN0cmluZywgcHJhY3RpY2VsZW5ndGg6bnVtYmVyLCB0ZWFjaGVyZW1haWw6IHN0cmluZywgdHJhY2s6c3RyaW5nKXtcbiAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgcmV0dXJuIHRoaXMuZmlyZWJhc2UucHVzaChcIi9QcmFjdGljZXMvXCIse1N0dWRlbnRJZDogaWQsIE5hbWU6IG5hbWUsIERhdGU6IHRoaXMuZmlyZWJhc2UuU2VydmVyVmFsdWUuVElNRVNUQU1QLCBQcmFjdGljZUxlbmd0aDogcHJhY3RpY2VsZW5ndGgsIFRlYWNoZXJFbWFpbDogdGVhY2hlcmVtYWlsLCBUcmFjazogdHJhY2t9KVxuICAgICAgLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XG4gICAgICAgICAgcmV0dXJuICdQcmFjdGljZSBpbmZvcm1hdGlvbiBzYXZlZCEnO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pOyAgXG4gIH1cblxuICBwdWJsaWMgYWRkQ29tbWVudChpZDpzdHJpbmcsIGNvbW1lbnQ6IHN0cmluZyl7XG4gICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgIHJldHVybiB0aGlzLmZpcmViYXNlLnVwZGF0ZShcIi9QcmFjdGljZXMvXCIraWQrXCJcIix7Q29tbWVudDogY29tbWVudH0pXG4gICAgICAudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcbiAgICAgICAgICByZXR1cm4gJ1ByYWN0aWNlIENvbW1lbnRlZCEnO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pOyAgXG4gIH1cblxuICBwdWJsaWMgYWRkQXdhcmQoaWQ6c3RyaW5nLCBzdGlja2VySWQ6IG51bWJlcil7XG4gICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgIHJldHVybiB0aGlzLmZpcmViYXNlLnVwZGF0ZShcIi9QcmFjdGljZXMvXCIraWQrXCJcIix7U3RpY2tlcjogc3RpY2tlcklkfSlcbiAgICAgIC50aGVuKFxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xuICAgICAgICAgIHJldHVybiAnU3RpY2tlciBBZGRlZCEnO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pOyAgXG4gIH1cblxuICBwdWJsaWMgbWFya0NvbXBsZXRlKGlkOnN0cmluZyl7XG4gICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgIHJldHVybiB0aGlzLmZpcmViYXNlLnVwZGF0ZShcIi9QcmFjdGljZXMvXCIraWQrXCJcIix7QXJjaGl2ZTogdHJ1ZX0pXG4gICAgICAudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcbiAgICAgICAgICByZXR1cm4gJ1ByYWN0aWNlIEFyY2hpdmVkISc7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfSk7ICBcbiAgfVxuXG4gIHB1YmxpYyBjbGVhclByYWN0aWNlc0NvbXBsZXRlZChpZDpzdHJpbmcpe1xuICAgIC8vc2V0cyBwcmFjdGljZXMgdG8gemVyb1xuICAgIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcbiAgICByZXR1cm4gdGhpcy5maXJlYmFzZS51cGRhdGUoXCIvU3R1ZGVudFNldHRpbmdzL1wiK2lkK1wiXCIse1ByYWN0aWNlc0NvbXBsZXRlZDogMH0pXG4gICAgICAudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcbiAgICAgICAgICByZXR1cm4gJ0NvbmdyYXR1bGF0aW9ucyEgWW91IGNvbXBsZXRlZCBhIHByYWN0aWNlIGdvYWwhJztcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9KTsgIFxuICB9XG5cbiAgcHVibGljIHNhdmVTZXR0aW5ncyhzdHVkZW50OiBTdHVkZW50TW9kZWwpe1xuICAgIC8vZG9uJ3Qgc2F2ZSBhbnl0aGluZyB0byAncHJhY3RpY2VzY29tcGxldGVkJ1xuICAgIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcbiAgICByZXR1cm4gdGhpcy5maXJlYmFzZS51cGRhdGUoXCIvU3R1ZGVudFNldHRpbmdzL1wiK3N0dWRlbnQuaWQrXCJcIix7TmFtZTpzdHVkZW50Lk5hbWUsIEluc3RydW1lbnQ6c3R1ZGVudC5JbnN0cnVtZW50LCBBZG1pblBhc3N3b3JkOnN0dWRlbnQuQWRtaW5QYXNzd29yZCwgUHJhY3RpY2VzUmVxdWlyZWQ6c3R1ZGVudC5QcmFjdGljZXNSZXF1aXJlZCwgUHJhY3RpY2VMZW5ndGg6c3R1ZGVudC5QcmFjdGljZUxlbmd0aCwgUmV3YXJkOnN0dWRlbnQuUmV3YXJkLCBUZWFjaGVyRW1haWw6c3R1ZGVudC5UZWFjaGVyRW1haWwsIE5vdGlmeUFsbDpzdHVkZW50Lk5vdGlmeUFsbH0pXG4gICAgICAudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcbiAgICAgICAgICByZXR1cm4gJ1N0dWRlbnQgaW5mb3JtYXRpb24gc2F2ZWQhJztcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9KTsgIFxuICB9XG4gIFxuICBwdWJsaWMgZGVsZXRlU3R1ZGVudChzdHVkZW50OiBTdHVkZW50TW9kZWwpIHtcbiAgICByZXR1cm4gdGhpcy5maXJlYmFzZS5yZW1vdmUoXCIvU3R1ZGVudFNldHRpbmdzL1wiK3N0dWRlbnQuaWQrXCJcIilcbiAgICAgIC50aGVuKFxuICAgICAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKClcbiAgICAgIClcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RG93bmxvYWRVcmwocmVtb3RlRmlsZVBhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICByZXR1cm4gdGhpcy5maXJlYmFzZS5nZXREb3dubG9hZFVybCh7XG4gICAgICAgIHJlbW90ZUZ1bGxQYXRoOiByZW1vdGVGaWxlUGF0aH0pXG4gICAgICAudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHVybDpzdHJpbmcpIHtcbiAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pO1xufVxuXG5cbiAgcHVibGljIHNhdmVSZWNvcmRpbmcobG9jYWxQYXRoOiBzdHJpbmcsIGZpbGU/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIGxldCBmaWxlbmFtZSA9IHRoaXMudXRpbHMuZ2V0RmlsZW5hbWUobG9jYWxQYXRoKTtcbiAgICBsZXQgcmVtb3RlUGF0aCA9IGAke2ZpbGVuYW1lfWA7XG4gICAgaWYgKENvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpcmViYXNlLnVwbG9hZEZpbGUoe1xuICAgICAgICByZW1vdGVGdWxsUGF0aDogcmVtb3RlUGF0aCxcbiAgICAgICAgbG9jYWxGdWxsUGF0aDogbG9jYWxQYXRoXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZmlyZWJhc2Uuc3RvcmFnZSgpLnJlZigpLmNoaWxkKHJlbW90ZVBhdGgpLnB1dChmaWxlKTtcbiAgICB9XG4gIH1cblxuICAvKiB0aGlzIHdvcmtzIG9rLCBidXQgY2F1c2VzIHByb2JsZW1zIGRvd25zdHJlYW0pXG4gIGhhbmRsZVNuYXBzaG90KGRhdGE6IGFueSkge1xuICAgIC8vZW1wdHkgYXJyYXksIHRoZW4gcmVmaWxsXG4gICAgLy90aGlzLl9hbGxJdGVtcyA9IFtdOyAgICBcbiAgICBpZiAoZGF0YSkge1xuICAgICAgbGV0IHJlc3VsdDogYW55O1xuICAgICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcbiAgICAgICAgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBkYXRhLmtleX0sIGRhdGEudmFsdWUpO1xuICAgICAgICBcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FsbEl0ZW1zLnB1c2gocmVzdWx0KTsgXG4gICAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7ICBcbiAgICB9XG4gICAgICAgIFxuICAgIHJldHVybiB0aGlzLl9hbGxJdGVtcztcbiAgfSovXG4gIGhhbmRsZVNuYXBzaG90KGRhdGE6IGFueSkge1xuICAgIC8vZW1wdHkgYXJyYXksIHRoZW4gcmVmaWxsXG4gICAgdGhpcy5fYWxsSXRlbXMgPSBbXTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgZm9yIChsZXQgaWQgaW4gZGF0YSkgeyAgICAgICAgXG4gICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6IGlkfSwgZGF0YVtpZF0pO1xuICAgICAgICBpZihDb25maWcudG9rZW4gPT09IHJlc3VsdC5VSUQpe1xuICAgICAgICAgIHRoaXMuX2FsbEl0ZW1zLnB1c2gocmVzdWx0KTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgICB9XG4gICAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9hbGxJdGVtcztcbiAgfVxuXG4gIGhhbmRsZVRlYWNoZXJTdHVkZW50c1NuYXBzaG90KGRhdGE6IGFueSwgcGF0aD86IHN0cmluZykge1xuICAgIC8vZW1wdHkgYXJyYXksIHRoZW4gcmVmaWxsXG4gICAgdGhpcy5fYWxsVGVhY2hlclN0dWRlbnRzSXRlbXMgPSBbXTtcbiAgICBpZiAocGF0aClcbiAgICBpZiAoZGF0YSkge1xuICAgICAgZm9yIChsZXQgaWQgaW4gZGF0YSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcbiAgICAgICAgaWYoQ29uZmlnLmVtYWlsID09PSByZXN1bHQuVGVhY2hlckVtYWlsKXtcbiAgICAgICAgICAgIHRoaXMuX2FsbFRlYWNoZXJTdHVkZW50c0l0ZW1zLnB1c2gocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5wdWJsaXNoVGVhY2hlclN0dWRlbnRzVXBkYXRlcygpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYWxsVGVhY2hlclN0dWRlbnRzSXRlbXM7XG4gIH1cblxuICBoYW5kbGVQcmFjdGljZUFyY2hpdmVTbmFwc2hvdChkYXRhOiBhbnksIHBhdGg/OiBzdHJpbmcpIHtcbiAgICAvL2VtcHR5IGFycmF5LCB0aGVuIHJlZmlsbFxuICAgIHRoaXMuX2FsbFByYWN0aWNlQXJjaGl2ZUl0ZW1zID0gW107XG4gICAgaWYgKHBhdGgpXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGZvciAobGV0IGlkIGluIGRhdGEpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHtpZDogaWR9LCBkYXRhW2lkXSk7XG4gICAgICAgIGlmKENvbmZpZy5lbWFpbCA9PT0gcmVzdWx0LlRlYWNoZXJFbWFpbCAmJiByZXN1bHQuQXJjaGl2ZSl7XG4gICAgICAgICAgICB0aGlzLl9hbGxQcmFjdGljZUFyY2hpdmVJdGVtcy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMucHVibGlzaFByYWN0aWNlQXJjaGl2ZVVwZGF0ZXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2FsbFByYWN0aWNlQXJjaGl2ZUl0ZW1zO1xuICB9XG5cbiAgaGFuZGxlUHJhY3RpY2VTbmFwc2hvdChzdHVkZW50SWQ6IHN0cmluZywgZGF0YTogYW55LCBwYXRoPzogc3RyaW5nKSB7XG4gICAgLy9lbXB0eSBhcnJheSwgdGhlbiByZWZpbGxcbiAgICB0aGlzLl9hbGxQcmFjdGljZUl0ZW1zID0gW107XG4gICAgaWYgKHBhdGgpXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGZvciAobGV0IGlkIGluIGRhdGEpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHtpZDogaWR9LCBkYXRhW2lkXSk7XG4gICAgICAgIGlmKHN0dWRlbnRJZCA9PT0gcmVzdWx0LlN0dWRlbnRJZCl7XG4gICAgICAgICAgdGhpcy5fYWxsUHJhY3RpY2VJdGVtcy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9XG4gICAgICB0aGlzLnB1Ymxpc2hQcmFjdGljZVVwZGF0ZXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2FsbFByYWN0aWNlSXRlbXM7XG4gIH1cblxuICBwdWJsaXNoVXBkYXRlcygpIHtcbiAgICAvLyBtdXN0IGVtaXQgYSAqbmV3KiB2YWx1ZSAoaW1tdXRhYmlsaXR5ISlcbiAgICB0aGlzLl9hbGxJdGVtcy5zb3J0KGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgICBpZihhLkRhdGUgPCBiLkRhdGUpIHJldHVybiAtMTtcbiAgICAgICAgaWYoYS5EYXRlID4gYi5EYXRlKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pXG4gICAgdGhpcy5pdGVtcy5uZXh0KFsuLi50aGlzLl9hbGxJdGVtc10pO1xuICB9XG5cbiAgcHVibGlzaFByYWN0aWNlVXBkYXRlcygpIHtcbiAgICAvLyBtdXN0IGVtaXQgYSAqbmV3KiB2YWx1ZSAoaW1tdXRhYmlsaXR5ISlcbiAgICB0aGlzLl9hbGxQcmFjdGljZUl0ZW1zLnNvcnQoZnVuY3Rpb24oYSwgYil7XG4gICAgICAgIGlmKGEuRGF0ZSA+IGIuRGF0ZSkgcmV0dXJuIC0xO1xuICAgICAgICBpZihhLkRhdGUgPCBiLkRhdGUpIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSlcbiAgICB0aGlzLnByYWN0aWNlaXRlbXMubmV4dChbLi4udGhpcy5fYWxsUHJhY3RpY2VJdGVtc10pO1xuICB9XG5cbiAgcHVibGlzaFByYWN0aWNlQXJjaGl2ZVVwZGF0ZXMoKSB7XG4gICAgLy8gbXVzdCBlbWl0IGEgKm5ldyogdmFsdWUgKGltbXV0YWJpbGl0eSEpXG4gICAgdGhpcy5fYWxsUHJhY3RpY2VBcmNoaXZlSXRlbXMuc29ydChmdW5jdGlvbihhLCBiKXtcbiAgICAgICAgaWYoYS5EYXRlID4gYi5EYXRlKSByZXR1cm4gLTE7XG4gICAgICAgIGlmKGEuRGF0ZSA8IGIuRGF0ZSkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KVxuICAgIHRoaXMucHJhY3RpY2VhcmNoaXZlaXRlbXMubmV4dChbLi4udGhpcy5fYWxsUHJhY3RpY2VBcmNoaXZlSXRlbXNdKTtcbiAgfVxuXG4gIHB1Ymxpc2hUZWFjaGVyU3R1ZGVudHNVcGRhdGVzKCkge1xuICAgIC8vIG11c3QgZW1pdCBhICpuZXcqIHZhbHVlIChpbW11dGFiaWxpdHkhKVxuICAgIHRoaXMuX2FsbFRlYWNoZXJTdHVkZW50c0l0ZW1zLnNvcnQoZnVuY3Rpb24oYSwgYil7XG4gICAgICAgIGlmKGEuRGF0ZSA8IGIuRGF0ZSkgcmV0dXJuIC0xO1xuICAgICAgICBpZihhLkRhdGUgPiBiLkRhdGUpIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSlcbiAgICB0aGlzLnRlYWNoZXJzdHVkZW50c2l0ZW1zLm5leHQoWy4uLnRoaXMuX2FsbFRlYWNoZXJTdHVkZW50c0l0ZW1zXSk7XG4gIH1cblxuICBoYW5kbGVFcnJvcnMoZXJyb3I6YW55KSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UpO1xuICB9XG5cbn1cbiJdfQ==
