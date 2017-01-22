"use strict";
var testing_1 = require("@angular/core/testing");
var index_1 = require("../../test/index");
var index_2 = require("../index");
var providers = [
    { provide: index_2.ConsoleService, useValue: console },
    index_2.LogService
];
function main() {
    index_1.t.describe('core: LogService', function () {
        index_1.t.be(function () {
            index_2.Config.RESET();
            index_1.t.spyOn(console, 'log');
            index_1.t.spyOn(console, 'error');
            index_1.t.spyOn(console, 'warn');
            index_1.t.spyOn(console, 'info');
            testing_1.TestBed.configureTestingModule({
                providers: providers
            });
        });
        index_1.t.describe('api', function () {
            index_1.t.it('sanity', index_1.t.inject([index_2.LogService], function (log) {
                index_1.t.e(log.debug).toBeDefined();
                index_1.t.e(log.error).toBeDefined();
                index_1.t.e(log.warn).toBeDefined();
                index_1.t.e(log.info).toBeDefined();
            }));
            index_1.t.it('should not log anything by default', index_1.t.inject([index_2.LogService], function (log) {
                log.debug('debug');
                index_1.t.e(console.log).not.toHaveBeenCalledWith('debug');
                log.error('error');
                index_1.t.e(console.error).not.toHaveBeenCalledWith('error');
                log.warn('warn');
                index_1.t.e(console.warn).not.toHaveBeenCalledWith('warn');
                log.info('info');
                index_1.t.e(console.info).not.toHaveBeenCalledWith('info');
            }));
        });
        index_1.t.describe('debug levels', function () {
            index_1.t.be(function () {
                index_2.Config.RESET();
            });
            index_1.t.it('LEVEL_4: everything', index_1.t.inject([index_2.LogService], function (log) {
                index_2.Config.DEBUG.LEVEL_4 = true;
                log.debug('debug');
                index_1.t.e(console.log).toHaveBeenCalledWith('debug');
                log.error('error');
                index_1.t.e(console.error).toHaveBeenCalledWith('error');
                log.warn('warn');
                index_1.t.e(console.warn).toHaveBeenCalledWith('warn');
                log.info('info');
                index_1.t.e(console.info).toHaveBeenCalledWith('info');
            }));
            index_1.t.it('LEVEL_3: error only', index_1.t.inject([index_2.LogService], function (log) {
                index_2.Config.DEBUG.LEVEL_3 = true;
                log.debug('debug');
                index_1.t.e(console.log).not.toHaveBeenCalledWith('debug');
                log.error('error');
                index_1.t.e(console.error).toHaveBeenCalledWith('error');
                log.warn('warn');
                index_1.t.e(console.warn).not.toHaveBeenCalledWith('warn');
                log.info('info');
                index_1.t.e(console.info).not.toHaveBeenCalledWith('info');
                index_2.Config.DEBUG.LEVEL_4 = true;
                log.debug('debug w/level_4');
                index_1.t.e(console.log).toHaveBeenCalledWith('debug w/level_4');
                log.error('error w/level_4');
                index_1.t.e(console.error).toHaveBeenCalledWith('error w/level_4');
                log.warn('warn w/level_4');
                index_1.t.e(console.warn).toHaveBeenCalledWith('warn w/level_4');
                log.info('info w/level_4');
                index_1.t.e(console.info).toHaveBeenCalledWith('info w/level_4');
            }));
            index_1.t.it('LEVEL_2: warn only', index_1.t.inject([index_2.LogService], function (log) {
                index_2.Config.DEBUG.LEVEL_2 = true;
                log.debug('debug');
                index_1.t.e(console.log).not.toHaveBeenCalledWith('debug');
                log.error('error');
                index_1.t.e(console.error).not.toHaveBeenCalledWith('error');
                log.warn('warn');
                index_1.t.e(console.warn).toHaveBeenCalledWith('warn');
                log.info('info');
                index_1.t.e(console.info).not.toHaveBeenCalledWith('info');
            }));
            index_1.t.it('LEVEL_1: info only', index_1.t.inject([index_2.LogService], function (log) {
                index_2.Config.DEBUG.LEVEL_1 = true;
                log.debug('debug');
                index_1.t.e(console.log).not.toHaveBeenCalledWith('debug');
                log.error('error');
                index_1.t.e(console.error).not.toHaveBeenCalledWith('error');
                log.warn('warn');
                index_1.t.e(console.warn).not.toHaveBeenCalledWith('warn');
                log.info('info');
                index_1.t.e(console.info).toHaveBeenCalledWith('info');
            }));
        });
    });
}
exports.main = main;
//# sourceMappingURL=log.service.spec.js.map