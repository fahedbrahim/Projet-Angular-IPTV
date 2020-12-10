import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculenbremploye',
  templateUrl: './calculenbremploye.component.html',
  styleUrls: ['./calculenbremploye.component.css']
})
export class CalculenbremployeComponent implements OnInit {
  @Input() nbrEmploye;
  constructor() { }

  ngOnInit(): void {
  }

}
