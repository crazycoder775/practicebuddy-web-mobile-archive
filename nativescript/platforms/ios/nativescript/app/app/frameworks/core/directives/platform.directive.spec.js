"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var index_1 = require("../../test/index");
var platform_directive_1 = require("./platform.directive");
var index_2 = require("../../core/index");
var index_3 = require("../../core/testing/index");
var testModuleConfig = function () {
    testing_1.TestBed.configureTestingModule({
        declarations: [platform_directive_1.PlatformDirective, TestComponent]
    });
};
var TestComponent = (function () {
    function TestComponent() {
    }
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        viewProviders: [
            { provide: index_2.WindowService, useClass: index_3.WindowMock }
        ],
        selector: 'test-cmp',
        template: "<div platform></div>"
    })
], TestComponent);
function main() {
    index_1.t.describe('core: PlatformDirective', function () {
        index_1.t.be(testModuleConfig);
        index_1.t.it('should add platform class', index_1.t.async(function () {
            testing_1.TestBed.compileComponents()
                .then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                var compDOMEl = fixture.debugElement.children[0].nativeElement;
                index_1.t.e(compDOMEl.getAttribute('class')).toBe('web');
            });
        }));
    });
}
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uZGlyZWN0aXZlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF0Zm9ybS5kaXJlY3RpdmUuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsaURBQWdEO0FBQ2hELHNDQUEwQztBQUcxQywwQ0FBcUM7QUFHckMsMkRBQXlEO0FBQ3pELDBDQUFpRDtBQUNqRCxrREFBc0Q7QUFFdEQsSUFBTSxnQkFBZ0IsR0FBRztJQUN2QixpQkFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQzdCLFlBQVksRUFBRSxDQUFDLHNDQUFpQixFQUFFLGFBQWEsQ0FBQztLQUNqRCxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFTRixJQUFNLGFBQWE7SUFBbkI7SUFBc0IsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQUF2QixJQUF1QjtBQUFqQixhQUFhO0lBUGxCLGdCQUFTLENBQUM7UUFDVCxhQUFhLEVBQUU7WUFDYixFQUFFLE9BQU8sRUFBRSxxQkFBYSxFQUFFLFFBQVEsRUFBRSxrQkFBVSxFQUFFO1NBQ2pEO1FBQ0QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLHNCQUFzQjtLQUNqQyxDQUFDO0dBQ0ksYUFBYSxDQUFJO0FBRXZCO0lBQ0UsU0FBQyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsRUFBRTtRQUVwQyxTQUFDLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFdkIsU0FBQyxDQUFDLEVBQUUsQ0FBQywyQkFBMkIsRUFDOUIsU0FBQyxDQUFDLEtBQUssQ0FBQztZQUNOLGlCQUFPLENBQUMsaUJBQWlCLEVBQUU7aUJBQ3hCLElBQUksQ0FBQztnQkFDSixJQUFJLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDckQsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN4QixJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7Z0JBQy9ELFNBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuRCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFoQkQsb0JBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gYXBwXG5pbXBvcnQgeyB0IH0gZnJvbSAnLi4vLi4vdGVzdC9pbmRleCc7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgUGxhdGZvcm1EaXJlY3RpdmUgfSBmcm9tICcuL3BsYXRmb3JtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XG5pbXBvcnQgeyBXaW5kb3dNb2NrIH0gZnJvbSAnLi4vLi4vY29yZS90ZXN0aW5nL2luZGV4JztcblxuY29uc3QgdGVzdE1vZHVsZUNvbmZpZyA9ICgpID0+IHtcbiAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtQbGF0Zm9ybURpcmVjdGl2ZSwgVGVzdENvbXBvbmVudF1cbiAgfSk7XG59O1xuXG5AQ29tcG9uZW50KHtcbiAgdmlld1Byb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogV2luZG93U2VydmljZSwgdXNlQ2xhc3M6IFdpbmRvd01vY2sgfVxuICBdLFxuICBzZWxlY3RvcjogJ3Rlc3QtY21wJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IHBsYXRmb3JtPjwvZGl2PmBcbn0pXG5jbGFzcyBUZXN0Q29tcG9uZW50IHsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbWFpbigpIHtcbiAgdC5kZXNjcmliZSgnY29yZTogUGxhdGZvcm1EaXJlY3RpdmUnLCAoKSA9PiB7XG5cbiAgICB0LmJlKHRlc3RNb2R1bGVDb25maWcpO1xuXG4gICAgdC5pdCgnc2hvdWxkIGFkZCBwbGF0Zm9ybSBjbGFzcycsXG4gICAgICB0LmFzeW5jKCgpID0+IHtcbiAgICAgICAgVGVzdEJlZC5jb21waWxlQ29tcG9uZW50cygpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChUZXN0Q29tcG9uZW50KTtcbiAgICAgICAgICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgbGV0IGNvbXBET01FbCA9IGZpeHR1cmUuZGVidWdFbGVtZW50LmNoaWxkcmVuWzBdLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB0LmUoY29tcERPTUVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkudG9CZSgnd2ViJyk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KSk7XG4gIH0pO1xufVxuIl19