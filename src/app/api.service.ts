import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private SERVER_URL = "http://demo5838836.mockable.io/contact";

  constructor(private httpClient: HttpClient) { }

  // public get(){
	// 	return this.httpClient.get(this.SERVER_URL);
	// }
  public getContacts(){
      return this.httpClient.get('http://demo5838836.mockable.io/contact');
    }

}
