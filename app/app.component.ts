import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['css/styles.css'],
})
export class AppComponent {
	listingName = "San Francisco";
	amenitiesList = [
		{
			icon: 'fa-cutlery',
			label: 'Nearby Restaurants',
			quantity: '##'
		},
		{
			icon: 'fa-shopping-basket',
			label: 'Nearby Groceries',
			quantity: '##'
		},
		{
			icon: 'fa-university',
			label: 'Nearby Banks',
			quantity: '##'
		},
		{
			icon: 'fa-ellipsis-h',
			label: 'Other Amenities',
			quantity: '##'
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
}