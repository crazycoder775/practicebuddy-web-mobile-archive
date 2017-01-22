"use strict";
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var index_1 = require("../../test/index");
var core_module_1 = require("../../core/core.module");
var index_2 = require("../../core/index");
var index_3 = require("../../core/testing/index");
var index_4 = require("../testing/index");
var index_5 = require("../index");
var testModuleConfig = function (options) {
    testing_1.TestBed.configureTestingModule({
        imports: [
            core_module_1.CoreModule.forRoot([
                { provide: index_2.WindowService, useValue: window },
                { provide: index_2.ConsoleService, useValue: console }
            ]),
            store_1.StoreModule.provideStore({ i18n: index_5.reducer }),
            effects_1.EffectsModule.run(index_5.MultilingualEffects),
            testing_2.RouterTestingModule
        ],
        providers: [
            index_3.TEST_CORE_PROVIDERS(options),
            index_4.TEST_MULTILINGUAL_PROVIDERS()
        ]
    });
};
function main() {
    index_1.t.describe('i18n:', function () {
        index_1.t.describe('MultilingualService', function () {
            index_1.t.be(function () {
                testModuleConfig();
            });
            index_1.t.it('should at a minimum support english', function () {
                index_1.t.e(index_5.MultilingualService.SUPPORTED_LANGUAGES.length).toBe(1);
                index_1.t.e(index_5.MultilingualService.SUPPORTED_LANGUAGES[0].code).toBe('en');
            });
            index_1.t.it('changeLang - should not switch unless supported', index_1.t.inject([index_5.MultilingualService, store_1.Store], function (multilang, store) {
                store.dispatch(new index_5.ChangeAction('fr'));
                store.select('i18n').subscribe(function (i18n) {
                    index_1.t.e(i18n.lang).toBe('en');
                });
            }));
        });
        index_1.t.describe('MultilingualService for French browser/platform', function () {
            var SUPPORTED_LANGUAGES = [
                { code: 'en', title: 'English' },
                { code: 'fr', title: 'French' }
            ];
            index_1.t.be(function () {
                index_5.MultilingualService.SUPPORTED_LANGUAGES = SUPPORTED_LANGUAGES;
                testModuleConfig({ window: index_3.WindowMockFrench });
            });
            index_1.t.ae(function () { return index_4.TEST_MULTILINGUAL_RESET(); });
            index_1.t.it('should now support french by default', index_1.t.inject([index_5.MultilingualService, store_1.Store, index_2.WindowService], function (multilang, store, win) {
                index_1.t.e(index_5.MultilingualService.SUPPORTED_LANGUAGES.length).toBe(2);
                index_1.t.e(index_5.MultilingualService.SUPPORTED_LANGUAGES[0].code).toBe('en');
                index_1.t.e(index_5.MultilingualService.SUPPORTED_LANGUAGES[1].code).toBe('fr');
                index_1.t.e(win.navigator.language).toBe('fr-US');
                store.select('i18n').subscribe(function (i18n) {
                    index_1.t.e(i18n.lang).toBe('fr');
                });
            }));
        });
    });
}
exports.main = main;
//# sourceMappingURL=multilingual.service.spec.js.map