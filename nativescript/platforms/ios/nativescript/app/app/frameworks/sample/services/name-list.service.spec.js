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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS1saXN0LnNlcnZpY2Uuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hbWUtbGlzdC5zZXJ2aWNlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlEQUE0RDtBQUU1RCx3Q0FBNkM7QUFDN0MsbURBQThEO0FBQzlELHNDQUFrRjtBQUNsRixpREFBb0U7QUFHcEUscUNBQWlEO0FBQ2pELGlEQUE0RTtBQUc1RSwwQ0FBcUM7QUFFckMscUVBQW1FO0FBQ25FLGtDQUFnSTtBQUdoSSxJQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDN0IsT0FBTyxFQUFFO1lBQ1AsbUJBQVcsRUFBRSxrQ0FBZTtZQUM1QixtQkFBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLE1BQU0sRUFBRSxlQUFPLEVBQUUsQ0FBQztZQUM3Qyw4QkFBb0I7WUFDcEIsaUJBQVUsRUFBRSw2QkFBbUI7U0FDaEM7UUFDRCxTQUFTLEVBQUU7WUFDVCx1QkFBZTtZQUNmLHVCQUFlO1lBQ2YsRUFBQyxPQUFPLEVBQUUsaUJBQVUsRUFBRSxRQUFRLEVBQUUscUJBQVcsRUFBQztTQUM3QztLQUNGLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLElBQU0sbUJBQW1CLEdBQUcsVUFBQyxVQUEwQixFQUFFLFFBQWdCO0lBQ3ZFLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxlQUFRLENBQUMsSUFBSSxzQkFBZSxDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlFLENBQUMsQ0FBQztBQUVGO0lBQ0UsU0FBQyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRTtRQUNqQyxJQUFJLFFBQWtCLENBQUM7UUFDdkIsSUFBSSxPQUFvQixDQUFDO1FBQ3pCLElBQUksUUFBeUIsQ0FBQztRQUM5QixJQUFJLEtBQWlCLENBQUM7UUFDdEIsSUFBSSxNQUFxQixDQUFDO1FBQzFCLElBQUksZUFBZ0MsQ0FBQztRQUNyQyxJQUFJLFVBQTBCLENBQUM7UUFFL0IsU0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNILGdCQUFnQixFQUFFLENBQUM7WUFDbkIsUUFBUSxHQUFHLG9CQUFVLEVBQUUsQ0FBQztZQUN4QixPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBVSxDQUFDLENBQUM7WUFDbkMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBSyxDQUFDLENBQUM7WUFDNUIsTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsdUJBQWEsQ0FBQyxDQUFDO1lBQ3JDLGVBQWUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLHVCQUFlLENBQUMsQ0FBQztZQUVoRCxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQWlCLElBQUssT0FBQSxVQUFVLEdBQUcsQ0FBQyxFQUFkLENBQWMsQ0FBQyxDQUFDO1lBRXJFLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLHVCQUFlLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUVILFNBQUMsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUU7WUFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLGtCQUFVLEVBQUUsQ0FBQyxDQUFDO1lBRS9CLGVBQWUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtnQkFDcEMsU0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSx5QkFBaUIsQ0FBQyxDQUFFLFVBQVUsRUFBRSxRQUFRLENBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkUsQ0FBQyxDQUFDLENBQUM7WUFHSCxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQztRQUVILFNBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxpQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFFckMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO2dCQUNuQyxTQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLHVCQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBMUNELG9CQTBDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3RCZWQsIGdldFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyVGVzdGluZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci90ZXN0aW5nJztcbmltcG9ydCB7IFJlc3BvbnNlT3B0aW9ucywgUmVzcG9uc2UsIFhIUkJhY2tlbmQsIEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE1vY2tCYWNrZW5kLCBNb2NrQ29ubmVjdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAvdGVzdGluZyc7XG5cbi8vIGxpYnNcbmltcG9ydCB7IFN0b3JlLCBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdHNUZXN0aW5nTW9kdWxlLCBFZmZlY3RzUnVubmVyIH0gZnJvbSAnQG5ncngvZWZmZWN0cy90ZXN0aW5nJztcblxuLy8gYXBwXG5pbXBvcnQgeyB0IH0gZnJvbSAnLi4vLi4vdGVzdC9pbmRleCc7XG4vLyBpbXBvcnQge1RFU1RfQ09SRV9QUk9WSURFUlMsIEdFVF9IVFRQX1BST1ZJREVSU19JTkpFQ1RPUiwgVEVTVF9MT0NBVElPTl9QUk9WSURFUlN9IGZyb20gJy4uLy4uL2NvcmUvdGVzdGluZy9pbmRleCc7XG5pbXBvcnQgeyBBbmFseXRpY3NNb2R1bGUgfSBmcm9tICcuLi8uLi9hbmFseXRpY3MvYW5hbHl0aWNzLm1vZHVsZSc7XG5pbXBvcnQgeyBOYW1lTGlzdFNlcnZpY2UsIE5hbWVMaXN0RWZmZWN0cywgcmVkdWNlciwgSW5pdEFjdGlvbiwgSW5pdGlhbGl6ZWRBY3Rpb24sIEFkZEFjdGlvbiwgTmFtZUFkZGVkQWN0aW9uIH0gZnJvbSAnLi4vaW5kZXgnO1xuXG4vLyB0ZXN0IG1vZHVsZSBjb25maWd1cmF0aW9uIGZvciBlYWNoIHRlc3RcbmNvbnN0IHRlc3RNb2R1bGVDb25maWcgPSAoKSA9PiB7XG4gIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgRm9ybXNNb2R1bGUsIEFuYWx5dGljc01vZHVsZSxcbiAgICAgIFN0b3JlTW9kdWxlLnByb3ZpZGVTdG9yZSh7IHNhbXBsZTogcmVkdWNlciB9KSxcbiAgICAgIEVmZmVjdHNUZXN0aW5nTW9kdWxlLFxuICAgICAgSHR0cE1vZHVsZSwgUm91dGVyVGVzdGluZ01vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICBOYW1lTGlzdFNlcnZpY2UsXG4gICAgICBOYW1lTGlzdEVmZmVjdHMsXG4gICAgICB7cHJvdmlkZTogWEhSQmFja2VuZCwgdXNlQ2xhc3M6IE1vY2tCYWNrZW5kfVxuICAgIF1cbiAgfSk7XG59O1xuXG5jb25zdCBtb2NrQmFja2VuZFJlc3BvbnNlID0gKGNvbm5lY3Rpb246IE1vY2tDb25uZWN0aW9uLCByZXNwb25zZTogc3RyaW5nKSA9PiB7XG4gIGNvbm5lY3Rpb24ubW9ja1Jlc3BvbmQobmV3IFJlc3BvbnNlKG5ldyBSZXNwb25zZU9wdGlvbnMoe2JvZHk6IHJlc3BvbnNlfSkpKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWluKCkge1xuICB0LmRlc2NyaWJlKCdhcHA6IE5hbWVMaXN0U2VydmljZScsICgpID0+IHtcbiAgICBsZXQgaW5qZWN0b3I6IEluamVjdG9yO1xuICAgIGxldCBiYWNrZW5kOiBNb2NrQmFja2VuZDtcbiAgICBsZXQgbmFtZUxpc3Q6IE5hbWVMaXN0U2VydmljZTtcbiAgICBsZXQgc3RvcmU6IFN0b3JlPGFueT47XG4gICAgbGV0IHJ1bm5lcjogRWZmZWN0c1J1bm5lcjsgLy8gbmdyeC9lZmZlY3RzIHRlc3RlclxuICAgIGxldCBuYW1lTGlzdEVmZmVjdHM6IE5hbWVMaXN0RWZmZWN0cztcbiAgICBsZXQgY29ubmVjdGlvbjogTW9ja0Nvbm5lY3Rpb247IC8vIHRoaXMgd2lsbCBiZSBzZXQgd2hlbiBhIG5ldyBjb25uZWN0aW9uIGlzIGVtaXR0ZWQgZnJvbSB0aGUgYmFja2VuZC5cblxuICAgIHQuYmUoKCkgPT4ge1xuICAgICAgdGVzdE1vZHVsZUNvbmZpZygpO1xuICAgICAgaW5qZWN0b3IgPSBnZXRUZXN0QmVkKCk7XG4gICAgICBiYWNrZW5kID0gaW5qZWN0b3IuZ2V0KFhIUkJhY2tlbmQpO1xuICAgICAgc3RvcmUgPSBpbmplY3Rvci5nZXQoU3RvcmUpO1xuICAgICAgcnVubmVyID0gaW5qZWN0b3IuZ2V0KEVmZmVjdHNSdW5uZXIpO1xuICAgICAgbmFtZUxpc3RFZmZlY3RzID0gaW5qZWN0b3IuZ2V0KE5hbWVMaXN0RWZmZWN0cyk7XG4gICAgICAvLyBzZXRzIHRoZSBjb25uZWN0aW9uIHdoZW4gc29tZW9uZSB0cmllcyB0byBhY2Nlc3MgdGhlIGJhY2tlbmQgd2l0aCBhbiB4aHIgcmVxdWVzdFxuICAgICAgYmFja2VuZC5jb25uZWN0aW9ucy5zdWJzY3JpYmUoKGM6IE1vY2tDb25uZWN0aW9uKSA9PiBjb25uZWN0aW9uID0gYyk7XG4gICAgICAvLyBjb25zdHJ1Y3QgYWZ0ZXIgc2V0dGluZyB1cCBjb25uZWN0aW9ucyBhYm92ZVxuICAgICAgbmFtZUxpc3QgPSBpbmplY3Rvci5nZXQoTmFtZUxpc3RTZXJ2aWNlKTtcbiAgICB9KTtcblxuICAgIHQuaXQoJ3Nob3VsZCBpbml0aWFsaXplJywgKCkgPT4ge1xuICAgICAgcnVubmVyLnF1ZXVlKG5ldyBJbml0QWN0aW9uKCkpO1xuXG4gICAgICBuYW1lTGlzdEVmZmVjdHMuaW5pdCQuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgIHQuZShyZXN1bHQpLnRvRXF1YWwobmV3IEluaXRpYWxpemVkQWN0aW9uKFsgJ0RpamtzdHJhJywgJ0hvcHBlcicgXSkpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIG1vY2sgcmVzcG9uc2UgYWZ0ZXIgdGhlIHhociByZXF1ZXN0ICh3aGljaCBoYXBwZW5zIGluIGNvbnN0cnVjdG9yKSwgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgdW5kZWZpbmVkXG4gICAgICBtb2NrQmFja2VuZFJlc3BvbnNlKGNvbm5lY3Rpb24sICdbXCJEaWprc3RyYVwiLCBcIkhvcHBlclwiXScpO1xuICAgIH0pO1xuXG4gICAgdC5pdCgnYWRkIGFjdGlvbicsICgpID0+IHtcbiAgICAgIHJ1bm5lci5xdWV1ZShuZXcgQWRkQWN0aW9uKCdNaW5rbycpKTtcblxuICAgICAgbmFtZUxpc3RFZmZlY3RzLmFkZCQuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgIHQuZShyZXN1bHQpLnRvRXF1YWwobmV3IE5hbWVBZGRlZEFjdGlvbignTWlua28nKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG4iXX0=