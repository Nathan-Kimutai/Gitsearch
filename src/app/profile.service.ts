import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GitProfile } from './gitprofile';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid='58efe2f056df6787f532';
  private clientsecret='255fdd0f9d77046d8acdb1b891bb3217875ae240';

  constructor(private http:HttpClient) {
    console.log('Service is now ready');
    this.username='Nathan-Kimutai';
   }

   getProfileInfo():Observable<GitProfile[]>{
     return this.http.get<GitProfile[]>('https://api.github.com/users/'+ this.username + "?client_id" + this.clientid + "&client_secret"+ this.clientsecret )
   }
}
