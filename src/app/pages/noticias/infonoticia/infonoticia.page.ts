import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INoticias } from 'src/app/core/interfaces/noticias';

@Component({
  selector: 'app-infonoticia',
  templateUrl: './infonoticia.page.html',
  styleUrls: ['./infonoticia.page.scss'],
})
export class InfonoticiaPage implements OnInit {

// NoticiaOne: string[]=[];
  //ID:string;
  NoticiaOne=[];
  // public noticias: INoticias[]=[];

   ID:string;
   TITLE:string;
   IMAGEN:string;
   DATE:string;
   CONTENT:string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.noticias = this.activatedRoute.snapshot.params.id;
    // this.VerFullNoticia(this.ID);
    this.ID = this.activatedRoute.snapshot.params.ID;
    this.TITLE = this.activatedRoute.snapshot.params.TITLE;
    this.IMAGEN = this.activatedRoute.snapshot.params.IMAGEN;
    this.DATE = this.activatedRoute.snapshot.params.DATE;
    this.CONTENT = this.activatedRoute.snapshot.params.CONTENT;

    this.VerFullNoticia(this.ID,this.TITLE,this.DATE,this.CONTENT,this.IMAGEN);
  }

  VerFullNoticia(ID,TITLE,DATE,CONTENT,IMAGEN){
    this.NoticiaOne.push({
      ID:ID,
      TITLE:TITLE,
      DATE:DATE,
      CONTENT:CONTENT,
      IMAGEN:IMAGEN
    });
  }

}
