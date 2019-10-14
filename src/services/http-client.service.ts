import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private utilityService: UtilityService, private httpClient: HttpClient) {
  }

  public getServerRequest(routhPath: string, queryParams: object) {
      return this.httpClient.get(this.utilityService.createRequestURL(routhPath, queryParams));
  }

  // public postServerRequest(routhPath: string, queryParams: object, data) {
  //     console.log('---data---', data);
  //     return this.httpClient.post(routhPath, data);
  // }
  public postServerRequest(routhPath:string, queryParams:object, data:object){
      console.log("---data---", data)
      return this.httpClient.post(this.utilityService.createRequestURL(routhPath, queryParams), data);
  }

  public putServerRequest(routhPath: string, queryParams: object, data: object)  {
      return this.httpClient.put(this.utilityService.createRequestURL(routhPath, queryParams), data);
  }

  // public putServerRequest(routhPath: string, data)  {
  //     return this.httpClient.put(routhPath, data);
  // }

  public patchServerRequest(routhPath: string, queryParams: object, data: object) {
      return this.httpClient.patch(this.utilityService.createRequestURL(routhPath, queryParams), data);
  }

  public deleteServerRequest(routhPath: string, queryParams: object) {
      return this.httpClient.delete(this.utilityService.createRequestURL(routhPath, queryParams));
  }
}
