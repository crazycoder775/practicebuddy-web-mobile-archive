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
var index_1 = require('../../core/index');
var ToolbarComponent = (function () {
    function ToolbarComponent(log) {
        this.log = log;
    }
    ToolbarComponent.prototype.openLanguages = function (e) {
        this.log.debug('openLanguages');
    };
    ToolbarComponent = __decorate([
        index_1.BaseComponent({
            moduleId: module.id,
            selector: 'sd-toolbar',
            templateUrl: 'toolbar.component.html',
            styleUrls: ['toolbar.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.LogService])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL3NhbXBsZS9jb21wb25lbnRzL3Rvb2xiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxzQkFBMEMsa0JBQWtCLENBQUMsQ0FBQTtBQVE3RDtJQUVFLDBCQUFvQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUFHLENBQUM7SUFFaEMsd0NBQWEsR0FBcEIsVUFBcUIsQ0FBTTtRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBWkg7UUFBQyxxQkFBYSxDQUFDO1lBQ2IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzs7d0JBQUE7SUFRRix1QkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksd0JBQWdCLG1CQU81QixDQUFBIiwiZmlsZSI6ImFwcC9mcmFtZXdvcmtzL3NhbXBsZS9jb21wb25lbnRzL3Rvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50LCBMb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XG5cbkBCYXNlQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC10b29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2xiYXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nOiBMb2dTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBvcGVuTGFuZ3VhZ2VzKGU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubG9nLmRlYnVnKCdvcGVuTGFuZ3VhZ2VzJyk7XG4gIH1cbn1cbiJdfQ==
