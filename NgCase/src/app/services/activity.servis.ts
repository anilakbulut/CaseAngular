import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Activities } from "../models/activities";

@Injectable()
export class ActivityService{
    url= "http://localhost:3000/activities"

    constructor(private http: HttpClient){}
    
    getActivity(): Observable<Activities[]>{
        return this.http.get<Activities[]>(this.url);
    }
}