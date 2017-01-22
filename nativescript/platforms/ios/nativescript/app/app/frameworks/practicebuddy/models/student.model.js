"use strict";
var StudentModel = (function () {
    function StudentModel(id, AdminPassword, Date, Instrument, Name, PracticeLength, PracticesCompleted, PracticesRequired, Reward, TeacherEmail, NotifyAll) {
        this.id = id;
        this.AdminPassword = AdminPassword;
        this.Date = Date;
        this.Instrument = Instrument;
        this.Name = Name;
        this.PracticeLength = PracticeLength;
        this.PracticesCompleted = PracticesCompleted;
        this.PracticesRequired = PracticesRequired;
        this.Reward = Reward;
        this.TeacherEmail = TeacherEmail;
        this.NotifyAll = NotifyAll;
    }
    return StudentModel;
}());
exports.StudentModel = StudentModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0dWRlbnQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQ0ksc0JBRVcsRUFBVSxFQUNWLGFBQXFCLEVBQ3JCLElBQVksRUFDWixVQUFrQixFQUNsQixJQUFZLEVBQ1osY0FBc0IsRUFDdEIsa0JBQTBCLEVBQzFCLGlCQUF5QixFQUN6QixNQUFjLEVBQ2QsWUFBb0IsRUFDcEIsU0FBa0I7UUFWbEIsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ2xCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixtQkFBYyxHQUFkLGNBQWMsQ0FBUTtRQUN0Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQVE7UUFDMUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFRO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFTO0lBRTFCLENBQUM7SUFDUixtQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU3R1ZGVudE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvclxuICAgICAgKFxuICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZyxcbiAgICAgICAgcHVibGljIEFkbWluUGFzc3dvcmQ6IHN0cmluZyxcbiAgICAgICAgcHVibGljIERhdGU6IHN0cmluZyxcbiAgICAgICAgcHVibGljIEluc3RydW1lbnQ6IG51bWJlciwgXG4gICAgICAgIHB1YmxpYyBOYW1lOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBQcmFjdGljZUxlbmd0aDogbnVtYmVyLCAgICAgICAgXG4gICAgICAgIHB1YmxpYyBQcmFjdGljZXNDb21wbGV0ZWQ6IG51bWJlcixcbiAgICAgICAgcHVibGljIFByYWN0aWNlc1JlcXVpcmVkOiBudW1iZXIsICAgICAgICBcbiAgICAgICAgcHVibGljIFJld2FyZDogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgVGVhY2hlckVtYWlsOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBOb3RpZnlBbGw6IGJvb2xlYW4gIFxuICAgICAgKVxuICAgICAge30gICBcbn1cbiJdfQ==