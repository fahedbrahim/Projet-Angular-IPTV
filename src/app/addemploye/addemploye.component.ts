import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeService} from '../Shared/employe.service';
import {HttpClient} from '@angular/common/http';
import {Employe} from '../../Model/employe';

@Component({
  selector: 'app-addemploye',
  templateUrl: './addemploye.component.html',
  styleUrls: ['./addemploye.component.css']
})
export class AddemployeComponent implements OnInit {
  form: FormGroup;
  employes: Employe[];
  newid: number;

  constructor(private formP: FormBuilder, private employeservice: EmployeService, private http: HttpClient) {
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
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      visibilite: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.employeservice.getallemplyes().subscribe(
      resp => {
        this.employes = resp;
        const emp = this.employes[this.employes.length - 1];
        this.newid = emp.id + 1;
      }
    );
  }

  get id() {
    return this.form.get('id');
  }

  get nom() {
    return this.form.get('nom');
  }

  get prenom() {
    return this.form.get('nom');
  }

  get email() {
    return this.form.get('nom');
  }

  get numRue() {
    return this.form.get('adresse').get('numRue');
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

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get visibilite() {
    return this.form.get('visibilite');
  }
}
