import { Burger } from './../Rest/model/burger';
import { Component, OnInit } from '@angular/core';
import { BurgersService } from './../Rest/api/burgers.service';


@Component({
  selector: 'app-burger-list',
  templateUrl: './burgerListe.component.html',
  styleUrls: ['./burgerListe.component.css']
})
export class BurgerListeComponent implements OnInit {
  
  burger: Burger[];
  
  ngOnInit() {
    this.getBurgers();    
  } 
  constructor(private burgerService: BurgersService) {}

  getBurgers(): void {
    this.burgerService.listBurgers().subscribe(resultat => this.burger = resultat);
  }

  
}