import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private token='10fe6b2c2d6a2fdda5d5cdba7093b261dbba73b2';

  constructor(private http:HttpClient) {
    console.log('Service is now ready');
    this.username="reivhax";
   }
   getProfileInfo(username: string = this.username){
     return this.http.get('https://api.github.com/users/'+ username + "?access_token=" + this.token)
   }
}
