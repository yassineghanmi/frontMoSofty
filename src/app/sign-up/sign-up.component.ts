import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {

  constructor(private restService : RestApiService){

  }

  saveUser(formRef: NgForm) {
    this.restService.addUser(formRef.form.value).subscribe(res => alert("nice new user"))
    console.log(formRef.form.value);
  }
}
