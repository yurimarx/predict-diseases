"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppMenuComponent = void 0;
var core_1 = require("@angular/core");
var AppMenuComponent = /** @class */ (function () {
    function AppMenuComponent(appMain) {
        this.appMain = appMain;
    }
    AppMenuComponent.prototype.ngOnInit = function () {
        this.model = [
            {
                label: 'Predictions',
                items: [
                    { label: 'Diabetes', icon: 'pi pi-fw pi-circle', routerLink: ['/diabetes'] },
                    { label: 'Kidney', icon: 'pi pi-fw pi-circle', routerLink: ['/kidney'] },
                    { label: 'Maternal Risk', icon: 'pi pi-fw pi-circle', routerLink: ['/maternal'] },
                ]
            }
        ];
    };
    AppMenuComponent.prototype.onKeydown = function (event) {
        var nodeElement = event.target;
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    };
    AppMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-menu',
            template: "\n        <div class=\"layout-menu-container\">\n            <ul class=\"layout-menu\" role=\"menu\" (keydown)=\"onKeydown($event)\">\n                <li app-menu class=\"layout-menuitem-category\" *ngFor=\"let item of model; let i = index;\" [item]=\"item\" [index]=\"i\" [root]=\"true\" role=\"none\">\n                    <div class=\"layout-menuitem-root-text\" [attr.aria-label]=\"item.label\">{{item.label}}</div>\n                    <ul role=\"menu\">\n                        <li app-menuitem *ngFor=\"let child of item.items\" [item]=\"child\" [index]=\"i\" role=\"none\"></li>\n                    </ul>\n                </li>\n                \n            </ul>\n        </div>\n    "
        })
    ], AppMenuComponent);
    return AppMenuComponent;
}());
exports.AppMenuComponent = AppMenuComponent;
