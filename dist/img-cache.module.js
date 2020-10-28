"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImgCacheModule = void 0;
var core_1 = require("@angular/core");
var img_cache_directive_1 = require("./img-cache.directive");
var img_cache_service_1 = require("./img-cache.service");
var i0 = require("@angular/core");
var ImgCacheModule = /** @class */ (function () {
    function ImgCacheModule() {
    }
    ImgCacheModule.ɵmod = i0.ɵɵdefineNgModule({ type: ImgCacheModule });
    ImgCacheModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ImgCacheModule_Factory(t) { return new (t || ImgCacheModule)(); }, providers: [img_cache_service_1.ImgCacheService] });
    return ImgCacheModule;
}());
exports.ImgCacheModule = ImgCacheModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ImgCacheModule, { declarations: [img_cache_directive_1.ImgCacheDirective], exports: [img_cache_directive_1.ImgCacheDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ImgCacheModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [img_cache_directive_1.ImgCacheDirective],
                exports: [img_cache_directive_1.ImgCacheDirective],
                providers: [img_cache_service_1.ImgCacheService]
            }]
    }], null, null); })();
