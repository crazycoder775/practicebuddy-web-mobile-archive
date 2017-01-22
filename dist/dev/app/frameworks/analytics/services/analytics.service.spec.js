"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var angulartics2_1 = require("angulartics2");
var index_1 = require("../../test/index");
var index_2 = require("../index");
var testModuleConfig = function () {
    testing_1.TestBed.configureTestingModule({
        imports: [testing_2.RouterTestingModule],
        providers: [
            angulartics2_1.Angulartics2, angulartics2_1.Angulartics2Segment, index_2.AnalyticsService
        ]
    });
};
function main() {
    index_1.t.describe('analytics:', function () {
        index_1.t.be(testModuleConfig);
        index_1.t.describe('AnalyticsService', function () {
            index_1.t.describe('api works', function () {
                index_1.t.it('track', index_1.t.inject([index_2.AnalyticsService, angulartics2_1.Angulartics2Segment], function (analyticsService, segment) {
                    analyticsService.devMode(false);
                    index_1.t.spyOn(segment, 'eventTrack');
                    analyticsService.track('click', { category: 'TEST', label: 'Testing' });
                    index_1.t.e(segment.eventTrack).toHaveBeenCalledWith('click', { category: 'TEST', label: 'Testing' });
                }));
                index_1.t.it('track devMode: ON', index_1.t.inject([index_2.AnalyticsService, angulartics2_1.Angulartics2Segment], function (analyticsService, segment) {
                    index_1.t.spyOn(segment, 'eventTrack');
                    analyticsService.devMode(true);
                    analyticsService.track('click', { category: 'TEST', label: 'Testing' });
                    index_1.t.e(segment.eventTrack).not.toHaveBeenCalled();
                }));
                index_1.t.it('pageTrack', index_1.t.inject([index_2.AnalyticsService, angulartics2_1.Angulartics2Segment], function (analyticsService, segment) {
                    index_1.t.spyOn(segment, 'pageTrack');
                    analyticsService.pageTrack('/testing', {});
                    index_1.t.e(segment.pageTrack).toHaveBeenCalledWith('/testing', {});
                }));
                index_1.t.it('pageTrack devMode: ON', index_1.t.inject([index_2.AnalyticsService, angulartics2_1.Angulartics2Segment], function (analyticsService, segment) {
                    index_1.t.spyOn(segment, 'pageTrack');
                    analyticsService.devMode(true);
                    analyticsService.pageTrack('/testing', {});
                    index_1.t.e(segment.pageTrack).not.toHaveBeenCalled();
                }));
                index_1.t.it('identify', index_1.t.inject([index_2.AnalyticsService, angulartics2_1.Angulartics2Segment], function (analyticsService, segment) {
                    index_1.t.spyOn(segment, 'setUserProperties');
                    analyticsService.identify({ userId: 1, name: 'Test', email: 'name@domain.com' });
                    index_1.t.e(segment.setUserProperties).toHaveBeenCalledWith({ userId: 1, name: 'Test', email: 'name@domain.com' });
                }));
                index_1.t.it('identify devMode: ON', index_1.t.inject([index_2.AnalyticsService, angulartics2_1.Angulartics2Segment], function (analyticsService, segment) {
                    index_1.t.spyOn(segment, 'setUserProperties');
                    analyticsService.devMode(true);
                    analyticsService.identify({ userId: 1, name: 'Test', email: 'name@domain.com' });
                    index_1.t.e(segment.setUserProperties).not.toHaveBeenCalled();
                }));
            });
        });
        index_1.t.describe('Analytics (Base Class)', function () {
            index_1.t.describe('should allow descendants to track actions', function () {
                index_1.t.it('track', index_1.t.inject([index_2.AnalyticsService, angulartics2_1.Angulartics2Segment], function (analyticsService, segment) {
                    index_1.t.spyOn(analyticsService, 'track');
                    var analytics = new TestAnalytics(analyticsService);
                    analytics.category = 'TEST';
                    analytics.track('action', { category: analytics.category, label: 'Testing' });
                    index_1.t.e(analyticsService.track).toHaveBeenCalledWith('action', { category: analytics.category, label: 'Testing' });
                }));
            });
        });
    });
}
exports.main = main;
var TestAnalytics = (function (_super) {
    __extends(TestAnalytics, _super);
    function TestAnalytics() {
        return _super.apply(this, arguments) || this;
    }
    return TestAnalytics;
}(index_2.Analytics));
//# sourceMappingURL=analytics.service.spec.js.map