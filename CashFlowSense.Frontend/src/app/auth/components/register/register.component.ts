import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
  private formBuilder = inject(FormBuilder);

  protected form = this.formBuilder.group({
    name: ['', Validators.required],
    lastName: [''],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
