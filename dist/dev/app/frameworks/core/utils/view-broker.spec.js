"use strict";
var index_1 = require("../../test/index");
var config_1 = require("./config");
var view_broker_1 = require("./view-broker");
function main() {
    index_1.t.describe('utilities: ViewBroker', function () {
        index_1.t.be(function () { return config_1.Config.RESET(); });
        index_1.t.it('TEMPLATE_URL: web', function () {
            config_1.Config.PLATFORM_TARGET = config_1.Config.PLATFORMS.WEB;
            index_1.t.e(view_broker_1.ViewBroker.TEMPLATE_URL('./app/components/home/home.html')).toBe('./app/components/home/home.html');
        });
        index_1.t.it('TEMPLATE_URL: mobile_native', function () {
            config_1.Config.PLATFORM_TARGET = config_1.Config.PLATFORMS.MOBILE_NATIVE;
            index_1.t.e(view_broker_1.ViewBroker.TEMPLATE_URL('./app/components/home/home.html')).toBe('./app/components/home/home.tns.html');
        });
        index_1.t.it('TEMPLATE_URL: mobile_hybrid', function () {
            config_1.Config.PLATFORM_TARGET = config_1.Config.PLATFORMS.MOBILE_HYBRID;
            index_1.t.e(view_broker_1.ViewBroker.TEMPLATE_URL('./app/components/home/home.html')).toBe('./app/components/home/home.html');
        });
        index_1.t.it('TEMPLATE_URL: desktop', function () {
            config_1.Config.PLATFORM_TARGET = config_1.Config.PLATFORMS.DESKTOP;
            index_1.t.e(view_broker_1.ViewBroker.TEMPLATE_URL('./app/components/home/home.html')).toBe('./app/components/home/home.html');
        });
    });
}
exports.main = main;
//# sourceMappingURL=view-broker.spec.js.map