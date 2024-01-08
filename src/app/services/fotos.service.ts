import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotosService {
  private AccessKey = 'cMNucOyW5r1InzCPu8E2k-1bdVdBqMa218qmdPIGJcg';
  private Secretkey = 'YxR29iQltgo-HD9hbqfK6_6AJBVpQOFvrfhgHwttq_0';
  
  private api = 'https://api.unsplash.com/photos'

  private search = 'https://api.unsplash.com/search/photos?page=1&query='

  constructor(
    private http: HttpClient
    ) { }

  getImages(){
    return this.http.get(`${this.api}/?client_id=${this.AccessKey}`)
  }

  searchImages(query: string): Observable<any>{
    return this.http.get(`${this.search}${query}&client_id=${this.AccessKey}`).
    pipe(
      map( (res: any) => res?.results)
    )
  }
}
