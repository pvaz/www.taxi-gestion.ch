var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AppSettings } from '../../../app.settings';
let GoogleMapsComponent = class GoogleMapsComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.lat = 45.421530;
        this.lng = -75.697193;
        this.zoom = 7;
        this.settings = this.appSettings.settings;
    }
};
GoogleMapsComponent = __decorate([
    Component({
        selector: 'app-google-maps',
        templateUrl: './google-maps.component.html'
    }),
    __metadata("design:paramtypes", [AppSettings])
], GoogleMapsComponent);
export { GoogleMapsComponent };
//# sourceMappingURL=google-maps.component.js.map