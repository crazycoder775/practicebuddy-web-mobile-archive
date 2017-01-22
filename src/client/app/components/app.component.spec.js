"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var testing_2 = require("@angular/router/testing");
var store_1 = require("@ngrx/store");
var index_1 = require("../frameworks/test/index");
var index_2 = require("../frameworks/core/testing/index");
var index_3 = require("../frameworks/sample/index");
var multilingual_module_1 = require("../frameworks/i18n/multilingual.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var config = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent }
];
var testModuleConfig = function () {
    testing_1.TestBed.configureTestingModule({
        imports: [
            forms_1.FormsModule,
            multilingual_module_1.MultilingualModule,
            store_1.StoreModule.provideStore({}),
            testing_2.RouterTestingModule.withRoutes(config)
        ],
        declarations: [
            TestComponent, app_component_1.AppComponent,
            home_component_1.HomeComponent, about_component_1.AboutComponent,
            index_3.NavbarComponent, index_3.ToolbarComponent
        ],
        providers: [
            index_2.TEST_CORE_PROVIDERS(),
            index_2.TEST_HTTP_PROVIDERS(),
            index_3.NameListService
        ]
    });
};
function main() {
    index_1.t.describe('@Component: AppComponent', function () {
        index_1.t.be(testModuleConfig);
        index_1.t.it('should build without a problem', index_1.t.async(function () {
            testing_1.TestBed.compileComponents()
                .then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                index_1.t.e(fixture.nativeElement).toBeTruthy();
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
        template: '<sd-app></sd-app>'
    })
], TestComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLmNvbXBvbmVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxpREFBZ0Q7QUFDaEQsc0NBQTBDO0FBQzFDLHdDQUE2QztBQUU3QyxtREFBOEQ7QUFDOUQscUNBQTBDO0FBRTFDLGtEQUE2QztBQUM3QywwREFBNEY7QUFDNUYsb0RBQWdHO0FBQ2hHLDhFQUE0RTtBQUM1RSxpREFBK0M7QUFDL0Msd0RBQXNEO0FBQ3RELDJEQUF5RDtBQUV6RCxJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUM7SUFDcEMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO0NBQzNDLENBQUM7QUFHRixJQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDN0IsT0FBTyxFQUFFO1lBQ1AsbUJBQVc7WUFDWCx3Q0FBa0I7WUFDbEIsbUJBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQzVCLDZCQUFtQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7U0FDdkM7UUFDRCxZQUFZLEVBQUU7WUFDWixhQUFhLEVBQUUsNEJBQVk7WUFDM0IsOEJBQWEsRUFBRSxnQ0FBYztZQUM3Qix1QkFBZSxFQUFFLHdCQUFnQjtTQUNsQztRQUNELFNBQVMsRUFBRTtZQUNULDJCQUFtQixFQUFFO1lBQ3JCLDJCQUFtQixFQUFFO1lBQ3JCLHVCQUFlO1NBQ2hCO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUY7SUFDRSxTQUFDLENBQUMsUUFBUSxDQUFDLDBCQUEwQixFQUFFO1FBRXJDLFNBQUMsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUV2QixTQUFDLENBQUMsRUFBRSxDQUFDLGdDQUFnQyxFQUNuQyxTQUFDLENBQUMsS0FBSyxDQUFDO1lBQ04saUJBQU8sQ0FBQyxpQkFBaUIsRUFBRTtpQkFDeEIsSUFBSSxDQUFDO2dCQUNKLElBQUksT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNyRCxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3hCLFNBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQWZELG9CQWVDO0FBTUQsSUFBTSxhQUFhO0lBQW5CO0lBQXFCLENBQUM7SUFBRCxvQkFBQztBQUFELENBQUMsQUFBdEIsSUFBc0I7QUFBaEIsYUFBYTtJQUpsQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLG1CQUFtQjtLQUM5QixDQUFDO0dBQ0ksYUFBYSxDQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyVGVzdGluZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci90ZXN0aW5nJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyB0IH0gZnJvbSAnLi4vZnJhbWV3b3Jrcy90ZXN0L2luZGV4JztcbmltcG9ydCB7IFRFU1RfQ09SRV9QUk9WSURFUlMsIFRFU1RfSFRUUF9QUk9WSURFUlMgfSBmcm9tICcuLi9mcmFtZXdvcmtzL2NvcmUvdGVzdGluZy9pbmRleCc7XG5pbXBvcnQgeyBOYW1lTGlzdFNlcnZpY2UsIE5hdmJhckNvbXBvbmVudCwgVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4uL2ZyYW1ld29ya3Mvc2FtcGxlL2luZGV4JztcbmltcG9ydCB7IE11bHRpbGluZ3VhbE1vZHVsZSB9IGZyb20gJy4uL2ZyYW1ld29ya3MvaTE4bi9tdWx0aWxpbmd1YWwubW9kdWxlJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC9hYm91dC5jb21wb25lbnQnO1xuXG5jb25zdCBjb25maWc6Um91dGVbXSA9IFtcbiAge3BhdGg6ICcnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnR9LFxuICB7cGF0aDogJ2Fib3V0JywgY29tcG9uZW50OiBBYm91dENvbXBvbmVudH1cbl07XG5cbi8vIHRlc3QgbW9kdWxlIGNvbmZpZ3VyYXRpb24gZm9yIGVhY2ggdGVzdFxuY29uc3QgdGVzdE1vZHVsZUNvbmZpZyA9ICgpID0+IHtcbiAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICBGb3Jtc01vZHVsZSxcbiAgICAgIE11bHRpbGluZ3VhbE1vZHVsZSxcbiAgICAgIFN0b3JlTW9kdWxlLnByb3ZpZGVTdG9yZSh7fSksXG4gICAgICBSb3V0ZXJUZXN0aW5nTW9kdWxlLndpdGhSb3V0ZXMoY29uZmlnKVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICBUZXN0Q29tcG9uZW50LCBBcHBDb21wb25lbnQsXG4gICAgICBIb21lQ29tcG9uZW50LCBBYm91dENvbXBvbmVudCxcbiAgICAgIE5hdmJhckNvbXBvbmVudCwgVG9vbGJhckNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICBURVNUX0NPUkVfUFJPVklERVJTKCksXG4gICAgICBURVNUX0hUVFBfUFJPVklERVJTKCksXG4gICAgICBOYW1lTGlzdFNlcnZpY2VcbiAgICBdXG4gIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1haW4oKSB7XG4gIHQuZGVzY3JpYmUoJ0BDb21wb25lbnQ6IEFwcENvbXBvbmVudCcsICgpID0+IHtcblxuICAgIHQuYmUodGVzdE1vZHVsZUNvbmZpZyk7XG5cbiAgICB0Lml0KCdzaG91bGQgYnVpbGQgd2l0aG91dCBhIHByb2JsZW0nLFxuICAgICAgdC5hc3luYygoKSA9PiB7XG4gICAgICAgIFRlc3RCZWQuY29tcGlsZUNvbXBvbmVudHMoKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoVGVzdENvbXBvbmVudCk7XG4gICAgICAgICAgICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIHQuZShmaXh0dXJlLm5hdGl2ZUVsZW1lbnQpLnRvQmVUcnV0aHkoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pKTtcbiAgfSk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rlc3QtY21wJyxcbiAgdGVtcGxhdGU6ICc8c2QtYXBwPjwvc2QtYXBwPidcbn0pXG5jbGFzcyBUZXN0Q29tcG9uZW50IHt9XG4iXX0=