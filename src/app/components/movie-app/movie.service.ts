import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  getMoviesUrl: string = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a63abb96dc69713c1baf84da3f2f7cf3&page=1';
  searchMoviesUrl: string = 'https://api.themoviedb.org/3/search/movie?api_key=a63abb96dc69713c1baf84da3f2f7cf3&query="';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get<any>(this.getMoviesUrl);
  }

  searchMovies(searchString: string): Observable<any> {
    return this.http.get<any>(`${this.searchMoviesUrl}${searchString}`);
  }
}
