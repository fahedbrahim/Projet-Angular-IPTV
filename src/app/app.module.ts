import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { EmployeComponent } from './employe/employe.component';
import { ListemployeComponent } from './listemploye/listemploye.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddemployeComponent } from './addemploye/addemploye.component';
import { AddclientComponent } from './addclient/addclient.component';
import { UpdateemployeComponent } from './updateemploye/updateemploye.component';
import { VisibiliteemployeComponent } from './visibiliteemploye/visibiliteemploye.component';
import { UpdateclientComponent } from './updateclient/updateclient.component';
import { DeleteclientComponent } from './deleteclient/deleteclient.component';
import { CalculenbremployeComponent } from './calculenbremploye/calculenbremploye.component';
import { SearchfilteremployePipe } from './searchfilteremploye.pipe';
import { Ng2OrderModule} from 'ng2-order-pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AdminComponent,
    ClientComponent,
    EmployeComponent,
    ListemployeComponent,
    AddemployeComponent,
    AddclientComponent,
    UpdateemployeComponent,
    VisibiliteemployeComponent,
    UpdateclientComponent,
    DeleteclientComponent,
    CalculenbremployeComponent,
    SearchfilteremployePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2OrderModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
