import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.main-component.html',
  styleUrls: ['css/styles.css'],
  directives: [ROUTER_DIRECTIVES], 
})
export class MainComponent {
/** TODO: replace hard coded data below with API call */
	listingName = 'San Franciso';
}