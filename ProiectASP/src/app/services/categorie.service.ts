import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

public url = 'https://localhost:5001/api/categorie/categorie';
public url2 = 'https://localhost:5001/api/categorie/categcuproduse?cod=';

  constructor(
    public http: HttpClient,
  ) { }

  public GetCategories(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  public GetProduse(cod): Observable<any> {
    
    return this.http.get(`${this.url2 + cod}`);
  }

}
