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
var core_1 = require("@angular/core");
var window_service_1 = require("../services/window.service");
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
    return PlatformDirective;
}());
PlatformDirective = __decorate([
    core_1.Directive({
        selector: '[platform]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, window_service_1.WindowService])
], PlatformDirective);
exports.PlatformDirective = PlatformDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxhdGZvcm0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxzQ0FBZ0U7QUFHaEUsNkRBQTJEO0FBSzNELElBQWEsaUJBQWlCO0lBRTVCLDJCQUFvQixFQUFjLEVBQVUsUUFBa0IsRUFBVSxHQUFrQjtRQUF0RSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWU7UUFDeEYsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDNUIsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxhQUFhLEdBQUcsY0FBYyxDQUFDO1FBQ2pDLENBQUM7UUFDRCxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksaUJBQWlCO0lBSDdCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtLQUN2QixDQUFDO3FDQUd3QixpQkFBVSxFQUFvQixlQUFRLEVBQWUsOEJBQWE7R0FGL0UsaUJBQWlCLENBWTdCO0FBWlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy93aW5kb3cuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twbGF0Zm9ybV0nXG59KVxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlciwgcHJpdmF0ZSB3aW46IFdpbmRvd1NlcnZpY2UpIHtcbiAgICBsZXQgcGxhdGZvcm1DbGFzcyA9ICd3ZWInO1xuICAgIGxldCBhZ2VudCA9IHdpbi5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGFnZW50LmluZGV4T2YoJ2VsZWN0cm9uJykgPiAtMSkge1xuICAgICAgcGxhdGZvcm1DbGFzcyA9ICdkZXNrdG9wJztcbiAgICB9IGVsc2UgaWYgKGFnZW50LmluZGV4T2YoJ25hdGl2ZXNjcmlwdCcpID4gLTEpIHtcbiAgICAgIHBsYXRmb3JtQ2xhc3MgPSAnbmF0aXZlc2NyaXB0JztcbiAgICB9IFxuICAgIHJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyhlbC5uYXRpdmVFbGVtZW50LCBwbGF0Zm9ybUNsYXNzLCB0cnVlKTtcbiAgfVxufVxuIl19