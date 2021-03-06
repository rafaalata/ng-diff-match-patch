/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
import { DiffMatchPatchService } from './diffMatchPatch.service';
var LineDiffDirective = /** @class */ (function () {
    function LineDiffDirective(el, dmp) {
        this.el = el;
        this.dmp = dmp;
    }
    /**
     * @return {?}
     */
    LineDiffDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateHtml();
    };
    /**
     * @return {?}
     */
    LineDiffDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateHtml();
    };
    /**
     * @return {?}
     */
    LineDiffDirective.prototype.updateHtml = /**
     * @return {?}
     */
    function () {
        if (typeof this.left === 'number' || typeof this.left === 'boolean') {
            this.left = this.left.toString();
        }
        if (typeof this.right === 'number' || typeof this.right === 'boolean') {
            this.right = this.right.toString();
        }
        this.el.nativeElement.innerHTML = this.createHtml(this.dmp.getLineDiff(this.left, this.right));
    };
    /**
     * @param {?} diffs
     * @return {?}
     */
    LineDiffDirective.prototype.createHtml = /**
     * @param {?} diffs
     * @return {?}
     */
    function (diffs) {
        /** @type {?} */
        var html;
        html = '<div>';
        try {
            for (var diffs_1 = tslib_1.__values(diffs), diffs_1_1 = diffs_1.next(); !diffs_1_1.done; diffs_1_1 = diffs_1.next()) {
                var diff = diffs_1_1.value;
                if (diff[0] === 0 /* Equal */) {
                    html += '<span class="equal">' + diff[1] + '</span>';
                }
                if (diff[0] === -1 /* Delete */) {
                    html += '<div class=\"del\"> - <del>' + diff[1] + '</del></div>\n';
                }
                if (diff[0] === 1 /* Insert */) {
                    html += '<div class=\"ins\"> + <ins>' + diff[1] + '</ins></div>\n';
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (diffs_1_1 && !diffs_1_1.done && (_a = diffs_1.return)) _a.call(diffs_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        html += '</div>';
        return html;
        var e_1, _a;
    };
    LineDiffDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[lineDiff]',
                },] },
    ];
    /** @nocollapse */
    LineDiffDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DiffMatchPatchService }
    ]; };
    LineDiffDirective.propDecorators = {
        left: [{ type: Input }],
        right: [{ type: Input }]
    };
    return LineDiffDirective;
}());
export { LineDiffDirective };
if (false) {
    /** @type {?} */
    LineDiffDirective.prototype.left;
    /** @type {?} */
    LineDiffDirective.prototype.right;
    /** @type {?} */
    LineDiffDirective.prototype.el;
    /** @type {?} */
    LineDiffDirective.prototype.dmp;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZURpZmYuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZGlmZi1tYXRjaC1wYXRjaC8iLCJzb3VyY2VzIjpbImxpYi9saW5lRGlmZi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzsrQkFXckQsSUFDQTtRQURBLE9BQUUsR0FBRixFQUFFO1FBQ0YsUUFBRyxHQUFILEdBQUc7Ozs7O0lBRU4sb0NBQVE7Ozs7UUFDYixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Ozs7O0lBR2IsdUNBQVc7Ozs7UUFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOzs7OztJQUdaLHNDQUFVOzs7O1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2xDO1FBQ0QsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN0RSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDcEM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7Ozs7SUFJekYsc0NBQVU7Ozs7Y0FBQyxLQUFrQjs7UUFDbkMsSUFBSSxJQUFJLENBQVM7UUFDakIsSUFBSSxHQUFHLE9BQU8sQ0FBQzs7WUFDZixHQUFHLENBQUMsQ0FBYSxJQUFBLFVBQUEsaUJBQUEsS0FBSyxDQUFBLDRCQUFBO2dCQUFqQixJQUFJLElBQUksa0JBQUE7Z0JBQ1gsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxrQkFBaUIsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLElBQUksSUFBSSxzQkFBc0IsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO2lCQUN0RDtnQkFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG9CQUFrQixDQUFDLENBQUMsQ0FBQztvQkFDOUIsSUFBSSxJQUFJLDZCQUE2QixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztpQkFDcEU7Z0JBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBa0IsQ0FBQyxDQUFDLENBQUM7b0JBQzlCLElBQUksSUFBSSw2QkFBNkIsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7aUJBQ3BFO2FBQ0Y7Ozs7Ozs7OztRQUNELElBQUksSUFBSSxRQUFRLENBQUM7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQzs7OztnQkE3Q2YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7OztnQkFObUIsVUFBVTtnQkFDckIscUJBQXFCOzs7dUJBTzNCLEtBQUs7d0JBQ0wsS0FBSzs7NEJBVFI7O1NBT2EsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpZmZNYXRjaFBhdGNoU2VydmljZSB9IGZyb20gJy4vZGlmZk1hdGNoUGF0Y2guc2VydmljZSc7XG5pbXBvcnQgeyBEaWZmLCBEaWZmT3AgfSBmcm9tICcuL2RpZmZNYXRjaFBhdGNoJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2xpbmVEaWZmXScsXG59KVxuZXhwb3J0IGNsYXNzIExpbmVEaWZmRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBsZWZ0OiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xuICBASW5wdXQoKSByaWdodDogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGRtcDogRGlmZk1hdGNoUGF0Y2hTZXJ2aWNlKSB7ICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlSHRtbCgpO1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlSHRtbCgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVIdG1sKCk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgdGhpcy5sZWZ0ID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdGhpcy5sZWZ0ID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdC50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMucmlnaHQgPT09ICdudW1iZXInIHx8IHR5cGVvZiB0aGlzLnJpZ2h0ID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMucmlnaHQgPSB0aGlzLnJpZ2h0LnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmNyZWF0ZUh0bWwodGhpcy5kbXAuZ2V0TGluZURpZmYodGhpcy5sZWZ0LCB0aGlzLnJpZ2h0KSk7XG4gIH1cblxuICAvLyBUT0RPOiBOZWVkIHRvIGZpeCB0aGlzIGZvciBsaW5lIGRpZmZzXG4gIHByaXZhdGUgY3JlYXRlSHRtbChkaWZmczogQXJyYXk8RGlmZj4pOiBzdHJpbmcge1xuICAgIGxldCBodG1sOiBzdHJpbmc7XG4gICAgaHRtbCA9ICc8ZGl2Pic7XG4gICAgZm9yIChsZXQgZGlmZiBvZiBkaWZmcykge1xuICAgICAgaWYgKGRpZmZbMF0gPT09IERpZmZPcC5FcXVhbCkge1xuICAgICAgICBodG1sICs9ICc8c3BhbiBjbGFzcz1cImVxdWFsXCI+JyArIGRpZmZbMV0gKyAnPC9zcGFuPic7XG4gICAgICB9XG4gICAgICBpZiAoZGlmZlswXSA9PT0gRGlmZk9wLkRlbGV0ZSkge1xuICAgICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVxcXCJkZWxcXFwiPiAtIDxkZWw+JyArIGRpZmZbMV0gKyAnPC9kZWw+PC9kaXY+XFxuJztcbiAgICAgIH1cbiAgICAgIGlmIChkaWZmWzBdID09PSBEaWZmT3AuSW5zZXJ0KSB7XG4gICAgICAgIGh0bWwgKz0gJzxkaXYgY2xhc3M9XFxcImluc1xcXCI+ICsgPGlucz4nICsgZGlmZlsxXSArICc8L2lucz48L2Rpdj5cXG4nO1xuICAgICAgfVxuICAgIH1cbiAgICBodG1sICs9ICc8L2Rpdj4nO1xuICAgIHJldHVybiBodG1sO1xuICB9XG59XG4iXX0=