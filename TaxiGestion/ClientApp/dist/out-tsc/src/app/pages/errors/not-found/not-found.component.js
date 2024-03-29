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
import { Router } from '@angular/router';
import { AppSettings } from '../../../app.settings';
let NotFoundComponent = class NotFoundComponent {
    constructor(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
    searchResult() {
        this.router.navigate(['/search']);
    }
    ngAfterViewInit() {
        this.settings.loadingSpinner = false;
    }
};
NotFoundComponent = __decorate([
    Component({
        selector: 'app-not-found',
        templateUrl: './not-found.component.html'
    }),
    __metadata("design:paramtypes", [AppSettings, Router])
], NotFoundComponent);
export { NotFoundComponent };
//# sourceMappingURL=not-found.component.js.map