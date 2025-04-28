import { Component } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';
import {
  /* . . . */
  NgFor,
  /* . . . */
} from '@angular/common';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgFor,],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
 
    heroes = HEROES;

}
