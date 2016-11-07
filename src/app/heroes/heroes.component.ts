import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService],
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
