import { Injectable } from '@angular/core';
import { AppService } from '../app/app.service';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private host: string;

  constructor(private appService: AppService) {
    this.host = this.appService.getHost();
  }

  public createRequestURL(routhPath: string, queryParams: object) {
    let url = this.host + routhPath;
    console.log('created url is------------', url);
    const queryParamString = this.createQueryParams(queryParams);
    if (queryParamString) {
      url = url + '?' + queryParamString;
    }
    return url;
  }

  public createQueryParams(data: any): string {
    return Object.keys(data).map((key) => {
      return [key, data[key]].map(encodeURIComponent).join('=');
    }).join('&');
  }
}
