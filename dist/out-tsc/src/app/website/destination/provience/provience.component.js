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
var ProvienceComponent = (function () {
    function ProvienceComponent(destinationService, configurationService, route
        //private securityService: SecurityService
    ) {
        this.destinationService = destinationService;
        this.configurationService = configurationService;
        this.route = route;
        //this.authenticated = securityService.IsAuthorized;
    }
    ProvienceComponent.prototype.ngOnInit = function () {
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
    ProvienceComponent.prototype.onRefresh = function () {
        this.loadData();
    };
    ProvienceComponent.prototype.loadData = function () {
        this.getProvience();
    };
    ProvienceComponent.prototype.getProvience = function () {
        var _this = this;
        var countryId = this.route.snapshot.paramMap.get('countryid');
        var provienceId = this.route.snapshot.paramMap.get('provienceid');
        this.destinationService.getProvience(countryId, provienceId).subscribe(function (provience) {
            _this.provience = provience;
            _this.getCities();
        });
    };
    ProvienceComponent.prototype.getCities = function () {
        var _this = this;
        var countryId = this.route.snapshot.paramMap.get('countryid');
        var provienceId = this.route.snapshot.paramMap.get('provienceid');
        this.destinationService.getCities(countryId, provienceId).subscribe(function (cities) {
            _this.cities = cities;
        });
    };
    ProvienceComponent = __decorate([
        core_1.Component({
            selector: 'provience',
            templateUrl: './provience.component.html',
            styleUrls: ['./provience.component.scss']
        }),
        __metadata("design:paramtypes", [destination_service_1.DestinationService,
            configuration_service_1.ConfigurationService,
            router_1.ActivatedRoute
            //private securityService: SecurityService
        ])
    ], ProvienceComponent);
    return ProvienceComponent;
}());
exports.ProvienceComponent = ProvienceComponent;
//# sourceMappingURL=provience.component.js.map