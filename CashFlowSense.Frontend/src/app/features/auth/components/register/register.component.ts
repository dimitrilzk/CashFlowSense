import { Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
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
import {
  AuthService,
  RegisterUserRequest,
} from '../../../../core/services/auth.service';

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
  private authService = inject(AuthService);
  private router = inject(Router);

  isLoading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);
  successMessage = signal<string | null>(null);

  protected form = this.formBuilder.group(
    {
      name: ['', Validators.required],
      lastName: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },
    {
      validators: this.passwordMatchValidator,
    }
  );

  private passwordMatchValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null;
    }

    return password.value === confirmPassword.value
      ? null
      : { passwordMismatch: true };
  }

  // more modern way to custom validator
  // private passwordMatchValidator: ValidatorFn = (
  //   control: AbstractControl
  // ): ValidationErrors | null => {
  //   const password = control.get('password');
  //   const confirmPassword = control.get('confirmPassword');
  //   return password &&
  //     confirmPassword &&
  //     password.value !== confirmPassword.value
  //     ? { passwordMismatch: true }
  //     : null;
  // };

  onSubmit(): void {
    console.log(this.form.value);
    this.errorMessage.set(null);
    this.successMessage.set(null);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.errorMessage.set('Compila correttamente tutti i campi obbligatori!');
      return;
    }

    const formValue = this.form.value;
    const registerData: RegisterUserRequest = {
      name: formValue.name!,
      lastName: formValue.lastName || undefined,
      email: formValue.email!,
      password: formValue.password!,
    };

    this.isLoading.set(true);

    this.authService.register(registerData).subscribe({
      next: (resp) => {
        this.isLoading.set(false);
        this.successMessage.set('Registrazione completata con successo!');

        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1500);
      },
      error: (err: Error) => {
        this.isLoading.set(false);
        this.errorMessage.set(
          err.message || 'Errorre durante la registrazione'
        );
        console.error('Registration error:', err);
      },
    });
  }

  get f() {
    return this.form.controls;
  }
}
