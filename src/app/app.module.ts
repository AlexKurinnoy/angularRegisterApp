import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {AuthenticationService} from './auth/authentication.service';
import {AuthGuardService} from './auth/auth-guard.service';
import {AuthModule} from './auth/auth.module';
import {EditorComponent} from './auth/editor/editor.component';
import {LoginComponent} from './auth/login/login.component';
import {ProfileComponent} from './auth/profile/profile.component';
import {AuthComponent} from './auth/auth.component';
import {RegisterComponent} from './auth/register/register.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
