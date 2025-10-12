import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  TuiButton,
  TuiIcon,
  TuiLabel,
  TuiTextfield,
  TuiTitle,
  TuiAppearance,
  TuiLink,
} from '@taiga-ui/core';
import {
  TuiDataListWrapper,
  TuiInputNumber,
  TuiPassword,
  TuiRadio,
  TuiSelect,
} from '@taiga-ui/kit';
import { TuiForm, TuiHeader, TuiCardLarge } from '@taiga-ui/layout';
import { TuiTextfieldControllerModule } from '@taiga-ui/legacy';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.less',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiButton,
    TuiDataListWrapper,
    TuiForm,
    TuiHeader,
    TuiIcon,
    TuiInputNumber,
    TuiLabel,
    TuiPassword,
    TuiRadio,
    TuiSelect,
    TuiTextfield,
    TuiTextfieldControllerModule,
    TuiTitle,
    TuiCardLarge,
    TuiAppearance,
    RouterLink,
    TuiLink,
  ],
})
export class RegisterComponent {
  protected form = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });
}
