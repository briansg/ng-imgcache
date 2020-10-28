import { ElementRef, Renderer2 } from '@angular/core';
import { ImgCacheService } from './img-cache.service';
import * as i0 from "@angular/core";
export declare class ImgCacheDirective {
    private imgCache;
    private el;
    private renderer;
    constructor(imgCache: ImgCacheService, el: ElementRef, renderer: Renderer2);
    set src(val: any);
    set bgUrl(val: any);
    static ɵfac: i0.ɵɵFactoryDef<ImgCacheDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ImgCacheDirective, "[img-cache]", never, { "src": "img-cache-src"; "bgUrl": "img-cache-bg-url"; }, {}, never>;
}
