import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { datosPreguntasFrecuentes } from './../../../core/mocks/datos';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
})
export class PreguntasPage implements OnInit {

  public datos = datosPreguntasFrecuentes;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.datos);
  }

  abrirPregunta(pregunta: any){
    // this.router.navigate(['/infopregunta',this.datos]);
    this.router.navigate(['/infopregunta',pregunta.titulo,pregunta.subtitulo,pregunta.contenido]);
    console.log(pregunta);
  }

}
