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
var toaster_service_1 = require('./toast/toaster.service');
var ToasterAppComponent = (function () {
    function ToasterAppComponent(_toaster) {
        this._toaster = _toaster;
        this.position = '';
        this.theme = '';
    }
    ToasterAppComponent.prototype.addToast = function () {
        // Add see all possible types in one shot
        this._toaster.success('title', 'message', true, 1000);
        this._toaster.error('title', 'message', true, 2000);
        this._toaster.info('title', 'message', true, 3000);
        this._toaster.warning('title', 'message', true, 4000);
        this._toaster.wait('title', 'message', true, 0);
    };
    ToasterAppComponent.prototype.addErrorToast = function () {
        // Add see all possible types in one shot
        this._toaster.success('title', 'message', true, 1000);
        this._toaster.error('title', 'message', true, 2000);
        this._toaster.info('title', 'message', true, 3000);
        this._toaster.warning('title', 'message', true, 4000);
        this._toaster.wait('title', 'message', true, 5000);
    };
    ToasterAppComponent = __decorate([
        core_1.Component({
            selector: 'toaster',
            template: "<h1>Angular toaster</h1>\n    <button (click)=\"addToast()\">Add success Toast</button><button (click)=\"addErrorToast()\">Add error Toast</button>\n                <ng2-toaster [position]=position [theme]=theme ></ng2-toaster>",
            providers: [toaster_service_1.ToasterService]
        }), 
        __metadata('design:paramtypes', [toaster_service_1.ToasterService])
    ], ToasterAppComponent);
    return ToasterAppComponent;
}());
exports.ToasterAppComponent = ToasterAppComponent;
//# sourceMappingURL=toaster-app.component.js.map