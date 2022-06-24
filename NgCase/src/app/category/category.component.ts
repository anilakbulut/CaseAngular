import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Categories } from '../models/categories';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:Categories[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<Categories[]>("http://localhost:3000/categories").subscribe(data=>{
      this.categories = data;
    });
  }

}
