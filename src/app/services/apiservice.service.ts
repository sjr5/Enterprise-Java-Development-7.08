import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private apiUrl = 'https://ih-crud-api.herokuapp.com/characters';

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
}
getCharacterById(id: string): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/${id}`);
}

deleteCharacter(id: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`);
}
}
