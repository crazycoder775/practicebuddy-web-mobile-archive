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
var store_1 = require("@ngrx/store");
var index_1 = require("../../frameworks/core/index");
var index_2 = require("../../frameworks/ngrx/index");
var nameList = require("../../frameworks/sample/index");
var HomeComponent = (function () {
    function HomeComponent(store, routerext) {
        this.store = store;
        this.routerext = routerext;
        this.newName = '';
        this.names$ = store.let(index_2.getNames);
    }
    HomeComponent.prototype.addName = function () {
        this.store.dispatch(new nameList.AddAction(this.newName));
        this.newName = '';
        return false;
    };
    HomeComponent.prototype.readAbout = function () {
        this.routerext.navigate(['/about'], {
            transition: {
                duration: 1000,
                name: 'slideTop',
            }
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    index_1.BaseComponent({
        moduleId: module.id,
        selector: 'sd-home',
        templateUrl: 'home.component.html',
        styleUrls: ['home.component.css']
    }),
    __metadata("design:paramtypes", [store_1.Store, index_1.RouterExtensions])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EscUNBQW9DO0FBSXBDLHFEQUE4RTtBQUM5RSxxREFBa0U7QUFDbEUsd0RBQTBEO0FBUTFELElBQWEsYUFBYTtJQUl4Qix1QkFBb0IsS0FBdUIsRUFBUyxTQUEyQjtRQUEzRCxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBRnhFLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFHMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLGdCQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBTUQsK0JBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFHRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2xDLFVBQVUsRUFBRTtnQkFDVixRQUFRLEVBQUUsSUFBSTtnQkFDZCxJQUFJLEVBQUUsVUFBVTthQUNqQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUE1QlksYUFBYTtJQU56QixxQkFBYSxDQUFDO1FBQ2IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSxxQkFBcUI7UUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7S0FDbEMsQ0FBQztxQ0FLMkIsYUFBSyxFQUErQix3QkFBZ0I7R0FKcEUsYUFBYSxDQTRCekI7QUE1Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWJzXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG4vLyBhcHBcbmltcG9ydCB7IEJhc2VDb21wb25lbnQsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICcuLi8uLi9mcmFtZXdvcmtzL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHsgSUFwcFN0YXRlLCBnZXROYW1lcyB9IGZyb20gJy4uLy4uL2ZyYW1ld29ya3MvbmdyeC9pbmRleCc7XG5pbXBvcnQgKiBhcyBuYW1lTGlzdCBmcm9tICcuLi8uLi9mcmFtZXdvcmtzL3NhbXBsZS9pbmRleCc7XG5cbkBCYXNlQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICdob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICBwdWJsaWMgbmFtZXMkOiBPYnNlcnZhYmxlPGFueT47XG4gIHB1YmxpYyBuZXdOYW1lOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxJQXBwU3RhdGU+LCBwdWJsaWMgcm91dGVyZXh0OiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgdGhpcy5uYW1lcyQgPSBzdG9yZS5sZXQoZ2V0TmFtZXMpO1xuICB9XG5cbiAgLypcbiAgICogQHBhcmFtIG5ld25hbWUgIGFueSB0ZXh0IGFzIGlucHV0LlxuICAgKiBAcmV0dXJucyByZXR1cm4gZmFsc2UgdG8gcHJldmVudCBkZWZhdWx0IGZvcm0gc3VibWl0IGJlaGF2aW9yIHRvIHJlZnJlc2ggdGhlIHBhZ2UuXG4gICAqL1xuICBhZGROYW1lKCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IG5hbWVMaXN0LkFkZEFjdGlvbih0aGlzLm5ld05hbWUpKTtcbiAgICB0aGlzLm5ld05hbWUgPSAnJztcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZWFkQWJvdXQoKSB7XG4gICAgLy8gVHJ5IHRoaXMgaW4gdGhlIHtOfSBhcHBcbiAgICAvLyB7Tn0gY2FuIHVzZSB0aGVzZSBhbmltYXRpb24gb3B0aW9uc1xuICAgIHRoaXMucm91dGVyZXh0Lm5hdmlnYXRlKFsnL2Fib3V0J10sIHtcbiAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgIG5hbWU6ICdzbGlkZVRvcCcsXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==