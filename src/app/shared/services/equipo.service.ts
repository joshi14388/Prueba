import { Injectable } from '@angular/core';
import { Integrante } from '../interfaces/integrante';
import { INTEGRANTES } from '../mocks/mocks';
import { Observable, of } from 'rxjs';
import { MensajeService } from './mensaje.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private equipoUrl = 'api/equipo';  // URL a la web api

  constructor(
    private mensajeSeervice: MensajeService,
    private http: HttpClient) { }

  geIntegrantes(): Observable<Integrante[]> {
    const integrantes = of(INTEGRANTES);
    this.mensajeSeervice.add('EquipoService: integrantes obtenidos');
    return integrantes;
  }
  getIntegrante2(id: number): Observable<Integrante> {
    //asumiendo que existe el integrante con ese id
    const integrante = INTEGRANTES.find(h => h.id === id)!;
    this.mensajeSeervice.add(`EquipoService: Integrante localizado id=${id}`);
    return of(integrante);
  }

  getIntegrante(id: number): Observable<Integrante> {
    const url =  `${this.equipoUrl}/${id}`;
    return this.http.get<Integrante>(url)
      .pipe(
        tap(_ => this.log(`Integrante id=${id}`)),
        catchError(this.handleError<Integrante>(`getIntegrante id=${id}`))
      );
  }

  private log(message: string) {
    this.mensajeSeervice.add(`EquipoService: ${message}`);
  }

  getEquipo(): Observable<Integrante[]> {
    //*variante con http
    return this.http.get<Integrante[]>(this.equipoUrl)
    .pipe(
      tap(_ => this.log('Integrantes de equipo obtenidos')),
      catchError(this.handleError<Integrante[]>('getEquipo', []))
    );
  }

  //*manejo de error: https://angular.io/tutorial/toh-pt6
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
