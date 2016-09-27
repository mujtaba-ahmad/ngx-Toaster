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
var common_1 = require('@angular/common');
var toaster_app_component_1 = require('./toaster-app.component');
var toast_component_1 = require('./toast/toast.component');
var toaster_component_1 = require('./toast/toaster.component');
var toaster_service_1 = require('./toast/toaster.service');
var ToasterModule = (function () {
    function ToasterModule() {
    }
    ToasterModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [toaster_component_1.ToasterComponent, toast_component_1.ToastComponent, toaster_app_component_1.ToasterAppComponent],
            providers: [toaster_service_1.ToasterService]
        }), 
        __metadata('design:paramtypes', [])
    ], ToasterModule);
    return ToasterModule;
}());
exports.ToasterModule = ToasterModule;
//# sourceMappingURL=toaster.module.js.map