
import React from "react";

export default function AppointmentForm() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 py-10 px-4">
      {/* Left Side - Form */}
      <div className="md:w-2/3 w-full">
        <h2 className="text-3xl font-bold text-blue-900 font-serif">
          Start your appointment <em className="italic">request here</em>
        </h2>
        <form className="mt-6 space-y-4">
          <input type="text" placeholder="Your name*" className="w-full border p-3" />
          <div className="flex flex-col md:flex-row gap-4">
            <input type="email" placeholder="Your e-mail*" className="w-full md:w-1/2 border p-3" />
            <input type="tel" placeholder="Phone number*" className="w-full md:w-1/2 border p-3" />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input type="date" className="w-full md:w-1/2 border p-3" />
            <input type="time" className="w-full md:w-1/2 border p-3"/>
          </div>
          <input type="text" placeholder="Choose service" className="w-full border p-3" />
          <textarea placeholder="Additional notes" className="w-full border p-3 h-28"></textarea>
          <button className="w-full bg-blue-600 text-white p-3 text-lg transition duration-300 hover:bg-white hover:text-blue-600 hover:border-blue-600 border">
            Submit
          </button>
        </form>
      </div>
      
      {/* Right Side - Contact Info */}
      <div className="md:w-1/3 w-full space-y-6">
        <img src="/Contact.jpg" alt="Doctor" className="w-full rounded-lg" />
        <div>
          <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2">
            <span className="text-blue-600 text-2xl">📍</span> Address
          </h3>
          <p className="text-gray-600">30 East 60th Street, Suite 2002, New York</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2">
            <span className="text-blue-600 text-2xl">📞</span> Appointments
          </h3>
          <p className="text-gray-600">832-841-4001</p>
          <p className="text-gray-600">info@bold-themes.com</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2">
            <span className="text-blue-600 text-2xl">⏰</span> Hours
          </h3>
          <p className="text-gray-600">Monday - Friday: 7 AM to 6 PM</p>
          <p className="text-gray-600">Saturday - Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}
