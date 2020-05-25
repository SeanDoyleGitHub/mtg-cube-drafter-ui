import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DraftService {

  private draftUrl = 'localhost:8080/draft';

  constructor(private http: HttpClient) {
  }

  getDraft(id: string): Observable<any> {
    const url = `${this.draftUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => this.log(`id=${id}`)),
      catchError(this.handleError<any>(`id=${id}`))
    );
  }

  private log(message: string) {
    console.log(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
