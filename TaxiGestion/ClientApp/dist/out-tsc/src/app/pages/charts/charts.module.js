var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from '../../shared/shared.module';
import { BarComponent } from './bar/bar.component';
import { BubbleComponent } from './bubble/bubble.component';
import { LineComponent } from './line/line.component';
import { PieComponent } from './pie/pie.component';
export const routes = [
    { path: '', redirectTo: 'bar', pathMatch: 'full' },
    { path: 'bar', component: BarComponent, data: { breadcrumb: 'Bar Charts' } },
    { path: 'pie', component: PieComponent, data: { breadcrumb: 'Pie Charts' } },
    { path: 'line', component: LineComponent, data: { breadcrumb: 'Line Charts' } },
    { path: 'bubble', component: BubbleComponent, data: { breadcrumb: 'Bubble Charts' } }
];
let ChartsModule = class ChartsModule {
};
ChartsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            NgxChartsModule,
            SharedModule
        ],
        declarations: [
            BarComponent,
            BubbleComponent,
            LineComponent,
            PieComponent
        ]
    })
], ChartsModule);
export { ChartsModule };
//# sourceMappingURL=charts.module.js.map