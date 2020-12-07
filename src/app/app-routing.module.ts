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
import {VisibiliteemployeComponent} from './visibiliteemploye/visibiliteemploye.component';
import {AddclientComponent} from './addclient/addclient.component';
import {UpdateclientComponent} from './updateclient/updateclient.component';
import {DeleteclientComponent} from './deleteclient/deleteclient.component';


const routes: Routes = [


  {
    path: 'employe/:id', component: EmployeComponent,
    children: [
      {path: '', component: ClientComponent},
      {path: 'addclient/:id', component: AddclientComponent},
      {path: 'updateclient/:id', component: UpdateclientComponent},
      {path: 'deleteclient/:id', component: DeleteclientComponent},
    ]
  },
  {path: 'client', component: ClientComponent},
  {
    path: 'admin', component: AdminComponent,
    children: [
      {path: '', component: ListemployeComponent},
      {path: 'visibiliteemploye/:id', component: VisibiliteemployeComponent},
      {path: 'updateemploye/:id', component: UpdateemployeComponent},
      {path: 'addemploye', component: AddemployeComponent}

    ]
  },
  {path: 'login', component: AccueilComponent},
  {path: '', component: AccueilComponent},
  {path: '**', component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
