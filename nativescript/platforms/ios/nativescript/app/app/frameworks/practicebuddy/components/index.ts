import { AppComponent } from './app/app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentAdminComponent } from './student-admin/student-admin.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { StudentHistoryComponent } from './student-history/student-history.component';
import { TeacherStudentHomeComponent } from './teacher-student-home/teacher-student-home.component';
import { TeacherStudentArchiveComponent } from './teacher-student-archive/teacher-student-archive.component';
import { StickerGalleryComponent } from './sticker-gallery/sticker-gallery.component';

// for routes
export const ENTRY_COMPONENTS: any[] = [
  AppComponent,
  LoginComponent,
  HomeComponent,
  StudentHomeComponent,
  StudentAdminComponent,
  TeacherHomeComponent,
  StudentHistoryComponent,
  TeacherStudentHomeComponent,
  TeacherStudentArchiveComponent,
  StickerGalleryComponent
];

export * from './app/app.component';
export * from './login/login.component';
export * from './home/home.component';
export * from './student-home/student-home.component';
export * from './student-admin/student-admin.component';
export * from './teacher-home/teacher-home.component';
export * from './student-history/student-history.component';
export * from './teacher-student-home/teacher-student-home.component';
export * from './teacher-student-archive/teacher-student-archive.component';
export * from './sticker-gallery/sticker-gallery.component';