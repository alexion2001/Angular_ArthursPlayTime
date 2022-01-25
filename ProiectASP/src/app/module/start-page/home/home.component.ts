import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public parentMessage = 'Trebuie sa fie logat pentru a face cumparaturi';

  constructor() { }

  ngOnInit(): void {
  }

  public reciveMessage(event): void {
    console.log(event);
  }
}
