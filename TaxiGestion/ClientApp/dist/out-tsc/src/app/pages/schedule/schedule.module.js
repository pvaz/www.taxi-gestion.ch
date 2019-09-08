var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { SharedModule } from '../../shared/shared.module';
import { ScheduleComponent } from './schedule.component';
import { ScheduleDialogComponent } from './schedule-dialog/schedule-dialog.component';
export const routes = [
    { path: '', component: ScheduleComponent, pathMatch: 'full' }
];
let ScheduleModule = class ScheduleModule {
};
ScheduleModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            FormsModule,
            ReactiveFormsModule,
            CalendarModule,
            SharedModule
        ],
        declarations: [
            ScheduleComponent,
            ScheduleDialogComponent
        ],
        entryComponents: [
            ScheduleDialogComponent
        ]
    })
], ScheduleModule);
export { ScheduleModule };
//# sourceMappingURL=schedule.module.js.map