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
var router_1 = require("@angular/router");
//import { TranslateService } from '@ngx-translate/core';
var Admin_HeaderComponent = (function () {
    //ngOnInit() { }
    //constructor(private translate: TranslateService, public router: Router) {
    function Admin_HeaderComponent(router) {
        /*
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');
        */
        var _this = this;
        this.router = router;
        this.pushRightClass = 'push-right';
        this.router.events.subscribe(function (val) {
            if (val instanceof router_1.NavigationEnd &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    Admin_HeaderComponent.prototype.ngOnInit = function () { };
    Admin_HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    Admin_HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    Admin_HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    Admin_HeaderComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    Admin_HeaderComponent = __decorate([
        core_1.Component({
            selector: 'admin-header',
            templateUrl: './admin_header.component.html',
            styleUrls: ['./admin_header.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], Admin_HeaderComponent);
    return Admin_HeaderComponent;
}());
exports.Admin_HeaderComponent = Admin_HeaderComponent;
//# sourceMappingURL=admin_header.component.js.map