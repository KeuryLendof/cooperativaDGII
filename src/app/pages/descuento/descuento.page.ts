import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { IDescuentos } from 'src/app/core/interfaces/descuentos';

@Component({
  selector: 'app-descuento',
  templateUrl: './descuento.page.html',
  styleUrls: ['./descuento.page.scss'],
})
export class DescuentoPage implements OnInit {


  public descuentos: IDescuentos[]=[];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.postDescuentos().then(res=>{
      console.log(res);
      this.descuentos = res.data;
      console.log(this.descuentos);
    });
  }

  // postDescuentos(descuentos: IDescuentos){
  //   this.api.postDescuentos().subscribe(data=>{
  //     console.log(data)
  //   })
  // }

}
