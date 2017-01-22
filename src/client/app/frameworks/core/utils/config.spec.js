"use strict";
var _ = require("lodash");
var index_1 = require("../../test/index");
var config_1 = require("./config");
function main() {
    index_1.t.describe('core: Config', function () {
        index_1.t.be(function () { return config_1.Config.RESET(); });
        index_1.t.it('ENVIRONMENT', function () {
            index_1.t.e(config_1.Config.ENVIRONMENT).toBeDefined();
        });
        index_1.t.it('PLATFORMS', function () {
            index_1.t.e(_.keys(config_1.Config.PLATFORMS).length).toBe(4);
            index_1.t.e(config_1.Config.PLATFORM_TARGET).toBeDefined();
            index_1.t.e(config_1.Config.PLATFORMS.WEB).toBe('web');
            index_1.t.e(config_1.Config.PLATFORMS.MOBILE_NATIVE).toBe('mobile_native');
            index_1.t.e(config_1.Config.PLATFORMS.MOBILE_HYBRID).toBe('mobile_hybrid');
            index_1.t.e(config_1.Config.PLATFORMS.DESKTOP).toBe('desktop');
            index_1.t.e(config_1.Config.IS_WEB).toBeDefined();
            index_1.t.e(config_1.Config.IS_MOBILE_NATIVE).toBeDefined();
            index_1.t.e(config_1.Config.IS_MOBILE_HYBRID).toBeDefined();
            index_1.t.e(config_1.Config.IS_DESKTOP).toBeDefined();
        });
        index_1.t.it('DEBUG', function () {
            index_1.t.e(config_1.Config.DEBUG.LEVEL_1).toBe(false);
            index_1.t.e(config_1.Config.DEBUG.LEVEL_2).toBe(false);
            index_1.t.e(config_1.Config.DEBUG.LEVEL_3).toBe(false);
            index_1.t.e(config_1.Config.DEBUG.LEVEL_4).toBe(false);
            index_1.t.e(config_1.Config.IS_DEBUG_MODE()).toBe(false);
        });
    });
}
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsMEJBQTRCO0FBRzVCLDBDQUFxQztBQUdyQyxtQ0FBa0M7QUFFbEM7SUFDRSxTQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRTtRQUN6QixTQUFDLENBQUMsRUFBRSxDQUFDLGNBQU0sT0FBQSxlQUFNLENBQUMsS0FBSyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUM7UUFFM0IsU0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDbEIsU0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxTQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRTtZQUNoQixTQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxTQUFDLENBQUMsQ0FBQyxDQUFDLGVBQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMxQyxTQUFDLENBQUMsQ0FBQyxDQUFDLGVBQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLFNBQUMsQ0FBQyxDQUFDLENBQUMsZUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDMUQsU0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUMxRCxTQUFDLENBQUMsQ0FBQyxDQUFDLGVBQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRTlDLFNBQUMsQ0FBQyxDQUFDLENBQUMsZUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2pDLFNBQUMsQ0FBQyxDQUFDLENBQUMsZUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDM0MsU0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMzQyxTQUFDLENBQUMsQ0FBQyxDQUFDLGVBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILFNBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQ1osU0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QyxTQUFDLENBQUMsQ0FBQyxDQUFDLGVBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLFNBQUMsQ0FBQyxDQUFDLENBQUMsZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEMsU0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QyxTQUFDLENBQUMsQ0FBQyxDQUFDLGVBQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQTVCRCxvQkE0QkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWJzXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbi8vIGFwcFxuaW1wb3J0IHsgdCB9IGZyb20gJy4uLy4uL3Rlc3QvaW5kZXgnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1haW4oKSB7XG4gIHQuZGVzY3JpYmUoJ2NvcmU6IENvbmZpZycsICgpID0+IHtcbiAgICB0LmJlKCgpID0+IENvbmZpZy5SRVNFVCgpKTtcblxuICAgIHQuaXQoJ0VOVklST05NRU5UJywgKCkgPT4ge1xuICAgICAgdC5lKENvbmZpZy5FTlZJUk9OTUVOVCkudG9CZURlZmluZWQoKTtcbiAgICB9KTtcbiAgICB0Lml0KCdQTEFURk9STVMnLCAoKSA9PiB7XG4gICAgICB0LmUoXy5rZXlzKENvbmZpZy5QTEFURk9STVMpLmxlbmd0aCkudG9CZSg0KTtcbiAgICAgIHQuZShDb25maWcuUExBVEZPUk1fVEFSR0VUKS50b0JlRGVmaW5lZCgpO1xuICAgICAgdC5lKENvbmZpZy5QTEFURk9STVMuV0VCKS50b0JlKCd3ZWInKTtcbiAgICAgIHQuZShDb25maWcuUExBVEZPUk1TLk1PQklMRV9OQVRJVkUpLnRvQmUoJ21vYmlsZV9uYXRpdmUnKTtcbiAgICAgIHQuZShDb25maWcuUExBVEZPUk1TLk1PQklMRV9IWUJSSUQpLnRvQmUoJ21vYmlsZV9oeWJyaWQnKTtcbiAgICAgIHQuZShDb25maWcuUExBVEZPUk1TLkRFU0tUT1ApLnRvQmUoJ2Rlc2t0b3AnKTtcblxuICAgICAgdC5lKENvbmZpZy5JU19XRUIpLnRvQmVEZWZpbmVkKCk7XG4gICAgICB0LmUoQ29uZmlnLklTX01PQklMRV9OQVRJVkUpLnRvQmVEZWZpbmVkKCk7XG4gICAgICB0LmUoQ29uZmlnLklTX01PQklMRV9IWUJSSUQpLnRvQmVEZWZpbmVkKCk7XG4gICAgICB0LmUoQ29uZmlnLklTX0RFU0tUT1ApLnRvQmVEZWZpbmVkKCk7XG4gICAgfSk7XG4gICAgdC5pdCgnREVCVUcnLCAoKSA9PiB7XG4gICAgICB0LmUoQ29uZmlnLkRFQlVHLkxFVkVMXzEpLnRvQmUoZmFsc2UpO1xuICAgICAgdC5lKENvbmZpZy5ERUJVRy5MRVZFTF8yKS50b0JlKGZhbHNlKTtcbiAgICAgIHQuZShDb25maWcuREVCVUcuTEVWRUxfMykudG9CZShmYWxzZSk7XG4gICAgICB0LmUoQ29uZmlnLkRFQlVHLkxFVkVMXzQpLnRvQmUoZmFsc2UpO1xuICAgICAgdC5lKENvbmZpZy5JU19ERUJVR19NT0RFKCkpLnRvQmUoZmFsc2UpO1xuICAgIH0pO1xuICB9KTtcbn1cbiJdfQ==