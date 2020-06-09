import {Routes} from '@angular/router';
import {HomeComponent} from './Home/Home.component';
import {CotizacionesComponent} from './cotizaciones/cotizaciones.component';
import {CompraComponent} from './compra/compra.component';


export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cotizaciones', component: CotizacionesComponent },
    { path: 'compra', component: CompraComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];