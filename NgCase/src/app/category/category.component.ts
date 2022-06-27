import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Categories } from '../models/categories';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})

export class CategoryComponent implements OnInit {
  categories:Categories[];
  @Output() categoryId = new EventEmitter<number>;
  
  constructor(private categoryService:CategoryService ) { }

  ngOnInit(): void {
      this.categoryService.getCategory().subscribe(data=>{
      this.categories = data;
    });
    this.categoryId.emit(0);
  }

  categoryOnClick(value: number){
    this.categoryId.emit(value);
    console.log("category id: "+ value)
  }
  displayAllCategories(id: number){
    if( id == 6){
      this.categoryId.emit(0);
    }
  }

  public activeIndex: number;
  public active(index: number): void {
    this.activeIndex = index;
  }
}
