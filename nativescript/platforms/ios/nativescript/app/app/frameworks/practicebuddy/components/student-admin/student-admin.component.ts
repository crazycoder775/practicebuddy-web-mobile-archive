import { Inject, NgZone, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../core/decorators/base.component';
import { FRAME, LISTPICKER, FANCYALERT, NAVIGATION_EXTENSIONS, SWITCH } from '../../../core/tokens';
import { Observable } from 'rxjs/Observable';
import { Config } from '../../../core/utils/config';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../../practicebuddy/services/firebase.service';
import { StudentModel } from '../../../practicebuddy/models/student.model';
import { PracticeModel } from '../../../practicebuddy/models/practice.model';
import 'rxjs/add/operator/take';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-student-admin',
  templateUrl: 'student-admin.component.html',
  styleUrls: ['student-admin.css']
})
export class StudentAdminComponent implements OnInit, AfterViewInit {

  name: string;
  practicesrequired: number;
  practicelength: number;
  practicescompleted: number;
  reward: string;
  adminpassword: string;
  teacheremail: string;
  date: string;
  instrument: number = 10;
  instruments: any;
  selectedInstrumentIndex: number;
  selectedSwitchIndex: boolean;
  notifyAll: boolean;
  practices: PracticeModel;
  public student: Observable<any>;
  public newstudent: StudentModel;
  id: any;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService,
    private _router: Router,
    private ngZone: NgZone,
    @Inject(FRAME) private frame: any,
    @Inject(NAVIGATION_EXTENSIONS) private routerExtensions: any,
    @Inject(LISTPICKER) private listPicker: any,
    @Inject(SWITCH) private Switch: any,
    @Inject(FANCYALERT) private fancyalert: any
  ) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.firebaseService.getMyStudent(this.id).subscribe((student) => {
        this.ngZone.run(() => {
          for (let prop in student) {
            //props
            if (prop === "Id") {
              this.id = student[prop];
            }
            if (prop === "Name") {
              this.name = student[prop];
            }
            if (prop === "PracticesRequired") {
              this.practicesrequired = student[prop];
            }
            if (prop === "PracticesCompleted") {
              this.practicescompleted = student[prop];
            }
            if (prop === "AdminPassword") {
              this.adminpassword = student[prop];
            }
            if (prop === "PracticeLength") {
              this.practicelength = student[prop];
            }
            if (prop === "Reward") {
              this.reward = student[prop];
            }
            if (prop === "Instrument") {
              this.instrument = student[prop];
            }
            if (prop === "TeacherEmail") {
              this.teacheremail = student[prop];
            }
            if (prop === "NotifyAll") {
              this.notifyAll = student[prop];
            }
            this.instruments = ['acoustic guitar', 'banjo', 'cello',
              'clarinet', 'elecric guitar', 'flute', 'french horn',
              'handbells', 'harp', 'mandolin', 'music', 'oboe', 'organ', 'percussion', 'piano', 'sax',
              'trombone', 'trumpet', 'violin', 'voice', 'xylophone'];
          }
        });
      });
    });
  }

  ngAfterViewInit() {
    this.testForPassword();
  }

  goHome() {
    this._router.navigate([""]);
  }

  public selectedIndexChanged(picker: any) {
    this.selectedInstrumentIndex = picker.selectedIndex;
  }

  public selectedSwitchChanged(result) {
    console.log(result)
    if (result) {
      this.selectedSwitchIndex = true;
    } else {
      this.selectedSwitchIndex = false;
    }
  }



  testForPassword() {
    if (this.adminpassword) {
      //todo this should cycle so they don't get in accidentally
      this.fancyalert.TNSFancyAlert.showTextField('Password', '', new this.fancyalert.TNSFancyAlertButton({
        label: 'Submit', action: (value: any) => {
          console.log(`User entered ${value}`);
          if (value.trim() != "" && value.trim() == this.adminpassword) {
            //close
          }
          else {
            //error
            this.showError();

          }
        }
      }), 'alert.png', '#D44937', 'Enter your password', undefined, undefined);
    }

  }

  showError() {
    let buttons = [
      new this.fancyalert.TNSFancyAlertButton({
        label: 'Ok!', action: () => {
          this.routerExtensions.navigate([''], { clearHistory: true });
        }
      }),
    ];
    this.fancyalert.TNSFancyAlert.showCustomButtons(buttons, 'alert.png', '#F13030', 'Sorry!', `Sorry, you need to enter a password to access this area!`, '');
  }

  submit() {
    this.newstudent = new StudentModel(
      this.id,
      this.adminpassword,
      this.date,
      this.selectedInstrumentIndex,
      this.name,
      Math.round(this.practicelength),
      this.practicescompleted,
      Math.round(this.practicesrequired),
      this.reward,
      this.teacheremail,
      this.selectedSwitchIndex)

    //validation

  if(this.newstudent.Name == "" || 
    this.newstudent.PracticesRequired < 1 || 
    this.newstudent.PracticeLength < 1 || 
    this.newstudent.Reward == "") {
        this.fancyalert.TNSFancyAlert.showError('Oops!', 'Please enter values in the required fields', 'OK!');
    }
  
  else if(this.newstudent.NotifyAll == true && this.newstudent.TeacherEmail == ""){
        this.fancyalert.TNSFancyAlert.showError('Oops!', 'If you want your teacher to receive emails, please enter their email address', 'OK!');
  }

   else {
     this.firebaseService.saveSettings(this.newstudent)
      .then(() => {
        this.fancyalert.TNSFancyAlert.showSuccess('Saved!', 'Student info saved!', 'OK!');
      })
      .catch(function (e: any) {
        console.log(e.message);
      });
   }
  }

}