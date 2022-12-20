import { Component, OnInit } from '@angular/core';
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

  constructor(private githubProfilesService: GithubProfilesService) {}

  getUser() {
    this.githubProfilesService.getGithubUser(this.searchedUser).subscribe(res => {
      this.user = res;
      this.searchedUser = '';
    })
  }

}
