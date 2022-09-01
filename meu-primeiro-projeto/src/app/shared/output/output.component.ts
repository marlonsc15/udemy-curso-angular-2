import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  public list: Array<{nome: string, idade: number}> = [
    {nome: "Marlon SC", idade: 22}
    {nome: "Emerson SC", idade: 17}
    {nome: "Felipe SC", idade: 10}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
