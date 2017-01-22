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
var core_1 = require('@angular/core');
var base_component_1 = require('../../../core/decorators/base.component');
var tokens_1 = require('../../../core/tokens');
var router_1 = require('@angular/router');
var firebase_service_1 = require('../../../practicebuddy/services/firebase.service');
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
        this._router.navigate(["/home"]);
    };
    StudentHistoryComponent.prototype.viewComment = function (message) {
        this.fancyalert.TNSFancyAlert.showEdit('A note for you', message, 'OK!');
    };
    StudentHistoryComponent.prototype.viewAward = function (award) {
        this.fancyalert.TNSFancyAlert.showNotice('A Sticker for you!', award, 'Thanks!');
    };
    StudentHistoryComponent = __decorate([
        base_component_1.BaseComponent({
            moduleId: module.id,
            selector: 'sd-student-history',
            templateUrl: 'student-history.component.html',
            styleUrls: ['student-history.css']
        }),
        __param(4, core_1.Inject(tokens_1.FANCYALERT)), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, firebase_service_1.FirebaseService, router_1.Router, core_1.NgZone, Object])
    ], StudentHistoryComponent);
    return StudentHistoryComponent;
}());
exports.StudentHistoryComponent = StudentHistoryComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL3ByYWN0aWNlYnVkZHkvY29tcG9uZW50cy9zdHVkZW50LWhpc3Rvcnkvc3R1ZGVudC1oaXN0b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUJBQXFDLGVBQWUsQ0FBQyxDQUFBO0FBQ3JELCtCQUE0Qix5Q0FBeUMsQ0FBQyxDQUFBO0FBRXRFLHVCQUF5QixzQkFBc0IsQ0FBQyxDQUFBO0FBRWhELHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELGlDQUE4QixrREFBa0QsQ0FBQyxDQUFBO0FBU2pGO0lBT0ksaUNBQ1ksS0FBcUIsRUFDckIsZUFBZ0MsRUFDaEMsT0FBZSxFQUNmLE1BQWMsRUFDTSxVQUFlO1FBSm5DLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNNLGVBQVUsR0FBVixVQUFVLENBQUs7SUFDNUMsQ0FBQztJQUVSLDBDQUFRLEdBQVI7UUFBQSxpQkFLRTtRQUpBLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBVTtZQUM5QyxLQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFRLEtBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RSxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCx3Q0FBTSxHQUFOO1FBQ0csSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCw2Q0FBVyxHQUFYLFVBQVksT0FBTztRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCwyQ0FBUyxHQUFULFVBQVUsS0FBSztRQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQXRDRjtRQUFDLDhCQUFhLENBQUM7WUFDWCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ3JDLENBQUM7bUJBYU8sYUFBTSxDQUFDLG1CQUFVLENBQUM7OytCQWJ6QjtJQWtDRiw4QkFBQztBQUFELENBakNBLEFBaUNDLElBQUE7QUFqQ1ksK0JBQXVCLDBCQWlDbkMsQ0FBQSIsImZpbGUiOiJhcHAvZnJhbWV3b3Jrcy9wcmFjdGljZWJ1ZGR5L2NvbXBvbmVudHMvc3R1ZGVudC1oaXN0b3J5L3N0dWRlbnQtaGlzdG9yeS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgTmdab25lLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCYXNlQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9jb3JlL2RlY29yYXRvcnMvYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtGQU5DWUFMRVJUfSBmcm9tICcuLi8uLi8uLi9jb3JlL3Rva2Vucyc7XG5pbXBvcnQge0NvbmZpZ30gZnJvbSAnLi4vLi4vLi4vY29yZS91dGlscy9jb25maWcnO1xuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtGaXJlYmFzZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3ByYWN0aWNlYnVkZHkvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZSc7XG5pbXBvcnQge1N0dWRlbnRNb2RlbH0gZnJvbSAnLi4vLi4vLi4vcHJhY3RpY2VidWRkeS9tb2RlbHMvc3R1ZGVudC5tb2RlbCc7XG5cbkBCYXNlQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnc2Qtc3R1ZGVudC1oaXN0b3J5JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3N0dWRlbnQtaGlzdG9yeS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3N0dWRlbnQtaGlzdG9yeS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdHVkZW50SGlzdG9yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgcHJhY3RpY2VzJDogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIGlkOiBhbnk7XG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcbiAgXG4gICAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgQEluamVjdChGQU5DWUFMRVJUKSBwcml2YXRlIGZhbmN5YWxlcnQ6IGFueVxuICAgICkge31cblxubmdPbkluaXQoKXtcbiAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczphbnkpID0+IHtcbiAgICAgIHRoaXMuaWQgPSBwYXJhbXNbJ2lkJ107XG4gICAgICB0aGlzLnByYWN0aWNlcyQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15UHJhY3RpY2VzKHRoaXMuaWQpO1xuICAgIH0pO1xuIH1cblxuIGdvSG9tZSgpIHtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xuIH1cblxuIHZpZXdDb21tZW50KG1lc3NhZ2Upe1xuICAgIHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0LnNob3dFZGl0KCdBIG5vdGUgZm9yIHlvdScsIG1lc3NhZ2UsICdPSyEnKTsgICAgICAgICAgICAgICAgICAgIFxuIH1cblxuIHZpZXdBd2FyZChhd2FyZCl7XG4gICAgdGhpcy5mYW5jeWFsZXJ0LlROU0ZhbmN5QWxlcnQuc2hvd05vdGljZSgnQSBTdGlja2VyIGZvciB5b3UhJywgYXdhcmQsICdUaGFua3MhJyk7ICAgICAgICAgICAgICAgICAgICBcbiB9XG59XG4iXX0=
