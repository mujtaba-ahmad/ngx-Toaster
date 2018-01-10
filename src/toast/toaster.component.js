"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var toaster_service_1 = require('./toaster.service');
var ToasterComponent = (function () {
    function ToasterComponent(_toasterService) {
        this._toasterService = _toasterService;
        this.position = 'toaster-position-top-right';
        this.limit = 5;
        this.toasts = [];
    }
    ToasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._toasterService.getAllToasts().subscribe(function (toast) {
            if (toast != undefined) {
                _this.toasts.push(toast);
                if (toast.timeout) {
                    _this._setTimeout(toast);
                }
            }
        });
    };
    ToasterComponent.prototype.ngOnChanges = function () {
        this.position = '';
        this.position = this.position.indexOf(ToasterComponent.POSITIONS) > -1 ? this.position : 'top-right';
        this.position = 'toaster-position-' + this.position;
        this.theme = '';
        if (this.theme) {
            this.theme = ToasterComponent.THEMES.indexOf(this.theme) > -1 ? 'toaster-theme-' + this.theme : 'toaster-theme-default';
        }
        else {
            this.theme = 'toaster-theme-default';
        }
    };
    ToasterComponent.prototype._setTimeout = function (toast) {
        var _this = this;
        if (toast.timeout > 0) {
            window.setTimeout(function () {
                _this.clear(toast.id);
            }, toast.timeout);
        }
    };
    ToasterComponent.prototype.clear = function (id) {
        var _this = this;
        if (id) {
            this.toasts.forEach(function (value, key) {
                if (value.id === id) {
                    if (value.onRemove && _this.isFunction(value.onRemove)) {
                        value.onRemove.call(_this, value);
                    }
                    _this.toasts.splice(key, 1);
                }
            });
        }
        else {
            throw new Error('Please provide id of Toast to close');
        }
    };
    ToasterComponent.prototype.isFunction = function (obj) {
        return typeof obj === "function";
    };
    ToasterComponent.prototype.closeToast = function (toast) {
        this.clear(toast.id);
    };
    ToasterComponent.POSITIONS = ['bottom-right', 'bottom-left', 'top-right', 'top-left', 'top-center', 'bottom-center'];
    ToasterComponent.THEMES = ['default', 'material', 'bootstrap'];
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ToasterComponent.prototype, "position", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ToasterComponent.prototype, "theme", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ToasterComponent.prototype, "limit", void 0);
    ToasterComponent = __decorate([
        core_1.Component({
            selector: 'ng2-toaster',
            template: "<div id=\"toaster\" [ngClass]=\"[position]\">\n                    <ng2-toast [theme]=theme *ngFor=\"let toast of toasts\" [toast]=\"toast\" (closeToast)=\"closeToast(toast)\"></ng2-toast>\n                </div>"
        }), 
        __metadata('design:paramtypes', [toaster_service_1.ToasterService])
    ], ToasterComponent);
    return ToasterComponent;
}());
exports.ToasterComponent = ToasterComponent;
//# sourceMappingURL=toaster.component.js.map