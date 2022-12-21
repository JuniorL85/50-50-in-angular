import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { IUserData } from './github-profiles';
import { GithubProfilesService } from './github-profiles.service';

@Component({
  selector: 'app-github-profiles',
  templateUrl: './github-profiles.component.html',
  styleUrls: ['./github-profiles.component.scss']
})
export class GithubProfilesComponent {

  searchedUser: string = '';
  user!: IUserData;
  repos: any;

  showError: boolean = false;
  showReposError: boolean = false;
  errorMsg: string = '';

  constructor(private githubProfilesService: GithubProfilesService) {}

  getUser() {
    this.showError = false;
    this.errorMsg = '';
    this.githubProfilesService.getGithubUser(this.searchedUser).subscribe({
      next: (user) => {
      this.user = user;
      this.getRepos(this.searchedUser);
      this.searchedUser = '';
    },
      error: () => {
        this.showError = true;
        this.errorMsg = 'No profile with this username';
        this.searchedUser = '';
      }
    })
  }

  getRepos(username: string) {
    this.githubProfilesService.getGithubUserRepos(username).subscribe({
      next: (repos) => {
      this.repos = repos;
      },
      error: () => {
        this.showReposError = true;
        this.errorMsg = 'Problem fetching repos. Try again later.';
      }
    })
  }

}
