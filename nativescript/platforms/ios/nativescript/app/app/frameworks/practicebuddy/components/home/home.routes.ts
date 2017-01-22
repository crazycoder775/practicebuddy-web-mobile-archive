import { Routes } from "@angular/router";
import { HomeComponent } from './home.component';
import { AuthGuard } from "../../services/auth-guard.service";

export const HomeRoutes: Routes = [
  { path: '', 
    component: HomeComponent, 
    canActivate: [AuthGuard]
  }  
];
