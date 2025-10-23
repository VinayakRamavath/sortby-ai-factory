# Email Setup Guide for Contact Form

## Overview
The contact form is now configured to send emails directly to `sortbysalesteam@gmail.com` using EmailJS service.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as the service provider
4. Connect your Gmail account (`sortbysalesteam@gmail.com`)
5. Note down the **Service ID** (e.g., `service_xyz123`)

### 3. Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** A message by {{from_name}} has been received. Kindly respond at your earliest convenience.

**Content:**
```
A message by {{from_name}} has been received. Kindly respond at your earliest convenience.
👤
	
Hello SortBy Sales Team,


You have received a new contact form submission:


Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Message: {{message}}


Please respond to this inquiry within 24 hours.


Best regards,
SortBy Contact Form
```

4. Save the template and note down the **Template ID** (e.g., `template_abc123`)

### 4. Get Public Key
1. Go to "Account" → "General" in EmailJS dashboard
2. Copy your **Public Key** (e.g., `user_xyz123`)

### 5. Configure Environment Variables
Create a `.env` file in the project root with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

### 6. Test the Form
1. Start the development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check the `sortbysalesteam@gmail.com` inbox for the email

## Features Implemented

✅ **Direct Email Delivery** - Form submissions go directly to `sortbysalesteam@gmail.com`
✅ **Loading State** - Button shows "Sending..." with spinner during submission
✅ **Error Handling** - Displays error message if email fails to send
✅ **Success Feedback** - Shows success toast when email is sent
✅ **Form Validation** - Required fields are validated before submission
✅ **Form Reset** - Form clears after successful submission

## Email Template Variables

The following variables are available in your EmailJS template:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{company}}` - User's company
- `{{message}}` - User's message
- `{{to_email}}` - Always set to `sortbysalesteam@gmail.com`

## Troubleshooting

1. **Email not received**: Check spam folder
2. **Form submission fails**: Verify EmailJS credentials in `.env` file
3. **CORS errors**: Ensure EmailJS service is properly configured
4. **Template errors**: Verify template variables match the code

## Security Notes

- EmailJS credentials are safe to use in frontend code
- The public key is designed for client-side use
- No sensitive data is exposed in the configuration
