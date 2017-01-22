"use strict";
var index_1 = require("../../test/index");
var app_config_1 = require("./app-config");
function main() {
    index_1.t.describe('app: AppConfig', function () {
        index_1.t.it('SUPPORTED_LANGUAGES', function () {
            index_1.t.e(app_config_1.AppConfig.SUPPORTED_LANGUAGES.length).toBe(5);
            index_1.t.e(app_config_1.AppConfig.SUPPORTED_LANGUAGES[0].code).toBe('en');
            index_1.t.e(app_config_1.AppConfig.SUPPORTED_LANGUAGES[1].code).toBe('es');
            index_1.t.e(app_config_1.AppConfig.SUPPORTED_LANGUAGES[2].code).toBe('fr');
            index_1.t.e(app_config_1.AppConfig.SUPPORTED_LANGUAGES[3].code).toBe('ru');
            index_1.t.e(app_config_1.AppConfig.SUPPORTED_LANGUAGES[4].code).toBe('bg');
        });
    });
}
exports.main = main;
//# sourceMappingURL=app-config.spec.js.map