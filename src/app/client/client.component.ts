import { Component, OnInit } from '@angular/core';
import {Client} from '../../Model/client';
import {ActivatedRoute} from '@angular/router';
import {ClientService} from '../Shared/client.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: Client[];
  idemploye;
  constructor(private clientservice: ClientService, private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.clientservice.getallClients().subscribe(
      resp => {
        console.log(resp);
        this.clients = resp;
        this.idemploye = this.route.snapshot.params.id;
        console.log(this.idemploye);
      }
    );
  }

}
