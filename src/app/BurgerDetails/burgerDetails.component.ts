import { BurgerDetail } from './../Rest/model/burgerDetail';
import { Component, OnInit } from '@angular/core';
import { BurgersService } from './../Rest/api/burgers.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-burger',
  templateUrl: './burgerDetails.component.html',
  styleUrls: ['./burgerDetails.component.css']
})
export class BurgerDetailsComponent implements OnInit {
  
  burger: BurgerDetail;
  ngOnInit() {
    this.getBurgers();    
  } 
  constructor(private route: ActivatedRoute, private location: Location, private burgerService : BurgersService) { }

  getBurgers(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.burgerService.burgerDetail(id).subscribe(resultat => this.burger = resultat);
  }

  goBack(): void {
    this.location.back();
  }
  
}