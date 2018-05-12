import { Component, Input, Output, OnChanges, EventEmitter} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { ICountry } from '../../../../shared/model/country.model';
import { Admin_DestinationService } from '../../admin_destination.service';
import { Observable } from 'rxjs/Observable';
import { CityComponent } from '../../../../website/destination/city/city.component';
import { ICity } from '../../../../shared/model/city.model';

@Component({
    selector: 'admin-citydetail',
    templateUrl: './admin_citydetail.component.html',
    styleUrls: ['./admin_citydetail.component.scss'],
   
})

export class Admin_CityDetailComponent implements OnChanges {
    @Input() city: ICity;
    @Output() onUpdate = new EventEmitter<ICity>();
    
    id : string;
    name : string;
    rate : number;

    load(){
        
        if(this.city != null){
            console.log('-------------------------------------------' + this.city.id);
            this.id = this.city.id;
            this.name = this.city.name;
            this.rate = this.city.rate;
        }
        else
        {
            this.id = '';
            this.name = '';
            this.rate = 0;
        }
    }
    cityForm: FormGroup; // <--- heroForm is of type FormGroup

    constructor(private admin_destinationService: Admin_DestinationService, private fb: FormBuilder) { // <--- inject FormBuilder
        this.createForm();
    }

    
    createForm() {
        this.cityForm = this.fb.group({
            id:'',
            name:'',
            rate :''
        });
    }

    ngOnChanges() {
        this.load();
        this.cityForm.reset({ 
            name: this.name,
            rate : this.rate
        });
        
    }

    // onSubmit() {
    //     //this.country = this.prepareSaveCountry();
    //     //this.service.updateCategory(this.category).subscribe(/* error handling */);
    //     if(this.city != null){

    //         this.admin_destinationService.updateCity(this.prepareSaveCity()).subscribe(
    //             city => {
    //                 this.onUpdate.emit(city); 
    //             }
    //         );           
    //     }        

    //     else{
    //         this.admin_destinationService.createCity(this.prepareSaveCity()).subscribe(
    //             city => {
    //                 this.onUpdate.emit(city); 
    //                 //this.country = country;
    //             }
    //         );
    //     }
        
    //     this.ngOnChanges();
        
       
    // }

    // prepareSaveCity(): ICity {
    //     const formModel = this.cityForm.value;
    //     // return new `Hero` object containing a combination of original hero value(s)
    //     // and deep copies of changed form model values
    

    //     const saveCity: ICity = {
    //         id: this.id,
    //         name: formModel.name as string,
    //         rate: formModel.rate as number
           
    //     };
        
    //     return saveCity;
    // }

    revert() { this.ngOnChanges(); }

}