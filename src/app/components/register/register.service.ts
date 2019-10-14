import { Injectable } from '@angular/core';
import { registerAPIPath } from './register.api-path';
import { HttpClientService } from '../../../services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private queryParams:object={};
    constructor(private httpClientService:HttpClientService) {
    }

    public registerUser(userRegistration:object){
      console.log('-------user data in user service--------', userRegistration);
        return this.httpClientService.postServerRequest(registerAPIPath['register'], this.queryParams, userRegistration);
    }
}
