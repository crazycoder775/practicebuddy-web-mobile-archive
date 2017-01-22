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
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var Observable_1 = require("rxjs/Observable");
var name_list_service_1 = require("../services/name-list.service");
var nameList = require("../actions/name-list.action");
var NameListEffects = (function () {
    function NameListEffects(store, actions$, nameListService) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.nameListService = nameListService;
        this.init$ = this.actions$
            .ofType(nameList.ActionTypes.INIT)
            .startWith(new nameList.InitAction)
            .switchMap(function () { return _this.nameListService.getNames(); })
            .map(function (payload) {
            var names = payload;
            return new nameList.InitializedAction(names);
        })
            .catch(function () { return Observable_1.Observable.of(new nameList.InitFailedAction()); });
        this.add$ = this.actions$
            .ofType(nameList.ActionTypes.ADD)
            .map(function (action) {
            var name = action.payload;
            _this.nameListService.track(nameList.ActionTypes.NAME_ADDED, { label: name });
            return new nameList.NameAddedAction(name);
        });
    }
    return NameListEffects;
}());
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], NameListEffects.prototype, "init$", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], NameListEffects.prototype, "add$", void 0);
NameListEffects = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        effects_1.Actions,
        name_list_service_1.NameListService])
], NameListEffects);
exports.NameListEffects = NameListEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS1saXN0LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hbWUtbGlzdC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHNDQUEyQztBQUczQyxxQ0FBNEM7QUFDNUMseUNBQWdEO0FBQ2hELDhDQUE2QztBQUc3QyxtRUFBZ0U7QUFDaEUsc0RBQXdEO0FBR3hELElBQWEsZUFBZTtJQTBCMUIseUJBQ1UsS0FBaUIsRUFDakIsUUFBaUIsRUFDakIsZUFBZ0M7UUFIMUMsaUJBSUs7UUFISyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBdkJoQyxVQUFLLEdBQXVCLElBQUksQ0FBQyxRQUFRO2FBQ2hELE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQzthQUNqQyxTQUFTLENBQUMsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDO2FBQ2xDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsRUFBL0IsQ0FBK0IsQ0FBQzthQUNoRCxHQUFHLENBQUMsVUFBQSxPQUFPO1lBQ1YsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUM7YUFFRCxLQUFLLENBQUMsY0FBTSxPQUFBLHVCQUFVLENBQUMsRUFBRSxDQUFDLElBQUksUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO1FBRXJELFNBQUksR0FBdUIsSUFBSSxDQUFDLFFBQVE7YUFDL0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO2FBQ2hDLEdBQUcsQ0FBQyxVQUFBLE1BQU07WUFDVCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBRTFCLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDN0UsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQU1ELENBQUM7SUFDUCxzQkFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUF6Qlc7SUFBVCxnQkFBTSxFQUFFOzhCQUFRLHVCQUFVOzhDQVNvQztBQUVyRDtJQUFULGdCQUFNLEVBQUU7OEJBQU8sdUJBQVU7NkNBT3JCO0FBeEJNLGVBQWU7SUFEM0IsaUJBQVUsRUFBRTtxQ0E0Qk0sYUFBSztRQUNGLGlCQUFPO1FBQ0EsbUNBQWU7R0E3Qi9CLGVBQWUsQ0ErQjNCO0FBL0JZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBsaWJzXG5pbXBvcnQgeyBTdG9yZSwgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0LCBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBOYW1lTGlzdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9uYW1lLWxpc3Quc2VydmljZSc7XG5pbXBvcnQgKiBhcyBuYW1lTGlzdCBmcm9tICcuLi9hY3Rpb25zL25hbWUtbGlzdC5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmFtZUxpc3RFZmZlY3RzIHtcblxuICAvKipcbiAgICogVGhpcyBlZmZlY3QgbWFrZXMgdXNlIG9mIHRoZSBgc3RhcnRXaXRoYCBvcGVyYXRvciB0byB0cmlnZ2VyXG4gICAqIHRoZSBlZmZlY3QgaW1tZWRpYXRlbHkgb24gc3RhcnR1cC5cbiAgICovXG4gIEBFZmZlY3QoKSBpbml0JDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJFxuICAgIC5vZlR5cGUobmFtZUxpc3QuQWN0aW9uVHlwZXMuSU5JVClcbiAgICAuc3RhcnRXaXRoKG5ldyBuYW1lTGlzdC5Jbml0QWN0aW9uKVxuICAgIC5zd2l0Y2hNYXAoKCkgPT4gdGhpcy5uYW1lTGlzdFNlcnZpY2UuZ2V0TmFtZXMoKSlcbiAgICAubWFwKHBheWxvYWQgPT4ge1xuICAgICAgbGV0IG5hbWVzID0gcGF5bG9hZDtcbiAgICAgIHJldHVybiBuZXcgbmFtZUxpc3QuSW5pdGlhbGl6ZWRBY3Rpb24obmFtZXMpO1xuICAgIH0pXG4gICAgLy8gbm90aGluZyByZWFjdGluZyB0byBmYWlsdXJlIGF0IG1vbWVudCBidXQgeW91IGNvdWxkIGlmIHlvdSB3YW50IChoZXJlIGZvciBleGFtcGxlKVxuICAgIC5jYXRjaCgoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBuYW1lTGlzdC5Jbml0RmFpbGVkQWN0aW9uKCkpKTtcblxuICBARWZmZWN0KCkgYWRkJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJFxuICAgIC5vZlR5cGUobmFtZUxpc3QuQWN0aW9uVHlwZXMuQUREKVxuICAgIC5tYXAoYWN0aW9uID0+IHtcbiAgICAgIGxldCBuYW1lID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAvLyBhbmFseXRpY3NcbiAgICAgIHRoaXMubmFtZUxpc3RTZXJ2aWNlLnRyYWNrKG5hbWVMaXN0LkFjdGlvblR5cGVzLk5BTUVfQURERUQsIHsgbGFiZWw6IG5hbWUgfSk7XG4gICAgICByZXR1cm4gbmV3IG5hbWVMaXN0Lk5hbWVBZGRlZEFjdGlvbihuYW1lKTtcbiAgICB9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBuYW1lTGlzdFNlcnZpY2U6IE5hbWVMaXN0U2VydmljZVxuICApIHsgfVxufVxuIl19