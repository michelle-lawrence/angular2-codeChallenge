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
require('./rxjs-operators');
var carousel_container_component_1 = require('./carousel-container.component');
var AppComponent = (function () {
    function AppComponent() {
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
        this.sidebarList = [
            {
                icon: 'fa-cutlery',
                label: 'Nearby Restaurants'
            },
            {
                icon: 'fa-shopping-basket',
                label: 'Nearby Groceries'
            },
            {
                icon: 'fa-university',
                label: 'Nearby Banks'
            }
        ];
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
            directives: [carousel_container_component_1.Angular2Carousel],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map