import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null]
    });
  }

  onPatchValue(): void{
    this.form.patchValue({ input: 'test'});
  }

  onSubmit(): void{
    console.log('Submitted !!');
  }

}
