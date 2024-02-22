"use client";

import React, { useState } from "react";

interface FormProps {
  onSubmit: (email: string, password: string) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="flex flex-col items-center pt-5 min-h-screen bg-transparent">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md"
        style={{ fontFamily: "serif" }}
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Masukan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white ${
              emailFocused && "border-blue-500"
            }`}
          />

          <p style={{ fontFamily: "serif", fontSize: "13px" }}>
            we'll never share your email with anyone else
          </p>
        </div>
        <div className="mb-10">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Masukan Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white ${
              passwordFocused && "border-blue-500"
            }`}
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700  mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Masukan Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setMessageFocused(true)}
            onBlur={() => setMessageFocused(false)}
            className={`appearance-none border rounded pt-1 h-56 w-full px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white ${
              messageFocused && "border-blue-500"
            }`}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Submit
          </button>
        </div>
      </form>
      <iframe
        style={{ width: "30%", height: 320, paddingTop: 30, paddingBottom: 30 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.435905013204!2d106.8135096750492!3d-6.206090193781724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9aec56d3d51%3A0x7bd119dd8df9c3a4!2sWisma%20Bisnis%20Indonesia!5e0!3m2!1sen!2sus!4v1708481416147!5m2!1sen!2sus"
        allowFullScreen
        loading="eager"
      ></iframe>
    </div>
  );
};

export default Form;
