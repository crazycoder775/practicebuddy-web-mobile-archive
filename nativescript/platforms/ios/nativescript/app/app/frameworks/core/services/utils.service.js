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
var core_1 = require("@angular/core");
var tokens_1 = require("../tokens");
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
    return UtilsService;
}());
UtilsService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(tokens_1.FILE_SYSTEM)),
    __metadata("design:paramtypes", [Object])
], UtilsService);
exports.UtilsService = UtilsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWxzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUVqRCxvQ0FBc0M7QUFJdEMsSUFBYSxZQUFZO0lBRXZCLHNCQUF3QyxFQUFPO1FBQVAsT0FBRSxHQUFGLEVBQUUsQ0FBSztJQUFJLENBQUM7SUFFN0Msa0NBQVcsR0FBbEIsVUFBbUIsSUFBWTtRQUM3QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sb0NBQWEsR0FBcEIsVUFBcUIsUUFBZ0I7UUFDbkMsTUFBTSxDQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksU0FBSSxRQUFVLENBQUM7SUFDaEUsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSxZQUFZO0lBRHhCLGlCQUFVLEVBQUU7SUFHRSxXQUFBLGFBQU0sQ0FBQyxvQkFBVyxDQUFDLENBQUE7O0dBRnJCLFlBQVksQ0FZeEI7QUFaWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHtDb25maWd9IGZyb20gJy4vY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHtGSUxFX1NZU1RFTX0gZnJvbSAnLi4vdG9rZW5zJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEZJTEVfU1lTVEVNKSBwdWJsaWMgZnM6IGFueSkgeyB9IFxuXG4gIHB1YmxpYyBnZXRGaWxlbmFtZShwYXRoOiBzdHJpbmcpIHtcbiAgICBsZXQgcGFydHMgPSBwYXRoLnNwbGl0KCcvJyk7XG4gICAgcmV0dXJuIHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgcHVibGljIGRvY3VtZW50c1BhdGgoZmlsZW5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBgJHt0aGlzLmZzLmtub3duRm9sZGVycy5kb2N1bWVudHMoKS5wYXRofS8ke2ZpbGVuYW1lfWA7XG4gIH1cbn1cbiJdfQ==