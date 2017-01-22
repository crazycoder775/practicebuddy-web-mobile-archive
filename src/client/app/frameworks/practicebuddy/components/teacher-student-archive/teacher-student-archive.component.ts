import {Inject, OnInit, NgZone} from '@angular/core';
import {BaseComponent} from '../../../core/decorators/base.component';
import {LogService} from '../../../core/services/log.service';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute} from '@angular/router';
import {FirebaseService} from '../../../practicebuddy/services/firebase.service';
import {StudentModel} from '../../../practicebuddy/models/student.model';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-teacher-student-archive',
  templateUrl: 'teacher-student-archive.component.html',
  styleUrls: ['teacher-student-archive.css'] 
})
export class TeacherStudentArchiveComponent implements OnInit {
  
  public archivedstudentpractices$: Observable<any>;
  
  constructor(private route: ActivatedRoute,
        private firebaseService: FirebaseService,
        private _router: Router,
        private ngZone: NgZone
        ) {}

 ngOnInit() {
    this.archivedstudentpractices$ = <any>this.firebaseService.getArchivedPractices();
 }

 goHome() {
    this._router.navigate([""]);
  } 
  
 
}