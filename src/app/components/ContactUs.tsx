import { useState } from "react";

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

  const handleSubmit = (e: any) => {
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
    alert("Message sent successfully!");
  };

  return (
    <div className="bg-background  pt-6 pb-6 pl-4 pr-4 md:pt-12 md:pb-12 md:pl-96 md:pr-96">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-8">
        Contact Us
      </h2>
      <p className="text-md md:text-lg text-center mb-4 md:mb-6">
        Have a question or want to get in touch? Send us a message! or call
        48218789 or email magnusgjerstad00@gmail.com
      </p>
      <form className="w-full mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Name
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
            Your Email
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
            Your Message
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
