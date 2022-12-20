import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserData } from './github-profiles';

@Injectable({
  providedIn: 'root'
})
export class GithubProfilesService {

  baseUrl: string = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  getGithubUser(username: string): Observable<IUserData> {
    return this.http.get<IUserData>(`${this.baseUrl}${username}`);
  }
}
