"use strict";
var angulartics2_1 = require("angulartics2");
var providers_1 = require("angulartics2/dist/providers");
var index_1 = require("../../app/frameworks/analytics/index");
var ns_angulartics2_segment_service_1 = require("./services/ns-angulartics2-segment.service");
exports.NS_ANALYTICS_PROVIDERS = [
    angulartics2_1.Angulartics2,
    { provide: providers_1.Angulartics2Segment, useClass: ns_angulartics2_segment_service_1.NSAngulartics2Segment },
    index_1.AnalyticsService
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNkNBQTRDO0FBQzVDLHlEQUFrRTtBQUdsRSw4REFBd0U7QUFDeEUsOEZBQW1GO0FBRXRFLFFBQUEsc0JBQXNCLEdBQWU7SUFDaEQsMkJBQVk7SUFDWixFQUFFLE9BQU8sRUFBRSwrQkFBbUIsRUFBRSxRQUFRLEVBQUUsdURBQXFCLEVBQUU7SUFDakUsd0JBQWdCO0NBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWJzXG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICdhbmd1bGFydGljczInO1xuaW1wb3J0IHsgQW5ndWxhcnRpY3MyU2VnbWVudCB9IGZyb20gJ2FuZ3VsYXJ0aWNzMi9kaXN0L3Byb3ZpZGVycyc7XG5cbi8vIGFwcFxuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uLy4uL2FwcC9mcmFtZXdvcmtzL2FuYWx5dGljcy9pbmRleCc7XG5pbXBvcnQgeyBOU0FuZ3VsYXJ0aWNzMlNlZ21lbnQgfSBmcm9tICcuL3NlcnZpY2VzL25zLWFuZ3VsYXJ0aWNzMi1zZWdtZW50LnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgTlNfQU5BTFlUSUNTX1BST1ZJREVSUzogQXJyYXk8YW55PiA9IFtcbiAgQW5ndWxhcnRpY3MyLFxuICB7IHByb3ZpZGU6IEFuZ3VsYXJ0aWNzMlNlZ21lbnQsIHVzZUNsYXNzOiBOU0FuZ3VsYXJ0aWNzMlNlZ21lbnQgfSxcbiAgQW5hbHl0aWNzU2VydmljZVxuXTtcbiJdfQ==