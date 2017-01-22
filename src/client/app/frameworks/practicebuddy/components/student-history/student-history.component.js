"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var base_component_1 = require("../../../core/decorators/base.component");
var tokens_1 = require("../../../core/tokens");
var router_1 = require("@angular/router");
var firebase_service_1 = require("../../../practicebuddy/services/firebase.service");
var StudentHistoryComponent = (function () {
    function StudentHistoryComponent(route, firebaseService, _router, ngZone, fancyalert) {
        this.route = route;
        this.firebaseService = firebaseService;
        this._router = _router;
        this.ngZone = ngZone;
        this.fancyalert = fancyalert;
    }
    StudentHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.practices$ = _this.firebaseService.getMyPractices(_this.id);
        });
    };
    StudentHistoryComponent.prototype.goHome = function () {
        this._router.navigate([""]);
    };
    StudentHistoryComponent.prototype.viewComment = function (message) {
        this.fancyalert.TNSFancyAlert.showEdit('A note for you', message, 'OK!');
    };
    StudentHistoryComponent.prototype.viewAward = function (award) {
        this.fancyalert.TNSFancyAlert.showNotice('A Sticker for you!', award, 'Thanks!');
    };
    return StudentHistoryComponent;
}());
StudentHistoryComponent = __decorate([
    base_component_1.BaseComponent({
        moduleId: module.id,
        selector: 'sd-student-history',
        templateUrl: 'student-history.component.html',
        styleUrls: ['student-history.css']
    }),
    __param(4, core_1.Inject(tokens_1.FANCYALERT)),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        firebase_service_1.FirebaseService,
        router_1.Router,
        core_1.NgZone, Object])
], StudentHistoryComponent);
exports.StudentHistoryComponent = StudentHistoryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudC1oaXN0b3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0dWRlbnQtaGlzdG9yeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFxRDtBQUNyRCwwRUFBc0U7QUFFdEUsK0NBQWdEO0FBRWhELDBDQUF1RDtBQUN2RCxxRkFBaUY7QUFTakYsSUFBYSx1QkFBdUI7SUFPaEMsaUNBQ1ksS0FBcUIsRUFDckIsZUFBZ0MsRUFDaEMsT0FBZSxFQUNmLE1BQWMsRUFDTSxVQUFlO1FBSm5DLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNNLGVBQVUsR0FBVixVQUFVLENBQUs7SUFDNUMsQ0FBQztJQUVSLDBDQUFRLEdBQVI7UUFBQSxpQkFLRTtRQUpBLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBVTtZQUM5QyxLQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFRLEtBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RSxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCx3Q0FBTSxHQUFOO1FBQ0csSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCw2Q0FBVyxHQUFYLFVBQVksT0FBTztRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCwyQ0FBUyxHQUFULFVBQVUsS0FBSztRQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUNGLDhCQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQWpDWSx1QkFBdUI7SUFObkMsOEJBQWEsQ0FBQztRQUNYLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLFdBQVcsRUFBRSxnQ0FBZ0M7UUFDN0MsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7S0FDckMsQ0FBQztJQWFPLFdBQUEsYUFBTSxDQUFDLG1CQUFVLENBQUMsQ0FBQTtxQ0FKSix1QkFBYztRQUNKLGtDQUFlO1FBQ3ZCLGVBQU07UUFDUCxhQUFNO0dBWGpCLHVCQUF1QixDQWlDbkM7QUFqQ1ksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIE5nWm9uZSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kZWNvcmF0b3JzL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7RkFOQ1lBTEVSVH0gZnJvbSAnLi4vLi4vLi4vY29yZS90b2tlbnMnO1xuaW1wb3J0IHtDb25maWd9IGZyb20gJy4uLy4uLy4uL2NvcmUvdXRpbHMvY29uZmlnJztcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9wcmFjdGljZWJ1ZGR5L3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2UnO1xuaW1wb3J0IHtTdHVkZW50TW9kZWx9IGZyb20gJy4uLy4uLy4uL3ByYWN0aWNlYnVkZHkvbW9kZWxzL3N0dWRlbnQubW9kZWwnO1xuXG5AQmFzZUNvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NkLXN0dWRlbnQtaGlzdG9yeScsXG4gICAgdGVtcGxhdGVVcmw6ICdzdHVkZW50LWhpc3RvcnkuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzdHVkZW50LWhpc3RvcnkuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3R1ZGVudEhpc3RvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIHByYWN0aWNlcyQ6IE9ic2VydmFibGU8YW55PjtcbiAgICBpZDogYW55O1xuICAgIHByaXZhdGUgc3ViOiBhbnk7XG4gIFxuICAgIFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICAgIEBJbmplY3QoRkFOQ1lBTEVSVCkgcHJpdmF0ZSBmYW5jeWFsZXJ0OiBhbnlcbiAgICApIHt9XG5cbm5nT25Jbml0KCl7XG4gIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6YW55KSA9PiB7XG4gICAgICB0aGlzLmlkID0gcGFyYW1zWydpZCddO1xuICAgICAgdGhpcy5wcmFjdGljZXMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRNeVByYWN0aWNlcyh0aGlzLmlkKTtcbiAgICB9KTtcbiB9XG5cbiBnb0hvbWUoKSB7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gfVxuXG4gdmlld0NvbW1lbnQobWVzc2FnZSl7XG4gICAgdGhpcy5mYW5jeWFsZXJ0LlROU0ZhbmN5QWxlcnQuc2hvd0VkaXQoJ0Egbm90ZSBmb3IgeW91JywgbWVzc2FnZSwgJ09LIScpOyAgICAgICAgICAgICAgICAgICAgXG4gfVxuXG4gdmlld0F3YXJkKGF3YXJkKXtcbiAgICB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydC5zaG93Tm90aWNlKCdBIFN0aWNrZXIgZm9yIHlvdSEnLCBhd2FyZCwgJ1RoYW5rcyEnKTsgICAgICAgICAgICAgICAgICAgIFxuIH1cbn1cbiJdfQ==