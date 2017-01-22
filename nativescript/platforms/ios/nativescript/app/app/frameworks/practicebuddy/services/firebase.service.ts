import {Injectable, Inject, NgZone} from '@angular/core';
import {LogService} from '../../core/services/log.service';
import {Config} from '../../core/utils/config';
import {FIREBASE, LOADER, APPSETTINGS, NAVIGATION_EXTENSIONS} from '../../core/tokens';
import {UtilsService} from '../../core/services/utils.service';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/find';
import {UserModel} from '../models/user.model';
import {StudentModel} from '../models/student.model';
import {PracticeModel} from '../models/practice.model';

declare var zonedCallback: Function;

@Injectable()
export class FirebaseService {
  private _auth: any;
  private _database: any;
  
  items: BehaviorSubject<Array<StudentModel>> = new BehaviorSubject([]);
  practiceitems: BehaviorSubject<Array<PracticeModel>> = new BehaviorSubject([]);
  teacherstudentsitems: BehaviorSubject<Array<StudentModel>> = new BehaviorSubject([]); 
  practicearchiveitems: BehaviorSubject<Array<PracticeModel>> = new BehaviorSubject([]);
  
  private _allItems: Array<StudentModel> = [];
  private _allPracticeItems: Array<PracticeModel> = [];
  private _allTeacherStudentsItems: Array<StudentModel> = [];
  private _allPracticeArchiveItems: Array<PracticeModel> = [];
  
