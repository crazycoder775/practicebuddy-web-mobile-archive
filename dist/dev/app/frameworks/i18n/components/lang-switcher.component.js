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
var index_1 = require('../../core/index');
var index_2 = require('../../electron/index');
var multilingual = require('../index');
var LangSwitcherComponent = (function () {
    function LangSwitcherComponent(log, store) {
        var _this = this;
        this.log = log;
        this.store = store;
        this.supportedLanguages = multilingual.MultilingualService.SUPPORTED_LANGUAGES;
        store.take(1).subscribe(function (s) {
            _this.lang = s && s.i18n ? s.i18n.lang : '';
        });
        if (index_1.Config.IS_DESKTOP()) {
            index_2.ElectronEventService.on('changeLang').subscribe(function (e) {
                _this.changeLang({ target: { value: e.detail.value } });
            });
        }
    }
    LangSwitcherComponent.prototype.changeLang = function (e) {
        var lang = this.supportedLanguages[0].code;
        if (index_1.Config.IS_MOBILE_NATIVE()) {
            if (e) {
                lang = this.supportedLanguages[e.newIndex].code;
            }
        }
        else if (e && e.target) {
            lang = e.target.value;
        }
        this.log.debug("Language change: " + lang);
        this.store.dispatch(new multilingual.ChangeAction(lang));
    };
    LangSwitcherComponent = __decorate([
        index_1.BaseComponent({
            moduleId: module.id,
            selector: 'lang-switcher',
            templateUrl: 'lang-switcher.component.html',
            styleUrls: ['lang-switcher.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.LogService, store_1.Store])
    ], LangSwitcherComponent);
    return LangSwitcherComponent;
}());
exports.LangSwitcherComponent = LangSwitcherComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL2kxOG4vY29tcG9uZW50cy9sYW5nLXN3aXRjaGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0Esc0JBQXNCLGFBQWEsQ0FBQyxDQUFBO0FBR3BDLHNCQUF5RCxrQkFBa0IsQ0FBQyxDQUFBO0FBRTVFLHNCQUFxQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzVELElBQVksWUFBWSxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBUXpDO0lBS0UsK0JBQW9CLEdBQWUsRUFBVSxLQUF1QjtRQUx0RSxpQkFnQ0M7UUEzQnFCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUY3RCx1QkFBa0IsR0FBaUIsWUFBWSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDO1FBRzdGLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBTTtZQUU3QixLQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxDQUFDLGNBQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFeEIsNEJBQW9CLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQU07Z0JBQ3JELEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVELDBDQUFVLEdBQVYsVUFBVyxDQUFNO1FBQ2YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUUzQyxFQUFFLENBQUMsQ0FBQyxjQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDTixJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEQsQ0FBQztRQUNILENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN4QixDQUFDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsc0JBQW9CLElBQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFyQ0g7UUFBQyxxQkFBYSxDQUFDO1lBQ2IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDM0MsQ0FBQzs7NkJBQUE7SUFpQ0YsNEJBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBaENZLDZCQUFxQix3QkFnQ2pDLENBQUEiLCJmaWxlIjoiYXBwL2ZyYW1ld29ya3MvaTE4bi9jb21wb25lbnRzL2xhbmctc3dpdGNoZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGlic1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbi8vIGFwcFxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCwgQ29uZmlnLCBMb2dTZXJ2aWNlLCBJTGFuZyB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHsgSUFwcFN0YXRlIH0gZnJvbSAnLi4vLi4vbmdyeC9pbmRleCc7XG5pbXBvcnQgeyBFbGVjdHJvbkV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2VsZWN0cm9uL2luZGV4JztcbmltcG9ydCAqIGFzIG11bHRpbGluZ3VhbCBmcm9tICcuLi9pbmRleCc7XG5cbkBCYXNlQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdsYW5nLXN3aXRjaGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdsYW5nLXN3aXRjaGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2xhbmctc3dpdGNoZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExhbmdTd2l0Y2hlckNvbXBvbmVudCB7XG5cbiAgcHVibGljIGxhbmc6IHN0cmluZztcbiAgcHVibGljIHN1cHBvcnRlZExhbmd1YWdlczogQXJyYXk8SUxhbmc+ID0gbXVsdGlsaW5ndWFsLk11bHRpbGluZ3VhbFNlcnZpY2UuU1VQUE9SVEVEX0xBTkdVQUdFUztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZzogTG9nU2VydmljZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8SUFwcFN0YXRlPikge1xuICAgIHN0b3JlLnRha2UoMSkuc3Vic2NyaWJlKChzOiBhbnkpID0+IHtcbiAgICAgIC8vIHMgJiYgcy4xOG4gLSBlbnN1cmVzIHRlc3Rpbmcgd29ya3MgaW4gYWxsIGNhc2VzIChzaW5jZSBzb21lIHRlc3RzIGRvbnQgdXNlIGkxOG4gc3RhdGUpXG4gICAgICB0aGlzLmxhbmcgPSBzICYmIHMuaTE4biA/IHMuaTE4bi5sYW5nIDogJyc7XG4gICAgfSk7XG5cbiAgICBpZiAoQ29uZmlnLklTX0RFU0tUT1AoKSkge1xuICAgICAgLy8gYWxsb3cgZWxlY3Ryb24gbWVudSB0byB0YWxrIHRvIGNvbXBvbmVudFxuICAgICAgRWxlY3Ryb25FdmVudFNlcnZpY2Uub24oJ2NoYW5nZUxhbmcnKS5zdWJzY3JpYmUoKGU6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZUxhbmcoeyB0YXJnZXQ6IHsgdmFsdWU6IGUuZGV0YWlsLnZhbHVlIH0gfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIGNoYW5nZUxhbmcoZTogYW55KSB7XG4gICAgbGV0IGxhbmcgPSB0aGlzLnN1cHBvcnRlZExhbmd1YWdlc1swXS5jb2RlOyAvLyBmYWxsYmFjayB0byBkZWZhdWx0ICdlbidcblxuICAgIGlmIChDb25maWcuSVNfTU9CSUxFX05BVElWRSgpKSB7XG4gICAgICBpZiAoZSkge1xuICAgICAgICBsYW5nID0gdGhpcy5zdXBwb3J0ZWRMYW5ndWFnZXNbZS5uZXdJbmRleF0uY29kZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUgJiYgZS50YXJnZXQpIHtcbiAgICAgIGxhbmcgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5sb2cuZGVidWcoYExhbmd1YWdlIGNoYW5nZTogJHtsYW5nfWApO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IG11bHRpbGluZ3VhbC5DaGFuZ2VBY3Rpb24obGFuZykpO1xuICB9XG59XG4iXX0=
