webpackJsonp(["website.module"],{

/***/ "../../../../../src/app/website/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-1\">\n            </div>\n            <div class=\"col-md-2\">\n                About Us\n            </div>\n            <div class=\"col-md-1\">\n            </div>\n            <div class=\"col-md-2\">\n                  Services\n            </div> \n            <div class=\"col-md-1\">\n            </div>\n            <div class=\"col-md-2\">\n                Spare1\n            </div> \n            <div class=\"col-md-1\">\n            </div>\n            <div class=\"col-md-2\">\n                Spare2\n            </div> \n        </div> \n\n        <div class=\"row socialmedia\">\n            <div class=\"col-md-12\">\n                <a>\n                    <i class=\"fa fa-facebook-square fa-2x\">&nbsp; </i>\n                </a>\n\n                <a>\n                    <i class=\"fa fa-instagram fa-2x\">&nbsp; </i>\n                </a>\n\n                <a>\n                    <i class=\"fa fa-weixin fa-2x\">&nbsp; </i>\n                </a>\n            </div>\n        </div>\n\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/website/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: rgba(41, 41, 41, 0.8); }\n  :host .footer {\n    margin-left: 0%;\n    margin-right: 0%;\n    padding: 0%;\n    bottom: 0;\n    height: 10%;\n    line-height: 60px;\n    width: 1024px;\n    color: white; }\n  :host .container {\n    margin-left: 0%;\n    margin-right: 0%;\n    margin-top: 5%;\n    margin-bottom: 5%;\n    padding-left: 16px;\n    padding-right: 16px; }\n    :host .container .socialmedia {\n      text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/website/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/website/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/website/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/website/header/header.component.html":
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-expand-lg navbar-light\">\n\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"../../../assets/images/logo.png\" class=\"rounded\" height=\"60\" width=\"auto\" alt=\"BC\">\n    </a>\n    \n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    \n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarSupportedContent\">\n        <div class=\"navbar-nav mr-auto \">\n        \n            <!-- <a class=\"nav-item nav-link\" href=\"#\"> Home </a> -->\n            <a routerLink=\"/home\" [routerLinkActive]=\"['router-link-active']\" class=\"nav-item nav-link\">\n                {{ 'Home' }}\n            </a>\n\n            <a class=\"nav-item nav-link\" href=\"#\"> Destinations </a>\n            \n            <a class=\"nav-item nav-link\" href=\"#\"> Shop </a>\n        \n            <a class=\"nav-item nav-link\" href=\"#\"> Place </a>\n\n            <a class=\"nav-item nav-link\" href=\"#\"> APP </a>\n        </div>       \n\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"fa fa-bell\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n                </a>\n                <div class=\"dropdown-menu\">\n                  <a class=\"dropdown-item\" href=\"#\">Action</a>\n                  <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                  <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n                </div>\n            </li>\n            \n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"fa fa-user\"></i> BC <b class=\"caret\"></b>\n                </a>\n                <div class=\"dropdown-menu\">\n                    <a class=\"dropdown-item\" href=\"#\">Profile</a>\n                    <a class=\"dropdown-item\" href=\"#\">Settings</a>\n                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" href=\"#\">Log Out</a>\n                </div>\n            </li>\n\n        </ul>\n    </div>\n</nav> "

/***/ }),

/***/ "../../../../../src/app/website/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  :host .navbar {\n    width: 1024px;\n    background: none !important; }\n    :host .navbar .navbar-toggler {\n      cursor: pointer;\n      outline: 0; }\n    :host .navbar .nav-link {\n      text-transform: uppercase;\n      font-weight: bold; }\n    :host .navbar .nav-item {\n      padding: 0 1rem; }\n      @media (max-width: 34em) {\n        :host .navbar .nav-item {\n          padding: 0; } }\n      @media (max-width: 34em) {\n        :host .navbar .nav-item .nav-link {\n          font-weight: normal;\n          color: #fff !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/website/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
        //pushRightClass: string = 'push-right';
        this.isCollapsed = false;
        this.router.events.subscribe(function (val) {
            /*
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
            */
        });
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    /*
    show:boolean = false;
    toggleCollapse() {
        this.show = !this.show
    }
    */
    /*
    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
    */
    HeaderComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/website/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/website/header/header.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/website/website-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__website_component__ = __webpack_require__("../../../../../src/app/website/website.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__website_component__["a" /* WebsiteComponent */],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'Destination', loadChildren: './destination/destination.module#DestinationModule' },
        ]
    }
];
var WebsiteRoutingModule = (function () {
    function WebsiteRoutingModule() {
    }
    WebsiteRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], WebsiteRoutingModule);
    return WebsiteRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/website/website.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"main-container\">\n    <router-outlet></router-outlet>\n</section>\n<app-footer></app-footer>\n "

/***/ }),

/***/ "../../../../../src/app/website/website.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/website/website.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsiteComponent = (function () {
    function WebsiteComponent() {
    }
    WebsiteComponent.prototype.ngOnInit = function () {
    };
    WebsiteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website',
            template: __webpack_require__("../../../../../src/app/website/website.component.html"),
            styles: [__webpack_require__("../../../../../src/app/website/website.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WebsiteComponent);
    return WebsiteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/website/website.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteModule", function() { return WebsiteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__website_routing_module__ = __webpack_require__("../../../../../src/app/website/website-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__website_component__ = __webpack_require__("../../../../../src/app/website/website.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("../../../../../src/app/website/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__("../../../../../src/app/website/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__destination_destination_component__ = __webpack_require__("../../../../../src/app/website/destination/destination.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { TranslateModule } from '@ngx-translate/core';






var WebsiteModule = (function () {
    function WebsiteModule() {
    }
    WebsiteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__website_routing_module__["a" /* WebsiteRoutingModule */],
                //TranslateModule,
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbDropdownModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__website_component__["a" /* WebsiteComponent */], __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_7__destination_destination_component__["a" /* DestinationComponent */]]
        })
    ], WebsiteModule);
    return WebsiteModule;
}());



/***/ })

});
//# sourceMappingURL=website.module.chunk.js.map