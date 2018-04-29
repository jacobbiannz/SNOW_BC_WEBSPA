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
var core_1 = require("@angular/core");
var admin_destination_service_1 = require("../admin_destination.service");
var configuration_service_1 = require("../../../shared/service/configuration.service");
var router_1 = require("@angular/router");
var Admin_CountryComponent = (function () {
    function Admin_CountryComponent(admin_destinationService, configurationService, route
        //private securityService: SecurityService
    ) {
        this.admin_destinationService = admin_destinationService;
        this.configurationService = configurationService;
        this.route = route;
        this.newCountry = false;
        //this.authenticated = securityService.IsAuthorized;
    }
    Admin_CountryComponent.prototype.ngOnInit = function () {
        // Configuration Settings:
        if (this.configurationService.isReady) {
            this.loadData();
        }
        //else
        //this.configurationService.settingsLoaded$.subscribe(x => {
        //    this.loadData();
        //});
        /*
        // Subscribe to login and logout observable
        this.authSubscription = this.securityService.authenticationChallenge$.subscribe(res => {
            this.authenticated = res;
        });
        */
    };
    Admin_CountryComponent.prototype.onRefresh = function () {
        this.loadData();
    };
    Admin_CountryComponent.prototype.loadData = function () {
        this.getCountries();
    };
    Admin_CountryComponent.prototype.getCountries = function () {
        var _this = this;
        this.admin_destinationService.getCountries().subscribe(function (countries) {
            _this.countries = countries;
            _this.selectedCountry = _this.countries[0];
        });
    };
    Admin_CountryComponent.prototype.onSelectCountry = function (country) {
        this.selectedCountry = country;
    };
    Admin_CountryComponent.prototype.createNewCountry = function () {
        this.newCountry = true;
        this.selectedCountry = null;
    };
    Admin_CountryComponent = __decorate([
        core_1.Component({
            selector: 'admin-country',
            templateUrl: './admin_country.component.html',
            styleUrls: ['./admin_country.component.scss']
        }),
        __metadata("design:paramtypes", [admin_destination_service_1.Admin_DestinationService,
            configuration_service_1.ConfigurationService,
            router_1.ActivatedRoute
            //private securityService: SecurityService
        ])
    ], Admin_CountryComponent);
    return Admin_CountryComponent;
}());
exports.Admin_CountryComponent = Admin_CountryComponent;
//# sourceMappingURL=admin_country.component.js.map