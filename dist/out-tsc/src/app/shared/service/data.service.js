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
require("rxjs/Rx");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
//import { Guid } from '../../../guid';
//import { SecurityService } from './security.service';
// Implementing a Retry-Circuit breaker policy 
// is pending to do for the SPA app
var DataService = (function () {
    //constructor(private http: Http, private securityService: SecurityService) { }
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.get = function (url, params) {
        var options = {};
        // if (this.securityService) {
        //     options.headers = new Headers();
        //     options.headers.append('Authorization', 'Bearer ' + this.securityService.GetToken());
        // }
        options.headers = new http_1.Headers();
        //console.log("----------------------------dataservice--" + url + "--dataservice------------------------");
        return this.http.get(url, options).map(function (res) {
            //console.log("----------------------------dataservicereturn--" + res + "--dataservice------------------------");
            return res;
        }).catch(this.handleError);
    };
    /*
    postWithId(url: string, data: any, params?: any): Observable<Response> {
        return this.doPost(url, data, true, params);
    }
    */
    DataService.prototype.post = function (url, data, params) {
        return this.doPost(url, data, false, params);
    };
    DataService.prototype.putWithId = function (url, data, params) {
        return this.doPut(url, data, true, params);
    };
    DataService.prototype.doPost = function (url, data, needId, params) {
        var options = {};
        options.headers = new http_1.Headers();
        options.headers.append("Content-Type", "application/json");
        options.headers.append("Accept", "application/json");
        // if (this.securityService) {
        //     options.headers.append('Authorization', 'Bearer ' + this.securityService.GetToken());
        // }
        // if (needId) {
        //     let guid = Guid.newGuid();
        //     options.headers.append('x-requestid', guid);
        // }
        console.log(data + '-------------------------dataservice--------------------------------');
        return this.http.post(url, data, options).map(function (res) {
            return res;
        }).catch(this.handleError);
    };
    DataService.prototype.doPut = function (url, data, needId, params) {
        var options = {};
        options.headers = new http_1.Headers();
        options.headers.append("Content-Type", "application/json");
        options.headers.append("Accept", "application/json");
        //options.headers.append('Access-Control-Allow-Headers', 'Content-Type'); 
        // if (this.securityService) {
        //     options.headers.append('Authorization', 'Bearer ' + this.securityService.GetToken());                                                                                                                                                               
        // }
        // if (needId) {
        //     let guid = Guid.newGuid();
        //     options.headers.append('x-requestid', guid);
        // }
        //console.log(options);
        return this.http.put(url, data, options).map(function (res) {
            return res;
        }).catch(this.handleError);
    };
    /*
        delete(url: string, params?: any) {
            let options: RequestOptionsArgs = {};
    
            
            // if (this.securityService) {
            //     options.headers = new Headers();
            //     options.headers.append('Authorization', 'Bearer ' + this.securityService.GetToken());
            // }
            
    
            console.log('data.service deleting');
            // return this.http.delete(url, options).subscribe(
            //        return res;
            //    );
    
            this.http.delete(url, options).subscribe((res) => {
                console.log('deleted');
            });
        }
    */
    DataService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error instanceof http_1.Response) {
            var errMessage = '';
            try {
                errMessage = error.json();
            }
            catch (error) {
                errMessage = error.statusText;
            }
            return Observable_1.Observable.throw(errMessage);
        }
        return Observable_1.Observable.throw(error || 'server error');
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map