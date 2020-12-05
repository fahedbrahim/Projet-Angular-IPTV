import {Component, Input, OnInit} from '@angular/core';
import {Employe} from '../../Model/employe';
import {Admin} from '../../Model/admin';
import {AdminService} from '../Shared/admin.service';
import {EmployeService} from '../Shared/employe.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  employes: Employe[];
  admins: Admin[];

  constructor(private router: Router, private adminservice: AdminService, private employeservice: EmployeService, private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  validLogin(f) {
    this.employeservice.getallemplyes().subscribe(
      resp => {
        this.employes = resp;
        const u = f.value;
        console.log(new Date());
        const date = new Date();
        date.getFullYear();
        date.setFullYear(date.getFullYear() + 1);
        console.log('la nouvelle date est' + date);
        for (const employe of this.employes) {
          if (employe.username === u.username && employe.password === u.password && employe.visibilite === 1) {
            this.router.navigate(['employe', employe.id]);
          }
          if (employe.username === u.username && employe.password === u.password && employe.visibilite === 0) {
            alert('you are blocked from admin');
            f.reset();
          }
        }
      }
    );
    this.adminservice.getalladmin().subscribe(
      resp => {
        this.admins = resp;
        const u = f.value;
        for (const admin of this.admins) {
          if (admin.username === u.username && admin.password === u.password) {
            this.router.navigate(['admin']);
          }
        }
      });
  }
}
