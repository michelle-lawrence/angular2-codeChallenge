import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {Slide} from './angular-2-carousel/slide.component';
import {Carousel} from './angular-2-carousel/carousel.component';

@Component ({
    selector: 'carousel-container',
    templateUrl: 'app/carousel-container.html',
    styleUrls: ['css/carousel.css'],
    directives: [Slide,Carousel, CORE_DIRECTIVES, FORM_DIRECTIVES],
    inputs: ['slides', 'listing'],
})


export class Angular2Carousel  {}