import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TuiDay, TuiTime } from '@taiga-ui/cdk';
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
  protected testForm = new FormGroup({
    nameValue: new FormControl('', Validators.required),
    textValue: new FormControl('', Validators.required),
    passwordValue: new FormControl('', Validators.required),
    phoneValue: new FormControl('', Validators.required),
    moneyValue: new FormControl('100', Validators.required),
    periodValue: new FormControl(new TuiDay(2017, 2, 15), Validators.required),
    timeValue: new FormControl(new TuiTime(12, 30), Validators.required),
    // personValue: new FormControl(this.persons[0]),
    quantityValue: new FormControl(50_000),
    radioValue: new FormControl('with-commission'),
    // accountWherefrom: new FormControl<Account | null>(null),
    // accountWhere: new FormControl<Account | null>(null),
    checkboxValue: new FormControl(false),
    osnoValue: new FormControl(true),
    usnValue: new FormControl(false),
    eshnValue: new FormControl(false),
    envdValue: new FormControl(false),
  });
}
