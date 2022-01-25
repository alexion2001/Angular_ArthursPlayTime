import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url = 'https://localhost:5001/api/Account/login';
  


  constructor(
    public http: HttpClient,
    
  ) { }

  
  public addLogin(log): Observable<any> {

    return this.http.post(`${this.url}`,log);
  }
}
