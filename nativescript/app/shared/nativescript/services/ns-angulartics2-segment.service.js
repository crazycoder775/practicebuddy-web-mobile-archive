"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NSAngulartics2Segment = (function () {
    function NSAngulartics2Segment() {
    }
    NSAngulartics2Segment.prototype.pageTrack = function (path, location) {
    };
    NSAngulartics2Segment.prototype.eventTrack = function (action, properties) {
    };
    NSAngulartics2Segment.prototype.setUserProperties = function (properties) {
    };
    return NSAngulartics2Segment;
}());
NSAngulartics2Segment = __decorate([
    core_1.Injectable()
], NSAngulartics2Segment);
exports.NSAngulartics2Segment = NSAngulartics2Segment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnMtYW5ndWxhcnRpY3MyLXNlZ21lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5zLWFuZ3VsYXJ0aWNzMi1zZWdtZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLHNDQUEyQztBQVUzQyxJQUFhLHFCQUFxQjtJQUFsQztJQW9CQSxDQUFDO0lBWFEseUNBQVMsR0FBaEIsVUFBaUIsSUFBWSxFQUFFLFFBQWE7SUFFNUMsQ0FBQztJQUVNLDBDQUFVLEdBQWpCLFVBQWtCLE1BQWMsRUFBRSxVQUFlO0lBRWpELENBQUM7SUFFTSxpREFBaUIsR0FBeEIsVUFBeUIsVUFBZTtJQUV4QyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLHFCQUFxQjtJQURqQyxpQkFBVSxFQUFFO0dBQ0EscUJBQXFCLENBb0JqQztBQXBCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGxpYnNcbi8vIGltcG9ydCB7QW5ndWxhcnRpY3MyfSBmcm9tICdhbmd1bGFydGljczInO1xuXG4vLyBUT0RPOiBUaGlzIGlzIGEgd2lwIGF0IHRoZSBtb21lbnRcbi8vIFdpbGwgaW1wbGVtZW50IG5hdGl2ZSBzZWdtZW50IHNkayBzb29uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vTmF0aGFuV2Fsa2VyL25hdGl2ZXNjcmlwdC1zZWdtZW50L2lzc3Vlcy8xXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOU0FuZ3VsYXJ0aWNzMlNlZ21lbnQge1xuXG4gIC8vIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIpIHtcbiAgLy8gICBhbmd1bGFydGljczIucGFnZVRyYWNrLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLnBhZ2VUcmFjayh4LnBhdGgsIHgubG9jYXRpb24pKTtcblx0Ly8gXHRhbmd1bGFydGljczIuZXZlbnRUcmFjay5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5ldmVudFRyYWNrKHguYWN0aW9uLCB4LnByb3BlcnRpZXMpKTtcblx0Ly8gXHRhbmd1bGFydGljczIuc2V0VXNlclByb3BlcnRpZXMuc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuc2V0VXNlclByb3BlcnRpZXMoeCkpO1xuXHQvLyBcdGFuZ3VsYXJ0aWNzMi5zZXRVc2VyUHJvcGVydGllc09uY2Uuc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuc2V0VXNlclByb3BlcnRpZXMoeCkpO1xuICAvLyB9XG5cbiAgcHVibGljIHBhZ2VUcmFjayhwYXRoOiBzdHJpbmcsIGxvY2F0aW9uOiBhbnkpIHtcbiAgICAvLyBUT0RPXG4gIH1cblxuICBwdWJsaWMgZXZlbnRUcmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogYW55KSB7XG4gICAgLy8gVE9ET1xuICB9XG5cbiAgcHVibGljIHNldFVzZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXM6IGFueSkge1xuICAgIC8vIFRPRE9cbiAgfVxufVxuIl19