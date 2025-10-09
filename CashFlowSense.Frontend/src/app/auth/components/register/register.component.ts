import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TuiCurrency, TuiCurrencyPipe } from '@taiga-ui/addon-commerce';
import { TuiDay, TuiTime } from '@taiga-ui/cdk';
import {
  TuiButton,
  TuiError,
  TuiGroup,
  TuiIcon,
  TuiLabel,
  TuiTextfield,
  TuiTitle,
  TuiAppearance,
} from '@taiga-ui/core';
import {
  TuiBlock,
  TuiCheckbox,
  TuiChevron,
  TuiDataListWrapper,
  TuiFieldErrorPipe,
  TuiInputNumber,
  TuiPassword,
  TuiRadio,
  TuiSelect,
  TuiTooltip,
} from '@taiga-ui/kit';
import { TuiForm, TuiHeader, TuiCardLarge } from '@taiga-ui/layout';
import {
  TuiInputDateModule,
  TuiInputModule,
  TuiInputPhoneModule,
  TuiInputSliderModule,
  TuiInputTimeModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.less',
  standalone: true,
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    TuiBlock,
    TuiButton,
    TuiCheckbox,
    TuiChevron,
    TuiCurrencyPipe,
    TuiDataListWrapper,
    TuiError,
    TuiFieldErrorPipe,
    TuiForm,
    TuiGroup,
    TuiHeader,
    TuiIcon,
    TuiInputDateModule,
    TuiInputModule,
    TuiInputNumber,
    TuiInputPhoneModule,
    TuiInputSliderModule,
    TuiInputTimeModule,
    TuiLabel,
    TuiPassword,
    TuiRadio,
    TuiSelect,
    TuiTextfield,
    TuiTextfieldControllerModule,
    TuiTitle,
    TuiTooltip,
    TuiCardLarge,
    TuiAppearance,
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
