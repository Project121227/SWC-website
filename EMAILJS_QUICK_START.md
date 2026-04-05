# ⚡ EmailJS Quick Start (Copy-Paste Ready)

## 3 Easy Steps to Get Booking Emails Working

### 1️⃣ Sign Up (1 minute)
- Go to: https://www.emailjs.com/
- Sign up free with any email
- Click **Account** in top right
- **Copy your Public Key** (keep it safe!)

### 2️⃣ Set Up Gmail (3 minutes)
- Click **Email Services** (left sidebar)
- Click **Add Service** → Select **Gmail**
- Name it exactly: `service_sattvaa`
- Connect your Gmail account
- Check the box when done

### 3️⃣ Create Email Template (2 minutes)
- Click **Email Templates** (left sidebar)
- Click **Create New Template**
- Name it exactly: `template_sattvaa_booking`
- Copy full template from: `EMAILJS_SETUP.md`
- Click **Save Template**

### 4️⃣ Paste Your Public Key (30 seconds)
Open file: `src/app/home/contact/contact.component.ts`

Find this line (around line 35):
```typescript
private emailjsPublicKey = 'YOUR_PUBLIC_KEY_HERE';
```

Replace with your key from step 1:
```typescript
private emailjsPublicKey = 'abc123xyz789...YOUR_KEY_HERE';
```

### 5️⃣ Test it! (1 minute)
- Refresh your browser: http://localhost:4200
- Scroll to "Begin Your Healing Journey"
- Fill booking form → Submit
- Check your Gmail inbox! 📧

---

## ✅ Done!
Your bookings now send real emails to: **sattvaawellnesscenter@gmail.com**

---

## 🆘 Stuck?
Full setup guide in: `EMAILJS_SETUP.md`
