import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(){};

  title= "Questo è il pokedex di Ettore";

  ngOnInit(): void {
    console.log("ngOnInIt");
  }

}
