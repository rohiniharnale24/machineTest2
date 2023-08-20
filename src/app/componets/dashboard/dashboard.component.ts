import { Component, OnInit } from '@angular/core';
import { cardArray } from 'src/app/const/array';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  array = cardArray;
  constructor() {}

  onCardOver(c: HTMLDivElement) {
    let isActive = 0;

    c.style.backgroundColor = 'orange';
  }

  ngOnInit(): void {}
}
