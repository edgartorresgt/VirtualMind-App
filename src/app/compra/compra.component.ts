import { Component, OnInit } from '@angular/core';
import { ComprarDivisaService } from '../_services/comprarDivisa.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
model: any = {};
showSpinner = false;
transacciones: any = [];
  constructor(private comprarDivisa: ComprarDivisaService) { }

  ngOnInit() {
    this.obtenerTransacciones();
  }

  obtenerTransacciones(){
    this.comprarDivisa.ObtenerTransacciones().subscribe(response => {
      this.transacciones = response;
    });
  }
  comprarDivisas(){
    this.showSpinner = true;
    this.comprarDivisa.comprarDivisa(this.model).subscribe(next => {
      this.showSpinner = false;
      this.obtenerTransacciones();
    }, error => {
      console.log(error);
    });
  }
}
