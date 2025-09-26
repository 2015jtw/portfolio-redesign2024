#!/usr/bin/env node

// Test script to verify email functionality
const { Resend } = require("resend");
require("dotenv").config({ path: ".env.local" });

const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
  try { 
    console.log("Testing email configuration...");
    console.log(
      "RESEND_API_KEY:",
      process.env.RESEND_API_KEY ? "Set" : "Not set"
    );
    console.log("CONTACT_TO:", process.env.CONTACT_TO);
    console.log("CONTACT_FROM:", process.env.CONTACT_FROM);

    const result = await resend.emails.send({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      subject: "Test Email from Portfolio",
      html: "<h2>Test Email</h2><p>This is a test email to verify your Resend configuration.</p>",
      text: "Test Email\n\nThis is a test email to verify your Resend configuration.",
    });

    console.log("✅ Email sent successfully!");
    console.log("Email ID:", result.data?.id);
    console.log("Check your inbox at:", process.env.CONTACT_TO);
  } catch (error) {
    console.error("❌ Error sending email:");
    console.error(error.message);

    if (error.message.includes("Invalid API key")) {
      console.log("\n💡 Solution: Check your RESEND_API_KEY in .env.local");
    } else if (error.message.includes("Domain not verified")) {
      console.log("\n💡 Solution: Verify your domain in Resend dashboard");
    } else if (error.message.includes("from")) {
      console.log(
        "\n💡 Solution: Update CONTACT_FROM to use your verified domain"
      );
    }
  }
}

testEmail();
