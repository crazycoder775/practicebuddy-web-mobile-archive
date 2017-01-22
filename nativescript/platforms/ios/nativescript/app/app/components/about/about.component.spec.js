"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var index_1 = require("../../frameworks/test/index");
var about_component_1 = require("./about.component");
var testModuleConfig = function () {
    testing_1.TestBed.configureTestingModule({
        declarations: [about_component_1.AboutComponent, TestComponent]
    });
};
function main() {
    index_1.t.describe('@Component: AboutComponent', function () {
        index_1.t.be(testModuleConfig);
        index_1.t.it('should work', index_1.t.async(function () {
            testing_1.TestBed.compileComponents()
                .then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                var aboutDOMEl = fixture.debugElement.children[0].nativeElement;
                index_1.t.e(aboutDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
            });
        }));
    });
}
exports.main = main;
var TestComponent = (function () {
    function TestComponent() {
    }
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        selector: 'test-cmp',
        template: '<sd-about></sd-about>'
    })
], TestComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhYm91dC5jb21wb25lbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0Esc0NBQTBDO0FBQzFDLGlEQUFnRDtBQUdoRCxxREFBZ0Q7QUFDaEQscURBQW1EO0FBR25ELElBQU0sZ0JBQWdCLEdBQUc7SUFDdkIsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUM3QixZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLGFBQWEsQ0FBQztLQUM5QyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRjtJQUNFLFNBQUMsQ0FBQyxRQUFRLENBQUMsNEJBQTRCLEVBQUU7UUFFdkMsU0FBQyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXZCLFNBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNoQixTQUFDLENBQUMsS0FBSyxDQUFDO1lBQ04saUJBQU8sQ0FBQyxpQkFBaUIsRUFBRTtpQkFDeEIsSUFBSSxDQUFDO2dCQUNKLElBQUksT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNyRCxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3hCLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztnQkFFaEUsU0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVFLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQWpCRCxvQkFpQkM7QUFNRCxJQUFNLGFBQWE7SUFBbkI7SUFBc0IsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQUF2QixJQUF1QjtBQUFqQixhQUFhO0lBSmxCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsdUJBQXVCO0tBQ2xDLENBQUM7R0FDSSxhQUFhLENBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuXG4vLyBhcHBcbmltcG9ydCB7IHQgfSBmcm9tICcuLi8uLi9mcmFtZXdvcmtzL3Rlc3QvaW5kZXgnO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0LmNvbXBvbmVudCc7XG5cbi8vIHRlc3QgbW9kdWxlIGNvbmZpZ3VyYXRpb24gZm9yIGVhY2ggdGVzdFxuY29uc3QgdGVzdE1vZHVsZUNvbmZpZyA9ICgpID0+IHtcbiAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtBYm91dENvbXBvbmVudCwgVGVzdENvbXBvbmVudF1cbiAgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFpbigpIHtcbiAgdC5kZXNjcmliZSgnQENvbXBvbmVudDogQWJvdXRDb21wb25lbnQnLCAoKSA9PiB7XG5cbiAgICB0LmJlKHRlc3RNb2R1bGVDb25maWcpO1xuXG4gICAgdC5pdCgnc2hvdWxkIHdvcmsnLFxuICAgICAgdC5hc3luYygoKSA9PiB7XG4gICAgICAgIFRlc3RCZWQuY29tcGlsZUNvbXBvbmVudHMoKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoVGVzdENvbXBvbmVudCk7XG4gICAgICAgICAgICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIGxldCBhYm91dERPTUVsID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnQuY2hpbGRyZW5bMF0ubmF0aXZlRWxlbWVudDtcblxuICAgICAgICAgICAgdC5lKGFib3V0RE9NRWwucXVlcnlTZWxlY3RvckFsbCgnaDInKVswXS50ZXh0Q29udGVudCkudG9FcXVhbCgnRmVhdHVyZXMnKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pKTtcbiAgfSk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rlc3QtY21wJyxcbiAgdGVtcGxhdGU6ICc8c2QtYWJvdXQ+PC9zZC1hYm91dD4nXG59KVxuY2xhc3MgVGVzdENvbXBvbmVudCB7IH1cbiJdfQ==