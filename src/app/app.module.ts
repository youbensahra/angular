import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiModule } from './Rest';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BurgerListeComponent } from './BurgerListe/burgerListe.component';
import { BurgerDetailsComponent } from './BurgerDetails/BurgerDetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    BurgerListeComponent,
    BurgerDetailsComponent
  ],
  imports: [
    BrowserModule,
    ApiModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
