import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class contactService {
  constructor(private http:HttpClient){}

  saveContact(data:any){
    return this.http.post(enviroment.apiUrl + '/Website/ContactSaveInfo',data)
  }
  
}
