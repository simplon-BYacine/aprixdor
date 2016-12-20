import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './body/home/home.component';
import { SerrurerieComponent } from './body/serrurerie/serrurerie.component';
import { PlomberieComponent } from './body/plomberie/plomberie.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'serrurerie', component: SerrurerieComponent },
  { path: 'plomberie', component: PlomberieComponent },
  { path: 'serrurerie/:service', component: SerrurerieComponent },
  { path: 'plomberie/:service', component: PlomberieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class NgAprixdorRoutingModule { }
