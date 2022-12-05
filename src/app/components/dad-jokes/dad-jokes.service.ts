import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJokes } from './jokes';

@Injectable({
  providedIn: 'root'
})
export class DadJokesService {

  url: string = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) { }

  getDadJokes(): Observable<IJokes> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<IJokes>(this.url, { headers: headers });
  }
}
