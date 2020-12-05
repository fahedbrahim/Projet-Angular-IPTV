import {Component, Input, OnInit} from '@angular/core';
import {Employe} from '../../Model/employe';
import {EmployeService} from '../Shared/employe.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-listemploye',
  templateUrl: './listemploye.component.html',
  styleUrls: ['./listemploye.component.css']
})
export class ListemployeComponent implements OnInit {
  employes: Employe[];
  @Input() nbemploye: number;
  constructor(private employeservice: EmployeService, private http: HttpClient) { }

  ngOnInit(): void {
    this.employeservice.getallemplyes().subscribe(
      resp => {
        console.log(resp);
        this.employes = resp;
      }
    );
  }

}
