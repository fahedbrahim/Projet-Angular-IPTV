import {Component, OnInit} from '@angular/core';
import {Employe} from '../../Model/employe';
import {EmployeService} from '../Shared/employe.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listemploye',
  templateUrl: './listemploye.component.html',
  styleUrls: ['./listemploye.component.css']
})
export class ListemployeComponent implements OnInit {
  employes: Employe[];
  employe;
  nbremploye;
  searchValue: string;
  totalVente;

  constructor(private employeservice: EmployeService, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.employeservice.getallemplyes().subscribe(
      resp => {
        this.employes = resp;
        this.nbremploye = resp.length;
      }
    );
  }
  claculeVente(prixTotal){
    this.totalVente = prixTotal;
  }
}
