import { Injectable } from '@angular/core';
import { baseApiUrl } from './config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  apiNamespace = '';

  constructor(
    public http: HttpClient
  ) {
  }

  public composeUrl(): string {
    return `${baseApiUrl}/${this.apiNamespace}`;
  }
}
