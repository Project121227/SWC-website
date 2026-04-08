import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FadeUpDirective } from '../../shared/fade-up.directive';
import emailjs from '@emailjs/browser';
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_TEMPLATE_ID,
  SERVICES,
  EMAIL_CONFIG
} from '../../core/constants/app.constants';

interface EnquirySubmission {
  name: string;
  phone: string;
  service: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, FadeUpDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  formData = {
    name: '',
    phone: '',
    service: '',
    message: ''
  };

  submitted = false;
  isLoading = false;
  errorMessage = '';

  contactInfo = [
    {
      type: 'address',
      label: 'Visit Us',
      value: 'KVR Nagar Street No:1, Siiri Complex Road, Pogathota, Nellore, Andhra Pradesh',
      icon: '<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'
    },
    {
      type: 'phone',
      label: 'Call Us',
      value: '9876543456',
      icon: '<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>'
    },
    {
      type: 'email',
      label: 'Email Us',
      value: 'sattvaawellnesscenter@gmail.com',
      icon: '<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'
    },
    {
      type: 'hours',
      label: 'Working Hours',
      value: 'Mon–Sat: 9:00 AM – 7:00 PM',
      icon: '<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>'
    }
  ];

  services = SERVICES;

  ngOnInit() {
    // Initialize EmailJS with decoded public key
    emailjs.init(atob(EMAILJS_PUBLIC_KEY));
  }

  submitForm() {
    if (!this.formData.name || !this.formData.phone || !this.formData.service || !this.formData.message) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const enquiryData: EnquirySubmission = {
      name: this.formData.name,
      phone: this.formData.phone,
      service: this.formData.service,
      message: this.formData.message
    };

    this.sendEnquiry(enquiryData);
  }

  private sendEnquiry(enquiry: EnquirySubmission) {
    // Combine all form data into the message
    const combinedMessage = `Name: ${enquiry.name}\nPhone: ${enquiry.phone}\nService: ${enquiry.service}\nMessage: ${enquiry.message}`;

    // Prepare template parameters with correct field names
    const templateParams = {
      from_name: enquiry.name,
      phone: enquiry.phone,
      mobile: enquiry.phone,
      phone_number: enquiry.phone,
      service: enquiry.service,
      message: combinedMessage,
      to_name: EMAIL_CONFIG.TO_NAME
    };

    // Send email via EmailJS with Base64-decoded credentials
    emailjs
      .send(
        atob(EMAILJS_SERVICE_ID),
        atob(EMAILJS_TEMPLATE_ID),
        templateParams,
        atob(EMAILJS_PUBLIC_KEY)
      )
      .then(
        (response) => {
          console.log('✅ Enquiry sent successfully!', response);
          this.submitted = true;
          this.isLoading = false;

          // Reset form after 3 seconds
          setTimeout(() => {
            this.formData = { name: '', phone: '', service: '', message: '' };
            this.submitted = false;
          }, 3000);
        },
        (error) => {
          console.error('❌ Enquiry failed to send:', error);
          this.isLoading = false;
          this.errorMessage = 'Something went wrong. Please call us directly.';
        }
      );
  }
}
