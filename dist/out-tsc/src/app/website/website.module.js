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
//import { TranslateModule } from '@ngx-translate/core';
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var website_routing_module_1 = require("./website-routing.module");
var website_component_1 = require("./website.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var WebsiteModule = (function () {
    function WebsiteModule() {
    }
    WebsiteModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                website_routing_module_1.WebsiteRoutingModule,
                //TranslateModule,
                ng_bootstrap_1.NgbDropdownModule.forRoot()
            ],
            declarations: [website_component_1.WebsiteComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent]
        })
    ], WebsiteModule);
    return WebsiteModule;
}());
exports.WebsiteModule = WebsiteModule;
//# sourceMappingURL=website.module.js.map