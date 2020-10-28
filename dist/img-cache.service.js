"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImgCacheService = void 0;
var core_1 = require("@angular/core");
var ImgCache = require("@chrisben/imgcache.js");
var i0 = require("@angular/core");
var ImgCacheService = /** @class */ (function () {
    function ImgCacheService() {
    }
    ImgCacheService.prototype.init = function (config) {
        if (config === void 0) { config = {}; }
        Object.assign(ImgCache.options, config);
        this.promise = new Promise(function (resolve, reject) {
            ImgCache.init(resolve, reject);
        });
        return this.promise;
    };
    ImgCacheService.prototype.fetchFromCache = function (url) {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.checkInitialised(); })
            .then(function () { return _this.cacheIfNecessary(url); })
            .then(function () { return _this.replaceWithCached(url); })
            .catch(function (err) {
            console.warn(err);
            return url;
        });
    };
    ImgCacheService.prototype.clearCache = function () {
        return new Promise(function (resolve, reject) {
            ImgCache.clearCache(resolve, reject);
        });
    };
    ImgCacheService.prototype.checkInitialised = function () {
        if (!this.promise) {
            throw new Error('ImgCache has not been initialised. Please call `init` before using the library.');
        }
    };
    ImgCacheService.prototype.cacheIfNecessary = function (url) {
        return new Promise(function (resolve, reject) {
            // Check if image is cached
            ImgCache.isCached(url, function (path, success) {
                if (success) {
                    // already cached
                    resolve();
                }
                else {
                    // not there, need to cache the image
                    ImgCache.cacheFile(url, resolve, reject);
                }
            });
        });
    };
    ImgCacheService.prototype.replaceWithCached = function (url) {
        return new Promise(function (resolve, reject) {
            ImgCache.getCachedFileBase64Data(url, function (src, dest) { return resolve(dest); }, function () { return reject(new Error('Could not replace with cached file')); });
        });
    };
    ImgCacheService.ɵfac = function ImgCacheService_Factory(t) { return new (t || ImgCacheService)(); };
    ImgCacheService.ɵprov = i0.ɵɵdefineInjectable({ token: ImgCacheService, factory: ImgCacheService.ɵfac });
    return ImgCacheService;
}());
exports.ImgCacheService = ImgCacheService;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ImgCacheService, [{
        type: core_1.Injectable
    }], null, null); })();
