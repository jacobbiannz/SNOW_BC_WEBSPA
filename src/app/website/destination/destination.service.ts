import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { DataService } from '../../shared/service/data.service';
import { ConfigurationService } from '../../shared/service/configuration.service';
import { ICity } from '../../shared/model/city.model';
import { IProvience } from '../../shared/model/provience.model';
import { ICountry } from '../../shared/model/country.model';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

@Injectable()
export class DestinationService {
    private countryUrl: string = '';
    private provienceUrl: string = '';
    private cityUrl: string = '';

    constructor(private dataService: DataService, private configurationService: ConfigurationService) {
        this.configurationService.settingsLoaded$.subscribe(x => {
           
            this.countryUrl = this.configurationService.serverSettings.countryUrl + '/countrie';
            this.provienceUrl = this.configurationService.serverSettings.provienceUrl + '/proviences';
            this.cityUrl = this.configurationService.serverSettings.cityUrl + '/citiences';
        });
    }

    // getCatalog(pageIndex: number, pageSize: number, brand: number, type: number): Observable<ICatalog> {
    //     let url = this.catalogUrl;
    //     if (brand || type) {
    //         url = this.catalogUrl + '/type/' + ((type) ? type.toString() : 'null') + '/brand/' + ((brand) ? brand.toString() : 'null');
    //     }``

    //     url = url + '?pageIndex=' + pageIndex + '&pageSize=' + pageSize;

    //     return this.service.get(url).map((response: Response) => {
    //         return response.json();
    //     });
    // }

    getCountries(): Observable<ICountry[]> {
        //console.log(this.countryUrl + '-----------------------country url-------------------------------');
        this.countryUrl = "http://localhost:61125/api/countries";
        return this.dataService.get(this.countryUrl).map((response: Response) => {
            //console.log(response.json() + '-----------------------countres-------------------------------');
            return response.json();
        });

    }

    getProviences(countryId : number): Observable<IProvience[]> {

        this.provienceUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences";
        return this.dataService.get(this.provienceUrl).map((response: Response) => {
            return response.json();
        });
    };

    getProvience(countryId : string, provienceId : string): Observable<IProvience> {

        this.provienceUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences/" + provienceId;
        
        return this.dataService.get(this.provienceUrl).map((response: Response) => {
            return response.json();
        });
    };

    /*
    getCities(): Observable<IProvience[]> {
        return this.dataService.get(this.cityUrl).map((response: Response) => {
            return response.json();
        });
    };
    */
}
