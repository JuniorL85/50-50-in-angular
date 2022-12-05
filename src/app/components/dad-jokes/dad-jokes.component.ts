import { Component, OnInit } from '@angular/core';
import { DadJokesService } from './dad-jokes.service';
import { IJokes } from './jokes';

@Component({
  selector: 'app-dad-jokes',
  templateUrl: './dad-jokes.component.html',
  styleUrls: ['./dad-jokes.component.scss']
})
export class DadJokesComponent implements OnInit {

  jokes: IJokes | undefined;

  constructor(private dadJokesService: DadJokesService) {}

  ngOnInit(): void {
    this.getJokes();
  }

  getJokes() {
    this.dadJokesService.getDadJokes().subscribe(res => {
      this.jokes = res;
    })
  }

}
