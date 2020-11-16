import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Magasin} from "../models/Magasin";
import {catchError, retry} from "rxjs/operators";
import {throwError} from "rxjs";
import {Categorie} from "../models/Categorie";
@Injectable({
  providedIn: 'root'
})
export class AjoutService {


  h = new HttpHeaders().append('Content-Type', 'application/json')
    .append('Accept','application/json');
  constructor(private http: HttpClient) { }
  apiUrl = 'http://127.0.0.1:8090/';
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  persistMagasin(magasin:Magasin,callback) {
    return this.http.post<Magasin>(this.apiUrl, magasin)
      .pipe(retry(1), catchError(this.handleError)).subscribe(
        data =>{
          console.log(data);
        callback()}
      )
  }
  persistCategorie(categorie:Categorie,callback) {
       return this.http.post<Magasin>(this.apiUrl, categorie)
      .pipe(retry(1), catchError(this.handleError)).subscribe(
        data =>{
          callback()
        }
      )
  }





}
