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
var core_1 = require('@angular/core');
var window_service_1 = require('../services/window.service');
var PlatformDirective = (function () {
    function PlatformDirective(el, renderer, win) {
        this.el = el;
        this.renderer = renderer;
        this.win = win;
        var platformClass = 'web';
        var agent = win.navigator.userAgent.toLowerCase();
        if (agent.indexOf('electron') > -1) {
            platformClass = 'desktop';
        }
        else if (agent.indexOf('nativescript') > -1) {
            platformClass = 'nativescript';
        }
        renderer.setElementClass(el.nativeElement, platformClass, true);
    }
    PlatformDirective = __decorate([
        core_1.Directive({
            selector: '[platform]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, window_service_1.WindowService])
    ], PlatformDirective);
    return PlatformDirective;
}());
exports.PlatformDirective = PlatformDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL2NvcmUvZGlyZWN0aXZlcy9wbGF0Zm9ybS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFCQUFnRCxlQUFlLENBQUMsQ0FBQTtBQUdoRSwrQkFBOEIsNEJBQTRCLENBQUMsQ0FBQTtBQUszRDtJQUVFLDJCQUFvQixFQUFjLEVBQVUsUUFBa0IsRUFBVSxHQUFrQjtRQUF0RSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWU7UUFDeEYsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDNUIsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxhQUFhLEdBQUcsY0FBYyxDQUFDO1FBQ2pDLENBQUM7UUFDRCxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFkSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtTQUN2QixDQUFDOzt5QkFBQTtJQWFGLHdCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSx5QkFBaUIsb0JBWTdCLENBQUEiLCJmaWxlIjoiYXBwL2ZyYW1ld29ya3MvY29yZS9kaXJlY3RpdmVzL3BsYXRmb3JtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvd2luZG93LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcGxhdGZvcm1dJ1xufSlcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybURpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsIHByaXZhdGUgd2luOiBXaW5kb3dTZXJ2aWNlKSB7XG4gICAgbGV0IHBsYXRmb3JtQ2xhc3MgPSAnd2ViJztcbiAgICBsZXQgYWdlbnQgPSB3aW4ubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChhZ2VudC5pbmRleE9mKCdlbGVjdHJvbicpID4gLTEpIHtcbiAgICAgIHBsYXRmb3JtQ2xhc3MgPSAnZGVza3RvcCc7XG4gICAgfSBlbHNlIGlmIChhZ2VudC5pbmRleE9mKCduYXRpdmVzY3JpcHQnKSA+IC0xKSB7XG4gICAgICBwbGF0Zm9ybUNsYXNzID0gJ25hdGl2ZXNjcmlwdCc7XG4gICAgfSBcbiAgICByZW5kZXJlci5zZXRFbGVtZW50Q2xhc3MoZWwubmF0aXZlRWxlbWVudCwgcGxhdGZvcm1DbGFzcywgdHJ1ZSk7XG4gIH1cbn1cbiJdfQ==
