import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
​
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
​
export class ContactsComponent implements OnInit {
    contacts;
​
    constructor(private ApiService: ApiService) { }
    ngOnInit() {
      this.ApiService.getContacts().subscribe((data)=>{
        console.log(data);
​
		//This guy here. Change it to this
        // this.contacts = data['contacts'];

		this.contacts = data
      });
    }
  }
