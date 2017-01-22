"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var nativescript_angular_1 = require("nativescript-angular");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var ng2_translate_1 = require("ng2-translate");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var index_1 = require("./app/frameworks/core/index");
var app_component_1 = require("./pages/app/app.component");
var tokens_native_1 = require("./tokens.native");
var index_2 = require("./app/frameworks/practicebuddy/index");
var routes_1 = require("./app/frameworks/practicebuddy/routes");
var practicebuddy_module_1 = require("./app/frameworks/practicebuddy/practicebuddy.module");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
var core_module_1 = require("./app/frameworks/core/core.module");
var index_3 = require("./app/frameworks/ngrx/index");
var analytics_module_1 = require("./app/frameworks/analytics/analytics.module");
var multilingual_module_1 = require("./app/frameworks/i18n/multilingual.module");
var index_4 = require("./app/frameworks/i18n/index");
var sample_module_1 = require("./app/frameworks/sample/sample.module");
var index_5 = require("./app/frameworks/sample/index");
var index_6 = require("./shared/core/index");
var index_7 = require("./shared/nativescript/index");
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_angular_1.NativeScriptModule,
            nativescript_angular_1.NativeScriptFormsModule,
            nativescript_angular_1.NativeScriptHttpModule,
            nativescript_angular_1.NativeScriptRouterModule,
            multilingual_module_1.MultilingualModule.forRoot([{
                    provide: ng2_translate_1.TranslateLoader,
                    deps: [http_1.Http],
                    useFactory: (multilingual_module_1.translateFactory)
                }]),
            sample_module_1.SampleModule,
            practicebuddy_module_1.PracticeBuddyModule,
            nativescript_ng2_fonticon_1.TNSFontIconModule.forRoot({
                'fa': 'fonts/font-awesome.css'
            })
        ],
        declarations: [
            index_2.ENTRY_COMPONENTS
        ],
        exports: [
            nativescript_angular_1.NativeScriptModule,
            nativescript_angular_1.NativeScriptFormsModule,
            nativescript_angular_1.NativeScriptHttpModule,
            nativescript_angular_1.NativeScriptRouterModule,
            multilingual_module_1.MultilingualModule,
            sample_module_1.SampleModule,
            practicebuddy_module_1.PracticeBuddyModule
        ]
    })
], ComponentsModule);
function cons() {
    return console;
}
exports.cons = cons;
var NativeModule = (function () {
    function NativeModule() {
    }
    return NativeModule;
}());
NativeModule = __decorate([
    core_1.NgModule({
        imports: [
            core_module_1.CoreModule.forRoot([
                { provide: index_1.WindowService, useClass: index_6.WindowNative },
                { provide: index_1.ConsoleService, useFactory: (cons) }
            ]),
            analytics_module_1.AnalyticsModule,
            ComponentsModule,
            practicebuddy_module_1.PracticeBuddyModule.forRoot([
                tokens_native_1.TOKENS_NATIVE
            ]),
            nativescript_angular_1.NativeScriptRouterModule.forRoot(routes_1.routes),
            store_1.StoreModule.provideStore(index_3.AppReducer),
            effects_1.EffectsModule.run(index_4.MultilingualEffects),
            effects_1.EffectsModule.run(index_5.NameListEffects)
        ],
        declarations: [
            app_component_1.NSAppComponent
        ],
        providers: [
            index_7.NS_ANALYTICS_PROVIDERS,
            { provide: index_1.RouterExtensions, useClass: nativescript_angular_1.RouterExtensions }
        ],
        bootstrap: [app_component_1.NSAppComponent]
    })
], NativeModule);
exports.NativeModule = NativeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdGl2ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLDZEQUE4SztBQUU5SyxzQ0FBcUM7QUFHckMsc0NBQXlDO0FBR3pDLHFDQUEwQztBQUMxQyx5Q0FBOEM7QUFDOUMsK0NBQXdGO0FBR3hGLHVFQUFzSDtBQUd0SCxxREFBOEY7QUFDOUYsMkRBQTJEO0FBQzNELGlEQUFnRDtBQUNoRCw4REFBc0Y7QUFDdEYsZ0VBQStEO0FBQy9ELDRGQUEwRjtBQUMxRiwwRUFBc0U7QUFDdEUsa0NBQWUsQ0FBQyxLQUFLLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLEdBQUcsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO0FBSS9FLGlFQUErRDtBQUMvRCxxREFBeUQ7QUFDekQsZ0ZBQThFO0FBQzlFLGlGQUFpRztBQUNqRyxxREFBa0U7QUFDbEUsdUVBQXFFO0FBQ3JFLHVEQUFnRTtBQUdoRSw2Q0FBbUQ7QUFDbkQscURBQXFFO0FBbUNyRSxJQUFNLGdCQUFnQjtJQUF0QjtJQUF5QixDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQXBCLGdCQUFnQjtJQTlCckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AseUNBQWtCO1lBQ2xCLDhDQUF1QjtZQUN2Qiw2Q0FBc0I7WUFDdEIsK0NBQXdCO1lBQ3hCLHdDQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMxQixPQUFPLEVBQUUsK0JBQWU7b0JBQ3hCLElBQUksRUFBRSxDQUFDLFdBQUksQ0FBQztvQkFDWixVQUFVLEVBQUUsQ0FBQyxzQ0FBZ0IsQ0FBQztpQkFDL0IsQ0FBQyxDQUFDO1lBQ0gsNEJBQVk7WUFDWiwwQ0FBbUI7WUFDbkIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUNsQixJQUFJLEVBQUUsd0JBQXdCO2FBQ2pDLENBQUM7U0FDUDtRQUNELFlBQVksRUFBRTtZQUNaLHdCQUFnQjtTQUNqQjtRQUNELE9BQU8sRUFBRTtZQUNQLHlDQUFrQjtZQUNsQiw4Q0FBdUI7WUFDdkIsNkNBQXNCO1lBQ3RCLCtDQUF3QjtZQUN4Qix3Q0FBa0I7WUFDbEIsNEJBQVk7WUFDWiwwQ0FBbUI7U0FDcEI7S0FDRixDQUFDO0dBQ0ksZ0JBQWdCLENBQUk7QUFHMUI7SUFDRSxNQUFNLENBQUMsT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFGRCxvQkFFQztBQTRCRCxJQUFhLFlBQVk7SUFBekI7SUFBNEIsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQUE3QixJQUE2QjtBQUFoQixZQUFZO0lBMUJ4QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3QkFBVSxDQUFDLE9BQU8sQ0FBQztnQkFDakIsRUFBRSxPQUFPLEVBQUUscUJBQWEsRUFBRSxRQUFRLEVBQUUsb0JBQVksRUFBRTtnQkFDbEQsRUFBRSxPQUFPLEVBQUUsc0JBQWMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNoRCxDQUFDO1lBQ0Ysa0NBQWU7WUFDZixnQkFBZ0I7WUFDaEIsMENBQW1CLENBQUMsT0FBTyxDQUFDO2dCQUMxQiw2QkFBYTthQUNkLENBQUM7WUFDRiwrQ0FBd0IsQ0FBQyxPQUFPLENBQU0sZUFBTSxDQUFDO1lBQzdDLG1CQUFXLENBQUMsWUFBWSxDQUFDLGtCQUFVLENBQUM7WUFDcEMsdUJBQWEsQ0FBQyxHQUFHLENBQUMsMkJBQW1CLENBQUM7WUFDdEMsdUJBQWEsQ0FBQyxHQUFHLENBQUMsdUJBQWUsQ0FBQztTQUNuQztRQUNELFlBQVksRUFBRTtZQUNaLDhCQUFjO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDVCw4QkFBc0I7WUFDdEIsRUFBRSxPQUFPLEVBQUUsd0JBQWdCLEVBQUUsUUFBUSxFQUFFLHVDQUFtQixFQUFFO1NBQzdEO1FBQ0QsU0FBUyxFQUFFLENBQUMsOEJBQWMsQ0FBQztLQUM1QixDQUFDO0dBRVcsWUFBWSxDQUFJO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmF0aXZlc2NyaXB0XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUsIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLCBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLCBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsIFJvdXRlckV4dGVuc2lvbnMgYXMgVE5TUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbi8vIGltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgYXMgVE5TUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbi8vIGFuZ3VsYXJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGxpYnNcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVMb2FkZXIsIFRyYW5zbGF0ZVN0YXRpY0xvYWRlciB9IGZyb20gJ25nMi10cmFuc2xhdGUnO1xuXG4vLyBsaWJzXG5pbXBvcnQge1ROU0ZvbnRJY29uTW9kdWxlLCBUTlNGb250SWNvblNlcnZpY2UsIFROU0ZvbnRJY29uUGlwZSwgVE5TRm9udEljb25QdXJlUGlwZX0gZnJvbSAnbmF0aXZlc2NyaXB0LW5nMi1mb250aWNvbic7XG5cbi8vIGFwcFxuaW1wb3J0IHsgV2luZG93U2VydmljZSwgQ29uc29sZVNlcnZpY2UsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICcuL2FwcC9mcmFtZXdvcmtzL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHsgTlNBcHBDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2FwcC9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IFRPS0VOU19OQVRJVkUgfSBmcm9tICcuL3Rva2Vucy5uYXRpdmUnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50LCBFTlRSWV9DT01QT05FTlRTIH0gZnJvbSAnLi9hcHAvZnJhbWV3b3Jrcy9wcmFjdGljZWJ1ZGR5L2luZGV4JztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vYXBwL2ZyYW1ld29ya3MvcHJhY3RpY2VidWRkeS9yb3V0ZXMnO1xuaW1wb3J0IHsgUHJhY3RpY2VCdWRkeU1vZHVsZSB9IGZyb20gJy4vYXBwL2ZyYW1ld29ya3MvcHJhY3RpY2VidWRkeS9wcmFjdGljZWJ1ZGR5Lm1vZHVsZSc7XG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbnJlZ2lzdGVyRWxlbWVudChcIkZhYlwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWZsb2F0aW5nYWN0aW9uYnV0dG9uXCIpLkZhYik7XG4vL3JlZ2lzdGVyRWxlbWVudChcIlBsYXlQYXVzZVwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsYXktcGF1c2UtYnV0dG9uXCIpLlBsYXlQYXVzZUJ1dHRvbik7XG5cbi8vIGZlYXR1cmUgbW9kdWxlc1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4vYXBwL2ZyYW1ld29ya3MvY29yZS9jb3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBSZWR1Y2VyIH0gZnJvbSAnLi9hcHAvZnJhbWV3b3Jrcy9uZ3J4L2luZGV4JztcbmltcG9ydCB7IEFuYWx5dGljc01vZHVsZSB9IGZyb20gJy4vYXBwL2ZyYW1ld29ya3MvYW5hbHl0aWNzL2FuYWx5dGljcy5tb2R1bGUnO1xuaW1wb3J0IHsgTXVsdGlsaW5ndWFsTW9kdWxlLCB0cmFuc2xhdGVGYWN0b3J5IH0gZnJvbSAnLi9hcHAvZnJhbWV3b3Jrcy9pMThuL211bHRpbGluZ3VhbC5tb2R1bGUnO1xuaW1wb3J0IHsgTXVsdGlsaW5ndWFsRWZmZWN0cyB9IGZyb20gJy4vYXBwL2ZyYW1ld29ya3MvaTE4bi9pbmRleCc7XG5pbXBvcnQgeyBTYW1wbGVNb2R1bGUgfSBmcm9tICcuL2FwcC9mcmFtZXdvcmtzL3NhbXBsZS9zYW1wbGUubW9kdWxlJztcbmltcG9ydCB7IE5hbWVMaXN0RWZmZWN0cyB9IGZyb20gJy4vYXBwL2ZyYW1ld29ya3Mvc2FtcGxlL2luZGV4JztcblxuLy8ge059IGN1c3RvbSBhcHAgc3BlY2lmaWNcbmltcG9ydCB7IFdpbmRvd05hdGl2ZSB9IGZyb20gJy4vc2hhcmVkL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHsgTlNfQU5BTFlUSUNTX1BST1ZJREVSUyB9IGZyb20gJy4vc2hhcmVkL25hdGl2ZXNjcmlwdC9pbmRleCc7XG5cbi8vIGludGVybWVkaWF0ZSBjb21wb25lbnQgbW9kdWxlXG4vLyBoZWxwcyBlbmNhcHN1bGF0ZSBjdXN0b20gbmF0aXZlIG1vZHVsZXMgaW4gd2l0aCB0aGUgY29tcG9uZW50c1xuLy8gbm90ZTogY291cGxlIHdheXMgdGhpcyBjb3VsZCBiZSBkb25lLCBqdXN0IG9uZSBvcHRpb24gcHJlc2VudGVkIGhlcmUuLi5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgTXVsdGlsaW5ndWFsTW9kdWxlLmZvclJvb3QoW3tcbiAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcbiAgICAgIGRlcHM6IFtIdHRwXSxcbiAgICAgIHVzZUZhY3Rvcnk6ICh0cmFuc2xhdGVGYWN0b3J5KVxuICAgIH1dKSxcbiAgICBTYW1wbGVNb2R1bGUsXG4gICAgUHJhY3RpY2VCdWRkeU1vZHVsZSxcbiAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAgICdmYSc6ICdmb250cy9mb250LWF3ZXNvbWUuY3NzJ1xuICAgICAgICB9KVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBFTlRSWV9DT01QT05FTlRTXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgTXVsdGlsaW5ndWFsTW9kdWxlLFxuICAgIFNhbXBsZU1vZHVsZSxcbiAgICBQcmFjdGljZUJ1ZGR5TW9kdWxlXG4gIF1cbn0pXG5jbGFzcyBDb21wb25lbnRzTW9kdWxlIHsgfVxuXG4vLyBGb3IgQW9UIGNvbXBpbGF0aW9uIHRvIHdvcms6XG5leHBvcnQgZnVuY3Rpb24gY29ucygpIHtcbiAgcmV0dXJuIGNvbnNvbGU7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb3JlTW9kdWxlLmZvclJvb3QoW1xuICAgICAgeyBwcm92aWRlOiBXaW5kb3dTZXJ2aWNlLCB1c2VDbGFzczogV2luZG93TmF0aXZlIH0sXG4gICAgICB7IHByb3ZpZGU6IENvbnNvbGVTZXJ2aWNlLCB1c2VGYWN0b3J5OiAoY29ucykgfVxuICAgIF0pLFxuICAgIEFuYWx5dGljc01vZHVsZSxcbiAgICBDb21wb25lbnRzTW9kdWxlLFxuICAgIFByYWN0aWNlQnVkZHlNb2R1bGUuZm9yUm9vdChbXG4gICAgICBUT0tFTlNfTkFUSVZFXG4gICAgXSksXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoPGFueT5yb3V0ZXMpLFxuICAgIFN0b3JlTW9kdWxlLnByb3ZpZGVTdG9yZShBcHBSZWR1Y2VyKSxcbiAgICBFZmZlY3RzTW9kdWxlLnJ1bihNdWx0aWxpbmd1YWxFZmZlY3RzKSxcbiAgICBFZmZlY3RzTW9kdWxlLnJ1bihOYW1lTGlzdEVmZmVjdHMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5TQXBwQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE5TX0FOQUxZVElDU19QUk9WSURFUlMsXG4gICAgeyBwcm92aWRlOiBSb3V0ZXJFeHRlbnNpb25zLCB1c2VDbGFzczogVE5TUm91dGVyRXh0ZW5zaW9ucyB9XG4gIF0sXG4gIGJvb3RzdHJhcDogW05TQXBwQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIE5hdGl2ZU1vZHVsZSB7IH1cbiJdfQ==