"use strict";
var index_1 = require("../../../analytics/index");
var index_2 = require("../../index");
var window_mock_1 = require("../mocks/window.mock");
var router_extensions_mock_1 = require("../mocks/router-extensions.mock");
function TEST_CORE_PROVIDERS(options) {
    var providers = [
        { provide: index_2.ConsoleService, useValue: console },
        { provide: index_2.WindowService, useClass: (options && options.window) || window_mock_1.WindowMock },
        index_2.LogService,
        index_1.ANALYTICS_PROVIDERS,
        { provide: index_2.RouterExtensions, useClass: router_extensions_mock_1.RouterExtensionsMock },
    ];
    return providers;
}
exports.TEST_CORE_PROVIDERS = TEST_CORE_PROVIDERS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGtEQUErRDtBQUcvRCxxQ0FBMEY7QUFHMUYsb0RBQWtEO0FBQ2xELDBFQUF1RTtBQUV2RSw2QkFBb0MsT0FBYTtJQUkvQyxJQUFJLFNBQVMsR0FBRztRQUNkLEVBQUUsT0FBTyxFQUFFLHNCQUFjLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRTtRQUM5QyxFQUFFLE9BQU8sRUFBRSxxQkFBYSxFQUFFLFFBQVEsRUFBRSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksd0JBQVUsRUFBRTtRQUMvRSxrQkFBVTtRQUNWLDJCQUFtQjtRQUNuQixFQUFFLE9BQU8sRUFBRSx3QkFBZ0IsRUFBRSxRQUFRLEVBQUUsNkNBQW9CLEVBQUU7S0FDOUQsQ0FBQztJQUVGLE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDbkIsQ0FBQztBQWJELGtEQWFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwXG5pbXBvcnQgeyBBTkFMWVRJQ1NfUFJPVklERVJTIH0gZnJvbSAnLi4vLi4vLi4vYW5hbHl0aWNzL2luZGV4JztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlLCBDb25zb2xlU2VydmljZSwgTG9nU2VydmljZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJy4uLy4uL2luZGV4JztcblxuLy8gbW9ja3NcbmltcG9ydCB7IFdpbmRvd01vY2sgfSBmcm9tICcuLi9tb2Nrcy93aW5kb3cubW9jayc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zTW9jayB9IGZyb20gJy4uL21vY2tzL3JvdXRlci1leHRlbnNpb25zLm1vY2snO1xuXG5leHBvcnQgZnVuY3Rpb24gVEVTVF9DT1JFX1BST1ZJREVSUyhvcHRpb25zPzogYW55KTogQXJyYXk8YW55PiB7XG4gIC8vIG9wdGlvbnM6XG4gIC8vIHdpbmRvdzogICA9IGN1c3RvbSB3aW5kb3cgbW9jayAobWFpbmx5IGZvciBjaGFuZ2luZyBvdXQgbGFuZ3VhZ2UpXG5cbiAgbGV0IHByb3ZpZGVycyA9IFtcbiAgICB7IHByb3ZpZGU6IENvbnNvbGVTZXJ2aWNlLCB1c2VWYWx1ZTogY29uc29sZSB9LFxuICAgIHsgcHJvdmlkZTogV2luZG93U2VydmljZSwgdXNlQ2xhc3M6IChvcHRpb25zICYmIG9wdGlvbnMud2luZG93KSB8fCBXaW5kb3dNb2NrIH0sXG4gICAgTG9nU2VydmljZSxcbiAgICBBTkFMWVRJQ1NfUFJPVklERVJTLFxuICAgIHsgcHJvdmlkZTogUm91dGVyRXh0ZW5zaW9ucywgdXNlQ2xhc3M6IFJvdXRlckV4dGVuc2lvbnNNb2NrIH0sXG4gIF07XG5cbiAgcmV0dXJuIHByb3ZpZGVycztcbn1cbiJdfQ==