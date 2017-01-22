"use strict";
var login_routes_1 = require('./components/login/login.routes');
var home_routes_1 = require('./components/home/home.routes');
var student_home_routes_1 = require('./components/student-home/student-home.routes');
var student_admin_routes_1 = require('./components/student-admin/student-admin.routes');
var teacher_home_routes_1 = require('./components/teacher-home/teacher-home.routes');
var student_history_routes_1 = require('./components/student-history/student-history.routes');
var teacher_student_home_routes_1 = require('./components/teacher-student-home/teacher-student-home.routes');
var teacher_student_archive_routes_1 = require('./components/teacher-student-archive/teacher-student-archive.routes');
var sticker_gallery_routes_1 = require('./components/sticker-gallery/sticker-gallery.routes');
exports.routes = login_routes_1.LoginRoutes.concat(home_routes_1.HomeRoutes, student_home_routes_1.StudentHomeRoutes, student_admin_routes_1.StudentAdminRoutes, teacher_home_routes_1.TeacherHomeRoutes, student_history_routes_1.StudentHistoryRoutes, teacher_student_home_routes_1.TeacherStudentHomeRoutes, teacher_student_archive_routes_1.TeacherStudentArchiveRoutes, sticker_gallery_routes_1.StickerGalleryRoutes);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL3ByYWN0aWNlYnVkZHkvcm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBMEIsaUNBQWlDLENBQUMsQ0FBQTtBQUM1RCw0QkFBeUIsK0JBQStCLENBQUMsQ0FBQTtBQUN6RCxvQ0FBZ0MsK0NBQStDLENBQUMsQ0FBQTtBQUNoRixxQ0FBaUMsaURBQWlELENBQUMsQ0FBQTtBQUNuRixvQ0FBZ0MsK0NBQStDLENBQUMsQ0FBQTtBQUNoRix1Q0FBbUMscURBQXFELENBQUMsQ0FBQTtBQUN6Riw0Q0FBdUMsK0RBQStELENBQUMsQ0FBQTtBQUN2RywrQ0FBMEMscUVBQXFFLENBQUMsQ0FBQTtBQUNoSCx1Q0FBbUMscURBQXFELENBQUMsQ0FBQTtBQUU1RSxjQUFNLEdBQ2QsMEJBQVcsUUFDWCx3QkFBVSxFQUNWLHVDQUFpQixFQUNqQix5Q0FBa0IsRUFDbEIsdUNBQWlCLEVBQ2pCLDZDQUFvQixFQUNwQixzREFBd0IsRUFDeEIsNERBQTJCLEVBQzNCLDZDQUFvQixDQUN4QixDQUFDIiwiZmlsZSI6ImFwcC9mcmFtZXdvcmtzL3ByYWN0aWNlYnVkZHkvcm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMb2dpblJvdXRlc30gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLnJvdXRlcyc7XG5pbXBvcnQge0hvbWVSb3V0ZXN9IGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUucm91dGVzJztcbmltcG9ydCB7U3R1ZGVudEhvbWVSb3V0ZXN9IGZyb20gJy4vY29tcG9uZW50cy9zdHVkZW50LWhvbWUvc3R1ZGVudC1ob21lLnJvdXRlcyc7XG5pbXBvcnQge1N0dWRlbnRBZG1pblJvdXRlc30gZnJvbSAnLi9jb21wb25lbnRzL3N0dWRlbnQtYWRtaW4vc3R1ZGVudC1hZG1pbi5yb3V0ZXMnO1xuaW1wb3J0IHtUZWFjaGVySG9tZVJvdXRlc30gZnJvbSAnLi9jb21wb25lbnRzL3RlYWNoZXItaG9tZS90ZWFjaGVyLWhvbWUucm91dGVzJztcbmltcG9ydCB7U3R1ZGVudEhpc3RvcnlSb3V0ZXN9IGZyb20gJy4vY29tcG9uZW50cy9zdHVkZW50LWhpc3Rvcnkvc3R1ZGVudC1oaXN0b3J5LnJvdXRlcyc7XG5pbXBvcnQge1RlYWNoZXJTdHVkZW50SG9tZVJvdXRlc30gZnJvbSAnLi9jb21wb25lbnRzL3RlYWNoZXItc3R1ZGVudC1ob21lL3RlYWNoZXItc3R1ZGVudC1ob21lLnJvdXRlcyc7XG5pbXBvcnQge1RlYWNoZXJTdHVkZW50QXJjaGl2ZVJvdXRlc30gZnJvbSAnLi9jb21wb25lbnRzL3RlYWNoZXItc3R1ZGVudC1hcmNoaXZlL3RlYWNoZXItc3R1ZGVudC1hcmNoaXZlLnJvdXRlcyc7XG5pbXBvcnQge1N0aWNrZXJHYWxsZXJ5Um91dGVzfSBmcm9tICcuL2NvbXBvbmVudHMvc3RpY2tlci1nYWxsZXJ5L3N0aWNrZXItZ2FsbGVyeS5yb3V0ZXMnO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzOiBBcnJheTxhbnk+ID0gW1xuICAuLi5Mb2dpblJvdXRlcyxcbiAgLi4uSG9tZVJvdXRlcyxcbiAgLi4uU3R1ZGVudEhvbWVSb3V0ZXMsXG4gIC4uLlN0dWRlbnRBZG1pblJvdXRlcyxcbiAgLi4uVGVhY2hlckhvbWVSb3V0ZXMsXG4gIC4uLlN0dWRlbnRIaXN0b3J5Um91dGVzLFxuICAuLi5UZWFjaGVyU3R1ZGVudEhvbWVSb3V0ZXMsXG4gIC4uLlRlYWNoZXJTdHVkZW50QXJjaGl2ZVJvdXRlcyxcbiAgLi4uU3RpY2tlckdhbGxlcnlSb3V0ZXNcbl07XG4iXX0=