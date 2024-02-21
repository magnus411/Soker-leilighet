"use client";

import { useState } from "react";
import { sendEmail } from "./Actions";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Process the form data, such as sending an email or storing in a database.
    console.log(formData);
    // Clear the form after submission or show a success message
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Add a success notification or handling here
    try {
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("All fields are required");
      }
      await sendEmail(formData.name, formData.email, formData.message);
      alert("Message sent successfully!");
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-background  pt-6 pb-6 pl-4 pr-4 md:pt-12 md:pb-12 md:pl-96 md:pr-96">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-8">
        Kontakt oss!
      </h2>
      <p className="text-md md:text-lg text-center ">
        Har du et spørsmål eller vil vite mer om oss, send oss gjerne en email
        eller ring oss!
      </p>
      <p className="text-center font-semibold text-md md:text-lg mb-4 md:mb-6">
        Tlf: 48218789, Email: magnusgjerstad00@gmail.com
      </p>
      <form className="w-full mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Ditt Navn
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Din E-post
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Din Melding
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-black bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-light font-medium rounded-lg text-sm w-full px-5 py-2 text-center"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
