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
    }),
    __metadata("design:paramtypes", [])
], TestComponent);
//# sourceMappingURL=home.component.spec.js.map