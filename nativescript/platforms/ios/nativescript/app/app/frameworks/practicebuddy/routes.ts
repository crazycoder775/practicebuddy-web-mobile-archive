import {LoginRoutes} from './components/login/login.routes';
import {HomeRoutes} from './components/home/home.routes';
import {StudentHomeRoutes} from './components/student-home/student-home.routes';
import {StudentAdminRoutes} from './components/student-admin/student-admin.routes';
import {TeacherHomeRoutes} from './components/teacher-home/teacher-home.routes';
import {StudentHistoryRoutes} from './components/student-history/student-history.routes';
import {TeacherStudentHomeRoutes} from './components/teacher-student-home/teacher-student-home.routes';
import {TeacherStudentArchiveRoutes} from './components/teacher-student-archive/teacher-student-archive.routes';
import {StickerGalleryRoutes} from './components/sticker-gallery/sticker-gallery.routes';

export const routes: Array<any> = [
  ...LoginRoutes,
  ...HomeRoutes,
  ...StudentHomeRoutes,
  ...StudentAdminRoutes,
  ...TeacherHomeRoutes,
  ...StudentHistoryRoutes,
  ...TeacherStudentHomeRoutes,
  ...TeacherStudentArchiveRoutes,
  ...StickerGalleryRoutes
];
