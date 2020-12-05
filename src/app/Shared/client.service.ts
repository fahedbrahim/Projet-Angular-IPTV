import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '../../Model/client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  getallClients() {
    return this.http.get<Client[]>('api/clients');
  }

  getClientById(id: number) {
    return this.http.get('api/clients' + id);
  }

  addClient(data: any): Observable<any> {
    return this.http.post('api/clients', data);
  }

  updateClient(data: any, id: any): Observable<any> {
    return this.http.put('api/clients' + id, data);
  }

  deleteClient(id: number) {
    return this.http.delete('api/clients' + id);
  }
}
