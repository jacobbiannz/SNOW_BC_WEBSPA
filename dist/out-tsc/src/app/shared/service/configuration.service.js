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
var http_1 = require("@angular/http");
var configuration_model_1 = require("../model/configuration.model");
var storage_service_1 = require("./storage.service");
require("rxjs/Rx");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/map");
var Subject_1 = require("rxjs/Subject");
var ConfigurationService = (function () {
    function ConfigurationService(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        // observable that is fired when settings are loaded from server
        this.settingsLoadedSource = new Subject_1.Subject();
        this.settingsLoaded$ = this.settingsLoadedSource.asObservable();
        this.isReady = false;
    }
    ConfigurationService.prototype.load = function () {
        //console.log(  "here ----------------------------------");
        this.serverSettings = new configuration_model_1.IConfiguration;
        this.serverSettings.countryUrl = "http://localhost:61125/api/countries";
        this.storageService.store('countryUrl', this.serverSettings.countryUrl);
        //console.log(this.serverSettings.countryUrl + "----------------------------------");
        this.storageService.store('provienceUrl', this.serverSettings.provienceUrl);
        this.storageService.store('cityUrl', this.serverSettings.cityUrl);
        this.isReady = true;
        this.settingsLoadedSource.next();
        // const baseURI = document.baseURI.endsWith('/') ? document.baseURI : `${document.baseURI}/`;
        // let url = `${baseURI}Home/Configuration`;
        // this.http.get(url).subscribe((response: Response) => {
        //     console.log('server settings loaded');
        //     this.serverSettings = response.json();
        //     console.log(this.serverSettings);
        //     this.storageService.store('countryUrl', this.serverSettings.countryUrl);
        //     this.storageService.store('provienceUrl', this.serverSettings.provienceUrl);
        //     this.storageService.store('cityUrl', this.serverSettings.cityUrl);
        //     //this.storageService.store('orderingUrl', this.serverSettings.orderingUrl);
        //     //this.storageService.store('marketingUrl', this.serverSettings.marketingUrl);
        //     //this.storageService.store('activateCampaignDetailFunction', this.serverSettings.activateCampaignDetailFunction);
        //     this.isReady = true;
        //     this.settingsLoadedSource.next();
        // });
    };
    ConfigurationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, storage_service_1.StorageService])
    ], ConfigurationService);
    return ConfigurationService;
}());
exports.ConfigurationService = ConfigurationService;
//# sourceMappingURL=configuration.service.js.map