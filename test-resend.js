// Test script to verify Resend configuration
// Run with: node test-resend.js

const { Resend } = require("resend");
require("dotenv").config({ path: ".env.local" });

async function testResendConfig() {
  console.log("🔍 Testing Resend Configuration...\n");

  // Check environment variables
  const apiKey = process.env.RESEND_API_KEY;
  const contactTo = process.env.CONTACT_TO;
  const contactFrom = process.env.CONTACT_FROM;

  console.log("📋 Environment Variables:");
  console.log(`RESEND_API_KEY: ${apiKey ? "✅ Set" : "❌ Missing"}`);
  console.log(`CONTACT_TO: ${contactTo || "❌ Missing"}`);
  console.log(`CONTACT_FROM: ${contactFrom || "❌ Missing"}\n`);

  if (!apiKey) {
    console.log(
      "❌ RESEND_API_KEY is missing. Add it to your .env.local file or Vercel environment variables."
    );
    return;
  }

  if (!contactTo || !contactFrom) {
    console.log(
      "❌ CONTACT_TO or CONTACT_FROM is missing. Add them to your environment variables."
    );
    return;
  }

  // Test Resend API connection
  try {
    const resend = new Resend(apiKey);

    console.log("🧪 Testing Resend API connection...");

    // Send a test email
    const { data, error } = await resend.emails.send({
      from: contactFrom,
      to: contactTo,
      subject: "Test Email from Portfolio",
      html: "<h2>Test Email</h2><p>This is a test email to verify your Resend configuration.</p>",
      text: "Test Email\n\nThis is a test email to verify your Resend configuration.",
    });

    if (error) {
      console.log("❌ Resend API Error:", error);
    } else {
      console.log("✅ Test email sent successfully!");
      console.log("📧 Email ID:", data?.id);
    }
  } catch (err) {
    console.log("❌ Connection Error:", err.message);
  }
}

testResendConfig();
