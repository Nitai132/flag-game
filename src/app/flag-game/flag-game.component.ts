import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-flag-game',
  templateUrl: './flag-game.component.html',
  styleUrls: ['./flag-game.component.css']
})
export class FlagGameComponent implements OnInit {

  countries = [];
  score = 0;
  answersArray = [];

  constructor() { }



  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  sendAnswer(answer) {
    if(answer === this.countries[0].name) {
      this.score++
      alert('your answer is correct!')
    }
    else {
      alert('your answer is wrong :(')
    }
    this.countries.splice(0, 1)
    this.countries = this.shuffle(this.countries)
    this.answersArray = this.shuffle(this.countries.slice(0, 4).map(({name})=> name))
    if (this.countries.length == 4) {
      alert(`well done! you have completed the game! your score is ${this.score}/25 lets start again!`)
      fetch('https://restcountries.eu/rest/v2/region/europe?fields=name;flag')
      .then(res => res.json())
      .then(result => {
        this.countries = result;
        this.answersArray = this.shuffle(result.slice(0, 4).map(({name})=> name))
      })
  }
  }

  ngOnInit(): void {
    fetch('https://restcountries.eu/rest/v2/region/europe?fields=name;flag')
    .then(res => res.json())
    .then(result => {
      this.countries = result.slice(0, 29)
      this.answersArray = this.shuffle(result.slice(0, 4).map(({name})=> name))
    })
    
  }

}
