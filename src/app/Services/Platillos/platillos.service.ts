import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urls } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  constructor(
    private http: HttpClient
  ) { }
  obtenerPlatilloPorId(id: string): Observable<any> {
    return this.http.get<any>(`${urls.urlBack}lookup.php?i=${id}`);
  }
  obtenerPlatillos(): Observable<any> {
    return this.http.get<any>(`${urls.urlBack}search.php?s=`);
  }
  obtenerPlatillosRandom(): Observable<any> {
    return this.http.get<any>(`${urls.urlBack}random.php`);
  }
  obtenerPlatillosArea(area: string): Observable<any> {
    return this.http.get<any>(`${urls.urlBack}filter.php?a=${area}`)
  }
  obtenerPlatillosCategoria(categoria: string): Observable<any> {
    return this.http.get<any>(`${urls.urlBack}filter.php?c=${categoria}`);
  }
}
