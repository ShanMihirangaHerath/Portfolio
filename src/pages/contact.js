import React, { useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const initValues = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  };

  const [values, setValues] = useState(initValues);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = ({ target }) => {
    setValues((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setFeedback("");

    // Validation for required fields
    for (const [key, value] of Object.entries(values)) {
      if (!value.trim()) {
        setFeedback(
          `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`
        );
        setIsSending(false);
        return;
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      setFeedback("Please enter a valid email address.");
      setIsSending(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setFeedback("Email sent successfully!");
        setValues(initValues);
      } else {
        setFeedback("Failed to send the email.");
      }
    } catch (error) {
      setFeedback("An error occurred. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact | Send Email</title>
        <meta
          name="description"
          content="Contact page with email functionality"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Drop me a line!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <form
            noValidate
            onSubmit={handleSubmit}
            className="w-full p-6 space-y-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow"
          >
            {/* Responsive First and Last Name */}
            <div className="flex space-x-4 sm:flex-col sm:space-x-0 sm:space-y-4">
              {/* First Name */}
              <div className="flex-1">
                <Label>First Name</Label>
                <Input
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-full ring-2 ring-gray-500"
                />
              </div>

              {/* Last Name */}
              <div className="flex-1">
                <Label>Last Name</Label>
                <Input
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Name"
                  required
                  className="w-full ring-2 ring-gray-500"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <Label>Email Address</Label>
              <Input
                name="email"
                value={values.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email Address"
                required
                className="w-full ring-2 ring-gray-500"
              />
            </div>

            {/* Subject */}
            <div>
              <Label>Subject</Label>
              <Input
                name="subject"
                value={values.subject}
                onChange={handleChange}
                type="text"
                placeholder="Subject"
                required
                className="w-full ring-2 ring-gray-500"
              />
            </div>

            {/* Message */}
            <div>
              <Label>Message</Label>
              <Textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                required
                className="w-full ring-2 ring-gray-500"
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send"}
            </Button>

            {/* Feedback */}
            {feedback && (
              <p
                className={
                  feedback === "Email sent successfully!"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {feedback}
              </p>
            )}
          </form>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
