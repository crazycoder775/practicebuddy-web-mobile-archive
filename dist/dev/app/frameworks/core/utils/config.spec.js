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
//# sourceMappingURL=config.spec.js.map