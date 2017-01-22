import {FirebaseService} from './firebase.service';
import {AuthGuard} from './auth-guard.service';
//import { authProviders } from "../components/app/app.routes";

export const PRACTICEBUDDY_PROVIDERS: Array<any> = [
  FirebaseService,
  AuthGuard,
  //authProviders
];

export * from './firebase.service';
export * from './auth-guard.service';
//export * from '../components/app/app.routes';