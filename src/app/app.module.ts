import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { AppareilComponent } from './components/appareil/appareil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './components/auth/auth.component';
import { ViewComponent } from './view/view/view.component';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './components/single-appareil/single-appareil.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { EditAppareilComponent } from './components/edit-appareil/edit-appareil.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AppareilComponent,
    AuthComponent,
    ViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    FormUserComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AppareilService,
              AuthService,
              AuthGuard,
              UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
