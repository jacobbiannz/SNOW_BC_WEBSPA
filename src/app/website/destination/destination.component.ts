import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
//import { routerTransition } from '../../router.animations';
import { Time } from '@angular/common/src/i18n/locale_data_api';

import { DestinationService } from './destination.service';
import { ConfigurationService } from '../../shared/service/configuration.service';
import { ICountry } from '../../shared/model/country.model';
import { IProvience} from '../../shared/model/provience.model';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'destination',
    templateUrl: './destination.component.html',
    styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
    
    countries : ICountry[];
    proviences : IProvience[];
    proviences1 : IProvience[];
    proviences2 : IProvience[];
    selectedCountry : ICountry;

    constructor(private destinationService: DestinationService,
        private configurationService: ConfigurationService
        //private securityService: SecurityService
        ) {
        //this.authenticated = securityService.IsAuthorized;
        }

    ngOnInit() {
        
        // Configuration Settings:
        if (this.configurationService.isReady)
            {
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
    }

    onRefresh(){
        this.loadData();
        
    }

    loadData() {
        this.getCountries();
        
    }

    getCountries() {
        this.destinationService.getCountries().subscribe(countries => {
            this.countries = countries;
            this.selectedCountry = this.countries[0];
           
            this.getProvices(this.selectedCountry.id);
        });
        
    }

    getProvices(countryId){
        this.destinationService.getProviences(countryId).subscribe(proviences => {
            this.proviences = proviences;
            let half = Math.ceil(proviences.length/2);
            this.proviences1 = proviences.slice(0, half);
            console.log("----------------------------dataservice--" + proviences.length + "--dataservice------------------------");
            this.proviences2 = proviences.slice(half, proviences.length);
            console.log("----------------------------dataservice--" + half +'!'+ (proviences.length) + "--dataservice------------------------");
        });
    }
}
