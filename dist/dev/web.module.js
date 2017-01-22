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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var store_1 = require('@ngrx/store');
var effects_1 = require('@ngrx/effects');
var store_devtools_1 = require('@ngrx/store-devtools');
var ng2_translate_1 = require('ng2-translate');
var tokens_web_1 = require('./tokens.web');
var app_component_1 = require('./app/frameworks/practicebuddy/components/app/app.component');
var index_1 = require('./app/frameworks/practicebuddy/components/index');
var routes_1 = require('./app/frameworks/practicebuddy/routes');
var practicebuddy_module_1 = require('./app/frameworks/practicebuddy/practicebuddy.module');
var core_module_1 = require('./app/frameworks/core/core.module');
var index_2 = require('./app/frameworks/ngrx/index');
var analytics_module_1 = require('./app/frameworks/analytics/analytics.module');
var multilingual_module_1 = require('./app/frameworks/i18n/multilingual.module');
var index_3 = require('./app/frameworks/i18n/index');
var sample_module_1 = require('./app/frameworks/sample/sample.module');
var index_4 = require('./app/frameworks/sample/index');
var index_5 = require('./app/frameworks/core/index');
index_5.Config.PLATFORM_TARGET = index_5.Config.PLATFORMS.WEB;
if (String('dev') === 'dev') {
    index_5.Config.DEBUG.LEVEL_4 = true;
}
var app_config_1 = require('./app/frameworks/sample/services/app-config');
var multilingual_service_1 = require('./app/frameworks/i18n/services/multilingual.service');
multilingual_service_1.MultilingualService.SUPPORTED_LANGUAGES = app_config_1.AppConfig.SUPPORTED_LANGUAGES;
var routerModule = router_1.RouterModule.forRoot(routes_1.routes);
if (String('false') === 'true') {
    index_5.Config.PLATFORM_TARGET = index_5.Config.PLATFORMS.DESKTOP;
    routerModule = router_1.RouterModule.forRoot(routes_1.routes, { useHash: true });
}
function win() {
    return window;
}
exports.win = win;
function cons() {
    return console;
}
exports.cons = cons;
var WebModule = (function () {
    function WebModule() {
    }
    WebModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                core_module_1.CoreModule.forRoot([
                    { provide: index_5.WindowService, useFactory: (win) },
                    { provide: index_5.ConsoleService, useFactory: (cons) }
                ]),
                routerModule,
                analytics_module_1.AnalyticsModule,
                multilingual_module_1.MultilingualModule.forRoot([{
                        provide: ng2_translate_1.TranslateLoader,
                        deps: [http_1.Http],
                        useFactory: (multilingual_module_1.translateFactory)
                    }]),
                sample_module_1.SampleModule,
                store_1.StoreModule.provideStore(index_2.AppReducer),
                store_devtools_1.StoreDevtoolsModule.instrumentOnlyWithExtension(),
                effects_1.EffectsModule.run(index_3.MultilingualEffects),
                effects_1.EffectsModule.run(index_4.NameListEffects),
                practicebuddy_module_1.PracticeBuddyModule.forRoot(tokens_web_1.TOKENS_WEB)
            ],
            declarations: [
                app_component_1.AppComponent,
                index_1.ENTRY_COMPONENTS
            ],
            providers: [
                {
                    provide: common_1.APP_BASE_HREF,
                    useValue: ''
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], WebModule);
    return WebModule;
}());
exports.WebModule = WebModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDLENBQUM7Z0JBQ0gsNEJBQVk7Z0JBQ1osbUJBQVcsQ0FBQyxZQUFZLENBQUMsa0JBQVUsQ0FBQztnQkFDcEMsb0NBQW1CLENBQUMsMkJBQTJCLEVBQUU7Z0JBQ2pELHVCQUFhLENBQUMsR0FBRyxDQUFDLDJCQUFtQixDQUFDO2dCQUN0Qyx1QkFBYSxDQUFDLEdBQUcsQ0FBQyx1QkFBZSxDQUFDO2dCQUNsQywwQ0FBbUIsQ0FBQyxPQUFPLENBQUMsdUJBQVUsQ0FBQzthQUN4QztZQUNELFlBQVksRUFBRTtnQkFDWiw0QkFBWTtnQkFDWix3QkFBZ0I7YUFDakI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLHNCQUFhO29CQUN0QixRQUFRLEVBQUUsaUJBQWlCO2lCQUM1QjthQUNGO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDOztpQkFBQTtJQUV1QixnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJmaWxlIjoid2ViLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gYW5ndWxhclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFQUF9CQVNFX0hSRUYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuLy8gbGlic1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBTdG9yZURldnRvb2xzTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUtZGV2dG9vbHMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTG9hZGVyIH0gZnJvbSAnbmcyLXRyYW5zbGF0ZSc7XG5cbi8vcGJcbmltcG9ydCB7IFRPS0VOU19XRUIgfSBmcm9tICcuL3Rva2Vucy53ZWInO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAvZnJhbWV3b3Jrcy9wcmFjdGljZWJ1ZGR5L2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRU5UUllfQ09NUE9ORU5UUyB9IGZyb20gJy4vYXBwL2ZyYW1ld29ya3MvcHJhY3RpY2VidWRkeS9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vYXBwL2ZyYW1ld29ya3MvcHJhY3RpY2VidWRkeS9yb3V0ZXMnO1xuaW1wb3J0IHsgUHJhY3RpY2VCdWRkeU1vZHVsZSB9IGZyb20gJy4vYXBwL2ZyYW1ld29ya3MvcHJhY3RpY2VidWRkeS9wcmFjdGljZWJ1ZGR5Lm1vZHVsZSc7XG5cbi8vIGZlYXR1cmUgbW9kdWxlc1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4vYXBwL2ZyYW1ld29ya3MvY29yZS9jb3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBSZWR1Y2VyIH0gZnJvbSAnLi9hcHAvZnJhbWV3b3Jrcy9uZ3J4L2luZGV4JztcbmltcG9ydCB7IEFuYWx5dGljc01vZHVsZSB9IGZyb20gJy4vYXBwL2ZyYW1ld29ya3MvYW5hbHl0aWNzL2FuYWx5dGljcy5tb2R1bGUnO1xuaW1wb3J0IHsgTXVsdGlsaW5ndWFsTW9kdWxlLCB0cmFuc2xhdGVGYWN0b3J5IH0gZnJvbSAnLi9hcHAvZnJhbWV3b3Jrcy9pMThuL211bHRpbGluZ3VhbC5tb2R1bGUnO1xuaW1wb3J0IHsgTXVsdGlsaW5ndWFsRWZmZWN0cyB9IGZyb20gJy4vYXBwL2ZyYW1ld29ya3MvaTE4bi9pbmRleCc7XG5pbXBvcnQgeyBTYW1wbGVNb2R1bGUgfSBmcm9tICcuL2FwcC9mcmFtZXdvcmtzL3NhbXBsZS9zYW1wbGUubW9kdWxlJztcbmltcG9ydCB7IE5hbWVMaXN0RWZmZWN0cyB9IGZyb20gJy4vYXBwL2ZyYW1ld29ya3Mvc2FtcGxlL2luZGV4JztcblxuLy8gY29uZmlnXG5pbXBvcnQgeyBDb25maWcsIFdpbmRvd1NlcnZpY2UsIENvbnNvbGVTZXJ2aWNlIH0gZnJvbSAnLi9hcHAvZnJhbWV3b3Jrcy9jb3JlL2luZGV4JztcbkNvbmZpZy5QTEFURk9STV9UQVJHRVQgPSBDb25maWcuUExBVEZPUk1TLldFQjtcbmlmIChTdHJpbmcoJzwlPSBCVUlMRF9UWVBFICU+JykgPT09ICdkZXYnKSB7XG4gIC8vIG9ubHkgb3V0cHV0IGNvbnNvbGUgbG9nZ2luZyBpbiBkZXYgbW9kZVxuICBDb25maWcuREVCVUcuTEVWRUxfNCA9IHRydWU7XG59XG5cbi8vIHNhbXBsZSBjb25maWcgKGV4dHJhKVxuaW1wb3J0IHsgQXBwQ29uZmlnIH0gZnJvbSAnLi9hcHAvZnJhbWV3b3Jrcy9zYW1wbGUvc2VydmljZXMvYXBwLWNvbmZpZyc7XG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxTZXJ2aWNlIH0gZnJvbSAnLi9hcHAvZnJhbWV3b3Jrcy9pMThuL3NlcnZpY2VzL211bHRpbGluZ3VhbC5zZXJ2aWNlJztcbi8vIGN1c3RvbSBpMThuIGxhbmd1YWdlIHN1cHBvcnRcbk11bHRpbGluZ3VhbFNlcnZpY2UuU1VQUE9SVEVEX0xBTkdVQUdFUyA9IEFwcENvbmZpZy5TVVBQT1JURURfTEFOR1VBR0VTO1xuXG5sZXQgcm91dGVyTW9kdWxlID0gUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKTtcblxuaWYgKFN0cmluZygnPCU9IFRBUkdFVF9ERVNLVE9QICU+JykgPT09ICd0cnVlJykge1xuICBDb25maWcuUExBVEZPUk1fVEFSR0VUID0gQ29uZmlnLlBMQVRGT1JNUy5ERVNLVE9QO1xuICAvLyBkZXNrdG9wIChlbGVjdHJvbikgbXVzdCB1c2UgaGFzaFxuICByb3V0ZXJNb2R1bGUgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMsIHt1c2VIYXNoOiB0cnVlfSk7XG59XG5cbmRlY2xhcmUgdmFyIHdpbmRvdywgY29uc29sZTtcblxuLy8gRm9yIEFvVCBjb21waWxhdGlvbiB0byB3b3JrOlxuZXhwb3J0IGZ1bmN0aW9uIHdpbigpIHtcbiAgcmV0dXJuIHdpbmRvdztcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb25zKCkge1xuICByZXR1cm4gY29uc29sZTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgQ29yZU1vZHVsZS5mb3JSb290KFtcbiAgICAgIHsgcHJvdmlkZTogV2luZG93U2VydmljZSwgdXNlRmFjdG9yeTogKHdpbikgfSxcbiAgICAgIHsgcHJvdmlkZTogQ29uc29sZVNlcnZpY2UsIHVzZUZhY3Rvcnk6IChjb25zKSB9XG4gICAgXSksXG4gICAgcm91dGVyTW9kdWxlLFxuICAgIEFuYWx5dGljc01vZHVsZSxcbiAgICBNdWx0aWxpbmd1YWxNb2R1bGUuZm9yUm9vdChbe1xuICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgZGVwczogW0h0dHBdLFxuICAgICAgdXNlRmFjdG9yeTogKHRyYW5zbGF0ZUZhY3RvcnkpXG4gICAgfV0pLFxuICAgIFNhbXBsZU1vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5wcm92aWRlU3RvcmUoQXBwUmVkdWNlciksXG4gICAgU3RvcmVEZXZ0b29sc01vZHVsZS5pbnN0cnVtZW50T25seVdpdGhFeHRlbnNpb24oKSxcbiAgICBFZmZlY3RzTW9kdWxlLnJ1bihNdWx0aWxpbmd1YWxFZmZlY3RzKSxcbiAgICBFZmZlY3RzTW9kdWxlLnJ1bihOYW1lTGlzdEVmZmVjdHMpLFxuICAgIFByYWN0aWNlQnVkZHlNb2R1bGUuZm9yUm9vdChUT0tFTlNfV0VCKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgRU5UUllfQ09NUE9ORU5UU1xuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxuICAgICAgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nXG4gICAgfVxuICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgV2ViTW9kdWxlIHsgfVxuXG4vLyBhbmd1bGFyXG4vKmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbi8vIGxpYnNcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgU3RvcmVEZXZ0b29sc01vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlLWRldnRvb2xzJztcbmltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciB9IGZyb20gJ25nMi10cmFuc2xhdGUnO1xuXG4vLyBhcHBcbmltcG9ydCB7IEFQUF9DT01QT05FTlRTLCBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvYXBwLnJvdXRlcyc7XG5cbi8vIGZlYXR1cmUgbW9kdWxlc1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4vYXBwL2ZyYW1ld29ya3MvY29yZS9jb3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBSZWR1Y2VyIH0gZnJvbSAnLi9hcHAvZnJhbWV3b3Jrcy9uZ3J4L2luZGV4JztcbmltcG9ydCB7IEFuYWx5dGljc01vZHVsZSB9IGZyb20gJy4vYXBwL2ZyYW1ld29ya3MvYW5hbHl0aWNzL2FuYWx5dGljcy5tb2R1bGUnO1xuaW1wb3J0IHsgTXVsdGlsaW5ndWFsTW9kdWxlLCB0cmFuc2xhdGVGYWN0b3J5IH0gZnJvbSAnLi9hcHAvZnJhbWV3b3Jrcy9pMThuL211bHRpbGluZ3VhbC5tb2R1bGUnO1xuaW1wb3J0IHsgTXVsdGlsaW5ndWFsRWZmZWN0cyB9IGZyb20gJy4vYXBwL2ZyYW1ld29ya3MvaTE4bi9pbmRleCc7XG5pbXBvcnQgeyBTYW1wbGVNb2R1bGUgfSBmcm9tICcuL2FwcC9mcmFtZXdvcmtzL3NhbXBsZS9zYW1wbGUubW9kdWxlJztcbmltcG9ydCB7IE5hbWVMaXN0RWZmZWN0cyB9IGZyb20gJy4vYXBwL2ZyYW1ld29ya3Mvc2FtcGxlL2luZGV4JztcblxuLy8gY29uZmlnXG5pbXBvcnQgeyBDb25maWcsIFdpbmRvd1NlcnZpY2UsIENvbnNvbGVTZXJ2aWNlIH0gZnJvbSAnLi9hcHAvZnJhbWV3b3Jrcy9jb3JlL2luZGV4JztcbkNvbmZpZy5QTEFURk9STV9UQVJHRVQgPSBDb25maWcuUExBVEZPUk1TLldFQjtcblxubGV0IHJvdXRlck1vZHVsZSA9IFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyk7XG5cbmlmIChTdHJpbmcoJzwlPSBUQVJHRVRfREVTS1RPUCAlPicpID09PSAndHJ1ZScpIHtcbiAgQ29uZmlnLlBMQVRGT1JNX1RBUkdFVCA9IENvbmZpZy5QTEFURk9STVMuREVTS1RPUDtcbiAgLy8gZGVza3RvcCAoZWxlY3Ryb24pIG11c3QgdXNlIGhhc2hcbiAgcm91dGVyTW9kdWxlID0gUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzLCB7dXNlSGFzaDogdHJ1ZX0pO1xufVxuXG5kZWNsYXJlIHZhciB3aW5kb3csIGNvbnNvbGU7XG5cbi8vIEZvciBBb1QgY29tcGlsYXRpb24gdG8gd29yazpcbmV4cG9ydCBmdW5jdGlvbiB3aW4oKSB7XG4gIHJldHVybiB3aW5kb3c7XG59XG5leHBvcnQgZnVuY3Rpb24gY29ucygpIHtcbiAgcmV0dXJuIGNvbnNvbGU7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIENvcmVNb2R1bGUuZm9yUm9vdChbXG4gICAgICB7IHByb3ZpZGU6IFdpbmRvd1NlcnZpY2UsIHVzZUZhY3Rvcnk6ICh3aW4pIH0sXG4gICAgICB7IHByb3ZpZGU6IENvbnNvbGVTZXJ2aWNlLCB1c2VGYWN0b3J5OiAoY29ucykgfSxcbiAgICBdKSxcbiAgICByb3V0ZXJNb2R1bGUsXG4gICAgQW5hbHl0aWNzTW9kdWxlLFxuICAgIE11bHRpbGluZ3VhbE1vZHVsZS5mb3JSb290KFt7XG4gICAgICBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsXG4gICAgICBkZXBzOiBbSHR0cF0sXG4gICAgICB1c2VGYWN0b3J5OiAodHJhbnNsYXRlRmFjdG9yeSlcbiAgICB9XSksXG4gICAgU2FtcGxlTW9kdWxlLFxuICAgIFN0b3JlTW9kdWxlLnByb3ZpZGVTdG9yZShBcHBSZWR1Y2VyKSxcbiAgICBTdG9yZURldnRvb2xzTW9kdWxlLmluc3RydW1lbnRPbmx5V2l0aEV4dGVuc2lvbigpLFxuICAgIEVmZmVjdHNNb2R1bGUucnVuKE11bHRpbGluZ3VhbEVmZmVjdHMpLFxuICAgIEVmZmVjdHNNb2R1bGUucnVuKE5hbWVMaXN0RWZmZWN0cylcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQVBQX0NPTVBPTkVOVFNcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0JBU0VfSFJFRixcbiAgICAgIHVzZVZhbHVlOiAnPCU9IEFQUF9CQVNFICU+J1xuICAgIH1cbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFdlYk1vZHVsZSB7IH0qLyJdfQ==
