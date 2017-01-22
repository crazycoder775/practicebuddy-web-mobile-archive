"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var testing_2 = require("@angular/router/testing");
var store_1 = require("@ngrx/store");
var index_1 = require("../../test/index");
var index_2 = require("../../core/index");
var core_module_1 = require("../../core/core.module");
var analytics_module_1 = require("../../analytics/analytics.module");
var multilingual_module_1 = require("../multilingual.module");
var index_3 = require("../index");
var index_4 = require("../testing/index");
var SUPPORTED_LANGUAGES = [
    { code: 'en', title: 'English' },
    { code: 'es', title: 'Spanish' },
    { code: 'fr', title: 'French' },
    { code: 'ru', title: 'Russian' },
    { code: 'bg', title: 'Bulgarian' }
];
var testModuleConfig = function () {
    testing_1.TestBed.configureTestingModule({
        imports: [
            core_module_1.CoreModule.forRoot([
                { provide: index_2.WindowService, useValue: window },
                { provide: index_2.ConsoleService, useValue: console }
            ]),
            testing_2.RouterTestingModule,
            analytics_module_1.AnalyticsModule,
            multilingual_module_1.MultilingualModule,
            store_1.StoreModule.provideStore({ i18n: index_3.reducer })
        ],
        declarations: [TestComponent]
    });
};
function main() {
    index_1.t.describe('i18n:', function () {
        index_1.t.describe('@Component: LangSwitcherComponent', function () {
            index_1.t.be(testModuleConfig);
            index_1.t.it('should work', index_1.t.async(function () {
                testing_1.TestBed.compileComponents()
                    .then(function () {
                    var fixture = testing_1.TestBed.createComponent(TestComponent);
                    fixture.detectChanges();
                    var appDOMEl = fixture.debugElement.children[0].nativeElement;
                    index_1.t.e(appDOMEl.querySelectorAll('form > select option').length).toBe(1);
                    index_1.t.e(appDOMEl.querySelectorAll('form > select option')[0].value).toBe('en');
                });
            }));
        });
        index_1.t.describe('@Component: LangSwitcherComponent with multiple languages', function () {
            index_1.t.be(function () {
                index_3.MultilingualService.SUPPORTED_LANGUAGES = SUPPORTED_LANGUAGES;
                testModuleConfig();
            });
            index_1.t.ae(function () { return index_4.TEST_MULTILINGUAL_RESET(); });
            index_1.t.it('should work', index_1.t.async(function () {
                testing_1.TestBed.compileComponents()
                    .then(function () {
                    var fixture = testing_1.TestBed.createComponent(TestComponent);
                    fixture.detectChanges();
                    var appDOMEl = fixture.debugElement.children[0].nativeElement;
                    index_1.t.e(appDOMEl.querySelectorAll('form > select option').length).toBe(5);
                    index_1.t.e(appDOMEl.querySelectorAll('form > select option')[0].value).toBe('en');
                    index_1.t.e(appDOMEl.querySelectorAll('form > select option')[1].value).toBe('es');
                    index_1.t.e(appDOMEl.querySelectorAll('form > select option')[2].value).toBe('fr');
                    index_1.t.e(appDOMEl.querySelectorAll('form > select option')[3].value).toBe('ru');
                    index_1.t.e(appDOMEl.querySelectorAll('form > select option')[4].value).toBe('bg');
                });
            }));
        });
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
        template: '<lang-switcher></lang-switcher>'
    })
], TestComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZy1zd2l0Y2hlci5jb21wb25lbnQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxhbmctc3dpdGNoZXIuY29tcG9uZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGlEQUFnRDtBQUNoRCxzQ0FBMEM7QUFDMUMsbURBQThEO0FBRzlELHFDQUEwQztBQUUxQywwQ0FBcUM7QUFDckMsMENBQXdFO0FBQ3hFLHNEQUFvRDtBQUNwRCxxRUFBbUU7QUFDbkUsOERBQTREO0FBQzVELGtDQUF3RDtBQUN4RCwwQ0FBMkQ7QUFFM0QsSUFBTSxtQkFBbUIsR0FBaUI7SUFDeEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDaEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDaEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7SUFDL0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDaEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7Q0FDbkMsQ0FBQztBQUdGLElBQU0sZ0JBQWdCLEdBQUc7SUFDdkIsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUM3QixPQUFPLEVBQUU7WUFDUCx3QkFBVSxDQUFDLE9BQU8sQ0FBQztnQkFDakIsRUFBRSxPQUFPLEVBQUUscUJBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUM1QyxFQUFFLE9BQU8sRUFBRSxzQkFBYyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7YUFDL0MsQ0FBQztZQUNGLDZCQUFtQjtZQUNuQixrQ0FBZTtZQUNmLHdDQUFrQjtZQUNsQixtQkFBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxlQUFPLEVBQUUsQ0FBQztTQUM1QztRQUNELFlBQVksRUFB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Q0FBQyxDQUFDO29CQUMzRSxTQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0UsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUE1Q0Qsb0JBNENDO0FBTUQsSUFBTSxhQUFhO0lBQW5CO0lBQXFCLENBQUM7SUFBRCxvQkFBQztBQUFELENBQUMsQUFBdEIsSUFBc0I7QUFBaEIsYUFBYTtJQUpsQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLGlDQUFpQztLQUM1QyxDQUFDO0dBQ0ksYUFBYSxDQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlclRlc3RpbmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvdGVzdGluZyc7XG5cbi8vIGxpYnNcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyB0IH0gZnJvbSAnLi4vLi4vdGVzdC9pbmRleCc7XG5pbXBvcnQgeyBJTGFuZywgV2luZG93U2VydmljZSwgQ29uc29sZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICcuLi8uLi9jb3JlL2NvcmUubW9kdWxlJztcbmltcG9ydCB7IEFuYWx5dGljc01vZHVsZSB9IGZyb20gJy4uLy4uL2FuYWx5dGljcy9hbmFseXRpY3MubW9kdWxlJztcbmltcG9ydCB7IE11bHRpbGluZ3VhbE1vZHVsZSB9IGZyb20gJy4uL211bHRpbGluZ3VhbC5tb2R1bGUnO1xuaW1wb3J0IHsgTXVsdGlsaW5ndWFsU2VydmljZSwgcmVkdWNlciB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7IFRFU1RfTVVMVElMSU5HVUFMX1JFU0VUIH0gZnJvbSAnLi4vdGVzdGluZy9pbmRleCc7XG5cbmNvbnN0IFNVUFBPUlRFRF9MQU5HVUFHRVM6IEFycmF5PElMYW5nPiA9IFtcbiAgeyBjb2RlOiAnZW4nLCB0aXRsZTogJ0VuZ2xpc2gnIH0sXG4gIHsgY29kZTogJ2VzJywgdGl0bGU6ICdTcGFuaXNoJyB9LFxuICB7IGNvZGU6ICdmcicsIHRpdGxlOiAnRnJlbmNoJyB9LFxuICB7IGNvZGU6ICdydScsIHRpdGxlOiAnUnVzc2lhbicgfSxcbiAgeyBjb2RlOiAnYmcnLCB0aXRsZTogJ0J1bGdhcmlhbicgfVxuXTtcblxuLy8gdGVzdCBtb2R1bGUgY29uZmlndXJhdGlvbiBmb3IgZWFjaCB0ZXN0XG5jb25zdCB0ZXN0TW9kdWxlQ29uZmlnID0gKCkgPT4ge1xuICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgIENvcmVNb2R1bGUuZm9yUm9vdChbXG4gICAgICAgIHsgcHJvdmlkZTogV2luZG93U2VydmljZSwgdXNlVmFsdWU6IHdpbmRvdyB9LFxuICAgICAgICB7IHByb3ZpZGU6IENvbnNvbGVTZXJ2aWNlLCB1c2VWYWx1ZTogY29uc29sZSB9XG4gICAgICBdKSxcbiAgICAgIFJvdXRlclRlc3RpbmdNb2R1bGUsXG4gICAgICBBbmFseXRpY3NNb2R1bGUsXG4gICAgICBNdWx0aWxpbmd1YWxNb2R1bGUsXG4gICAgICBTdG9yZU1vZHVsZS5wcm92aWRlU3RvcmUoeyBpMThuOiByZWR1Y2VyIH0pXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtUZXN0Q29tcG9uZW50XVxuICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWluKCkge1xuICB0LmRlc2NyaWJlKCdpMThuOicsICgpID0+IHtcbiAgICB0LmRlc2NyaWJlKCdAQ29tcG9uZW50OiBMYW5nU3dpdGNoZXJDb21wb25lbnQnLCAoKSA9PiB7XG4gICAgICB0LmJlKHRlc3RNb2R1bGVDb25maWcpO1xuXG4gICAgICB0Lml0KCdzaG91bGQgd29yaycsXG4gICAgICAgIHQuYXN5bmMoKCkgPT4ge1xuICAgICAgICAgIFRlc3RCZWQuY29tcGlsZUNvbXBvbmVudHMoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KFRlc3RDb21wb25lbnQpO1xuICAgICAgICAgICAgICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgICAgbGV0IGFwcERPTUVsID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnQuY2hpbGRyZW5bMF0ubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgICAgdC5lKGFwcERPTUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0gPiBzZWxlY3Qgb3B0aW9uJykubGVuZ3RoKS50b0JlKDEpO1xuICAgICAgICAgICAgICB0LmUoYXBwRE9NRWwucXVlcnlTZWxlY3RvckFsbCgnZm9ybSA+IHNlbGVjdCBvcHRpb24nKVswXS52YWx1ZSkudG9CZSgnZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICB0LmRlc2NyaWJlKCdAQ29tcG9uZW50OiBMYW5nU3dpdGNoZXJDb21wb25lbnQgd2l0aCBtdWx0aXBsZSBsYW5ndWFnZXMnLCAoKSA9PiB7XG4gICAgICB0LmJlKCgpID0+IHtcbiAgICAgICAgTXVsdGlsaW5ndWFsU2VydmljZS5TVVBQT1JURURfTEFOR1VBR0VTID0gU1VQUE9SVEVEX0xBTkdVQUdFUztcbiAgICAgICAgdGVzdE1vZHVsZUNvbmZpZygpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGVuc3VyZSBzdGF0aWNzIGFyZSByZXNldCB3aGVuIHRoZSB0ZXN0IGhhZCBtb2RpZmllZCBzdGF0aWNzIGluIGEgYmVmb3JlRWFjaCAoYmUpIG9yIGJlZm9yZUVhY2hQcm92aWRlciAoYmVwKVxuICAgICAgdC5hZSgoKSA9PiBURVNUX01VTFRJTElOR1VBTF9SRVNFVCgpKTtcblxuICAgICAgdC5pdCgnc2hvdWxkIHdvcmsnLFxuICAgICAgICB0LmFzeW5jKCgpID0+IHtcbiAgICAgICAgICBUZXN0QmVkLmNvbXBpbGVDb21wb25lbnRzKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChUZXN0Q29tcG9uZW50KTtcbiAgICAgICAgICAgICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICAgIGxldCBhcHBET01FbCA9IGZpeHR1cmUuZGVidWdFbGVtZW50LmNoaWxkcmVuWzBdLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICAgIHQuZShhcHBET01FbC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtID4gc2VsZWN0IG9wdGlvbicpLmxlbmd0aCkudG9CZSg1KTtcbiAgICAgICAgICAgICAgdC5lKGFwcERPTUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0gPiBzZWxlY3Qgb3B0aW9uJylbMF0udmFsdWUpLnRvQmUoJ2VuJyk7XG4gICAgICAgICAgICAgIHQuZShhcHBET01FbC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtID4gc2VsZWN0IG9wdGlvbicpWzFdLnZhbHVlKS50b0JlKCdlcycpO1xuICAgICAgICAgICAgICB0LmUoYXBwRE9NRWwucXVlcnlTZWxlY3RvckFsbCgnZm9ybSA+IHNlbGVjdCBvcHRpb24nKVsyXS52YWx1ZSkudG9CZSgnZnInKTtcbiAgICAgICAgICAgICAgdC5lKGFwcERPTUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0gPiBzZWxlY3Qgb3B0aW9uJylbM10udmFsdWUpLnRvQmUoJ3J1Jyk7XG4gICAgICAgICAgICAgIHQuZShhcHBET01FbC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtID4gc2VsZWN0IG9wdGlvbicpWzRdLnZhbHVlKS50b0JlKCdiZycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rlc3QtY21wJyxcbiAgdGVtcGxhdGU6ICc8bGFuZy1zd2l0Y2hlcj48L2xhbmctc3dpdGNoZXI+J1xufSlcbmNsYXNzIFRlc3RDb21wb25lbnQge31cbiJdfQ==