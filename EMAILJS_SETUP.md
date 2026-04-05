# EmailJS Setup Guide for Sattvaa Wellness Center

## ✅ Current Status
EmailJS is now **installed and integrated** into the booking form. When someone submits a booking, emails will be sent to `sattvaawellnesscenter@gmail.com`.

---

## 🚀 Setup Steps (Takes ~10 minutes)

### Step 1: Create Free EmailJS Account
1. Go to https://www.emailjs.com/
2. Click **"Sign Up Free"**
3. Sign up with your email (or Google/GitHub)
4. Verify your email

---

### Step 2: Get Your Public Key
1. Go to **Dashboard** → **Account** (top right)
2. Copy your **Public Key** (looks like: `abc123def456xyz789`)
3. Keep it safe for Step 5

---

### Step 3: Set Up Gmail Service
1. Go to **Email Services** (left sidebar)
2. Click **"Add Service"**
3. Select **Gmail**
4. Name it: `service_sattvaa` (this is important!)
5. Click **"Create Service"**
6. **Sign in with Gmail** when prompted (use sattvaawellnesscenter@gmail.com or any Gmail account that will send the emails)

> **Note:** You may need to:
> - Allow "Less secure app access" if using Gmail
> - Or use [Gmail App Password](https://myaccount.google.com/apppasswords) if 2FA is enabled
> - Follow EmailJS prompts for authorization

---

### Step 4: Create Email Template
1. Go to **Email Templates** (left sidebar)
2. Click **"Create New Template"**
3. Name it: `template_sattvaa_booking`
4. Paste this template code:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
    .header { background-color: #1a1714; color: #c9a96e; padding: 20px; text-align: center; border-radius: 5px; }
    .header h1 { margin: 0; font-size: 28px; }
    .content { background-color: white; padding: 20px; margin-top: 20px; border-radius: 5px; }
    .field { margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
    .field-label { font-weight: bold; color: #c9a96e; }
    .field-value { color: #333; margin-top: 5px; }
    .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Booking Request</h1>
      <p>Sattvaa Wellness Center</p>
    </div>

    <div class="content">
      <h2>Booking Details:</h2>
      
      <div class="field">
        <div class="field-label">Client Name:</div>
        <div class="field-value">{{client_name}}</div>
      </div>

      <div class="field">
        <div class="field-label">Phone Number:</div>
        <div class="field-value">{{client_phone}}</div>
      </div>

      <div class="field">
        <div class="field-label">Selected Service:</div>
        <div class="field-value">{{service}}</div>
      </div>

      <div class="field">
        <div class="field-label">Message:</div>
        <div class="field-value">{{message}}</div>
      </div>

      <div class="field">
        <div class="field-label">Received:</div>
        <div class="field-value">{{timestamp}}</div>
      </div>
    </div>

    <div class="footer">
      <p>This booking request came from the Sattvaa Wellness Center website.</p>
      <p>Please contact the client to confirm the appointment.</p>
    </div>
  </div>
</body>
</html>
```

5. Click **"Save Template"**

---

### Step 5: Update Component with Your Keys

Open `src/app/home/contact/contact.component.ts` and replace these lines:

```typescript
// Line ~34-36:
private emailjsServiceId = 'service_sattvaa';
private emailjsTemplateId = 'template_sattvaa_booking';
private emailjsPublicKey = 'YOUR_PUBLIC_KEY_HERE';
```

With your actual values:
```typescript
private emailjsServiceId = 'service_sattvaa';  // ← Keep this as is (from Step 3)
private emailjsTemplateId = 'template_sattvaa_booking';  // ← Keep this as is (from Step 4)
private emailjsPublicKey = 'abc123def456xyz789';  // ← Replace with YOUR Public Key from Step 2
```

---

### Step 6: Test It!
1. Go to http://localhost:4200
2. Scroll to "Begin Your Healing Journey" section
3. Fill out the booking form:
   - Name: Your name
   - Phone: Your phone
   - Service: Select any service
   - Message: (Optional) Add a test message
4. Click "Send Booking Request"
5. You should see: **"✓ Booking Received!"** message
6. Check your email! (The address you set in Step 3 Gmail account)

---

## 📧 What the Clinic Will Receive

An email at `sattvaawellnesscenter@gmail.com` with:
- ✅ Client name
- ✅ Phone number
- ✅ Service requested
- ✅ Any additional message
- ✅ Timestamp (IST - Indian Standard Time)
- ✅ Professional HTML formatting

---

## ❌ Troubleshooting

### Email not sending?
1. **Check Public Key** - Is it copied correctly in the component?
2. **Check Service ID** - Should be `service_sattvaa`
3. **Check Template ID** - Should be `template_sattvaa_booking`
4. **Console errors** - Open browser DevTools (F12) → Console tab → Look for red errors

### Still having issues?
1. Go to https://www.emailjs.com/docs/
2. Or check your EmailJS Dashboard for errors

---

## 🔐 For Production

Before deploying to production:
1. Move the Public Key to environment variables for security
2. Consider adding email confirmation to client as well
3. Add booking notifications to Dr. Divyasai's personal phone via SMS

---

## 📝 Optional: Add Auto-Reply to Clients

You can create another template to send a confirmation email to the client:
1. Create a new template in EmailJS
2. Set recipient to `{{client_email}}` (you'll need to add client_email to the form)
3. Send a professional "Thank you, we'll call you soon" message

---

**All set! Your website now sends actual booking emails! 🎉**
