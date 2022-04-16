import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  isInline: Boolean;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null, {
        updateOn: 'blur',
        validators: [
            Validators.required,
            Validators.minLength(3)
        ]
    }]
    });
  }

  onPatchValue(): void{
    this.form.patchValue({ input: 'test'});
  }

  onSubmit(): void{
    console.log('Submitted !!');
  }

  onToggleInline(){
    this.isInline = !this.isInline;
  }

}
