import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ClientService} from '../Shared/client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Client} from '../Model/client';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  form: FormGroup;
  clients: Client[];
  newid: number;
  idemp: number;
  datedepart;
  dateexp;

  constructor(private formP: FormBuilder, private clientservice: ClientService, private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.form = this.formP.group({
      id: [null, [Validators.required]],
      nom: [null, [Validators.required]],
      prenom: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      adresse: this.formP.group({
        numRue: [null, [Validators.required]],
        rue: [null, [Validators.required]],
        ville: [null, [Validators.required]],
        codePostal: [null, [Validators.required]]
      }),
      numTele: [null, [Validators.required]],
      datedebut: [null, [Validators.required]],
      dateexpiration: [null, [Validators.required]],
      idemploye: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.clientservice.getallClients().subscribe(
      resp => {
        this.clients = resp;
        const client = this.clients[this.clients.length - 1];
        this.newid = client.id + 1;
        this.idemp = this.route.snapshot.params.id;
        this.datedepart = new Date();
        this.dateexp = new Date();
        this.dateexp.setFullYear(this.dateexp.getFullYear() + 1);
      }
    );
  }

  ajouterClient(u) {
    this.clientservice.addClient(u.value).subscribe();
    this.router.navigate(['/employe', u.value.idemploye]);
  }

  get id() {
    return this.form.get('id');
  }

  get nom() {
    return this.form.get('nom');
  }

  get prenom() {
    return this.form.get('prenom');
  }

  get email() {
    return this.form.get('email');
  }

  get numRue() {
    return this.form.get('adresse').get('numRue');
  }

  get rue() {
    return this.form.get('adresse').get('rue');
  }

  get ville() {
    return this.form.get('adresse').get('ville');
  }

  get codePostal() {
    return this.form.get('adresse').get('codePostal');
  }

  get numTele() {
    return this.form.get('numTele');
  }

  get datedebut() {
    return this.form.get('datedebut');
  }

  get dateexpiration() {
    return this.form.get('dateexpiration');
  }

  get idemploye() {
    return this.form.get('idemploye');
  }

}
