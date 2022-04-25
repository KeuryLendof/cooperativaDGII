import { IResumen } from './../../../core/interfaces/resumen';
import { IPrestamos } from './../../../core/interfaces/prestamos';
import { ISolicitudesTipo } from './../../../core/interfaces/solicitudesTipos';
import { IDescuentos } from './../../../core/interfaces/descuentos';
import { INoticias } from './../../../core/interfaces/noticias';
import { ILogueado } from './../../../core/interfaces/logueado';
import { IResponse } from './../../../core/interfaces/response.interface';
import { ILogin } from './../../../core/interfaces/login.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private hostApi = 'https://coopdgii.com/coopvirtual/App/';

  constructor(private http: HttpClient) { }

  //GET

  getResumen(): Observable<any>{
    return this.http.get(this.hostApi +'resumen');
  }

  getPrestamos(): Observable<any>{
    return this.http.get(this.hostApi +'prestamos');
  }

  getCuentas(): Observable<any>{
    return this.http.get(this.hostApi +'cuentas');
  }

  getSolicitudes(): Observable<any>{
    return this.http.get(this.hostApi +'solicitudes');
  }

  getSolicitudesTipo(): Observable<any>{
    return this.http.get(this.hostApi +'solicitudes_tipo');
  }

  getDescuentos(): Observable<any>{
    return this.http.get(this.hostApi +'descuentos');
  }

  getNoticias(): Observable<any>{
    return this.http.get(this.hostApi +'noticias');
  }

  // GetPost

  // postResumen(resumen: IResumen): Observable<IResumen>{
  //   const token = localStorage.getItem('token');
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': 'Bearer ' + token
    // })
    //// return this.http.get(this.hostApi +'resumen');
    // return this.http.post<IResumen>(this.hostApi+'resumen', resumen, { headers: headers });
  // }

  //PRESTMO
  // postPrestamos(prestamo: IPrestamos): Observable<IPrestamos>{
    // const token = localStorage.getItem('token');
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': 'Bearer ' + token
    // })
    //// return this.http.get(this.hostApi +'prestamos');
    // return this.http.post<IPrestamos>(this.hostApi+'prestamos', prestamo, { headers: headers });
  // }

  //CUENTAS NO SIRVE
  // postCuentas(): Observable<any>{
    // const token = localStorage.getItem('token');
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': 'Bearer ' + token
    // })
    // return this.http.get(this.hostApi +'cuentas');
    // return this.http.post<IActor>(this.hostApi+'cuentas', actor, { headers: headers });
  // }

  //SOLICITUD
  // postSolicitudes(solicitud: ISolicitudes): Observable<ISolicitudes>{
  //   const token = localStorage.getItem('token');
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': 'Bearer ' + token
    // })
    //// return this.http.get(this.hostApi +'solicitudes');
  //   return this.http.post<ISolicitudes>(this.hostApi+'solicitudes', solicitud, { headers: headers });
  // }

  //SOLICITUD TIPO
  // postSolicitudesTipo(solicitudTipo: ISolicitudesTipo): Observable<ISolicitudesTipo>{
  //   const token = localStorage.getItem('token');
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': 'Bearer ' + token
    // })
    //// return this.http.get(this.hostApi +'solicitudes_tipo');
    // return this.http.post<ISolicitudesTipo>(this.hostApi+'solicitudes_tipo', solicitudTipo, { headers: headers });
  // }

  //DESCUENTOS
  // postDescuentos(descuento: IDescuentos): Observable<IDescuentos>{
  //   const token = localStorage.getItem('token');
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': 'Bearer ' + token
    // })
    //// return this.http.get(this.hostApi +'descuentos');
    // return this.http.post<IDescuentos>(this.hostApi+'descuentos', descuento, { headers: headers });
  // }

  //NOTICIAS
  // postNoticias(noticia: INoticias): Observable<INoticias>{
  //   const token = localStorage.getItem('token');
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': 'Bearer ' + token
    // })
    //// return this.http.get(this.hostApi +'noticias');
    // return this.http.post<INoticias>(this.hostApi+'noticias', noticia, {headers:Headers});
  // }

  //POST

  //LOGIN
  postLogin(form: ILogin): Observable<IResponse>{
    console.log(form);
    return this.http.post<IResponse>(this.hostApi + 'login', form);
  }

  postLog(form: ILogin): Observable<IResponse>{
    console.log(form);
    const body = JSON.stringify(form);
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post<IResponse>(this.hostApi+ 'login', body, { headers });
  }

  // postSolicitudesRegistro(actor: IActor): Observable<IActor>{
  //   let Token = localStorage.getItem("Token");
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ' + Token
  //   })
  //   return this._http.post<IActor>(this.hostApi+'solicitudes_registro', actor, { headers: headers })
  // }

}
