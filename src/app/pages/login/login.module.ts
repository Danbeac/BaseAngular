import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ButtonsModule, ControlsModule, IndicatorsModule } from 'src/app/shared';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ButtonsModule,
    ReactiveFormsModule,
    ControlsModule,
    IndicatorsModule
  ]
})
export class LoginModule { }
