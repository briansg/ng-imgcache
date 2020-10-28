"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImgCacheDirective = void 0;
var core_1 = require("@angular/core");
var img_cache_service_1 = require("./img-cache.service");
var i0 = require("@angular/core");
var i1 = require("./img-cache.service");
var ImgCacheDirective = /** @class */ (function () {
    function ImgCacheDirective(imgCache, el, renderer) {
        this.imgCache = imgCache;
        this.el = el;
        this.renderer = renderer;
    }
    Object.defineProperty(ImgCacheDirective.prototype, "src", {
        set: function (val) {
            var _this = this;
            if (val) {
                this.imgCache
                    .fetchFromCache(val)
                    .then(function (cached) {
                    _this.renderer.setAttribute(_this.el.nativeElement, 'src', cached);
                });
            }
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ImgCacheDirective.prototype, "bgUrl", {
        set: function (val) {
            var _this = this;
            if (val) {
                this.imgCache
                    .fetchFromCache(val)
                    .then(function (cached) {
                    _this.renderer.setStyle(_this.el.nativeElement, 'background-image', "url('" + cached + "')");
                });
            }
        },
        enumerable: false,
        configurable: true
    });
    ;
    ImgCacheDirective.ɵfac = function ImgCacheDirective_Factory(t) { return new (t || ImgCacheDirective)(i0.ɵɵdirectiveInject(i1.ImgCacheService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    ImgCacheDirective.ɵdir = i0.ɵɵdefineDirective({ type: ImgCacheDirective, selectors: [["", "img-cache", ""]], inputs: { src: ["img-cache-src", "src"], bgUrl: ["img-cache-bg-url", "bgUrl"] } });
    return ImgCacheDirective;
}());
exports.ImgCacheDirective = ImgCacheDirective;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ImgCacheDirective, [{
        type: core_1.Directive,
        args: [{
                selector: '[img-cache]'
            }]
    }], function () { return [{ type: i1.ImgCacheService }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { src: [{
            type: core_1.Input,
            args: ['img-cache-src']
        }], bgUrl: [{
            type: core_1.Input,
            args: ['img-cache-bg-url']
        }] }); })();
