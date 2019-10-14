import { Injectable } from '@angular/core';
import { environment } from '../environments/environments.local';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  host:string;
   
    constructor() {
        if(environment['apiHost']) {
            this.host = environment['apiHost'];
        }
        if(environment['apiPort']) {
            this.host = this.host + ":"+environment['apiPort'];
        }
        if(environment['apiRoutePath']) {
            this.host = this.host + environment['apiRoutePath'];
         }
    
    }

    getHost(){
        return this.host;
    }
}
