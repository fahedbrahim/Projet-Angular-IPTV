import {Pipe, PipeTransform} from '@angular/core';
import {Employe} from '../Model/employe';

@Pipe({
  name: 'searchfilteremploye'
})
export class SearchfilteremployePipe implements PipeTransform {

  transform(employes: Employe[], searchValue: string): Employe[] {
    if (!employes || !searchValue) {
      return employes;
    }
    return employes.filter(employe =>
      employe.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      employe.prenom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      employe.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      employe.adresse.numRue.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      employe.adresse.rue.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      employe.adresse.ville.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      employe.adresse.codePostal.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      employe.username.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      employe.password.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      employe.numTele.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      employe.id.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

}
