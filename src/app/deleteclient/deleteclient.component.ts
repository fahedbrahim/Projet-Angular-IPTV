import {Component, OnInit} from '@angular/core';
import {ClientService} from '../Shared/client.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-deleteclient',
  templateUrl: './deleteclient.component.html',
  styleUrls: ['./deleteclient.component.css']
})
export class DeleteclientComponent implements OnInit {
  client;

  constructor(private clientservice: ClientService, private http: HttpClient, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.clientservice.getClientById(this.route.snapshot.params.id).subscribe(
      resp => {
        this.client = resp;
        this.clientservice.deleteClient(this.route.snapshot.params.id).subscribe(
          () => {
            this.router.navigate(['/employe', this.client.idemploye]);
          }
        );
      }
    );
  }

}
