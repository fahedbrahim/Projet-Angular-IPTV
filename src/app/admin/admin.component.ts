import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EmployeService} from '../Shared/employe.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  nbemp: number;
  constructor(private router: Router, private employeservice: EmployeService, private http: HttpClient) { }

  ngOnInit(): void {
    this.employeservice.getallemplyes().subscribe(
      resp => {
        console.log(resp);
        this.nbemp = resp.length;
      }
    );
  }
  ajoutemploye(){
    this.router.navigate(['ajoutemploye']);
  }
}
