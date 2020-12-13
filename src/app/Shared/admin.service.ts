import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Admin} from '../Model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  getalladmin() {
    return this.http.get<Admin[]>('api/admin');
  }
}
