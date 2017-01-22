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
var index_1 = require("../../core/index");
var index_2 = require("../../electron/index");
var multilingual = require("../index");
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
    return LangSwitcherComponent;
}());
LangSwitcherComponent = __decorate([
    index_1.BaseComponent({
        moduleId: module.id,
        selector: 'lang-switcher',
        templateUrl: 'lang-switcher.component.html',
        styleUrls: ['lang-switcher.component.css']
    }),
    __metadata("design:paramtypes", [index_1.LogService, store_1.Store])
], LangSwitcherComponent);
exports.LangSwitcherComponent = LangSwitcherComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZy1zd2l0Y2hlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYW5nLXN3aXRjaGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EscUNBQW9DO0FBR3BDLDBDQUE0RTtBQUU1RSw4Q0FBNEQ7QUFDNUQsdUNBQXlDO0FBUXpDLElBQWEscUJBQXFCO0lBS2hDLCtCQUFvQixHQUFlLEVBQVUsS0FBdUI7UUFBcEUsaUJBWUM7UUFabUIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBRjdELHVCQUFrQixHQUFpQixZQUFZLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLENBQUM7UUFHN0YsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFNO1lBRTdCLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLENBQUMsY0FBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUV4Qiw0QkFBb0IsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBTTtnQkFDckQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN6RCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQsMENBQVUsR0FBVixVQUFXLENBQU07UUFDZixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRTNDLEVBQUUsQ0FBQyxDQUFDLGNBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNOLElBQUksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNsRCxDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3hCLENBQUM7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxzQkFBb0IsSUFBTSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQztBQWhDWSxxQkFBcUI7SUFOakMscUJBQWEsQ0FBQztRQUNiLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO0tBQzNDLENBQUM7cUNBTXlCLGtCQUFVLEVBQWlCLGFBQUs7R0FMOUMscUJBQXFCLENBZ0NqQztBQWhDWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWJzXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuLy8gYXBwXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50LCBDb25maWcsIExvZ1NlcnZpY2UsIElMYW5nIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XG5pbXBvcnQgeyBJQXBwU3RhdGUgfSBmcm9tICcuLi8uLi9uZ3J4L2luZGV4JztcbmltcG9ydCB7IEVsZWN0cm9uRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZWxlY3Ryb24vaW5kZXgnO1xuaW1wb3J0ICogYXMgbXVsdGlsaW5ndWFsIGZyb20gJy4uL2luZGV4JztcblxuQEJhc2VDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2xhbmctc3dpdGNoZXInLFxuICB0ZW1wbGF0ZVVybDogJ2xhbmctc3dpdGNoZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbGFuZy1zd2l0Y2hlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGFuZ1N3aXRjaGVyQ29tcG9uZW50IHtcblxuICBwdWJsaWMgbGFuZzogc3RyaW5nO1xuICBwdWJsaWMgc3VwcG9ydGVkTGFuZ3VhZ2VzOiBBcnJheTxJTGFuZz4gPSBtdWx0aWxpbmd1YWwuTXVsdGlsaW5ndWFsU2VydmljZS5TVVBQT1JURURfTEFOR1VBR0VTO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nOiBMb2dTZXJ2aWNlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxJQXBwU3RhdGU+KSB7XG4gICAgc3RvcmUudGFrZSgxKS5zdWJzY3JpYmUoKHM6IGFueSkgPT4ge1xuICAgICAgLy8gcyAmJiBzLjE4biAtIGVuc3VyZXMgdGVzdGluZyB3b3JrcyBpbiBhbGwgY2FzZXMgKHNpbmNlIHNvbWUgdGVzdHMgZG9udCB1c2UgaTE4biBzdGF0ZSlcbiAgICAgIHRoaXMubGFuZyA9IHMgJiYgcy5pMThuID8gcy5pMThuLmxhbmcgOiAnJztcbiAgICB9KTtcblxuICAgIGlmIChDb25maWcuSVNfREVTS1RPUCgpKSB7XG4gICAgICAvLyBhbGxvdyBlbGVjdHJvbiBtZW51IHRvIHRhbGsgdG8gY29tcG9uZW50XG4gICAgICBFbGVjdHJvbkV2ZW50U2VydmljZS5vbignY2hhbmdlTGFuZycpLnN1YnNjcmliZSgoZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlTGFuZyh7IHRhcmdldDogeyB2YWx1ZTogZS5kZXRhaWwudmFsdWUgfSB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgY2hhbmdlTGFuZyhlOiBhbnkpIHtcbiAgICBsZXQgbGFuZyA9IHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VzWzBdLmNvZGU7IC8vIGZhbGxiYWNrIHRvIGRlZmF1bHQgJ2VuJ1xuXG4gICAgaWYgKENvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkpIHtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGxhbmcgPSB0aGlzLnN1cHBvcnRlZExhbmd1YWdlc1tlLm5ld0luZGV4XS5jb2RlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZSAmJiBlLnRhcmdldCkge1xuICAgICAgbGFuZyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cbiAgICB0aGlzLmxvZy5kZWJ1ZyhgTGFuZ3VhZ2UgY2hhbmdlOiAke2xhbmd9YCk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgbXVsdGlsaW5ndWFsLkNoYW5nZUFjdGlvbihsYW5nKSk7XG4gIH1cbn1cbiJdfQ==