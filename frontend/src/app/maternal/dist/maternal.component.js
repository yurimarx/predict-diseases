"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MaternalComponent = void 0;
var core_1 = require("@angular/core");
var api_1 = require("primeng/api");
var maternal_1 = require("./maternal");
var MaternalComponent = /** @class */ (function () {
    function MaternalComponent(maternalService, messageService) {
        this.maternalService = maternalService;
        this.messageService = messageService;
        this.maternal = new maternal_1.Maternal();
        this.showResults = false;
        this.samples = [
            { PredictedMaternalRisk: "high risk", Age: 25, SystolicBP: 130, DiastolicBP: 80, BS: 15.0, BodyTemp: 98, HeartRate: 86 },
            { PredictedMaternalRisk: "mid risk", Age: 23, SystolicBP: 130, DiastolicBP: 70, BS: 15.0, BodyTemp: 98, HeartRate: 78 },
            { PredictedMaternalRisk: "low risk", Age: 23, SystolicBP: 90, DiastolicBP: 60, BS: 15.0, BodyTemp: 98, HeartRate: 76 },
        ];
    }
    MaternalComponent.prototype.ngOnInit = function () {
    };
    MaternalComponent.prototype.selectValues = function (sample) {
        this.maternal = sample;
        this.showResults = false;
    };
    MaternalComponent.prototype.predict = function () {
        var _this = this;
        this.maternalService.predict(this.maternal).subscribe(function (response) {
            _this.maternal = response;
            _this.showResults = true;
        }, function (error) {
            console.log(error);
            _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error on load the predictions.' });
        });
    };
    MaternalComponent = __decorate([
        core_1.Component({
            templateUrl: './maternal.component.html',
            providers: [api_1.MessageService, api_1.ConfirmationService]
        })
    ], MaternalComponent);
    return MaternalComponent;
}());
exports.MaternalComponent = MaternalComponent;
