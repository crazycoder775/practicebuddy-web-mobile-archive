import { Route } from '@angular/router';

import { StudentHistoryComponent } from './student-history.component';

export const StudentHistoryRoutes: Route[] = [
  { path: "student-history/:id", component: StudentHistoryComponent }
];
