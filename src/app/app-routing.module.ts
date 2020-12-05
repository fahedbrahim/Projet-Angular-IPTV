import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeComponent} from './employe/employe.component';
import {AdminComponent} from './admin/admin.component';
import {AccueilComponent} from './accueil/accueil.component';
import {AppComponent} from './app.component';
import {AddemployeComponent} from './addemploye/addemploye.component';
import {ClientComponent} from './client/client.component';


const routes: Routes = [
  {path: 'employe/:id', component: EmployeComponent,
    children: [
      {path: '', component: ClientComponent},
        {path: 'addclient', component: AddemployeComponent}
    ]
  },
  {path: 'ajoutemploye', component: AddemployeComponent},
  {path: 'login', component: AccueilComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'client', component: ClientComponent},
  {path: '', component: AccueilComponent},
  {path: '**', component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
