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
    }),
    __metadata("design:paramtypes", [])
], TestComponent);
//# sourceMappingURL=lang-switcher.component.spec.js.map