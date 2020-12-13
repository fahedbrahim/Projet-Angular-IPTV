import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeService} from '../Shared/employe.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-updateemploye',
  templateUrl: './updateemploye.component.html',
  styleUrls: ['./updateemploye.component.css']
})
export class UpdateemployeComponent implements OnInit {
  form: FormGroup;
  idnew;
  employe;

  constructor(private formP: FormBuilder, private route: ActivatedRoute, private employeservice: EmployeService, private http: HttpClient, private router: Router) {
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
    this.employeservice.getEmployeById(this.route.snapshot.params.id).subscribe(
      resp => {
        this.employe = resp;
        this.form.patchValue(this.employe);
      }
    );
  }

  modifierEmploye(u) {
    if (this.form.dirty) {
      this.employeservice.updateEmploye(u.value, u.value.id).subscribe();
      console.log('le formulaire est toucher');
    }
    this.router.navigate(['/admin']);
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
