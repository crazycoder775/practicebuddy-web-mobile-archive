import {FIREBASE, TIMER, ENUMS, DIALOGS, APPSETTINGS, 
  LOADER, FRAME, PAGE, LISTPICKER, SWITCH, FANCYALERT, AUDIO, FILE_SYSTEM, NAVIGATION_EXTENSIONS, INSOMNIA} from './app/frameworks/core/tokens';
var firebase = require("nativescript-plugin-firebase");
import * as enums from 'ui/enums';
import * as dialogs from 'ui/dialogs';
import * as frame from 'ui/frame';
import * as page from 'ui/page';
import * as appSettings from 'application-settings';
import * as listPicker from 'ui/list-picker';
import * as Switch from 'ui/switch';
import * as timer from 'timer';
import { LoadingIndicator } from 'nativescript-loading-indicator';
import * as fancyAlert from 'nativescript-fancyalert';
import * as audio from 'nativescript-audio';
import * as fs from 'file-system';
import { RouterExtensions } from 'nativescript-angular/router';
var insomnia = require("nativescript-insomnia");


export const TOKENS_NATIVE: Array<any> = [
  {
    provide: FIREBASE, useFactory: () => {
      return firebase;
    }
  },
  { provide: ENUMS, useValue: enums },
  { provide: DIALOGS, useValue: dialogs },
  { provide: APPSETTINGS, useValue: appSettings},
  { provide: LOADER, useClass: LoadingIndicator},
  { provide: FRAME, useValue: frame },
  { provide: PAGE, useValue: page},
  { provide: LISTPICKER, useValue: listPicker},
  { provide: SWITCH, useValue: Switch},
  { provide: TIMER, useValue: timer},
  { provide: FANCYALERT, useValue: fancyAlert },
  { provide: AUDIO, useValue: audio },
  { provide: FILE_SYSTEM, useValue: fs },
  { provide: NAVIGATION_EXTENSIONS, useClass: RouterExtensions},
  {
    provide: INSOMNIA, useFactory: () => {
      return insomnia;
    }
  },
];