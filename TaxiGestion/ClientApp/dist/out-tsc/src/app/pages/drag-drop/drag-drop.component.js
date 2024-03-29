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
import { AppSettings } from '../../app.settings';
let DragDropComponent = class DragDropComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.icons = ["home", "person", "alarm", "work", "mail", "favorite"];
        this.colors = ["accent", "primary", "warn"];
        this.settings = this.appSettings.settings;
    }
};
DragDropComponent = __decorate([
    Component({
        selector: 'app-drag-drop',
        templateUrl: './drag-drop.component.html',
        styleUrls: ['./drag-drop.component.scss']
    }),
    __metadata("design:paramtypes", [AppSettings])
], DragDropComponent);
export { DragDropComponent };
//# sourceMappingURL=drag-drop.component.js.map