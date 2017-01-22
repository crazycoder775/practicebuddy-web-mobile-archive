import {Inject, NgZone, OnInit} from '@angular/core';
import {BaseComponent} from '../../../core/decorators/base.component';
import {Observable} from 'rxjs/Observable';
import {FANCYALERT} from '../../../core/tokens';
import {Config} from '../../../core/utils/config';
import {Router, ActivatedRoute} from '@angular/router';
import {FirebaseService} from '../../../practicebuddy/services/firebase.service';
import {StudentModel} from '../../../practicebuddy/models/student.model';

@BaseComponent({
    moduleId: module.id,
    selector: 'sd-student-history',
    templateUrl: 'student-history.component.html',
    styleUrls: ['student-history.css']
})
export class StudentHistoryComponent implements OnInit {

    public practices$: Observable<any>;
    id: any;
    private sub: any;
  
    
    constructor(
        private route: ActivatedRoute,
        private firebaseService: FirebaseService,
        private _router: Router,
        private ngZone: NgZone,
        @Inject(FANCYALERT) private fancyalert: any
    ) {}

ngOnInit(){
  this.sub = this.route.params.subscribe((params:any) => {
      this.id = params['id'];
      this.practices$ = <any>this.firebaseService.getMyPractices(this.id);
    });
 }

 goHome() {
    this._router.navigate([""]);
 }

 viewComment(message){
    this.fancyalert.TNSFancyAlert.showEdit('A note for you', message, 'OK!');                    
 }

 viewAward(award){
    this.fancyalert.TNSFancyAlert.showNotice('A Sticker for you!', award, 'Thanks!');                    
 }
}
