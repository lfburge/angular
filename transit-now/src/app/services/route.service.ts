import { Injectable } from '@angular/core';
import { Route } from '../model/route';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiConst } from '../services/apiconst';
import 'rxjs/add/operator/map';

@Injectable()
export class RouteService {
  apiUrl: string;
  ITEMS  = 'items';

  constructor(private http: HttpClient) {
    this.apiUrl = ApiConst.baseUrl + '/api/transitApi/v1/routecollection/1';
  }


  getRoutes (): Observable<Route[]> {
   return this.http.get(this.apiUrl).map((response: Response)  => response[this.ITEMS]).pipe(catchError(this.handleError('getRoutes', [])));
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
