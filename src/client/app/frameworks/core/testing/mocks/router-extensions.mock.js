"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var RouterExtensionsMock = (function () {
    function RouterExtensionsMock() {
    }
    RouterExtensionsMock.prototype.navigate = function (commands, extras) {
        return Promise.resolve(true);
    };
    RouterExtensionsMock.prototype.navigateByUrl = function (url, options) {
        return Promise.resolve(true);
    };
    RouterExtensionsMock.prototype.back = function () {
        return;
    };
    return RouterExtensionsMock;
}());
RouterExtensionsMock = __decorate([
    core_1.Injectable()
], RouterExtensionsMock);
exports.RouterExtensionsMock = RouterExtensionsMock;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLWV4dGVuc2lvbnMubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvdXRlci1leHRlbnNpb25zLm1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLHNDQUEyQztBQU8zQyxJQUFhLG9CQUFvQjtJQUFqQztJQVlBLENBQUM7SUFYQyx1Q0FBUSxHQUFSLFVBQVMsUUFBb0IsRUFBRSxNQUFpQztRQUM5RCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsNENBQWEsR0FBYixVQUFjLEdBQXFCLEVBQUUsT0FBa0M7UUFDckUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELG1DQUFJLEdBQUo7UUFDRSxNQUFNLENBQUM7SUFDVCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLG9CQUFvQjtJQURoQyxpQkFBVSxFQUFFO0dBQ0Esb0JBQW9CLENBWWhDO0FBWlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgSVJvdXRlckV4dGVuc2lvbnMsIEV4dGVuZGVkTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gJy4uLy4uL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvdXRlckV4dGVuc2lvbnNNb2NrIGltcGxlbWVudHMgSVJvdXRlckV4dGVuc2lvbnMge1xuICBuYXZpZ2F0ZShjb21tYW5kczogQXJyYXk8YW55PiwgZXh0cmFzPzogRXh0ZW5kZWROYXZpZ2F0aW9uRXh0cmFzKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgfVxuXG4gIG5hdmlnYXRlQnlVcmwodXJsOiBzdHJpbmcgfCBVcmxUcmVlLCBvcHRpb25zPzogRXh0ZW5kZWROYXZpZ2F0aW9uRXh0cmFzKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=