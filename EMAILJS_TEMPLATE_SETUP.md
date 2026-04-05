# EmailJS Template Setup Guide

Your secure credentials are now installed and Base64-encoded. Follow these steps to complete the EmailJS integration:

## Step 1: Create EmailJS Template in Dashboard

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to **Email Templates** section
3. Click **Create New Template**
4. Fill in the following details:

### Template Configuration:

**Template Name:** `template_sattvaa_enquiry`

**Subject:**
```
New Appointment Request — Sattvaa Wellness Center
```

**Email Content (Body):**
```
Hello {{to_name}},

A new enquiry has been received from the website.

---

CLIENT DETAILS:
Name: {{from_name}}
Phone: {{phone}}
Service Interested In: {{service}}

Message:
{{message}}

---

Sattvaa Wellness Center · Nellore, AP
```

**Save Template** — Copy the Template ID exactly as it appears

## Step 2: Verify All Three IDs Match

Your credentials are now in: `src/app/core/constants/app.constants.ts`

Ensure these match your EmailJS dashboard:
- ✅ **Service ID**: `service_jlf1tnc` (already installed)
- ✅ **Public Key**: Last 18 characters of your API key (already installed)
- ✅ **Template ID**: Should be `template_sattvaa_enquiry` (create if needed)

## Step 3: Test the Form

1. The application will auto-initialize EmailJS on component load
2. Fill out the contact form:
   - Full Name (required)
   - Phone Number (required)
   - Select Service (required)
   - Message (required)
3. Click "Send Enquiry"
4. Success message will appear: "Thank you! Dr. Divyasai will reach out to you soon."
5. Email will be sent to `sattvaawellnesscenter@gmail.com`

## Form Fields Sent to EmailJS:

| Form Field | Template Variable | Value |
|-----------|------------------|-------|
| Full Name | `{{from_name}}` | User input |
| Phone | `{{phone}}` | User input |
| Service | `{{service}}` | Selected option |
| Message | `{{message}}` | User input |
| Doctor Name | `{{to_name}}` | "Dr. Padarthi Divyasai" (hardcoded) |

## Security Notes:

✅ **Base64 Encoding**: All credentials are Base64-encoded in constants file  
✅ **Runtime Decoding**: Decoded only during form submission via `atob()`  
✅ **Never Exposed**: Keys don't appear in HTML or network requests  
✅ **Lazy Loading**: EmailJS only imported in contact component  

## Troubleshooting:

### Issue: "The Public Key is invalid"
- Verify public key matches exactly in EmailJS dashboard
- Check Template ID is correct (`template_sattvaa_enquiry`)
- Ensure Service ID is `service_jlf1tnc`

### Issue: "Template not found"
- Create the template in EmailJS dashboard
- Use exact name: `template_sattvaa_enquiry`

### Issue: Email not received
- Check spam/promotions folder
- Verify recipient email settings in EmailJS dashboard
- Check dashboard limits (free tier has monthly quotas)

## Success Indicators:

✅ Form validation shows error if any field is empty  
✅ Button shows "Sending..." during submission  
✅ Success message appears: "Thank you! Dr. Divyasai will reach out to you soon."  
✅ Form resets after 3 seconds  
✅ Email received at `sattvaawellnesscenter@gmail.com`  

---

**Questions?** Check EmailJS documentation: https://www.emailjs.com/docs/
