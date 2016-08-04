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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var slide_component_1 = require('./angular-2-carousel/slide.component');
var carousel_component_1 = require('./angular-2-carousel/carousel.component');
var Angular2Carousel = (function () {
    function Angular2Carousel() {
    }
    Angular2Carousel = __decorate([
        core_1.Component({
            selector: 'carousel-container',
            templateUrl: 'app/carousel-container.html',
            styleUrls: ['css/carousel.css'],
            directives: [slide_component_1.Slide, carousel_component_1.Carousel, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            inputs: ['slides', 'listing'],
        }), 
        __metadata('design:paramtypes', [])
    ], Angular2Carousel);
    return Angular2Carousel;
}());
exports.Angular2Carousel = Angular2Carousel;
//# sourceMappingURL=carousel-container.component.js.map