  constructor(
    private logger: LogService,
    private ngZone: NgZone,
    private utils: UtilsService,
    private _router: Router,
    @Inject(FIREBASE) private firebase: any,
    @Inject(LOADER) private LoadingIndicator: any,
    @Inject(APPSETTINGS) private AppSettings: any,
    @Inject(NAVIGATION_EXTENSIONS) private routerExtensions: any) {
    logger.debug(`Firebase initializing...`);

    if (Config.IS_MOBILE_NATIVE()) {
      firebase.init({
        //keep persist false or you won't get numbers back!
        persist: false,
        storageBucket: 'gs://practicebuddy-4d466.appspot.com',
        // iOSEmulatorFlush: true,
        onAuthStateChanged: (data: any) => {
          this.logger.debug(`Logged ${data.loggedIn ? 'into' : 'out of'} firebase.`);
          if(data.loggedIn){
            Config.token = data.user.uid;
            Config.email = data.user.email;
            this.routerExtensions.navigate([""], { clearHistory: true });
          }
          else{
            this._router.navigate(["/login"]);
          }
        }
      }).then(() => {
        this.logger.debug('firebase.init done');
      }, (error: any) => {
        this.logger.debug('firebase.init error: ' + error);
      });

    } else {
      // web
      let config = {
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

  public login(user: UserModel) {
    this.LoadingIndicator.show({ message: 'Logging in...' });
    if (Config.IS_MOBILE_NATIVE()) {
    return this.firebase.login({
      type: this.firebase.LoginType.PASSWORD,
      email: user.email,
      password: user.password
    }).then((result: any) => {
      this.LoadingIndicator.hide();
          Config.token = result.uid;
          Config.email = result.user.email;
          return JSON.stringify(result);
      }, (errorMessage: any) => {
        this.LoadingIndicator.hide();
        this.logger.debug(`firebase auth error:`);
        this.logger.debug(errorMessage);
        alert(errorMessage);
      });
  }
  else {
      return this._auth.signInWithEmailAndPassword(user.email, user.password)
      .then(function(result:any) {        
        Config.token = result.uid;
        Config.email = result.user.email;
      }, function (error:any) {
        this.LoadingIndicator.hide();
          alert(error.message);
      });
    }
  }

  public register(user: UserModel){
    this.LoadingIndicator.show({ message: 'Registering...' });
    if (Config.IS_MOBILE_NATIVE()) {
      return this.firebase.createUser({
        email: user.email,
        password: user.password
      }).then(
          function (result:any) {
            this.LoadingIndicator.hide();
            return JSON.stringify(result);
          }, (errorMessage: any) => {
            this.LoadingIndicator.hide();
            alert(errorMessage);
          }
      )
    }
    else {
    return this._auth.createUserWithEmailAndPassword(user.email, user.password)
        .then(function (result:any) {
            return JSON.stringify(result);
          }, function (error:any) {
            alert(error.message);
        });
    }
  }

  public resetPassword(email: any){
    if (Config.IS_MOBILE_NATIVE()) {
      return this.firebase.resetPassword({
      email: email
      }).then(
          function (result:any) {
            return true;
          }, (errorMessage: any) => {
            alert(errorMessage);
          }
      )
    }
    else {
    //web
    return this._auth.sendPasswordResetEmail(email).then(function (result:any) {
          return JSON.stringify("You've requested to have your password reset. Please check your email to proceed.");
        }, function (error:any) {
           alert(error.message);
     });
    }
  } 

  public logout(){
    Config.invalidateToken();
    this.firebase.logout();
  }

  //end user settings

  public getMyStudents(): Observable<any> {
    
    //this gets the students associated to the account
    return new Observable((observer: any) => {
      let path = 'StudentSettings';
      let listener: any;

      if (Config.IS_MOBILE_NATIVE()) {
          
        this.LoadingIndicator.show({ message: 'Finding my Students...' });
        
        let onValueEvent = (snapshot: any) => {
          this.ngZone.run(() => {
            let results = this.handleSnapshot(snapshot.value);
             observer.next(results);
             this.LoadingIndicator.hide();
          });
        };

        this.firebase.addValueEventListener(onValueEvent, `/${path}`).then(() => {
          this.LoadingIndicator.hide();
        });
        
        /*this.firebase.query(
          onValueEvent, 
          `/${path}`,
          {
            orderBy: {
              type: this.firebase.QueryOrderByType.CHILD,
              value: 'UID'
            },
            ranges: [{
              type: this.firebase.QueryRangeType.EQUAL_TO,
              value: Config.token
            }]
          }
        )*/

      } else {
        listener = this.firebase.database().ref(path).orderByChild('date')
          .on('value', (snapshot:any) => {
            this.ngZone.run(() => {
              observer.next(this.handleSnapshot(snapshot.value));
            });
          }, observer.error);
      }

      return () => {
        // Unsubscribe
        if (Config.IS_MOBILE_NATIVE()) {
          // nothing needs to clean up with native firebase I don't think?
        } else {
          // cleanup and detach listener
          this.firebase.database().ref(path).off('value', listener);
        }     
      };
    }).share();
  }

  public getMyPractices(id:string): Observable<any> {
    //this gets the practices associated to a student
    return new Observable((observer: any) => {
      let path = 'Practices';
      let listener: any;

      if (Config.IS_MOBILE_NATIVE()) {
          
        this.LoadingIndicator.show({ message: 'Finding Practices...' });
          
        let onValueEvent = (snapshot: any) => {
          this.ngZone.run(() => {
            let results = this.handlePracticeSnapshot(id,snapshot.value, path);
             observer.next(results);
          });
        };

        this.firebase.addValueEventListener(onValueEvent, `/${path}`).then(() => {
          this.LoadingIndicator.hide();
        });

      } else {
        listener = this.firebase.database().ref(path).orderByChild('date')
          .on('value', (snapshot:any) => {
            this.ngZone.run(() => {
              observer.next(this.handlePracticeSnapshot(id, snapshot.value, path));
            });
          }, observer.error);
      }

      return () => {
        // Unsubscribe
        if (Config.IS_MOBILE_NATIVE()) {
          // nothing needs to clean up with native firebase I don't think?
        } else {
          // cleanup and detach listener
          this.firebase.database().ref(path).off('value', listener);
        }     
      };
    }).share();
  }

public getArchivedPractices(): Observable<any> {
    //this gets the practices associated to a teacher
    return new Observable((observer: any) => {
      let path = 'Practices';
      let listener: any;

      if (Config.IS_MOBILE_NATIVE()) {
          
        this.LoadingIndicator.show({ message: 'Finding Practices...' });
          
        let onValueEvent = (snapshot: any) => {
          this.ngZone.run(() => {
            let results = this.handlePracticeArchiveSnapshot(snapshot.value, path);
             observer.next(results);
          });
        };

        this.firebase.addValueEventListener(onValueEvent, `/${path}`).then(() => {
          this.LoadingIndicator.hide();
        });

      } else {
        listener = this.firebase.database().ref(path).orderByChild('date')
          .on('value', (snapshot:any) => {
            this.ngZone.run(() => {
              observer.next(this.handlePracticeArchiveSnapshot(snapshot.value, path));
            });
          }, observer.error);
      }

      return () => {
        // Unsubscribe
        if (Config.IS_MOBILE_NATIVE()) {
          // nothing needs to clean up with native firebase I don't think?
          // may need to check with Eddy, but should be ok for now
        } else {
          // cleanup and detach listener
          this.firebase.database().ref(path).off('value', listener);
        }     
      };
    }).share();
  }

  public getTeacherStudents(): Observable<any> {
    //this gets the students associated to the account
    return new Observable((observer: any) => {
      let path = 'StudentSettings';
      let listener: any;

      if (Config.IS_MOBILE_NATIVE()) {
          
        this.LoadingIndicator.show({ message: 'Finding Students...' });
          
        let onValueEvent = (snapshot: any) => {
          this.ngZone.run(() => {
            let results = this.handleTeacherStudentsSnapshot(snapshot.value, path);
            observer.next(results);
          });
        };

        this.firebase.addValueEventListener(onValueEvent, `/${path}`).then(() => {
          this.LoadingIndicator.hide();
        });

      } else {
        listener = this.firebase.database().ref(path).orderByChild('date')
          .on('value', (snapshot:any) => {
            this.ngZone.run(() => {
              observer.next(this.handleTeacherStudentsSnapshot(snapshot.value, path));
            });
          }, observer.error);
      }

      return () => {
        // Unsubscribe
        if (Config.IS_MOBILE_NATIVE()) {
          // nothing needs to clean up with native firebase I don't think?
          // may need to check with Eddy, but should be ok for now
        } else {
          // cleanup and detach listener
          this.firebase.database().ref(path).off('value', listener);
        }     
      };
    }).share();
  }

  public getMyStudent(id: string): Observable<any> {
    return new Observable((observer: any) => {
      observer.next(this._allItems.filter(s => s.id === id)[0]);
    }).share();
  }
  
  public add(name: string) {   
    return this.firebase.push(
        "/StudentSettings",
        {
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
          "UID": Config.token
        }
      ).then(
        function (result:any) {
          return 'Student added!';
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        }); 
  }

  public incrementPracticesCompleted(id:string,currPracticesCompleted:number){
    this.publishUpdates();
    return this.firebase.update("/StudentSettings/"+id+"",{PracticesCompleted: currPracticesCompleted})
      .then(
        function (result:any) {
          return 'Student information saved!';
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        });  
  }

  public writePractice(id:string, name: string, practicelength:number, teacheremail: string, track: string){
    this.publishUpdates();
    return this.firebase.push("/Practices/",{StudentId: id, Name: name, Date: this.firebase.ServerValue.TIMESTAMP, PracticeLength: practicelength, TeacherEmail: teacheremail, Track: track})
      .then(
        function (result:any) {
          return result;
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        });  
  }

  public addPracticeTrack(id:string, track: string){
    this.publishUpdates();
    return this.firebase.update("/Practices/"+id+"",{Track: track})
      .then(
        function (result:any) {
          return 'Practice track added!';
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        });  
  }


  public addComment(id:string, comment: string){
    this.publishUpdates();
    return this.firebase.update("/Practices/"+id+"",{Comment: comment})
      .then(
        function (result:any) {
          return 'Practice Commented!';
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        });  
  }

  public addAward(id:string, stickerId: number){
    this.publishUpdates();
    return this.firebase.update("/Practices/"+id+"",{Sticker: stickerId})
      .then(
        function (result:any) {
          return 'Sticker Added!';
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        });  
  }

  public markComplete(id:string){
    this.publishUpdates();
    return this.firebase.update("/Practices/"+id+"",{Archive: true})
      .then(
        function (result:any) {
          return 'Practice Archived!';
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        });  
  }

  public clearPracticesCompleted(id:string){
    //sets practices to zero
    this.publishUpdates();
    return this.firebase.update("/StudentSettings/"+id+"",{PracticesCompleted: 0})
      .then(
        function (result:any) {
          return 'Congratulations! You completed a practice goal!';
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        });  
  }

  public saveSettings(student: StudentModel){
    //don't save anything to 'practicescompleted'
    this.publishUpdates();
    return this.firebase.update("/StudentSettings/"+student.id+"",{Name:student.Name, Instrument:student.Instrument, AdminPassword:student.AdminPassword, PracticesRequired:student.PracticesRequired, PracticeLength:student.PracticeLength, Reward:student.Reward, TeacherEmail:student.TeacherEmail, NotifyAll:student.NotifyAll})
      .then(
        function (result:any) {
          return 'Student information saved!';
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        });  
  }
  
  public deleteStudent(id: string) {
    return this.firebase.remove("/StudentSettings/"+id+"")
      .then(
        this.publishUpdates()
      )
      .catch(this.handleErrors);
  }

  public getDownloadUrl(remoteFilePath: string): Promise<any> {
      return this.firebase.getDownloadUrl({
        remoteFullPath: remoteFilePath})
      .then(
        function (url:string) {
          return url;
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        });
}


  public saveRecording(localPath: string, file?: any): Promise<any> {
    let filename = this.utils.getFilename(localPath);
    let remotePath = `${filename}`;
    if (Config.IS_MOBILE_NATIVE()) {
      return this.firebase.uploadFile({
        remoteFullPath: remotePath,
        localFullPath: localPath
      });
    } else {
      return this.firebase.storage().ref().child(remotePath).put(file);
    }
  }

  /* this works ok, but causes problems downstream)
  handleSnapshot(data: any) {
    //empty array, then refill
    //this._allItems = [];    
    if (data) {
      let result: any;
      for (let key in data) {
        result = (<any>Object).assign({id: data.key}, data.value);
        
      }
      this._allItems.push(result); 
      this.publishUpdates();  
    }
        
    return this._allItems;
  }*/
  handleSnapshot(data: any) {
    //empty array, then refill
    this._allItems = [];
    if (data) {
      for (let id in data) {        
        let result = (<any>Object).assign({id: id}, data[id]);
        if(Config.token === result.UID){
          this._allItems.push(result);
        }        
      }
      this.publishUpdates();
    }
    return this._allItems;
  }

  handleTeacherStudentsSnapshot(data: any, path?: string) {
    //empty array, then refill
    this._allTeacherStudentsItems = [];
    if (path)
    if (data) {
      for (let id in data) {
        let result = (<any>Object).assign({id: id}, data[id]);
        if(Config.email === result.TeacherEmail){
            this._allTeacherStudentsItems.push(result);
        }
      }
      this.publishTeacherStudentsUpdates();
    }
    return this._allTeacherStudentsItems;
  }

  handlePracticeArchiveSnapshot(data: any, path?: string) {
    //empty array, then refill
    this._allPracticeArchiveItems = [];
    if (path)
    if (data) {
      for (let id in data) {
        let result = (<any>Object).assign({id: id}, data[id]);
        if(Config.email === result.TeacherEmail && result.Archive){
            this._allPracticeArchiveItems.push(result);
        }
      }
      this.publishPracticeArchiveUpdates();
    }
    return this._allPracticeArchiveItems;
  }

  handlePracticeSnapshot(studentId: string, data: any, path?: string) {
    //empty array, then refill
    this._allPracticeItems = [];
    if (path)
    if (data) {
      for (let id in data) {
        let result = (<any>Object).assign({id: id}, data[id]);
        if(studentId === result.StudentId){
          this._allPracticeItems.push(result);
        }
        
      }
      this.publishPracticeUpdates();
    }
    return this._allPracticeItems;
  }

  publishUpdates() {
    // must emit a *new* value (immutability!)
    this._allItems.sort(function(a, b){
        if(a.Date < b.Date) return -1;
        if(a.Date > b.Date) return 1;
      return 0;
    })
    this.items.next([...this._allItems]);
  }

  publishPracticeUpdates() {
    // must emit a *new* value (immutability!)
    this._allPracticeItems.sort(function(a, b){
        if(a.Date > b.Date) return -1;
        if(a.Date < b.Date) return 1;
      return 0;
    })
    this.practiceitems.next([...this._allPracticeItems]);
  }

  publishPracticeArchiveUpdates() {
    // must emit a *new* value (immutability!)
    this._allPracticeArchiveItems.sort(function(a, b){
        if(a.Date > b.Date) return -1;
        if(a.Date < b.Date) return 1;
      return 0;
    })
    this.practicearchiveitems.next([...this._allPracticeArchiveItems]);
  }

  publishTeacherStudentsUpdates() {
    // must emit a *new* value (immutability!)
    this._allTeacherStudentsItems.sort(function(a, b){
        if(a.Date < b.Date) return -1;
        if(a.Date > b.Date) return 1;
      return 0;
    })
    this.teacherstudentsitems.next([...this._allTeacherStudentsItems]);
  }

  handleErrors(error:any) {
    return Promise.reject(error.message);
  }

}
