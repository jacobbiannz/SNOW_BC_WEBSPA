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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var destination_routing_module_1 = require("./destination-routing.module");
var destination_component_1 = require("./destination.component");
var destination_service_1 = require("./destination.service");
var DestinationModule = (function () {
    function DestinationModule() {
    }
    DestinationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ng_bootstrap_1.NgbCarouselModule.forRoot(),
                destination_routing_module_1.DestinationRoutingModule,
            ],
            declarations: [
                destination_component_1.DestinationComponent,
            ],
            exports: [destination_component_1.DestinationComponent],
            providers: [destination_service_1.DestinationService]
        })
    ], DestinationModule);
    return DestinationModule;
}());
exports.DestinationModule = DestinationModule;
//# sourceMappingURL=destination.module.js.map