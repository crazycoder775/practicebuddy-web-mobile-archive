"use strict";
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
var TranslateMock = (function () {
    function TranslateMock() {
        this.onLangChange = new core_1.EventEmitter();
        this.onTranslationChange = new core_1.EventEmitter();
    }
    TranslateMock.prototype.getTranslation = function (lang) {
        return {
            'TEST': 'test'
        };
    };
    TranslateMock.prototype.use = function (lang) {
    };
    TranslateMock.prototype.get = function (key, interpolateParams) {
        return Observable_1.Observable.of(key);
    };
    TranslateMock.prototype.setDefaultLang = function (lang) {
        return;
    };
    TranslateMock.prototype.getLangs = function () {
        return ['en'];
    };
    TranslateMock.prototype.reloadLang = function (lang) {
        return Observable_1.Observable.of('en');
    };
    return TranslateMock;
}());
exports.TranslateMock = TranslateMock;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL2kxOG4vdGVzdGluZy9tb2Nrcy9uZzItdHJhbnNsYXRlLm1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUc3QywyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxRQUFPLHdCQUF3QixDQUFDLENBQUE7QUFFaEM7SUFBQTtRQUNTLGlCQUFZLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3JELHdCQUFtQixHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQXFCckUsQ0FBQztJQXBCUSxzQ0FBYyxHQUFyQixVQUFzQixJQUFZO1FBQ2hDLE1BQU0sQ0FBQztZQUNMLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQztJQUNKLENBQUM7SUFDTSwyQkFBRyxHQUFWLFVBQVcsSUFBWTtJQUV2QixDQUFDO0lBQ00sMkJBQUcsR0FBVixVQUFXLEdBQTJCLEVBQUUsaUJBQTBCO1FBQ2hFLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ00sc0NBQWMsR0FBckIsVUFBc0IsSUFBWTtRQUNoQyxNQUFNLENBQUM7SUFDVCxDQUFDO0lBQ00sZ0NBQVEsR0FBZjtRQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDTSxrQ0FBVSxHQUFqQixVQUFrQixJQUFZO1FBQzVCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQXZCQSxBQXVCQyxJQUFBO0FBdkJZLHFCQUFhLGdCQXVCekIsQ0FBQSIsImZpbGUiOiJhcHAvZnJhbWV3b3Jrcy9pMThuL3Rlc3RpbmcvbW9ja3MvbmcyLXRyYW5zbGF0ZS5tb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9hbmd1bGFyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gbGlic1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlTW9jayB7XG4gIHB1YmxpYyBvbkxhbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwdWJsaWMgb25UcmFuc2xhdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHB1YmxpYyBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAnVEVTVCc6ICd0ZXN0J1xuICAgIH07XG4gIH1cbiAgcHVibGljIHVzZShsYW5nOiBzdHJpbmcpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhsYW5nKTtcbiAgfVxuICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiwgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QpOiBPYnNlcnZhYmxlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKGtleSk7XG4gIH1cbiAgcHVibGljIHNldERlZmF1bHRMYW5nKGxhbmc6IHN0cmluZykge1xuICAgIHJldHVybjtcbiAgfVxuICBwdWJsaWMgZ2V0TGFuZ3MoKSB7XG4gICAgcmV0dXJuIFsnZW4nXTtcbiAgfVxuICBwdWJsaWMgcmVsb2FkTGFuZyhsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKCdlbicpO1xuICB9XG59XG4iXX0=
