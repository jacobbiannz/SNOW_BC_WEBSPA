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
var admin_destination_service_1 = require("./admin_destination.service");
var configuration_service_1 = require("../../shared/service/configuration.service");
var Admin_DestinationComponent = (function () {
    function Admin_DestinationComponent(destinationService, configurationService
        //private securityService: SecurityService
    ) {
        this.destinationService = destinationService;
        this.configurationService = configurationService;
        //this.authenticated = securityService.IsAuthorized;
    }
    Admin_DestinationComponent.prototype.ngOnInit = function () {
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
    Admin_DestinationComponent.prototype.onRefresh = function () {
        this.loadData();
    };
    Admin_DestinationComponent.prototype.loadData = function () {
        this.getCountries();
    };
    //--------------------
    Admin_DestinationComponent.prototype.onSelectCountry = function (country) {
        this.selectedCountry = country;
        this.getProvices(this.selectedCountry.id);
    };
    Admin_DestinationComponent.prototype.getCountries = function () {
        var _this = this;
        this.destinationService.getCountries().subscribe(function (countries) {
            _this.countries = countries;
            _this.selectedCountry = _this.countries[0];
            _this.getProvices(_this.selectedCountry.id);
        });
    };
    Admin_DestinationComponent.prototype.getProvices = function (countryId) {
        var _this = this;
        this.destinationService.getProviences(countryId).subscribe(function (proviences) {
            _this.proviences = proviences;
            // this.proviences.forEach((provience) => {
            //     this.getCities(countryId, provience.id, provience);
            // });
            var half = Math.ceil(proviences.length / 2);
            _this.proviences1 = proviences.slice(0, half);
            //console.log("----------------------------dataservice--" + proviences.length + "--dataservice------------------------");
            _this.proviences2 = proviences.slice(half, proviences.length);
            // console.log("----------------------------dataservice--" + half +'!'+ (proviences.length) + "--dataservice------------------------");
        });
    };
    // getCities(countryId, provienceId, provience : IProvience){
    //     this.destinationService.getCities(countryId, provienceId).subscribe(cities => {
    //         provience.topCities = cities.slice(0, 5);;
    //     })
    // };
    Admin_DestinationComponent.prototype.getMonths = function () {
        var _this = this;
        this.destinationService.getMonths().subscribe(function (months) {
            _this.months = months;
        });
    };
    Admin_DestinationComponent = __decorate([
        core_1.Component({
            selector: 'admin-destination',
            templateUrl: './admin_destination.component.html',
            styleUrls: ['./admin_destination.component.scss']
        }),
        __metadata("design:paramtypes", [admin_destination_service_1.Admin_DestinationService,
            configuration_service_1.ConfigurationService
            //private securityService: SecurityService
        ])
    ], Admin_DestinationComponent);
    return Admin_DestinationComponent;
}());
exports.Admin_DestinationComponent = Admin_DestinationComponent;
//# sourceMappingURL=admin_destination.component.js.map