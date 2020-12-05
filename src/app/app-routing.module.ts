import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeComponent} from './employe/employe.component';
import {AdminComponent} from './admin/admin.component';
import {AccueilComponent} from './accueil/accueil.component';
import {AppComponent} from './app.component';
import {AddemployeComponent} from './addemploye/addemploye.component';
import {ClientComponent} from './client/client.component';
import {ListemployeComponent} from './listemploye/listemploye.component';
import {UpdateemployeComponent} from './updateemploye/updateemploye.component';


const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'login', component: AccueilComponent},

  {
    path: 'employe/:id', component: EmployeComponent,
    children: [
      {path: '', component: ClientComponent},
      {path: 'addclient', component: AddemployeComponent}
    ]
  },
  {path: 'ajoutemploye', component: AddemployeComponent},
  {path: 'client', component: ClientComponent},
  {
    path: 'admin', component: AdminComponent,
    children: [
      {path: '', component: ListemployeComponent},
      {path: 'updateemploye/:id', component: UpdateemployeComponent}
    ]
  },
  {path: '**', component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
