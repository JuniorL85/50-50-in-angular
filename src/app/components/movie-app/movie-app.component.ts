import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie-app',
  templateUrl: './movie-app.component.html',
  styleUrls: ['./movie-app.component.scss']
})
export class MovieAppComponent implements OnInit {

  movies!: IMovie[];

  imgPath: string = 'https://image.tmdb.org/t/p/w1280';

  searchInput: string = '';
  showError: boolean = false;
  showLoader: boolean = false;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.showError = false;
    this.showLoader = true;
    this.movieService.getMovies().subscribe({
      next: res => {
        setTimeout(() => {
          this.movies = res.results;
          this.showLoader = false;
        }, 2500);
      },
      error: () => {
        this.showError = true;
        this.showLoader = false;
        }
      })
  }

  getKidsMovies() {
    this.showError = false;
    this.movieService.getKidsMovies().subscribe({
      next: res => {
      this.movies = res.results;
      },
      error: () => this.showError = true
      })
  }

  getClassByRate(vote: number) {
    if(vote >= 7.5) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

  searchMovies(event: any, searchInput: string) {
    event.preventDefault();

    if (searchInput && searchInput !== '') {
      this.showError = false;
      this.movieService.searchMovies(searchInput).subscribe({
        next: res => {
        this.movies = res.results;
        this.searchInput = '';
        },
        error: () => this.showError = true
        })
    } else {
      this.getMovies();
    }
  }

}
