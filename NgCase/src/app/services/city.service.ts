import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cities } from "../models/cities";

@Injectable()
export class CityService{
    url= "http://localhost:3000/cities"
    constructor(private htpp: HttpClient){}

    getCities():Observable<Cities[]>{
        return this.htpp.get<Cities[]>(this.url);
    }

}   