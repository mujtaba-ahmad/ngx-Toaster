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
var IToastComponent = (function () {
    function IToastComponent() {
        this.limit = 5;
    }
    IToastComponent.prototype.setPositionClass = function (position) {
        return "toasty-position-" + position;
    };
    IToastComponent.prototype.ngOnInit = function () {
        this.toasts = [];
        this.position = this.setPositionClass(this.position);
    };
    IToastComponent.prototype.ngOnChanges = function () {
        if (this.toast)
            this.toasts.push(this.toast);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], IToastComponent.prototype, "toast", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], IToastComponent.prototype, "position", void 0);
    IToastComponent = __decorate([
        core_1.Component({
            selector: 'itoast',
            templateUrl: 'app/itoast/itoast.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], IToastComponent);
    return IToastComponent;
}());
exports.IToastComponent = IToastComponent;
//# sourceMappingURL=itoast.component.js.map