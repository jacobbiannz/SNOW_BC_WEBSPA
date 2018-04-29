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
var destination_service_1 = require("../destination.service");
var configuration_service_1 = require("../../../shared/service/configuration.service");
var router_1 = require("@angular/router");
var CityComponent = (function () {
    function CityComponent(destinationService, configurationService, route
        //private securityService: SecurityService
    ) {
        this.destinationService = destinationService;
        this.configurationService = configurationService;
        this.route = route;
        //this.authenticated = securityService.IsAuthorized;
    }
    CityComponent.prototype.ngOnInit = function () {
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
    CityComponent.prototype.onRefresh = function () {
        this.loadData();
    };
    CityComponent.prototype.loadData = function () {
        this.getCity();
    };
    CityComponent.prototype.getCity = function () {
        var _this = this;
        //let countryId = this.route.snapshot.paramMap.get('countryid')
        //let provienceId = this.route.snapshot.paramMap.get('provienceid');
        var cityId = this.route.snapshot.paramMap.get('cityid');
        this.destinationService.getCity(cityId).subscribe(function (city) {
            _this.city = city;
        });
    };
    CityComponent = __decorate([
        core_1.Component({
            selector: 'city',
            templateUrl: './city.component.html',
            styleUrls: ['./city.component.scss']
        }),
        __metadata("design:paramtypes", [destination_service_1.DestinationService,
            configuration_service_1.ConfigurationService,
            router_1.ActivatedRoute
            //private securityService: SecurityService
        ])
    ], CityComponent);
    return CityComponent;
}());
exports.CityComponent = CityComponent;
//# sourceMappingURL=city.component.js.map