import {Component} from '@angular/core';
import{Angular2Carousel} from './carousel-container.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['css/styles.css'],
  directives: [Angular2Carousel], 
})
export class AppComponent {
	listingName = "San Francisco";
	amenitiesList = [
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
	]
	sidebarList = [
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
	]
	restaurantInfo = [
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
	]
	groceryInfo = [
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
	]
	bankInfo = [
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
	]
	contentList = this.restaurantInfo;
	onClick(label) {
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
	}
}