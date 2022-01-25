import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public url = 'https://localhost:5001/api/Account/register';
  public url2 = 'https://localhost:5001/api/Clienti';

  constructor(
    public http: HttpClient,
    
  ) { }

  public addRegister(user): Observable<any> {
    
    return this.http.post(`${this.url}`,user);
  }

  public addClient(user): Observable<any> {
    
    return this.http.post(`${this.url2}`,user);
  }
  
  
}
