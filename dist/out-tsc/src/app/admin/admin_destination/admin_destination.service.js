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
var data_service_1 = require("../../shared/service/data.service");
var configuration_service_1 = require("../../shared/service/configuration.service");
require("rxjs/Rx");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/map");
var Admin_DestinationService = (function () {
    function Admin_DestinationService(dataService, configurationService) {
        var _this = this;
        this.dataService = dataService;
        this.configurationService = configurationService;
        this.countryUrl = '';
        this.provienceUrl = '';
        this.cityUrl = '';
        this.monthUrl = '';
        this.configurationService.settingsLoaded$.subscribe(function (x) {
            _this.countryUrl = _this.configurationService.serverSettings.countryUrl + '/countrie';
            _this.provienceUrl = _this.configurationService.serverSettings.provienceUrl + '/proviences';
            _this.cityUrl = _this.configurationService.serverSettings.cityUrl + '/citiences';
        });
    }
    //----------------------------------------------------------------------------------------------------------
    Admin_DestinationService.prototype.getCountries = function () {
        this.countryUrl = "http://localhost:61125/api/countries";
        return this.dataService.get(this.countryUrl).map(function (response) {
            return response.json();
        });
    };
    Admin_DestinationService.prototype.updateCountry = function (country) {
        var countryUrl = "http://localhost:61125/api/countries";
        //this.category = category;
        return this.dataService.putWithId(countryUrl, country).map(function (response) {
            return response.json();
        });
    };
    Admin_DestinationService.prototype.createCountry = function (country) {
        var countryUrl = "http://localhost:61125/api/countries";
        this.country = country;
        return this.dataService.post(countryUrl, country).map(function (response) {
            return true;
        });
    };
    //----------------------------------------------------------------------------------------------------------
    Admin_DestinationService.prototype.getProviences = function (countryId) {
        this.provienceUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences";
        return this.dataService.get(this.provienceUrl).map(function (response) {
            //console.log(this.countryUrl + '-----------------------provience response-------------------------------' + response.json());
            return response.json();
        });
    };
    ;
    Admin_DestinationService.prototype.getProvience = function (countryId, provienceId) {
        this.provienceUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences/" + provienceId;
        return this.dataService.get(this.provienceUrl).map(function (response) {
            return response.json();
        });
    };
    ;
    Admin_DestinationService.prototype.getCities = function (countryId, provienceId) {
        this.cityUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences/" + provienceId + "/cities";
        return this.dataService.get(this.cityUrl).map(function (response) {
            return response.json();
        });
    };
    ;
    // getCity(countryId : string, provienceId : string, cityId : string): Observable<ICity> {
    //     this.cityUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences/" + provienceId + "/cities/" + cityId;
    //     return this.dataService.get(this.cityUrl).map((response: Response) => {
    //         return response.json();
    //     });
    // };
    Admin_DestinationService.prototype.getCity = function (cityId) {
        this.cityUrl = "http://localhost:61125/api/cities/" + cityId;
        return this.dataService.get(this.cityUrl).map(function (response) {
            return response.json();
        });
    };
    ;
    Admin_DestinationService.prototype.getMonths = function () {
        //console.log(this.countryUrl + '-----------------------country url-------------------------------');
        this.monthUrl = "http://localhost:61125/api/monthcollection";
        return this.dataService.get(this.monthUrl).map(function (response) {
            return response.json();
        });
    };
    Admin_DestinationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [data_service_1.DataService, configuration_service_1.ConfigurationService])
    ], Admin_DestinationService);
    return Admin_DestinationService;
}());
exports.Admin_DestinationService = Admin_DestinationService;
//# sourceMappingURL=admin_destination.service.js.map