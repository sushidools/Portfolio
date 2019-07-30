import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AleksandraComponent } from './aleksandra/aleksandra.component';
import { SashaComponent } from './home/sasha/sasha.component';
import { CamillaComponent } from './home/camilla/camilla.component';
import { NinaComponent } from './home/nina/nina.component';
import { EasterComponent } from './home/easter/easter.component';
import { TravelComponent } from './home/travel/travel.component';
import { XmasComponent } from './home/xmas/xmas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AleksandraComponent,
    SashaComponent,
    CamillaComponent,
    NinaComponent,
    EasterComponent,
    TravelComponent,
    XmasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
