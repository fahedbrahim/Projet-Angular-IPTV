import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeService} from '../Shared/employe.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-visibiliteemploye',
  templateUrl: './visibiliteemploye.component.html',
  styleUrls: ['./visibiliteemploye.component.css']
})
export class VisibiliteemployeComponent implements OnInit {
  employe;
  constructor(private route: ActivatedRoute, private employeservice: EmployeService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.employeservice.getEmployeById(this.route.snapshot.params.id).subscribe(
      resp => {
        this.employe = resp;
        if (this.employe.visibilite === 1) {
          this.employe.visibilite = 0;
        }else
        {
          this.employe.visibilite = 1;
        }
        console.log(this.employe.visibilite);
        this.employeservice.updateEmploye(this.employe, this.employe.id).subscribe();
        this.router.navigate(['/admin']);
      }
    );

  }

}
