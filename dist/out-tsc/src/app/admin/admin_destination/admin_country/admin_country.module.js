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
var admin_country_routing_module_1 = require("./admin_country-routing.module");
var admin_country_component_1 = require("./admin_country.component");
var admin_destination_service_1 = require("../admin_destination.service");
var forms_1 = require("@angular/forms");
var admin_countrydetail_component_1 = require("./admin_countrydetail/admin_countrydetail.component");
var Admin_CountryModule = (function () {
    function Admin_CountryModule() {
    }
    Admin_CountryModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                //NgbCarouselModule.forRoot(),
                admin_country_routing_module_1.Admin_CountryRoutingModule,
                forms_1.ReactiveFormsModule,
            ],
            declarations: [
                admin_country_component_1.Admin_CountryComponent,
                admin_countrydetail_component_1.Admin_CountryDetailComponent
            ],
            exports: [admin_country_component_1.Admin_CountryComponent],
            providers: [admin_destination_service_1.Admin_DestinationService]
        })
    ], Admin_CountryModule);
    return Admin_CountryModule;
}());
exports.Admin_CountryModule = Admin_CountryModule;
//# sourceMappingURL=admin_country.module.js.map