import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Listing }           from './listing';
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class ListingService {
  constructor (private http: Http) {}

  private dataUrl = 'http://prod-joyfulhome-api.synapsys.us/location/amenitiesInLocation/CA/San%20Francisco';  // URL to web API

  getHeroes (): Observable<Listing[]> {
    return this.http.get(this.dataUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
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
