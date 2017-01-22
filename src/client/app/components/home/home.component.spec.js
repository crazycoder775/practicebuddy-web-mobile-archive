"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var http_1 = require("@angular/http");
var testing_3 = require("@angular/http/testing");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var index_1 = require("../../frameworks/test/index");
var index_2 = require("../../frameworks/sample/index");
var core_module_1 = require("../../frameworks/core/core.module");
var analytics_module_1 = require("../../frameworks/analytics/analytics.module");
var multilingual_module_1 = require("../../frameworks/i18n/multilingual.module");
var home_component_1 = require("./home.component");
var testModuleConfig = function () {
    testing_1.TestBed.configureTestingModule({
        imports: [
            core_module_1.CoreModule,
            testing_2.RouterTestingModule,
            analytics_module_1.AnalyticsModule,
            multilingual_module_1.MultilingualModule,
            store_1.StoreModule.provideStore({ sample: index_2.reducer }),
            effects_1.EffectsModule.run(index_2.NameListEffects)
        ],
        declarations: [home_component_1.HomeComponent, TestComponent],
        providers: [
            index_2.NameListService,
            http_1.BaseRequestOptions,
            testing_3.MockBackend,
            {
                provide: http_1.Http, useFactory: function (backend, defaultOptions) {
                    return new http_1.Http(backend, defaultOptions);
                },
                deps: [testing_3.MockBackend, http_1.BaseRequestOptions]
            }
        ]
    });
};
function main() {
    index_1.t.describe('@Component: HomeComponent', function () {
        index_1.t.be(testModuleConfig);
        index_1.t.it('should work', index_1.t.async(function () {
            testing_1.TestBed.compileComponents()
                .then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                var homeInstance = fixture.debugElement.children[0].componentInstance;
                var homeDOMEl = fixture.debugElement.children[0].nativeElement;
                index_1.t.e(homeDOMEl.querySelectorAll('li').length).toEqual(0);
                homeInstance.newName = 'Minko';
                homeInstance.addName();
                fixture.detectChanges();
                index_1.t.e(homeDOMEl.querySelectorAll('li').length).toEqual(1);
                index_1.t.e(homeDOMEl.querySelectorAll('li')[0].textContent).toEqual('Minko');
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
        template: '<sd-home></sd-home>'
    })
], TestComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLHNDQUEwQztBQUMxQyxpREFBZ0Q7QUFDaEQsbURBQThEO0FBQzlELHNDQUl1QjtBQUN2QixpREFBb0Q7QUFHcEQscUNBQTBDO0FBQzFDLHlDQUE4QztBQUU5QyxxREFBZ0Q7QUFDaEQsdURBQTBGO0FBQzFGLGlFQUErRDtBQUMvRCxnRkFBOEU7QUFDOUUsaUZBQStFO0FBQy9FLG1EQUFpRDtBQUdqRCxJQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDN0IsT0FBTyxFQUFFO1lBQ1Asd0JBQVU7WUFDViw2QkFBbUI7WUFDbkIsa0NBQWU7WUFDZix3Q0FBa0I7WUFDbEIsbUJBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxNQUFNLEVBQUUsZUFBTyxFQUFFLENBQUM7WUFDN0MsdUJBQWEsQ0FBQyxHQUFHLENBQUMsdUJBQWUsQ0FBQztTQUNuQztRQUNELFlBQVksRUFBRSxDQUFDLDhCQUFhLEVBQUUsYUFBYSxDQUFDO1FBQzVDLFNBQVMsRUFBRTtZQUNULHVCQUFlO1lBQ2YseUJBQWtCO1lBQ2xCLHFCQUFXO1lBQ1g7Z0JBQ0UsT0FBTyxFQUFFLFdBQUksRUFBRSxVQUFVLEVBQUUsVUFBVSxPQUEwQixFQUFFLGNBQWtDO29CQUNqRyxNQUFNLENBQUMsSUFBSSxXQUFJLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUNELElBQUksRUFBRSxDQUFDLHFCQUFXLEVBQUUseUJBQWtCLENBQUM7YUFDeEM7U0FDRjtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGO0lBQ0UsU0FBQyxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsRUFBRTtRQUV0QyxTQUFDLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFdkIsU0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ2hCLFNBQUMsQ0FBQyxLQUFLLENBQUM7WUFDTixpQkFBTyxDQUFDLGlCQUFpQixFQUFFO2lCQUN4QixJQUFJLENBQUM7Z0JBQ0osSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3JELE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFFeEIsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3RFLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztnQkFFL0QsU0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV4RCxZQUFZLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDL0IsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUV2QixPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBRXhCLFNBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEQsU0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hFLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQTNCRCxvQkEyQkM7QUFNRCxJQUFNLGFBQWE7SUFBbkI7SUFFQSxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZLLGFBQWE7SUFKbEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxxQkFBcUI7S0FDaEMsQ0FBQztHQUNJLGFBQWEsQ0FFbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgUm91dGVyVGVzdGluZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci90ZXN0aW5nJztcbmltcG9ydCB7XG4gIEJhc2VSZXF1ZXN0T3B0aW9ucyxcbiAgQ29ubmVjdGlvbkJhY2tlbmQsXG4gIEh0dHBcbn0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBNb2NrQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAvdGVzdGluZyc7XG5cbi8vIGxpYnNcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyB0IH0gZnJvbSAnLi4vLi4vZnJhbWV3b3Jrcy90ZXN0L2luZGV4JztcbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSwgTmFtZUxpc3RFZmZlY3RzLCByZWR1Y2VyIH0gZnJvbSAnLi4vLi4vZnJhbWV3b3Jrcy9zYW1wbGUvaW5kZXgnO1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4uLy4uL2ZyYW1ld29ya3MvY29yZS9jb3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBBbmFseXRpY3NNb2R1bGUgfSBmcm9tICcuLi8uLi9mcmFtZXdvcmtzL2FuYWx5dGljcy9hbmFseXRpY3MubW9kdWxlJztcbmltcG9ydCB7IE11bHRpbGluZ3VhbE1vZHVsZSB9IGZyb20gJy4uLy4uL2ZyYW1ld29ya3MvaTE4bi9tdWx0aWxpbmd1YWwubW9kdWxlJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcblxuLy8gdGVzdCBtb2R1bGUgY29uZmlndXJhdGlvbiBmb3IgZWFjaCB0ZXN0XG5jb25zdCB0ZXN0TW9kdWxlQ29uZmlnID0gKCkgPT4ge1xuICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgIENvcmVNb2R1bGUsXG4gICAgICBSb3V0ZXJUZXN0aW5nTW9kdWxlLFxuICAgICAgQW5hbHl0aWNzTW9kdWxlLFxuICAgICAgTXVsdGlsaW5ndWFsTW9kdWxlLFxuICAgICAgU3RvcmVNb2R1bGUucHJvdmlkZVN0b3JlKHsgc2FtcGxlOiByZWR1Y2VyIH0pLFxuICAgICAgRWZmZWN0c01vZHVsZS5ydW4oTmFtZUxpc3RFZmZlY3RzKVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbSG9tZUNvbXBvbmVudCwgVGVzdENvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICBOYW1lTGlzdFNlcnZpY2UsXG4gICAgICBCYXNlUmVxdWVzdE9wdGlvbnMsXG4gICAgICBNb2NrQmFja2VuZCxcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogSHR0cCwgdXNlRmFjdG9yeTogZnVuY3Rpb24gKGJhY2tlbmQ6IENvbm5lY3Rpb25CYWNrZW5kLCBkZWZhdWx0T3B0aW9uczogQmFzZVJlcXVlc3RPcHRpb25zKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBIdHRwKGJhY2tlbmQsIGRlZmF1bHRPcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVwczogW01vY2tCYWNrZW5kLCBCYXNlUmVxdWVzdE9wdGlvbnNdXG4gICAgICB9XG4gICAgXVxuICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWluKCkge1xuICB0LmRlc2NyaWJlKCdAQ29tcG9uZW50OiBIb21lQ29tcG9uZW50JywgKCkgPT4ge1xuXG4gICAgdC5iZSh0ZXN0TW9kdWxlQ29uZmlnKTtcblxuICAgIHQuaXQoJ3Nob3VsZCB3b3JrJyxcbiAgICAgIHQuYXN5bmMoKCkgPT4ge1xuICAgICAgICBUZXN0QmVkLmNvbXBpbGVDb21wb25lbnRzKClcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KFRlc3RDb21wb25lbnQpO1xuICAgICAgICAgICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICAgIGxldCBob21lSW5zdGFuY2UgPSBmaXh0dXJlLmRlYnVnRWxlbWVudC5jaGlsZHJlblswXS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgICAgICAgIGxldCBob21lRE9NRWwgPSBmaXh0dXJlLmRlYnVnRWxlbWVudC5jaGlsZHJlblswXS5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgICAgICB0LmUoaG9tZURPTUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykubGVuZ3RoKS50b0VxdWFsKDApO1xuXG4gICAgICAgICAgICBob21lSW5zdGFuY2UubmV3TmFtZSA9ICdNaW5rbyc7XG4gICAgICAgICAgICBob21lSW5zdGFuY2UuYWRkTmFtZSgpO1xuXG4gICAgICAgICAgICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAgICAgdC5lKGhvbWVET01FbC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpLmxlbmd0aCkudG9FcXVhbCgxKTtcbiAgICAgICAgICAgIHQuZShob21lRE9NRWwucXVlcnlTZWxlY3RvckFsbCgnbGknKVswXS50ZXh0Q29udGVudCkudG9FcXVhbCgnTWlua28nKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pKTtcbiAgfSk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rlc3QtY21wJyxcbiAgdGVtcGxhdGU6ICc8c2QtaG9tZT48L3NkLWhvbWU+J1xufSlcbmNsYXNzIFRlc3RDb21wb25lbnQge1xuXG59XG4iXX0=