import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';
import { CompraComponent } from './compra/compra.component';
import { NavComponent } from './nav/nav.component';
import { ComprarDivisaService } from './_services/comprarDivisa.service';
import { HomeComponent } from './Home/Home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

@NgModule({
   declarations: [
      AppComponent,
      CotizacionesComponent,
      CompraComponent,
      NavComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      CommonModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      ComprarDivisaService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
