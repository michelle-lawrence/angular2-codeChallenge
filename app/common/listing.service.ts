import { Injectable }     from '@angular/core';
import { Http, Response, Jsonp, URLSearchParams } from '@angular/http';
import { Listing }           from './listing';
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class ListingService {
  constructor (private jsonp: Jsonp) {}

  private dataUrl = 'http://prod-joyfulhome-api.synapsys.us/location/amenitiesInLocation/CA/San%20Francisco';  // URL to web API

  getData (item): Observable<Listing[]> {


    return this.jsonp.get(this.dataUrl + item)
                    .map(this.extractData);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
