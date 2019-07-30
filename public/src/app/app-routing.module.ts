import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AleksandraComponent } from './aleksandra/aleksandra.component';
import { CamillaComponent } from './home/camilla/camilla.component';
import { NinaComponent } from './home/nina/nina.component';
import { EasterComponent } from './home/easter/easter.component';
import { TravelComponent } from './home/travel/travel.component';
import { XmasComponent } from './home/xmas/xmas.component';
import { SashaComponent } from './home/sasha/sasha.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'sasha', component: SashaComponent },
      { path: 'camilla', component: CamillaComponent },
      { path: 'nina', component: NinaComponent },
      { path: 'easter', component: EasterComponent },
      { path: 'travel', component: TravelComponent },
      { path: 'xmas', component: XmasComponent },
  ] },
  { path: 'aleksandra', component: AleksandraComponent },
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
