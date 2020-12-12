import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClientService} from '../Shared/client.service';

@Component({
  selector: 'app-calculenbremploye',
  templateUrl: './calculenbremploye.component.html',
  styleUrls: ['./calculenbremploye.component.css']
})
export class CalculenbremployeComponent implements OnInit {
  @Input() nbrEmploye;
  @Output() totalvente = new EventEmitter<number>();
  total;

  constructor(private clientservice: ClientService) {
  }

  ngOnInit(): void {
  }

  calculeVente() {
    this.clientservice.getallClients().subscribe(
      resp => {
        this.total = resp.length * 50;
        this.totalvente.emit(this.total);
      }
    );
  }

}
