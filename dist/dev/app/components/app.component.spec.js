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
    }),
    __metadata("design:paramtypes", [])
], TestComponent);
//# sourceMappingURL=app.component.spec.js.map