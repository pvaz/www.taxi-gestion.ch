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
import { single, multi } from '../charts.data';
import { AppSettings } from '../../../app.settings';
let BarComponent = class BarComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        this.settings = this.appSettings.settings;
        Object.assign(this, { single, multi });
    }
    onSelect(event) {
        console.log(event);
    }
};
BarComponent = __decorate([
    Component({
        selector: 'app-bar',
        templateUrl: './bar.component.html'
    }),
    __metadata("design:paramtypes", [AppSettings])
], BarComponent);
export { BarComponent };
//# sourceMappingURL=bar.component.js.map