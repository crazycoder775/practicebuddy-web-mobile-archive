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
    }),
    __metadata("design:paramtypes", [])
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
//# sourceMappingURL=platform.directive.spec.js.map