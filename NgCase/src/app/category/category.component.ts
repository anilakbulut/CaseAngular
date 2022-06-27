import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  constructor(private categoryService:CategoryService ) { }

  ngOnInit(): void {
      this.categoryService.getCategory().subscribe(data=>{
      this.categories = data;
    });
  }
}
