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
var tokens_1 = require('../tokens');
var UtilsService = (function () {
    function UtilsService(fs) {
        this.fs = fs;
    }
    UtilsService.prototype.getFilename = function (path) {
        var parts = path.split('/');
        return parts[parts.length - 1];
    };
    UtilsService.prototype.documentsPath = function (filename) {
        return this.fs.knownFolders.documents().path + "/" + filename;
    };
    UtilsService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(tokens_1.FILE_SYSTEM)), 
        __metadata('design:paramtypes', [Object])
    ], UtilsService);
    return UtilsService;
}());
exports.UtilsService = UtilsService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL2NvcmUvc2VydmljZXMvdXRpbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUJBQWlDLGVBQWUsQ0FBQyxDQUFBO0FBRWpELHVCQUEwQixXQUFXLENBQUMsQ0FBQTtBQUd0QztJQUVFLHNCQUF5QyxFQUFPO1FBQVAsT0FBRSxHQUFGLEVBQUUsQ0FBSztJQUFJLENBQUM7SUFFOUMsa0NBQVcsR0FBbEIsVUFBbUIsSUFBWTtRQUM3QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sb0NBQWEsR0FBcEIsVUFBcUIsUUFBZ0I7UUFDbkMsTUFBTSxDQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksU0FBSSxRQUFVLENBQUM7SUFDaEUsQ0FBQztJQVpIO1FBQUMsaUJBQVUsRUFBRTttQkFHRSxhQUFNLENBQUMsb0JBQVcsQ0FBQzs7b0JBSHJCO0lBYWIsbUJBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLG9CQUFZLGVBWXhCLENBQUEiLCJmaWxlIjoiYXBwL2ZyYW1ld29ya3MvY29yZS9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9pbXBvcnQge0NvbmZpZ30gZnJvbSAnLi9jb25maWcuc2VydmljZSc7XG5pbXBvcnQge0ZJTEVfU1lTVEVNfSBmcm9tICcuLi90b2tlbnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEZJTEVfU1lTVEVNKSBwcml2YXRlIGZzOiBhbnkpIHsgfVxuXG4gIHB1YmxpYyBnZXRGaWxlbmFtZShwYXRoOiBzdHJpbmcpIHtcbiAgICBsZXQgcGFydHMgPSBwYXRoLnNwbGl0KCcvJyk7XG4gICAgcmV0dXJuIHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgcHVibGljIGRvY3VtZW50c1BhdGgoZmlsZW5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBgJHt0aGlzLmZzLmtub3duRm9sZGVycy5kb2N1bWVudHMoKS5wYXRofS8ke2ZpbGVuYW1lfWA7XG4gIH1cbn1cbiJdfQ==
