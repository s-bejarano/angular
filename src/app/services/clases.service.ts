import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clases } from '../interfaces/clases';
import { Observable } from 'rxjs';
import { HttpClientTestingModule }from '@angular/common/http/testing'
@Injectable({
  providedIn: 'root'
})
export class ClasesService {
  
  constructor(private httpClient: HttpClient) {  }


    public listaClases():Observable<Clases[]> {

      return this.httpClient.get<Clases[]>(
        'https://64481a457bb84f5a3e527106.mockapi.io/api/Clases'
      )

    }

    public getClase(id: number):Observable<Clases> {

      return this.httpClient.get<Clases>(
        'https://64481a457bb84f5a3e527106.mockapi.io/api/Clases/'+`${id}`
      )

    }

    deleteClase(id: number):Observable<void> {

      return this.httpClient.delete<void>(
        
        'https://64481a457bb84f5a3e527106.mockapi.io/api/Clases/'+`${id}`
      ) ;
      
    }

    addClase(clase: Clases): Observable<Clases> {

      return this.httpClient.post<Clases>('https://64481a457bb84f5a3e527106.mockapi.io/api/Clases/',clase);
    }

    updateClase(id: number, clase: Clases): Observable<void> {

      return this.httpClient.put<void>('https://64481a457bb84f5a3e527106.mockapi.io/api/Clases/'+`${id}`,clase);
    }



    }


    
      /*
          getClase(id: number): Observable<Clases[]> {
        return this.http.get<Clases>(` 'https://64481a457bb84f5a3e527106.mockapi.io/api/Clases'${id}`);
      };
    
      deleteMascota(id: number): Observable<void> {
        return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
      }
    
      addMascota(mascota: Mascota): Observable<Mascota> {
        return this.http.post<Mascota>(`${this.myAppUrl}${this.myApiUrl}`, mascota);
      }
    
      updateMascota(id: number, mascota: Mascota): Observable<void> {
        return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, mascota);
      }
      
      */
   

 

