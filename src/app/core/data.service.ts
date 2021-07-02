import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs"
import { catchError } from "rxjs/operators";

import { IExperience } from "../experience/experience.interfaces";
import { IAbout } from "../about/about.interface";
import { IProject } from "../projects/project.interfaces";




@Injectable({
    providedIn: 'root'
})
export class DataService {
    
    constructor(private http: HttpClient) { }
    
       private baseUrl: string = "assets/data/";

    getExperiences() /*:Observable<IExperience[]>*/ {
        return this.http.get<IExperience[]>(this.baseUrl + "experience.json")//}
            .pipe(
                catchError(this.handleError)
            );
    }
    getAbout() /*:Observable<IExperience[]>*/ {
        return this.http.get<IAbout[]>(this.baseUrl + "about.json")//}
            .pipe(
                catchError(this.handleError)
            );
    }
    getProject() /*:Observable<IExperience[]>*/ {
        return this.http.get<IProject[]>(this.baseUrl + "projects.json")//}
            .pipe(
                catchError(this.handleError)
            );
    }
    
    private handleError(error: any) {
      console.error("server error:", error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || "backend server error");
      }
      return Observable.throw(error || "Node.js server error");
    }
}
