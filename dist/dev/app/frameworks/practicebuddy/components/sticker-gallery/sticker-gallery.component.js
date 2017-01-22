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
        this._router.navigate(["/home"]);
    };
    StickerGalleryComponent = __decorate([
        base_component_1.BaseComponent({
            moduleId: module.id,
            selector: 'sd-sticker-gallery',
            templateUrl: 'sticker-gallery.component.html',
            styleUrls: ['sticker-gallery.css']
        }),
        __param(4, core_1.Inject(tokens_1.FANCYALERT)), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, firebase_service_1.FirebaseService, router_1.Router, core_1.NgZone, Object])
    ], StickerGalleryComponent);
    return StickerGalleryComponent;
}());
exports.StickerGalleryComponent = StickerGalleryComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL3ByYWN0aWNlYnVkZHkvY29tcG9uZW50cy9zdGlja2VyLWdhbGxlcnkvc3RpY2tlci1nYWxsZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUJBQXFDLGVBQWUsQ0FBQyxDQUFBO0FBQ3JELCtCQUE0Qix5Q0FBeUMsQ0FBQyxDQUFBO0FBR3RFLHVCQUF5QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ2hELHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELGlDQUE4QixrREFBa0QsQ0FBQyxDQUFBO0FBU2pGO0lBTUUsaUNBQW9CLEtBQXFCLEVBQzNCLGVBQWdDLEVBQ2hDLE9BQWUsRUFDZixNQUFjLEVBQ00sVUFBZTtRQUo3QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUMzQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDTSxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBUmpELGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBU1IsQ0FBQztJQUVaLDBDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5FLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBVTtZQUNoRCxLQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwrQ0FBYSxHQUFiLFVBQWMsU0FBUztRQUF2QixpQkFhQztRQVpDLElBQUksT0FBTyxHQUFHO1lBQ1YsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsY0FBUSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDbEcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7b0JBQzVELEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxFQUFFLEVBQUMsU0FBUyxDQUFDO3lCQUMvQyxJQUFJLENBQUM7d0JBQ0YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDakYsQ0FBQyxFQUFFLFVBQUMsR0FBUTt3QkFDVixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2IsQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxFQUFFLENBQUM7U0FDSCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEksQ0FBQztJQUVELHdDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQTdDRDtRQUFDLDhCQUFhLENBQUM7WUFDYixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ25DLENBQUM7bUJBV08sYUFBTSxDQUFDLG1CQUFVLENBQUM7OytCQVh6QjtJQTRDRiw4QkFBQztBQUFELENBM0NBLEFBMkNDLElBQUE7QUEzQ1ksK0JBQXVCLDBCQTJDbkMsQ0FBQSIsImZpbGUiOiJhcHAvZnJhbWV3b3Jrcy9wcmFjdGljZWJ1ZGR5L2NvbXBvbmVudHMvc3RpY2tlci1nYWxsZXJ5L3N0aWNrZXItZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgT25Jbml0LCBOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCYXNlQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9jb3JlL2RlY29yYXRvcnMvYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHtMb2dTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2xvZy5zZXJ2aWNlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7RkFOQ1lBTEVSVH0gZnJvbSAnLi4vLi4vLi4vY29yZS90b2tlbnMnO1xuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtGaXJlYmFzZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3ByYWN0aWNlYnVkZHkvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZSc7XG5pbXBvcnQge1ByYWN0aWNlTW9kZWx9IGZyb20gJy4uLy4uLy4uL3ByYWN0aWNlYnVkZHkvbW9kZWxzL3ByYWN0aWNlLm1vZGVsJztcblxuQEJhc2VDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLXN0aWNrZXItZ2FsbGVyeScsXG4gIHRlbXBsYXRlVXJsOiAnc3RpY2tlci1nYWxsZXJ5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0aWNrZXItZ2FsbGVyeS5jc3MnXSBcbn0pXG5leHBvcnQgY2xhc3MgU3RpY2tlckdhbGxlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcbiAgc3RpY2tlckxpc3QgPSBbXTtcbiAgcHJpdmF0ZSBzdWI6YW55O1xuICBwcml2YXRlIGlkO1xuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgICAgICBASW5qZWN0KEZBTkNZQUxFUlQpIHByaXZhdGUgZmFuY3lhbGVydDogYW55ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgKSB7fVxuXG5uZ09uSW5pdCgpIHtcbiAgIGZvciAodmFyIGkgPSAxOyBpIDwgNDA7IGkrKykge1xuICAgICAgdGhpcy5zdGlja2VyTGlzdC5wdXNoKGkpO1xuICAgIH1cbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOmFueSkgPT4ge1xuICAgICAgdGhpcy5pZCA9IHBhcmFtc1snaWQnXTtcbiAgICB9KTtcbn1cblxuc2VsZWN0U3RpY2tlcihzdGlja2VySWQpe1xuICBsZXQgYnV0dG9ucyA9IFtcbiAgICAgIG5ldyB0aGlzLmZhbmN5YWxlcnQuVE5TRmFuY3lBbGVydEJ1dHRvbih7IGxhYmVsOiAnTm8nLCBhY3Rpb246ICgpID0+IHsgY29uc29sZS5sb2coJ0NhbmNlbCcpOyB9IH0pLFxuICAgICAgbmV3IHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0QnV0dG9uKHsgbGFiZWw6ICdZZXMnLCBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5hZGRBd2FyZCh0aGlzLmlkLHN0aWNrZXJJZClcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0LnNob3dTdWNjZXNzKCdTdWNjZXNzIScsICdTdGlja2VyIEFkZGVkIScsICdPSyEnKTsgICAgXG4gICAgICAgICAgICB9LCAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgfSB9KVxuICAgICAgXTtcbiAgICAgIHRoaXMuZmFuY3lhbGVydC5UTlNGYW5jeUFsZXJ0LnNob3dDdXN0b21CdXR0b25zKGJ1dHRvbnMsICdhbGVydC5wbmcnLCAnIzE1OThGNicsICdBZGQgYSBTdGlja2VyPycsIGBBd2FyZCB0aGlzIHN0aWNrZXI/YCwgJ09rJyk7IFxufVxuXG5nb0hvbWUoKXtcbiAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIi9ob21lXCJdKTtcbn1cbiAgXG4gIFxuIFxufSJdfQ==
