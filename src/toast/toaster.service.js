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
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var ToasterService = (function () {
    function ToasterService() {
        this.uniqueCounter = 0;
        this.toastsEmitter = new BehaviorSubject_1.BehaviorSubject(this.toast);
    }
    ToasterService.prototype.getAllToasts = function () {
        return this.toastsEmitter.asObservable();
    };
    ToasterService.prototype.default = function (options) {
        this.add(options, '', true, 0, 'default');
    };
    ToasterService.prototype.info = function (title, msg, showClose, timeout) {
        this.add(title, msg, showClose, timeout, 'info');
    };
    ToasterService.prototype.success = function (title, msg, showClose, timeout) {
        this.add(title, msg, showClose, timeout, 'success');
    };
    ToasterService.prototype.wait = function (title, msg, showClose, timeout) {
        this.add(title, msg, showClose, timeout, 'wait');
    };
    ToasterService.prototype.error = function (title, msg, showClose, timeout) {
        this.add(title, msg, showClose, timeout, 'error');
    };
    ToasterService.prototype.warning = function (title, msg, showClose, timeout) {
        this.add(title, msg, showClose, timeout, 'warning');
    };
    ToasterService.prototype.add = function (title, msg, showClose, timeout, type) {
        if (!title && !msg) {
            throw new Error('ng2-toaster: No toast title or message specified!');
        }
        this.uniqueCounter++;
        var toast = {
            id: this.uniqueCounter,
            title: title,
            msg: msg,
            showClose: showClose,
            type: 'toaster-type-' + type,
            timeout: timeout
        };
        this.toastsEmitter.next(toast);
    };
    ToasterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ToasterService);
    return ToasterService;
}());
exports.ToasterService = ToasterService;
//# sourceMappingURL=toaster.service.js.map