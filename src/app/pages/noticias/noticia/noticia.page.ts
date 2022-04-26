import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/shared/services/api/api.service';
import {INoticias} from 'src/app/core/interfaces/noticias';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {

  public noticias: INoticias[]=[];
  // id: string;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void{
    this.api.postNoticias().then(res=>{
      console.log(res);
      this.noticias = res.data;
      console.log(this.noticias);
    });
  }

  // FullNoticia(ID){
  //   this.router.navigate(['/infonoticia',ID]);
  //   //[routerLink]="['']"
  // }

}
