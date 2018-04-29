"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
//import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
var city_routing_module_1 = require("./city-routing.module");
var city_component_1 = require("./city.component");
var destination_service_1 = require("../destination.service");
var CityModule = (function () {
    function CityModule() {
    }
    CityModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                //NgbCarouselModule.forRoot(),
                city_routing_module_1.CityRoutingModule,
            ],
            declarations: [
                city_component_1.CityComponent,
            ],
            exports: [city_component_1.CityComponent],
            providers: [destination_service_1.DestinationService]
        })
    ], CityModule);
    return CityModule;
}());
exports.CityModule = CityModule;
//# sourceMappingURL=city.module.js.map