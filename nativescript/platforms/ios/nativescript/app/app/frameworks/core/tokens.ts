import {OpaqueToken} from '@angular/core';

export const FIREBASE: OpaqueToken = new OpaqueToken('firebase');
export const ENUMS: OpaqueToken = new OpaqueToken('enums');
export const DIALOGS: OpaqueToken = new OpaqueToken('dialogs');
export const APPSETTINGS: OpaqueToken = new OpaqueToken('appSettings');
export const LOADER: OpaqueToken = new OpaqueToken('LoadingIndicator');
export const FRAME: OpaqueToken = new OpaqueToken('Frame');
export const PAGE: OpaqueToken = new OpaqueToken('Page');
export const VIEW: OpaqueToken = new OpaqueToken('View');
export const LISTPICKER: OpaqueToken = new OpaqueToken('ListPicker');
export const SWITCH: OpaqueToken = new OpaqueToken('Switch');
export const TIMER: OpaqueToken = new OpaqueToken('Timer');
export const FANCYALERT: OpaqueToken = new OpaqueToken('FancyAlert');
export const AUDIO: OpaqueToken = new OpaqueToken('Audio');
export const FILE_SYSTEM: OpaqueToken = new OpaqueToken('file-system');
export const NAVIGATION_EXTENSIONS: OpaqueToken = new OpaqueToken('navigation-extensions');
export const INSOMNIA: OpaqueToken = new OpaqueToken('insomnia');


export const TOKENS_SHARED: Array<any> = [
  { provide: FIREBASE, useValue: {} },
  { provide: ENUMS, useValue: {} },
  { provide: DIALOGS, useValue: {} },
  { provide: APPSETTINGS, useValue: {} },
  { provide: LOADER, useValue: {} },
  { provide: FRAME, useValue: {} },
  { provide: PAGE, useValue: {} },
  { provide: VIEW, useValue: {} },
  { provide: LISTPICKER, useValue: {} },
  { provide: SWITCH, useValue: {} },
  { provide: TIMER, useValue: {} },
  { provide: FANCYALERT, useValue: {} },
  { provide: AUDIO, useValue: {} },
  { provide: FILE_SYSTEM, useValue: {} },
  { provide: NAVIGATION_EXTENSIONS, useValue: {} },
  { provide: INSOMNIA, useValue: {} }
];
