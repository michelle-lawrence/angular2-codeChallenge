import {Component, OnInit} from '@angular/core';
import {Angular2Carousel} from './common/carousel-container.component';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';
import {Listing} from './common/listing';
import {ListingService} from './common/listing.service';
import {JSONP_PROVIDERS} from '@angular/http';
import './common/rxjs-operators';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['css/styles.css'],
  directives: [ROUTER_DIRECTIVES, Angular2Carousel], 
  providers: [JSONP_PROVIDERS, ListingService],
})
export class AppComponent implements OnInit {
  errorMessage: string;
  dataList: Listing[];
  mode = 'Observable';
  private sub: any; 

  	constructor (
  		private listingService: ListingService,
  		private route: ActivatedRoute,
  		private router: Router) {}

  	ngOnInit() { 
  		this.sub = this.route.params.subscribe(params => {
  		let state = params['state'];

  		this.getData(state); 
  		});
  	}

  	getData(item) {
    	this.listingService.getData(item)
                     .subscribe(
                       data => this.dataList = data,
                       error =>  this.errorMessage = <any>error);
  	}

  	ngOnDestroy() {
  		this.sub.unsubscribe();
  	}

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

  	/** TODO: replace hard coded data below with API call */
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
	sidebarList = this.amenitiesList.slice(0, 3);

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
}