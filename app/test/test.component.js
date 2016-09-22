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
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.addToast = function () {
        this.toast = {
            title: "different",
            msg: "different msg3",
            showClose: true,
            timeout: 0,
            theme: "bootstrap",
            type: "error"
        };
    };
    TestComponent.prototype.addToast1 = function () {
        this.toast = {
            title: "differenfdgfsdst",
            msg: "different msg3dsfsdfsd",
            showClose: true,
            timeout: 5000,
            theme: "material",
            type: "wait"
        };
    };
    TestComponent = __decorate([
        core_1.Component({
            selector: 'test',
            templateUrl: 'app/test/test.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map