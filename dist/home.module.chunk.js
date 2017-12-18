webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/website/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/website/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
    }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/website/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <div id=\"homeCarouselIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n        <ol class=\"carousel-indicators\">\r\n            \r\n            <!-- <li data-target=\"#homeCarouselIndicators\" data-slide-to=\"0\" class=\"active\">\r\n                <img class=\"d-block w-100\" src=\"assets/images/slider1.jpg\">\r\n            </li>\r\n            <li data-target=\"#homeCarouselIndicators\" data-slide-to=\"1\">\r\n                <img class=\"d-block w-100\" src=\"assets/images/slider2.jpg\">\r\n            </li>\r\n            <li data-target=\"#homeCarouselIndicators\" data-slide-to=\"2\">\r\n                <img class=\"d-block w-100\" src=\"assets/images/slider3.jpg\">\r\n            </li>\r\n            <li data-target=\"#homeCarouselIndicators\" data-slide-to=\"3\">\r\n                <img class=\"d-block w-100\" src=\"assets/images/slider4.jpg\">\r\n            </li>\r\n            <li data-target=\"#homeCarouselIndicators\" data-slide-to=\"4\">\r\n                <img class=\"d-block w-100\" src=\"assets/images/slider5.jpg\">\r\n            </li> -->\r\n            <div  data-target=\"#homeCarouselIndicators\" data-slide-to=\"0\" class=\"IC active\">\r\n                <div class=\"image\">\r\n                    <img class=\"d-block w-100\" src=\"assets/images/slider1.jpg\">\r\n                </div>                        \r\n            </div>\r\n            <div class=\"IC\" data-target=\"#homeCarouselIndicators\" data-slide-to=\"1\">\r\n                <div class=\"image\">\r\n                    <img class=\"d-block w-100\" src=\"assets/images/slider2.jpg\">\r\n                </div>\r\n            </div>\r\n            <div class=\"IC\" data-target=\"#homeCarouselIndicators\" data-slide-to=\"2\">\r\n                <div class=\"image\">\r\n                    <img class=\"d-block w-100\" src=\"assets/images/slider3.jpg\">\r\n                </div>\r\n            </div>\r\n            <div class=\"IC\" data-target=\"#homeCarouselIndicators\" data-slide-to=\"3\">\r\n                <div class=\"image\">\r\n                    <img class=\"d-block w-100\" src=\"assets/images/slider4.jpg\">\r\n                </div>\r\n            </div>\r\n            <div class=\"IC\" data-target=\"#homeCarouselIndicators\" data-slide-to=\"4\">\r\n                <div class=\"image\">\r\n                    <img class=\"d-block w-100\" src=\"assets/images/slider5.jpg\">\r\n                </div>\r\n            </div>\r\n\r\n        </ol>\r\n        \r\n        <div class=\"carousel-inner\">\r\n            <div class=\"carousel-item active\">\r\n                <img class=\"d-block w-100\" src=\"assets/images/slider1.jpg\" alt=\"First slide\">\r\n                <div class=\"carousel-caption d-none d-md-block\">\r\n                    <h3>15/Dec.2017</h3>\r\n                    <h5>Trip to...............place..................</h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"carousel-item\">\r\n                <img class=\"d-block w-100\" src=\"assets/images/slider2.jpg\" alt=\"Second slide\">\r\n                <div class=\"carousel-caption d-none d-md-block\">\r\n                    <h3>16/Dec.2017</h3>\r\n                    <h5>Trip to...............place..................</h5>\r\n                    \r\n                </div>\r\n            </div>\r\n            <div class=\"carousel-item\">\r\n                <img class=\"d-block w-100\" src=\"assets/images/slider3.jpg\" alt=\"Third slide\">\r\n                <div class=\"carousel-caption d-none d-md-block\">\r\n                    <h3>17/Dec.2017</h3>\r\n                    <h5>Trip to...............place..................</h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"carousel-item\">\r\n                <img class=\"d-block w-100\" src=\"assets/images/slider4.jpg\" alt=\"Third slide\">\r\n                <div class=\"carousel-caption d-none d-md-block\">\r\n                    <h3>18/Dec.2017</h3>\r\n                    <h5>Trip to...............place..................</h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"carousel-item\">\r\n                <img class=\"d-block w-100\" src=\"assets/images/slider5.jpg\" alt=\"Third slide\">\r\n                <div class=\"carousel-caption d-none d-md-block\">\r\n                    <h3>19/Dec.2017</h3>\r\n                    <h5>Trip to...............place..................</h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <!-- <a class=\"carousel-control-prev\" href=\"#homeCarouselIndicators\" role=\"button\" data-slide=\"prev\">\r\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n        </a>\r\n        <a class=\"carousel-control-next\" href=\"#homeCarouselIndicators\" role=\"button\" data-slide=\"next\">\r\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Next</span>\r\n        </a>  -->\r\n    </div>\r\n\r\n    <div>\r\n        <div class=\"row homemain\">\r\n            <div class=\"col-md-4 homemainc1\">\r\n                <h5>a</h5>\r\n                <h5>a</h5>\r\n                <h5>a</h5>\r\n                <h5>a</h5>\r\n                <h5>a</h5>\r\n                <h5>a</h5>\r\n                <h5>a</h5>\r\n                <h5>a</h5>\r\n                <h5>a</h5>\r\n                <h5>a</h5>\r\n                <h5>a</h5>\r\n                <h5>a</h5>\r\n                <h5>a</h5>\r\n                <h5>a</h5>\r\n                <h5>a</h5>\r\n                <h5>a</h5>\r\n                <h5>a</h5>\r\n                <h5>a</h5>\r\n                <h5>a</h5>\r\n                <h5>a</h5>\r\n            </div>\r\n\r\n            <div class=\"col-md-8 homemainc2\">\r\n                <h5>b</h5>\r\n                <h5>b</h5>\r\n                <h5>b</h5>\r\n                <h5>b</h5>\r\n                <h5>b</h5>\r\n                <h5>b</h5>\r\n                <h5>b</h5>\r\n                <h5>b</h5>\r\n                <h5>b</h5>\r\n                <h5>b</h5>\r\n                <h5>b</h5>\r\n                <h5>b</h5>\r\n                <h5>b</h5>\r\n                <h5>b</h5>\r\n                <h5>b</h5>\r\n                <h5>b</h5>\r\n                <h5>b</h5>\r\n                <h5>b</h5>\r\n                <h5>b</h5>\r\n                <h5>b</h5>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/website/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ol.carousel-indicators {\n  display: block;\n  right: 0;\n  left: 0;\n  top: 10%;\n  bottom: 10%;\n  margin-right: 0%;\n  margin-left: 0%;\n  margin-top: 0%;\n  margin-bottom: 0%; }\n  ol.carousel-indicators .IC {\n    position: relative;\n    left: 92%;\n    width: 6%;\n    margin-bottom: 1%;\n    background-color: rgba(255, 255, 255, 0.5); }\n    ol.carousel-indicators .IC:before {\n      display: block;\n      content: \"\";\n      width: 100%;\n      padding-top: 56.25%; }\n    ol.carousel-indicators .IC > .image {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      overflow: hidden; }\n  ol.carousel-indicators .IC.active {\n    border: rgba(255, 187, 0, 0.74) 3px solid; }\n\n.carousel-inner {\n  width: 100%;\n  position: relative; }\n  .carousel-inner:before {\n    display: block;\n    content: \"\";\n    width: 100%;\n    padding-top: 33.33333333%; }\n  .carousel-inner > .carousel-item {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n  .carousel-inner .carousel-caption {\n    margin: auto;\n    top: 5%;\n    left: 0%;\n    right: 0%;\n    padding: 16px;\n    max-width: 1024px;\n    text-align: left; }\n\n.homemain {\n  width: 1024px;\n  margin: auto; }\n  .homemain .homemainc1 {\n    padding: 16px;\n    background-color: pink; }\n  .homemain .homemainc2 {\n    padding: 16px 0px;\n    background-color: palevioletred; }\n    @media screen and (max-width: 768px) {\n      .homemain .homemainc2 {\n        padding: 16px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/website/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
        this.sliders = [];
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: '15/Dec.2017',
            text: 'Trip to...............place..................'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: '16/Dec.2017',
            text: 'Trip to...............place..................'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: '17/Dec.2017',
            text: 'Trip to...............place..................'
        }, {
            imagePath: 'assets/images/slider4.jpg',
            label: '18/Dec.2017',
            text: 'Trip to...............place..................'
        }, {
            imagePath: 'assets/images/slider5.jpg',
            label: '18/Dec.2017',
            text: 'Trip to...............place..................'
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/website/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/website/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/website/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_routing_module__ = __webpack_require__("../../../../../src/app/website/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__("../../../../../src/app/website/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__home_routing_module__["a" /* HomeRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */],
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map