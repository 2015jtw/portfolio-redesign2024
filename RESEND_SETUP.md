# Resend Email Configuration Verification

## ✅ Current Configuration Status

### 1. **API Route Configuration** ✅

- ✅ Resend package installed
- ✅ Node.js runtime configured (`export const runtime = 'nodejs'`)
- ✅ Dynamic routing enabled (`export const dynamic = 'force-dynamic'`)
- ✅ Zod validation schema implemented
- ✅ Proper error handling

### 2. **Required Environment Variables**

Add these to your Vercel project (Settings → Environment Variables):

```bash
# Required for Resend
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Email configuration
CONTACT_TO=2015JTW@gmail.com
CONTACT_FROM=Portfolio <no-reply@yourdomain.com>
```

### 3. **Domain Verification (CRITICAL)**

To prevent emails from going to spam, you need to verify your domain:

1. **Go to Resend Dashboard** → Domains
2. **Add your domain** (e.g., `yourdomain.com`)
3. **Add DNS records** provided by Resend:
   - MX record
   - TXT record for SPF
   - TXT record for DKIM
4. **Verify the domain** in Resend dashboard

### 4. **Testing Your Configuration**

#### Local Testing:

```bash
# Test API endpoint locally
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "title": "Test Message",
    "message": "This is a test message"
  }'
```

#### Production Testing:

1. Deploy to Vercel with environment variables
2. Submit contact form on live site
3. Check email delivery
4. Monitor Vercel function logs

### 5. **Common Issues & Solutions**

#### Issue: "Invalid API key"

- ✅ **Solution**: Verify `RESEND_API_KEY` is correct in Vercel
- ✅ **Solution**: Ensure API key has proper permissions

#### Issue: "Domain not verified"

- ✅ **Solution**: Complete domain verification in Resend
- ✅ **Solution**: Use verified domain in `CONTACT_FROM`

#### Issue: "Emails going to spam"

- ✅ **Solution**: Complete domain verification
- ✅ **Solution**: Use proper SPF/DKIM records
- ✅ **Solution**: Avoid spam trigger words

### 6. **Security Best Practices**

- ✅ API key stored in environment variables
- ✅ Input validation with Zod
- ✅ Error handling without exposing sensitive data
- ✅ Rate limiting (consider adding)

### 7. **Monitoring & Debugging**

#### Check Vercel Function Logs:

1. Go to Vercel Dashboard → Functions
2. Click on your contact function
3. Check logs for errors

#### Test Email Delivery:

1. Submit form with test data
2. Check recipient inbox
3. Verify email formatting
4. Test with different email providers

## 🚀 Next Steps

1. **Get Resend API Key** from [resend.com](https://resend.com)
2. **Add environment variables** to Vercel
3. **Verify your domain** in Resend
4. **Deploy and test** the contact form
5. **Monitor email delivery** and adjust as needed

## 📧 Expected Email Format

When someone submits your contact form, you'll receive:

**Subject**: `New portfolio inquiry from [Name]`

**Content**:

```
New Contact Form Submission

Name: [Full Name]
Email: [Email Address]
Title: [Message Title]

Message:
[Message Content]
```
