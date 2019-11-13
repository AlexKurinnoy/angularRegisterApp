import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EditorComponent} from './editor/editor.component';
import {AuthGuardService} from './auth-guard.service';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {AuthenticationService} from './authentication.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AuthComponent } from './auth.component';
import {AppComponent} from '../app.component';
import { NgxEditorModule } from 'ngx-editor';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

const route: Routes = [

  {path: 'auth', component: AuthComponent,
    children: [
      {path: 'editor', component: EditorComponent, canActivate: [AuthGuardService] },
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'profile',  component: ProfileComponent,  canActivate: [AuthGuardService]  }
    ]
  }
]


@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    EditorComponent,
    AuthComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgxEditorModule,
    TooltipModule.forRoot(),
    RouterModule.forRoot(route)
  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AuthComponent]
})
export class AuthModule { }
