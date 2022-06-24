import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categories } from "../models/categories";

@Injectable()
export class CategoryService{
    url= "http://localhost:3000/categories"
    constructor(private htpp: HttpClient){}

    getCategory():Observable<Categories[]>{
        return this.htpp.get<Categories[]>(this.url);
    }

}   