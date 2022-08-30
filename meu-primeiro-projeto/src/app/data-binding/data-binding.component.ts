import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "marlon";
  public idade: number = 22;

  public checkedDisabled: boolean = true;

  public imgSrc: string = "https://www.ahnegao.com.br/wp-content/uploads/2019/10/figurinha_peixe_whats-2.jpg"
  public imgTitle:string = "Property Binding"

  public position: { x: number, y: number } = { x: 0, y: 0}
  constructor() { }

  ngOnInit(): void {
  }

  public alertaInfo(valor: any) {
    console.log(valor); 
  }

  public mouseMoveTeste(valor: any) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;

  }
}
