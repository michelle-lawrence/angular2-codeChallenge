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
var carousel_container_component_1 = require('./common/carousel-container.component');
var router_1 = require('@angular/router');
var listing_service_1 = require('./common/listing.service');
var http_1 = require('@angular/http');
require('./common/rxjs-operators');
var AppComponent = (function () {
    function AppComponent(listingService, route, router) {
        this.listingService = listingService;
        this.route = route;
        this.router = router;
        this.mode = 'Observable';
        /** TODO: replace hard coded data below with API call */
        this.listingName = "San Francisco";
        this.amenitiesList = [
            {
                icon: 'fa-cutlery',
                label: 'Nearby Restaurants',
                quantity: '25'
            },
            {
                icon: 'fa-shopping-basket',
                label: 'Nearby Groceries',
                quantity: '2'
            },
            {
                icon: 'fa-university',
                label: 'Nearby Banks',
                quantity: '1'
            },
            {
                icon: 'fa-ellipsis-h',
                label: 'Other Amenities',
                quantity: '75'
            }
        ];
        this.sidebarList = this.amenitiesList.slice(0, 3);
        this.restaurantInfo = [
            {
                establishment: 'Fish N Good Eats',
                address: '123 Cove Cove',
                location: 'By the Bay',
                image: 'http://placehold.it/150/fff/595959?text=1'
            },
            {
                establishment: 'Tree Huggers',
                address: '636 Lovers Lane',
                location: 'Downtown',
                image: 'http://placehold.it/150/fff/595959?text=2'
            },
            {
                establishment: 'The Dive',
                address: '24 Ocean View',
                location: 'San Francisco',
                image: 'http://placehold.it/150/fff/595959?text=3'
            }
        ];
        this.groceryInfo = [
            {
                establishment: 'Safeway',
                address: '786 Grocer Lane',
                location: 'Mountain View',
                image: 'http://placehold.it/150/fff/595959?text=1'
            },
            {
                establishment: '7-Eleven',
                address: '19 Alley Circle',
                location: 'San Francisco',
                image: 'http://placehold.it/150/fff/595959?text=2'
            }
        ];
        this.bankInfo = [
            {
                establishment: 'Nickel N Dime Em',
                address: '123 Golden Road',
                location: 'Downtown',
                image: 'http://placehold.it/150/fff/595959?text=1'
            },
            {
                establishment: 'First National',
                address: '90 Best Way',
                location: 'Downtown',
                image: 'http://placehold.it/150/fff/595959?text=2'
            },
            {
                establishment: 'Spiritual Wealth',
                address: '420 Discovery Lane',
                location: 'San Francisco',
                image: 'http://placehold.it/150/fff/595959?text=3'
            },
            {
                establishment: 'United Trust',
                address: '19 Benedict Circle',
                location: 'San Francisco',
                image: 'http://placehold.it/150/fff/595959?text=4'
            }
        ];
        this.contentList = this.restaurantInfo;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var state = params['state'];
            _this.getData(state);
        });
    };
    AppComponent.prototype.getData = function (item) {
        var _this = this;
        this.listingService.getData(item)
            .subscribe(function (data) { return _this.dataList = data; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AppComponent.prototype.onClick = function (label) {
        switch (label) {
            case "Nearby Restaurants":
                this.contentList = this.restaurantInfo;
                break;
            case "Nearby Groceries":
                this.contentList = this.groceryInfo;
                break;
            case "Nearby Banks":
                this.contentList = this.bankInfo;
                break;
            default:
                break;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['css/styles.css'],
            directives: [router_1.ROUTER_DIRECTIVES, carousel_container_component_1.Angular2Carousel],
            providers: [http_1.JSONP_PROVIDERS, listing_service_1.ListingService],
        }), 
        __metadata('design:paramtypes', [listing_service_1.ListingService, router_1.ActivatedRoute, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map