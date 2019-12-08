import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  // public getContacts(){
  //     return this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4c7ae80db2b448ea8d23c7420a5d7aae');
  //   }

  public getContacts(){
      return this.httpClient.get('http://demo5838836.mockable.io/contact');
    }

}
