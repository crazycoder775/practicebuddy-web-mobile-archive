/*import {LoginRoutes} from '../../components/login/login.routes';
import {HomeRoutes} from '../../components/home/home.routes';
export const routes: Array<any> = [
  ...LoginRoutes,
  ...HomeRoutes
]*/
import { AuthGuard } from "../../services/auth-guard.service";

export const authProviders = [
  AuthGuard
];

export const routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" }
];


