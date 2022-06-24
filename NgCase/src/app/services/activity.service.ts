import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Activities } from "../models/activities";

@Injectable()
export class ActivityService{
    url= "http://localhost:3000/activities"

    constructor(private http: HttpClient){}
    
    getActivity(actType: string): Observable<Activities[]>{
        let categoryUrl = this.url;
        if(actType){ categoryUrl += '?actType=' + actType;}

        return this.http.get<Activities[]>(categoryUrl);
    }
}