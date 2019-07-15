import { Injectable } from '@angular/core';
import { Stop } from '../model/stop';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiConst } from '../services/apiconst';
import 'rxjs/add/operator/map';

@Injectable()
export class StopService {
  apiUrl: string;
  ITEMS  = 'items';

  constructor(private http: HttpClient) {
    this.apiUrl = ApiConst.baseUrl + '/api/transitApi/v1/stopsByRoute/1/20180403/96/0';
  }


  getStops (): Observable<Stop[]> {
   return this.http.get(this.apiUrl).map((response: Response)  => response[this.ITEMS]).pipe(catchError(this.handleError('getStops', [])));
  }


 /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
