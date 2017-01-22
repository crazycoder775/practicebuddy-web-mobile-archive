import {Inject, OnInit, NgZone} from '@angular/core';
import {BaseComponent} from '../../../core/decorators/base.component';
import {LogService} from '../../../core/services/log.service';
import {Observable} from 'rxjs/Observable';
import {FANCYALERT} from '../../../core/tokens';
import {Router, ActivatedRoute} from '@angular/router';
import {FirebaseService} from '../../../practicebuddy/services/firebase.service';
import {PracticeModel} from '../../../practicebuddy/models/practice.model';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-sticker-gallery',
  templateUrl: 'sticker-gallery.component.html',
  styleUrls: ['sticker-gallery.css'] 
})
export class StickerGalleryComponent implements OnInit {
  
  stickerList = [];
  private sub:any;
  private id;
  
  constructor(private route: ActivatedRoute,
        private firebaseService: FirebaseService,
        private _router: Router,
        private ngZone: NgZone,
        @Inject(FANCYALERT) private fancyalert: any                    
        ) {}

ngOnInit() {
   for (var i = 1; i < 40; i++) {
      this.stickerList.push(i);
    }
    this.sub = this.route.params.subscribe((params:any) => {
      this.id = params['id'];
    });
}

selectSticker(stickerId){
  let buttons = [
      new this.fancyalert.TNSFancyAlertButton({ label: 'No', action: () => { console.log('Cancel'); } }),
      new this.fancyalert.TNSFancyAlertButton({ label: 'Yes', action: () => {
          this.firebaseService.addAward(this.id,stickerId)
          .then(() => {
              this.fancyalert.TNSFancyAlert.showSuccess('Success!', 'Sticker Added!', 'OK!');    
            }, (err: any) => {
              alert(err);
            });
      } })
      ];
      this.fancyalert.TNSFancyAlert.showCustomButtons(buttons, 'alert.png', '#1598F6', 'Add a Sticker?', `Award this sticker?`, 'Ok'); 
}

goHome(){
  this._router.navigate([""]);
}
  
  
 
}