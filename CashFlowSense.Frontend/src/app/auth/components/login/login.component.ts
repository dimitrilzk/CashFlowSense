import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  TuiAppearance,
  TuiButton,
  TuiError,
  TuiTextfield,
  TuiTitle,
  TuiIcon,
} from '@taiga-ui/core';
import { TuiFieldErrorPipe } from '@taiga-ui/kit';
import { TuiCardLarge, TuiForm, TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-login',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    TuiAppearance,
    TuiButton,
    TuiCardLarge,
    TuiError,
    TuiFieldErrorPipe,
    TuiForm,
    TuiHeader,
    TuiTextfield,
    TuiTitle,
    TuiIcon,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less',
})
export class LoginComponent {
  protected readonly form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    passwordValue: new FormControl(''),
  });
}
