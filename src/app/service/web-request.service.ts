import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebRequestService {
  readonly ROOT_URL;
  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:4000';
  }
  get(url: string) {
    return this.http.get(`${this.ROOT_URL}/${url}`);
  }
  post(url: string, payLoad: Object) {
    console.log(url, payLoad)
    return this.http.post(`${this.ROOT_URL}/${url}`, payLoad);
  }
  patch(url: string, payLoad: Object) {
    return this.http.patch(`${this.ROOT_URL}/${url}`, payLoad);
  }
  delete(url: string) {
    return this.http.delete(`${this.ROOT_URL}/${url}`);
  }
}
