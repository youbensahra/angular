import { Burger } from './../Rest/model/burger';
import { Component, OnInit } from '@angular/core';
import { BurgersService } from './../Rest/api/burgers.service';


@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  
  burger: Burger[]
  ngOnInit() {
    this.getBurgers();    
  } 
  constructor(private burgerService: BurgersService) {}

  getBurgers(): void {
    this.burgerService.listBurgers().subscribe(resultat => this.burger = resultat);
  }

  
}