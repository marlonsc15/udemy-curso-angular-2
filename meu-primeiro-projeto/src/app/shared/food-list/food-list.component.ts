import { FoodList } from './../../module/food-list';
import { FoodListService } from './../../services/food-list.service';
import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> = [];
  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(res => this.foodList = res,
      error => error
    );

    this.foodListService.emitEvent.subscribe(
      res => {
        alert(`Olha voce add => ${res.nome}`)
        return this.foodList.push(res);
      }
    );
  }

  public foodListDelete(id: number) {
    return this.foodListService.foodListDelete(id).subscribe(
      res => {
        this.foodList = this.foodList.filter(
          item => {
            return id !== item.id
          }
        )
      },
      error => error
    )
  }
  
}
