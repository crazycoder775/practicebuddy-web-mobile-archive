"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var WindowService = (function () {
    function WindowService() {
        this.navigator = {};
        this.location = {};
    }
    WindowService.prototype.alert = function (msg) { return; };
    WindowService.prototype.confirm = function (msg) { return; };
    return WindowService;
}());
WindowService = __decorate([
    core_1.Injectable()
], WindowService);
exports.WindowService = WindowService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3aW5kb3cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0Esc0NBQTJDO0FBTTNDLElBQWEsYUFBYTtJQUQxQjtRQUdTLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztJQUk1QixDQUFDO0lBSFEsNkJBQUssR0FBWixVQUFhLEdBQVcsSUFBVSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLCtCQUFPLEdBQWQsVUFBZSxHQUFXLElBQVUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUUvQyxvQkFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBUFksYUFBYTtJQUR6QixpQkFBVSxFQUFFO0dBQ0EsYUFBYSxDQU96QjtBQVBZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IElXaW5kb3cgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2l3aW5kb3cnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2luZG93U2VydmljZSBpbXBsZW1lbnRzIElXaW5kb3cge1xuICBcbiAgcHVibGljIG5hdmlnYXRvcjogYW55ID0ge307XG4gIHB1YmxpYyBsb2NhdGlvbjogYW55ID0ge307XG4gIHB1YmxpYyBhbGVydChtc2c6IHN0cmluZyk6IHZvaWQgeyByZXR1cm47IH1cbiAgcHVibGljIGNvbmZpcm0obXNnOiBzdHJpbmcpOiB2b2lkIHsgcmV0dXJuOyB9XG5cbn1cbiJdfQ==