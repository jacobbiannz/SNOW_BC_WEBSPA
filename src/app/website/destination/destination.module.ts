import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { DestinationRoutingModule } from './destination-routing.module';
import { DestinationComponent } from './destination.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        DestinationRoutingModule,
    ],
    declarations: [
        DestinationComponent,
    ]
})
export class DestinationModule {}
