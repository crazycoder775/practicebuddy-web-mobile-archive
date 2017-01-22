import { Inject, trigger, style, animate, state, transition, keyframes, ViewChild, ElementRef, OnInit } from '@angular/core';
import { BaseComponent } from '../../../core/decorators/base.component';
import { LogService } from '../../../core/services/log.service';
import { FRAME, DIALOGS, FANCYALERT, NAVIGATION_EXTENSIONS } from '../../../core/tokens';
import { Observable } from 'rxjs/Observable';
import { Config } from '../../../core/utils/config';
import { Router } from '@angular/router';
import { FirebaseService } from '../../../practicebuddy/services/firebase.service';
import { StudentModel } from '../../../practicebuddy/models/student.model';

@BaseComponent({
    moduleId: module.id,
    selector: 'sd-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.css'],
    animations: [
        trigger('state', [
            state('active', style({ transform: 'rotate(45)' })),
            state('inactive', style({ transform: 'rotate(0)' })),
            transition('inactivebtn => activebtna', [
                animate('280ms ease-in', keyframes([
                    style({ opacity: 1, transform: 'translateY(0)' }),
                    style({ opacity: 1, transform: 'translateX(70)' })
                ]))
            ]),
            transition('inactivebtn => activebtnb', [
                animate('280ms ease-in', keyframes([
                    style({ opacity: 1, transform: 'translateX(0)' }),
                    style({ opacity: 1, transform: 'translateY(-80)' })
                ]))
            ]),
            transition('inactivebtn => activebtnc', [
                animate('280ms ease-in', keyframes([
                    style({ opacity: 1, transform: 'translateY(0)' }),
                    style({ opacity: 1, transform: 'translateX(-70)' }),

                ]))
            ]),
            transition('activebtna => inactivebtn', [
                animate('280ms ease-out', keyframes([
                    style({ opacity: 0, transform: 'translateX(0)' }),
                    style({ opacity: 0, transform: 'translateY(0)' })
                ]))
            ]),
            transition('activebtnb => inactivebtn', [
                animate('280ms ease-out', keyframes([
                    style({ opacity: 0, transform: 'translateX(0)' }),
                    style({ opacity: 0, transform: 'translateY(0)' })
                ]))
            ]),
            transition('activebtnc => inactivebtn', [
                animate('280ms ease-out', keyframes([
                    style({ opacity: 0, transform: 'translateX(0)' }),
                    style({ opacity: 0, transform: 'translateY(0)' })
                ]))
            ])
        ])
    ]
})
export class HomeComponent implements OnInit {

    public students$: Observable<any>;
    constructor(public firebaseService: FirebaseService,
        private logger: LogService,
        private _router: Router,
        @Inject(FRAME) private frame: any,
        @Inject(NAVIGATION_EXTENSIONS) private routerExtensions: any,
        @Inject(DIALOGS) private dialogs: any,
        @Inject(FANCYALERT) private fancyalert: any
    ) { }
    isOpen = false;

    ngOnInit() {

        this.fancyalert.TNSFancyAlert.shouldDismissOnTapOutside = true;

        this.students$ = <any>this.firebaseService.getMyStudents();
        if (Config.IS_MOBILE_NATIVE()) {
            if (this.frame.topmost().ios) {
                this.frame.topmost().ios.controller.visibleViewController.navigationItem.setHidesBackButtonAnimated(true, false);
            }
        }
    }

    onTap() {
        this.isOpen = !this.isOpen;
    }

    goToStudentHome(id: string) {
        this.isOpen = false;
        this._router.navigate(["/student-home", id]);
    }

    goToTeachersHome() {
        this.isOpen = false;
        this._router.navigate(["/teacher-home"]);
    }

    addStudent() {
        this.isOpen = false;
        var options = {
            title: 'Add a student',
            okButtonText: 'Save',
            cancelButtonText: 'Cancel',
            inputType: this.dialogs.inputType.text
        };
        this.dialogs.prompt(options).then((result: any) => {
            if (result.text.trim() != "") {
                this.firebaseService.add(result.text)
                    .then(() => {
                        this.fancyalert.TNSFancyAlert.showSuccess('Success!', 'Student successfully added', 'OK!');
                    }, (err: any) => {
                        alert(err);
                    });
            }
        });


        /*this.fancyalert.TNSFancyAlert.showTextField('Add', '', new this.fancyalert.TNSFancyAlertButton({ label: 'Save', action: (value: any) => { 
             console.log(`User entered ${value}`); 
             if (value.trim() != "") {
             this.firebaseService.add(value)
               .then(() => {
                 this.fancyalert.TNSFancyAlert.showSuccess('Success!', 'Student successfully added', 'OK!');    
               }, (err: any) => {
                 alert(err);
               });
             }
         } }), 'plus.png', '#F2B208', 'Add a student', undefined, undefined);*/

    }


    logout() {
        this.isOpen = false;
        //check whether for real, then logout
        //todo keep dialog for android
        /*var options = {
          title: 'Logout?',
          okButtonText: 'Yes',
          cancelButtonText: 'Cancel'
        };
        this.dialogs.confirm(options).then((result: any) => {
          //navigate
          this._router.navigate(["/"]);
        });*/
        let buttons = [
            new this.fancyalert.TNSFancyAlertButton({ label: 'No', action: () => { console.log('Cancel'); } }),
            new this.fancyalert.TNSFancyAlertButton({
                label: 'Yes', action: () => {
                    this.firebaseService.logout();
                    this.routerExtensions.navigate(["/login"], { clearHistory: true });
                }
            })
        ];
        this.fancyalert.TNSFancyAlert.showCustomButtons(buttons, 'alert.png', '#F13030', 'Logout?', `Are you sure you want to logout?`, 'Ok');


    }



}