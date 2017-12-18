import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        HomeRoutingModule,
    ],
    declarations: [
        HomeComponent,
    ]
})
export class HomeModule {}
