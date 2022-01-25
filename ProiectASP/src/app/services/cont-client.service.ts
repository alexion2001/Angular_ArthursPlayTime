import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContClientService {
  panelOpenState = false;

  public url = 'https://localhost:5001/api/Clienti/ComenziClient?mail=';
  public url2 = 'https://localhost:5001/api/Clienti/byMail?mail=';
  public url3 = 'https://localhost:5001/api/Clienti/';
  public url4 = 'https://localhost:5001/api/Comenzi';
  public url5 = 'https://localhost:5001/api/DetaliiComanda';

  constructor(
    public http: HttpClient,
    
  ) { }

  public getComenzi(mail): Observable<any> {
    
    return this.http.get(`${this.url + mail}`);
  }

  public getClient(mail): Observable<any> {
    
    return this.http.get(`${this.url2 + mail}`);
  }
  public updateTel(user,tel): Observable<any> {
    
    
    return this.http.patch(`${this.url3 + user + '?tel=' + tel}`, tel);
  }
  
  public putComanda(comanda): Observable<any> {
    
    
    return this.http.post(`${this.url4}`, comanda);
  }
  public putDetalii(comanda): Observable<any> {
    
    
    return this.http.post(`${this.url5}`, comanda);
  }
}
