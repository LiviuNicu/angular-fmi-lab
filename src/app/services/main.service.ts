import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap, debounceTime } from "rxjs/operators";
import { Observable, of, BehaviorSubject, Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class MainService {
  private base_url = "https://salty-sands-74195.herokuapp.com/";
  constructor(private http: HttpClient) {}
  getHeaders() {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      withCredentials: false
    };
  }

  register(newUser) {
    return this.http
      .post(this.base_url + "user/register", newUser, this.getHeaders())
      .pipe(
        tap(response => {
          console.log(response);
        }),
        catchError(this.handleError("register"))
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      //console.log(error);
      if (error.status == 401) {
      }

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
