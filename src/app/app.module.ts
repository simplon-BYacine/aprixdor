import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { NgAprixdorRoutingModule } from './app-routing.module';

import { CityService } from './services/city.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SerrurerieComponent } from './body/serrurerie/serrurerie.component';
import { PlomberieComponent } from './body/plomberie/plomberie.component';
import { CallbarComponent } from './callbar/callbar.component';
import { HomeComponent } from './body/home/home.component';
import { AssuranceComponent } from './body/features/assurance/assurance.component';
import { OnlineComponent } from './body/features/online/online.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SerrurerieComponent,
    PlomberieComponent,
    CallbarComponent,
    HomeComponent,
    AssuranceComponent,
    OnlineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgAprixdorRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [
    CityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
