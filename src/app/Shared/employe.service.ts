import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employe} from '../Model/employe';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http: HttpClient) {
  }

  getallemplyes() {
    return this.http.get<Employe[]>('api/employes');
  }

  getEmployeById(id: number) {
    return this.http.get('api/employes/' + id);
  }
  addEmploye(data: any): Observable<any> {
    return this.http.post('api/employes/', data);
  }

  updateEmploye(data: any, id: any): Observable<any> {
    return this.http.put('api/employes/' + id, data);
  }
  deleteEmploye(id: number){
    return this.http.delete('api/employes/' + id);
  }
}
