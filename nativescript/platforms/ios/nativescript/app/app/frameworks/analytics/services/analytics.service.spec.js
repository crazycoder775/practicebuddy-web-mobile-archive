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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TestAnalytics;
}(index_2.Analytics));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLnNlcnZpY2Uuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuYWx5dGljcy5zZXJ2aWNlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsaURBQWdEO0FBQ2hELG1EQUE4RDtBQUc5RCw2Q0FBZ0U7QUFHaEUsMENBQXFDO0FBR3JDLGtDQUF1RDtBQUV2RCxJQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDN0IsT0FBTyxFQUFFLENBQUMsNkJBQW1CLENBQUM7UUFDOUIsU0FBUyxFQUFFO1lBQ1QsMkJBQVksRUFBRSxrQ0FBbUIsRUFBRSx3QkFBZ0I7U0FDcEQ7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRjtJQUNFLFNBQUMsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFO1FBRXZCLFNBQUMsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUV2QixTQUFDLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1lBRTdCLFNBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO2dCQUN0QixTQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsd0JBQWdCLEVBQUUsa0NBQW1CLENBQUMsRUFBRSxVQUFDLGdCQUFvQixFQUFFLE9BQVc7b0JBQ2hHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDaEMsU0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7b0JBQy9CLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO29CQUN4RSxTQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNKLFNBQUMsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsU0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHdCQUFnQixFQUFFLGtDQUFtQixDQUFDLEVBQUUsVUFBQyxnQkFBb0IsRUFBRSxPQUFXO29CQUM1RyxTQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFHL0IsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMvQixnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztvQkFDeEUsU0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ2pELENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osU0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsU0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHdCQUFnQixFQUFFLGtDQUFtQixDQUFDLEVBQUUsVUFBQyxnQkFBb0IsRUFBRSxPQUFXO29CQUNwRyxTQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztvQkFDOUIsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFHLENBQUMsQ0FBQztvQkFDNUMsU0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUM5RCxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNKLFNBQUMsQ0FBQyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsU0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHdCQUFnQixFQUFFLGtDQUFtQixDQUFDLEVBQUUsVUFBQyxnQkFBb0IsRUFBRSxPQUFXO29CQUNoSCxTQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztvQkFHOUIsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMvQixnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEVBQUcsQ0FBQyxDQUFDO29CQUM1QyxTQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDaEQsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDSixTQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxTQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsd0JBQWdCLEVBQUUsa0NBQW1CLENBQUMsRUFBRSxVQUFDLGdCQUFvQixFQUFFLE9BQVc7b0JBQ25HLFNBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQUM7b0JBQ3RDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO29CQUNqRixTQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7Z0JBQzdHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osU0FBQyxDQUFDLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxTQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsd0JBQWdCLEVBQUUsa0NBQW1CLENBQUMsRUFBRSxVQUFDLGdCQUFvQixFQUFFLE9BQVc7b0JBQy9HLFNBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQUM7b0JBR3RDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDL0IsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7b0JBQ2pGLFNBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3hELENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsU0FBQyxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRTtZQUVuQyxTQUFDLENBQUMsUUFBUSxDQUFDLDJDQUEyQyxFQUFFO2dCQUN0RCxTQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsd0JBQWdCLEVBQUUsa0NBQW1CLENBQUMsRUFBRSxVQUFDLGdCQUFvQixFQUFFLE9BQVc7b0JBQ2hHLFNBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ25DLElBQUksU0FBUyxHQUFHLElBQUksYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQ3BELFNBQVMsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO29CQUM1QixTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO29CQUM5RSxTQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO2dCQUNqSCxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQWhFRCxvQkFnRUM7QUFFRDtJQUE0QixpQ0FBUztJQUFyQzs7SUFBd0MsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQUF6QyxDQUE0QixpQkFBUyxHQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBSb3V0ZXJUZXN0aW5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3Rlc3RpbmcnO1xuXG4vLyBsaWJzXG5pbXBvcnQgeyBBbmd1bGFydGljczIsIEFuZ3VsYXJ0aWNzMlNlZ21lbnR9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XG5cbi8vIGFwcFxuaW1wb3J0IHsgdCB9IGZyb20gJy4uLy4uL3Rlc3QvaW5kZXgnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UsIEFuYWx5dGljcyB9IGZyb20gJy4uL2luZGV4JztcblxuY29uc3QgdGVzdE1vZHVsZUNvbmZpZyA9ICgpID0+IHtcbiAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbUm91dGVyVGVzdGluZ01vZHVsZV0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICBBbmd1bGFydGljczIsIEFuZ3VsYXJ0aWNzMlNlZ21lbnQsIEFuYWx5dGljc1NlcnZpY2VcbiAgICBdXG4gIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1haW4oKSB7XG4gIHQuZGVzY3JpYmUoJ2FuYWx5dGljczonLCAoKSA9PiB7XG5cbiAgICB0LmJlKHRlc3RNb2R1bGVDb25maWcpO1xuXG4gICAgdC5kZXNjcmliZSgnQW5hbHl0aWNzU2VydmljZScsICgpID0+IHtcblxuICAgICAgdC5kZXNjcmliZSgnYXBpIHdvcmtzJywgKCkgPT4ge1xuICAgICAgICB0Lml0KCd0cmFjaycsIHQuaW5qZWN0KFtBbmFseXRpY3NTZXJ2aWNlLCBBbmd1bGFydGljczJTZWdtZW50XSwgKGFuYWx5dGljc1NlcnZpY2U6YW55LCBzZWdtZW50OmFueSkgPT4ge1xuICAgICAgICAgIGFuYWx5dGljc1NlcnZpY2UuZGV2TW9kZShmYWxzZSk7XG4gICAgICAgICAgdC5zcHlPbihzZWdtZW50LCAnZXZlbnRUcmFjaycpO1xuICAgICAgICAgIGFuYWx5dGljc1NlcnZpY2UudHJhY2soJ2NsaWNrJywgeyBjYXRlZ29yeTogJ1RFU1QnLCBsYWJlbDogJ1Rlc3RpbmcnIH0pO1xuICAgICAgICAgIHQuZShzZWdtZW50LmV2ZW50VHJhY2spLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKCdjbGljaycsIHsgY2F0ZWdvcnk6ICdURVNUJywgbGFiZWw6ICdUZXN0aW5nJyB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0Lml0KCd0cmFjayBkZXZNb2RlOiBPTicsIHQuaW5qZWN0KFtBbmFseXRpY3NTZXJ2aWNlLCBBbmd1bGFydGljczJTZWdtZW50XSwgKGFuYWx5dGljc1NlcnZpY2U6YW55LCBzZWdtZW50OmFueSkgPT4ge1xuICAgICAgICAgIHQuc3B5T24oc2VnbWVudCwgJ2V2ZW50VHJhY2snKTtcblxuICAgICAgICAgIC8vIGRldiBtb2RlOiBzaG91bGRuJ3QgdHJhY2sgYW55dGhpbmdcbiAgICAgICAgICBhbmFseXRpY3NTZXJ2aWNlLmRldk1vZGUodHJ1ZSk7XG4gICAgICAgICAgYW5hbHl0aWNzU2VydmljZS50cmFjaygnY2xpY2snLCB7IGNhdGVnb3J5OiAnVEVTVCcsIGxhYmVsOiAnVGVzdGluZycgfSk7XG4gICAgICAgICAgdC5lKHNlZ21lbnQuZXZlbnRUcmFjaykubm90LnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0Lml0KCdwYWdlVHJhY2snLCB0LmluamVjdChbQW5hbHl0aWNzU2VydmljZSwgQW5ndWxhcnRpY3MyU2VnbWVudF0sIChhbmFseXRpY3NTZXJ2aWNlOmFueSwgc2VnbWVudDphbnkpID0+IHtcbiAgICAgICAgICB0LnNweU9uKHNlZ21lbnQsICdwYWdlVHJhY2snKTtcbiAgICAgICAgICBhbmFseXRpY3NTZXJ2aWNlLnBhZ2VUcmFjaygnL3Rlc3RpbmcnLCB7IH0pO1xuICAgICAgICAgIHQuZShzZWdtZW50LnBhZ2VUcmFjaykudG9IYXZlQmVlbkNhbGxlZFdpdGgoJy90ZXN0aW5nJywge30pO1xuICAgICAgICB9KSk7XG4gICAgICAgIHQuaXQoJ3BhZ2VUcmFjayBkZXZNb2RlOiBPTicsIHQuaW5qZWN0KFtBbmFseXRpY3NTZXJ2aWNlLCBBbmd1bGFydGljczJTZWdtZW50XSwgKGFuYWx5dGljc1NlcnZpY2U6YW55LCBzZWdtZW50OmFueSkgPT4ge1xuICAgICAgICAgIHQuc3B5T24oc2VnbWVudCwgJ3BhZ2VUcmFjaycpO1xuXG4gICAgICAgICAgLy8gZGV2IG1vZGU6IHNob3VsZG4ndCB0cmFjayBhbnl0aGluZ1xuICAgICAgICAgIGFuYWx5dGljc1NlcnZpY2UuZGV2TW9kZSh0cnVlKTtcbiAgICAgICAgICBhbmFseXRpY3NTZXJ2aWNlLnBhZ2VUcmFjaygnL3Rlc3RpbmcnLCB7IH0pO1xuICAgICAgICAgIHQuZShzZWdtZW50LnBhZ2VUcmFjaykubm90LnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0Lml0KCdpZGVudGlmeScsIHQuaW5qZWN0KFtBbmFseXRpY3NTZXJ2aWNlLCBBbmd1bGFydGljczJTZWdtZW50XSwgKGFuYWx5dGljc1NlcnZpY2U6YW55LCBzZWdtZW50OmFueSkgPT4ge1xuICAgICAgICAgIHQuc3B5T24oc2VnbWVudCwgJ3NldFVzZXJQcm9wZXJ0aWVzJyk7XG4gICAgICAgICAgYW5hbHl0aWNzU2VydmljZS5pZGVudGlmeSh7IHVzZXJJZDogMSwgbmFtZTogJ1Rlc3QnLCBlbWFpbDogJ25hbWVAZG9tYWluLmNvbScgfSk7XG4gICAgICAgICAgdC5lKHNlZ21lbnQuc2V0VXNlclByb3BlcnRpZXMpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKHsgdXNlcklkOiAxLCBuYW1lOiAnVGVzdCcsIGVtYWlsOiAnbmFtZUBkb21haW4uY29tJyB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0Lml0KCdpZGVudGlmeSBkZXZNb2RlOiBPTicsIHQuaW5qZWN0KFtBbmFseXRpY3NTZXJ2aWNlLCBBbmd1bGFydGljczJTZWdtZW50XSwgKGFuYWx5dGljc1NlcnZpY2U6YW55LCBzZWdtZW50OmFueSkgPT4ge1xuICAgICAgICAgIHQuc3B5T24oc2VnbWVudCwgJ3NldFVzZXJQcm9wZXJ0aWVzJyk7XG5cbiAgICAgICAgICAvLyBkZXYgbW9kZTogc2hvdWxkbid0IHRyYWNrIGFueXRoaW5nXG4gICAgICAgICAgYW5hbHl0aWNzU2VydmljZS5kZXZNb2RlKHRydWUpO1xuICAgICAgICAgIGFuYWx5dGljc1NlcnZpY2UuaWRlbnRpZnkoeyB1c2VySWQ6IDEsIG5hbWU6ICdUZXN0JywgZW1haWw6ICduYW1lQGRvbWFpbi5jb20nIH0pO1xuICAgICAgICAgIHQuZShzZWdtZW50LnNldFVzZXJQcm9wZXJ0aWVzKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHQuZGVzY3JpYmUoJ0FuYWx5dGljcyAoQmFzZSBDbGFzcyknLCAoKSA9PiB7XG5cbiAgICAgIHQuZGVzY3JpYmUoJ3Nob3VsZCBhbGxvdyBkZXNjZW5kYW50cyB0byB0cmFjayBhY3Rpb25zJywgKCkgPT4ge1xuICAgICAgICB0Lml0KCd0cmFjaycsIHQuaW5qZWN0KFtBbmFseXRpY3NTZXJ2aWNlLCBBbmd1bGFydGljczJTZWdtZW50XSwgKGFuYWx5dGljc1NlcnZpY2U6YW55LCBzZWdtZW50OmFueSkgPT4ge1xuICAgICAgICAgIHQuc3B5T24oYW5hbHl0aWNzU2VydmljZSwgJ3RyYWNrJyk7XG4gICAgICAgICAgbGV0IGFuYWx5dGljcyA9IG5ldyBUZXN0QW5hbHl0aWNzKGFuYWx5dGljc1NlcnZpY2UpO1xuICAgICAgICAgIGFuYWx5dGljcy5jYXRlZ29yeSA9ICdURVNUJztcbiAgICAgICAgICBhbmFseXRpY3MudHJhY2soJ2FjdGlvbicsIHsgY2F0ZWdvcnk6IGFuYWx5dGljcy5jYXRlZ29yeSwgbGFiZWw6ICdUZXN0aW5nJyB9KTtcbiAgICAgICAgICB0LmUoYW5hbHl0aWNzU2VydmljZS50cmFjaykudG9IYXZlQmVlbkNhbGxlZFdpdGgoJ2FjdGlvbicsIHsgY2F0ZWdvcnk6IGFuYWx5dGljcy5jYXRlZ29yeSwgbGFiZWw6ICdUZXN0aW5nJyB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5jbGFzcyBUZXN0QW5hbHl0aWNzIGV4dGVuZHMgQW5hbHl0aWNzIHsgfVxuIl19