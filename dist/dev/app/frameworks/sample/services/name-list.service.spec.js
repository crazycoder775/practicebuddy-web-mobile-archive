"use strict";
var testing_1 = require("@angular/core/testing");
var forms_1 = require("@angular/forms");
var testing_2 = require("@angular/router/testing");
var http_1 = require("@angular/http");
var testing_3 = require("@angular/http/testing");
var store_1 = require("@ngrx/store");
var testing_4 = require("@ngrx/effects/testing");
var index_1 = require("../../test/index");
var analytics_module_1 = require("../../analytics/analytics.module");
var index_2 = require("../index");
var testModuleConfig = function () {
    testing_1.TestBed.configureTestingModule({
        imports: [
            forms_1.FormsModule, analytics_module_1.AnalyticsModule,
            store_1.StoreModule.provideStore({ sample: index_2.reducer }),
            testing_4.EffectsTestingModule,
            http_1.HttpModule, testing_2.RouterTestingModule
        ],
        providers: [
            index_2.NameListService,
            index_2.NameListEffects,
            { provide: http_1.XHRBackend, useClass: testing_3.MockBackend }
        ]
    });
};
var mockBackendResponse = function (connection, response) {
    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: response })));
};
function main() {
    index_1.t.describe('app: NameListService', function () {
        var injector;
        var backend;
        var nameList;
        var store;
        var runner;
        var nameListEffects;
        var connection;
        index_1.t.be(function () {
            testModuleConfig();
            injector = testing_1.getTestBed();
            backend = injector.get(http_1.XHRBackend);
            store = injector.get(store_1.Store);
            runner = injector.get(testing_4.EffectsRunner);
            nameListEffects = injector.get(index_2.NameListEffects);
            backend.connections.subscribe(function (c) { return connection = c; });
            nameList = injector.get(index_2.NameListService);
        });
        index_1.t.it('should initialize', function () {
            runner.queue(new index_2.InitAction());
            nameListEffects.init$.subscribe(function (result) {
                index_1.t.e(result).toEqual(new index_2.InitializedAction(['Dijkstra', 'Hopper']));
            });
            mockBackendResponse(connection, '["Dijkstra", "Hopper"]');
        });
        index_1.t.it('add action', function () {
            runner.queue(new index_2.AddAction('Minko'));
            nameListEffects.add$.subscribe(function (result) {
                index_1.t.e(result).toEqual(new index_2.NameAddedAction('Minko'));
            });
        });
    });
}
exports.main = main;
//# sourceMappingURL=name-list.service.spec.js.map