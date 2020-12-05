import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  idemploye: number;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idemploye = this.route.snapshot.params.id;
  }
  ajoutclient(){
    // this.router.navigate(['employe', employe.id]);
  }
}
