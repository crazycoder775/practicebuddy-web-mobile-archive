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
var StickerGalleryComponent = (function () {
    function StickerGalleryComponent(route, firebaseService, _router, ngZone, fancyalert) {
        this.route = route;
        this.firebaseService = firebaseService;
        this._router = _router;
        this.ngZone = ngZone;
        this.fancyalert = fancyalert;
        this.stickerList = [];
    }
    StickerGalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        for (var i = 1; i < 40; i++) {
            this.stickerList.push(i);
        }
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
    };
    StickerGalleryComponent.prototype.selectSticker = function (stickerId) {
        var _this = this;
        var buttons = [
            new this.fancyalert.TNSFancyAlertButton({ label: 'No', action: function () { console.log('Cancel'); } }),
            new this.fancyalert.TNSFancyAlertButton({ label: 'Yes', action: function () {
                    _this.firebaseService.addAward(_this.id, stickerId)
                        .then(function () {
                        _this.fancyalert.TNSFancyAlert.showSuccess('Success!', 'Sticker Added!', 'OK!');
                    }, function (err) {
                        alert(err);
                    });
                } })
        ];
        this.fancyalert.TNSFancyAlert.showCustomButtons(buttons, 'alert.png', '#1598F6', 'Add a Sticker?', "Award this sticker?", 'Ok');
    };
    StickerGalleryComponent.prototype.goHome = function () {
        this._router.navigate([""]);
    };
    return StickerGalleryComponent;
}());
StickerGalleryComponent = __decorate([
    base_component_1.BaseComponent({
        moduleId: module.id,
        selector: 'sd-sticker-gallery',
        templateUrl: 'sticker-gallery.component.html',
        styleUrls: ['sticker-gallery.css']
    }),
    __param(4, core_1.Inject(tokens_1.FANCYALERT)),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        firebase_service_1.FirebaseService,
        router_1.Router,
        core_1.NgZone, Object])
], StickerGalleryComponent);
exports.StickerGalleryComponent = StickerGalleryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2tlci1nYWxsZXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0aWNrZXItZ2FsbGVyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFxRDtBQUNyRCwwRUFBc0U7QUFHdEUsK0NBQWdEO0FBQ2hELDBDQUF1RDtBQUN2RCxxRkFBaUY7QUFTakYsSUFBYSx1QkFBdUI7SUFNbEMsaUNBQW9CLEtBQXFCLEVBQzNCLGVBQWdDLEVBQ2hDLE9BQWUsRUFDZixNQUFjLEVBQ00sVUFBZTtRQUo3QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUMzQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDTSxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBUmpELGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBU1IsQ0FBQztJQUVaLDBDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5FLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBVTtZQUNoRCxLQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwrQ0FBYSxHQUFiLFVBQWMsU0FBUztRQUF2QixpQkFhQztRQVpDLElBQUksT0FBTyxHQUFHO1lBQ1YsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsY0FBUSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDbEcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7b0JBQzVELEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxFQUFFLEVBQUMsU0FBUyxDQUFDO3lCQUMvQyxJQUFJLENBQUM7d0JBQ0YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDakYsQ0FBQyxFQUFFLFVBQUMsR0FBUTt3QkFDVixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2IsQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxFQUFFLENBQUM7U0FDSCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEksQ0FBQztJQUVELHdDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUlELDhCQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQztBQTNDWSx1QkFBdUI7SUFObkMsOEJBQWEsQ0FBQztRQUNiLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLFdBQVcsRUFBRSxnQ0FBZ0M7UUFDN0MsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7S0FDbkMsQ0FBQztJQVdPLFdBQUEsYUFBTSxDQUFDLG1CQUFVLENBQUMsQ0FBQTtxQ0FKRSx1QkFBYztRQUNWLGtDQUFlO1FBQ3ZCLGVBQU07UUFDUCxhQUFNO0dBVGpCLHVCQUF1QixDQTJDbkM7QUEzQ1ksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIE9uSW5pdCwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kZWNvcmF0b3JzL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7TG9nU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9sb2cuc2VydmljZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0ZBTkNZQUxFUlR9IGZyb20gJy4uLy4uLy4uL2NvcmUvdG9rZW5zJztcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9wcmFjdGljZWJ1ZGR5L3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2UnO1xuaW1wb3J0IHtQcmFjdGljZU1vZGVsfSBmcm9tICcuLi8uLi8uLi9wcmFjdGljZWJ1ZGR5L21vZGVscy9wcmFjdGljZS5tb2RlbCc7XG5cbkBCYXNlQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1zdGlja2VyLWdhbGxlcnknLFxuICB0ZW1wbGF0ZVVybDogJ3N0aWNrZXItZ2FsbGVyeS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdGlja2VyLWdhbGxlcnkuY3NzJ10gXG59KVxuZXhwb3J0IGNsYXNzIFN0aWNrZXJHYWxsZXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG4gIHN0aWNrZXJMaXN0ID0gW107XG4gIHByaXZhdGUgc3ViOmFueTtcbiAgcHJpdmF0ZSBpZDtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgQEluamVjdChGQU5DWUFMRVJUKSBwcml2YXRlIGZhbmN5YWxlcnQ6IGFueSAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICkge31cblxubmdPbkluaXQoKSB7XG4gICBmb3IgKHZhciBpID0gMTsgaSA8IDQwOyBpKyspIHtcbiAgICAgIHRoaXMuc3RpY2tlckxpc3QucHVzaChpKTtcbiAgICB9XG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczphbnkpID0+IHtcbiAgICAgIHRoaXMuaWQgPSBwYXJhbXNbJ2lkJ107XG4gICAgfSk7XG59XG5cbnNlbGVjdFN0aWNrZXIoc3RpY2tlcklkKXtcbiAgbGV0IGJ1dHRvbnMgPSBbXG4gICAgICBuZXcgdGhpcy5mYW5jeWFsZXJ0LlROU0ZhbmN5QWxlcnRCdXR0b24oeyBsYWJlbDogJ05vJywgYWN0aW9uOiAoKSA9PiB7IGNvbnNvbGUubG9nKCdDYW5jZWwnKTsgfSB9KSxcbiAgICAgIG5ldyB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydEJ1dHRvbih7IGxhYmVsOiAnWWVzJywgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuYWRkQXdhcmQodGhpcy5pZCxzdGlja2VySWQpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydC5zaG93U3VjY2VzcygnU3VjY2VzcyEnLCAnU3RpY2tlciBBZGRlZCEnLCAnT0shJyk7ICAgIFxuICAgICAgICAgICAgfSwgKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgIH0gfSlcbiAgICAgIF07XG4gICAgICB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydC5zaG93Q3VzdG9tQnV0dG9ucyhidXR0b25zLCAnYWxlcnQucG5nJywgJyMxNTk4RjYnLCAnQWRkIGEgU3RpY2tlcj8nLCBgQXdhcmQgdGhpcyBzdGlja2VyP2AsICdPaycpOyBcbn1cblxuZ29Ib21lKCl7XG4gIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xufVxuICBcbiAgXG4gXG59Il19