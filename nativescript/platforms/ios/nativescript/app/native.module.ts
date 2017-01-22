// nativescript
import { NativeScriptModule, NativeScriptFormsModule, NativeScriptHttpModule, NativeScriptRouterModule, RouterExtensions as TNSRouterExtensions } from 'nativescript-angular';
// import { RouterExtensions as TNSRouterExtensions } from 'nativescript-angular/router';
import { Http } from '@angular/http';

// angular
import { NgModule } from '@angular/core';

// libs
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

// libs
import {TNSFontIconModule, TNSFontIconService, TNSFontIconPipe, TNSFontIconPurePipe} from 'nativescript-ng2-fonticon';

// app
import { WindowService, ConsoleService, RouterExtensions } from './app/frameworks/core/index';
import { NSAppComponent } from './pages/app/app.component';
import { TOKENS_NATIVE } from './tokens.native';
import { AppComponent, ENTRY_COMPONENTS } from './app/frameworks/practicebuddy/index';
import { routes } from './app/frameworks/practicebuddy/routes';
import { PracticeBuddyModule } from './app/frameworks/practicebuddy/practicebuddy.module';
import {registerElement} from "nativescript-angular/element-registry";
registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);
//registerElement("PlayPause", () => require("nativescript-play-pause-button").PlayPauseButton);

// feature modules
import { CoreModule } from './app/frameworks/core/core.module';
import { AppReducer } from './app/frameworks/ngrx/index';
import { AnalyticsModule } from './app/frameworks/analytics/analytics.module';
import { MultilingualModule, translateFactory } from './app/frameworks/i18n/multilingual.module';
import { MultilingualEffects } from './app/frameworks/i18n/index';
import { SampleModule } from './app/frameworks/sample/sample.module';
import { NameListEffects } from './app/frameworks/sample/index';

// {N} custom app specific
import { WindowNative } from './shared/core/index';
import { NS_ANALYTICS_PROVIDERS } from './shared/nativescript/index';

// intermediate component module
// helps encapsulate custom native modules in with the components
// note: couple ways this could be done, just one option presented here...
@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    MultilingualModule.forRoot([{
      provide: TranslateLoader,
      deps: [Http],
      useFactory: (translateFactory)
    }]),
    SampleModule,
    PracticeBuddyModule,
    TNSFontIconModule.forRoot({
            'fa': 'fonts/font-awesome.css'
        })
  ],
  declarations: [
    ENTRY_COMPONENTS
  ],
  exports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    MultilingualModule,
    SampleModule,
    PracticeBuddyModule
  ]
})
class ComponentsModule { }

// For AoT compilation to work:
export function cons() {
  return console;
}

@NgModule({
  imports: [
    CoreModule.forRoot([
      { provide: WindowService, useClass: WindowNative },
      { provide: ConsoleService, useFactory: (cons) }
    ]),
    AnalyticsModule,
    ComponentsModule,
    PracticeBuddyModule.forRoot([
      TOKENS_NATIVE
    ]),
    NativeScriptRouterModule.forRoot(<any>routes),
    StoreModule.provideStore(AppReducer),
    EffectsModule.run(MultilingualEffects),
    EffectsModule.run(NameListEffects)
  ],
  declarations: [
    NSAppComponent
  ],
  providers: [
    NS_ANALYTICS_PROVIDERS,
    { provide: RouterExtensions, useClass: TNSRouterExtensions }
  ],
  bootstrap: [NSAppComponent]
})

export class NativeModule { }
