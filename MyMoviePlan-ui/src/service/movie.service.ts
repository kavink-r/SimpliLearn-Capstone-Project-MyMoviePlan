import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { movie } from 'src/model/movie';
import { status } from 'src/model/status';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseURL:string='http://192.168.1.10:8080/api/movie';
  constructor(private http:HttpClient) { }

  getAllMovies():Observable<movie[]>{
    return this.http.get<movie[]>(this.baseURL+"/all");
  }
  addMovie(movie:movie):Observable<status>{
    return this.http.post<status>(this.baseURL+"/addMovie",movie);
  }
  getMovieById(id:number):Observable<movie>{
    return this.http.get<movie>(this.baseURL+"/find/"+id);
  }
}
