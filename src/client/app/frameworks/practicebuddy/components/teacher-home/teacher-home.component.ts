import {Inject, OnInit} from '@angular/core';
import {BaseComponent} from '../../../core/decorators/base.component';
import {LogService} from '../../../core/services/log.service';
import {FRAME, DIALOGS} from '../../../core/tokens';
import {Observable} from 'rxjs/Observable';
import {Config} from '../../../core/utils/config';
import {Router} from '@angular/router';
import {FirebaseService} from '../../../practicebuddy/services/firebase.service';
import {StudentModel} from '../../../practicebuddy/models/student.model';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-teacher-home',
  templateUrl: 'teacher-home.component.html',
  styleUrls: ['teacher-home.css'] 
})
export class TeacherHomeComponent implements OnInit {
  
  public teacherstudents$: Observable<any>;
  constructor(public firebaseService: FirebaseService,
              private logger: LogService,
              private _router: Router,
              @Inject(FRAME) private frame: any,
              @Inject(DIALOGS) private dialogs: any
            ) {}

 ngOnInit() {
    this.teacherstudents$ = <any>this.firebaseService.getTeacherStudents();
  }

 goHome() {
    this._router.navigate([""]);
  }
  goToTeacherStudentHome(student:StudentModel){
    let navigationExtras = {
      queryParams: { 'name': student.Name }
    }
    this._router.navigate(["/teacher-student-home", student.id], navigationExtras);
  }
  
  viewArchive(){
    this._router.navigate(["/teacher-student-archive"]);
  }

 
}