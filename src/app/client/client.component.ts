import {Component, OnInit} from '@angular/core';
import {Client} from '../Model/client';
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
  nom: any;
  prenom: any;

  constructor(private clientservice: ClientService, private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.clientservice.getallClients().subscribe(
      resp => {
        this.clients = resp;
        this.idemploye = this.route.snapshot.params.id;
      }
    );
  }

  searchNom() {
    if (this.nom === '') {

      this.ngOnInit();
    } else {

      this.clientservice.findByName(this.nom.trim()).subscribe(
          (data) => {
            this.clients = data;
          },
          errors => {
            alert(errors.status);
          }
        );
    }
  }

  searchPrenom() {
    if (this.prenom === '') {
      this.ngOnInit();
    } else {

      this.clientservice.findByFistname(this.prenom).subscribe(
          (data) => {
            this.clients = data;
          },
          errors => {
            alert(errors.status);
          }
        );
    }
  }
}
