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
var forms_1 = require("@angular/forms");
var admin_destination_service_1 = require("../../admin_destination.service");
var Admin_CountryDetailComponent = (function () {
    function Admin_CountryDetailComponent(admin_destinationService, fb) {
        this.admin_destinationService = admin_destinationService;
        this.fb = fb;
        this.onUpdate = new core_1.EventEmitter();
        this.createForm();
    }
    Admin_CountryDetailComponent.prototype.load = function () {
        if (this.country != null) {
            this.id = this.country.id;
            this.name = this.country.name;
            this.rate = this.country.rate;
        }
        else {
            this.id = null;
            this.name = null;
            this.rate = null;
        }
    };
    Admin_CountryDetailComponent.prototype.createForm = function () {
        this.countryForm = this.fb.group({
            id: '',
            name: '',
            rate: ''
        });
    };
    Admin_CountryDetailComponent.prototype.ngOnChanges = function () {
        this.load();
        this.countryForm.reset({
            name: this.name,
            rate: this.rate
        });
    };
    Admin_CountryDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        //this.country = this.prepareSaveCountry();
        //this.service.updateCategory(this.category).subscribe(/* error handling */);
        if (this.country != null) {
            this.admin_destinationService.updateCountry(this.prepareSaveCountry()).subscribe(function (country) {
                _this.onUpdate.emit();
            });
        }
        else {
            this.admin_destinationService.createCountry(this.prepareSaveCountry()).subscribe();
        }
        this.ngOnChanges();
    };
    Admin_CountryDetailComponent.prototype.prepareSaveCountry = function () {
        var formModel = this.countryForm.value;
        // return new `Hero` object containing a combination of original hero value(s)
        // and deep copies of changed form model values
        var saveCountry = {
            id: this.id,
            name: formModel.name,
            rate: this.rate
        };
        return saveCountry;
    };
    Admin_CountryDetailComponent.prototype.revert = function () { this.ngOnChanges(); };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Admin_CountryDetailComponent.prototype, "country", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], Admin_CountryDetailComponent.prototype, "onUpdate", void 0);
    Admin_CountryDetailComponent = __decorate([
        core_1.Component({
            selector: 'admin-countrydetail',
            templateUrl: './admin_countrydetail.component.html',
            styleUrls: ['./admin_countrydetail.component.scss'],
        }),
        __metadata("design:paramtypes", [admin_destination_service_1.Admin_DestinationService, forms_1.FormBuilder])
    ], Admin_CountryDetailComponent);
    return Admin_CountryDetailComponent;
}());
exports.Admin_CountryDetailComponent = Admin_CountryDetailComponent;
//# sourceMappingURL=admin_countrydetail.component.js.map