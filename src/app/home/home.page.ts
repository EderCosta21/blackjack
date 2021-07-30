import { gerarCartas } from './../services/gerarCartas';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public gerarCarts : gerarCartas) {}

 
  ionViewWillEnter(){

  console.log( "sorteio pessoa",this.gerarCarts.sorteioCartasPessoa())
  console.log( "sorteio maquina",this.gerarCarts.sorteioCartasMaquina())
  }


}
