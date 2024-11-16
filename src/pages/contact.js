import React, { useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
        <meta name="description" content="Contact page with email functionality" />
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
            className="w-full max-w-3xl p-6 space-y-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow"
          >
            <Input
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              type="text"
              placeholder="First Name"
              required
            />
            <Input
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
              required
            />
            <Input
              name="email"
              value={values.email}
              onChange={handleChange}
              type="email"
              placeholder="Your Email Address"
              required
            />
            <Input
              name="subject"
              value={values.subject}
              onChange={handleChange}
              type="text"
              placeholder="Subject"
              required
            />
            <Textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              required
            />
            <Button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send"}
            </Button>
            {feedback && <p>{feedback}</p>}
          </form>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
