import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <app-output></app-output>
    <!--<app-input [contador]="addValue"></app-input>
    <br>
    <button (click)="add()">Add</button>
     <app-new-component></app-new-component>
    <app-diretivas-atributos>
      <h1>Aulas de Diretiva Atributo</h1>
      <hr>
    </app-diretivas-atributos> 
     <app-diretivas-atributos></app-diretivas-atributos> 
     <app-diretivas-estruturais></app-diretivas-estruturais> -->


    <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  public addValue: number = 10;

  constructor() { }

  ngOnInit(): void { }

  public add() {
    this.addValue += 1;
  }
   
}
