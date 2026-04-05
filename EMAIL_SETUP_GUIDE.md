# Setting Up Email Booking System for Sattvaa Wellness Center

## Current Status
The booking form is **functional with UI feedback** but currently simulates email sending. Clients see success messages and the clinic has their info logged in the console.

## 3 Options to Enable Real Email Sending

### Option 1: EmailJS (Recommended - Free & Simple)
**Best for:** Quick setup, no backend needed, free tier sufficient

#### Steps:
1. Sign up at https://www.emailjs.com/ (free)
2. Create an email service and template
3. Install EmailJS in your project:
```bash
npm install @emailjs/browser
```

4. Update the contact component with:
```typescript
import emailjs from '@emailjs/browser';

// In ngOnInit or constructor:
emailjs.init('YOUR_PUBLIC_KEY'); // Get from EmailJS dashboard

private sendViaAPI(booking: BookingSubmission) {
  emailjs.send('service_id', 'template_id', {
    to_email: 'sattvaawellnesscenter@gmail.com',
    client_name: booking.name,
    client_phone: booking.phone,
    service: booking.service,
    message: booking.message
  }).then(() => {
    this.submitted = true;
    this.isLoading = false;
  }).catch(error => {
    this.errorMessage = 'Failed to send. Please try again.';
    console.error(error);
  });
}
```

---

### Option 2: Backend API (Secure & Scalable)
**Best for:** Production, sensitive data, advanced features

Create a Node.js/Express backend endpoint:
```typescript
POST /api/bookings

Body: {
  name: string,
  phone: string,
  service: string,
  message: string
}

Sends email via Nodemailer to sattvaawellnesscenter@gmail.com
```

---

### Option 3: Firebase Cloud Functions (Serverless)
**Best for:** Easy deployment, no server management

- Create a Cloud Function that sends booking emails
- Trigger via HTTPS callable function from Angular

---

## Console Testing
Currently, all bookings log to browser console - send this data to clinic manually or implement above options.

**Console log format:**
```
Booking submission: {
  name: "...",
  phone: "...",
  service: "...",
  message: "..."
}
```

---

## Maps Update
✅ Google Maps now shows exact location: **Pogathota, Nellore**
Customers can click "Visit Us" card or Maps preview to get directions.

---

## What Clients See
1. ✅ See "Sending..." while form processes
2. ✅ See success message with confirmation
3. ✅ See error message if validation fails
4. ✅ Message shows clinic will call back at their number

**Clinic receives emails:** Implement one of the 3 options above to get notified of bookings!
