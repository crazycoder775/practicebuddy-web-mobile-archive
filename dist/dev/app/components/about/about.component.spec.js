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
    }),
    __metadata("design:paramtypes", [])
], TestComponent);
//# sourceMappingURL=about.component.spec.js.map