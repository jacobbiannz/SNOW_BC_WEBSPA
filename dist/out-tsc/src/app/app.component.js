"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
//import { SecurityService } from './website/shared/service/security.service';
var configuration_service_1 = require("./shared/service/configuration.service");
/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    //constructor(private titleService: Title, private securityService: SecurityService, private configurationService: ConfigurationService) {
    function AppComponent(titleService, configurationService) {
        this.titleService = titleService;
        this.configurationService = configurationService;
        this.Authenticated = false;
        //this.Authenticated = this.securityService.IsAuthorized;
    }
    AppComponent.prototype.ngOnInit = function () {
        //console.log('app on init');
        //this.subscription = this.securityService.authenticationChallenge$.subscribe(res => this.Authenticated = res);
        //Get configuration from server environment variables:
        console.log('configuration');
        this.configurationService.load();
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle('SnowBC');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            styleUrls: ['./app.component.scss'],
            templateUrl: './app.component.html'
        }),
        __metadata("design:paramtypes", [platform_browser_1.Title, configuration_service_1.ConfigurationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map