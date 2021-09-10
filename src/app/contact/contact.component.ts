import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private http: HttpClient) { }

  endpoint = "https://www.mustafaguer.de/assets/sendMail.php";
  submitReport: string = '';
  submitComplete = false;

  onSubmit(myForm: NgForm) {
    if (myForm.valid) {
      this.sendForm(myForm);
    }
  }

  sendForm(form: any) {
    this
      .http
      .post(this.endpoint, form.value)
      .subscribe(
        response => this.handleResponse(response, form),
        error => this.handleError(error, form)
      );
  }

  handleResponse(response: any, form: any) {
    console.log(response);
    this.submitReport = "Thank up for your Contact. I will replay as soon as possible!";
    this.submitComplete = true;
    form.reset();
  }

  handleError(error: any, form: any) {
    console.log(error);
    this.submitReport = "Error occure while sending your message! You can contact me directly on E-Mail: mustafaguer@outlook.com.";
    this.submitComplete = true;
    form.reset();
  }

  closeCard() {
    this.submitComplete = false;
    this.submitReport = '';
  }

}
