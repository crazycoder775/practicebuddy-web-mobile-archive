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
var store_1 = require('@ngrx/store');
var index_1 = require('../../frameworks/core/index');
var index_2 = require('../../frameworks/ngrx/index');
var nameList = require('../../frameworks/sample/index');
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
    HomeComponent = __decorate([
        index_1.BaseComponent({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css']
        }), 
        __metadata('design:paramtypes', [store_1.Store, index_1.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHNCQUFzQixhQUFhLENBQUMsQ0FBQTtBQUlwQyxzQkFBZ0QsNkJBQTZCLENBQUMsQ0FBQTtBQUM5RSxzQkFBb0MsNkJBQTZCLENBQUMsQ0FBQTtBQUNsRSxJQUFZLFFBQVEsV0FBTSwrQkFBK0IsQ0FBQyxDQUFBO0FBUTFEO0lBSUUsdUJBQW9CLEtBQXVCLEVBQVMsU0FBMkI7UUFBM0QsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUZ4RSxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBRzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxnQkFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQU1ELCtCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBR0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNsQyxVQUFVLEVBQUU7Z0JBQ1YsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFLFVBQVU7YUFDakI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBakNIO1FBQUMscUJBQWEsQ0FBQztZQUNiLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ2xDLENBQUM7O3FCQUFBO0lBNkJGLG9CQUFDO0FBQUQsQ0E1QkEsQUE0QkMsSUFBQTtBQTVCWSxxQkFBYSxnQkE0QnpCLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYnNcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbi8vIGFwcFxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJy4uLy4uL2ZyYW1ld29ya3MvY29yZS9pbmRleCc7XG5pbXBvcnQgeyBJQXBwU3RhdGUsIGdldE5hbWVzIH0gZnJvbSAnLi4vLi4vZnJhbWV3b3Jrcy9uZ3J4L2luZGV4JztcbmltcG9ydCAqIGFzIG5hbWVMaXN0IGZyb20gJy4uLy4uL2ZyYW1ld29ya3Mvc2FtcGxlL2luZGV4JztcblxuQEJhc2VDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gIHB1YmxpYyBuYW1lcyQ6IE9ic2VydmFibGU8YW55PjtcbiAgcHVibGljIG5ld05hbWU6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPElBcHBTdGF0ZT4sIHB1YmxpYyByb3V0ZXJleHQ6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICB0aGlzLm5hbWVzJCA9IHN0b3JlLmxldChnZXROYW1lcyk7XG4gIH1cblxuICAvKlxuICAgKiBAcGFyYW0gbmV3bmFtZSAgYW55IHRleHQgYXMgaW5wdXQuXG4gICAqIEByZXR1cm5zIHJldHVybiBmYWxzZSB0byBwcmV2ZW50IGRlZmF1bHQgZm9ybSBzdWJtaXQgYmVoYXZpb3IgdG8gcmVmcmVzaCB0aGUgcGFnZS5cbiAgICovXG4gIGFkZE5hbWUoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgbmFtZUxpc3QuQWRkQWN0aW9uKHRoaXMubmV3TmFtZSkpO1xuICAgIHRoaXMubmV3TmFtZSA9ICcnO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlYWRBYm91dCgpIHtcbiAgICAvLyBUcnkgdGhpcyBpbiB0aGUge059IGFwcFxuICAgIC8vIHtOfSBjYW4gdXNlIHRoZXNlIGFuaW1hdGlvbiBvcHRpb25zXG4gICAgdGhpcy5yb3V0ZXJleHQubmF2aWdhdGUoWycvYWJvdXQnXSwge1xuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgbmFtZTogJ3NsaWRlVG9wJyxcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19
