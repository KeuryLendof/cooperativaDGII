import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { IPrestamos } from 'src/app/core/interfaces/prestamos';
import { IPrueba } from 'src/app/core/interfaces/prueba';
import { ServicesService } from 'src/app/shared/services/services.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.page.html',
  styleUrls: ['./prestamo.page.scss'],
})
export class PrestamoPage implements OnInit {

  public prestamos: Array<any>=[];
  public prueba: IPrueba;

  multipleArray = [];

  idprestamo: number;
  descripcion: string;
  montoPrestamo: string;
  tasaInteres: string;
  fechaPrestamo: string;
  fechaVencimiento: string;
  montoInteres: string;
  cuota: string;
  montoSeguro: string;
  balancePrestamo: string;
  consecutivoCuota: string;

  constructor(private api: ApiService, private servicio: ServicesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit():void {
    this.idprestamo = parseFloat(this.activatedRoute.snapshot.params.idprestamo);
    this.descripcion = this.activatedRoute.snapshot.params.descripcion;
    this.montoPrestamo = this.activatedRoute.snapshot.params.montoPrestamo;
    this.tasaInteres = this.activatedRoute.snapshot.params.tasaInteres;
    this.fechaPrestamo = this.activatedRoute.snapshot.params.fechaPrestamo;
    this.fechaVencimiento = this.activatedRoute.snapshot.params.fechaVencimiento;
    this.montoInteres = this.activatedRoute.snapshot.params.montoInteres;
    this.cuota = this.activatedRoute.snapshot.params.cuota;
    this.montoSeguro = this.activatedRoute.snapshot.params.montoSeguro;
    this.balancePrestamo = this.activatedRoute.snapshot.params.balancePrestamo;
    this.consecutivoCuota = this.activatedRoute.snapshot.params.consecutivoCuota;

    
    this.mostrarData(this.idprestamo,this.descripcion,this.montoPrestamo,this.tasaInteres, this.fechaPrestamo
       ,this.fechaVencimiento ,this.montoInteres ,this.cuota,this.montoSeguro,this.balancePrestamo,this.consecutivoCuota)
  }

  mostrarData(idprestamo,descripcion,montoPrestamo,tasaInteres,fechaPrestamo,fechaVencimiento,montoInteres,cuota,montoSeguro,balancePrestamo,consecutivoCuota){
    this.multipleArray.push({
      id:idprestamo,
      descripcion:descripcion,
      montoPrestamo:montoPrestamo,
      tasaInteres:tasaInteres,
      fechaPrestamo:fechaPrestamo,
      fechaVencimiento:fechaVencimiento,
      montoInteres:montoInteres,
      cuota:cuota,
      montoSeguro:montoSeguro,
      balancePrestamo:balancePrestamo,
      consecutivoCuota:consecutivoCuota
    })
  }
}
