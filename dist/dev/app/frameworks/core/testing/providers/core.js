"use strict";
var index_1 = require('../../../analytics/index');
var index_2 = require('../../index');
var window_mock_1 = require('../mocks/window.mock');
var router_extensions_mock_1 = require('../mocks/router-extensions.mock');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL2NvcmUvdGVzdGluZy9wcm92aWRlcnMvY29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esc0JBQW9DLDBCQUEwQixDQUFDLENBQUE7QUFHL0Qsc0JBQTRFLGFBQWEsQ0FBQyxDQUFBO0FBRzFGLDRCQUEyQixzQkFBc0IsQ0FBQyxDQUFBO0FBQ2xELHVDQUFxQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBRXZFLDZCQUFvQyxPQUFhO0lBSS9DLElBQUksU0FBUyxHQUFHO1FBQ2QsRUFBRSxPQUFPLEVBQUUsc0JBQWMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO1FBQzlDLEVBQUUsT0FBTyxFQUFFLHFCQUFhLEVBQUUsUUFBUSxFQUFFLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSx3QkFBVSxFQUFFO1FBQy9FLGtCQUFVO1FBQ1YsMkJBQW1CO1FBQ25CLEVBQUUsT0FBTyxFQUFFLHdCQUFnQixFQUFFLFFBQVEsRUFBRSw2Q0FBb0IsRUFBRTtLQUM5RCxDQUFDO0lBRUYsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBYmUsMkJBQW1CLHNCQWFsQyxDQUFBIiwiZmlsZSI6ImFwcC9mcmFtZXdvcmtzL2NvcmUvdGVzdGluZy9wcm92aWRlcnMvY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcFxuaW1wb3J0IHsgQU5BTFlUSUNTX1BST1ZJREVSUyB9IGZyb20gJy4uLy4uLy4uL2FuYWx5dGljcy9pbmRleCc7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgV2luZG93U2VydmljZSwgQ29uc29sZVNlcnZpY2UsIExvZ1NlcnZpY2UsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICcuLi8uLi9pbmRleCc7XG5cbi8vIG1vY2tzXG5pbXBvcnQgeyBXaW5kb3dNb2NrIH0gZnJvbSAnLi4vbW9ja3Mvd2luZG93Lm1vY2snO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9uc01vY2sgfSBmcm9tICcuLi9tb2Nrcy9yb3V0ZXItZXh0ZW5zaW9ucy5tb2NrJztcblxuZXhwb3J0IGZ1bmN0aW9uIFRFU1RfQ09SRV9QUk9WSURFUlMob3B0aW9ucz86IGFueSk6IEFycmF5PGFueT4ge1xuICAvLyBvcHRpb25zOlxuICAvLyB3aW5kb3c6ICAgPSBjdXN0b20gd2luZG93IG1vY2sgKG1haW5seSBmb3IgY2hhbmdpbmcgb3V0IGxhbmd1YWdlKVxuXG4gIGxldCBwcm92aWRlcnMgPSBbXG4gICAgeyBwcm92aWRlOiBDb25zb2xlU2VydmljZSwgdXNlVmFsdWU6IGNvbnNvbGUgfSxcbiAgICB7IHByb3ZpZGU6IFdpbmRvd1NlcnZpY2UsIHVzZUNsYXNzOiAob3B0aW9ucyAmJiBvcHRpb25zLndpbmRvdykgfHwgV2luZG93TW9jayB9LFxuICAgIExvZ1NlcnZpY2UsXG4gICAgQU5BTFlUSUNTX1BST1ZJREVSUyxcbiAgICB7IHByb3ZpZGU6IFJvdXRlckV4dGVuc2lvbnMsIHVzZUNsYXNzOiBSb3V0ZXJFeHRlbnNpb25zTW9jayB9LFxuICBdO1xuXG4gIHJldHVybiBwcm92aWRlcnM7XG59XG4iXX0=