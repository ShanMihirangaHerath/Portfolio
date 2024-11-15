import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import React from "react";

const contact = () => {
  return (
    <>
      <Head>
        <title>ShanDev | Contact</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Drop me a line!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <section class="py-6 border rounded-lg border-dark  dark:bg-dark dark:text-light dark:border-light ">
            <div class="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
              <div class="py-6 md:py-0 md:px-6">
                <h1 class="text-4xl font-bold">Get in touch</h1>
                <p class="pt-2 pb-4">
                  Fill in the form to start a conversation
                </p>
                <div class="space-y-4">
                  <p class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Issidin Town, Matara, Sri Lanaka & Katugasthota, Kandy,
                      Sri Lanka(Head-Office)
                    </span>
                  </p>
                  <p class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <span>
                      Whatsapp: +94 71 212 3792 | Voice: +94 71 212 3792 & +94
                      70 451 3123
                    </span>
                  </p>
                  <p class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <span>solocoder.se@gmail.com</span>
                  </p>
                </div>
              </div>
              <form
                noValidate
                className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
              >
                {/* Flex container for First Name and Last Name */}
                <div className="flex flex-wrap w-full gap-4">
                  <label className="flex-1 block" htmlFor="firstName">
                    <span className="mb-1">First Name</span>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:bg-slate-800"
                    />
                  </label>
                  <label className="flex-1 block" htmlFor="lastName">
                    <span className="mb-1">Last Name</span>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:bg-slate-800"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1">Email address</span>
                  <input
                    type="email"
                    placeholder="leroy@jenkins.com"
                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:bg-slate-800"
                  />
                </label>
                <div className="flex flex-wrap w-full gap-4">
                  <label className="flex-1 block" htmlFor="firstName">
                    <span className="mb-1">Mobile Number 1</span>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Your Contact Number 1"
                      className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:bg-slate-800"
                    />
                  </label>
                  <label className="flex-1 block" htmlFor="lastName">
                    <span className="mb-1">Mobile Number 2</span>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Your Contact Number 2"
                      className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:bg-slate-800"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1">Subject</span>
                  <input
                    type="email"
                    placeholder="Subject"
                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:bg-slate-800"
                  />
                </label>
                <label className="block">
                  <span className="mb-1">Message</span>
                  <textarea
                    rows="3"
                    placeholder="Hello, I'm looking forward to discussing your project!"
                    className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:bg-slate-800"
                  ></textarea>
                </label>
                <button
                  type="button"
                  className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-yellow-300 dark:text-black focus:ring-yellow-700 hover:ring-yellow-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </Layout>
      </main>
    </>
  );
};

export default contact;