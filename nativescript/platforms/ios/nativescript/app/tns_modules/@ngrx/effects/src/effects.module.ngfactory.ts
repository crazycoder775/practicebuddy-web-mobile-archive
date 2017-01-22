/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './effects.module';
import * as import2 from './actions';
import * as import3 from './effects-subscription';
import * as import4 from '@angular/core/src/di/injector';
import * as import5 from '@ngrx/store/src/dispatcher';
import * as import6 from './bootstrap-listener';
import * as import7 from '@ngrx/store/src/store';
import * as import8 from '@angular/core/src/application_tokens';
class EffectsModuleInjector extends import0.NgModuleInjector<import1.EffectsModule> {
  _EffectsModule_0:import1.EffectsModule;
  __Actions_1:import2.Actions;
  _EffectsSubscription_2:import3.EffectsSubscription;
  __APP_BOOTSTRAP_LISTENER_3:any[];
  constructor(parent:import4.Injector) {
    super(parent,[],[]);
  }
  get _Actions_1():import2.Actions {
    if ((this.__Actions_1 == (null as any))) { (this.__Actions_1 = new import2.Actions(this.parent.get(import5.Dispatcher))); }
    return this.__Actions_1;
  }
  get _APP_BOOTSTRAP_LISTENER_3():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_3 == (null as any))) { (this.__APP_BOOTSTRAP_LISTENER_3 = [import6.runAfterBootstrapEffects(this,this._EffectsSubscription_2)]); }
    return this.__APP_BOOTSTRAP_LISTENER_3;
  }
  createInternal():import1.EffectsModule {
    this._EffectsModule_0 = new import1.EffectsModule();
    this._EffectsSubscription_2 = new import3.EffectsSubscription(this.parent.get(import7.Store),this.parent.get(import3.EffectsSubscription,(null as any)),this.parent.get(import3.effects,(null as any)));
    return this._EffectsModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.EffectsModule)) { return this._EffectsModule_0; }
    if ((token === import2.Actions)) { return this._Actions_1; }
    if ((token === import3.EffectsSubscription)) { return this._EffectsSubscription_2; }
    if ((token === import8.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_3; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._EffectsSubscription_2.ngOnDestroy();
  }
}
export const EffectsModuleNgFactory:import0.NgModuleFactory<import1.EffectsModule> = new import0.NgModuleFactory(EffectsModuleInjector,import1.EffectsModule);