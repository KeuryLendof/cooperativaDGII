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
import { ISolicitudes } from 'src/app/core/interfaces/solicitudes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  token = localStorage.getItem('token');

  private hostApi = 'https://coopdgii.com/coopvirtual/App/';
  private formData: FormData;
  private tokenInit: string;


  constructor(private http: HttpClient) {
    this.formData = new FormData();
    this.tokenInit = localStorage.getItem('token');
    this.formData.append('token',this.tokenInit);
  }

  // GetPost

  //RESUMEN
  postResumen(): Promise<IResumen>{
    return this.http.post<IResumen>(this.hostApi + 'resumen', this.formData).toPromise();
  }

  postDescuentos(): Promise<IDescuentos>{
    return this.http.post<IDescuentos>(this.hostApi + 'descuentos',this.formData).toPromise();
  }

  //PRESTAMOS
  postPrestamos(): Promise<IPrestamos>{
    return this.http.post<IPrestamos>(this.hostApi + 'prestamos',this.formData).toPromise();
  }

  //SOLICITUDES
  postSolicitud(): Promise<ISolicitudes>{
    return this.http.post<ISolicitudes>(this.hostApi + 'solicitudes',this.formData).toPromise();
  }

  //TIPOS DE SOLICITUDES
  postSolicitudesTipo(): Promise<ISolicitudesTipo>{
    return this.http.post<ISolicitudesTipo>(this.hostApi + 'solicitudes_tipos',this.formData).toPromise();
  }

  //NOTICIAS
  postNoticias(): Promise<INoticias>{
    return this.http.post<INoticias>(this.hostApi + 'noticias',this.formData).toPromise();
  }

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
