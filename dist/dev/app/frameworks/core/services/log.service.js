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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var config_1 = require('../utils/config');
var console_service_1 = require('./console.service');
var LogService = (function () {
    function LogService(logger) {
        this.logger = logger;
    }
    LogService.prototype.debug = function (msg) {
        if (config_1.Config.DEBUG.LEVEL_4) {
            this.logger.log(msg);
        }
    };
    LogService.prototype.error = function (err) {
        if (config_1.Config.DEBUG.LEVEL_4 || config_1.Config.DEBUG.LEVEL_3) {
            this.logger.error(err);
        }
    };
    LogService.prototype.warn = function (err) {
        if (config_1.Config.DEBUG.LEVEL_4 || config_1.Config.DEBUG.LEVEL_2) {
            this.logger.warn(err);
        }
    };
    LogService.prototype.info = function (err) {
        if (config_1.Config.DEBUG.LEVEL_4 || config_1.Config.DEBUG.LEVEL_1) {
            this.logger.info(err);
        }
    };
    LogService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return console_service_1.ConsoleService; }))), 
        __metadata('design:paramtypes', [console_service_1.ConsoleService])
    ], LogService);
    return LogService;
}());
exports.LogService = LogService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL2NvcmUvc2VydmljZXMvbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLHFCQUErQyxlQUFlLENBQUMsQ0FBQTtBQUcvRCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6QyxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUduRDtJQUVFLG9CQUE2RCxNQUFzQjtRQUF0QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtJQUFHLENBQUM7SUFHaEYsMEJBQUssR0FBWixVQUFhLEdBQVE7UUFDbkIsRUFBRSxDQUFDLENBQUMsZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBRXpCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBR00sMEJBQUssR0FBWixVQUFhLEdBQVE7UUFDbkIsRUFBRSxDQUFDLENBQUMsZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBR00seUJBQUksR0FBWCxVQUFZLEdBQVE7UUFDbEIsRUFBRSxDQUFDLENBQUMsZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7SUFDSCxDQUFDO0lBR00seUJBQUksR0FBWCxVQUFZLEdBQVE7UUFDbEIsRUFBRSxDQUFDLENBQUMsZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7SUFDSCxDQUFDO0lBaENIO1FBQUMsaUJBQVUsRUFBRTttQkFHRSxhQUFNLENBQUMsaUJBQVUsQ0FBQyxjQUFNLE9BQUEsZ0NBQWMsRUFBZCxDQUFjLENBQUMsQ0FBQzs7a0JBSDFDO0lBa0NiLGlCQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtBQWpDWSxrQkFBVSxhQWlDdEIsQ0FBQSIsImZpbGUiOiJhcHAvZnJhbWV3b3Jrcy9jb3JlL3NlcnZpY2VzL2xvZy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vdXRpbHMvY29uZmlnJztcbmltcG9ydCB7IENvbnNvbGVTZXJ2aWNlIH0gZnJvbSAnLi9jb25zb2xlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9nU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IENvbnNvbGVTZXJ2aWNlKSkgcHVibGljIGxvZ2dlcjogQ29uc29sZVNlcnZpY2UpIHt9XG5cbiAgLy8gZGVidWcgKHN0YW5kYXJkIG91dHB1dClcbiAgcHVibGljIGRlYnVnKG1zZzogYW55KSB7XG4gICAgaWYgKENvbmZpZy5ERUJVRy5MRVZFTF80KSB7XG4gICAgICAvLyBjb25zb2xlLmRlYnVnIGRvZXMgbm90IHdvcmsgb24ge059IGFwcHMuLi4gdXNlIGBsb2dgXG4gICAgICB0aGlzLmxvZ2dlci5sb2cobXNnKTtcbiAgICB9XG4gIH1cblxuICAvLyBlcnJvclxuICBwdWJsaWMgZXJyb3IoZXJyOiBhbnkpIHtcbiAgICBpZiAoQ29uZmlnLkRFQlVHLkxFVkVMXzQgfHwgQ29uZmlnLkRFQlVHLkxFVkVMXzMpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgLy8gd2FyblxuICBwdWJsaWMgd2FybihlcnI6IGFueSkge1xuICAgIGlmIChDb25maWcuREVCVUcuTEVWRUxfNCB8fCBDb25maWcuREVCVUcuTEVWRUxfMikge1xuICAgICAgdGhpcy5sb2dnZXIud2FybihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGluZm9cbiAgcHVibGljIGluZm8oZXJyOiBhbnkpIHtcbiAgICBpZiAoQ29uZmlnLkRFQlVHLkxFVkVMXzQgfHwgQ29uZmlnLkRFQlVHLkxFVkVMXzEpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oZXJyKTtcbiAgICB9XG4gIH1cblxufVxuIl19
