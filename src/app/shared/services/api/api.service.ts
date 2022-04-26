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
import { promise } from 'protractor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private hostApi = 'https://coopdgii.com/coopvirtual/App/';
  private _formData: FormData;
  private _token: string;

  token = localStorage.getItem('token');

  constructor(private http: HttpClient) {
    this._formData = new FormData();
    this._token = localStorage.getItem('token');
    this._formData.append('token',this._token);
  }

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

  // getDescuentos(): Observable<any>{
  //   return this.http.get(this.hostApi +'descuentos');
  // }

  getNoticias(): Observable<any>{
    return this.http.get(this.hostApi +'noticias');
  }

  // GetPost

  //RESUMEN
  postResumen(resumen: IResumen): Observable<IResumen>{
    //EJEMPLO PARA OTROS POST QUE SE LE DEBE ENVIAR token - tipo - data
    const data = new FormData();
    // data.append('token','TESTACCOUNTTOKEN434234345424323JAJAJA');
    // data.append('tipo',resumen.tipo);
    // data.append('data',resumen);
    // data.append('data',JSON.stringify(resumen));
    return this.http.post<IResumen>(this.hostApi + 'resumen', data);
  }
  postDescuentos(): Promise<IDescuentos>{

    return this.http.post<IDescuentos>(this.hostApi + 'descuentos',this._formData).toPromise();

    // const data = new FormData();

    // data.append('token', localStorage.getItem('token'));

    // data.append('tipo',descuentos.mes);

    // data.append('data',JSON.stringify(descuentos));

    // return this.http.post<IDescuentos>(this.hostApi + 'descuentos', data);

    // const data = token

    // data.append('data',JSON.stringify(token));

    //let direccion = this.hostApi +'descuentos', data;

    //return this.http.post<IDescuentos>(this.hostApi + 'descuentos', this.)
    // return this.http.get(this.hostApi +'descuentos');
  }
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
    const data = new FormData();
    data.append('usuario',form.usuario);
    data.append('clave',form.clave);
    console.log(data);
    return this.http.post<IResponse>(this.hostApi + 'login', data);
    //EJEMPLO PARA OTROS POST QUE SE LE DEBE ENVIAR token - tipo - data
    // data.append('tipo',form.usuario);
    // data.append('data',form.clave);
    // data.append('token',form.usuario);
    // data.append('data',JSON.stringify(form));
    //return this.http.post<IResponse>(this.hostApi + 'login', data);
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
