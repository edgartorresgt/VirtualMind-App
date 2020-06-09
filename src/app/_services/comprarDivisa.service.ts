import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComprarDivisaService {
baseUrl = 'http://localhost:5000/api/';
cotizacion: any;
constructor(private http: HttpClient) { }

comprarDivisa(model: any){
 return this.http.post(this.baseUrl + 'CompraMoneda', model)
    .pipe(
      map((responseCompra: any) => {
        if (responseCompra){
           console.log('Realizado');
        }
      })
    );
}

ObtenerTransacciones(): Observable<any[]>{
  return this.http.get<any[]>(this.baseUrl + 'CompraMoneda');
}

}
