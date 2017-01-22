import {OnInit, Inject, ViewChild, ElementRef, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from '../../../core/decorators/base.component';
import {LogService} from '../../../core/services/log.service';
import {FRAME, FANCYALERT} from '../../../core/tokens';
import {FirebaseService} from '../../../practicebuddy/services/firebase.service';
import {Observable} from 'rxjs/Observable';
import {Config} from '../../../core/utils/config';
import {Router} from '@angular/router';
import {UserModel} from '../../../practicebuddy/models/user.model';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  user: UserModel;
  isLoggingIn = true;
  isAuthenticating = false;

  
  constructor(public firebaseService: FirebaseService,
              private logger: LogService,
              private _router: Router,
              @Inject(FRAME) private frame: any,
              @Inject(FANCYALERT) private fancyalert: any
            ) {
              this.user = new UserModel();
              this.user.email = "user@nativescript.org";
              this.user.password = "password";
            }

 ngOnInit() {
   console.log("initializing")
    if (Config.IS_MOBILE_NATIVE()) {
      if (this.frame.topmost().ios) {
        this.frame.topmost().ios.controller.visibleViewController.navigationItem.setHidesBackButtonAnimated(true, false);
      }
    } 
  }

  
 submit() {
    this.isAuthenticating = true;
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    /*if (getConnectionType() == connectionType.none) {
      alert("PB requires an internet connection to log in.");
      return;
    }*/

    this.firebaseService.login(this.user)
      .then(() => {
        this.isAuthenticating = false;
        this._router.navigate([""]);
      })
      .catch((message:any) => {
        this.isAuthenticating = false;
      });
  }

  signUp() {
    /*if (getConnectionType() == connectionType.none) {
      alert("PB requires an internet connection to register.");
      return;
    }*/

    this.firebaseService.register(this.user)
      .then(() => {
        this.isAuthenticating = false;
        this.toggleDisplay();
      })
      .catch((message:any) => {
        alert(message);
        this.isAuthenticating = false;
      });
  }

  forgotPassword() {

    this.fancyalert.TNSFancyAlert.showTextField('Email', '', new this.fancyalert.TNSFancyAlertButton({ label: 'OK', action: (value: any) => { 
        console.log(`User entered ${value}`); 
        if (value.trim() != "") {
        this.firebaseService.resetPassword(value.trim())
          .then((result:any) => {
            if(result){
              this.fancyalert.TNSFancyAlert.showSuccess('Success!', 'Your password has been reset; please check your email!', 'OK!');    
            }
        })
          .catch((message:any) => {
            //alerted in backend
          });
        }
    } }), 'alert.png', '#F2B208', 'Reset password', undefined, undefined);  
 }
  
toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}