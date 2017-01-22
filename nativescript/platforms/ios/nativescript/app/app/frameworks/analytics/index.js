"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var angulartics2_1 = require("angulartics2");
var providers_1 = require("angulartics2/dist/providers");
var analytics_service_1 = require("./services/analytics.service");
exports.ANALYTICS_PROVIDERS = [
    angulartics2_1.Angulartics2,
    providers_1.Angulartics2Segment,
    analytics_service_1.AnalyticsService
];
__export(require("./services/analytics.service"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsNkNBQTRDO0FBQzVDLHlEQUFrRTtBQUdsRSxrRUFBZ0U7QUFFbkQsUUFBQSxtQkFBbUIsR0FBZTtJQUM3QywyQkFBWTtJQUNaLCtCQUFtQjtJQUNuQixvQ0FBZ0I7Q0FDakIsQ0FBQztBQUdGLGtEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYnNcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XG5pbXBvcnQgeyBBbmd1bGFydGljczJTZWdtZW50IH0gZnJvbSAnYW5ndWxhcnRpY3MyL2Rpc3QvcHJvdmlkZXJzJztcblxuLy8gYXBwXG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hbmFseXRpY3Muc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBBTkFMWVRJQ1NfUFJPVklERVJTOiBBcnJheTxhbnk+ID0gW1xuICBBbmd1bGFydGljczIsXG4gIEFuZ3VsYXJ0aWNzMlNlZ21lbnQsXG4gIEFuYWx5dGljc1NlcnZpY2Vcbl07XG5cbi8vIHNlcnZpY2VzXG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzL2FuYWx5dGljcy5zZXJ2aWNlJztcbiJdfQ==