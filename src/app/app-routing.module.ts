import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurgerDetailsComponent } from './BurgerDetails/burgerDetails.component';
import { BurgerListeComponent } from './BurgerListe/burgerListe.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  { path: '', component: BurgerListeComponent },
  { path: 'burger/:id', component: BurgerDetailsComponent }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }