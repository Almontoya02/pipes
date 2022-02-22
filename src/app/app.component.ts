import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesProject';
  nombre: string = "Captain America"
  nombre2:string ="AleJanDrO mOnTOyA"
  arreglo:number[]=[1,2,3,4,5,6,7,8,9]
  PI:number= Math.PI
  porcentaje: number =0.234
  salario:number=1234.5
  fecha: Date = new Date()
  idioma:string ="es"
  activate:boolean=true
  videoUrl="https://www.youtube.com/embed/wXhTHyIgQ_U";
  valorPromesa = new Promise<string>((resolve)=>{
    setTimeout(() => {  
      resolve('llegó la data')
    }, 4500);
  })
  heroe={
    nombre:'Peter',
    clave:'Spiderman',
    edad:17,
    direccion:{
      calle:'primera',
      casa:20
    }
  }


}
