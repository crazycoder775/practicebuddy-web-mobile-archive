import { Route } from '@angular/router';

import { TeacherStudentHomeComponent } from './teacher-student-home.component';

export const TeacherStudentHomeRoutes: Route[] = [
  { path: "teacher-student-home/:id", component: TeacherStudentHomeComponent }
];
