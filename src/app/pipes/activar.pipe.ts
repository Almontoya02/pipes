import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activar'
})
export class ActivarPipe implements PipeTransform {

  transform(value: string, activar:boolean=true): unknown {
    if(activar){
      let retorno=""
      for (let index = 0; index < value.length; index++) {
        retorno=retorno+"*" 
        
      }
      return retorno
    }
    else{
      return value;
    }
  }

}
