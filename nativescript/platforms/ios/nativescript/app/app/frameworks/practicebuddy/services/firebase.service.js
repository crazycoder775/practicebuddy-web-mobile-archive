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
var log_service_1 = require("../../core/services/log.service");
var config_1 = require("../../core/utils/config");
var tokens_1 = require("../../core/tokens");
var utils_service_1 = require("../../core/services/utils.service");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var router_1 = require("@angular/router");
require("rxjs/add/operator/share");
require("rxjs/add/operator/find");
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
        this.LoadingIndicator.show({ message: 'Logging in...' });
        if (config_1.Config.IS_MOBILE_NATIVE()) {
            return this.firebase.login({
                type: this.firebase.LoginType.PASSWORD,
                email: user.email,
                password: user.password
            }).then(function (result) {
                _this.LoadingIndicator.hide();
                config_1.Config.token = result.uid;
                config_1.Config.email = result.user.email;
                return JSON.stringify(result);
            }, function (errorMessage) {
                _this.LoadingIndicator.hide();
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
                this.LoadingIndicator.hide();
                alert(error.message);
            });
        }
    };
    FirebaseService.prototype.register = function (user) {
        var _this = this;
        this.LoadingIndicator.show({ message: 'Registering...' });
        if (config_1.Config.IS_MOBILE_NATIVE()) {
            return this.firebase.createUser({
                email: user.email,
                password: user.password
            }).then(function (result) {
                this.LoadingIndicator.hide();
                return JSON.stringify(result);
            }, function (errorMessage) {
                _this.LoadingIndicator.hide();
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
            return result;
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    FirebaseService.prototype.addPracticeTrack = function (id, track) {
        this.publishUpdates();
        return this.firebase.update("/Practices/" + id + "", { Track: track })
            .then(function (result) {
            return 'Practice track added!';
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
    FirebaseService.prototype.deleteStudent = function (id) {
        return this.firebase.remove("/StudentSettings/" + id + "")
            .then(this.publishUpdates())
            .catch(this.handleErrors);
    };
    FirebaseService.prototype.getDownloadUrl = function (remoteFilePath) {
        return this.firebase.getDownloadUrl({
            remoteFullPath: remoteFilePath
        })
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
    return FirebaseService;
}());
FirebaseService = __decorate([
    core_1.Injectable(),
    __param(4, core_1.Inject(tokens_1.FIREBASE)),
    __param(5, core_1.Inject(tokens_1.LOADER)),
    __param(6, core_1.Inject(tokens_1.APPSETTINGS)),
    __param(7, core_1.Inject(tokens_1.NAVIGATION_EXTENSIONS)),
    __metadata("design:paramtypes", [log_service_1.LogService,
        core_1.NgZone,
        utils_service_1.UtilsService,
        router_1.Router, Object, Object, Object, Object])
], FirebaseService);
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF5RDtBQUN6RCwrREFBMkQ7QUFDM0Qsa0RBQStDO0FBQy9DLDRDQUF1RjtBQUN2RixtRUFBK0Q7QUFDL0QsOENBQTJDO0FBQzNDLHdEQUFxRDtBQUNyRCwwQ0FBeUQ7QUFDekQsbUNBQWlDO0FBQ2pDLGtDQUFnQztBQVFoQyxJQUFhLGVBQWU7SUFjMUIseUJBQ1UsTUFBa0IsRUFDbEIsTUFBYyxFQUNkLEtBQW1CLEVBQ25CLE9BQWUsRUFDRyxRQUFhLEVBQ2YsZ0JBQXFCLEVBQ2hCLFdBQWdCLEVBQ04sZ0JBQXFCO1FBUjlELGlCQStDQztRQTlDUyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDRyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ2YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFLO1FBQ2hCLGdCQUFXLEdBQVgsV0FBVyxDQUFLO1FBQ04scUJBQWdCLEdBQWhCLGdCQUFnQixDQUFLO1FBbEI5RCxVQUFLLEdBQXlDLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RSxrQkFBYSxHQUEwQyxJQUFJLGlDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0UseUJBQW9CLEdBQXlDLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyRix5QkFBb0IsR0FBMEMsSUFBSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTlFLGNBQVMsR0FBd0IsRUFBRSxDQUFDO1FBQ3BDLHNCQUFpQixHQUF5QixFQUFFLENBQUM7UUFDN0MsNkJBQXdCLEdBQXdCLEVBQUUsQ0FBQztRQUNuRCw2QkFBd0IsR0FBeUIs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QUFDO1lBQzVDLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBSyxJQUFJLENBQUMsd0JBQXdCLFNBQUUsQ0FBQztJQUNyRSxDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLEtBQVM7UUFDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFSCxzQkFBQztBQUFELENBQUMsQUFobkJELElBZ25CQztBQWhuQlksZUFBZTtJQUQzQixpQkFBVSxFQUFFO0lBb0JSLFdBQUEsYUFBTSxDQUFDLGlCQUFRLENBQUMsQ0FBQTtJQUNoQixXQUFBLGFBQU0sQ0FBQyxlQUFNLENBQUMsQ0FBQTtJQUNkLFdBQUEsYUFBTSxDQUFDLG9CQUFXLENBQUMsQ0FBQTtJQUNuQixXQUFBLGFBQU0sQ0FBQyw4QkFBcUIsQ0FBQyxDQUFBO3FDQVBkLHdCQUFVO1FBQ1YsYUFBTTtRQUNQLDRCQUFZO1FBQ1YsZUFBTTtHQWxCZCxlQUFlLENBZ25CM0I7QUFobkJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3QsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0xvZ1NlcnZpY2V9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHtDb25maWd9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMvY29uZmlnJztcbmltcG9ydCB7RklSRUJBU0UsIExPQURFUiwgQVBQU0VUVElOR1MsIE5BVklHQVRJT05fRVhURU5TSU9OU30gZnJvbSAnLi4vLi4vY29yZS90b2tlbnMnO1xuaW1wb3J0IHtVdGlsc1NlcnZpY2V9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvdXRpbHMuc2VydmljZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3NoYXJlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmluZCc7XG5pbXBvcnQge1VzZXJNb2RlbH0gZnJvbSAnLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0IHtTdHVkZW50TW9kZWx9IGZyb20gJy4uL21vZGVscy9zdHVkZW50Lm1vZGVsJztcbmltcG9ydCB7UHJhY3RpY2VNb2RlbH0gZnJvbSAnLi4vbW9kZWxzL3ByYWN0aWNlLm1vZGVsJztcblxuZGVjbGFyZSB2YXIgem9uZWRDYWxsYmFjazogRnVuY3Rpb247XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVNlcnZpY2Uge1xuICBwcml2YXRlIF9hdXRoOiBhbnk7XG4gIHByaXZhdGUgX2RhdGFiYXNlOiBhbnk7XG4gIFxuICBpdGVtczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PFN0dWRlbnRNb2RlbD4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIHByYWN0aWNlaXRlbXM6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxQcmFjdGljZU1vZGVsPj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgdGVhY2hlcnN0dWRlbnRzaXRlbXM6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxTdHVkZW50TW9kZWw+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pOyBcbiAgcHJhY3RpY2VhcmNoaXZlaXRlbXM6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxQcmFjdGljZU1vZGVsPj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgXG4gIHByaXZhdGUgX2FsbEl0ZW1zOiBBcnJheTxTdHVkZW50TW9kZWw+ID0gW107XG4gIHByaXZhdGUgX2FsbFByYWN0aWNlSXRlbXM6IEFycmF5PFByYWN0aWNlTW9kZWw+ID0gW107XG4gIHByaXZhdGUgX2FsbFRlYWNoZXJTdHVkZW50c0l0ZW1zOiBBcnJheTxTdHVkZW50TW9kZWw+ID0gW107XG4gIHByaXZhdGUgX2FsbFByYWN0aWNlQXJjaGl2ZUl0ZW1zOiBBcnJheTxQcmFjdGljZU1vZGVsPiA9IFtdO1xuICBcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHV0aWxzOiBVdGlsc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgQEluamVjdChGSVJFQkFTRSkgcHJpdmF0ZSBmaXJlYmFzZTogYW55LFxuICAgIEBJbmplY3QoTE9BREVSKSBwcml2YXRlIExvYWRpbmdJbmRpY2F0b3I6IGFueSxcbiAgICBASW5qZWN0KEFQUFNFVFRJTkdTKSBwcml2YXRlIEFwcFNldHRpbmdzOiBhbnksXG4gICAgQEluamVjdChOQVZJR0FUSU9OX0VYVEVOU0lPTlMpIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogYW55KSB7XG4gICAgbG9nZ2VyLmRlYnVnKGBGaXJlYmFzZSBpbml0aWFsaXppbmcuLi5gKTtcblxuICAgIGlmIChDb25maWcuSVNfTU9CSUxFX05BVElWRSgpKSB7XG4gICAgICBmaXJlYmFzZS5pbml0KHtcbiAgICAgICAgLy9rZWVwIHBlcnNpc3QgZmFsc2Ugb3IgeW91IHdvbid0IGdldCBudW1iZXJzIGJhY2shXG4gICAgICAgIHBlcnNpc3Q6IGZhbHNlLFxuICAgICAgICBzdG9yYWdlQnVja2V0OiAnZ3M6Ly9wcmFjdGljZWJ1ZGR5LTRkNDY2LmFwcHNwb3QuY29tJyxcbiAgICAgICAgLy8gaU9TRW11bGF0b3JGbHVzaDogdHJ1ZSxcbiAgICAgICAgb25BdXRoU3RhdGVDaGFuZ2VkOiAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYExvZ2dlZCAke2RhdGEubG9nZ2VkSW4gPyAnaW50bycgOiAnb3V0IG9mJ30gZmlyZWJhc2UuYCk7XG4gICAgICAgICAgaWYoZGF0YS5sb2dnZWRJbil7XG4gICAgICAgICAgICBDb25maWcudG9rZW4gPSBkYXRhLnVzZXIudWlkO1xuICAgICAgICAgICAgQ29uZmlnLmVtYWlsID0gZGF0YS51c2VyLmVtYWlsO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIlwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnZmlyZWJhc2UuaW5pdCBkb25lJyk7XG4gICAgICB9LCAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnZmlyZWJhc2UuaW5pdCBlcnJvcjogJyArIGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHdlYlxuICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgYXBpS2V5OiBcIkFJemFTeUQxemZDZEdlaTFPVTl3cGhXVHU4d05qYXJqd2UtclJ3UVwiLFxuICAgICAgICBhdXRoRG9tYWluOiBcInByYWN0aWNlYnVkZHktNGQ0NjYuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vcHJhY3RpY2VidWRkeS00ZDQ2Ni5maXJlYmFzZWlvLmNvbVwiLFxuICAgICAgICBzdG9yYWdlQnVja2V0OiBcInByYWN0aWNlYnVkZHktNGQ0NjYuYXBwc3BvdC5jb21cIixcbiAgICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODU4NTcxMDQ1MzgxXCJcbiAgICAgIH07XG4gICAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG4gICAgICB0aGlzLl9kYXRhYmFzZSA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XG4gICAgICB0aGlzLl9hdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBsb2dpbih1c2VyOiBVc2VyTW9kZWwpIHtcbiAgICB0aGlzLkxvYWRpbmdJbmRpY2F0b3Iuc2hvdyh7IG1lc3NhZ2U6ICdMb2dnaW5nIGluLi4uJyB9KTtcbiAgICBpZiAoQ29uZmlnLklTX01PQklMRV9OQVRJVkUoKSkge1xuICAgIHJldHVybiB0aGlzLmZpcmViYXNlLmxvZ2luKHtcbiAgICAgIHR5cGU6IHRoaXMuZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxuICAgIH0pLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICB0aGlzLkxvYWRpbmdJbmRpY2F0b3IuaGlkZSgpO1xuICAgICAgICAgIENvbmZpZy50b2tlbiA9IHJlc3VsdC51aWQ7XG4gICAgICAgICAgQ29uZmlnLmVtYWlsID0gcmVzdWx0LnVzZXIuZW1haWw7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICB9LCAoZXJyb3JNZXNzYWdlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5Mb2FkaW5nSW5kaWNhdG9yLmhpZGUoKTtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYGZpcmViYXNlIGF1dGggZXJyb3I6YCk7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfVxuICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLl9hdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKHVzZXIuZW1haWwsIHVzZXIucGFzc3dvcmQpXG4gICAgICAudGhlbihmdW5jdGlvbihyZXN1bHQ6YW55KSB7ICAgICAgICBcbiAgICAgICAgQ29uZmlnLnRva2VuID0gcmVzdWx0LnVpZDtcbiAgICAgICAgQ29uZmlnLmVtYWlsID0gcmVzdWx0LnVzZXIuZW1haWw7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyb3I6YW55KSB7XG4gICAgICAgIHRoaXMuTG9hZGluZ0luZGljYXRvci5oaWRlKCk7XG4gICAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXIodXNlcjogVXNlck1vZGVsKXtcbiAgICB0aGlzLkxvYWRpbmdJbmRpY2F0b3Iuc2hvdyh7IG1lc3NhZ2U6ICdSZWdpc3RlcmluZy4uLicgfSk7XG4gICAgaWYgKENvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpcmViYXNlLmNyZWF0ZVVzZXIoe1xuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcbiAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcbiAgICAgICAgICAgIHRoaXMuTG9hZGluZ0luZGljYXRvci5oaWRlKCk7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICAgICAgICB9LCAoZXJyb3JNZXNzYWdlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuTG9hZGluZ0luZGljYXRvci5oaWRlKCk7XG4gICAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKHVzZXIuZW1haWwsIHVzZXIucGFzc3dvcmQpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3I6YW55KSB7XG4gICAgICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlc2V0UGFzc3dvcmQoZW1haWw6IGFueSl7XG4gICAgaWYgKENvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpcmViYXNlLnJlc2V0UGFzc3dvcmQoe1xuICAgICAgZW1haWw6IGVtYWlsXG4gICAgICB9KS50aGVuKFxuICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9LCAoZXJyb3JNZXNzYWdlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAvL3dlYlxuICAgIHJldHVybiB0aGlzLl9hdXRoLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdDphbnkpIHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoXCJZb3UndmUgcmVxdWVzdGVkIHRvIGhhdmUgeW91ciBwYXNzd29yZCByZXNldC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgdG8gcHJvY2VlZC5cIik7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcjphbnkpIHtcbiAgICAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gICAgIH0pO1xuICAgIH1cbiAgfSBcblxuICBwdWJsaWMgbG9nb3V0KCl7XG4gICAgQ29uZmlnLmludmFsaWRhdGVUb2tlbigpO1xuICAgIHRoaXMuZmlyZWJhc2UubG9nb3V0KCk7XG4gIH1cblxuICAvL2VuZCB1c2VyIHNldHRpbmdzXG5cbiAgcHVibGljIGdldE15U3R1ZGVudHMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBcbiAgICAvL3RoaXMgZ2V0cyB0aGUgc3R1ZGVudHMgYXNzb2NpYXRlZCB0byB0aGUgYWNjb3VudFxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgbGV0IHBhdGggPSAnU3R1ZGVudFNldHRpbmdzJztcbiAgICAgIGxldCBsaXN0ZW5lcjogYW55O1xuXG4gICAgICBpZiAoQ29uZmlnLklTX01PQklMRV9OQVRJVkUoKSkge1xuICAgICAgICAgIFxuICAgICAgICB0aGlzLkxvYWRpbmdJbmRpY2F0b3Iuc2hvdyh7IG1lc3NhZ2U6ICdGaW5kaW5nIG15IFN0dWRlbnRzLi4uJyB9KTtcbiAgICAgICAgXG4gICAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMuaGFuZGxlU25hcHNob3Qoc25hcHNob3QudmFsdWUpO1xuICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XG4gICAgICAgICAgICAgdGhpcy5Mb2FkaW5nSW5kaWNhdG9yLmhpZGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAvJHtwYXRofWApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuTG9hZGluZ0luZGljYXRvci5oaWRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLyp0aGlzLmZpcmViYXNlLnF1ZXJ5KFxuICAgICAgICAgIG9uVmFsdWVFdmVudCwgXG4gICAgICAgICAgYC8ke3BhdGh9YCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBvcmRlckJ5OiB7XG4gICAgICAgICAgICAgIHR5cGU6IHRoaXMuZmlyZWJhc2UuUXVlcnlPcmRlckJ5VHlwZS5DSElMRCxcbiAgICAgICAgICAgICAgdmFsdWU6ICdVSUQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmFuZ2VzOiBbe1xuICAgICAgICAgICAgICB0eXBlOiB0aGlzLmZpcmViYXNlLlF1ZXJ5UmFuZ2VUeXBlLkVRVUFMX1RPLFxuICAgICAgICAgICAgICB2YWx1ZTogQ29uZmlnLnRva2VuXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH1cbiAgICAgICAgKSovXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3RlbmVyID0gdGhpcy5maXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS5vcmRlckJ5Q2hpbGQoJ2RhdGUnKVxuICAgICAgICAgIC5vbigndmFsdWUnLCAoc25hcHNob3Q6YW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHRoaXMuaGFuZGxlU25hcHNob3Qoc25hcHNob3QudmFsdWUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIG9ic2VydmVyLmVycm9yKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgLy8gVW5zdWJzY3JpYmVcbiAgICAgICAgaWYgKENvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkpIHtcbiAgICAgICAgICAvLyBub3RoaW5nIG5lZWRzIHRvIGNsZWFuIHVwIHdpdGggbmF0aXZlIGZpcmViYXNlIEkgZG9uJ3QgdGhpbms/XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2xlYW51cCBhbmQgZGV0YWNoIGxpc3RlbmVyXG4gICAgICAgICAgdGhpcy5maXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS5vZmYoJ3ZhbHVlJywgbGlzdGVuZXIpO1xuICAgICAgICB9ICAgICBcbiAgICAgIH07XG4gICAgfSkuc2hhcmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNeVByYWN0aWNlcyhpZDpzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIC8vdGhpcyBnZXRzIHRoZSBwcmFjdGljZXMgYXNzb2NpYXRlZCB0byBhIHN0dWRlbnRcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIGxldCBwYXRoID0gJ1ByYWN0aWNlcyc7XG4gICAgICBsZXQgbGlzdGVuZXI6IGFueTtcblxuICAgICAgaWYgKENvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkpIHtcbiAgICAgICAgICBcbiAgICAgICAgdGhpcy5Mb2FkaW5nSW5kaWNhdG9yLnNob3coeyBtZXNzYWdlOiAnRmluZGluZyBQcmFjdGljZXMuLi4nIH0pO1xuICAgICAgICAgIFxuICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLmhhbmRsZVByYWN0aWNlU25hcHNob3QoaWQsc25hcHNob3QudmFsdWUsIHBhdGgpO1xuICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5maXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLkxvYWRpbmdJbmRpY2F0b3IuaGlkZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdGVuZXIgPSB0aGlzLmZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHBhdGgpLm9yZGVyQnlDaGlsZCgnZGF0ZScpXG4gICAgICAgICAgLm9uKCd2YWx1ZScsIChzbmFwc2hvdDphbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQodGhpcy5oYW5kbGVQcmFjdGljZVNuYXBzaG90KGlkLCBzbmFwc2hvdC52YWx1ZSwgcGF0aCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgb2JzZXJ2ZXIuZXJyb3IpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAvLyBVbnN1YnNjcmliZVxuICAgICAgICBpZiAoQ29uZmlnLklTX01PQklMRV9OQVRJVkUoKSkge1xuICAgICAgICAgIC8vIG5vdGhpbmcgbmVlZHMgdG8gY2xlYW4gdXAgd2l0aCBuYXRpdmUgZmlyZWJhc2UgSSBkb24ndCB0aGluaz9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjbGVhbnVwIGFuZCBkZXRhY2ggbGlzdGVuZXJcbiAgICAgICAgICB0aGlzLmZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHBhdGgpLm9mZigndmFsdWUnLCBsaXN0ZW5lcik7XG4gICAgICAgIH0gICAgIFxuICAgICAgfTtcbiAgICB9KS5zaGFyZSgpO1xuICB9XG5cbnB1YmxpYyBnZXRBcmNoaXZlZFByYWN0aWNlcygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIC8vdGhpcyBnZXRzIHRoZSBwcmFjdGljZXMgYXNzb2NpYXRlZCB0byBhIHRlYWNoZXJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIGxldCBwYXRoID0gJ1ByYWN0aWNlcyc7XG4gICAgICBsZXQgbGlzdGVuZXI6IGFueTtcblxuICAgICAgaWYgKENvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkpIHtcbiAgICAgICAgICBcbiAgICAgICAgdGhpcy5Mb2FkaW5nSW5kaWNhdG9yLnNob3coeyBtZXNzYWdlOiAnRmluZGluZyBQcmFjdGljZXMuLi4nIH0pO1xuICAgICAgICAgIFxuICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLmhhbmRsZVByYWN0aWNlQXJjaGl2ZVNuYXBzaG90KHNuYXBzaG90LnZhbHVlLCBwYXRoKTtcbiAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5Mb2FkaW5nSW5kaWNhdG9yLmhpZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3RlbmVyID0gdGhpcy5maXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS5vcmRlckJ5Q2hpbGQoJ2RhdGUnKVxuICAgICAgICAgIC5vbigndmFsdWUnLCAoc25hcHNob3Q6YW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHRoaXMuaGFuZGxlUHJhY3RpY2VBcmNoaXZlU25hcHNob3Qoc25hcHNob3QudmFsdWUsIHBhdGgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIG9ic2VydmVyLmVycm9yKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgLy8gVW5zdWJzY3JpYmVcbiAgICAgICAgaWYgKENvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkpIHtcbiAgICAgICAgICAvLyBub3RoaW5nIG5lZWRzIHRvIGNsZWFuIHVwIHdpdGggbmF0aXZlIGZpcmViYXNlIEkgZG9uJ3QgdGhpbms/XG4gICAgICAgICAgLy8gbWF5IG5lZWQgdG8gY2hlY2sgd2l0aCBFZGR5LCBidXQgc2hvdWxkIGJlIG9rIGZvciBub3dcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjbGVhbnVwIGFuZCBkZXRhY2ggbGlzdGVuZXJcbiAgICAgICAgICB0aGlzLmZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHBhdGgpLm9mZigndmFsdWUnLCBsaXN0ZW5lcik7XG4gICAgICAgIH0gICAgIFxuICAgICAgfTtcbiAgICB9KS5zaGFyZSgpO1xuICB9XG5cbiAgcHVibGljIGdldFRlYWNoZXJTdHVkZW50cygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIC8vdGhpcyBnZXRzIHRoZSBzdHVkZW50cyBhc3NvY2lhdGVkIHRvIHRoZSBhY2NvdW50XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBsZXQgcGF0aCA9ICdTdHVkZW50U2V0dGluZ3MnO1xuICAgICAgbGV0IGxpc3RlbmVyOiBhbnk7XG5cbiAgICAgIGlmIChDb25maWcuSVNfTU9CSUxFX05BVElWRSgpKSB7XG4gICAgICAgICAgXG4gICAgICAgIHRoaXMuTG9hZGluZ0luZGljYXRvci5zaG93KHsgbWVzc2FnZTogJ0ZpbmRpbmcgU3R1ZGVudHMuLi4nIH0pO1xuICAgICAgICAgIFxuICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLmhhbmRsZVRlYWNoZXJTdHVkZW50c1NuYXBzaG90KHNuYXBzaG90LnZhbHVlLCBwYXRoKTtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5maXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLkxvYWRpbmdJbmRpY2F0b3IuaGlkZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdGVuZXIgPSB0aGlzLmZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHBhdGgpLm9yZGVyQnlDaGlsZCgnZGF0ZScpXG4gICAgICAgICAgLm9uKCd2YWx1ZScsIChzbmFwc2hvdDphbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQodGhpcy5oYW5kbGVUZWFjaGVyU3R1ZGVudHNTbmFwc2hvdChzbmFwc2hvdC52YWx1ZSwgcGF0aCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgb2JzZXJ2ZXIuZXJyb3IpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAvLyBVbnN1YnNjcmliZVxuICAgICAgICBpZiAoQ29uZmlnLklTX01PQklMRV9OQVRJVkUoKSkge1xuICAgICAgICAgIC8vIG5vdGhpbmcgbmVlZHMgdG8gY2xlYW4gdXAgd2l0aCBuYXRpdmUgZmlyZWJhc2UgSSBkb24ndCB0aGluaz9cbiAgICAgICAgICAvLyBtYXkgbmVlZCB0byBjaGVjayB3aXRoIEVkZHksIGJ1dCBzaG91bGQgYmUgb2sgZm9yIG5vd1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNsZWFudXAgYW5kIGRldGFjaCBsaXN0ZW5lclxuICAgICAgICAgIHRoaXMuZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYocGF0aCkub2ZmKCd2YWx1ZScsIGxpc3RlbmVyKTtcbiAgICAgICAgfSAgICAgXG4gICAgICB9O1xuICAgIH0pLnNoYXJlKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TXlTdHVkZW50KGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLl9hbGxJdGVtcy5maWx0ZXIocyA9PiBzLmlkID09PSBpZClbMF0pO1xuICAgIH0pLnNoYXJlKCk7XG4gIH1cbiAgXG4gIHB1YmxpYyBhZGQobmFtZTogc3RyaW5nKSB7ICAgXG4gICAgcmV0dXJuIHRoaXMuZmlyZWJhc2UucHVzaChcbiAgICAgICAgXCIvU3R1ZGVudFNldHRpbmdzXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBcIk5hbWVcIjogbmFtZSxcbiAgICAgICAgICBcIkRhdGVcIjogMCAtIERhdGUubm93KCksIFxuICAgICAgICAgIFwiUHJhY3RpY2VzUmVxdWlyZWRcIjogNSxcbiAgICAgICAgICBcIlByYWN0aWNlc0NvbXBsZXRlZFwiOiAwLCBcbiAgICAgICAgICBcIlByYWN0aWNlTGVuZ3RoXCI6IDIwLCBcbiAgICAgICAgICBcIlJld2FyZFwiOiBcIkEgc3BlY2lhbCBwcml6ZSFcIixcbiAgICAgICAgICBcIkFkbWluUGFzc3dvcmRcIjogXCJcIixcbiAgICAgICAgICBcIlRlYWNoZXJFbWFpbFwiOiBcIlwiLFxuICAgICAgICAgIFwiSW5zdHJ1bWVudFwiOiAxMCxcbiAgICAgICAgICBcIk5vdGlmeUFsbFwiOiBmYWxzZSxcbiAgICAgICAgICBcIlVJRFwiOiBDb25maWcudG9rZW5cbiAgICAgICAgfVxuICAgICAgKS50aGVuKFxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xuICAgICAgICAgIHJldHVybiAnU3R1ZGVudCBhZGRlZCEnO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pOyBcbiAgfVxuXG4gIHB1YmxpYyBpbmNyZW1lbnRQcmFjdGljZXNDb21wbGV0ZWQoaWQ6c3RyaW5nLGN1cnJQcmFjdGljZXNDb21wbGV0ZWQ6bnVtYmVyKXtcbiAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgcmV0dXJuIHRoaXMuZmlyZWJhc2UudXBkYXRlKFwiL1N0dWRlbnRTZXR0aW5ncy9cIitpZCtcIlwiLHtQcmFjdGljZXNDb21wbGV0ZWQ6IGN1cnJQcmFjdGljZXNDb21wbGV0ZWR9KVxuICAgICAgLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XG4gICAgICAgICAgcmV0dXJuICdTdHVkZW50IGluZm9ybWF0aW9uIHNhdmVkISc7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfSk7ICBcbiAgfVxuXG4gIHB1YmxpYyB3cml0ZVByYWN0aWNlKGlkOnN0cmluZywgbmFtZTogc3RyaW5nLCBwcmFjdGljZWxlbmd0aDpudW1iZXIsIHRlYWNoZXJlbWFpbDogc3RyaW5nLCB0cmFjazogc3RyaW5nKXtcbiAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgcmV0dXJuIHRoaXMuZmlyZWJhc2UucHVzaChcIi9QcmFjdGljZXMvXCIse1N0dWRlbnRJZDogaWQsIE5hbWU6IG5hbWUsIERhdGU6IHRoaXMuZmlyZWJhc2UuU2VydmVyVmFsdWUuVElNRVNUQU1QLCBQcmFjdGljZUxlbmd0aDogcHJhY3RpY2VsZW5ndGgsIFRlYWNoZXJFbWFpbDogdGVhY2hlcmVtYWlsLCBUcmFjazogdHJhY2t9KVxuICAgICAgLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9KTsgIFxuICB9XG5cbiAgcHVibGljIGFkZFByYWN0aWNlVHJhY2soaWQ6c3RyaW5nLCB0cmFjazogc3RyaW5nKXtcbiAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgcmV0dXJuIHRoaXMuZmlyZWJhc2UudXBkYXRlKFwiL1ByYWN0aWNlcy9cIitpZCtcIlwiLHtUcmFjazogdHJhY2t9KVxuICAgICAgLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XG4gICAgICAgICAgcmV0dXJuICdQcmFjdGljZSB0cmFjayBhZGRlZCEnO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pOyAgXG4gIH1cblxuXG4gIHB1YmxpYyBhZGRDb21tZW50KGlkOnN0cmluZywgY29tbWVudDogc3RyaW5nKXtcbiAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgcmV0dXJuIHRoaXMuZmlyZWJhc2UudXBkYXRlKFwiL1ByYWN0aWNlcy9cIitpZCtcIlwiLHtDb21tZW50OiBjb21tZW50fSlcbiAgICAgIC50aGVuKFxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xuICAgICAgICAgIHJldHVybiAnUHJhY3RpY2UgQ29tbWVudGVkISc7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfSk7ICBcbiAgfVxuXG4gIHB1YmxpYyBhZGRBd2FyZChpZDpzdHJpbmcsIHN0aWNrZXJJZDogbnVtYmVyKXtcbiAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgcmV0dXJuIHRoaXMuZmlyZWJhc2UudXBkYXRlKFwiL1ByYWN0aWNlcy9cIitpZCtcIlwiLHtTdGlja2VyOiBzdGlja2VySWR9KVxuICAgICAgLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XG4gICAgICAgICAgcmV0dXJuICdTdGlja2VyIEFkZGVkISc7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfSk7ICBcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQ29tcGxldGUoaWQ6c3RyaW5nKXtcbiAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgcmV0dXJuIHRoaXMuZmlyZWJhc2UudXBkYXRlKFwiL1ByYWN0aWNlcy9cIitpZCtcIlwiLHtBcmNoaXZlOiB0cnVlfSlcbiAgICAgIC50aGVuKFxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xuICAgICAgICAgIHJldHVybiAnUHJhY3RpY2UgQXJjaGl2ZWQhJztcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9KTsgIFxuICB9XG5cbiAgcHVibGljIGNsZWFyUHJhY3RpY2VzQ29tcGxldGVkKGlkOnN0cmluZyl7XG4gICAgLy9zZXRzIHByYWN0aWNlcyB0byB6ZXJvXG4gICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgIHJldHVybiB0aGlzLmZpcmViYXNlLnVwZGF0ZShcIi9TdHVkZW50U2V0dGluZ3MvXCIraWQrXCJcIix7UHJhY3RpY2VzQ29tcGxldGVkOiAwfSlcbiAgICAgIC50aGVuKFxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xuICAgICAgICAgIHJldHVybiAnQ29uZ3JhdHVsYXRpb25zISBZb3UgY29tcGxldGVkIGEgcHJhY3RpY2UgZ29hbCEnO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pOyAgXG4gIH1cblxuICBwdWJsaWMgc2F2ZVNldHRpbmdzKHN0dWRlbnQ6IFN0dWRlbnRNb2RlbCl7XG4gICAgLy9kb24ndCBzYXZlIGFueXRoaW5nIHRvICdwcmFjdGljZXNjb21wbGV0ZWQnXG4gICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgIHJldHVybiB0aGlzLmZpcmViYXNlLnVwZGF0ZShcIi9TdHVkZW50U2V0dGluZ3MvXCIrc3R1ZGVudC5pZCtcIlwiLHtOYW1lOnN0dWRlbnQuTmFtZSwgSW5zdHJ1bWVudDpzdHVkZW50Lkluc3RydW1lbnQsIEFkbWluUGFzc3dvcmQ6c3R1ZGVudC5BZG1pblBhc3N3b3JkLCBQcmFjdGljZXNSZXF1aXJlZDpzdHVkZW50LlByYWN0aWNlc1JlcXVpcmVkLCBQcmFjdGljZUxlbmd0aDpzdHVkZW50LlByYWN0aWNlTGVuZ3RoLCBSZXdhcmQ6c3R1ZGVudC5SZXdhcmQsIFRlYWNoZXJFbWFpbDpzdHVkZW50LlRlYWNoZXJFbWFpbCwgTm90aWZ5QWxsOnN0dWRlbnQuTm90aWZ5QWxsfSlcbiAgICAgIC50aGVuKFxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0OmFueSkge1xuICAgICAgICAgIHJldHVybiAnU3R1ZGVudCBpbmZvcm1hdGlvbiBzYXZlZCEnO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlOmFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pOyAgXG4gIH1cbiAgXG4gIHB1YmxpYyBkZWxldGVTdHVkZW50KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5maXJlYmFzZS5yZW1vdmUoXCIvU3R1ZGVudFNldHRpbmdzL1wiK2lkK1wiXCIpXG4gICAgICAudGhlbihcbiAgICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpXG4gICAgICApXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICB9XG5cbiAgcHVibGljIGdldERvd25sb2FkVXJsKHJlbW90ZUZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZmlyZWJhc2UuZ2V0RG93bmxvYWRVcmwoe1xuICAgICAgICByZW1vdGVGdWxsUGF0aDogcmVtb3RlRmlsZVBhdGh9KVxuICAgICAgLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uICh1cmw6c3RyaW5nKSB7XG4gICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZTphbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9KTtcbn1cblxuXG4gIHB1YmxpYyBzYXZlUmVjb3JkaW5nKGxvY2FsUGF0aDogc3RyaW5nLCBmaWxlPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLnV0aWxzLmdldEZpbGVuYW1lKGxvY2FsUGF0aCk7XG4gICAgbGV0IHJlbW90ZVBhdGggPSBgJHtmaWxlbmFtZX1gO1xuICAgIGlmIChDb25maWcuSVNfTU9CSUxFX05BVElWRSgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5maXJlYmFzZS51cGxvYWRGaWxlKHtcbiAgICAgICAgcmVtb3RlRnVsbFBhdGg6IHJlbW90ZVBhdGgsXG4gICAgICAgIGxvY2FsRnVsbFBhdGg6IGxvY2FsUGF0aFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmZpcmViYXNlLnN0b3JhZ2UoKS5yZWYoKS5jaGlsZChyZW1vdGVQYXRoKS5wdXQoZmlsZSk7XG4gICAgfVxuICB9XG5cbiAgLyogdGhpcyB3b3JrcyBvaywgYnV0IGNhdXNlcyBwcm9ibGVtcyBkb3duc3RyZWFtKVxuICBoYW5kbGVTbmFwc2hvdChkYXRhOiBhbnkpIHtcbiAgICAvL2VtcHR5IGFycmF5LCB0aGVuIHJlZmlsbFxuICAgIC8vdGhpcy5fYWxsSXRlbXMgPSBbXTsgICAgXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHtpZDogZGF0YS5rZXl9LCBkYXRhLnZhbHVlKTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgICB0aGlzLl9hbGxJdGVtcy5wdXNoKHJlc3VsdCk7IFxuICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpOyAgXG4gICAgfVxuICAgICAgICBcbiAgICByZXR1cm4gdGhpcy5fYWxsSXRlbXM7XG4gIH0qL1xuICBoYW5kbGVTbmFwc2hvdChkYXRhOiBhbnkpIHtcbiAgICAvL2VtcHR5IGFycmF5LCB0aGVuIHJlZmlsbFxuICAgIHRoaXMuX2FsbEl0ZW1zID0gW107XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGZvciAobGV0IGlkIGluIGRhdGEpIHsgICAgICAgIFxuICAgICAgICBsZXQgcmVzdWx0ID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe2lkOiBpZH0sIGRhdGFbaWRdKTtcbiAgICAgICAgaWYoQ29uZmlnLnRva2VuID09PSByZXN1bHQuVUlEKXtcbiAgICAgICAgICB0aGlzLl9hbGxJdGVtcy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIH0gICAgICAgIFxuICAgICAgfVxuICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYWxsSXRlbXM7XG4gIH1cblxuICBoYW5kbGVUZWFjaGVyU3R1ZGVudHNTbmFwc2hvdChkYXRhOiBhbnksIHBhdGg/OiBzdHJpbmcpIHtcbiAgICAvL2VtcHR5IGFycmF5LCB0aGVuIHJlZmlsbFxuICAgIHRoaXMuX2FsbFRlYWNoZXJTdHVkZW50c0l0ZW1zID0gW107XG4gICAgaWYgKHBhdGgpXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGZvciAobGV0IGlkIGluIGRhdGEpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHtpZDogaWR9LCBkYXRhW2lkXSk7XG4gICAgICAgIGlmKENvbmZpZy5lbWFpbCA9PT0gcmVzdWx0LlRlYWNoZXJFbWFpbCl7XG4gICAgICAgICAgICB0aGlzLl9hbGxUZWFjaGVyU3R1ZGVudHNJdGVtcy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMucHVibGlzaFRlYWNoZXJTdHVkZW50c1VwZGF0ZXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2FsbFRlYWNoZXJTdHVkZW50c0l0ZW1zO1xuICB9XG5cbiAgaGFuZGxlUHJhY3RpY2VBcmNoaXZlU25hcHNob3QoZGF0YTogYW55LCBwYXRoPzogc3RyaW5nKSB7XG4gICAgLy9lbXB0eSBhcnJheSwgdGhlbiByZWZpbGxcbiAgICB0aGlzLl9hbGxQcmFjdGljZUFyY2hpdmVJdGVtcyA9IFtdO1xuICAgIGlmIChwYXRoKVxuICAgIGlmIChkYXRhKSB7XG4gICAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6IGlkfSwgZGF0YVtpZF0pO1xuICAgICAgICBpZihDb25maWcuZW1haWwgPT09IHJlc3VsdC5UZWFjaGVyRW1haWwgJiYgcmVzdWx0LkFyY2hpdmUpe1xuICAgICAgICAgICAgdGhpcy5fYWxsUHJhY3RpY2VBcmNoaXZlSXRlbXMucHVzaChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnB1Ymxpc2hQcmFjdGljZUFyY2hpdmVVcGRhdGVzKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9hbGxQcmFjdGljZUFyY2hpdmVJdGVtcztcbiAgfVxuXG4gIGhhbmRsZVByYWN0aWNlU25hcHNob3Qoc3R1ZGVudElkOiBzdHJpbmcsIGRhdGE6IGFueSwgcGF0aD86IHN0cmluZykge1xuICAgIC8vZW1wdHkgYXJyYXksIHRoZW4gcmVmaWxsXG4gICAgdGhpcy5fYWxsUHJhY3RpY2VJdGVtcyA9IFtdO1xuICAgIGlmIChwYXRoKVxuICAgIGlmIChkYXRhKSB7XG4gICAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6IGlkfSwgZGF0YVtpZF0pO1xuICAgICAgICBpZihzdHVkZW50SWQgPT09IHJlc3VsdC5TdHVkZW50SWQpe1xuICAgICAgICAgIHRoaXMuX2FsbFByYWN0aWNlSXRlbXMucHVzaChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuICAgICAgdGhpcy5wdWJsaXNoUHJhY3RpY2VVcGRhdGVzKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9hbGxQcmFjdGljZUl0ZW1zO1xuICB9XG5cbiAgcHVibGlzaFVwZGF0ZXMoKSB7XG4gICAgLy8gbXVzdCBlbWl0IGEgKm5ldyogdmFsdWUgKGltbXV0YWJpbGl0eSEpXG4gICAgdGhpcy5fYWxsSXRlbXMuc29ydChmdW5jdGlvbihhLCBiKXtcbiAgICAgICAgaWYoYS5EYXRlIDwgYi5EYXRlKSByZXR1cm4gLTE7XG4gICAgICAgIGlmKGEuRGF0ZSA+IGIuRGF0ZSkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KVxuICAgIHRoaXMuaXRlbXMubmV4dChbLi4udGhpcy5fYWxsSXRlbXNdKTtcbiAgfVxuXG4gIHB1Ymxpc2hQcmFjdGljZVVwZGF0ZXMoKSB7XG4gICAgLy8gbXVzdCBlbWl0IGEgKm5ldyogdmFsdWUgKGltbXV0YWJpbGl0eSEpXG4gICAgdGhpcy5fYWxsUHJhY3RpY2VJdGVtcy5zb3J0KGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgICBpZihhLkRhdGUgPiBiLkRhdGUpIHJldHVybiAtMTtcbiAgICAgICAgaWYoYS5EYXRlIDwgYi5EYXRlKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pXG4gICAgdGhpcy5wcmFjdGljZWl0ZW1zLm5leHQoWy4uLnRoaXMuX2FsbFByYWN0aWNlSXRlbXNdKTtcbiAgfVxuXG4gIHB1Ymxpc2hQcmFjdGljZUFyY2hpdmVVcGRhdGVzKCkge1xuICAgIC8vIG11c3QgZW1pdCBhICpuZXcqIHZhbHVlIChpbW11dGFiaWxpdHkhKVxuICAgIHRoaXMuX2FsbFByYWN0aWNlQXJjaGl2ZUl0ZW1zLnNvcnQoZnVuY3Rpb24oYSwgYil7XG4gICAgICAgIGlmKGEuRGF0ZSA+IGIuRGF0ZSkgcmV0dXJuIC0xO1xuICAgICAgICBpZihhLkRhdGUgPCBiLkRhdGUpIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSlcbiAgICB0aGlzLnByYWN0aWNlYXJjaGl2ZWl0ZW1zLm5leHQoWy4uLnRoaXMuX2FsbFByYWN0aWNlQXJjaGl2ZUl0ZW1zXSk7XG4gIH1cblxuICBwdWJsaXNoVGVhY2hlclN0dWRlbnRzVXBkYXRlcygpIHtcbiAgICAvLyBtdXN0IGVtaXQgYSAqbmV3KiB2YWx1ZSAoaW1tdXRhYmlsaXR5ISlcbiAgICB0aGlzLl9hbGxUZWFjaGVyU3R1ZGVudHNJdGVtcy5zb3J0KGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgICBpZihhLkRhdGUgPCBiLkRhdGUpIHJldHVybiAtMTtcbiAgICAgICAgaWYoYS5EYXRlID4gYi5EYXRlKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pXG4gICAgdGhpcy50ZWFjaGVyc3R1ZGVudHNpdGVtcy5uZXh0KFsuLi50aGlzLl9hbGxUZWFjaGVyU3R1ZGVudHNJdGVtc10pO1xuICB9XG5cbiAgaGFuZGxlRXJyb3JzKGVycm9yOmFueSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlKTtcbiAgfVxuXG59XG4iXX0=