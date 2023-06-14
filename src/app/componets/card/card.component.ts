import { Component, OnInit } from '@angular/core';
import { cardArray } from 'src/app/const/array';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  array = cardArray;

  constructor() {}

  onCardOver(c: HTMLDivElement) {
    c.style.backgroundColor = 'orange';
  }
  ngOnInit(): void {}
}
