import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infopregunta',
  templateUrl: './infopregunta.page.html',
  styleUrls: ['./infopregunta.page.scss'],
})
export class InfopreguntaPage implements OnInit {

  titulo: string;
  subtitulo: string;
  contenido: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.titulo = this.activatedRoute.snapshot.params.titulo;
    this.subtitulo = this.activatedRoute.snapshot.params.subtitulo;
    this.contenido = this.activatedRoute.snapshot.params.contenido;
    console.log(this.titulo);
    console.log(this.subtitulo);
    console.log(this.contenido);
  }

}
