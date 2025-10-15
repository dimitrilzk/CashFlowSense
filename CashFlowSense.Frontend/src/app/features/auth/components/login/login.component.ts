import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  TuiAppearance,
  TuiButton,
  TuiError,
  TuiTextfield,
  TuiTitle,
  TuiLink,
  TuiIcon,
} from '@taiga-ui/core';
import { TuiFieldErrorPipe, TuiPassword } from '@taiga-ui/kit';
import { TuiCardLarge, TuiForm, TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.less',
  standalone: true,
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
    TuiLink,
    RouterLink,
    TuiIcon,
    TuiPassword,
  ],
})
export class LoginComponent {
  protected form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
