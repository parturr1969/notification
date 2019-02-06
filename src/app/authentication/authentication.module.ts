import { NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {AuthenticationComponent} from './authentication.component';
import {CommonModule} from '@angular/common';
import {AuthenticationRoutingModule} from './authentication-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})

export class AuthenticationModule {

}
