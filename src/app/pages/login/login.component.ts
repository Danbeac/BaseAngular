import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regex, regexErrors } from 'src/app/shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isInline: Boolean;
  regexErrors = regexErrors;

  constructor(private fb: FormBuilder) {
    this.isInline = true;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.pattern(regex.email)],
        },
      ],
      age: [
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.pattern(regex.numbers)],
        },
      ],
      password: [
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required],
        },
      ],
    });
  }

  onPatchValue(): void {
    this.form.patchValue({ age: '21' });
  }

  onSubmit(): void {
    console.log('Submitted !!');
  }

  onToggleInline() {
    this.isInline = !this.isInline;
  }
}
