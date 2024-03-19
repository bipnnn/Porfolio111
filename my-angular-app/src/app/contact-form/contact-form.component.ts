import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  sendMessage() {
    if (this.contactForm.valid) {
      // Perform form submission or API request here
      console.log(this.contactForm.value);
      // Reset the form
      this.contactForm.reset();
    }
  }
}
