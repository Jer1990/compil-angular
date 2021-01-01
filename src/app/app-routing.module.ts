import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { SingleAppareilComponent } from './components/single-appareil/single-appareil.component';
import { ViewComponent} from './view/view/view.component'
import { AuthGuard } from './guards/auth-guard.guard'
import { EditAppareilComponent } from './components/edit-appareil/edit-appareil.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormUserComponent } from './components/form-user/form-user.component';

const routes: Routes = [
  { path :'appareils', canActivate: [AuthGuard], component: ViewComponent},
  { path :'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent},
  { path :'edit', canActivate: [AuthGuard], component: EditAppareilComponent},
  { path :'users', component: UserListComponent},
  { path :'new-user', canActivate: [AuthGuard], component: FormUserComponent},
  { path :'auth', component: AuthComponent},
  { path :'', component: ViewComponent},
  { path :'not-found', component: FourOhFourComponent},
  { path :'**', redirectTo: '/not-found'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
